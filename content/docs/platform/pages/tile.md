---
title: "Tile widget"
typora-root-url: ..\..\..\..\static
---

The tile widget allows you to display a count of instances. This is a really useful way to showcase whole numbers for example total budget requested through Purchase Orders, or the amount of customer queries solved in a week.



## How to get started ##

1. After creating a dashboard page, make sure you are in Edit mode, by clicking on the **Edit** button ![Edit button](/images/edit.png) at the top of the page, so the Widget menu with 7 widget types is available. Then click on the Tile widget ![Tile widget button](/images/tile.png).

2. The **Add widget** dialog box opens.

   ![Add tile widget](/images/addtilewidget.png)

   Choose from the edit options:

   - **Title** - the dashboard title, for example Type of Training

   - **Layout columns** - control the size of the dashboard, choose from 1 to 12 columns in width. For example click half-way across the blue bar to create a panel that is 6 columns wide, or click on the right of the blue bar to create a column that is 12 columns wide.

   - **Colour scheme** - choose from Navy, Green, Blue, Amber, Red or White Colours for your dashboard.

   - **Show header** checkbox - tick this checkbox if you wish to show a header on your dashboard.

   - **Visible to** - determine who will see the dashboard, choose from a) Users b) Groups 

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

2. A dialog box opens with filter options in the left-hand pane,  a **Conditions** button ![Conditions](C:\Kianda\docs-dev\pages\tile.assets\conditions.png)in the middle of the box, and tile view fields in the right-hand pane. Go to [Conditions](pages/conditions.md) to read more about conditions you can apply to data, and go to [Tile view fields](pages/tileviewfields.md) to read more about changing how a tile looks.

   ![Editing a tile widget](/images/edittilebox.png)

3. The first option on the left is to choose is where the data should originate from using the **Data from** radio buttons. Choose from a) Process b) Partner process c) Data source. Depending on which option you choose go to the relevant area to read more on [Choosing data from a Process](#choosing-data-from-a-process), [Choosing data from a Partner process](#choosing-data-from-a-partner-process) and [Choosing data from a Data source](#choosing-data-from-a-data-source).

4. The second option **Show processes** has 3 radio buttons associated with it a) Matching condition b) Matching condition and assigned to current user c) Matching condition and created by current user.

5. The third option **Show decimals** allows you to choose if a decimal point is used in the number displayed. Choose from a) Yes or b) No if you want to only show a whole number.

6. The fourth option **Connect to List widget** allows you to choose if this widget should connect to List widgets you have created for this dashboard page. Choose from a) Yes or b) No if you want to connect the widgets. If you click on **Yes** then click into the List Widget field and choose from previously created list widgets.

   ![Connect to List widget](/images/connecttolist.png)

6. Go to [Tile view fields](pages/tileviewfields.md) to read about options in the right-hand pane of this dialog box to make changes to your tile like icons and colours.

7. When you are finished choosing options, click on the **OK** button to save your changes or click on **Close** to exit the dialog box without saving.



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