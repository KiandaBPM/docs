---
title: "Low-code customisation options for the list widget"
linkTitle: "Low-code list widget customisation"
weight: 4
typora-root-url: ..\..\..\static
---

## Introduction

In the [dashboard pages](/docs/platform/pages/) how to create a dashboard page is described, so that you can display data from your processes and monitor how processes are performing, for example number of requests submitted, use of the [KiandaAI rule](/platform/rules/kianda-ai/text-analysis/) to extract a sentiment score from user input, number of 'completed' processes and so on.

The [List widget](docs/platform/pages/list/) is introduced within the dashboard pages section. Where the list widget displays the process instances or records of selected process(es) in the dashboard. An example of a **list widget** is shown in the image below, where the 'Training Requests' list displays the ID of a process instance, the status of that process instance and employee name of the person who submitted the initial request, amongst other data.

![Dashboard page example with Training Requests list widget](/images/dashboard-page-example.jpg)

It is easy to configure this widget to have it filter and display data the way you want by following the steps at [Configure your widget](/docs/platform/pages/list/#configure-your-widget). However in addition to these steps you can use HTML to change the display. The next section [How to get started](#how-to-get-started-with-list-widget-customisation) runs through an example of how to change the look and feel of a list widget.

## How to get started with List widget customisation

As with any of the seven pre-defined dashboard widgets, it is easy to add a **List widget** to your dashboard simply by clicking on a widget of choice, see [How to add widgets to a dashboard page](/docs/platform/pages/#how-to-add-widgets-to-a-dashboard-page). The **List widget** as it is offers a huge range of configuration options from using [conditions](/docs/platform/pages/conditions/) to display the desired data which can include both design fields and Kianda's built-in [process fields](/docs/platform/application-designer/process/common-fields/) to display as well as enabling sorting, filtering and searching. 

In addition if you have an **administration** role, you can customise how the list widget displays as follows:

1. Select a dashboard page and click on **Edit current page** button ![Edit button](/images/edit-current-page.jpg) to go into **Edit mode**. 

2. Select **List** from the dashboard widgets menu if a list widget doesn't exist.

   ![Dashboard widgets menu in Edit mode](/images/dashboard-seven-widgets.jpg)

3. If a list widget already exists click on the **Edit/pen** button to edit the list widget.

4. The **Edit widget** dialog box opens. Follow the steps in [Configure your widget](/docs/platform/pages/list/#configure-your-widget) to configure the widget the way you want.

5. When you have chosen the fields you want to display they will appear in the List fields section of the dialog box, by clicking on **List fields**.

6. At the bottom of the **List fields** section there are two buttons:

   - **Add column** - clicking on this button allows you to add another column to your widget and add styling in the editor section, see step 7.

   - **Add action** - clicking on this button allows you to select a **field** that has rules attached to trigger or rule to trigger, see step 8.

     ![Add column and Add action buttons](/images/add-column-action-buttons.jpg)

7. Clicking on **Add column** allows you to add in code to create your own look and feel on the widget.
