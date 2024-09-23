---
title: "Chart widget"
typora-root-url: ..\..\..\..\static
weight: 4
---

A dashboard **Chart widget** enables you to create pie charts, bar charts or line charts on your dashboard page. These charts can be used to represent various conditions or values in a process.



## How to get started ##

1. After creating a dashboard page, make sure you are in Edit mode, by clicking on the **Edit** button ![Edit button](/images/edit.png) at the top of the page, so the Widget menu with 7 widget types is available. Then click on the Chart widget ![Chart widget](/images/chart.png).

2. The **Add widget** dialog box opens.

   ![Add chart widget](/images/dashboard-add-chart.jpg)

   Choose the options you want for your new **Chart widget**:

   - **Title** - You can insert the title you want for your **Chart widget** (instead of the default title that is shown). 

   - **Layout columns** - You can choose how wide you want your **Chart widget** to be. You can choose from 1 to 12 columns in width by clicking on the blue bar. For example, click half-way across the blue bar to create a widget that is 6 columns wide.

   - **Colour scheme** - You can choose from six colour options for the header of the widget (Navy, Green, Blue, Amber, Red or White), if you choose to display it.

   - **Show header** - You can choose whether or not you want the header of your Chart widget to be displayed in the dashboard. This checkbox is selected by default, so de-select it if you don't want the header to be displayed. 

   - **Visible to** - You can choose who will be able to see the **Chart widget**. Select single or multiple Users or Groups, or a combination of the two. You can use the menu on the right to either filter the drop-down list by Users or Groups. To find out more about pre-defined Groups on Kianda, go to [Users & Groups](/platform/administration/users).

     - **Note - Dashboard page security**: When a dashboard page is first created, the users(s)/group(s) who will be able to view the dashboard are selected in the '**Visible to**' option in the **Create dashboard page** dialog box (see Step 3 in [How to create a Dashboard page](/platform/pages#how-to-create-a-dashboard-page)). 

       You can also edit or update this setting at any point to change who has permission to view a particular dashboard page. This higher dashboard-level security setting will take precedence over the security settings ('Visible to') that are applied to the *individual widgets* within the dashboard (such as the Chart widget, in this case).

       See [Dashboard security](/security/process-level-security#dashboard-security) and [Widget security](/security/process-level-security#widget-security) for more information.

   - **Layout container**: This option will only display if you have already created layout containers for your Dashboard page. Here, you can select the layout container you want to place your new **Chart widget** in.

     A layout container is a simple way to organise, arrange and move the widgets you add to your dashboard. To learn more about layout containers, go to [How to add layout containers to a Dashboard page](/platform/pages#how-to-add-layout-containers-to-a-dashboard-page).

     In this example, we can select to place our new Chart widget into one of three layout containers - Top, Middle or Bottom:

     ![Dashboard Add widget dialog box select Layout container](/images/dashboard-select-layout-container.jpg)

   - **Device visibility** - You can choose what devices and types of internet connections the dashboard **Chart widget** will be visible on - select all the options you want from Desktop, Tablet, Mobile, Wi-Fi and Flight mode as to when the device can view the dashboards. By default, all options are selected.

     ![Device visibility](/images/devicevisibility.png)

3. Click on **OK** when you've completed the **Add widget** dialog box.

4. An **Edit chart** dialog box automatically opens showing the options for your new Chart widget. To learn more about these options and how to complete the Edit chart dialog box so the Chart widget displays certain fields from your form, see Step 3 of [How to edit Chart widgets](#how-to-edit-chart-widgets).

5. Once you have finished choosing the options you want in the **Edit chart** dialog box, click on the **OK** button (or click on **Close** to exit the dialog box without saving).

6. Click on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the top dashboard menu to save the insertion of the new Chart widget.

7. Your new **Chart widget** will now be displayed on your dashboard. 

   Here is an example of how Chart widgets can look on a dashboard page:

   ![Example of dashboard Chart widgets on a dashboard page](/images/dashboard-chart-examples.jpg)



## How to edit Chart widgets ##

To edit a **Chart widget** on a dashboard:

1. In the dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to view the page in [Dashboard Edit mode](/platform/pages#dashboards-edit-mode) (in which the **Widget menu**, **Settings** button ![Settings](/images/settings.png) and **Bin/Trash** button ![Bin trash button](/images/bin.png) are available).

2. Click on the Chart widget's **Update configuration** (Edit) button ![Dashboard update configuration button](/images/dashboard-update-configuration.jpg).

   ![Chart widget edit](/images/chartpen.png)

3. The **Edit chart** dialog box opens, enabling you to choose from a range of options for your Chart widget. Filter options are shown in the left-hand pane, a **Conditions** button ![Conditions button](/images/conditions.png) in the middle of the dialog box, and chart edit fields in the right-hand pane. 

   Go to [Conditions](/platform/pages/conditions/) to read more about conditions you can apply to data and go to [Chart view fields](#chart-view-fields) to read more about changing how a chart looks.

   ![Editing a chart widget](/images/editchart.png)

4. The first option on the left is to choose is where the data should originate from using the **Data from** radio buttons. Choose from a) Process b) Partner process or c) Data source. Depending on which option you choose go to the relevant area to read more on [Choosing data from a Process](#choosing-data-from-a-process), [Choosing data from a Partner process](#choosing-data-from-a-partner-process) and [Choosing data from a Data source](#choosing-data-from-a-data-source).

5. The second option **Show processes** has 3 radio buttons associated with it a) Matching condition b) Matching condition and assigned to current user c) Matching condition and created by current user. 

6. The third option **Connect to List Widget** allows you to choose if this widget should connect to List widgets you have created for this dashboard page. Choose from a) Yes or b) No if you want to connect the widgets. If you click on **Yes**, then click into the List Widget field, you can choose from previously created list widgets.

   ![Connect to List widget](/images/connecttolist.png)

7. Go to [Chart view fields](#chart-view-fields) to read about options in the right-hand pane of this dialog box to make changes to your chart like size, labels and adding a chart legend.

8. When you are finished choosing options, click on the **OK** button to save your changes or click on **Close** to exit the dialog box without saving.

9. Making the changes you want and then click **OK**. 

10. The updated **Chart widget** will be shown on the Dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### Choosing data from a Process ###

If you choose data from a Process, then the options below become available.

![Choosing data from a Process](/images/processdata2.png)

Choose from the following options:

- **Business process** - click into the field to choose a process which will be the input for the dashboard.
- **Show processes** - choose from a) Matching condition b) Matching condition and assigned to current user c) Matching condition and created by current user.



### Choosing data from a Partner Process ###

If you choose data from a Partner Process, then the options below become available.

![Choosing data from a Process](/images/partnerprocess_resized.png)

Choose from the following options:

- **Partner** - click into the field to choose from a pre-configured Partner who has created the process you are interested in.
- **Business process** - click into the field to choose a process which will be the input for the dashboard.
- **Show processes** - choose from a) Matching condition b) Matching condition and assigned to current user c) Matching condition and created by current user.



### Choosing data from a Data source ###

If you choose data from a Data source, then click on the **Select data source** button.

![Selecting a data source](/images/selectdatasource.png)

You will be directed to different data sources where you can search in the **data source tree** search box or drill down to the data source you want. 

![Select data source](/images/selectdatasource.png)

Click on the **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.



### Chart view fields #

When you choose the Chart widget for your dashboard, there are a number of options to configure the chart to make it look the way you want. 

1. Click on the **Pen** button ![Pen button](/images/pen.png) in the widget you have created, to see the fields used to **edit the chart**, visible in the right-hand pane.

   ![Chart edit fields](/images/charteditfields.png) 

2. Choose from the edit options:

   - **Chart type** - choose from a) Pie chart b) Bar chart c) Line chart.

   - **Labels field** - click into the field to drill down to find what you want to use. You can use **Common fields** such as Status and Created, commonly used in dashboards, and use **design fields** that are part of processes attached to forms, for example fields within the forms Training Request and Training Approval below.

     ![labelsfield](/images/labelsfield.png)

     

   - **Values field** - choose from a) Count b) Sum c) Average and click into the field itself to drill down to the fields you want, as with the **Labels field**.

   - **Chart width** - use the arrow to choose a numeric value.

   - **Chart height** - use the arrow to choose a numeric value.

   - **Limit label names** - options are a) Yes or b) No 

   - **Show values** - options are a) Yes or b) No 

   - **Hide legend** - options are a) Yes or b) No 

3. Click on the **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.

4. To change the chart settings, that is the way the chart looks, title and so on, click on the **Settings** button ![Settings button](/images/cog.png) and go to [How to edit Chart widget settings](#how-to-edit-chart-widget-settings) to find out more about edit options.

5. When you are finished making edits to your widget, click on the **Save** button ![Save button](/images/save.png) in the top menu to ensure your dashboard changes are saved and you will see a pop-up message **Page saved successfully**.

6. To make further changes later on, click on the **Edit** button ![Edit button](/images/edit-current-page.jpg) in the top menu and then click on the **Pen** button.

   ![Pen button in a widget](/images/penbutton.png) 



### How to move Chart widgets

To move a **Chart widget** on a dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/platform/pages#dashboards-edit-mode).
2. Select the widget's **drag handle** button ![Dashboard widget drag handle button](/images/dashboard-widget-draghandle.jpg). 
3. Drag and drop the widget where you want it to go on your dashboard.
4. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made. 

  

### How to delete Chart widgets

To delete a **Chart widget** from your dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/platform/pages#dashboards-edit-mode).

2. Click on the widget's **Remove widget** (Bin/Trash icon) button ![Bin icon](/images/binicon.png).

3. A **Delete widget** dialog box will open. Click on **OK** to delete the widget (or click on **Cancel** if you wish to cancel the deletion).

   ![Dashboard Delete widget dialog](/images/dashboard-delete-widget-dialog.jpg)

4. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### How to edit Chart widget settings

To update or edit your **Chart widget** settings:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/platform/pages#dashboards-edit-mode).

2. Click on the **Update widget settings** (Cog) button ![Dashboard Update widget settings button](/images/cog-shared-process.jpg).

3. The **Edit widget** dialog box will open, enabling you to make changes to any of the available options (the same options as were available in the **Add widget** dialog box discussed in Step 2 of [How to get started](#how-to-get-started)).

   For example, we could choose to reduce the width of the **Chart widget** by clicking to the left of the blue bar which denotes layout column width.

4. Click on **OK** to confirm the changes you've made to the widget settings (or click on **Close** if you don't want to retain any changes).

5. The updated **Chart widget** will display on your dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### Saving changes ###

Make sure to save any changes you make to your **Chart widget** by clicking on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu. If you leave the dashboard without saving the changes you have made to a widget, the next time you visit the dashboard it won't include any of the changes made to it since the dashboard page was last saved.



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about the **Dashboard Chart widget**, find out more about the other types of **Dashboard widgets** you can add to your Kianda dashboard:

- [Link widget](/platform/pages/link/)
- [Rich Text widget](/platform/pages/richtext/)
- [List widget](/platform/pages/list/)
- [Tile widget](/platform/pages/tile/)
- [Walk-through widget](/platform/pages/walkthrough/)
- [Custom dashboard widget]( /platform/pages/custom/)
- [Filter widget](/platform/pages/filter/)
