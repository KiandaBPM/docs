---
title: "Custom form control development"
weight: 8
typora-root-url: ..\..\..\static
---

## Introduction

There are currently 16 predefined field or control widgets available to use in forms and processes, covering 3 categories: [Input](/docs/platform/controls/input/), [Layout](/docs/platform/controls/layout/) and [Actions](/docs/platform/controls/actions/). Click on the relevant links to find out more about each area. However if customised fields have been created, they are available to those with the role **Administration** and **Design business process** to use in process and form design in Kianda **Designer**. Customised fields are available under the **Custom controls** category.

Custom controls are created by **Administrators** or **Developers** who have coding experience to use Kianda's low-code development feature, Kianda **Developer**. 

## How to get started

If you are an experienced developer with an **Administrator** or **Developer** role (see [Users & Groups](/docs/platform/administration/users/)), you can create a new custom widget within Kianda by doing the following: 

1. Navigate to **Administration** in the left-hand side menu, and click on **Developer**. This will bring you to the **Developer resources** page.

   ***Widget view***

   ![Widget view](/images/widgetview2.jpg)

2. Click on **New widget** to create a new field/control widget.

3. Fill out the **Edit widget** dialog box - that is **Title**, **Unique Id** (which is autofilled from the title), **Widget Icon**, where you can select from hundreds of icons, and then **Widget type**. 

   ![Edit widget](/images/editwidget.gif)

4. Click on **OK** when complete.

5. When you create a custom field widget, the **Widget UI** and **Widget Code** tabs are displayed. These two screenshots show the default code for 'Widget UI' and 'Widget Code'.

      The 'Widget UI' defines the HTML, handlers, expressions and more.

      ***Field widget UI***
      ![Widget UI](/images/widgetfieldui.gif)

      The 'Widget Code' defines the logic and functions.

      ***Field widget code***

      ![Widget code](/images/widgetcodefield.png)

6. Widgets created are visible in the main widget view. From here, you can edit a widget by clicking on the **Edit** button  ![Pen button](/images/bluepen.png) (Pen icon), delete a widget by clicking on the **Bin/Trash** button ![Bin button](/images/binicon.png) and restore earlier versions of a widget by clicking on the **Version restore** button ![Restore](/images/bluerestore.png).

7. Custom field widgets you create will be available for use in Kianda Designer by going to **Side menu** > **Administration** > **Designer** > **click on an existing process** or **Add new** to add a new process (then click on a form to edit it), and see the Custom fields added under **Controls**.

      ![Custom fields](/images/customcontrol.png)


[Webhooks](#webhooks) can be created to send a message to a specific URL by clicking on the **Webhooks** button. Click the link for more information.  

   ### Webhooks

   To create webhooks:

   1. Click on the **Webhooks** button from the main widget view to add a webhook. 

   ![Webhooks](/images/webhooks50.gif)

   2. Use the slider to turn on **Enable Created Callback**, **Enable Updated Callback**, **Enable Deleted Callback** and **type in the URL** in each case to respond to process instance create, update and deleted events. 

      For example, choosing **Enable Created Callback** will enable a URL callback every time a process instance is updated. This results in a HTTP GET request with parameters instanceID={instanceID}, processName={processName} and eventType=created being issued to the give URL.

      **Note:** Callback has a timeout of 10 seconds.

   3. Click on the **Help** button ![Help button](/images/webhookhelp.PNG) for clarification. 

   4. Click on **OK** when done.

   



## What's next

To continue with low-code development, you can view [Templating basics](/docs/low-code/templating-basics/). If you would like to learn more about ‘no-code versus low-code’ in general, see [What is no-code?](/docs/getting-started/welcome/no-code/) and [What is low-code?](/docs/getting-started/welcome/low-code/). 





