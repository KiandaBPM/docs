---
title: "Rule widget development"
linkTitle: "Rule widget"
weight: 2
description: "Build custom Kianda rule widgets with a settings UI, validation, asynchronous execution, field updates, and debugging."
typora-root-url: ..\..\..\static
---

A custom rule widget implements a reusable business action in Kianda. It can transform field values, update process data, copy table rows, or call a service. Process designers configure the action and attach it to a process, form, or field using the rule designer.

This guide shows how to build a complete **Format text** rule, add configuration validation, and develop an asynchronous **Generate custom ID** rule. It also explains the runtime context, field APIs, reusable UI components, and patterns needed for more advanced rules.

The examples target **Kianda's Ember.js widget environment** and use classic Ember components, Handlebars, and native JavaScript Promises.

## How a rule widget works

A rule widget has two parts:

| Part | Purpose | When it is used |
| --- | --- | --- |
| **Widget UI** — Handlebars (`.hbs`) | Renders the controls a designer uses to configure the rule. | When editing the rule in Designer. |
| **Widget Code** — JavaScript (`.js`) | Defines an Ember component with configuration behaviour and an `execute()` method. | During configuration, and when the rule engine runs the action. |

At design time, Kianda can render the complete component and its template. You can use Ember properties, computed properties, actions, lifecycle hooks, and other components to build the settings interface.

At runtime, Kianda resolves and instantiates the component class, supplies its execution context, and calls **`execute()`**. It does **not** render the rule's Handlebars template. The action runs, completes, and returns control to the rule engine.

This is the main distinction from a field widget: a field widget provides a control that is rendered in a form; a rule widget performs an action. A rule may update a field that is already rendered, but its own template is the rule's configuration interface.

### Execution and persistence

Keep these behaviours in mind throughout development:

- **`execute()` is the only runtime entry point.** It may be synchronous or asynchronous. The engine waits for a returned Promise to settle. Prefer `async execute()` for work that may be asynchronous.
- **Return values are ignored.** Returning `false`, an object, or a calculated value does not communicate a result or stop the rule sequence. Write business results into the appropriate process, form, or field model.
- **Process changes are normally saved by a Save rule.** A custom rule usually modifies the current process instance. It does not need to save the instance itself. An external API call can have its own immediate side effects, independently of a later process save.
- **Errors do not stop subsequent rules.** If execution throws or its returned Promise rejects, Kianda logs the error, records it on the rule, and displays it to the end user in an interactive session. The engine then continues execution. Configure conditions on later rules when they depend on this action succeeding.

## 1. Create a rule widget

You need access to **Administration > Developer**, normally through an Administrator or Developer role. You should be familiar with JavaScript and HTML; the examples introduce the Ember and Handlebars conventions they use.

1. Open **Administration > Developer**.
2. Click **New widget**.
3. Enter a title, such as **Format text**, and choose its unique ID and icon.
4. Select **Rule** as the widget type and confirm the dialog.
5. Open the widget's **Widget UI** and **Widget Code** editors.

Use the JavaScript module structure below. Kianda loads the component; you do not need to create or mount a component instance yourself.

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  settings() {
    // Called when the rule opens for configuration in Designer.
  },

  execute() {
    // Called by the rule engine when the rule runs.
  }
});
```

`this` inside these methods is the component instance. Use `this.get("rule")` and `this.get("process")` to access the supplied models. Define these methods using normal function or method syntax; an arrow function used as the method itself would capture a different `this`.

## 2. Build a complete Format text rule

This rule reads either a field's displayed text or literal text entered by the designer, trims surrounding whitespace, optionally converts it to uppercase, and writes the result into a destination text field.

It demonstrates three useful patterns: storing configuration in `rule.settings`, resolving a field-or-text reference, and awaiting a field update.

### Widget UI

Paste this complete template into **Widget UI**:

```handlebars
<div class="form-group">
  <label class="control-label">Text to format</label>
  {{field-picker
    process=process
    required=true
    allowText=true
    selectForms=false
    selectFields=true
    value=rule.settings.source}}
  <p class="help-block">Choose a field or enter literal text.</p>
</div>

<div class="form-group">
  <label class="control-label">Letter case</label>
  {{radio-button
    default=true
    name="formatTextCase"
    label="Keep existing case"
    value="preserve"
    group=rule.settings.caseMode}}
  {{radio-button
    name="formatTextCase"
    label="Uppercase"
    value="upper"
    group=rule.settings.caseMode}}
</div>

<div class="form-group {{errors.destination}}">
  <label class="control-label">Destination text field</label>
  {{field-picker
    process=process
    required=true
    allowText=false
    selectForms=false
    selectFields=true
    value=rule.settings.destination}}
  <p class="help-block">Select a text field different from the source.</p>
</div>
```

The inputs bind to the **rule's** settings. The component's `field` property represents the field that triggers the rule, if any; it is not the place to store rule configuration.

`allowText=true` allows the source to be a field reference or literal text. The destination uses `allowText=false` because the rule must update a real field. `required=true` prevents the rule configuration from being saved without the required input. The optional `errors.destination` class is used by the custom validation example later in this guide.

### Widget Code

Paste this complete module into **Widget Code**:

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  settings() {
    const rule = this.get("rule");

    if (rule.get("settings.caseMode") === undefined) {
      rule.set("settings.caseMode", "preserve");
    }
  },

  async execute() {
    const process = this.get("process");
    const rule = this.get("rule");
    const sourceRef = rule.get("settings.source");
    const destinationRef = rule.get("settings.destination");
    const caseMode = rule.get("settings.caseMode") || "preserve";

    if (!sourceRef ||
        (sourceRef.type !== "field" && sourceRef.type !== "text")) {
      throw new Error("Format text: select a source field or enter text.");
    }

    if (!destinationRef || destinationRef.type !== "field") {
      throw new Error("Format text: select a destination field.");
    }

    const destination = process.findFieldByRef(destinationRef);

    if (!destination) {
      throw new Error("Format text: the destination field no longer exists.");
    }

    if (sourceRef.type === "field" &&
        sourceRef.name === destinationRef.name) {
      throw new Error("Format text: source and destination must be different.");
    }

    const sourceText = process.getFieldRefText(sourceRef);

    if (sourceText === undefined || sourceText === null) {
      throw new Error("Format text: the source text could not be read.");
    }

    if (caseMode !== "preserve" && caseMode !== "upper") {
      throw new Error("Format text: the configured letter case is invalid.");
    }

    let result = String(sourceText).trim();

    if (caseMode === "upper") {
      result = result.toUpperCase();
    }

    await process.setField(destination, result);
  }
});
```

### Why the example uses `async`

`process.setField()` can return a Promise when the destination needs to resolve data, such as a list connected to a data source or a user picker. Awaiting the call keeps this rule's completion tied to the field update. `await` also accepts a synchronous result, so the same pattern works for ordinary text fields.

The `settings()` method only supplies an editing default. The runtime also has a fallback for `caseMode`, because `execute()` must work from the saved configuration without relying on the settings UI having run in the runtime component.

### Configure and test the rule

1. Click **Update** to compile the widget.
2. Open a test process in **Administration > Designer**.
3. Add two text fields, such as **Source text** and **Formatted text**, and a button called **Format**. Save the process design so its fields are available for selection.
4. Select the **Format** button and add **Format text** from **Rules > Custom**.
5. Select the source field, choose **Uppercase**, and select the destination text field. Save the rule configuration and the process design.
6. Preview the process. Enter `  inspection due  ` in the source field, then click **Format**. The destination should become `INSPECTION DUE`.
7. Reopen the rule's configuration and try a literal source instead of a field. Verify that it produces the same kind of output.

The changed destination value is part of the current process instance. Use the process's normal Save rule to persist it; for example, place a Save rule after the formatting action if that is the intended workflow.

Start by attaching the example to a separate button. **Setting a field triggers rules associated with that field.** A rule that writes back to its own triggering field, or a pair of rules that repeatedly update each other, can create a recursive execution loop. The source/destination check above catches one configuration mistake; it does not prevent every possible rule cycle.

## 3. Understand the runtime context

Kianda supplies the following component properties when it executes a rule:

| Property | Meaning | Development guidance |
| --- | --- | --- |
| `process` | The process instance being operated on. | Resolve fields and apply updates through this model. |
| `rule` | The rule model, including its configuration. | Read custom configuration from `rule.settings`. |
| `form` | The form associated with the attached field, where applicable. | Can be `null`; check before use. |
| `field` | The field to which the rule is attached, where applicable. | Can be `null`. It may differ from every field selected in the rule's settings. |
| `node` | The process, form, or field to which the rule is attached. | Use when behaviour depends on the attachment point. For a process onload rule, this is the process. |
| `ruleEngine` | The rule engine orchestrating this execution. | Available for advanced execution logic; ordinary field transformations do not need it. |

For example, the Format text rule is attached to a button, but updates the destination selected by the designer. Reading `this.get("field")` would identify the button rather than the destination.

The runtime loads the class through Kianda's component factory. DOM creation is not part of that execution path: do not require `this.element`, a rendered template, a button click inside the settings UI, or `didInsertElement()` to prepare values needed by `execute()`.

### Relevant rule model properties

The rule model is an Ember model. Access its properties with `rule.get(...)` and update settings with `rule.set(...)` so Ember observes the changes.

| Property | Purpose |
| --- | --- |
| `title` | The configured rule title. Useful when explaining or identifying an action. |
| `action` | Identifies the component/action to execute. Kianda manages component resolution. |
| `isCustomType` | Indicates a custom rule type. |
| `enabled` | Determines whether the rule is enabled; its default is `true`. |
| `conditions` | Conditions used by the orchestrator to decide whether to run the rule. |
| `datasource` | An optional related data source for rules that use one. |
| `settings` | A configuration hash automatically initialised to a new `{}` for each rule model. Store widget-specific settings here. |
| `hasElse`, `elseSettings` | Optional alternative settings used by the orchestrator. |

For a normal widget, focus on your own settings and execution logic. The engine handles the rule's standard orchestration properties; you do not need to reproduce that orchestration in every `execute()` method.

The engine also writes execution diagnostics into the settings hash:

| Diagnostic | Meaning |
| --- | --- |
| `settings.lastExecuted` | A timestamp recorded after successful execution. |
| `settings.lastError` | Error information captured when execution fails. |

Treat these as engine-managed diagnostics. Do not use the same names for custom configuration, overwrite the entire settings hash, or set these properties to signal success or failure. Let `execute()` complete or throw instead. Do not assume a previous error is cleared unless you have verified that behaviour for the runtime you are inspecting.

## 4. Read and update fields

A field picker stores a **reference**, not the live field model. A typical field reference contains:

| Reference property | Meaning |
| --- | --- |
| `name` | The field's name used to resolve it within the process. |
| `text` | The field's display title in the selection. This is not its current runtime data. |
| `type` | `"field"` for a field reference, or `"text"` for a literal value. |
| `fieldType` | Field type metadata supplied by the picker for a field selection. |

For example, a literal selection may be stored as:

```json
{
  "type": "text",
  "text": "Site"
}
```

Retain the reference produced by the picker. Resolve it against the current process when executing the rule; do not cache a live field model from the Designer component for later execution.

### Field API reference

| API | Use |
| --- | --- |
| `process.findFieldByName(name)` | Resolve a field by its name. Check that a field was found before accessing it. |
| `process.findFieldByRef(fieldRef)` | Resolve a field reference to its field model; returns `undefined` if it cannot be resolved. |
| `process.getFieldRefText(fieldRef)` | Read text from a field-or-literal reference. Can return `undefined` when text cannot be resolved. |
| `field.get("text")` | Read the resolved field's displayed text. |
| `field.get("value")` | Read the resolved field's underlying value. Its shape depends on the field type. |
| `process.setField(field, value, text)` | Update a field. The third argument is optional. May return a Promise and triggers rules associated with the affected field. |

For fields with separate display text and underlying values, preserve that distinction. A list can display a label while storing an identifier; user pickers, file fields, and other specialised fields can use richer values. Do not assume that every `value` is a string, or that display text is interchangeable with it.

For example, this **fragment inside an async `execute()`** copies the underlying value and display text between compatible fields:

```javascript
const process = this.get("process");
const rule = this.get("rule");
const source = process.findFieldByName(rule.get("settings.source.name"));
const destination = process.findFieldByName(
  rule.get("settings.destination.name")
);

if (!source || !destination) {
  throw new Error("Copy field: source or destination could not be found.");
}

await process.setField(
  destination,
  source.get("value"),
  source.get("text")
);
```

Use this form only when the destination accepts the source's value shape. The Format text tutorial deliberately uses displayed text and writes a plain string to a text field.

Prefer `process.setField()` for field data changes so the platform handles value resolution and related rules. Changing a DOM element only changes its presentation; it does not reliably update the process model. Directly assigning a model's `text` or `value` also does not express the same platform operation as `setField()`.

## 5. Initialise and validate configuration

Kianda automatically creates `rule.settings`. Use the widget's **`settings()` method** to initialise missing configuration when the rule opens in Designer.

Initialise each setting independently, and preserve values already chosen by the designer:

```javascript
settings() {
  const rule = this.get("rule");

  if (rule.get("settings.inputMapping") === undefined) {
    rule.set("settings.inputMapping", [{}]);
  }

  if (rule.get("settings.outputMapping") === undefined) {
    rule.set("settings.outputMapping", []);
  }

  if (rule.get("settings.errorMapping") === undefined) {
    rule.set("settings.errorMapping", []);
  }
}
```

This is a component-method fragment illustrating mapping configuration. The property names are chosen by that widget; they do not automatically create mapping behaviour. Your UI and executor must use the settings you define.

### Required inputs and the `saving` event

Inputs and field pickers with `required=true` prevent an incomplete rule configuration from being saved. Use the rule model's **`saving` event** for checks that involve multiple settings or business rules, such as requiring different source and destination fields or at least one key column.

When the designer saves the rule configuration, the handler receives an argument object. To reject that save:

1. Set `args.isError = true`.
2. Append a useful message to `args.errors`.
3. Optionally set component properties that highlight the relevant controls.

Keep this handler synchronous. Preserve errors added by other handlers: do not reset `args.isError` to `false` or replace `args.errors`. This event validates **the rule's configuration in Designer**; it is separate from a Save rule that persists a process instance.

### Add semantic validation to Format text

The following is an **extension to the Format text component**, not a separate module. Replace its existing `settings()` method with the version below and add the other members inside the same `Ember.Component.extend({ ... })` object. Keep its `execute()` method unchanged.

```javascript
_settingsRule: null,

settings() {
  this._detachSettingsValidation();

  const rule = this.get("rule");

  if (rule.get("settings.caseMode") === undefined) {
    rule.set("settings.caseMode", "preserve");
  }

  this.set("errors", {});
  this._settingsRule = rule;
  rule.on("saving", this, this._validateSettings);
},

_validateSettings(args) {
  const rule = this._settingsRule;
  const source = rule.get("settings.source");
  const destination = rule.get("settings.destination");

  this.set("errors", {});

  if (source && destination &&
      source.type === "field" &&
      source.name === destination.name) {
    this.set("errors.destination", "has-error");
    args.isError = true;
    args.errors.push("Source and destination must be different fields.");
  }
},

_detachSettingsValidation() {
  if (this._settingsRule) {
    this._settingsRule.off("saving", this, this._validateSettings);
    this._settingsRule = null;
  }
},

willDestroy() {
  this._detachSettingsValidation();
  this._super(...arguments);
}
```

The template already binds `errors.destination` to the destination control's wrapper. This handler uses that property to add a `has-error` class.

The named callback and matching `on`/`off` calls avoid accumulating listeners when the settings editor is opened repeatedly. Cleanup remembers the model that received the listener, so it removes the handler from that same model. These subscription methods are documented in the [Ember 2.18 Evented API](https://api.emberjs.com/ember/2.18/classes/evented/).

Runtime checks are still necessary. A field may have been removed, or an older saved configuration may not contain a setting added in a newer widget version. Designer validation improves configuration quality; it does not replace validation inside `execute()`.

## 6. Write asynchronous rules

Prefer **`async execute()` and native Promises** for asynchronous work. Kianda also supports a non-async `execute()` that returns a Promise. The important requirement is that all work needed for completion belongs to the returned asynchronous operation.

| Implementation | What the engine waits for |
| --- | --- |
| A synchronous `execute()` with no asynchronous work | The method to finish. |
| An `async execute()` that awaits its work | Its returned Promise to settle. |
| A non-async `execute()` that returns a Promise | That returned Promise to settle. |
| A method that starts a request or callback and neither awaits nor returns its completion | The method can finish while the work is still running. |

Avoid introducing RSVP Promises into new widget examples. Native `async`/`await` is the recommended authoring pattern. When integrating a callback-based API, adapt its documented completion and error callbacks to a native Promise and await it. Do not assume that declaring the outer method `async` automatically waits for callbacks started inside it.

Also avoid `array.forEach(async function (...) { ... })` for work that must finish before the rule returns. Use a loop with `await` for sequential work. Parallel operations require deliberate coordination, especially when they change the same process fields or share table row context.

### Example: Generate a custom ID

This example generates a value such as `INCIDENT_2026_00042`. The designer supplies a prefix/namespace and a destination text field. The rule resolves date tags and expressions, requests a counter value for that namespace, pads the numeric suffix to a minimum of five digits, and updates the field.

The example uses Kianda's `kiandaforms/common` expression helper and the `/api/counter/up` endpoint. Those calls provide the counter-specific behaviour; the component structure and asynchronous execution pattern apply to other integrations too.

Create a second rule widget named **Generate custom ID**.

#### Widget UI

```handlebars
<div class="form-group">
  <label class="control-label">ID prefix / counter namespace</label>
  {{input
    type="text"
    required=true
    class="form-control"
    placeholder="INCIDENT_{YYYY}_"
    value=rule.settings.namespace}}
  <p class="help-block">
    Supported date tags: {YYYY}, {YY}, {MM}, {MMM}, {MMMM}.
    Kianda field expressions such as [FieldName] can also be used.
  </p>
</div>

<div class="form-group">
  <label class="control-label">Destination text field</label>
  {{field-picker
    process=process
    required=true
    allowText=false
    selectForms=false
    selectFields=true
    value=rule.settings.field}}
</div>
```

#### Widget Code

```javascript
import Ember from "ember";

export default Ember.Component.extend({
  async execute() {
    const process = this.get("process");
    const rule = this.get("rule");
    const destinationRef = rule.get("settings.field");

    if (!destinationRef || destinationRef.type !== "field") {
      throw new Error("Generate custom ID: select a destination field.");
    }

    const destination = process.findFieldByRef(destinationRef);

    if (!destination) {
      throw new Error("Generate custom ID: the destination field was not found.");
    }

    let namespace = rule.get("settings.namespace");

    if (typeof namespace !== "string" || namespace.trim() === "") {
      throw new Error("Generate custom ID: enter an ID prefix.");
    }

    // Use one captured date for every tag in this execution.
    const now = moment();

    namespace = namespace.trim().replace(
      /\{(YYYY|MMMM|MMM|MM|YY)\}/g,
      function (match, token) {
        return now.format(token);
      }
    );

    const common = require("kiandaforms/common").default;
    namespace = common.evaluateExpression(namespace, process, true);

    if (namespace === undefined || namespace === null ||
        String(namespace).trim() === "") {
      throw new Error("Generate custom ID: the prefix resolved to an empty value.");
    }

    namespace = String(namespace).trim();

    let response;

    try {
      // A data object lets jQuery encode the namespace as a query parameter.
      response = await $.getJSON("/api/counter/up", { namespace: namespace });
    } catch (requestError) {
      const status = requestError && requestError.status;
      const detail = status ? " (HTTP " + status + ")" : "";
      throw new Error("Generate custom ID: the counter request failed" + detail + ".");
    }

    if (!response || response.success !== true ||
        response.value === undefined || response.value === null) {
      throw new Error("Generate custom ID: the counter did not return a value.");
    }

    let suffix = String(response.value);

    if (!/^\d+$/.test(suffix)) {
      throw new Error("Generate custom ID: the counter value is not a non-negative integer.");
    }

    // Five digits is a minimum width; larger values are not truncated.
    while (suffix.length < 5) {
      suffix = "0" + suffix;
    }

    await process.setField(destination, namespace + suffix);
  }
});
```

This module needs no `settings()` method because it does not initialise defaults or register custom configuration behaviour. Its required controls provide the initial Designer checks, and `execute()` validates again before requesting a counter value.

Several implementation details matter:

- The date replacement is global, so a tag used more than once is replaced throughout the prefix. `moment()` is captured once, preventing different date lookups within the same execution.
- `[FieldName]` expressions are resolved through the Kianda expression helper after the date tags. Do not evaluate a designer's expression with JavaScript `eval()`.
- The namespace is passed as request data, so characters such as `&` and `#` are encoded instead of altering the query string.
- HTTP success is distinct from application success. A response with `success: false` must be treated as a failed operation.
- The field assignment is awaited as well as the HTTP request.

The date tags use the execution environment's Moment date and locale settings. If the ID scheme needs a fixed timezone or locale, define that requirement explicitly rather than assuming browser and background-task defaults are identical.

#### Choose when generation should occur

Configure the rule's conditions so it generates an ID only when the intended action requires one—for example, when the destination is empty. Repeated execution can request another counter value and overwrite the destination. An empty-field condition helps control normal workflow execution but is not a concurrency guarantee.

A counter request has a server-side effect before the process instance is saved. A later failure, cancelled form, or repeated request can consume a value without retaining the generated ID. This widget does not promise gapless numbering, exactly-once allocation, or automatic rollback of counter values.

For a test run, configure `INCIDENT_{YYYY}_`, select a text destination, and execute the rule from a separate button. Verify the date prefix, numeric suffix, and subsequent persistence through the normal process save. The suffix depends on the namespace's current counter state, so it need not start at `00001`.

### Error handling and dependent rules

Throw an `Error` with a useful message when the rule cannot perform its action. If you catch an error to add context, rethrow when the operation should still be reported as failed. A catch block that only logs and then returns makes the executor appear to have completed successfully.

Kianda captures execution failures in the event logs and `rule.settings.lastError`. Successful execution records `rule.settings.lastExecuted`. In an interactive session, an execution error is also shown to the end user.

**The engine continues to subsequent rules after a failure.** Neither `throw` nor `return false` cancels the overall sequence. Where later actions depend on success, design explicit conditions around the result or a dedicated outcome field. If you use an outcome field, reset it at the beginning of each attempt and set it to success only after all required work completes; otherwise a previous successful value may incorrectly allow later actions.

Also account for partial changes: if an action updates two fields and fails while updating a third, throwing an error does not imply that the first two updates or an external API operation were rolled back. Decide how later Save rules and other business actions should handle that state.

## 7. Build richer settings interfaces

The `.hbs` template is a normal Ember component template. Use HTML and native Ember helpers alongside Kianda's reusable components. Keep persistent configuration on `rule.settings`; use component properties for temporary UI state such as expanded sections and validation highlights.

### Common platform components

| Component | Typical use | Configuration binding |
| --- | --- | --- |
| `input`, `textarea` | Native Ember inputs for simple values. | `value=rule.settings.someValue` |
| `field-picker` | Select a process field, or optionally a literal text value. | `value=rule.settings.someReference` |
| `radio-button` | Offer a small set of mutually exclusive options. | `group=rule.settings.someMode` |
| `person-picker` | Select people, groups, or partners according to the component's options. | `value=rule.settings.users` |
| `rich-text` | Provide a rich-text editor using Summernote and CodeMirror. | `contents=rule.settings.message` |

#### Field picker

This configuration exposes field/table selection and stores the selected reference on the rule:

```handlebars
{{field-picker
  required=true
  allowText=false
  selectForms=false
  selectFields=true
  selectTable=true
  showButtons=true
  value=rule.settings.selectedField
  process=process}}
```

Use the picker options appropriate to the operation. For example, the table-copy widget restricts its choices to the table component types:

```handlebars
{{field-picker
  required=true
  includes='["fields/field-table", "fields/field-table2"]'
  allowText=false
  value=rule.settings.tableFrom
  process=process}}
```

Use `allowText=true` for source inputs that can accept a constant. Resolve such inputs with `process.getFieldRefText()` instead of assuming every reference has a field name.

#### Radio buttons

Buttons in one option group share a `name` and bind to the same `group` property. Their `value` properties represent the stored choice; their labels are the text shown to the designer.

```handlebars
{{radio-button
  default=true
  name="copyMode"
  label="Override"
  value="override"
  group=rule.settings.copyMode}}
{{radio-button
  name="copyMode"
  label="Append"
  value="append"
  group=rule.settings.copyMode}}
```

This is a UI example; the widget's `execute()` must implement the selected behaviour. Use `settings()` to supply missing stored defaults where needed, and keep an appropriate runtime fallback for older configurations.

#### Person picker

For a simple selection stored on the rule:

```handlebars
{{person-picker value=rule.settings.users}}
```

More advanced configurations can use options such as `showPrincipalMenu`, `showPerson`, `showGroup`, `showPartner`, `principalType`, `memberOf`, and `maxSelectedItems`. Bind the settings your rule needs, and handle the returned selection's structure in your executor. Do not assume that the returned value is a single username string.

#### Rich-text editor

```handlebars
{{rich-text
  class="modern-richtext-editor"
  contents=rule.settings.message
  height=220
  sanitize=true
  showCodeview=false
  showImageDialog=true
  showFontName=false}}
```

This stores the editor contents in the rule's configuration. Rendering an editor does not send a message or update a process field; the executor must use the configured contents for the intended action.

### Conditional UI and component actions

Use `ember-truth-helpers` to show settings that are relevant to the selected mode:

```handlebars
{{#if (or (eq rule.settings.copyMode "unique")
          (eq rule.settings.copyMode "merge"))}}
  <p class="help-block">Select at least one destination key column.</p>
{{/if}}
```

For repeatable configuration items, use component actions and Ember-aware array updates. This component fragment adds and removes entries from a list of selected key columns:

```javascript
actions: {
  addColumn() {
    let columns = this.get("rule.settings.keyColumns");

    if (!columns) {
      columns = Ember.A();
      this.set("rule.settings.keyColumns", columns);
    }

    Ember.A(columns).pushObject({ field: null });
  },

  removeColumn(column) {
    const columns = this.get("rule.settings.keyColumns");

    if (columns) {
      Ember.A(columns).removeObject(column);
    }
  }
}
```

Buttons in the settings template can invoke those actions:

```handlebars
{{#each rule.settings.keyColumns as |column|}}
  <div class="form-group">
    {{field-picker
      process=process
      allowText=false
      required=true
      value=column.field}}
    <button type="button" class="btn btn-default"
      {{action "removeColumn" column}}>Remove</button>
  </div>
{{/each}}

<button type="button" class="btn btn-primary"
  {{action "addColumn"}}>Add key column</button>
```

The excerpt illustrates editing a list of references. A table-specific UI should additionally restrict those choices to the destination table's columns. The executor must validate that the selected keys belong to its destination and are included in the mapping.

### Available addons

The environment covered by this guide includes:

| Addon | Version | Relevant use |
| --- | --- | --- |
| `ember-moment` | `8.0.1` | Date formatting; Kianda also exposes the commonly used global `moment()` function. |
| `ember-truth-helpers` | `2.0.0` | Template conditions such as `eq`, `not-eq`, `and`, and `or`. |
| `ember-collection` | `1.0.0` | Collection rendering for larger or more dynamic settings interfaces. |

Use the available platform components before introducing another UI dependency. The [Ember 2.18 component guides](https://guides.emberjs.com/v2.18.0/components/defining-a-component/) provide additional background on classic component development.

## 8. Develop table-processing rules carefully

A rule such as **Copy unique rows** combines several techniques: source and destination table pickers, a conditions editor, input/output mapping, mode selection, and repeatable key-column settings.

Its Designer UI can use `rules/rule-conditions` to edit a filter and `input-mapping` to configure column mappings. These components prepare configuration; the runtime code still needs to evaluate conditions and apply the mappings.

For example, the conditions editor can bind a serialised filter to the rule:

```handlebars
{{rules/rule-conditions
  btnText="Copy row conditions"
  leftUseList=true
  leftNodeList=rule.settings.tableFrom.rows
  conditions=rule.settings.filter
  process=process
  serialize=true}}
```

This is an advanced component configuration using the table selection's design metadata. Resolve the selected table model for runtime work rather than treating that metadata as the runtime table's data rows.

### Define the copy modes

| Mode | Intended behaviour |
| --- | --- |
| All rows | Add a destination row for every qualifying source row. |
| Unique rows | Add a row only when no destination row matches its configured key columns. |
| Merge rows | Update a matching destination row; create a new row when there is no match. |

The table model exposes `rows`, `createRow()`, and each row's `subFields` for this kind of operation. A destination cell can be resolved from `subFields` and updated with `await process.setField(cell, value, text)`.

The difficult part is maintaining the execution context and a well-defined matching policy:

1. **Validate before changing rows.** Check both tables, every source/destination mapping, the selected mode, and the key references. Reject the same table as source and destination for a copying operation that appends rows: iterating a live source array while appending to it can keep extending the loop.
2. **Require keys for unique and merge modes.** A comparison over an empty key list can incorrectly consider every row a match. Each key must refer to a valid destination column that the rule can compare against a mapped source value.
3. **Define equality for the chosen field types.** Strict equality between array or object values compares identity, not their contents. Decide which scalar identifiers or normalised values constitute a duplicate.
4. **Keep row-dependent work sequential.** Field-name resolution can depend on `process.rowContext`. Set the appropriate context for each row and await its condition evaluation and field writes before moving to the next row. Do not run these operations concurrently against shared row context.
5. **Restore context in a `finally` block.** Capture the previous `rowContext`, `isInRowContext`, and `secondaryRowContext`, then restore all three values even if a condition, mapping, or field update throws. Setting secondary context to `null` is not equivalent to restoring a previously existing context.
6. **Include callbacks in execution completion.** If condition evaluation uses a callback, make sure its completion is awaited or returned. An asynchronous outer method cannot detect an unawaited callback's completion by itself.

These requirements also apply to rules that iterate table rows for validation, aggregation, or synchronisation. Test first with simple scalar key columns, then add specialised field types deliberately.

## 9. Use lifecycle hooks and services appropriately

Rule widgets can use the normal Ember component mechanisms while respecting Kianda's distinction between configuration and execution.

| Hook or feature | Appropriate use |
| --- | --- |
| `init()` | Initialise per-component state that does not require a rendered element. Call the inherited implementation. |
| `settings()` | Initialise missing rule settings and register Designer validation when the rule is opened for editing. |
| `didInsertElement()` | Initialise an integration that needs the rendered settings UI. It is not a prerequisite for runtime execution. |
| `willDestroyElement()` | Clean up integrations tied to the rendered DOM element. |
| `willDestroy()` | Release subscriptions to other objects and other instance resources. Call the inherited implementation. |
| `actions` and computed properties | Implement interactive settings behaviour and derived UI state. |
| `execute()` | Perform the runtime business action using the supplied context and saved configuration. |

Mutable component state should be initialised per instance rather than as a shared array or object on the component definition. For example:

```javascript
init() {
  this._super(...arguments);
  this.set("errors", {});
  this.set("availableOptions", Ember.A());
}
```

Keep external requests and business mutations out of `init()` and rendering hooks unless they are specifically required for configuration. Component creation alone should not perform the action that belongs in `execute()`.

See the [Ember 2.18 component lifecycle](https://guides.emberjs.com/v2.18.0/components/the-component-lifecycle/) and [CoreObject lifecycle API](https://api.emberjs.com/ember/2.18/classes/coreobject/) for the underlying hook behaviour.

### Service injection

Rules can inject available Ember services such as the store and process engine. These are component-property declarations to add when needed:

```javascript
store: Ember.inject.service(),
processEngine: Ember.inject.service("process-engine")
```

Access an injected service with `this.get("store")` or `this.get("processEngine")`. The active `ruleEngine` is already supplied in the runtime context; do not replace it merely because an older example also declares a service injection with that name.

Only use methods supported by the particular service. A service's availability does not establish an API contract for every internal method. The [Ember services guide](https://guides.emberjs.com/v2.18.0/applications/services/) explains the injection mechanism.

When integrating non-Ember asynchronous callbacks that directly mutate Ember state, also consider [Ember's run loop](https://guides.emberjs.com/v2.18.0/applications/run-loop/). This is separate from returning a Promise that tells Kianda when the rule has finished; it does not change the recommendation to use native Promises and the platform field APIs.

## 10. Support browser and background execution

Custom rules can run both in the browser and in scheduled tasks. Business logic intended for background execution must complete without user interaction.

- **Do not open dialogs or wait for user input in background rules.** A dialog can cause the scheduled execution to time out.
- Obtain input from the supplied process and rule settings. Do not depend on values held only by an open settings editor or a visible form control.
- Await requests and field updates, and report failures through the normal execution error path.
- Treat API-side changes and saved process data as separate effects. Decide what should happen if the task is repeated or fails partway through.

The Format text and Generate custom ID examples read configuration and update process data without rendering their own UI. Test the intended rule in a scheduled task as well as an interactive process before relying on background operation, including its service access and failure path.

Use the [Schedule a rule](/platform/rules/workflow/schedule-a-rule/) documentation to configure the surrounding scheduled workflow.

## 11. Compile, debug, and maintain the widget

### What Update does

When you click **Update** in Developer, Kianda precompiles the widget with Babel and generates a JavaScript source map (`.map`) that is made available under public files. The source map helps browser developer tools relate compiled JavaScript to the authored source.

Keep these operations distinct:

| Operation | What you are changing |
| --- | --- |
| Update the widget in Developer | The reusable component's implementation and compiled assets. |
| Save a rule's configuration in Designer | Settings for that particular use of the widget. |
| Save/publish the process design | The surrounding process definition, rule attachment, order, and conditions. |
| Execute the process's Save rule | Persist changes to the running process instance. |

After updating code, refresh the test page and verify that it loads the intended compiled asset before diagnosing a result. Use the normal process save/publish workflow when changing its definition. The compilation step alone does not describe cache invalidation, version pinning, or propagation to already open processes; verify the deployed behaviour when planning a change used by existing processes.

Keep settings compatible when maintaining a reusable widget. Adding a default for a missing setting is usually easier to manage than renaming or removing a setting used by existing rule configurations. If a configuration change is necessary, handle that change explicitly and retest representative existing rules.

### Debug a custom rule

1. **Reproduce in a test process.** Trigger the rule from a known attachment point with a small, predictable input.
2. **Inspect the supplied models.** Use browser developer tools or Ember Inspector to check `rule.settings`, resolved fields, and the relevant process state.
3. **Set a breakpoint in `execute()`.** Use the generated source map, or temporarily add a `debugger;` statement to the source. A breakpoint in `didInsertElement()` will not diagnose runtime execution that does not render the component.
4. **Follow asynchronous work.** Inspect the Network panel and confirm that requests and field assignments are awaited before later rules execute.
5. **Check the recorded outcome.** Review event logs, `settings.lastError`, and `settings.lastExecuted`, together with the current rule input. Do not infer current success from an old diagnostic alone.
6. **Verify persistence separately.** A visible field change and a saved process instance are different checks. Run the normal Save rule and reopen the instance when validating persistence.

Kianda also provides a [Rule debugger](/troubleshooting/rule-debugger/) for stepping through rules and [Rule diagnostics](/troubleshooting/rule-diagnostics/) for investigating process instances. See [Custom widget debugging](/troubleshooting/custom-widget-debugging/) for browser debugging techniques.

### Troubleshooting reference

| Symptom | What to check |
| --- | --- |
| A configured field is undefined at runtime | Ensure the picker writes to `rule.settings`, resolve its reference against the current process, and check whether the referenced field still exists. |
| Reading a source produces its title rather than its data | A field reference's `text` is its selection label. Resolve the field or use `getFieldRefText()` for runtime text. |
| Later rules execute before a request or list update finishes | Await or return every required asynchronous operation, including `setField()` and callback-based work. |
| The next rule still runs after an error | This is the engine's expected behaviour. Add appropriate conditions for actions that depend on success. |
| The same rule repeatedly triggers itself | Inspect rules attached to fields updated through `setField()`, including indirect update cycles. |
| Changes appear on screen but are missing after reopening | Verify that the workflow executed a Save rule successfully. |
| A scheduled task times out | Check for dialogs, awaited user input, unresolved callbacks, or requests that do not complete. |
| Validation messages repeat each time the editor is opened | Remove previous `saving` listeners and clean up the subscription on component destruction. |
| A settings edit works but runtime execution fails | Remove dependencies on rendered UI state or `didInsertElement()`. Read required inputs from the rule model. |
| Updated code does not appear in the debugger | Check compilation, the asset loaded by the page, source-map loading, and browser caching. |

### Test before reuse

For each rule, verify a normal execution, missing or outdated configuration, and a failure path. For an asynchronous rule, also check that subsequent work observes its completed result. Reopen the settings UI to confirm values are retained and validation does not accumulate listeners.

For the examples in this guide, useful checks include literal and field-based text inputs, an empty runtime source, a removed destination, a counter error, repeated ID generation, and saving/reopening the process. For table rules, add empty tables, duplicate keys, missing keys, matching value types, and context restoration after a failed update.

## Related documentation

- [Rules and rule configuration](/platform/rules/)
- [Adding conditions](/platform/rules/general/conditions/)
- [Field widget development](/low-code/field-widget/)
- [Ember.js in Kianda](/low-code/emberjs/)
- [Custom widget debugging](/troubleshooting/custom-widget-debugging/)
- [Rule debugger](/troubleshooting/rule-debugger/)
- [Rule diagnostics](/troubleshooting/rule-diagnostics/)
