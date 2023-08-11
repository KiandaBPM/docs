---
title: "Tile widget"
typora-root-url: ..\..\..\..\static
weight: 2
---

A dashboard **Tile widget** allows you to display a count of instances. This is a really useful way to showcase whole numbers - for example, the total budget requested through Purchase Orders, the number of customer queries solved in a week or the number of training requests that have been approved.



## How to get started ##

1. After creating a dashboard page, make sure you are in Edit mode, by clicking on the **Edit** button ![Edit button](/images/edit.png) at the top of the page, so the Widget menu with 7 widget types is available. Then click on the Tile widget ![Tile widget button](/images/tile.png).

2. The **Add widget** dialog box opens.

   ![Add tile widget](/images/dashboard-add-tile.jpg)

   Choose from the edit options:

   - **Title** - the dashboard title, for example Type of Training

   - **Layout columns** - control the size of the dashboard, choose from 1 to 12 columns in width. For example click half-way across the blue bar to create a panel that is 6 columns wide, or click on the right of the blue bar to create a column that is 12 columns wide.

   - **Colour scheme** - choose from Navy, Green, Blue, Amber, Red or White Colours for your dashboard.

   - **Show header** checkbox - tick this checkbox if you wish to show a header on your dashboard.

   - **Visible to** - You can determine who will be able to see the **Tile widget**. You can select single or multiple Users or Groups, or a combination of the two. You can select Users or Groups in the right-hand menu so that the options shown in the drop-down list are either individual users or Groups.

     To find out more about pre-defined Groups on Kianda, go to [Users & Groups](/docs/platform/administration/users).

     - **Note - Dashboard page security**: When a dashboard page is first created, the users(s)/group(s) who will be able to view the dashboard are selected in the '**Visible to**' option in the **Create dashboard page** dialog box (see Step 3 in [How to create a Dashboard page](/docs/platform/pages#how-to-create-a-dashboard-page)). 

       You can also edit or update this setting at any point to change who has permission to view a particular dashboard page. This higher dashboard-level security setting will take precedence over the security settings ('Visible to') that are applied to the *individual widgets* within the dashboard (such as the Tile widget, in this case).

       See [Dashboard security](/docs/security/process-level-security#dashboard-security) and [Widget security](/docs/security/process-level-security#widget-security) for more information.

   - **Layout container** - This option will only display if you have already created layout containers for your Dashboard page. Here, you can select which layout container you want your new **Tile widget** to be placed in.

     A layout container is a simple way to organise, arrange and move the widgets you add to your dashboard. To learn more about layout containers, go to [How to add layout containers to a Dashboard page](/docs/platform/pages#how-to-add-layout-containers-to-a-dashboard-page).
     
     In this example, we can select to place our new Tile widget into one of three layout containers - Top, Middle or Bottom:
     
     ![Dashboard Add widget dialog box select Layout container](/images/dashboard-select-layout-container.jpg)
     
   - **Device visibility** - choose from icons for deshtop, tablet, mobile, wifi and flightmode as to when the device can view the dashboards.

     ![Device visibility](/images/devicevisibility.png)

3. Click on the **OK** button when you are finished editing the dashboard to save your changes or click on **Close** to exit the dialog box without saving.

4. You can then edit the widget to display certain fields from your form, that relates to the data you are interested in. Go to [Configure your widget](#configure-your-widget) to find out more.

5. When you are finished making edits, click on the **Save** button ![Save button](/images/save.png) in the top menu to ensure your dashboard changes are saved and you see a pop-up message **Page saved successfully**.

6. To make further changes later on, click on the **Edit** button ![Edit button](/images/edit.png) in the top menu and then click on the **Pen** button.

   ![Pen button in a widget](/images/penbutton_frame.png) 

   

7. To re-edit the title, colour scheme or other options in Step 2, click on the **Settings** button ![Settings button](/images/cog.png)and the **Edit widget** dialog box options, allowing you to make changes.

8. To delete the widget at any stage, click on the **Bin** icon ![Bin button](/images/bin.png) beside the cog button, and then click on **Ok** to confirm that you want to delete the dashboard page or click on **Cancel** if you wish to cancel the deletion.

   


## Configure your widget ##

1. Click on the **Update configuration** or **Pen** button in a tile widget you have created.

   ![Tile widget edit](/images/edittile.png)

2. A dialog box opens with filter options in the left-hand pane,  a **Conditions** button ![Conditions](/images/conditions.png) in the middle of the box, and tile view fields and **Key performance indicators** in the right-hand pane. Go to [Conditions](/docs/platform/pages/conditions/) to read more about conditions you can apply to dashboard widgets, and go to Tile view fields to read more about changing how a tile looks.

   ![Editing a tile widget](/images/edittilebox.png)

3. The first option on the left is to choose is where the data should originate from using the **Data from** radio buttons. Choose from a) Process b) Partner process c) Data source. Depending on which option you choose go to the relevant area to read more on [Choosing data from a Process](#choosing-data-from-a-process), [Choosing data from a Partner process](#choosing-data-from-a-partner-process) and [Choosing data from a Data source](#choosing-data-from-a-data-source).

4. The second option **Show processes** has 3 radio buttons associated with it a) Matching condition b) Matching condition and assigned to current user c) Matching condition and created by current user.

5. The third option **Show decimals** allows you to choose if a decimal point is used in the number displayed. Choose from a) Yes or b) No if you want to only show a whole number.

6. The fourth option **Connect to List widget** allows you to choose if this widget should connect to List widgets you have created for this dashboard page. Choose from a) Yes or b) No if you want to connect the widgets. If you click on **Yes** then click into the List Widget field and choose from previously created list widgets.

   ![Connect to List widget](/images/connecttolist.png)

7. **Tile expression** allows you to select if the displayed number in the tile is a *count*, *sum*, or *average* of the data.

8. **Tile icon** is where you can choose what icon will be displayed in the tile to suit your specific needs.

9. **Change color or text of tile based on condition/s** - this section allows you to add key performance indicators (KPI) to your tile widget. For example, if the value you're monitoring rises above 10, the colour and icon can be changed to indicate. This can draw your attention to key indicators such as emergencies or unacceptable levels of non-conformance within your organisation. 

   To create a KPI, click on the white **Plus** button <img src="/images/white-plus-btn.png" alt="White plus button image" style="zoom: 50%;" /> to bring up the **Add Tile KPI** screen.

   <img src="/images/kpi.png" alt="KPI image" style="zoom:80%;" />

   On the Add Tile KPI screen, fill out:

   * **KPI condition** - choose an operator such as *greater than*, *equal to* - followed by a value. When this condition is met, the tile will change to the below properties:
   * **Tile title** - the new title of the tile
   * **Tile icon** - the new icon of the tile
   * **Tile colour** - the new colour of the tile

   When finished, click **OK** to save your changes, or click **Close** to cancel your changes.

   All KPIS will be displayed in the modal dialog, and can be deleted by clicking on the Bin/Trash icon button ![Bin icon](/images/binicon.png).

   ![KPIs all view image](/images/kpi-example.png)

10. When you are finished choosing options, click on the **OK** button to save your changes or click on **Close** to exit the dialog box without saving.



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
- **Show processes** - choose from a) Matching condition b) Matching condition and assigned to current user c) Matching condition and created by current user



### Choosing data from a Data source ###

If you choose data from a Data source, then click on the **Select data source** button.

![Selecting a data source](/images/selectdatasource.png)

You will be directed to different data sources where you can search in the **datasource tree** search box or drill down to the data source you want. 

![Select data source](/images/selectdatasource.png)

Click on the **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.



### How to move Tile widgets

To move a **Tile widget** on a dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode).
2. Select the widget's **drag handle** button ![Dashboard widget drag handle button](/images/dashboard-widget-draghandle.jpg). 
3. Drag and drop the widget where you want it to go on your dashboard.
4. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made. 

  

### How to delete Tile widgets

To delete a **Tile widget** from your dashboard:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the widget's **Remove widget** (Bin/Trash icon) button ![Bin icon](/images/binicon.png).

3. A **Delete widget** dialog box will open. Click on **OK** to delete the widget (or click on **Cancel** if you wish to cancel the deletion).

   ![Dashboard Delete widget dialog](/images/dashboard-delete-widget-dialog.jpg)

4. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### How to edit Tile widget settings

To update or edit your **Tile widget** settings:

1. On your dashboard, click on the **Edit current page** button ![Edit button](/images/edit-current-page.jpg) in the top menu to go into [Dashboard Edit mode](/docs/platform/pages#dashboards-edit-mode).

2. Click on the **Update widget settings** (Cog) button ![Dashboard Update widget settings button](/images/cog-shared-process.jpg).

3. The **Edit widget** dialog box will open, enabling you to make changes to any of the available options (the same options as were available in the **Add widget** dialog box discussed in Step 2 of [How to get started](#how-to-get-started)).

   For example, we could choose to reduce the width of the **Tile widget** by clicking to the left of the blue bar which denotes layout column width.

4. Click on **OK** to confirm the changes you've made to the widget settings (or click on **Close** if you don't want to retain any changes).

5. The updated **Tile widget** will display on your dashboard. Click on **Save** ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu to save the changes you've made.



### Saving changes ###

Make sure to save any changes you make to your dashboard **Tile widget** by clicking on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu. If you leave the dashboard without saving the changes you have made to a widget, the next time you visit the dashboard it won't include any of the changes made to it since the dashboard page was last saved.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Dashboard Tile widgets**, find out more about the other types of **Dashboard widgets** you can add to your Kianda dashboard:

- [Chart widget](/docs/platform/pages/chart/)
- [Filter widget](/docs/platform/pages/filter/)
- [Rich Text widget](/docs/platform/pages/richtext/)
- [Link widget](/docs/platform/pages/link/)
- [List widget](/docs/platform/pages/list/)
- [Walkthrough widget](/docs/platform/pages/walkthrough/)
- [Custom dashboard widget]( /docs/platform/pages/custom/)
