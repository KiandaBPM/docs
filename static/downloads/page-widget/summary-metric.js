import Ember from "ember";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  ruleEngine: Ember.inject.service("rule-engine"),
  process: null,
  isLoading: false,
  errorMessage: "",
  value: null,

  hasValue: Ember.computed("value", function() {
    return this.get("value") !== null;
  }),

  formattedValue: Ember.computed("value", function() {
    const value = this.get("value");
    return value === null ? "" : value.toLocaleString(undefined, {
      maximumFractionDigits: 2
    });
  }),

  init() {
    this._super(...arguments);
    this._mounted = false;
    this._revision = 0;
    this._running = false;
    this._refreshPending = false;

    // Keep the model's settings object and all existing saved values.
    if (this.get("widget.settings.tile") === undefined) {
      this.set("widget.settings.tile", "count");
    }
    if (this.get("widget.settings.queryType") === undefined) {
      this.set("widget.settings.queryType", "all");
    }
    if (this.get("widget.settings.conditions") === undefined) {
      this.set("widget.settings.conditions", []);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this._mounted = true;
    if (this.isRuntime()) {
      this.send("refresh");
    }
  },

  willDestroyElement() {
    this._mounted = false;
    this._revision += 1;
    this._refreshPending = false;
    this._super(...arguments);
  },

  isRuntime() {
    return this._mounted && !this.isDestroying && !this.isDestroyed &&
      this.get("displayMode") !== "settings";
  },

  isCurrent(revision, widget) {
    return this.isRuntime() && revision === this._revision &&
      widget === this.get("widget");
  },

  async drainRefreshes() {
    if (this._running || !this.isRuntime()) {
      return;
    }
    this._running = true;
    try {
      // Refreshes arriving during a request are coalesced into the next load.
      // Only one request for this stable aggregate ID runs at a time.
      while (this._refreshPending && this.isRuntime()) {
        this._refreshPending = false;
        await this.loadAggregate(this._revision);
      }
    } finally {
      this._running = false;
    }
  },

  async loadAggregate(revision) {
    const widget = this.get("widget");
    const publish = (properties) => {
      Ember.run.join(() => {
        if (this.isCurrent(revision, widget)) {
          this.setProperties(properties);
        }
      });
    };

    publish({ isLoading: true, errorMessage: "", value: null });
    try {
      const processName = this.get("widget.settings.processName");
      const tile = this.get("widget.settings.tile");
      const queryType = this.get("widget.settings.queryType");
      const fieldName = this.get("widget.settings.field.name");
      const conditions = JSON.parse(JSON.stringify(
        this.get("widget.settings.conditions") || []
      ));

      if (!processName || !String(processName).trim()) {
        throw new Error("Choose a process in the widget settings.");
      }
      if (["count", "sum", "avg"].indexOf(tile) === -1) {
        throw new Error("Choose Count, Sum, or Average.");
      }
      if (["all", "assignedTo", "createdBy", "modifiedBy"].indexOf(queryType) === -1) {
        throw new Error("Choose a supported record relationship.");
      }
      if (tile !== "count" && !fieldName) {
        throw new Error("Choose a number field for Sum or Average.");
      }
      if (!Array.isArray(conditions)) {
        throw new Error("The widget conditions must be an array.");
      }

      // This mutates our copy, including any relative date conditions.
      this.get("ruleEngine").parseDateConditions(conditions);
      const query = {
        action: "tile",
        info: {
          id: this.get("widget.id") + "-metric",
          process: processName,
          queryType: queryType,
          tile: tile
        },
        fields: tile === "count" ? ["__PROCESS_NAME"] : [fieldName],
        conditions: conditions,
        rowLimit: 1,
        preferOnline: true
      };
      if (tile !== "count") {
        query.info.field = fieldName;
      }

      const data = await Ember.run.join(() => this.get("store").query("summary", query));
      const raw = data.get("firstObject.properties.value");
      let nextValue = null;

      // Missing data stays missing; a returned numeric zero stays zero.
      if (raw !== undefined && raw !== null && raw !== "") {
        if (typeof raw !== "number" || !Number.isFinite(raw)) {
          throw new Error("The aggregate did not return a finite number.");
        }
        nextValue = raw;
      }
      publish({ value: nextValue });
    } catch (error) {
      publish({
        value: null,
        errorMessage: error && error.message
          ? error.message : "Unable to load this metric. Try Refresh."
      });
    } finally {
      publish({ isLoading: false });
    }
  },

  actions: {
    refresh() {
      if (!this.isRuntime()) {
        return;
      }
      this._revision += 1;
      this._refreshPending = true;
      // Kianda fires this action without awaiting it. loadAggregate catches
      // query/validation errors and publishes them in the component's view.
      this.drainRefreshes();
    }
  }
});
