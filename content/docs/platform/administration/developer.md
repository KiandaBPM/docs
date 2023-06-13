---
title: "Developer"
weight: 9
typora-root-url: ..\..\..\..\static
---

Kianda **Developer** is available to **administrators** and those users with the role **Developer**. The Developer function is found in the left-hand side pane, under **Administration**. The function allows you to create customised field, rule, dashboard and data connector widgets using pre-defined widget UI and code templates that you can add your own code to, to create the effects you want.

You can also quickly use Kianda **Developer** to add webhooks, providing an efficient way to push GET requests to other applications in real-time as the Kianda process(es) runs and avoiding the need to poll for data. 

Kianda uses EmberJS to build widgets, and in particular the Handlebars templating library, to power the application's user interface. See [templating basics](#emberjs-templating-basics) to get started.

## How to get started

To start using **Developer**:

1. Click on **Administration** in the left-hand side pane and then click on **Developer**.

2. Any customised widgets that have been created will be visible in the **Developer resources** view below. **Field**, **rule** and **dashboard** widgets are visible in the left-hand **Widgets** pane and customised **connectors** are available in the right-hand **Connectors** pane.

   Note that **widgets** can be **grouped** into folders as shown in the image below. This is explained in step 6.

   ![Developer view](/images/developer-view-updated.jpg)

3. You can search for a specific field, rule or dashboard widget by typing into the widget **Search bar**, found above the list of widgets on the top left. Click on the **cancel** button <img src="/images/cancel-btn.png" alt="Cancel button" style="zoom:80%;" /> to clear your search query.

   ![Searching for a process](/images/searching-widgets.png)

4. To view details for existing widgets, click on the widget name.

   ![Widget example](/images/widget-example.jpg)

5. In the **Widget** pane you can update existing Widget UI and Widget Code within the editor and then click on **Update** ![Update button](/images/update-button.jpg). Alternatively click on **Close** to exit the page at any time.

6. From the **Developer resources** main widget view you can:

   - View the widget creation history by clicking on the **Version History** button ![Version History button](/images/widget-version-history.jpg)
   - Edit a widget by clicking on the **Edit** (Pen) button  ![Edit widget button](/images/widget-edit.jpg)
   - Delete a widget by clicking on the **Bin/Trash** button  ![Delete widget button](/images/widget-delete.jpg)

7. To create a new widget click on **New widget** ![New widget button](/images/new-widget-button.jpg). This will open the **Edit widget** dialog box.

   ![Edit widget example](/images/edit-widget-dialog-box.jpg)

   Fill out details as follows:

   - **Title** - fill out a title for the widget.

   - **Unique Id** - this is a unique value that is autofilled from the Title.

   - **Widget Icon** - choose an appropriate icon from the drop-down list.

   - **Group** - add in a group name to group widgets together in a folder in the main widget view.

   - **Widget type** - choose from **Field**, **Rule** or **Dashboard widget**.

   Go to [EmberJS templating basics](#emberjs-templating-basics) to find out more about EmberJS to build widgets.

   When you are finished editing the dialog box click on **OK** or click on **Close** at any time to exit.

8. To create a new customised connector click on the **New Connector** button ![New connector button](/images/new-connector-button.jpg) and populate the four tabs that appear. Details on how to create a customised connector are found at [Custom connectors](/docs/low-code/custom-connector/). 

9. You can search for a specific connector by typing into the connector **Search bar**, found above the list of connectors on the top right. Click on the **cancel** button <img src="/images/cancel-btn.png" alt="Cancel button" style="zoom:80%;" /> to clear your search query.

   ![Searching for connectors](/images/connector-searching.png)

10. To create your own webhooks, click on **Webhooks** to configure URLs to respond to process instance create, update and delete events. 

   ![Instance Callback URLs](/images/webhook-edit.jpg)

   - Move the slider across for each type of operation (Create, Update, Delete) to add in a URL to enable callback. 
     - For example for **Enable Deleted Callback**, will enable the URL callback every time a process instance is updated. 
     - HTTP GET with parameters `instanceID={instanceID}, processName={processName}` and `eventType=deleted` will be issued to the provided URL.
   - When you are finished editing the dialog box click on **OK** or click on **Close** at any time to exit.



## EmberJS templating basics

With Handlebars you can quickly build web applications that are made up of different components. Handlebar templates contain static HTML and dynamic content inside Handlebars expressions, which are summoned with double curly braces: {{ }}

Dynamic content inside a Handlebars expression is rendered with data-binding. This means if you update a property, your usage of that property in a template will be automatically updated to the latest value.

### Helpers 

Ember gives the ability to write your helpers, to bring a minimum of logic into Ember templating. For example, let's say you would like the ability to add a few numbers together, without needing to define a computed property everywhere you would like to do so.

***Helper example***

![Helpers](/images/write-our-own-helpers.png)

#### Conditionals

Statements like **if** and **unless** are implemented as built-in helpers. Helpers can be invoked three ways; inline invocation, nested invocation and block invocation. For more details, go to: https://guides.emberjs.com/v2.18.0/templates/conditionals/.



### What's next  ![Idea icon](/images/18.png) ###

To read more about Developer and how to use the platform for low-code development, go to [Low code development](/docs/low-code/).

To find out about help and support, go to [Help](/docs/platform/general/help/).