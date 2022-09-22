---
title: "Templating basics"
weight: 3
typora-root-url: ..\..\..\static
---

## Introduction 

Kianda uses **Ember.js** to build modern web applications for your business, and in particular the **Handlebars** templating library to power the application's user interface. Handlesbars is simply a templating language that generates HTML or other text formats to build web pages. 

Handlebar templates are written as expressions using double curly braces {{}} for example:

`<p>{{firstname}} {{surname}}</p>`

When the template is executed, the expressions above between the braces is replaced with values from an input object. For example in a Kianda form if a **user types in values** or a **rule dynamically assigns values** to text boxes for example, the values are applied to the input object as follows:

```handlebars
{
  firstname: "Ryan"
  surname: "B'Oul"
}
```

The expressions will be replaced by the values resulting in:

`<p>Ryan B'Oul</p>`

If the input objects contains other objects or arrays, for example:

```
{
 person: {
  firstname: "Ryan"
  surname: "B'Oul"
  },
}
```

A dot notation can be used to access the property of the 'person' object as follows:

`<p>{{person.firstname}} {{person.surname}}</p>`



## Handlebar basics

As shown above, Handlebar templates contain **static HTML** and **dynamic content** inside Handlebars expressions.

Dynamic content inside a Handlebars expression is rendered with data-binding. This means if you update a property, your usage of that property in a template will be automatically updated to the latest value.

### Helpers 

Ember gives the ability to write your helpers, to bring a minimum of logic into Ember templating. For example, let's say you would like the ability to add a few numbers together, without needing to define a computed property everywhere you would like to do so.

***Helper example***

![Helpers](/images/write-our-own-helpers.png)

#### Conditionals

Statements like **if** and **unless** are implemented as built-in helpers. Helpers can be invoked three ways; inline invocation, nested invocation and block invocation. For more details, click on the following link https://guides.emberjs.com/v2.18.0/templates/conditionals/.
