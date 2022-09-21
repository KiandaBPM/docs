---
title: "Low-Code development best practices"
linkTitle: "Best practices"
weight: 12
typora-root-url: ..\..\..\static
---

## Introduction

Kianda uses front-end technologies like CSS and JavaScript and more specifically a framework called **Ember.js** that is an open-source Javascript web application that allows you to build highly interactive applications that use JavaScript in a quick and efficient manner. Ember UIs use HTML meaning that everything you see on screen in Kianda is defined in a HTML template somewhere within the Kianda application. Ember allows you **inspect components** found in [Kianda forms](docs/platform/application-designer/forms/) on screen for example a button, a rule, a panel and so on. You can use this knowledge to create your own rule, field, dashboard and data connector widgets.

To get the make the most out of your Kianda customisation we recommend installing and using the **Ember inspector** to help you understand what Kianda components are available, what their properties are and how they are used. The next section details how you can get started with Ember.

## How to get started with Ember Inspector

The Ember inspector is a Chrome plug-in that allows you to investigate and understand your Ember.js. This browser add-on can be installed on Google Chrome, Firefox and other browsers. For example to install the add-on in Chrome, go to the Chrome web store, search for 'Ember inspector' and then in the search results click on the add-on and **Add to Chrome**. 

To get started using the Ember inspector:

1. Click on **Add extension**.

2. Open your Kianda workspace, for example https://your-organisation.kianda.com

3. Log in to Kianda, then navigate to a form, and open the Ember inspector by right-clicking on a page for example in Google Chrome and click on **Inspect**.

4. Then click on the **Ember** tab.

5. In the left-hand pane you will see **Components**, **View Tree**, **Routes**, **Data** and **Depreciations** amongst other options.

6. In the central pane you can drill down to a particular component, for example, in the form below, a **Hide or disable rule** is about to be added. You can see what the components are within this modal/edit rule dialog box by scrolling over the components in the central pane.

   ![Inspecting a rule modal using Ember inspector](/images/ember-rule-editor.jpg)

   By highlighting the **rule editor component** we can see the template used appear on screen. 

7. If you click on the component itself, then the properties of that component appear in the right-hand pane. For example the properties of a field-picker component are seen in the image below.

   ![Component properties in Ember inspector](/images/ember-properties-example.jpg)

   In this way you can view all the components within Kianda and the properties associated, for example by default the field-picker component used in the modal in step 6 has a property 'allowText' false, that is text is not typed in but the user chooses form elements from a drop-down list.

   ![Field picker example](/images/field-picker-example.jpg)

8. To read more about Ember.js go to https://guides.emberjs.com/release/ in particular the [Components pages](https://guides.emberjs.com/release/components/) as well as other **Core concepts**.

