---
title: "Filter widget"
typora-root-url: ..\..\..\..\static
---

A dashboard **Filter widget** can be used to create a filter or filters that enable you to change the information that is displayed on your dashboard, based on criteria you choose. 

For example, if you have an 'Annual Leave' dashboard that contains a List widget that shows the individual annual leave requests (process instances) submitted by employees, you could add a Filter widget to the dashboard and connect the List widget to it. This would add a Filter widget to your dashboard that enables you to filter the annual leave requests in the List widget by employee name. 



## How to get started

To add a **Filter widget** to a dashboard:

1. Open the relevant dashboard page. To learn how to create your first dashboard page, go to [How to create a dashboard page](/docs/platform/pages#how-to-create-a-dashboard-page). 

   For this example, we'll open a dashboard page called 'Annual Leave' that has a [List widget](/docs/platform/pages/list/) on it showing the individual records (process instances) for annual leave requests made by employees:

   ![Annual Leave dashboard page example 2](/images/dashboard-annual-leave-example3.jpg)

2. Click on the **Edit current page** button from the top dashboard menu to go into [Dashboards Edit mode](/docs/platform/pages#dashboards-edit-mode) (in which the **Widget menu**, **Settings** button ![Settings](/images/settings.png), **Bin/Trash** button ![Bin trash button](/images/bin.png) and **Add layout container** button ![Dashboard Add layout container button](/images/dashboard-add-layout-container.jpg) are available):

   ![Click Edit current page button to go into Edit mode](/images/dashboard-edit-button.jpg)

3. Click on the **Filter widget** button in the Dashboard **Widget menu**.

   ![Select the Rich Text button in the Dashboard Widget menu](/images/dashboard-select-filter.jpg)

4. The **Add widget** dialog box opens with a range of options for your new **Filter widget**.

   ![Dashboard Add widget dialog box](/images/dashboard-add-widget-filter.jpg)

   Choose the options you want:

   - **Title** - You can insert the title you want for your **Filter widget** (instead of the default title that is shown). In our example, we'll call it 'Filter by Employee'.

   - **Layout columns** - You can choose how wide you want your **Filter widget** to be. You can choose from 1 to 12 columns in width by clicking on the blue bar. For example click half-way across the blue bar to create a widget that is 6 columns wide, or click to the very end of the bar to create a column that is 12 columns wide.

   - **Colour scheme** - You can choose from six colour options for the header of the widget (Navy, Green, Blue, Amber, Red or White), if you choose to display it.

   - **Show header** - You can choose whether or not you want the header of your Dashboard widget to be shown. This checkbox is selected by default, so de-select it if you don't want the header to be displayed. 

   - **Visible to** - You can choose who will be able to see the **Filter widget**. Select single or multiple Users or Groups, or a combination of the two. You can use the menu on the right to either filter the drop-down list by Users or Groups. To find out more about pre-defined Groups on Kianda, go to [Users & Groups](/docs/platform/administration/users).

     - **Note - Dashboard page security**: When a dashboard page is first created, the users(s)/group(s) who will be able to view the dashboard are selected in the '**Visible to**' option in the **Create dashboard page** dialog box (see Step 3 in [How to create a Dashboard page](/docs/platform/pages#how-to-create-a-dashboard-page)). 

       You can also edit or update this setting at any point to change who has permission to view a particular dashboard page. This higher dashboard-level security setting will take precedence over the security settings ('Visible to') that are applied to the *individual widgets* within the dashboard (such as the Filter widget, in this case).
       
       See [Dashboard security](/docs/security/process-level-security#dashboard-security) and [Widget security](/docs/security/process-level-security#widget-security) for more information.

   - **Layout container**: This option will only display if you have already created layout containers for your Dashboard page. Here, you can select the layout container you want to place your new **Filter widget** in.

     A layout container is a simple way to organise, arrange and move the widgets you add to your dashboard. To learn more about layout containers, go to [How to add layout containers to a Dashboard page](/docs/platform/pages#how-to-add-layout-containers-to-a-dashboard-page).
     
     In this example, we can select to place our new Filter widget into one of three layout containers - Top, Middle or Bottom:

		![Dashboard Add widget dialog box select Layout container](/images/dashboard-select-layout-container.jpg)
     
   - **Device visibility** - You can choose what devices and types of internet connections the dashboard **Filter widget** will be visible on - select all the options you want from Desktop, Tablet, Mobile, Wi-Fi and Flight mode as to when the device can view the dashboards. By default, all options are selected.

     ![Device visibility](/images/devicevisibility.png)

5. Click on **OK** when you've completed the **Add widget** dialog box.

6. A **Filter settings** dialog box automatically opens showing the options for the Filter widget:

   ![Dashboard Link widget Edit button links dialog box](/images/dashboard-filter-settings-dialog.jpg)

   Select the options you want for your **Filter widget**:

   - **Filter type**: You can choose the way you want the filter options to be displayed for the end user. The options are **Dropdown list**, **Radio list**, **Date range**, **Free text** or **Current user**.
     
     - **Dropdown list** - Select this option if you want the filter options to be shown in a dropdown list.
     
     - **Radio list** - Select this option if you want the filter options to be shown in a radio list.
     
     - **Date range** - Select this option if you want the filter options to be shown as date ranges. If you select **Date range** as the Filter type, you then have two filter options - **Date** or **Date and time**:
     
       ![Dashboard Filter Widget date range filter options](/images/dashboard-filter-date-range-options.jpg)
     
     - **Free text** - Select this option if you want the filter options to consist of free text.
     
     - **Current user** - Select this option if you want to filter by current user. If you select **Current user** as the Filter type, you then need to choose the **Current user property** from a drop-down list:
     
       ![Dashboard Filter widget filter by Current User filter options](/images/dashboard-filter-current-user.jpg)
     
   - **Filter options** - Once you have chosen the **Filter type** you want - let's say drop-down list - you can then decide whether the options that the end user can filter are **Manual entries** (that you input by typing them into the box with the 'Options one per line' placeholder text) or are pulled from a **Data source**.

     If you select **Data source** to pull the filter options from a data source, four additional options will be shown:

     ![Dashboard Filter widget Data source options](/images/dashboard-filter-data-source.jpg)

     - **Data source** - If you select '**Data source**' for creating your filter options, next click on the **Data source** button. The **Select data source** dialog box automatically opens:

       ![Dashboard Filter widget select datasource dialog box](/images/dashboard-filter-select-datasource.jpg)

       Select the data source you want to use by selecting one of the available Data sources listed on the left.

       For our example, we will select **Kianda** as our data source and then select the 'Annual leave request and approval process'. We can do this by either

       **(a)** typing the start of this process name into the '**data source tree**' search field and selecting it when it is displayed below it, or

       ![Dashboard Filter widget Select datasource example](/images/dashboard-link-datasource-example.jpg)

       **(b)**  by clicking on **Processes** to show the full list of Kianda processes and scrolling and selecting the one we want.

       ![Dashboard Filter widget Select datasource Kianda process](/images/dashboard-filter-datasource-process.jpg)

       Click **OK** when you have selected the data source you want to use. The source you selected will now be shown beneath the **Data source** button in the **Filter settings** dialog box.

       ![Dashboard Filter widget data source shown in Filter settings dialog box](/images/dashboard-filter-datasource-shown.jpg)

     - **Edit conditions** - If you want to add a condition to your filter

       1. Click the **Edit conditions** button ![Edit Conditions button](/images/Edit_Conditions_button.jpg) and the **Edit conditions** dialog box will open.

       2. Click the **Add conditions group** button ![Dashboard Filter widget Add a conditions group button](/images/addconditions.png).

       3. Add the condition you want and click on **OK**. 

          **Note**: To see an example of adding a condition to a filter, see the '**Add connections**' option further down. 

     - **Display field** - Choose the field you want displayed as the field options.

       In our example - setting up a Filter widget to filter annual leave requests by employee name - we chose a Kianda process as the data source for the filter options, so when we click on the Display field, we can then expand the relevant form (Request form) and select the field we want to filter by:

       ![Dashboard filter widget select Display field example](/images/dashboard-filter-display-field-example.jpg) 

     - **Value field** - Choose the value you want displayed as the field options. Typically, the same field will be chosen as both the Display field and Value field (but you could choose different fields as needed).

       In our example, we will select the '**Employee Name**' field from the 'Request form' in the 'Annual leave request and approval process' for both the Display field and Value field:

       ![Dashboard filter select Display field and Value field](/images/dashboard-filter-display-field.jpg)

   - **Filter mode** - You can choose whether the filter widget displays options that **start with** the letters or words the user types into the filter widget search box, or shows filter options that **contain** the letters or words the user inputs.

   - **Default value** - You can choose a Default value to appear in the Filter widget.
     
     - **Enable query string** - This option appears for all Filter types except for Date range and Current user. 
     
       To enable a query string:
     
       1. Select the '**Enable query string**' checkbox.
       2. Insert the **unique field name** of the field you want to filter by into the box with the 'Parameter name' placeholder text. 
     
       ![Dashboard Filter widget Enable query string option](/images/dashboard-filter-enable-query-string.jpg)
     
       **Note** - You can find the unique field name by going to the form that contains the field and clicking on the **Edit field** button to open the **Edit field** dialog box and copying the unique field name from the '**Name (Unique)**' field.
     
       In our example, we can find the **unique field name** we need to enable a query string by:
     
       1. Opening the Annual Leave process
       2. Selecting the 'Employee Name' field in the Annual Leave Request form - the field we want to filter by in our Filter widget.
       3. Opening the **Edit field** dialog box to find the field's unique name:
     
			![Dashboard Filter widget Query string example field unique name](/images/dashboard-filter-query-string-uniquename.jpg)
     
       4. In our **Filter settings** dialog box, we can now select the '**Enable query string**' checkbox and insert this unique field name into the Parameter name box - we will also select the '**Auto update URL**' option (which will dynamically construct a URL, meaning that the URL at the top of the page will automatically change when we choose a filter option):
     
			![Dashboard filter widget Enable query string example](/images/dashboard-filter-query-string-example.jpg)
     
       5. Once you complete the **Filter settings** dialog box and click **OK** and then click the **Save** button in the top menu, you will now see that when you select an employee in the Filter widget, the URL at the top updates:
     
			![Dashboard Filter widget enable query string Auto update URL example](/images/dashboard-filter-query-string-url.jpg)
     
       Setting the filter up like this to automatically update the URL when a filter option is selected, enables you to make any of the filter selections a **dashboard favourite** page. 
       
       For example, we could now choose to make this filter selection - Maddy Leenane's annual leave requests - a favourited dashboard page by clicking on the **Add to favourites** button in the top menu and completing the **Add to favourite** dialog box that opens:
       
       ![Dashboard Filter widget enable query string auto update URL add to favourites example](/images/dashboard-filter-query-string-favourited.jpg)
     
   - **Add connections** - Click on the **Add connections** button ![Dashboard Link widget Add connection button](/images/dashboard-filter-add-connection.jpg) if you want to **add a filter connection to an existing widget on the dashboard**, so that the data displayed in that widget is filtered based on the option selected in the Filter widget.

     - The **Filter connection** dialog box opens - click on the down arrow and select the dashboard widget you want to connect to:

       ![Dashboard Filter widget Widget Filter connection dialog box](/images/dashboard-filter-widget-connection.jpg)
     
     - You can then choose to add filter conditions to the widget filter connection by:
     
       (a) clicking on the **Add filter conditions** button ![Dashboard Filter widget Widget filter connection Add filter conditions button](/images/dashboard-filter-add-filter-conditions.jpg), 
     
       (b) clicking the **Add a conditions group** button ![Dashboard Filter widget Widget filter connection Add a conditions group button](/images/addconditions.png) in the **Edit conditions** dialog box that opens, or
     
       ![Dashboard Filter widget Widget filter connection Edit conditions dialog box](/images/dashboard-filter-widget-connection-conditions.jpg)
     
       (c) completing the **Edit conditions** dialog box to apply conditions to the widget filter connection and then clicking on **OK**.
       
       In our example, we would add a filter condition to the widget filter connection by selecting 'Employee Name' in the field on the left and 'Filter value' in the field on the right. This will ensure that the 'Employee Name' field will display as the filter value.
       
       ![Dashboard Filter widget Widget connection filter condition example](/images/dashboard-filter-widget-connection-conditionex.jpg)
     
     - Once you have completed the **Filter connection** dialog box, click **OK**. The widget you have connected to the new Filter widget will now be shown under **Widget connections**:
     
       ![Dashboard Filter widget Widget connections example](/images/dashboard-filter-widget-connection-example.jpg)
     
       

7. Click on the **OK** button when you are finished choosing the options you want for your **Filter widget** in the **Filter settings** dialog box (or click on **Close** to exit the **Edit link** dialog box without saving).

8. Click on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the top dashboard menu to save the insertion of the new Filter widget.

9. Your new **Filter widget** will now be displayed on your dashboard. 

   - Our example of a **Filter widget** for the 'Annual Leave' dashboard - where the filter allows users to filter the Annual Leave Request records in the existing List Widget by employee name - could look like this:

		![Dashboard Filter widget example](/images/dashboard-filter-example.jpg)
	
	- When the user clicks on the down arrow button in the Filter widget, the names of employees who have submitted an Annual Leave Request are shown in a drop-down list. 
	
	- The user can then select an employee name from the drop-down list and the List widget to the right will automatically update to only show Annual Leave Request records (process instances) submitted by that employee. This is because we used the **Widget connection** option to connect that List widget to the new Filter widget.
	
		![Dashboard Filter widget example connected to a List widget](/images/dashboard-filter-example2.jpg)



### How to edit Filter widgets

To edit a **Filter widget** on a dashboard:

1. In the dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to view the page in [Dashboards Edit mode](/docs/platform/pages#dashboards-edit-mode) (in which the **Widget menu**, **Settings** button ![Settings](/images/settings.png) and **Bin/Trash** button ![Bin trash button](/images/bin.png) are available).

2. Click on the Filter widget's **Update configuration** (Edit) button ![Dashboard update configuration button](/images/dashboard-update-configuration.jpg).

   ![Select Dashboard Link widget Update configuration button](/images/dashboard-filter-update-config.jpg)

3. The **Filter settings** dialog box opens, enabling you to make whatever changes you want to the filter using the same range of options as outlined in Step 6 of [How to get started](#how-to-get-started).

4. Making the changes you want and then click **OK**. 

5. The updated **Filter widget** will be shown on the Dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### How to move Filter widgets

To move a **Filter widget** on a dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboards Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Select the widget's **drag handle** button ![Dashboard widget drag handle button](/images/dashboard-widget-draghandle.jpg). 

3. Drag and drop the widget where you want it to go on your dashboard.

   In our example, we could move the new Filter widget to the top left of the dashboard:  ![Move a Dashboard Link widget](/images/dashboard-filter-move.jpg)

4. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.





### How to delete Filter widgets

To delete a **Filter widget** from your dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboards Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the widget's **Remove widget** (Bin/Trash icon) button ![Bin icon](/images/binicon.png).

   ![Delete Dashboard Rich Text widget](/images/dashboard-filter-delete.jpg)

3. A **Delete widget** dialog box will open. Click on **OK** to delete the widget (or click on **Cancel** if you wish to cancel the deletion).

   ![Dashboard Delete widget dialog](/images/dashboard-delete-widget-dialog.jpg)

4. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.

   


### How to edit Filter widget settings

To update or edit your **Filter widget** settings:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboards Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the **Update widget settings** (Cog) button ![Dashboard Update widget settings button](/images/cog-shared-process.jpg).

   ![Dashboard Update widget settings button](/images/dashboard-filter-edit-widget-settings.jpg)

3. The **Edit widget** dialog box will open, enabling you to make changes to any of the available options (the same options as were available in the **Add widget** dialog box discussed in Step 4 of [How to get started](#how-to-get-started)).

   ![Dashboard Link widget Edit widget dialog box](/images/dashboard-filter-edit-widget.jpg)

   In our example, we could choose to reduce the width of the **Filter widget** to be 4 columns wide, by clicking to the left of the existing blue bar.

4. Click on **OK** to confirm the changes you've made to the widget settings (or click on **Close** if you don't want to retain any changes).

5. The updated **Filter widget** will display on your dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### Saving changes ###

Make sure to save any changes you make to your **Filter widget** by clicking on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu. If you leave the dashboard without saving the changes you have made to a widget, the next time you visit the dashboard it won't include any of the changes made to it since the dashboard page was last saved.



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about the **Dashboard Filter widget**, find out more about the other types of **Dashboard widgets** you can add to your Kianda dashboard:

- [Chart widget](/docs/platform/pages/chart/)
- [Link widget](/docs/platform/pages/link/)
- [Rich Text widget](/docs/platform/pages/richtext/)
- [List widget](/docs/platform/pages/list/)
- [Tile widget](/docs/platform/pages/tile/)
- [Walkthrough widget](/docs/platform/pages/walkthrough/)
- [Custom dashboard widget]( /docs/platform/pages/custom/)
