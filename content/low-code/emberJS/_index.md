---
title: "Introduction to Ember.js in Kianda"
linkTitle: "EmberJS"
description: "Learn about the emberjs in Kianda"
weight: 12
typora-root-url: ..\..\..\static
---

Kianda’s front-end is built on **Ember.js**, a framework designed for creating rich, interactive web applications. Ember provides a powerful structure for building interfaces that dynamically respond to user input and data changes. To produce its UI, Ember uses **Handlebars**, a templating language that makes it easy to bind data models to your HTML.

If you’re familiar with modern web development, you’ll find Ember’s approach intuitive: templates, components, and data binding come together to create a smooth, dynamic user experience within Kianda’s low-code environment.

## Handlebars: Templating Made Easy

**Handlebars** is a templating language that lets you write declarative HTML with embedded expressions. These expressions—enclosed in `{{double curly braces}}`—are automatically replaced by values from your data models.

For example:

```handlebars
<p>{{firstname}} {{surname}}</p>
```

If the data model provides:

```javascript
{
  firstname: "Ryan",
  surname: "B'Oul"
}
```

The rendered HTML is:

```html
<p>Ryan B'Oul</p>
```

This simple approach makes it easy to display dynamic data without writing complex logic. When data updates, the template refreshes automatically, ensuring users always see the latest state.

## Using Properties and Dot Notation

Handlebars supports “dot notation” to access nested properties in objects:

```handlebars
<p>{{person.firstname}} {{person.surname}}</p>
```

If `person` is an object with `firstname` and `surname` properties, Handlebars will replace them in the template, keeping your markup clean and readable.

## Built-in Helpers

Ember and Handlebars include **helpers**—functions used inside templates to handle common tasks. For example, `each` lets you iterate over arrays:

```handlebars
<ul>
  {{#each employee as |name|}}
    <li>{{name}}</li>
  {{/each}}
</ul>
```

Given:

```javascript
{
  employee: ["Ryan B'Oul", "Mike Balcoome", "Maddie Lehane"]
}
```

The template renders:

```html
<ul>
  <li>Ryan B'Oul</li>
  <li>Mike Balcoome</li>
  <li>Maddie Lehane</li>
</ul>
```

Similarly, `if` conditions let you show or hide content based on data:

```handlebars
{{#if manager}}
  <h1>{{firstname}} {{lastname}}</h1>
{{/if}}
```

If `manager` is `true`, the heading appears; if not, it’s hidden. Helpers let you add simple logic to templates without cluttering your code.

## Creating Custom Helpers

You can extend Ember’s capabilities by writing your own helpers. For instance, you might create a helper to format dates or combine multiple properties. This keeps your templates clean and your logic reusable.

## Inspecting the App with Ember Inspector

To better understand Kianda’s components and data, you can use the **Ember Inspector**—a browser add-on that helps you explore the internal structure of Ember apps. With it, you can:

- Inspect components and their properties.
- Understand the data models and routes.
- See which templates are used for specific UI elements.

**How to Get Started with Ember Inspector:**

1. Install the Ember Inspector from the Chrome Web Store or your browser’s add-ons marketplace.
2. Open your Kianda workspace and log in.
3. Right-click on the page and select **Inspect**.
4. Navigate to the **Ember** tab in the developer tools.
5. Explore components, routes, and data to learn how Kianda’s UI is constructed.

## Components and Properties

In Kianda, many UI elements—like fields, rules, and dashboard widgets—are implemented as Ember components. By inspecting them with the Ember Inspector, you can discover their properties and understand how they’re rendered. This knowledge can guide you when creating your own custom widgets or applying advanced customizations.

---

**In Summary:**  
Ember.js and Handlebars provide a robust foundation for Kianda’s dynamic interfaces. Handlebars lets you write simple, declarative templates tied directly to your data, while Ember’s helpers and components help keep your application organized and responsive. Combined with tools like the Ember Inspector, these technologies give you the power to understand and customize Kianda’s front-end to suit your needs.

   

