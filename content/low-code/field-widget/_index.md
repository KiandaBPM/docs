---
title: "Field widget development"
linkTitle: "Field widget"
weight: 1
description: "Develop custom Kianda field widgets with four display modes, field data binding, validation, child fields, and asynchronous integrations."
typora-root-url: ..\..\..\static
---

A custom field widget renders and edits data in a Kianda form. It can provide a simple input, manage a structured value such as a location or a collection of uploaded files, or integrate an external control such as a payment element. Its main responsibility is to keep the **field model** consistent with what the user sees and enters.

This guide builds a complete **Reference text** field and a complete **Geolocation** field. It then develops a public-file upload example and explains the component patterns needed for a Stripe integration. Along the way, it covers display modes, change notifications, configuration validation, process APIs, and child fields.

The examples target **Kianda's Ember.js widget environment**. They use classic Ember components, Handlebars templates, and native JavaScript Promises.

## How a field widget works

A widget has two authoring surfaces:

| Part | Responsibility |
| --- | --- |
| **Widget UI** — Handlebars (`.hbs`) | Renders the Designer preview, editable field, read-only field, and configuration interface. |
| **Widget Code** — JavaScript (`.js`) | Defines the Ember component: properties, computed values, actions, lifecycle behaviour, and integration logic. |

Kianda supplies the component with `field`, the field model being rendered, and `displayMode`, which selects the appropriate view. The associated process is available through `this.get("field.process")`.

Field widgets and [rule widgets](/low-code/rule-widget/) share Ember component techniques, but have different runtime responsibilities:

| Concern | Field widget | Rule widget |
| --- | --- | --- |
| Main purpose | Render and manipulate a field's data. | Perform a business action, then return control to the rule engine. |
| Runtime behaviour | Respond to rendering, input events, and component lifecycle events. | Run through `execute()`. |
| Template | Provides four field views. | Provides the rule's configuration UI. |
| Designer configuration | `field.settings` | `rule.settings` |
| Asynchronous work | The component manages its own pending state, errors, and completion. | The rule engine waits for the Promise returned by `execute()`. |

**A field widget does not call `process.save()` to persist its changes.** It updates field data in the current process instance. The process's Save rule or surrounding save/commit workflow handles persistence. A remote upload or payment may have an immediate external effect, independently of whether the process is subsequently saved.

## 1. Create a field widget

You need access to **Administration > Developer**, normally through an Administrator or Developer role.

1. Open **Administration > Developer** and click **New widget**.
2. Enter a title, choose a unique ID and icon, and select **Field** as the widget type.
3. Open the **Widget UI** and **Widget Code** editors.
4. Add the template and JavaScript from the first example below.
5. Click **Update** to compile the widget.
6. Open a test process in **Administration > Designer**. Add the widget from **Controls > Custom** and configure it.

Author the JavaScript as an Ember component module. Kianda creates and renders the component; you do not need to instantiate it yourself.

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  // Component properties, methods, and actions go here.
});
```

Use normal method syntax for component methods so that `this` refers to the component instance. Arrow functions are useful inside methods for callbacks that need to retain that instance.

## 2. Build a complete Reference text field

This first widget stores the same string in `field.text` and `field.value`. Its settings let the designer choose a placeholder. It demonstrates the complete path from user input to field data and attached rules.

### Widget UI

Paste this complete template into **Widget UI**:

```handlebars
{{#if (eq this.displayMode "design")}}
  <input
    type="text"
    class="form-control"
    aria-label={{this.field.title}}
    placeholder={{this.field.settings.placeholder}}
    disabled>
{{/if}}

{{#if (eq this.displayMode "edit")}}
  <input
    type="text"
    class="form-control"
    aria-label={{this.field.title}}
    value={{this.field.text}}
    placeholder={{this.field.settings.placeholder}}
    required={{this.field.required}}
    onchange={{action "updateText"}}>
{{/if}}

{{#if (eq this.displayMode "display")}}
  {{#if this.field.text}}
    <span>{{this.field.text}}</span>
  {{else}}
    <span class="text-muted">No reference entered.</span>
  {{/if}}
{{/if}}

{{#if (eq this.displayMode "settings")}}
  <div class="form-group">
    <label for={{concat this.elementId "-placeholder"}}>Placeholder</label>
    {{input
      id=(concat this.elementId "-placeholder")
      type="text"
      class="form-control"
      value=this.field.settings.placeholder}}
    <p class="help-block">A hint shown when the input is empty.</p>
  </div>
{{/if}}
```

The `eq` helper comes from the available `ember-truth-helpers` addon. Each branch uses one of Kianda's exact mode strings. The Designer preview is a disabled input; the read-only view displays the stored text.

### Widget Code

Paste this complete module into **Widget Code**:

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  settings() {
    const field = this.get("field");

    if (field.get("settings.placeholder") === undefined) {
      field.set("settings.placeholder", "Enter a reference");
    }
  },

  actions: {
    updateText(event) {
      if (this.get("displayMode") !== "edit" ||
          this.get("field.enabled") === false ||
          this.get("field.visible") === false) {
        return;
      }

      const field = this.get("field");
      const value = event.target.value;

      field.set("text", value);
      field.set("value", value);
    }
  }
});
```

The native `change` event passes its event object to the action. Reading `event.target.value` makes the input source explicit. For this text input, the change is committed when the user finishes editing and leaves the input. If you choose `oninput` instead, updates occur while typing and can run attached rules on every keystroke.

The order of the setters is deliberate: **set the readable text first, then set the value**. Kianda observes `field.value` to trigger the field's rules, so those rules should see the corresponding text when they run. Replacing the top-level value already provides the notification; there is no additional `notifyPropertyChange()` call here.

`settings()` supplies a Designer default only when the property is absent. An intentionally empty placeholder survives reopening the configuration. It does not initialize or overwrite the user's runtime value.

### Try the complete widget

1. Click **Update**, add the field to a test process, and open its settings.
2. Change the placeholder, save the field configuration, and save the process design.
3. Preview the process. Enter a reference and leave the input. Inspect the field: both `text` and `value` should contain the entered string.
4. Attach a simple rule to the field and verify that committing an edit triggers it.
5. Make the field required. Clear the input and verify that the normal submission workflow detects the missing value.
6. Disable the field through Designer or a rule. It should render its stored text through the `display` branch.
7. Save the process instance through its normal workflow, reopen it, and confirm that the value is retained.

## 3. Understand the field model

The widget operates on an Ember Data field model. You do not need to reproduce the model definition in your widget. These are the properties most relevant to authors:

| Property | Meaning and intended use |
| --- | --- |
| `field.name` | The field's name, used when resolving fields within a process. |
| `field.title` | Its user-facing title. |
| `field.type` | Its internal control/widget type. |
| `field.text` | A readable string representation of the field's data; defaults to `""`. |
| `field.value` | The underlying value. It can hold a simple value, an object, or an array. |
| `field.settings` | Designer configuration. A separate empty object is created automatically for each field model. |
| `field.help`, `field.showTitle` | Help text and title-display metadata. `showTitle` defaults to `true`. |
| `field.visible` | Whether the field is rendered in the form. Defaults to `true`. |
| `field.enabled` | Whether it is editable. `false` makes Kianda render it in `display` mode. Defaults to `true`. |
| `field.required` | Whether the commit workflow must reject a missing field value/text. Defaults to `false`. |
| `field.fields` | Child field models owned by this control. |
| `field.parentField` | Its parent field, when nested inside another control. |
| `field.parentForm`, `field.form` | Form relationship and the resolved containing-form property. |
| `field.process` | The wrapping process or process instance, derived through the containing form. |
| `field.datasource` | A data-source reference for controls that use one. |
| `field.rules` | Rules attached to the field. |
| `field.class`, `field.customCssClass` | Styling metadata available on the model. |

Typical widgets respect `visible`, `enabled`, and `required`. Designers choose their initial values; specialized rules can change them during execution. Do not repurpose these flags as component-local loading or error state.

### Decide what belongs in the model

Use the field attributes for data that should be part of the process:

- A reference field can use the same string for `text` and `value`.
- A location field can store coordinates in `value` and a formatted coordinate string in `text`.
- An upload field can store file references in `value` and filenames in `text`.
- A compound control can own real child models through `fields`.

Use component properties such as `isBusy`, `errorMessage`, or `selectedTab` for temporary UI state. Keep browser objects, DOM nodes, upload `File` objects, service instances, and SDK instances on the component. Store serializable results in the field model.

Keep Designer choices in `field.settings`. The model already initializes this object; assigning a new empty settings object during rendering would discard saved configuration. The property `field.settings` and the component method `settings()` are different things: one holds data, and the other is a convenience hook for the configuration UI.

### Rendering, rule notification, and saving

These are related but separate behaviours:

| Update | Rendering/data tracking | Attached rules |
| --- | --- | --- |
| Replace `field.value` through `field.set("value", nextValue)` | The new value is tracked. | A changed value triggers the field's rules. |
| Change only `field.text` | The text is tracked. | A custom widget must also notify `value` if this edit should trigger its rules. |
| Modify a property inside the existing `field.value` object | Use Ember-aware setters to update bindings. The data remains part of the field value. | Explicitly notify `value` after the logical update. |
| Modify the existing `field.value` array | Use Ember-aware collection changes to update bindings. The data remains tracked. | Explicitly notify `value` after the logical update. |

None of these operations saves the process instance by itself.

A custom field that intentionally stores its data only as text can notify the observed property explicitly:

```javascript
field.set("text", nextText);
field.notifyPropertyChange("value");
```

Kianda's `process.setField()` does this internally for built-in text-only controls when appropriate. Directly setting a custom widget's `field.text` does not gain that behaviour automatically.

Treat a notification as a deliberate point at which attached rules can run. Finish the associated text and data updates first. Avoid adding an extra notification after a top-level value replacement, and avoid initialization code that rewrites the field value on every render.

## 4. Render the four modes and use lifecycle hooks

`this.get("displayMode")` is always available on the field component.

| Mode string | Where it is used | What to render |
| --- | --- | --- |
| `"design"` | The Designer canvas. | A useful preview or description of the control. |
| `"edit"` | An editable field in a running form. | Inputs and actions that manipulate the field's data. |
| `"display"` | A read-only field, including a disabled field. | A readable representation of stored data. |
| `"settings"` | The field's configuration interface in Designer. | Controls bound to `field.settings`. |

Keep active uploads, payment controls, location acquisition, and other user operations in the editable view. The Designer preview should help a designer understand the widget without initiating those operations.

### Kianda's convenience hooks

On component insertion, Kianda invokes the convenience method for the current mode if you have defined it:

| Method | Invocation |
| --- | --- |
| `edit()` | On insertion when `displayMode === "edit"`. |
| `display()` | On insertion when `displayMode === "display"`. |
| `settings()` | On insertion when `displayMode === "settings"`. |

**There is no `design()` convenience method.** Render the design view through the template and use normal Ember lifecycle techniques when additional behaviour is needed.

These methods are insertion conveniences, not a promise-based execution pipeline. **Kianda does not await Promises returned by field mode hooks.** Declaring `async edit()` does not pause rendering, submission, or the rule engine. Start asynchronous work with explicit error handling and represent pending state in the component.

Do not assume that a convenience method will run whenever `displayMode` changes. If a long-lived resource must stop when a field becomes read-only, respond to that change explicitly and also clean it up when the component is destroyed. The Geolocation example demonstrates this.

### Normal Ember hooks remain available

Use `init()` for per-instance component setup, such as allocating an array or initializing integration state. Call `this._super(...arguments)` when overriding an inherited lifecycle hook.

Mount a library that needs a DOM container after insertion, through `edit()` or an appropriate `didInsertElement()` implementation. `init()` runs before the DOM is available. If you override `didInsertElement()`, retain the superclass call; do not also invoke the same mode method manually and initialize the control twice.

Use `willDestroyElement()` to release DOM-related resources, listeners, watches, and timers. Match model-event subscriptions with cleanup as well, as shown in the next section. Ember's [component lifecycle documentation](https://guides.emberjs.com/v2.18.0/components/the-component-lifecycle/) explains insertion and destruction hooks.

Native browser and external-library callbacks should enter Ember's run loop before changing bound state. Use `Ember.run(() => { ... })`, and check that the component still exists and belongs to the intended field before applying a delayed result. See the [Ember 2.18 run-loop guide](https://guides.emberjs.com/v2.18.0/applications/run-loop/).

## 5. Validate configuration and runtime input

Configuration validation and runtime missing-input validation serve different purposes. A valid Designer configuration does not establish that a user has entered a valid runtime result.

### Required settings controls

Use `required=true` on Ember inputs or platform pickers when a Designer setting is mandatory. Native HTML inputs can use `required="required"` for the same required-input check.

For example, a control that copies file details into two utility fields could use this settings fragment:

```handlebars
{{#if (eq this.displayMode "settings")}}
  <div class="form-group">
    <label>Filename field</label>
    {{field-picker
      process=this.field.process
      required=true
      allowText=false
      selectForms=false
      selectFields=true
      value=this.field.settings.filenameField}}
  </div>

  <div class="form-group {{this.mappingErrorClass}}">
    <label>File URL field</label>
    {{field-picker
      process=this.field.process
      required=true
      allowText=false
      selectForms=false
      selectFields=true
      value=this.field.settings.fileUrlField}}
  </div>
{{/if}}
```

The required pickers prevent saving configuration with missing selections. For a relationship between settings, such as requiring two different destination fields, subscribe to the field model's `saving` event.

### Custom configuration checks with `saving`

The event receives the same validation argument contract used for custom rules:

- Set `args.isError = true` to reject the configuration save.
- Append a clear message to `args.errors`.
- Preserve errors already added by other validators.

The following component methods implement the additional check for the settings fragment above. Merge them into that widget's component; retain any other initialization already performed by its `settings()` method.

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  mappingErrorClass: "",

  settings() {
    this._detachSettingsValidation();
    this.set("mappingErrorClass", "");
    this._settingsField = this.get("field");
    this._settingsField.on("saving", this, this._validateSettings);
  },

  _validateSettings(args) {
    const field = this._settingsField;
    const filenameRef = field.get("settings.filenameField");
    const urlRef = field.get("settings.fileUrlField");
    let message = null;

    if (!filenameRef || !urlRef ||
        filenameRef.type !== "field" || urlRef.type !== "field" ||
        !filenameRef.name || !urlRef.name) {
      message = "Select a filename field and a file URL field.";
    } else if (filenameRef.name === urlRef.name) {
      message = "Filename and file URL must use different fields.";
    } else if (filenameRef.name === field.get("name") ||
               urlRef.name === field.get("name")) {
      message = "Choose utility fields other than this upload field.";
    }

    this.set("mappingErrorClass", message ? "has-error" : "");

    if (message) {
      args.isError = true;
      args.errors.push(message);
    }
  },

  _detachSettingsValidation() {
    if (this._settingsField) {
      this._settingsField.off("saving", this, this._validateSettings);
      this._settingsField = null;
    }
  },

  willDestroy() {
    this._detachSettingsValidation();
    this._super(...arguments);
  }
});
```

Using a stable function reference makes it possible to remove exactly the listener this component added. Detaching before registering also prevents duplicated validation if settings initialization repeats. This follows Ember's [Evented `on`/`off` contract](https://api.emberjs.com/ember/2.18/classes/evented/).

Perform these checks synchronously. Do not assume that the `saving` event waits for asynchronous validation. If configuration needs remote information, load it in the settings UI beforehand and validate the resulting state when saving.

### Runtime required fields

During submission, Kianda uses `field.required` and the contents of `field.text`/`field.value` to determine whether required input is missing. A custom control must populate these attributes with meaningful data for the commit workflow to work correctly.

Keep pending and error messages in component properties. Storing `"Uploading..."` or `"Location permission denied"` in `field.text` can leave a nonempty field even though the requested input was never obtained. Clearing a value should also clear any text that would falsely suggest the field still has a result.

A nonempty object can still be incomplete for your business purpose. For example, a payment reference with a pending status is not proof of a successful payment. Use [Validate input](/platform/rules/form-actions/validate-input/) and appropriate conditions for this kind of pre-validation before dependent actions run.

A component-local `isBusy`, `hasErrors`, or `errorMessage` flag does **not** automatically block the process's submission workflow. If an operation must finish before submission, make that requirement explicit in process data and validation rules. Decide whether a previous valid result remains acceptable while a replacement is being acquired.

## 6. Work with structured values and child fields

### Replace a structured value

Replacing the top-level value is often the clearest way to publish a complete logical update. This example assumes `uploaded` contains a validated upload result:

```javascript
const previousFiles = field.get("value") || [];
const nextFiles = previousFiles.concat([{
  filename: uploaded.filename,
  fileUrl: uploaded.fileUrl
}]);

field.set("text", nextFiles.map(file => file.filename).join(", "));
field.set("value", nextFiles);
```

This widget's value contract is an array. Validate or migrate older values if an existing widget previously used a different shape. The new array reference supplies the top-level change notification.

### Mutate an existing value

If you keep the same object or array, make Ember-aware changes and explicitly notify `value` after finishing. For an already initialized file-reference array:

```javascript
const files = Ember.A(field.get("value"));

files.pushObject({
  filename: uploaded.filename,
  fileUrl: uploaded.fileUrl
});

field.set("text", files.map(file => file.filename).join(", "));
field.notifyPropertyChange("value");
```

For an existing object, use `Ember.set(object, "property", newValue)` for observed nested properties, then update any summary text and call `field.notifyPropertyChange("value")` once the logical change is ready.

Kianda's built-in file-upload control uses this notification pattern for its array of file references. Nested changes remain tracked as data; the explicit notification is needed to tell the rule engine that the containing field's logical value changed.

Do not call both replacement and explicit notification for the same update. Also review rules that write to their own triggering field: a value change can trigger another execution and create a loop. Updating several related fields is not an atomic transaction; rules on each field may observe intermediate state.

### Use real child field models when needed

An object property inside `field.value` is different from a child field model. Use child models when the pieces of a compound control need their own field identities, metadata, or rules.

The parent field's relationship is **`fields`**. Its inverse on each child is **`parentField`**. Do not invent a `subFields` relationship on the field model; a table-row helper with that name is a separate structure.

The following method can be added to a parent component that injects the `store` service. It returns an existing longitude child or creates it once:

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  store: Ember.inject.service("store"),

  async ensureLongitudeField() {
    const parent = this.get("field");
    const children = await parent.get("fields");

    if (this.isDestroying || this.isDestroyed ||
        this.get("field") !== parent) {
      return;
    }

    const childName = parent.get("name") + "_longitude";
    let child = children.findBy("name", childName);

    if (!child) {
      child = this.get("store").createRecord("field", {
        title: "Longitude",
        name: childName,
        type: "fields/field-textbox",
        settings: {}
      });

      children.addObject(child);
    }

    return child;
  }
});
```

Call this from the parent control's deliberate initialization flow, and await it within that flow. Handle errors there. Do not create children unconditionally on every render or while merely displaying an existing value. The parent and derived child names must remain unique in the process design.

Adding the child through `fields` uses the model's inverse relationship. Do not call `child.save()` or `process.save()` from this initialization. The normal design or instance save workflow handles persistence.

An alternative is to have the designer select existing utility fields with `field-picker`. This is useful when those fields already participate in process rules or reporting. The parent then updates the selected models through the process APIs.

## 7. Resolve the process and referenced fields

Access the wrapping process from the field:

```javascript
const process = await this.get("field.process");

if (!process) {
  throw new Error("The field's process is not available.");
}
```

This fragment belongs inside an asynchronous method. The property is normally already resolved, but it can require awaiting at the time of access. `await` works for either case. Do not copy ad hoc `.content` unwrapping into every widget; the field model already resolves the wrapping process in its computed property.

### Field references from the settings UI

`field-picker` stores a reference, not the live Ember Data field model. A reference usually includes `name`, `text`, `type`, and `fieldType`. The reference's text is its selection label; use the process APIs to read the field's current data.

With `allowText=true`, a picker can also contain a literal reference such as `{ text: "Site", type: "text" }`. A destination picker should use `allowText=false` because a destination must resolve to a real field.

| API | Purpose |
| --- | --- |
| `process.findFieldByName(name)` | Resolve a field by its process name. |
| `process.findFieldByRef(fieldRef)` | Resolve a field reference; returns the model or `undefined`. |
| `process.getFieldRefText(fieldRef)` | Read current field text or literal text; can return `undefined`. |
| `process.setField(field, value, text)` | Update a field using the platform API. The text argument is optional. |

Use a model's `get("value")` or `get("text")` to read its current attributes after resolving it. Check for a missing reference or removed field before accessing it.

For example, this method fragment updates the destination chosen in `field.settings.destination`. The calling action should await it and handle any error:

```javascript
async function writeDestination(component, value, text) {
  const ownerField = component.get("field");
  const process = await ownerField.get("process");
  const reference = ownerField.get("settings.destination");

  if (component.isDestroying || component.isDestroyed ||
      component.get("field") !== ownerField ||
      component.get("displayMode") !== "edit" ||
      ownerField.get("enabled") === false ||
      ownerField.get("visible") === false) {
    return;
  }

  if (!process || !reference || reference.type !== "field") {
    throw new Error("Choose a destination field.");
  }

  const destination = process.findFieldByRef(reference);

  if (!destination || destination === ownerField) {
    throw new Error("Choose an existing destination other than this field.");
  }

  await process.setField(destination, value, text);
}
```

`process.setField()` triggers rules associated with the affected field. It can return a Promise when, for example, a data-source-backed list or user picker must finish resolving data. Await it whenever subsequent work depends on completion.

Awaiting this API within your own action sequences that action's work. It does not make Kianda await the entire field component or automatically delay process submission.

## 8. Build a complete Geolocation field

This example develops the `geo-location` pattern into a widget that captures location on an explicit user action, optionally watches for updates, and releases the browser watch when it is no longer needed.

Its value contract is:

```json
{
  "latitude": 53.3498,
  "longitude": -6.2603,
  "accuracy": 12
}
```

The readable coordinates are also stored in `field.text`. This structured schema is the contract for this tutorial widget. When updating an installed widget that previously stored a comma-separated string, preserve its existing schema or deliberately migrate its consumers and saved data.

Browser geolocation requires a secure context and user permission, and can be restricted by the embedding page's permissions policy. `watchPosition()` returns a watch identifier that must be passed to `clearWatch()` when finished. See the [browser geolocation reference](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).

### Widget UI

```handlebars
{{#if (eq this.displayMode "design")}}
  <p class="text-muted">A user can capture a location with this field.</p>
{{/if}}

{{#if (eq this.displayMode "edit")}}
  <p>
    {{#if this.field.text}}
      {{this.field.text}}
    {{else}}
      No location captured.
    {{/if}}
  </p>

  <button
    type="button"
    class="btn btn-default"
    disabled={{this.isBusy}}
    onclick={{action "capture"}}>
    {{#if this.isBusy}}Acquiring location…{{else}}Capture location{{/if}}
  </button>

  {{#if this.isWatching}}
    <button type="button" class="btn btn-default" onclick={{action "stop"}}>
      Stop watching
    </button>
  {{/if}}

  {{#if this.errorMessage}}
    <p class="text-danger" role="alert">{{this.errorMessage}}</p>
  {{/if}}
{{/if}}

{{#if (eq this.displayMode "display")}}
  <p>
    {{#if this.field.text}}
      {{this.field.text}}
    {{else}}
      No location captured.
    {{/if}}
  </p>
{{/if}}

{{#if (eq this.displayMode "settings")}}
  <div class="form-group">
    <label>Continue watching after the first location?</label>
    {{radio-button
      name=(concat this.elementId "-watch-position")
      label="Yes"
      value="yes"
      group=this.field.settings.watchPosition}}
    {{radio-button
      name=(concat this.elementId "-watch-position")
      label="No"
      value="no"
      group=this.field.settings.watchPosition}}
    <p class="help-block">
      Each accepted location update changes the field value and can run its rules.
    </p>
  </div>
{{/if}}
```

### Widget Code

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  isBusy: false,
  isWatching: false,
  errorMessage: null,
  _watchId: null,
  _requestId: 0,

  settings() {
    const field = this.get("field");

    if (field.get("settings.watchPosition") === undefined) {
      field.set("settings.watchPosition", "no");
    }
  },

  _isEditable() {
    return !this.isDestroying && !this.isDestroyed &&
      this.get("displayMode") === "edit" &&
      this.get("field.enabled") !== false &&
      this.get("field.visible") !== false;
  },

  _accepts(requestId, field) {
    return this._isEditable() && this._requestId === requestId &&
      this.get("field") === field;
  },

  _stopLocation() {
    this._requestId += 1;

    if (this._watchId !== null) {
      navigator.geolocation.clearWatch(this._watchId);
      this._watchId = null;
    }

    if (!this.isDestroying && !this.isDestroyed) {
      this.setProperties({ isBusy: false, isWatching: false });
    }
  },

  stopWhenContextChanges: Ember.observer(
    "displayMode", "field", "field.enabled", "field.visible", function () {
      this._stopLocation();
    }
  ),

  willDestroyElement() {
    this._stopLocation();
    this._super(...arguments);
  },

  actions: {
    capture() {
      if (!this._isEditable()) {
        return;
      }

      this._stopLocation();
      this.set("errorMessage", null);

      if (typeof navigator === "undefined" || !navigator.geolocation) {
        this.set("errorMessage", "Geolocation is not available in this browser.");
        return;
      }

      const requestId = this._requestId;
      const field = this.get("field");
      const watch = field.get("settings.watchPosition") === "yes";
      this.setProperties({ isBusy: true, isWatching: watch });

      const success = position => Ember.run(() => {
        if (!this._accepts(requestId, field)) {
          return;
        }

        const coords = position.coords;
        const value = {
          latitude: coords.latitude,
          longitude: coords.longitude,
          accuracy: coords.accuracy
        };

        this.setProperties({ isBusy: false, errorMessage: null });
        field.set("text", value.latitude + ", " + value.longitude);
        field.set("value", value);
      });

      const failure = error => Ember.run(() => {
        if (!this._accepts(requestId, field)) {
          return;
        }

        this._stopLocation();
        this.set("errorMessage", error.message || "Unable to retrieve your location.");
      });

      const options = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      };

      try {
        if (watch) {
          this._watchId = navigator.geolocation.watchPosition(success, failure, options);
        } else {
          navigator.geolocation.getCurrentPosition(success, failure, options);
        }
      } catch (error) {
        failure(error);
      }
    },

    stop() {
      this._stopLocation();
    }
  }
});
```

### Why the example manages callbacks explicitly

The browser can return a position after the user has moved to another form or after a rule has disabled the field. `_accepts()` checks the request number, the current field model, editability, and component lifetime before allowing a result to update data.

Stopping or replacing a request increments `_requestId`, so an older callback is ignored. For a watch, the code also calls `clearWatch()`. Checking the identifier against `null` is deliberate: a valid identifier of `0` must still be cleared. A single-position request has no equivalent cancellation method here; its late result is simply ignored.

The context observer stops location work when the field or display context changes. Destruction performs the same cleanup. This does not depend on `edit()` or `display()` being called again on a mode transition.

In the success callback, component-local state is updated before writing `field.value`. A rule triggered by the value change may immediately hide or otherwise remove the field, so there is no subsequent component update that assumes the control is still rendered.

Each accepted browser reading replaces the structured value and can trigger attached rules. Watch mode uses one acquisition path rather than starting both a single request and a watch. If the process only needs a final location, leave watching off. Add sampling or meaningful-change thresholds when continuous updates would trigger more work than the workflow needs.

An error remains in `errorMessage`; it never becomes the field's coordinate data. The example retains the last successful location if a later attempt fails. If the process requires a fresh capture for each submission, model and validate that requirement explicitly, for example by storing and checking an acquisition timestamp in an extended value contract.

### Test this widget

Test acquisition, denied permission, unavailable location, and a timeout. Verify that Designer preview and read-only display do not request location. Enable watching, then stop it, disable the field, and leave the form. In each case, later callbacks should leave the model unchanged. Finally, test two instances on the same form and check that they do not share watch state.

## 9. Build an asynchronous public-file upload field

An upload control connects two operations: uploading a browser `File` to a service, and publishing the resulting file reference into the Kianda field model. A successful upload must populate the uploader's own field if its display view, required validation, and attached rules depend on that result.

The following example is a case study adapted from an existing Kianda widget named `upload-public-file`. The complete component is included here. It stores a **single completed upload** as `{ filename, fileUrl }` in `field.value` and the filename in `field.text`.

### Integration dependencies

The upload transport uses the application adapter, session authorization pattern, and `/kianda-files/file` response shape used by that implementation. These details are integration dependencies, not a promise that every Kianda deployment exposes an identical public files SDK. Adapt `_uploadPublicFile()` when your endpoint or authentication contract differs.

This version targets an **existing public folder** selected in its settings. The request explicitly uses `isPublic=true`; use it for files intended to be public. A completed upload exists in the remote file service even if the user later closes the form without saving the process.

### Widget UI

```handlebars
{{#if (eq this.displayMode "design")}}
  <p class="text-muted">Upload a file to the configured public folder.</p>
{{/if}}

{{#if (eq this.displayMode "edit")}}
  <label for={{concat this.elementId "-file"}}>Choose a public file</label>
  <input
    id={{concat this.elementId "-file"}}
    type="file"
    accept={{this.field.settings.accept}}
    disabled={{this.isBusy}}
    onchange={{action "upload"}}>

  {{#if this.isBusy}}
    <p role="status">Uploading…</p>
  {{/if}}
  {{#if this.errorMessage}}
    <p class="text-danger" role="alert">{{this.errorMessage}}</p>
  {{/if}}
  {{#if this.field.text}}
    <p>Stored file: {{this.field.text}}</p>
  {{/if}}
{{/if}}

{{#if (eq this.displayMode "display")}}
  {{#if this.field.text}}
    <span>{{this.field.text}}</span>
  {{else}}
    <span class="text-muted">No file uploaded.</span>
  {{/if}}
{{/if}}

{{#if (eq this.displayMode "settings")}}
  <div class="form-group">
    <label for={{concat this.elementId "-folder"}}>Existing public folder</label>
    {{input
      id=(concat this.elementId "-folder")
      type="text"
      class="form-control"
      required=true
      value=this.field.settings.folderPath}}
  </div>
  <div class="form-group">
    <label for={{concat this.elementId "-accept"}}>File chooser filter</label>
    {{input
      id=(concat this.elementId "-accept")
      type="text"
      class="form-control"
      value=this.field.settings.accept}}
    <p class="help-block">For example, .pdf or .pdf,.png.</p>
  </div>
{{/if}}
```

The file selector receives the native event directly. It does not use `window.event`, and it is only active in `edit` mode.

The selector intentionally does not bind its native `required` attribute to `field.required`. After reopening an instance, a browser file input is empty even when the Kianda field already contains a valid uploaded-file reference. Unconditionally requiring a new local file would force an unnecessary replacement. The field's stored result participates in Kianda's required-value validation.

The `accept` attribute guides the chooser; the receiving service must enforce file requirements. See the [file input reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file).

### Widget Code

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  isBusy: false,
  errorMessage: null,
  _requestId: 0,

  settings() {
    const field = this.get("field");

    if (field.get("settings.accept") === undefined) {
      field.set("settings.accept", ".pdf");
    }
  },

  _isEditable() {
    return !this.isDestroying && !this.isDestroyed &&
      this.get("displayMode") === "edit" &&
      this.get("field.enabled") !== false &&
      this.get("field.visible") !== false;
  },

  _accepts(requestId, field) {
    return this._isEditable() && this._requestId === requestId &&
      this.get("field") === field;
  },

  _invalidateUpload() {
    this._requestId += 1;

    if (!this.isDestroying && !this.isDestroyed) {
      this.set("isBusy", false);
    }
  },

  invalidateWhenContextChanges: Ember.observer(
    "displayMode", "field", "field.enabled", "field.visible", function () {
      this._invalidateUpload();
    }
  ),

  willDestroyElement() {
    this._invalidateUpload();
    this._super(...arguments);
  },

  async _uploadPublicFile(file, folderPath) {
    const adapter = this.get("store").adapterFor("application");
    const session = this.get("store.session");
    const headers = new Headers();

    // This integration uses the sample's synchronous authorization callback.
    session.authorize(adapter.get("authorizer"), (name, value) => {
      headers.append(name, value);
    });

    const url = adapter.buildURL() +
      "/kianda-files/file?isPublic=true&folderPath=" +
      encodeURIComponent(folderPath) + "&name=" + encodeURIComponent(file.name);

    const data = new FormData();
    data.append("file", file);

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: data
    });

    if (!response.ok) {
      throw new Error("Upload failed (HTTP " + response.status + ").");
    }

    const result = await response.json();
    const uploaded = result && result.files && result.files[0];

    if (!result || result.success !== true || !uploaded ||
        typeof uploaded.name !== "string" || !uploaded.name ||
        typeof uploaded.path !== "string" || !uploaded.path) {
      throw new Error("The upload service did not return a valid file reference.");
    }

    return { filename: uploaded.name, fileUrl: uploaded.path };
  },

  actions: {
    async upload(event) {
      const input = event.target;
      const file = input.files && input.files[0];

      // Keep the File object, but allow the same file to be selected for a retry.
      input.value = "";

      if (!file || !this._isEditable() || this.get("isBusy")) {
        return;
      }

      const field = this.get("field");
      const folderPath = String(field.get("settings.folderPath") || "").trim();

      if (!folderPath) {
        this.set("errorMessage", "Configure an existing public folder first.");
        return;
      }

      const requestId = ++this._requestId;
      this.setProperties({ isBusy: true, errorMessage: null });

      try {
        const uploaded = await this._uploadPublicFile(file, folderPath);

        Ember.run(() => {
          if (!this._accepts(requestId, field)) {
            return;
          }

          this.setProperties({ isBusy: false, errorMessage: null });
          field.set("text", uploaded.filename);
          field.set("value", uploaded);
        });
      } catch (error) {
        Ember.run(() => {
          if (!this._accepts(requestId, field)) {
            return;
          }

          this.setProperties({
            isBusy: false,
            errorMessage: error.message || "The file could not be uploaded."
          });
        });
      }
    }
  }
});
```

The authorization callback above follows the source widget's session integration. If your session API supplies authorization asynchronously, obtain and await that authorization before starting `fetch()`.

The helper checks both HTTP status and the application response. `fetch()` does not reject simply because a server returns an HTTP error. When sending `FormData`, let the browser generate the multipart `Content-Type` boundary rather than setting that header yourself. These behaviours are covered in the [Fetch guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and [FormData guide](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

If your widget also creates folders, validate the file selection and configuration before making that request, encode folder parameters, and check the folder operation's application result before uploading. Define how your endpoint treats an already-existing folder instead of assuming every folder response indicates success.

### Coordinate upload results with the process

The component only publishes a completed file reference. During the request, loading and failure state stay local. A failed replacement leaves the previous successful upload in the field. If the workflow requires the replacement to finish, add explicit validation for that requirement; `isBusy` alone does not prevent submission.

The request counter prevents a late result from being applied after the field becomes read-only, is replaced, or is destroyed. It does not cancel or reverse an upload already accepted by the service. A process save also does not wait for this component's request merely because its action is asynchronous.

To mirror the result into utility fields, add `field-picker` settings such as those in section 5, resolve the references through `field.process`, and await each `process.setField()` call. Validate both destinations before starting the upload. Perform any required copies before publishing the uploader's final `field.value` if its attached rules depend on those copies.

Each target update can run that target's rules. There is no atomic update across the upload service, the utility fields, and the uploader. Handle partial completion in the surrounding workflow when those operations must stay coordinated.

## 10. Integrate an external control: the Stripe example

This case study draws on an existing Kianda widget named `stripe-card`. Its Designer settings identify customer and pricing fields, injected services communicate with a connector, and an external SDK renders into the component's DOM. The relevant architecture and lessons are described below; the original payment implementation is not needed to follow them.

A payment implementation also has its own backend and SDK contract. The example's connector operations, payment protocol, and legacy confirmation flow should be reviewed as an application integration. They are not additional Kianda field lifecycle hooks.

### Give each view a clear purpose

| Mode | Suggested payment-widget behaviour |
| --- | --- |
| `design` | Show a payment-control preview without loading a live payment form. |
| `settings` | Select the connector and required customer, price, and quantity references. |
| `edit` | Initialize and mount the payment control, handle user actions, and publish meaningful results. |
| `display` | Present the stored payment reference and status without accepting new card input. |

### Initialize, mount, and clean up deliberately

Use these steps for an SDK-backed field:

1. **Resolve configuration and services.** Validate required field references and load the integration configuration. Inject services through `Ember.inject.service(...)` where needed.
2. **Load the SDK once through a shared loader.** Cache an in-flight load Promise so multiple instances do not independently repeat script loading. Handle load failure and define retry behaviour.
3. **Wait until the component has a DOM container.** Start editable initialization from `edit()` or the appropriate insertion hook. Do not mount an external element inside `async init()`.
4. **Recheck the context after asynchronous work.** The component must still exist, refer to the same field, and be editable before mounting or applying a result.
5. **Scope DOM access to the component.** For example, resolve a `.payment-container` beneath `this.element`. Do not rely on one global ID shared by multiple field instances.
6. **Release the external control and listeners.** Tear down when leaving the relevant mode and on destruction. If the component later becomes editable again, initialize a fresh external control as needed.

For Stripe, load Stripe.js directly from Stripe as described in its [current integration guide](https://docs.stripe.com/payments/quickstart). Its [`mount()`](https://docs.stripe.com/js/element/mount) method accepts a DOM container, and [`destroy()`](https://docs.stripe.com/js/element/other_methods/destroy) disposes of an Element. A destroyed Element cannot be remounted.

Kianda does not await the field's initialization hook. The component must catch initialization errors, show a loading/error state, and prevent its own payment action until its dependencies are ready. Component readiness is separate from process submission validation.

### Keep payment data and field state consistent

An external Element does not automatically synchronize its state into the Kianda model. Translate an appropriate integration result into `field.text` and `field.value` using the same notification rules as every other custom field.

Keep card-entry data in Stripe's hosted control. Store suitable references and status information in the process, and keep secret-key operations in the backend. A label such as `"Payment successful"` in the browser is not the authority for fulfillment: use server-confirmed payment state and the integration's webhook workflow. Stripe's [payment-status guidance](https://docs.stripe.com/payments/payment-intents/verifying-status) explains how to respond to confirmed outcomes even when the customer leaves the page.

If you store an in-progress payment reference, configure business validation against the required status. A nonempty object alone can satisfy a missing-input check while the payment still needs action.

### Review the legacy example before adopting its payment flow

Several implementation details in the earlier `stripe-card` pattern need deliberate treatment:

- **Initialization must exclude Designer preview.** Skipping only `settings` and `display` still allows work in `design` mode. Check explicitly for `edit`.
- **A command string in `field.value` is an application convention.** A value such as `"start_payment"` triggers the normal field-value observer and also occupies persisted business data. Prefer an explicit component action for a user operation. If an application retains a command convention, coordinate consumption, rule triggering, and validation explicitly.
- **Sequence asynchronous stages through methods you can await.** Do not assume dispatching an action through `this.send(...)` makes the surrounding flow wait for payment completion. Catch errors where the component owns the operation.
- **Use the confirmation flow for the chosen Stripe integration.** Do not copy the legacy `confirmPaymentIntent(...)` call or replace its name without reviewing the backend protocol. Stripe's current documentation distinguishes integration-specific flows; its [card PaymentIntent confirmation reference](https://docs.stripe.com/js/payment_intents/confirm_card_payment) describes one such path.
- **Prefer the SDK's supported authentication handling.** A hand-built iframe/modal flow adds lifecycle and message-handling obligations. If an integration genuinely needs `postMessage`, verify the sender's origin and source, validate the payload, and remove the listener during teardown. See the [browser messaging reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

This case study explains the field-component responsibilities. A deployable payment flow additionally needs the matching connector/backend implementation and verification against the Stripe API version and integration being used.

## 11. Reuse platform components and Ember features

Custom field templates can use ordinary HTML, Ember's native helpers, and Kianda components. Bind configuration controls to `field.settings`; bind user input to the field data contract or route it through an action when you need to coordinate text, value, and notifications.

### Common platform components

| Component | Typical use |
| --- | --- |
| `field-picker` | Select a process field, or optionally literal text. |
| `radio-button` | Choose one configuration value from a small set. |
| `person-picker` | Select users; it can also expose groups and partners according to its options. |
| `rich-text` | Edit rich text using the platform's Summernote/CodeMirror integration. |

For example, the following are settings fragments for a widget that selects a source, recipients, and message content:

```handlebars
{{field-picker
  process=this.field.process
  required=true
  allowText=false
  selectForms=false
  selectFields=true
  selectTable=true
  showButtons=true
  value=this.field.settings.selectedField}}

{{person-picker value=this.field.settings.users}}

{{rich-text
  contents=this.field.settings.message
  height=220
  sanitize=true
  showCodeview=false
  showImageDialog=true
  showFontName=false}}
```

Putting these controls in the `settings` branch changes Designer configuration. If you instead use a picker or editor for runtime field input, ensure its changes update the intended `field.value` and `field.text` contract. A binding into a nested property does not automatically provide the containing field's rule notification.

### Available addons and conventions

The environment described in this guide includes:

| Addon | Version | Use |
| --- | --- | --- |
| `ember-moment` | `8.0.1` | Date/time support; the platform also commonly uses global `moment()`. |
| `ember-truth-helpers` | `2.0.0` | Template expressions such as `eq`, `not-eq`, `and`, and `or`. |
| `ember-collection` | `1.0.0` | Rendering dynamic collections. |

Use classic Ember properties, computed properties, actions, observers where appropriate, and service injection. Allocate mutable component-local arrays or objects per instance in `init()` rather than sharing a single mutable object on the component definition. Prefer native Promises and `async`/`await` for new asynchronous code.

Keep styles scoped to the widget's root or a distinctive CSS class. Use component-instance IDs such as `this.elementId` when associating labels, inputs, or radio groups. Use escaped template expressions for text such as filenames and error messages; render intended rich content through the appropriate rich-text component and its sanitization options.

The examples use Ember 2.18 component and template syntax. Do not assume that APIs from newer Ember applications, such as Octane-style tracked properties, are available in this environment. See the [Ember 2.18 component guide](https://guides.emberjs.com/v2.18.0/components/defining-a-component/) and [service guide](https://guides.emberjs.com/v2.18.0/applications/services/) for the corresponding framework conventions.

## 12. Compile, debug, and verify the widget

Clicking **Update** in Developer precompiles the widget with Babel and generates a source map (`.map`) under public files. Use browser developer tools to inspect the loaded code, network requests, and asynchronous errors. The [custom-widget debugging guide](/troubleshooting/custom-widget-debugging/) explains how to work with custom widget source.

Test configuration in Designer and runtime behaviour in a process instance. Saving widget code, saving a process design, and saving an instance's data are distinct operations.

### What to verify before reuse

| Area | Useful check |
| --- | --- |
| Four views | Designer preview is useful; settings reopen correctly; edit accepts input; display shows saved data. |
| Value contract | Text and value agree, and reopening an instance reconstructs the control from saved data. |
| Rule triggering | A committed change triggers attached rules; nested mutations explicitly notify once. |
| Configuration validation | Required settings block saving; cross-setting checks show useful errors; reopening settings does not duplicate listeners. |
| Runtime validation | Empty and cleared values fail when required; errors and loading labels do not masquerade as valid data. |
| Asynchronous work | Slow responses, rejected requests, and retries leave meaningful model and UI state. |
| Component lifetime | Disable, hide, replace, and leave the form during work; old callbacks do not write to the wrong field. |
| Multiple instances | DOM targets, radio groups, watches, and mutable component state remain independent. |
| External integrations | Check both transport and application results; verify the integration's own side effects and retry behaviour. |
| Persistence | Use the intended Save/commit workflow, reopen the instance, and verify simple, structured, and child-field data. |

Use the [rule debugger](/troubleshooting/rule-debugger/) when a value update triggers unexpected rule behaviour. Trace the value notification and the affected field's rules. Repeated execution often comes from redundant notifications or a rule that writes back into its own trigger path.

### Common problems

| Symptom | Likely cause and correction |
| --- | --- |
| The UI changes but attached rules do not run. | The widget updated only `text` or a nested property. Update the top-level `value` or explicitly notify it after the completed change. |
| Rules run twice for one logical edit. | The widget replaces `value` and also calls `notifyPropertyChange("value")`, or registered the same handler more than once. |
| A required control passes with no useful result. | Loading/error text or an incomplete nonempty object was stored as field data. Keep transient state local and add business pre-validation where needed. |
| Opening Designer starts an upload, SDK flow, or location request. | Initialization does not explicitly restrict the operation to the editable view or user action. |
| A disabled field is still interactive. | The `display` branch renders an active input or the external control was not torn down. |
| `async edit()` does not delay other work. | Field convenience hooks are not awaited. Handle pending state and workflow dependencies explicitly. |
| An SDK cannot find its mount element. | It was started in `init()`, before insertion, or the selector points outside this component. |
| Data changes after leaving the form. | A delayed callback has no lifetime/context check, or a watch/listener was not cleaned up. |
| An upload succeeds but the field displays nothing. | Only utility fields were populated; the uploader's own `field.text`/`field.value` were left empty. |
| Reopening an instance demands a new file. | A native file input was marked required even though a valid uploaded-file reference is already stored. |
| Changes disappear after reopening. | The widget changed local component state only, or the instance was not saved through its intended workflow. |

## Related documentation

- [Rule widget development](/low-code/rule-widget/)
- [Custom controls](/platform/controls/custom/)
- [Control properties](/platform/controls/properties/)
- [Validate input](/platform/rules/form-actions/validate-input/)
- [Field Display mode](/platform/rules/form-actions/field-display-mode/)
- [Custom widget debugging](/troubleshooting/custom-widget-debugging/)
- [Ember 2.18 component lifecycle](https://guides.emberjs.com/v2.18.0/components/the-component-lifecycle/)

