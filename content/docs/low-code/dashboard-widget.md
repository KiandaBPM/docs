---
title: "Custom dashboard widget development"
linkTitle: "Custom dashboard widget"
weight: 10
typora-root-url: ..\..\..\static
---

## Introduction

There are currently 7 predefined dashboard widgets available to use to create illustrative and responsive pages to show how your processes are performing at a glance. These widgets are:

- [Richtext](/docs/platform/pages/richtext/)
- [Tile](/docs/platform/pages/tile/)
- [List](/docs/platform/pages/list/)
- [Chart](//docs/platform/pages/chart/)
- [Filter](/docs/platform/pages/filter/)
- [Link](/docs/platform/pages/link/)
- [Walk-through](/docs/platform/pages/walkthrough/)

Click on the relevant links to find out more about each area. However if customised dashboards have been created, they are available to those with the  **Administration** role to use in dashboard management in Kianda. Customised dashboards are available in the drop-down list for widgets when creating or editing dashboard pages.

Custom dashboards are created by **Administrators** or **Developers** who have coding experience to use Kianda's low-code development feature, Kianda **Developer**. 

## How to get started

If you are an experienced developer with an **Administrator** or **Developer** role, see [Users & Groups](/docs/platform/administration/users/), you can create a new dashboard widget within Kianda by doing the following: 

1. Navigate to **Administration** in the left-hand side menu, and click on **Developer**. This will bring you to the **Developer resources** page. Dashboard widgets are of type 'Widget' in this list.

   ***Widget view***

   ![Widget view](/images/widgetview2.jpg)

2. Click on **New widget** to create a new rule widget.

3. Fill out the **Edit widget** dialog box - that is **Title**, **Unique Id** (which is autofilled from the title), **Widget Icon**, where you can select from hundreds of icons, and then **Widget type**. 

   ![Edit widget](/images/edit-dashboard-widget.jpg)

4. Click on **OK** when complete.

5. When you create a custom field widget, the **Widget UI** and **Widget Code** tabs are displayed. These two screenshots show the default code for 'Widget UI' and 'Widget Code'.

      The 'Widget UI' defines the HTML, handlers, expressions and more.

      ***Dashboard widget UI***
      ![Widget UI](/images/dashboard-widget-ui.jpg)

      The 'Widget Code' defines the logic and functions.

      ***Dashboard widget code***

      ![Widget code](/images/dashboard-widget-code.jpg)

6. Widgets created are visible in the main widget view. From here, you can edit a widget by clicking on the **Edit** button  ![Pen button](/images/bluepen.png) (Pen icon), delete a widget by clicking on the **Bin/Trash** button ![Bin button](/images/binicon.png) and restore earlier versions of a widget by clicking on the **Version restore** button ![Restore](/images/bluerestore.png).

7. Custom rule widgets you create will be available for use in dashboard pages for **Administrators** by going to **Side menu** > **Home** > and click on the **Create a new page** to create a new dashboard page, or click on an existing dashboard in the left-hand pane. 

8. Click on the **Edit current page** button ![Edit page button](/images/edit-current-page.jpg) to make the widget menu appear.

9. The newly created custom dashboard widget will be available in the drop-down menu by clicking on the down arrow.

      ![Custom dashboard widgets drop-down list](/images/custom-dashboard-widgets.jpg)

10. Then click on the new widget design name to implement the widget, starting with editing the widget and then change settings, see [Edit dashboard page settings](/docs/platform/pages/#how-to-edit-dashboard-page-settings) for more information on general settings.



## What's next ![Idea icon](/images/18.png)

To continue with low-code development, you can view [Templating basics](/docs/low-code/templating-basics/). If you would like to learn more about low-code go to the [Low-code development](/docs/low-code/) page and from there navigate to other pages on low-code practices.

To create other widgets go to [Custom field widget](/docs/low-code/field-widget/) and [Custom rule widget](/docs/low-code/rule-widget/) pages to find out more.

Go to the link on [Dashboards](/docs/platform/pages/) to learn more about dashboard pages.
