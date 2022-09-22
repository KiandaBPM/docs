---
title: "What is Low-Code Development?"
linkTitle: "Low-code development"
weight: 4
typora-root-url: ..\..\..\static
---

## Introduction ##

As Kianda is built using front-end technologies like **CSS** and **JavaScript**, you can use your software development skills to tweak your given workspace design and functionality by editing files found under the [Subscription](/docs/platform/administration/subscription/) function. 

#### Ember.js ![Ember logo](/images/ember-logo.png) ####

More specifically, Kianda uses **Ember.js**, an open-source JavaScript web framework used to allow you to build highly interactive applications that work on any device. To read more about Ember go to https://guides.emberjs.com/release/.

#### Handlebars ![Handlebars](/images/handlebars.png)

Ember uses the **Handlebars** templating library to build the user interface using static HTML and dynamic content, see [Best practices](/docs/low-code/best-practices/) and [Templating basics](/docs/low-code/templating-basics/) for more information.

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



### Kianda Developer

Kianda comes with several pre-defined field, rule, data connector and dashboard widgets. In case you want to create something else to satisfy your specific needs you can create your own custom widget if you have some level of development skills.

Kianda offers a user-friendly interface, **Developer**, to create custom widgets in a few minutes. A custom widget could be a 'Field' widget or a 'Rule widget'. Below we have an introduction video on how to create a custom field widget.

<video width="100%" style="width:100%" controls>
    <source src="/videos/Creating a widget.mp4">
    Your browser does not support the video tag.
    </source>
</video>
You can access Kianda Developer if you have an **administration** or **developer** role. To use **Developer:**

1. In the left-hand side pane click on **Administration** and then click on **Developer**.

2. Any customised widgets that have been created will be visible in the **Developer resources** main widget view. 

   ![Developer view](/images/developer-view.jpg)

3. To view details for existing widgets, click on the widget name such as 'Dashboard Number widget' as shown in the list above.

   ![Widget example](/images/widget-example.jpg)

4. In the **Widget** page you can update existing Widget UI and Widget Code within the editor and then click on **Update** ![Update button](/images/update-button.jpg). Alternatively click on **Close** to exit the page at any time.

5. From the **Developer resources** main widget view you can:

   - View the widget creation history by clicking on the **Version History** button ![Version History button](/images/widget-version-history.jpg)
   - Edit a widget by clicking on the **Edit** (Pen) button  ![Edit widget button](/images/widget-edit.jpg)
   - Delete a widget by clicking on the **Bin/Trash** button  ![Delete widget button](/images/widget-delete.jpg)

6. To create a new widget click on **New widget** ![New widget button](/images/new-widget-button.jpg). This will open the **Edit widget** dialog box.

   ![Edit widget example](/images/edit-widget-page.jpg)

   Fill out details as follows:

	- **Title** - fill out a title for the widget.

   - **Unique Id** - this is a unique value that is autofilled from the Title.

   - **Widget Icon** - choose an appropriate icon from the drop-down list.

   - **Widget type** - choose from **Field**, **Rule** or **Dashboard widget**.

     Go to [Custom field development](/docs/low-code/field-widget/) to find out more about building control widgets.

7. When you are finished editing the dialog box click on **OK** or click on **Close** at any time to exit. The output is shown in the next section.


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
- [Client connectors](/docs/low-code/client-connector/)
