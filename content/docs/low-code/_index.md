---
title: "What is Low-Code Development?"
linkTitle: "Low-code development"
weight: 4
typora-root-url: ..\..\..\static
---

Kianda comes with several pre-defined field, rule and dashboard widgets. In case you want to create something else to satisfy your specific needs you can create your own custom widget if you have some level of development skills. Kianda uses EmberJS to build modern web applications, and in particular the Handlebars templating library to power the application's user interface.



## EmberJS templating basics

With Handlebars you can quickly build web applications that are made up of different components. Handlebar templates contain static HTML and dynamic content inside Handlebars expressions, which are summoned with double curly braces: {{ }}

Dynamic content inside a Handlebars expression is rendered with data-binding. This means if you update a property, your usage of that property in a template will be automatically updated to the latest value.

### Helpers 

Ember gives the ability to write your helpers, to bring a minimum of logic into Ember templating. For example, let's say you would like the ability to add a few numbers together, without needing to define a computed property everywhere you would like to do so.

***Helper example***![Helpers](/images/write-our-own-helpers.png)

#### Conditionals

Statements like **if** and **unless** are implemented as built-in helpers. Helpers can be invoked three ways; inline invocation, nested invocation and block invocation. For more details, click on the following link https://guides.emberjs.com/v2.18.0/templates/conditionals/.



## Widget development basics

Kianda offers a user-friendly interface to create custom widgets in a few minutes. A custom widget could be a 'Field' widget or a 'Rule widget'. Below we have an introduction video on how to create a custom field widget and following to this video we explain with an example on how to build a custom widget.

<video width="100%" style="width:100%" controls>
    <source src="/videos/Creating a widget.mp4">
    Your browser does not support the video tag.
    </source>
</video>



### Field widget

The two images below display the default code for 'Widget UI' and 'Widget Code'.

The 'Widget UI' defines the HTML, handlers, expressions and more.

![Widget-UI](/images/widget-ui.PNG)

The 'Widget Code' defines the logics and functions.

![Widget-code](/images/widget-code.PNG)



### Rule widget

The two images below display the default code for 'Widget UI' and 'Widget Code'.

![Rule widget UI](/images/rulewidgetui150.PNG)



## List widget custom fields

The other widget types are:

- Rules
- Dashboards
