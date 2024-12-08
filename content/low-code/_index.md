---
title: "Building Apps with Kianda’s Low-Code Platform"
linkTitle: "Low-code development"
weight: 4
typora-root-url: ..\..\..\static
description: "Low-code development guides. Developers start here"
---

Kianda is a low-code development platform designed for web developers who want to create robust business process applications without getting bogged down in complex coding tasks. Because Kianda is built on open web technologies—primarily **CSS**, **JavaScript**, and micro-services—you can put your existing skills to work right away. Instead of grappling with proprietary systems, you’ll find familiar tools and frameworks, making it straightforward to build and customize applications to meet your organization’s needs.

## Key Technologies Under the Hood

Kianda’s front-end leverages established, open-source tools including **Ember.js**, **Bootstrap**, and features like web sockets and AJAX for real-time, responsive interfaces. This front-end stack lets you quickly create modern, dynamic user experiences using the same skills you apply every day in web development.

On the back-end, Kianda’s architecture is powered by scalable micro-services running on top of widely used technologies like **.NET** and **Node.js**, ensuring that your applications are both reliable and easy to maintain. By embracing these open standards, Kianda allows you to integrate seamlessly with other systems and tools in your ecosystem.

### Ember.js and Handlebars

Kianda’s user interface is built using **Ember.js**, an open-source JavaScript framework well-known for its convention-over-configuration approach. This means you can write less boilerplate code while still delivering high-quality, maintainable applications. Ember.js works hand-in-hand with the **Handlebars** templating library. Handlebars makes it simple to bind data to templates, dynamically generate HTML, and reuse common UI patterns.

If you’re already comfortable with JavaScript and modern CSS frameworks, you’ll find working with Ember.js and Handlebars an easy step forward. For more on best practices, see our [Ember Inspector guide](/low-code/using-the-ember-inspector/) and explore [Ember.js documentation](https://guides.emberjs.com/release/) and [Handlebars documentation](https://handlebarsjs.com/guide/).

## Why Choose Low-Code with Kianda?

Low-code development reduces the time and effort needed to build enterprise applications. By using Kianda’s graphical interface and predefined building blocks, you can rapidly assemble process apps that integrate with your company’s workflows. At the same time, Kianda’s openness means you’re never locked in. If a standard component isn’t a perfect fit, you can dive into the code and craft a solution that suits your exact requirements.

Kianda provides a large selection of ready-to-use fields and rules, so non-developers can create forms and workflows without writing code. But when you need something more advanced, Kianda’s low-code approach lets you implement custom logic and UI widgets using the CSS and JavaScript skills you already have.

For example, you might create a new field type that displays images in a custom layout or build a bespoke rule widget for integrating with an external data source. You can also fine-tune list widgets for dashboards or write JavaScript expressions to automate tasks like generating unique IDs or formatting text.

## What You Can Do as a Developer

With an **administrator** role, you have access to **Administration** functions that let you tailor the platform:

- Modify the [Global JavaScript](/low-code/global-javascript-file/) and [Global CSS](/low-code/global-css/) files to set application-wide styles or logic.
- Create custom [Field](/low-code/field-widget/), [Rule](/low-code/rule-widget/), [Dashboard](/low-code/dashboard-widget/), or data connector widgets to extend the platform’s capabilities.
- Integrate external data sources and use your own JavaScript expressions in fields, rules, or anywhere rich text is used, like in emails and dashboards.
- Customize list widgets to display data in dashboards in a way that makes sense for your organization’s metrics and KPIs.
- Incorporate HTML and custom styling in forms and emails to produce richer user experiences.

These options give you the flexibility to shape Kianda to fit your exact business processes, without leaving the familiar territory of open web development.

## Kianda Developer: Your Interface for Custom Widgets

**Kianda Developer** is a user-friendly interface that lets you build and manage reusable widgets. Instead of starting from scratch, you can focus on your core logic or design. You can create:

- **Field widgets**: Custom UI elements that appear on-screen, such as specialized inputs or interactive controls.
- **Rule widgets**: Automated logic components that manipulate data, set statuses, or initiate actions.
- **Dashboard widgets**: Dynamic visualizations or layouts for presenting information on dashboard pages.
- **Data connector widgets**: Integrations for sending and receiving data from external sources.

### Getting Started with Kianda Developer

1. Open **Administration** > **Developer** to see all custom widgets in your environment.
2. Browse existing widgets, review version histories, edit or delete widgets, and easily restore previous versions.
3. To create a new widget, click **New widget**, provide a title, pick an icon, and choose a widget type. Then add your HTML, Handlebars, and JavaScript logic.
4. Once you’re done, you can export your custom widget as part of a Kianda file and import it into another environment. This portability ensures you can reuse and share your work seamlessly.

### Example of a Field Widget

Below is an example of a simple field widget’s Handlebar and JavaScript code. The Handlebar template adapts based on the widget’s display mode (design, edit, settings, display), and the JavaScript object defines functions for each mode.

**Handlebars UI:**
```handlebars
{{#if (eq displayMode "design")}}
  {{input required=field.required maxlength="4" type="text" value=field.text class="form-control"}}
{{/if}}

{{#if (eq displayMode "edit")}}
  {{input required=field.required maxlength="4" type="text" value=field.text class="form-control"}}
{{/if}}

{{#if (eq displayMode "settings")}}
  <!-- Add UI for settings here if needed -->
{{/if}}

{{#if (eq displayMode "display")}}
  <p class="text-muted">{{field.text}}</p>
{{/if}}
```

**JavaScript Logic:**
```javascript
{
  edit: function() {
    // Code for edit mode
  },
  display: function() {
    // Code for display mode
  },
  settings: function() {
    // Code for settings mode
  }
}
```

This structure allows you to cleanly separate your UI and logic, making development and maintenance straightforward.

### JavaScript Expressions Everywhere

Kianda supports using JavaScript expressions throughout its platform—inside fields, rules, and email templates. For instance, you can combine multiple field values to generate new strings, format data dynamically, or even create direct links to specific process instances with functions like `ProcessLink()`.

To learn more, visit our [Expression builder guide](/platform/rules/general/expression-builder/) and explore how to inject logic and dynamic content anywhere you need it.

---

By building on open technologies like CSS, JavaScript, Ember.js, and Handlebars, Kianda lets you apply the full range of your web development experience. Whether you’re creating simple apps or highly customized widgets, Kianda’s low-code approach helps you deliver results faster—without sacrificing flexibility or control.
