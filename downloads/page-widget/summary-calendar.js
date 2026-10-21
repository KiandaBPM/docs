import Ember from "ember";

// Uses the FullCalendar v6 global Calendar API and its DayGrid views.
// Teaching-example limits, not limits imposed by the Summaries API.
const PAGE_SIZE = 100;
const MAX_EVENTS = 2000;
const MAX_PAGES_PER_QUERY = 20;
const assetLoads = Object.create(null);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

// Shared assets remain loaded when a widget is destroyed: another widget may
// still use them. Configure one compatible FullCalendar version for the page.
function loadAsset(url, isStylesheet) {
  const key = (isStylesheet ? "css:" : "js:") + url;
  if (!assetLoads[key]) {
    assetLoads[key] = new Promise(function(resolve, reject) {
      const element = document.createElement(isStylesheet ? "link" : "script");
      if (isStylesheet) {
        element.rel = "stylesheet";
        element.href = url;
      } else {
        element.src = url;
        element.async = true;
      }
      element.onload = function() {
        resolve();
      };
      element.onerror = function() {
        element.parentNode.removeChild(element);
        reject(new Error("Unable to load calendar asset: " + url));
      };
      document.head.appendChild(element);
    }).catch(function(error) {
      delete assetLoads[key];
      throw error;
    });
  }
  return assetLoads[key];
}

async function loadCalendarLibrary(scriptUrl, stylesheetUrl) {
  const loads = [];
  if (!(window.FullCalendar && window.FullCalendar.Calendar)) {
    loads.push(loadAsset(scriptUrl, false));
  }
  if (stylesheetUrl) {
    loads.push(loadAsset(stylesheetUrl, true));
  }
  await Promise.all(loads);
  if (!(window.FullCalendar && window.FullCalendar.Calendar)) {
    throw new Error("The script must expose the FullCalendar.Calendar global API.");
  }
  return window.FullCalendar.Calendar;
}

function dateCondition(fieldName, operator, isoDate) {
  return {
    operator: operator,
    arg1: {
      name: fieldName,
      type: "field",
      fieldType: "fields/field-date"
    },
    arg2: { type: "text", text: isoDate, value: isoDate },
    group: "and"
  };
}

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  ruleEngine: Ember.inject.service("rule-engine"),
  process: null,
  isLoading: false,
  errorMessage: null,

  init() {
    this._super(...arguments);
    if (this.get("widget.settings.conditions") == null) {
      this.set("widget.settings.conditions", []);
    }
    this._requestId = 0;
    this._setupId = 0;
    this._calendar = null;
    this._initializing = false;
    this._stopped = false;
  },

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce("afterRender", this, this.rebuildCalendar);
  },

  // Settings and runtime views share the widget model. Rebuild if a calendar
  // option changes; a page-filter refresh only refetches the events.
  configurationChanged: Ember.observer(
    "displayMode",
    "widget.settings.fullCalendarUrl",
    "widget.settings.fullCalendarCssUrl",
    "widget.settings.calendarView",
    "widget.settings.showCalendarButtons",
    "widget.settings.processName",
    "widget.settings.titleField.name",
    "widget.settings.startDateField.name",
    "widget.settings.endDateField.name",
    function() {
      if (this.element && !this.isUnavailable()) {
        Ember.run.scheduleOnce("afterRender", this, this.rebuildCalendar);
      }
    }
  ),

  isUnavailable() {
    return this._stopped || this.isDestroying || this.isDestroyed;
  },

  isCurrent(requestId) {
    return !this.isUnavailable() &&
      this.get("displayMode") !== "settings" &&
      requestId === this._requestId;
  },

  setStatus(properties) {
    if (!this.isUnavailable()) {
      Ember.run.join(() => {
        if (!this.isUnavailable()) {
          this.setProperties(properties);
        }
      });
    }
  },

  rebuildCalendar() {
    if (this.isUnavailable()) {
      return;
    }
    const initialDate = this._calendar ? this._calendar.getDate() : null;
    this._setupId++;
    this._requestId++;
    if (this._calendar) {
      this._calendar.destroy();
      this._calendar = null;
    }
    this._initializing = false;
    if (this.get("displayMode") !== "settings") {
      // startCalendar handles its own errors; Ember actions are not awaited.
      this.startCalendar(initialDate);
    }
  },

  async startCalendar(initialDate) {
    if (this.isUnavailable() || this.get("displayMode") === "settings") {
      return;
    }
    const setupId = ++this._setupId;
    this._initializing = true;
    this.setStatus({ isLoading: true, errorMessage: null });

    try {
      const scriptUrl = (this.get("widget.settings.fullCalendarUrl") || "").trim();
      const cssUrl = (this.get("widget.settings.fullCalendarCssUrl") || "").trim();
      if (!scriptUrl) {
        throw new Error("Configure the FullCalendar JavaScript URL in widget settings.");
      }
      const Calendar = await loadCalendarLibrary(scriptUrl, cssUrl);
      if (this.isUnavailable() || setupId !== this._setupId ||
          this.get("displayMode") === "settings") {
        return;
      }

      const element = this.element.querySelector(".summary-calendar-host");
      if (!element) {
        throw new Error("The calendar container is unavailable.");
      }
      const options = {
        // Explicit policy for this example: all-day dates are interpreted in UTC.
        timeZone: "UTC",
        initialView: this.get("widget.settings.calendarView") || "dayGridMonth",
        editable: false,
        droppable: false,
        selectable: false,
        headerToolbar: this.get("widget.settings.showCalendarButtons") === "no" ? false : {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay"
        },
        // FullCalendar accepts a Promise from an event-source function.
        events: (info) => this.loadEvents(info),
        eventClick: (info) => this.openInstance(info.event.extendedProps.instanceName)
      };
      if (initialDate) {
        options.initialDate = initialDate;
      }
      this._calendar = new Calendar(element, options);
      this._calendar.render();
    } catch (error) {
      if (!this.isUnavailable() && setupId === this._setupId) {
        if (this._calendar) {
          this._calendar.destroy();
          this._calendar = null;
        }
        this.setStatus({ isLoading: false, errorMessage: error.message || "Unable to create the calendar." });
      }
    } finally {
      if (setupId === this._setupId) {
        this._initializing = false;
      }
    }
  },

  async loadEvents(info) {
    const requestId = ++this._requestId;
    if (!this.isCurrent(requestId)) {
      return [];
    }
    this.setStatus({ isLoading: true, errorMessage: null });

    try {
      const settings = clone(this.get("widget.settings"));
      const processName = settings.processName;
      const titleField = settings.titleField && settings.titleField.name;
      const startField = settings.startDateField && settings.startDateField.name;
      const endField = settings.endDateField && settings.endDateField.name;
      if (!processName || !titleField || !startField) {
        throw new Error("Choose a process, title field and start date field in widget settings.");
      }
      const baseConditions = settings.conditions || [];
      if (baseConditions.some(group => (group.group || "and") !== "and")) {
        throw new Error("This example requires condition groups joined with AND. " +
          "Place OR alternatives inside a group so the calendar can add its date range.");
      }

      // FullCalendar's requested end is exclusive. These disjoint queries cover
      // all overlaps, including starts before the range and instances with no end.
      const rangeStart = info.start.toISOString();
      const rangeEnd = info.end.toISOString();
      const ranges = [{
        suffix: "starts",
        conditions: [
          dateCondition(startField, "gte", rangeStart),
          dateCondition(startField, "lt", rangeEnd)
        ]
      }];
      if (endField) {
        ranges.push({
          suffix: "overlaps",
          conditions: [
            dateCondition(startField, "lt", rangeStart),
            dateCondition(endField, "gte", rangeStart)
          ]
        });
      }

      const fields = ["__NAME", titleField, startField, endField].filter(function(field, index, all) {
        return field && all.indexOf(field) === index;
      });
      const events = [];
      const seen = Object.create(null);
      for (const range of ranges) {
        // Includes current runtime filterId groups; never edit shared settings.
        const conditions = clone(baseConditions);
        conditions.push({
          id: this.get("widget.id") + "-calendar-range-" + range.suffix,
          group: "and",
          conditions: range.conditions
        });
        this.get("ruleEngine").parseDateConditions(conditions);

        // A full last page needs one more request to establish completion.
        // With this example's cap, page 20 is an empty-page probe or an error.
        for (let page = 0; page <= MAX_PAGES_PER_QUERY; page++) {
          if (!this.isCurrent(requestId)) {
            return [];
          }
          const query = {
            action: "list",
            info: {
              process: processName,
              queryType: "all",
              id: this.get("widget.id") + "-summary-calendar-" + range.suffix,
              isListWidget: true,
              isOData: true,
              page: page,
              sortFieldType: "fields/field-textbox"
            },
            orderBy: "__NAME",
            orderAscending: true,
            fields: fields,
            conditions: clone(conditions),
            rowLimit: PAGE_SIZE,
            preferOnline: true
          };
          const result = await Ember.run.join(() => this.get("store").query("summary", query));
          if (!this.isCurrent(requestId)) {
            return [];
          }
          const records = result.toArray();
          if (page === MAX_PAGES_PER_QUERY && records.length) {
            throw new Error("The calendar exceeded its 2,000-record loading limit. " +
              "Choose a narrower view or add more filters.");
          }
          for (const record of records) {
            const name = record.get("name");
            if (!seen[name]) {
              const event = this.toCalendarEvent(record, titleField, startField, endField);
              seen[name] = true;
              events.push(event);
              if (events.length > MAX_EVENTS) {
                throw new Error("More than 2,000 events overlap this view. " +
                  "Choose a narrower view or add more filters.");
              }
            }
          }
          if (records.length < PAGE_SIZE) {
            break;
          }
        }
      }
      if (!this.isCurrent(requestId)) {
        return [];
      }
      this.setStatus({ isLoading: false, errorMessage: null });
      return events;
    } catch (error) {
      if (!this.isCurrent(requestId)) {
        return [];
      }
      // A failed or capped load is an error, never a partial successful calendar.
      this.setStatus({ isLoading: false, errorMessage: error.message || "Unable to load calendar events." });
      throw error;
    }
  },

  toCalendarEvent(record, titleField, startField, endField) {
    const name = record.get("name");
    const properties = record.get("properties") || {};
    const startValue = properties[startField + "_utc"];
    const endValue = endField ? properties[endField + "_utc"] : null;
    if (!name || !startValue) {
      throw new Error("A calendar result is missing its instance name or start date.");
    }
    // UTC-aware parsing also handles an API _utc value that omits a trailing Z.
    const start = window.moment.utc(startValue).startOf("day");
    const end = endValue ? window.moment.utc(endValue).startOf("day") : start.clone();
    if (!start.isValid() || !end.isValid() || end.isBefore(start)) {
      throw new Error("Instance " + name + " has an invalid calendar date range.");
    }
    const title = properties[titleField];
    return {
      id: name,
      allDay: true,
      title: title === null || title === undefined || title === "" ? name : String(title),
      start: start.format("YYYY-MM-DD"),
      // A configured end field is inclusive; FullCalendar's end is exclusive.
      end: end.add(1, "day").format("YYYY-MM-DD"),
      extendedProps: { instanceName: name }
    };
  },

  openInstance(name) {
    if (this.isUnavailable() || this.get("displayMode") === "settings" ||
        this.get("widget.settings.openOnClick") === "no" || !name) {
      return;
    }
    window.showModalForm(name, false, "", false, () => {
      // The callback is a refresh opportunity; no save outcome is assumed.
      if (!this.isUnavailable() && this.get("displayMode") !== "settings") {
        Ember.run.join(() => this.send("refresh"));
      }
    }, false);
  },

  actions: {
    refresh() {
      if (this.isUnavailable() || this.get("displayMode") === "settings") {
        return;
      }
      if (this._calendar) {
        this._calendar.refetchEvents();
      } else if (!this._initializing) {
        this.startCalendar();
      }
    }
  },

  willDestroyElement() {
    this._stopped = true;
    this._requestId++;
    this._setupId++;
    if (this._calendar) {
      this._calendar.destroy();
      this._calendar = null;
    }
    this._super(...arguments);
  }
});
