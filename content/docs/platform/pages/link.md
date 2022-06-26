---
title: "Link widget"
typora-root-url: ..\..\..\..\static
---

A **Link dashboard widget** can be used to create a button link on a dashboard page that initiates a new process instance (by bringing the user straight into the first form of a particular process), links to another dashboard or links to an external website.



## How to get started

To add a **Link widget** to a dashboard:

1. Open the relevant dashboard page. To learn how to create your first dashboard page, go to [How to create a dashboard page](/docs/platform/pages#how-to-create-a-dashboard-page). 

   For this example, we'll open a dashboard page called 'Annual Leave' that currently has a [Rich Text widget](/docs/platform/pages/richtext/) and [List widget](/docs/platform/pages/list/) on it:

   ![Annual Leave dashboard page example 2](/images/dashboard-annual-leave-example2.jpg)

2. Click on the **Edit current page** button from the top dashboard menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode) (in which the **Widget menu**, **Settings** button ![Settings](/images/settings.png) and **Bin/Trash** button ![Bin trash button](/images/bin.png) are available):

   ![Click Edit current page button to go into Edit mode](/images/dashboard-edit-button.jpg)

3. Click on the **Link widget** button in the Dashboard **Widget menu**.

   ![Select the Rich Text button in the Dashboard Widget menu](/images/dashboard-select-link.jpg)

4. The **Add widget** dialog box opens with a range of options for your new **Link widget**.

   ![Dashboard Add widget dialog box](/images/dashboard-add-widget-link.jpg)

   Choose the options you want:

   - **Title** - You can insert the title you want for your **Link widget**. In our example, we'll call it 'Start New Process'.

   - **Layout columns** - You can choose how wide you want your **Link widget** to be. You can choose from 1 to 12 columns in width by clicking on the blue bar. For example click half-way across the blue bar to create a widget that is 6 columns wide, or click to the very end of the bar to create a column that is 12 columns wide.

   - **Colour scheme** - You can choose from six colour options for the header of the widget (Navy, Green, Blue, Amber, Red or White), if you choose to display it.

   - **Show header** - You can choose whether or not you want the header of your Dashboard widget to be shown. You will need to select this checkbox if you want the Link widget header to be displayed, as it is not selected by default. If the widget header is not shown, the user will just see the link button.

   - **Visible to** - You can choose who will be able to see the **Link widget**. Select single or multiple Users or Groups, or a combination of the two. You can use the menu on the right to either filter the drop-down list by Users or Groups. To find out more about pre-defined Groups on Kianda, go to [Users & Groups](/docs/platform/administration/users).

     - **Note - Dashboard page security**: When a dashboard page is first created, the users(s)/group(s) who will be able to view the dashboard are selected in the '**Visible to**' option in the **Create dashboard page** dialog box (see Step 3 in [How to create a Dashboard page](/docs/platform/pages#how-to-create-a-dashboard-page)). 

       You can also edit or update this setting at any point to change who has permission to view a particular dashboard page. This higher dashboard-level security setting will take precedence over the security settings ('Visible to') that are applied to the *individual widgets* within the dashboard.

   - **Device visibility** - You can choose what devices and types of internet connections the dashboard **Link widget** will be visible on - select all the options you want from Desktop, Tablet, Mobile, Wi-Fi and Flight mode as to when the device can view the dashboards. By default, all options are selected.

     ![Device visibility](/images/devicevisibility.png)

5. Click on **OK** when you've completed the **Add widget** dialog box.

6. An **Edit button links** dialog box automatically opens showing the Link widget title you inserted in the **Add widget** dialog box:

   ![Dashboard Link widget Edit button links dialog box](/images/dashboard-link-edit-button.jpg)

   Click on the title of the **Link widget** or on the **Edit link** button ![Dashboard Link edit link button](/images/dashboard-link-edit-icon.jpg) to open the **Edit link** dialog box.

   **Note**: You can click on the **Add link** button to add **more link buttons** to the Link widget. You will be able to edit the options relating to each of these *individual link buttons* by clicking on their title or on their **Edit link** button.

7. Select the options you want for this link button in your **Link widget** in the **Edit link** dialog box.

   ![Dashboard Link widget Edit link dialog box](/images/dashboard-link-edit-link-dialog.jpg)

   The options available for your **Link widget** include:

   - **Link text** - You can insert the text you want to appear on your Link widget button. 

   - **New Process/ Dashboard/ External** - You can select whether you want the Link widget to link to a new instance of an existing Kianda process, to an existing dashboard or to an external website.

     - If you select to link to a **New Process**:

       1. Click on the down arrow in the **Target process** field to open a drop-down list of Kianda processes.

       2. Select the Kianda **process** that you want to open when the user clicks on the Link widget. You can type the start of a process name into the field so the drop-down list is filtered to show processes starting with that letter or word.

          In our example, we will select the 'Annual leave request and approval process' as the **Target process** for our new **Link widget**; this will mean that a new instance of the Annual Leave request form will open when the user clicks on the 'Start New Process' Link widget button on the dashboard.
   
       3. If you want the process to open in a pop-up dialog box without the user leaving the dashboard page, select the **Show in dialog?** checkbox. Otherwise, the user will be brought directly into the first form in the process that you have linked to.
       
     - If you select to link to a **Dashboard**, the option below it changes to **Target dashboard**':
       1. Click on the down arrow in the **Target dashboard** field to open a drop-down-list of Kianda processes.
	    
          ![Dashboard Link widget linking to a dashboard](/images/dashboard-link-dashboard.jpg)
       
       2. Select the Kianda **dashboard** that you want to open when the user clicks on the link button.
   
     - If you select to link to an **External** website, two options display below it - **URL** and '**Open in new window?**':

       ![Dashboard Link widget linking to an External website](/images/dashboard-link-external.jpg)       
       
       1. Insert the URL you want the user to be brought to when they click on the Link widget.
       1. Select the '**Open in new window?**' checkbox if you want the external website to open in a new window.
   
   
      - **Link icon** - You can choose the icon you want to appear on your Link widget button. Click on the down arrow and select the icon you want to use from the large number of options available.
   
        ![Dashboard Link widget link icon](/images/dashboard-link-icon.jpg)
   
   
      - **Text colour** - You can choose the colour of the text that appears on the Link widget button. For example, if we choose orange, our Link widget button could look like this:
   
        ![Dashboard Link widget button example with orange text](/images/dashboard-link-button-example.jpg)
   
   
      - **Link size** - You can choose the width of the Link widget button, from 1 column wide to 12 columns wide. Change the width by clicking on the blue bar.
   
   
      - **Link visible to administrators only?** - Select **Yes** if you want to limit the visibility of this particular link button in the Link widget to Kianda Administrators only.
   
   
      - **Link security (optional)** - You can limit visibility of this link button - the 'Start New Process' link, in our example - in the Link widget by selecting the user(s) and/or group(s) you want to be able to see it on the dashboard. 
   
        **Note**: If you have multiple button links in your **Link widget**, you can limit the users/groups who can view *each* of the link buttons within that Link widget.
   

8. Click on the **OK** button when you are finished choosing the options you want for your **Link widget** (or click on **Close** to exit the **Edit link** dialog box without saving).


8. Your **Link widget** will now be displayed on your dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the insertion of the new widget.

   ![Dashboard Link widget example](/images/dashboard-link-widget-example.jpg)



### How to edit Link Text widgets

To edit a **Link widget** on a dashboard:

1. In the dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to view the page in [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode) (in which the **Widget menu**, **Settings** button ![Settings](/images/settings.png) and **Bin/Trash** button ![Bin trash button](/images/bin.png) are available).

2. Click on the Link widget's **Update configuration** (Edit) button ![Dashboard update configuration button](/images/dashboard-update-configuration.jpg).

   ![Select Dashboard Link widget Update configuration button](/images/dashboard-link-update-configuration.jpg)

3. The **Edit button links** dialog box opens, enabling you to make whatever changes you want to the link button(s) in the Link widget using the same range of options as outlined in Step 6 of [How to get started](/docs/platform/pages/link#how-to-get-started).

4. Making the changes you want and then click **OK**. 

5. The updated **Link widget** will be shown on the Dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### How to move Link widgets

To move a **Link widget** on a dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode).
2. Select the widget's **drag handle** button ![Dashboard widget drag handle button](/images/dashboard-widget-draghandle.jpg). 
3. Drag and drop the widget where you want it to go on your dashboard. 

  In our example, we could move the new Link widget to the top left of the dashboard:

  ![Move a Dashboard Link widget](/images/dashboard-link-move.jpg)



### How to delete Link widgets

To delete a **Link widget** from your dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the widget's **Remove widget** (Bin/Trash icon) button ![Bin icon](/images/binicon.png).

   ![Delete Dashboard Rich Text widget](/images/dashboard-link-delete.jpg)

3. A **Delete widget** dialog box will open. Click on **OK** to delete the widget (or click on **Cancel** if you wish to cancel the deletion).

   ![Dashboard Delete widget dialog](/images/dashboard-delete-widget-dialog.jpg)

   


### How to edit Link widget settings

To update or edit your **Link widget** settings:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the **Update widget settings** (Cog) button ![Dashboard Update widget settings button](/images/cog-shared-process.jpg).

   ![Dashboard Update widget settings button](/images/dashboard-link-edit-widget-settings.jpg)

3. The **Edit widget** dialog box will open, enabling you to make changes to any of the available options (the same options as were available in the **Add widget** dialog box discussed in Step 4 of [How to get started](/docs/platform/pages/link#how-to-get-started)).

   ![Dashboard Link widget Edit widget dialog box](/images/dashboard-link-edit-widget.jpg)

   In our example, we could choose to reduce the width of the **Link widget** to be 4 columns wide, by clicking to the left of the existing blue bar.

4. Click on **OK** to confirm the changes you've made to the widget settings (or click on **Close** if you don't want to retain any changes).

5. The updated **Link widget** will display on your dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### Saving changes ###

Make sure to save any changes you make to your **Link widget** by clicking on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu. If you leave the dashboard without saving the changes you have made to a widget, the next time you visit the dashboard it won't include any of the changes made to it since the dashboard page was last saved.



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about the **Dashboard Link widget**, find out more about the other types of **Dashboard widgets** you can add to your Kianda dashboard:

- [Chart widget](/docs/platform/pages/chart/)
- [Filter widget](/docs/platform/pages/filter/)
- [Rich Text widget](/docs/platform/pages/richtext/)
- [List widget](/docs/platform/pages/list/)
- [Tile widget](/docs/platform/pages/tile/)
- [Walkthrough widget](/docs/platform/pages/walkthrough)
