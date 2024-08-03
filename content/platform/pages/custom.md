---
title: "Custom dashboard widgets"
typora-root-url: ..\..\..\..\static
weight: 9
---

There are currently seven pre-defined dashboard widgets that you can add to your dashboard page. However, you can also create and use your own **customised dashboard widgets**.

**Custom dashboard widgets** will only be available to add to your dashboard page from the widget menu if custom widgets have been created by an Administrator or Designer in your Kianda workspace.



## How to get started ##

To add a **Custom widget** to a Kianda dashboard:

1. Open the relevant dashboard page. To learn how to create your first dashboard page, go to [How to create a dashboard page](/docs/platform/pages#how-to-create-a-dashboard-page).

   For this example, we'll open a dashboard page called 'Annual Leave' that currently has a [Rich Text widget](/docs/platform/pages/richtext/) and [List widget](/docs/platform/pages/list/) on it:

   ![Annual Leave dashboard page example 2](/images/dashboard-annual-leave-example2.jpg)

2. Click on the **Edit current page** button from the top dashboard menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode) (in which the **Widget menu**, **Settings** button ![Settings](/images/settings.png), **Bin/Trash** button ![Bin trash button](/images/bin.png) and **Add layout container** button ![Dashboard Add layout container button](/images/dashboard-add-layout-container.jpg) are available):

   ![Click Edit current page button to go into Edit mode](/images/dashboard-edit-button.jpg)

3. Click on the **down arrow** button in the Dashboard **Widget menu** to view the available **Custom dashboard widgets**.

   ![Select the Rich Text button in the Dashboard Widget menu](/images/dashboard-select-custom.jpg)

   In this example, there are two custom dashboard widgets available - the 'Expenses dashboard' widget and 'Welcome Banner'. We will use the **Welcome Banner** custom widget for our example.

   **Note**: **This eighth type of dashboard widget will only be available to you if Custom dashboard widgets have been created by Administrators or Developers in your Kianda workspace**.

4. The **Add widget** dialog box opens with a range of options for your new **Custom dashboard widget**.

   ![Dashboard Add widget dialog box](/images/dashboard-add-widget-custom.jpg)

   Choose the options you want:

   - **Title** - You can insert the title you want for your **Custom dashboard widget** (by replacing the default title shown). In our example, we'll call it 'Welcome'.

   - **Layout columns** - You can choose how wide you want your **Custom widget** to be. You can choose from 1 to 12 columns in width by clicking on the blue bar. For example, click half-way across the blue bar to create a widget that is 6 columns wide, or click to the very end of the bar to create a column that is 12 columns wide.

   - **Colour scheme** - You can choose from six colour options for the header of the widget (Navy, Green, Blue, Amber, Red or White), if you choose to display it.

   - **Show header** - You can choose whether or not you want the header of your Custom widget to be shown in the dashboard. In our example, we will de-select the 'Show header' option so that the header is not shown.

   - **Visible to** - You can choose who will be able to see the **Custom widget**. Select single or multiple Users or Groups, or a combination of the two. You can use the menu on the right to either filter the drop-down list by Users or Groups. To find out more about pre-defined Groups on Kianda, go to [Users & Groups](/docs/platform/administration/users).

     - **Note - Dashboard page security**: When a dashboard page is first created, the users(s)/group(s) who will be able to view the dashboard are selected in the '**Visible to**' option in the **Create dashboard page** dialog box (see Step 3 in [How to create a Dashboard page](/docs/platform/pages#how-to-create-a-dashboard-page)). 

       You can also edit or update this setting at any point to change who has permission to view a particular dashboard page. This higher dashboard-level security setting will take precedence over the security settings ('Visible to') that are applied to the *individual widgets* within the dashboard (such as a Custom dashboard widget, in this case).

       See [Dashboard security](/docs/security/process-level-security#dashboard-security) and [Widget security](/docs/security/process-level-security#widget-security) for more information.

   - **Layout container** - This option will only display if you have already created layout containers for your Dashboard page. Here, you can select which layout container you want your new **Custom widget** to be placed in.

     A layout container is a simple way to organise, arrange and move the widgets you add to your dashboard. To learn more about layout containers, go to [How to add layout containers to a Dashboard page](/docs/platform/pages#how-to-add-layout-containers-to-a-dashboard-page).

     In this example, we can select to place our new Custom dashboard widget into one of three layout containers - Top, Middle or Bottom:

     ![Dashboard Add widget dialog box select Layout container](/images/dashboard-select-layout-container.jpg)

   - **Device visibility** - You can choose what devices and types of internet connections the dashboard **Custom widget** will be visible on - select all the options you want from Desktop, Tablet, Mobile, Wi-Fi and Flight mode as to when the device can view the dashboards. By default, all options are selected.

     ![Device visibility](/images/devicevisibility.png)

5. Click on **OK** when you've completed the **Add widget** dialog box.

6. An **Edit widget** dialog box automatically opens showing the options you can choose for that particular **Custom dashboard widget**. The options available will be dependent on the functionality of the custom widget.

7. Click on the **OK** button when you are finished choosing the options you want (or click on **Close** to exit the **Edit widget** dialog box without saving).

8. Your **Custom widget** will now be displayed on your dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the insertion of the new widget.

   Our example of the 'Welcome banner' custom dashboard widget could look like this when inserted and moved to the top of the dashboard page:

   ![Dashboard Custom widget Welcome banner example](/images/dashboard-custom-example.jpg)



### How Custom dashboard widgets are created ###

A Kianda Administrator or Developer can create **Custom dashboard widgets** by opening the **Administration** menu from the left-side menu and clicking on **Developer**:

![Create a Custom field by clicking on Developer from the Administration menu](/images/custom-field-developer.jpg)

The Developer resources page opens and displays all of the Custom widgets that have been created - these include **Custom field widgets**, **Custom rule widgets** and **Custom Dashboard widgets**. 

![Create new Custom widget Developer resources page](/images/custom-field-widgets.jpg)

**Note**: Only **Custom dashboard widgets** will be shown in the Custom drop-down list in the **Widget menu** on dashboard pages.

To create a new Custom dashboard widget, a Developer/Administrator needs to:

1. Click on the **New widget** button ![New widget button](/images/custom-field-new-widget.jpg). 

2. An **Edit widget** dialog box opens, in which they can choose the Title, Unique ID, Widget icon and Widget type for the new custom widget. 

   To create a new **Dashboard Widget**, the Developer/Administrator must choose 'Dashboard widget' as the **Widget type**, as shown in this example:

   ![Edit widget dialog box](/images/dashboard-custom-widget.jpg)

3. Once the Developer/Administrator has completed the **Edit widget** dialog box and clicks on **OK**, a workspace opens where they can create their Custom dashboard widget (and a pop-up message displays saying 'Success saving the widget'):

   ![Custom widget workspace](/images/dashboard-custom-widget-workspace.jpg)

   The two workspaces that are shown, **Widget UI** and **Widget Code**, show the default code that the Developer/Administrator can then add to this in order to create a dashboard widget with the functionality they want.

4. When they have finished working on the new custom dashboard widget, they need to click on the **Update** button and a pop-up message will say 'Widget updated'.

5. Click on the **Close** button to close the custom dashboard widget workspace.

   The new **custom dashboard widget** will now be listed in the **Widgets** screen in the Developer section:

   ![Custom dashboard widget listed in Widgets in Developer](/images/dashboard-custom-widget-listed.jpg)

   Designers will now be able to see and use the new custom dashboard widget from the **Custom** section of the **Dashboard Widgets menu** when they are adding widgets to dashboard pages.

   ![Custom dashboard widget example in the widget menu](/images/dashboard-custom-widget-menu.jpg)

   To learn more about how to create **Custom dashboard widgets**, go to [Creating a custom Dashboard widget](/docs/getting-started/welcome/low-code#dashboard-widget).



### How to edit Custom dashboard widgets

To edit a **Custom dashboard widget** on a dashboard page:

1. In the dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to view the page in [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode) (in which the **Widget menu**, **Settings** button ![Settings](/images/settings.png) and **Bin/Trash** button ![Bin trash button](/images/bin.png) are available).

2. Click on the Custom dashboard widget's **Update configuration** (Edit) button ![Dashboard update configuration button](/images/dashboard-update-configuration.jpg).

   ![Select Dashboard Link widget Update configuration button](/images/dashboard-custom-update-config.jpg)

3. The **Edit widget** dialog box opens, enabling you to make whatever changes are available to you for that particular custom dashboard widget (this will depend on the range of options and functionality the Developer/Administrator who created it gave it). These will be the same options as were outlined in Step 6 of [How to get started](#how-to-get-started).

4. Making the changes you want and then click **OK**. 

5. The updated **Custom dashboard widget** will be shown on the Dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### How to move Custom dashboard widgets

To move a **Custom widget** on a dashboard page:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Select the Custom dashboard widget's **drag handle** button ![Dashboard widget drag handle button](/images/dashboard-widget-draghandle.jpg). 

   ![Custom dashboard widget drag handle](/images/dashboard-custom-widget-move.jpg)

3. Drag and drop the widget where you want it to go on your dashboard. 



### How to delete Custom dashboard widgets

To delete a **Custom dashboard widget** from your dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboards Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the widget's **Remove widget** (Bin/Trash icon) button ![Bin icon](/images/binicon.png).

   ![Delete Dashboard Rich Text widget](/images/dashboard-custom-widget-delete.jpg)

3. A **Delete widget** dialog box will open. Click on **OK** to delete the widget (or click on **Cancel** if you wish to cancel the deletion).

   ![Dashboard Delete widget dialog](/images/dashboard-delete-widget-dialog.jpg)

   


### How to edit Custom dashboard widget settings

To update or edit your **Custom dashboard widget** settings:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboards Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the **Update widget settings** (Cog) button ![Dashboard Update widget settings button](/images/cog-shared-process.jpg).

   ![Dashboard Update widget settings button](/images/dashboard-custom-widget-settings.jpg)

3. The **Edit widget** dialog box will open, enabling you to make changes to any of the available options (the same options as were available in the **Add widget** dialog box discussed in Step 4 of [How to get started](#how-to-get-started)).

   ![Dashboard Link widget Edit widget dialog box](/images/dashboard-custom-edit-widget.jpg)

   In our example, we could choose to reduce the width of the **Custom dashboard widget** to be 4 columns wide, by clicking to the left of the existing blue bar.

4. Click on **OK** to confirm the changes you've made to the widget settings (or click on **Close** if you don't want to retain any changes).

5. The updated **Custom dashboard widget** will display on your dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### Saving changes ###

Make sure to save any changes you make to your **Custom dashboard widget** by clicking on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu. If you leave the dashboard without saving the changes you have made to a widget, the next time you visit the dashboard it won't include any of the changes made to it since the dashboard page was last saved.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Custom dashboard widgets**, find out more about the other types of **Dashboard widgets** you can add to your Kianda dashboard:

- [Chart widget](/docs/platform/pages/chart/)
- [Filter widget](/docs/platform/pages/filter/)
- [Rich Text widget](/docs/platform/pages/richtext/)
- [Link widget](/docs/platform/pages/link/)
- [List widget](/docs/platform/pages/list/)
- [Tile widget](/docs/platform/pages/tile/)
- [Walkthrough widget](/docs/platform/pages/walkthrough/)
- [Custom dashboard widget]( /docs/platform/pages/custom/)
