import Ember from "ember";

function webUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : "";
  } catch (error) {
    return "";
  }
}

export default Ember.Component.extend({
  activeIndex: 0,
  isPaused: false,
  errorMessage: "",
  _mounted: false,
  _timer: null,

  init() {
    this._super(...arguments);
    if (this.get("widget.settings.slides") === undefined) {
      this.set("widget.settings.slides", []);
    }
    if (this.get("widget.settings.intervalSeconds") === undefined) {
      this.set("widget.settings.intervalSeconds", 8);
    }
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.set("isPaused", true);
    }
  },

  slides() {
    const value = this.get("widget.settings.slides");
    return Array.isArray(value) ? value : [];
  },

  activeSlide: Ember.computed("widget.settings.slides.[]", "activeIndex", function () {
    return this.slides()[this.get("activeIndex")] || null;
  }),

  imageUrl: Ember.computed("activeSlide.imageUrl", function () {
    return webUrl(this.get("activeSlide.imageUrl"));
  }),

  hasSeveralSlides: Ember.computed("widget.settings.slides.[]", function () {
    return this.slides().length > 1;
  }),

  slidePosition: Ember.computed("widget.settings.slides.[]", "activeIndex", function () {
    return "Slide " + (this.get("activeIndex") + 1) + " of " + this.slides().length;
  }),

  canRotate: Ember.computed("widget.settings.intervalSeconds", "hasSeveralSlides", function () {
    const seconds = Number(this.get("widget.settings.intervalSeconds"));
    return this.get("hasSeveralSlides") && Number.isFinite(seconds) && seconds >= 5;
  }),

  didInsertElement() {
    this._super(...arguments);
    this._mounted = true;
    this.send("refresh");
  },

  configurationChanged: Ember.observer(
    "widget.settings.slides.[]",
    "widget.settings.intervalSeconds",
    "displayMode",
    function () {
      if (this._mounted && !this.isDestroying && !this.isDestroyed) {
        this.send("refresh");
      }
    }
  ),

  isRuntimeReady() {
    return this._mounted && !this.isDestroying && !this.isDestroyed &&
      this.get("displayMode") !== "settings";
  },

  stopTimer() {
    if (this._timer !== null) {
      Ember.run.cancel(this._timer);
      this._timer = null;
    }
  },

  startTimer() {
    this.stopTimer();
    if (!this.isRuntimeReady() || this.get("isPaused") || !this.get("canRotate")) {
      return;
    }
    this._timer = Ember.run.later(this, function () {
      this._timer = null;
      if (this.isRuntimeReady()) {
        this.move(1);
        this.startTimer();
      }
    }, Number(this.get("widget.settings.intervalSeconds")) * 1000);
  },

  move(offset) {
    const count = this.slides().length;
    if (count) {
      this.set("activeIndex", (this.get("activeIndex") + offset + count) % count);
    }
  },

  pauseRotation() {
    if (this.isRuntimeReady()) {
      this.set("isPaused", true);
      this.stopTimer();
    }
  },

  // Entering with the keyboard or pointer pauses until Resume is selected.
  focusIn() {
    this.pauseRotation();
  },

  mouseEnter() {
    this.pauseRotation();
  },

  willDestroyElement() {
    this._mounted = false;
    this.stopTimer();
    this._super(...arguments);
  },

  actions: {
    refresh() {
      this.stopTimer();
      if (!this.isRuntimeReady()) {
        return;
      }
      this.setProperties({ activeIndex: 0, errorMessage: "" });
      this.startTimer();
    },

    addSlide() {
      const next = this.slides().slice();
      next.push({
        title: "New slide",
        description: "",
        imageUrl: "",
        imageAlt: "",
        buttonLabel: "",
        targetType: "dashboard",
        target: "",
        queryParams: ""
      });
      this.set("widget.settings.slides", next);
    },

    removeSlide(slide) {
      this.set("widget.settings.slides", this.slides().filter(item => item !== slide));
    },

    previous() {
      this.pauseRotation();
      this.move(-1);
    },

    next() {
      this.pauseRotation();
      this.move(1);
    },

    toggleRotation() {
      this.toggleProperty("isPaused");
      this.startTimer();
    },

    navigate(slide) {
      if (!this.isRuntimeReady() || !slide) {
        return;
      }
      this.pauseRotation();
      this.set("errorMessage", "");
      const target = String(Ember.get(slide, "target") || "").trim();
      const queryParams = String(Ember.get(slide, "queryParams") || "").trim().replace(/^\?/, "");
      try {
        if (!target) {
          throw new Error("Configure a destination for this button.");
        }
        switch (Ember.get(slide, "targetType")) {
          case "dashboard":
            window.gotoDashboard(target, queryParams);
            break;
          case "form":
            window.gotoForm(target, true, null, queryParams, false);
            break;
          case "external": {
            const url = webUrl(target);
            if (!url) {
              throw new Error("Use a complete HTTP or HTTPS address.");
            }
            window.open(url, "_blank", "noopener,noreferrer");
            break;
          }
          default:
            throw new Error("Choose a supported destination type.");
        }
      } catch (error) {
        this.set("errorMessage", error.message || "The destination could not be opened.");
      }
    }
  }
});
