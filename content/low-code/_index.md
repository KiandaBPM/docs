---
title: "How does Kianda Low-Code Development Work?"
linkTitle: "Low-code development"
weight: 4
typora-root-url: ..\..\..\static
description: "Low-code development guides. Developers start here"
---

As Kianda is built using open web technologies based on **CSS** and **JavaScript** and **micro-services**, you can use your existing web software development skills to build amazing apps with your given workspace. 

More specifically the building blocks of the Kianda platform include **Ember.js** and **Bootstrap** and other front-end technologies like web sockets, AJAX and more. From a back-end point of view Kianda is powered by highly scalable micro-services that use a variety of technologies like .NET, NodeJS and more.

To get started as a developer in Kianda the only requisite is to have CSS and JavaScript working knowledge. Familiarity with Handlebars or Emberjs is a plus but any web developer could pick this quickly.



## Why choose low-code development? 

Kianda’s low code development environment provides developers with a graphical user interface to quickly create customised applications that can be used in automated processes. Kianda **Developer** allows you to quickly build **reusable widgets** allowing you to extend the functionality of the system. You can define the functionality or module that you want to define and deliver that module for inclusion in an application design, without the need to invent all the code from scratch. For example you could create a custom control that allows you to display images in a particular way, see [Custom field development](/low-code/field-widget/).

Providing you have some software development and/or coding experience, low-code development can allow you to implement customised Kianda widgets to meet user-specific needs such as creating custom ‘Field’, ‘Rule’ or ‘Dashboard widget’ elements.

There are 16 predefined fields and 60 rules available for non-developers to use in a no-code form design GUI. However if these do not suit, then Kianda’s low-code development solution provides near limitless room for process expansion. As the Kianda platform offers access to any data source (including real-time synchronisation of the data) and integration with many other software tools and applications, the implementation of low-code can provide your business processes with extreme scalability and room for improvement.

You can also build upon pre-defined field, rule. data connector and dashboard code to offer the developer a shortcut in creating something new and beneficial for the organisation. For example, you can see a **rule widget user interface** being designed below, using HTML, handlers, expressions and more.

### Ember.js ![Ember logo](/images/ember-logo.png) ####

Kianda uses **Ember.js**, an **open-source JavaScript web framework** used to build highly interactive applications that work on any device. Ember is built using **JavaScript** hence the .js extension. 

The Ember.js environment provides you with the **tools** to develop your applications, like libraries, templates, models and so on. One of the tools used more specifically used building Kianda form components is the **Handlebars templating library** described below. 

The beauty of Ember.js is that it allows you can create advanced web applications with less code. To read more about Ember.js go to https://guides.emberjs.com/release/ and also best practices [Using the Ember Inspector](/low-code/using-the-ember-inspector/) for information on using the Ember inspector to view existing code.

### Handlebars ![Handlebars](/images/handlebars.png)

Ember.js uses the **Handlebars templating library** to build the user interface for applications. Handlebars uses a template and an input object to **dynamically generate HTML** or other text formats. Handlebars also **includes built-in helper** functions and allows you to **build your own custom helper** functions. To read more about Handlebars go to https://handlebarsjs.com/guide/  and also [Templating basics](/low-code/templating-basics/) for more information.



## What can you do as a developer

Using your **administrator** role, and accessing **Administration** functions there are several ways you can **customise** your Kianda environment as a developer, typically by:

1. Editing the [Global JavaScript file](/low-code/global-javascript-file/)

2. Editing the [Global CSS file](/low-code/global-css/)

3. Building widgets for [rules](/low-code/rule-widget/), [fields](/low-code/field-widget/), [pages](/low-code/dashboard-widget/) and data connectors

4. [Customising list widgets](/low-code/list-widget-template/) to present data in dashboards

5. Creating [rich text](/low-code/global-css/#process-and-dashboard-specific-css) for emails and forms

In addition to the above customisations, you can use your JavaScript knowledge to create smart [expressions](/low-code/javascript-expressions/) that can be used in text box, number and rich text fields, as well as **anywhere that uses rich text** like [Send email rule](/platform/rules/communications/send-email/) body text for emails, [Meeting request rule](/platform/rules/communications/meeting-request/) and rich text widget for dashboards. 

Click on the links above to get more information on the areas mentioned. Building custom widgets is introduced below.

## Kianda Developer

Kianda comes with several pre-defined field, rule, data connector and dashboard widgets. In case you want to create something else to satisfy your specific needs you can create your own custom widget if you have some level of development skills in JavaScript and HTML.

Kianda offers a user-friendly interface, **Developer**, to create custom widgets in a few minutes. A custom widget could be a 'Field' widget or a 'Rule widget', for example getting started to create a custom field widget as shown in the video below.

<video width="100%" style="width:100%" controls>
    <source src="/videos/Creating a widget.mp4">
    Your browser does not support the video tag.
    </source>
</video>
Using Kianda Developer you can create reusable widgets, allowing you to extend the functionality of the system. There are four types of widgets you can create:

- **[Field](/low-code/field-widget/)** or control widgets - that allow you to create elements that will appear on screen to user
- **[Rule](/low-code/rule-widget/)** widget - these are used to automate actions, like extracting data from a form or setting a particular status within a process
- **[Dashboard](/low-code/dashboard-widget/)** widget - used to create a particular type of display in a dashboard page
- **Data connector** widget - used to connect to a particular data source so that Kianda can push or pull information to/from that data source

### Using Kianda developer
You can access Kianda Developer if you have an **administration** or **developer** role. To use **Developer:**

1. In the left-hand side pane click on **Administration** and then click on **Developer**.

2. Any customised widgets that have been created within your organisation will be visible in the **Developer resources** main widget view. Here you can see widgets by name, when the widget was **last modified**, **who modified** it, and the widget **type**.

   ![Developer view](/images/developer-view.jpg)

3. From the **Developer resources** main widget view you can:

   - View the widget creation history by clicking on the **Version History** button ![Version History button](/images/widget-version-history.jpg)

     The **Version history** dialog box opens showing the different versions of the widget. From here you can **restore** a version of the widget by clicking on the **Restore** button ![Restore button](/images/restore.png). Click on **Close** to exit the dialog box.

     ![Widget version history dialog box](/images/widget-version-history-dialog.jpg)

   - Edit a widget by clicking on the **Edit** (Pen) button  ![Edit widget button](/images/widget-edit.jpg)

   - Delete a widget by clicking on the **Bin/Trash** button  ![Delete widget button](/images/widget-delete.jpg)

4. To view details for existing widgets, click on the widget name such as 'Dashboard Number widget' as shown in the list above.

   ![Widget example](/images/widget-example.jpg)

5. In the **Widget** page you can update existing Widget UI and Widget Code within the editor and then click on **Update** ![Update button](/images/update-button.jpg). Alternatively click on **Close** to exit the page at any time.

6. To create a new widget click on **New widget** ![New widget button](/images/new-widget-button.jpg). This will open the **Edit widget** dialog box.

   ![Edit widget example](/images/edit-widget-page.jpg)

   Fill out details as follows:

   - **Title** - fill out a title for the widget.

   - **Unique Id** - this is a unique value that is autofilled from the Title.

   - **Widget Icon** - choose an appropriate icon from the drop-down list.

   - **Widget type** - choose from **[Field](/low-code/field-widget/)**, **[Rule](/low-code/rule-widget/)**, **[Dashboard widget](/low-code/dashboard-widget/)** or data connector widgets.

     Click on the links above to learn more about building specific types of widgets.

7. When you are finished editing the dialog box click on **OK** or click on **Close** at any time to exit. The output is shown in the next section.

When a custom widget is created it can be exported within a Kianda file along with process design and/or dashboards, or on its own. This file can then be imported into the same or different Kianda environments of your choosing, giving you flexible access to your custom widgets. To learn more about this, see [Exporting processes](/platform/application-designer/process/#exporting-processes) and [Importing processes](/platform/application-designer/process/#importing-processes).


### Example of a Field widget

The code blocks below display the default code for 'Widget UI' and 'Widget Code'.

The 'Widget UI' uses [Handlebars](/low-code/templating-basics/) syntax and defines the HTML, handlers, expressions and more.

```handlebars
{{#if (eq displayMode "design")}}
	{{input required=field.required maxlength="4" type="text" value=field.text class="form-control"}}
{{/if}}

{{#if (eq displayMode "edit")}}
	{{input required=field.required maxlength="4" type="text" value=field.text class="form-control"}}
{{/if}}

{{#if (eq displayMode "settings")}}
	
{{/if}}

{{#if (eq displayMode "display")}}
	<p class="text-muted">{{field.text}}</p>
{{/if}}
```



The 'Widget Code' is written in JavaScript and defines the logics and functions.

```javascript
{
 edit:function(){
 },
 display:function(){
 },
 settings:function(){
 }
}
```

### JavaScript Expressions

Expressions are available for use extensively throughout the platform, both in **controls** like text box, number and rich text, as well as **rules** like Send email and Set form field. 

The use of expressions allows you to cleverly manipulate data to create new constructs that can be used within processes. For example if an 'Onboarding process' requires that a new hire completes a 'new employee form' filling out their 'firstname' and 'lastname', it may be useful to combine the two input strings to create a new ID for the employee that combines the data from each field.

![Expression new employee ID example](/images/expression-id-example.jpg)

The [Expression builder](/platform/rules/general/expression-builder/) page provides an introduction to expressions and shows one example of expressions in use in a **Send email rule** to automate how emails are sent. The example simply uses the **[identifier]** or unique name from form fields to populate the body text of the email.

![Expression example](/images/expression-example.gif)

**ProcessLink()** is a function that will return a link to that particular process instance. You can use **any JavaScript functions** in the expression field to make advanced expressions throughout your Kianda forms, see below for how to get started.

## How to get started with JavaScript expressions ##

Expressions are recognisable in Kianda from the **Expressions** button ![Expressions](https://academy.kianda.com/wp-content/uploads/2022/02/ellipsis.png) found in **Edit rule dialog boxes** and controls like **text box**, **number** and **rich text**. 

Within rules, expressions can be created using the **Expression builder** where you can **Add field to an expression** or use the handy **Reference** guide to get a list of commonly used functions, such as **ProcessLink()**.

***Expression builder***

![Expression builder example in action](/images/expression-builder-eg.gif)

To create a field in a form that concatenates the values from two text boxes, we could start using expressions as follows:

1. In a simple form made up of three fields, we choose one field which is going to act as the trigger for an action. 

We can also insert JavaScript such as JavaScript Strings into the expression.

