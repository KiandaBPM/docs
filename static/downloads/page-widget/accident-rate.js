import Ember from "ember";

// Kianda page-widget example for Ember 2.18.
// Paste this module into Widget Code and accident-rate.hbs into Widget UI.
// Chart is supplied by Kianda's bundled Chart.js library.
//
// The tutorial uses complete UTC calendar months, including the current month.
// It does not infer the workspace timezone. The 24-month bound is a tutorial
// limit, not a Summaries API limit. The rate scale is an application setting,
// not a statement about a regulatory reporting standard.

const DEFAULT_SETTINGS = {
  monthsCount: 12,
  rateScale: 100000,
  incidentProcessName: "incident",
  incidentFieldName: "injuredPeopleCount",
  incidentDateFieldName: "processDate",
  hoursProcessName: "hours-worked-data",
  hoursFieldName: "DATAMS_NUM_EmployeeHours",
  hoursDateFieldName: "processDate"
};

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  ruleEngine: Ember.inject.service("rule-engine"),

  isLoading: false,
  errorMessage: null,
  rows: null,

  init() {
    this._super(...arguments);
    this._mounted = false;
    this._refreshRunning = false;
    this._refreshQueued = false;
    this._refreshRevision = 0;
    this._chart = null;
    this._settingsTimer = null;
    this._scheduledRefresh = null;
    // Stable for this component. It also separates a remount from an older
    // component whose final network request may still be completing.
    this._queryInstanceId = Ember.guidFor(this);
    this.set("rows", []);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    if (!this.get("widget")) {
      return;
    }

    Object.keys(DEFAULT_SETTINGS).forEach((name) => {
      const path = "widget.settings." + name;
      if (this.get(path) === undefined) {
        this.set(path, DEFAULT_SETTINGS[name]);
      }
    });
    if (this.get("widget.settings.conditions") === undefined) {
      this.set("widget.settings.conditions", []);
    }

    if (this._mounted) {
      this._scheduleRefresh();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this._mounted = true;
    this._scheduleRefresh();
  },

  // The settings dialog shares the widget model with the page component.
  // Debounce edits to query settings; filters already call actions.refresh,
  // so observing conditions as well would duplicate those refresh requests.
  settingsChanged: Ember.observer(
    "widget.settings.monthsCount",
    "widget.settings.rateScale",
    "widget.settings.incidentProcessName",
    "widget.settings.incidentFieldName",
    "widget.settings.incidentDateFieldName",
    "widget.settings.hoursProcessName",
    "widget.settings.hoursFieldName",
    "widget.settings.hoursDateFieldName",
    function () {
      if (!this._canRun()) {
        return;
      }
      this._refreshRevision += 1;
      this._settingsTimer = Ember.run.debounce(this, this._scheduleRefresh, 300);
    }
  ),

  _canRun() {
    return this._mounted && !this.isDestroying && !this.isDestroyed &&
      this.get("displayMode") !== "settings";
  },

  _isCurrent(revision, widget) {
    return this._canRun() && revision === this._refreshRevision &&
      widget === this.get("widget");
  },

  _scheduleRefresh() {
    if (this._settingsTimer) {
      Ember.run.cancel(this._settingsTimer);
      this._settingsTimer = null;
    }
    if (this._canRun()) {
      this._scheduledRefresh = Ember.run.scheduleOnce(
        "afterRender", this, this._runScheduledRefresh
      );
    }
  },

  _runScheduledRefresh() {
    this._scheduledRefresh = null;
    this.requestRefresh();
  },

  requestRefresh() {
    if (!this._canRun()) {
      return;
    }
    if (this._settingsTimer) {
      Ember.run.cancel(this._settingsTimer);
      this._settingsTimer = null;
    }
    if (this._scheduledRefresh) {
      Ember.run.cancel(this._scheduledRefresh);
      this._scheduledRefresh = null;
    }
    this._refreshRevision += 1;
    this._refreshQueued = true;
    this.setProperties({ isLoading: true, errorMessage: null });

    if (!this._refreshRunning) {
      // The host does not await this work. _drainRefreshes handles errors.
      this._drainRefreshes();
    }
  },

  async _drainRefreshes() {
    this._refreshRunning = true;
    try {
      while (this._refreshQueued && this._canRun()) {
        this._refreshQueued = false;
        const revision = this._refreshRevision;
        const widget = this.get("widget");

        try {
          Ember.run.join(() => {
            this.set("rows", []);
            this._destroyChart();
          });
          const snapshot = this._snapshot(widget);
          const rows = await this._loadRows(snapshot, revision, widget);

          Ember.run.join(() => {
            if (this._isCurrent(revision, widget)) {
              this._drawChart(rows, snapshot.rateScale);
              this.setProperties({ rows: rows, errorMessage: null });
            }
          });
        } catch (error) {
          Ember.run.join(() => {
            if (this._isCurrent(revision, widget)) {
              this._destroyChart();
              this.setProperties({
                rows: [],
                errorMessage: error && error.message
                  ? error.message
                  : "The monthly totals could not be loaded. Use Refresh to retry."
              });
            }
          });
        }
      }
    } finally {
      this._refreshRunning = false;
      Ember.run.join(() => {
        if (this._canRun()) {
          this.set("isLoading", false);
        }
      });
    }
  },

  _requiredName(value, label) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Configure " + label + " in the widget settings.");
    }
    // Keep the exact storage name, including any '?' suffix.
    return value;
  },

  _cloneConditions(conditions) {
    if (!Array.isArray(conditions)) {
      throw new Error("The widget conditions must be an array of condition groups.");
    }
    return JSON.parse(JSON.stringify(conditions));
  },

  _snapshot(widget) {
    const settings = widget.get("settings");
    const months = Number(settings.monthsCount);
    const rateScale = Number(settings.rateScale);

    if (!Number.isInteger(months) || months < 1 || months > 24) {
      throw new Error("Choose between 1 and 24 whole UTC months for this example.");
    }
    if (!Number.isFinite(rateScale) || rateScale <= 0) {
      throw new Error("The rate scale must be a finite number greater than zero.");
    }

    // Snapshot the complete current array once, including runtime filterId
    // groups. Kianda, not this component, removes those groups on clear/save.
    const sharedConditions = this._cloneConditions(settings.conditions || []);
    sharedConditions.forEach((group) => {
      if (!group || !Array.isArray(group.conditions)) {
        throw new Error("Each condition group must contain a conditions array.");
      }
      if (group.group !== undefined && group.group !== "and") {
        throw new Error(
          "This monthly chart adds its own date range. Use AND between " +
          "top-level condition groups; OR conditions inside a group are supported."
        );
      }
    });

    return {
      widgetId: this._requiredName(widget.get("id"), "the widget ID"),
      rateScale: rateScale,
      sharedConditions: sharedConditions,
      periods: this._utcPeriods(months, new Date()),
      incidents: {
        process: this._requiredName(settings.incidentProcessName, "the incident process name"),
        field: this._requiredName(settings.incidentFieldName, "the incident number field name"),
        dateField: this._requiredName(settings.incidentDateFieldName, "the incident date field name")
      },
      hours: {
        process: this._requiredName(settings.hoursProcessName, "the hours process name"),
        field: this._requiredName(settings.hoursFieldName, "the hours number field name"),
        dateField: this._requiredName(settings.hoursDateFieldName, "the hours date field name")
      }
    };
  },

  _utcPeriods(months, now) {
    const periods = [];
    for (let offset = months - 1; offset >= 0; offset -= 1) {
      const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - offset, 1));
      const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - offset + 1, 1));
      periods.push({
        key: start.toISOString().slice(0, 7),
        start: start.toISOString(),
        end: new Date(next.getTime() - 1).toISOString()
      });
    }
    return periods;
  },

  async _queryTotal(snapshot, period, datasetName) {
    const dataset = snapshot[datasetName];
    // Clone again for each query so its date group cannot affect another
    // dataset or the live widget settings. Do not remove filterId groups.
    const conditions = this._cloneConditions(snapshot.sharedConditions);
    conditions.push({
      id: "afr-utc-period-" + period.key,
      group: "and",
      conditions: [{
        operator: "isBetweenDates",
        arg1: {
          name: dataset.dateField,
          type: "field",
          fieldType: "fields/field-date"
        },
        arg2: { date1: period.start, date2: period.end },
        group: "and"
      }]
    });
    this.get("ruleEngine").parseDateConditions(conditions);

    const query = {
      action: "tile",
      info: {
        id: snapshot.widgetId + "-afr-" + this._queryInstanceId + "-" + datasetName + "-" + period.key,
        process: dataset.process,
        field: dataset.field,
        queryType: "all",
        tile: "sum"
      },
      fields: [dataset.field],
      conditions: conditions,
      rowLimit: 1,
      preferOnline: true
    };
    const data = await Ember.run.join(() => this.get("store").query("summary", query));

    // Copy the primitive value immediately; do not retain a live aggregate
    // record as the component's display state.
    const value = data.get("firstObject.properties.value");
    if (value === undefined || value === null || value === "") {
      return null;
    }
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new Error("The " + datasetName + " aggregate did not return a finite number.");
    }
    return value;
  },

  _settled(promise) {
    return promise.then(
      (value) => ({ ok: true, value: value }),
      (error) => ({ ok: false, error: error })
    );
  },

  async _loadRows(snapshot, revision, widget) {
    const rows = [];
    // Process months sequentially. Within one month, the two distinct dataset
    // IDs permit two parallel queries. Always wait for BOTH to settle, even
    // if one fails, before starting a queued refresh with those same IDs.
    for (let index = 0; index < snapshot.periods.length; index += 1) {
      if (!this._isCurrent(revision, widget)) {
        return null;
      }
      const period = snapshot.periods[index];
      const pair = await Promise.all([
        this._settled(this._queryTotal(snapshot, period, "incidents")),
        this._settled(this._queryTotal(snapshot, period, "hours"))
      ]);
      if (!this._isCurrent(revision, widget)) {
        return null;
      }
      if (!pair[0].ok || !pair[1].ok) {
        throw (!pair[0].ok ? pair[0].error : pair[1].error);
      }

      const incidents = pair[0].value;
      const hours = pair[1].value;
      let rate = null;
      let note = "";
      if (incidents === null || hours === null) {
        note = "An aggregate is missing.";
      } else if (hours <= 0) {
        note = "Worked hours must be greater than zero.";
      } else {
        rate = (incidents * snapshot.rateScale) / hours;
        if (!Number.isFinite(rate)) {
          rate = null;
          note = "The calculated rate is not finite.";
        }
      }

      rows.push({
        period: period.key,
        incidents: incidents,
        hours: hours,
        rate: rate,
        incidentText: incidents === null ? "No data" : String(incidents),
        hoursText: hours === null ? "No data" : String(hours),
        rateText: rate === null ? "No data" : rate.toFixed(2),
        note: note
      });
    }
    return rows;
  },

  _drawChart(rows, rateScale) {
    if (typeof Chart !== "function") {
      throw new Error("The bundled Chart.js library is unavailable.");
    }
    const canvas = this.element.querySelector("[data-accident-rate-chart]");
    if (!canvas) {
      throw new Error("The runtime chart canvas is unavailable.");
    }
    this._chart = new Chart(canvas, {
      type: "bar",
      data: {
        labels: rows.map((row) => row.period),
        datasets: [{
          label: "Rate per " + rateScale + " worked hours",
          data: rows.map((row) => row.rate),
          backgroundColor: "rgba(54, 162, 235, 0.4)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  },

  _destroyChart() {
    const chart = this._chart;
    this._chart = null;
    if (chart) {
      chart.destroy();
    }
  },

  willDestroyElement() {
    this._mounted = false;
    this._refreshRevision += 1;
    this._refreshQueued = false;
    if (this._settingsTimer) {
      Ember.run.cancel(this._settingsTimer);
    }
    if (this._scheduledRefresh) {
      Ember.run.cancel(this._scheduledRefresh);
    }
    try {
      this._destroyChart();
    } finally {
      this._super(...arguments);
    }
  },

  actions: {
    refresh() {
      // Called without arguments by the widget frame and connected filters.
      this.requestRefresh();
    }
  }
});
