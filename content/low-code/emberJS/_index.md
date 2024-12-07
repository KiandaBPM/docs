---
title: "EmberJS"
weight: 3
typora-root-url: ..\..\..\static
---

Kianda uses **Ember.js** to build modern web applications for your business, and in particular the **Handlebars** templating library to power the application's user interface. Handlebars is a templating language that generates HTML or other text formats to build web pages. Handlebars allows two-way binding so that you can write data into models, and that data can be used by HTML to generate the final interface/screen. 

Handlebar templates are written as **expressions** using **double curly braces {{}}** for example:

`<p>{{firstname}} {{surname}}</p>`

When the template is executed, the expressions above between the braces are replaced with values from an input object. For example in a Kianda form if a **user types in values** or a **rule dynamically assigns values** to text boxes for example, the values are applied to the input object as follows:

```handlebars
{
  firstname: "Ryan"
  surname: "B'Oul"
}
```

The expressions will be replaced by the values resulting in:

`<p>Ryan B'Oul</p>`

In this way you can **define a JavaScript object** like 'person' below, with **properties** 'firstname' and 'surname':

```javascript
{
 person: {
  firstname: "Ryan"
  surname: "B'Oul"
  },
}
```

A dot notation can be used in the **Handlebars expression** to access the property of the 'person' object:

`<p>{{person.firstname}} {{person.surname}}</p>`

In this way the properties of the JavaScript object can be leveraged within the template above so that the generated HTML output is: `Ryan B'Oul`.



## Handlebar basics

Handlebar templates contain **static HTML** and **dynamic content** inside Handlebars expressions. The advantage of this is that if the property changes, for example 'firstname' shown in the [Introduction](#introduction) above, then the value dynamically changes in real time. This is because dynamic content inside a Handlebars expression is rendered with data-binding. This means if you update a property, your usage of that property in a template will be automatically updated to the latest value.

You can also use HTML with the Handlebars **template** as follows:

```
<h1>
{{person.firstname}}{{person.lastname}}
</h1>
```

In this way you can define the logic that you want and then update the properties of the objects as before.

You can also use **built-in block-helpers** with Handlebars to apply functionality that is not part of the Handlebars language. For example a built-in helper like `each` allows you to access the properties of objects using Handlebars expressions. For example you can have  simple expression using an **`each` statement** as follows:

```handlebars
<ul class="employee_list"
 {{#each employee}}
  <li>{{this}}</li>
 {{/each}}
</ul> 
```

You can have an list of employees:

```javascript
{
 employee: [
   "Ryan B'Oul"
   "Mike Balcoome"
   "Maddie Lehane"
 ],
}
```

The **dynamically generated output** is the following HTML:

```html
<ul class="employee_list"
 <li>Ryan B'Oul</li>
 <li>Mike Balcoome</li>
 <li>Maddie Lehane</li>
</ul> 
```

For more information on Handlebars see https://handlebarsjs.com/guide/, for more information on [Helpers](#helpers) see below.

## Helpers 

In the section above an example of `each`-helper was shown. This is an example of a built-in helper block that is available amongst other built-in helpers that you can use, see https://handlebarsjs.com/guide/builtin-helpers.html#if for other examples. Helpers are functions that can work out values and be used in templates. Helpers are written in JavaScript using Ember.js framework and used by Handlebars. 

For example if we look  the **`if` built-in helper** block,  `if` can be used in a **Handlebars expression** as follows:

```handlebars
<div class="department"
{{#if manager}}
<h1>{{firstName}} {{lastName}}</h1>
{{/if}}
</div>
```

Properties can be passed through as follows:

```javascript
{
  manager: true, 
  firstName: "Mike",
  lastName: "Balcoome",
}
```

When the `manager` property is true, then the generated HTML output will be:

```html
<div class="department">
<h1>Mike Balcoome</h1>
</div>
```

If the `manager` property is set to false, then the `firstName lastName` part will not display, in this way the helper is used to **dynamically** generate or hide the HTML output.

### Creating your own helpers ###

Using **Ember.js** gives you the ability to write your own helpers, to bring a minimum of logic into Ember templating. For example, let's say you would like the ability to add a few numbers together, without needing to define a computed property everywhere you would like to do so, you could create the following JavaScript code:

***Helper example***

![Helpers](/images/write-our-own-helpers.png)

#### Conditionals

Statements like **if** and **unless** are implemented as built-in helpers. Helpers can be invoked three ways; inline invocation, nested invocation and block invocation. For more details, click on the following link https://guides.emberjs.com/v2.18.0/templates/conditionals/.

## Ember inspector

 Ember UIs use HTML meaning that everything you see on screen in Kianda is defined in a HTML template somewhere within the Kianda application. Ember allows you **inspect components** found in Kianda on screen for example a button, a rule, a panel and so on. You can use this knowledge to create your own rule, field, dashboard and data connector widgets.

To get the make the most out of your Kianda customisation we recommend installing and using the **Ember inspector** to help you understand what Kianda components are available, what their properties are and how they are used. The next section details how you can get started with Ember.

### How to get started with Ember Inspector

The Ember inspector is a Chrome plug-in that allows you to investigate and understand your Ember.js. This browser add-on can be installed on Google Chrome, Firefox and other browsers. For example to install the add-on in Chrome, go to the Chrome web store, search for 'Ember inspector' and then in the search results click on the add-on and **Add to Chrome**. 

To get started using the Ember inspector:

1. Click on **Add extension**.

2. Open your Kianda workspace, for example https://your-organisation.kianda.com

3. Log in to Kianda, then navigate to a form, and open the Ember inspector by right-clicking on a page for example in Google Chrome and click on **Inspect**.

4. Then click on the **Ember** tab.

5. In the left-hand pane you will see **Components**, **View Tree**, **Routes**, **Data** and **Depreciations** amongst other options.

6. In the central pane you can drill down to a particular component, for example, in the form below, a **Hide or disable rule** is about to be added. You can see what the components are within this modal/edit rule dialog box by scrolling over the components in the central pane.

   ![Inspecting a rule modal using Ember inspector](/images/ember-rule-editor.jpg)

   By highlighting the **rule editor component** we can see the template used.

7. If you click on the component itself, then the properties of that component appear in the right-hand pane. For example the properties of a **field-picker component** are seen in the image below.

   ![Component properties in Ember inspector](/images/ember-properties-example.jpg)

   Using the Ember inspector you can view all the components within Kianda and the properties associated, for example by default the field-picker component used in the modal in step 6 has a property 'allowText' false, that is text is not typed in but the user chooses form elements from a drop-down list.

   ![Field picker example](/images/field-picker-example.jpg)

Further information is given on the field-picker component below. To read more about Ember.js go to https://guides.emberjs.com/release/ in particular the [Components pages](https://guides.emberjs.com/release/components/) as well as other **Core concepts**.

### Component example

The widget UI uses syntax called **Handlebars** that can be used by multiple languages. Kianda is built using **Ember.js** framework which in turn uses the **Handlebars templating library** to make changes to the user interface. The following is an example of widget UI code:

   ```handlebars
{{#if (eq displayMode "settings")}}
	<div class="form-group">
	<label class="control-label">Image to place pictures into</label>
    {{field-picker process=process required=true allowText=false includes='["fields/field-image"]' value=field.settings.imageDestination}} {{! Allow the user to select an image field to put the frame into}}
    <label class="control-label">Field to display warning message in</label>
	{{field-picker process=process required=true allowText=false value=field.settings.warningMessage}} {{! Allow the user to select a text field to display the warning message in}}
</div>
{{/if}}
   ```

In the example code block above, the **'`field-picker`' component** is called using Ember and the associated component properties include:

-  '`allowText=false`' meaning text is not entered into the field picker by a user
-  '`required=true`' meaning the field has to be completed, that is a field chosen, for the form to be submitted
-  '`value=field.settings.warningMessage`' meaning an input value will be stored in the `warningMessage` field 

The **field picker** for example is typically seen in **Edit rule** dialog boxes to allow users to choose a form field that will be used in rule execution, for example as shown for the **Hide or disable** rule below.

   ![Field picker component example](/images/field-picker-modal-example.jpg)

Other field-related components include field-date, field-group, field-textbox and so on for the 16 predefined fields that exist. A table of field-related components is listed below with attributes that can be found using **Ember inspector**.

***Field-related components***

| **Component**        | Example of attributes                         |
| -------------------- | --------------------------------------------- |
| field-base           | field: , displayMode: design ...              |
| field-button         | isFooter: true, field:  ...                   |
| field-component      |                                               |
| field-date           | tagName: , field: [Object] ...                |
| field-dialog         | tagName: , field: [Object] ...                |
| field-file           | tagName: , field: [Object] ...                |
| field-globalpayments |                                               |
| field-group          | tagName: , field: [Object] ...                |
| field-image          | tagName: , field: [Object] ...                |
| field-imagegallery   |                                               |
| field-link           | tagName: , field: [Object] ...                |
| field-list           | tagName: , field: [Object] ...                |
| field-number         | tagName: , field: [Object] ...                |
| field-panel          | field: [Object], displayMode: design ...      |
| field-picker         | required: true, selectForms: true ...         |
| field-signature      | tagName: , field: [Object] ...                |
| field-table-row      | tagName: tr, field: ...                       |
| field-table          | tagName: , field: [Object], ...               |
| field-text           | placeholder: [Object], required: [Object] ... |
| field-textbox        | tagName: , field: [Object] ...                |
| field-toggle         | tagName: , field: [Object], ...               |
| field-userpicker     | tagName: , field: [Object], ...               |
| table-row            | tagName: tr, field: ....                      |

   

