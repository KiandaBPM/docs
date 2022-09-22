---
title: "What is Low-Code Development?"
linkTitle: "Low-code development"
weight: 4
typora-root-url: ..\..\..\static
---

## Introduction ##

As Kianda is built using front-end technologies like **CSS** and **JavaScript**, you can use your software development skills to tweak your given workspace design and functionality by editing files found under the [Subscription](/docs/platform/administration/subscription/) function. More specifically, Kianda uses **Ember.js**, an open-source JavaScript web framework used to allow you to build highly interactive applications that work on any device. Ember uses the **Handlebars** templating library to build the user interface using static HTML and dynamic content, see [Best practices](/docs/low-code/best-practices/) and [Templating basics](/docs/low-code/templating-basics/) for more information.

***Front-end technology stack***

<img src="/images/tech-stack.jpg" alt="Front-end technology stack" style="zoom:25%;" />

You don't need to be an expert in Ember or Handlebars to develop content in Kianda. Kianda's low-code development user interface allows you to build new customised widgets without having to write extensive pieces of code. Kianda's **Developer** resources provide the possibility to create these custom widgets for example, a new field type, by building on Kianda's existing library of components. 

## Ways of customising your organisation's workspace

Building custom widgets is just one example of how you can use your skills to change your organisation's workspace. Using your **administrator** role, and accessing **Administration** functions there are several ways you can customise the Kianda platform as a developer, typically by:

1. Editing the [**Global JavaScript file**](/docs/low-code/global-javascript-file/)

2. Editing the [**Global CSS file**](/docs/low-code/global-css/)

3. **Building widgets** for [rules](/docs/low-code/rule-widget/), [fields](/docs/low-code/field-widget/), [dashboards](/docs/low-code/dashboard-widget/) and [data connectors](/docs/low-code/client-connector/)

4. [**Customising list widgets**](/docs/low-code/list-widget-template/) to present data in dashboards

5. Creating beautiful [**rich text**](/docs/low-code/global-css/#process-and-dashboard-specific-css) for emails and forms

In addition to the above customisations, you can use your JavaScript knowledge to create smart [**expressions**](/docs/low-code/javascript-expressions/) that can be used in text box, number and rich text fields, as well as **anywhere that uses rich text** like [Send email rule](/docs/platform/rules/communications/send-email/) body text for emails, [Meeting request rule](/docs/platform/rules/communications/meeting-request/) and rich text widget for dashboards. 

Click on the links above to get more information on the areas mentioned. Building custom widgets is introduced below.



### Widget development basics

Kianda comes with several pre-defined field, rule, data connector and dashboard widgets. In case you want to create something else to satisfy your specific needs you can create your own custom widget if you have some level of development skills.

Kianda offers a user-friendly interface, **Developer**, to create custom widgets in a few minutes. A custom widget could be a 'Field' widget or a 'Rule widget'. Below we have an introduction video on how to create a custom field widget.

<video width="100%" style="width:100%" controls>
    <source src="/videos/Creating a widget.mp4">
    Your browser does not support the video tag.
    </source>
</video>



### Example: Field widget

The code blocks below display the default code for 'Widget UI' and 'Widget Code'.

The 'Widget UI' uses [Handlebars](/docs/low-code/templating-basics/) syntax and defines the HTML, handlers, expressions and more.

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



For more information on the other areas of customisation/widget development, click on the links below:

- [Rule development](/docs/low-code/rule-widget/)
- [Dashboards](/docs/low-code/dashboard-widget/)
- [Data connectors](/docs/low-code/client-connector/)
