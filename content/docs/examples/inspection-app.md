---
title: "Simple Inspection process"
typora-root-url: ..\..\..\static
---

In this example we will step through how to create a simple Inspection process made up of two forms: 

- a **Request form** which is completed by a company employee, requesting an engineer to visit a specific location to perform an inspection
- an **Inspection form** which contains the inspection checklist that the engineer must complete

The result at the end of the process is an email to a designated Safety manager, who receives a PDF report of the inspection form.

The process will use **utility panels** to hold form fields and values, not visible to the end user, but these will be used with rules to automate the process.



## Creating a new process

You can create an Inspection process if you have the role **Administrator** or **Designer** by going to the left-hand side menu and click on **Administration** and **Designer**.

1. When you are in process designer window, click on **Add new** button to start a new process. This button can be found at the top of the screen.

2. **Add new process** window appears with the following fields to fill out:
   
   - **Title** - represents the name of your process which is also the displayed name for other users.
   - **ID (unique)** - A unique ID which is used to identify your process. 
   - **Description** - Piece of text to describe your new process.
   - **Group** - A group which you want your new process to belong to.
     - If a group already exist, it will simply add your new process to that group.
     - If the group does not exist, it will make a folder for you and automatically add the process to that group.
   - **Administrators** - In this field you can choose to add **Users** and **Groups** to be administrators of the new process. This field determines who can edit and make changes to your process.

   ![Add new process window](/images/examples-new-process.jpg)
   
3. After you fill out the information needed, press **OK**. You are automatically brought into a **blank** process creation page, which looks as follow:

   ![Process creation page](/images/examples-process-creation-page.jpg)

## Creating forms

For this **Inspection process** we will create two different forms.

- **Request form** which will be used to request an inspection
- **Inspection form** which will be used by an engineer to complete the inspection.

### Request Form

#### Form Settings

1. From the process creation page, click on **form 1** to select the form. This can be found at the top of your screen. 

   ![Form selection](/images/examples-form-select.jpg) 

2. Click on the pen icon ![Pen icon](/images/penicon.png) on the selected form to edit it.

3. An **Edit form** box appear on your screen. There are 8 different fields to fill in.

   - **Title** - Name to represent this form. In our case we will call it **Request Form**.
   - **Name (unique)** - A unique identifier for our form. You can give this any name you would like as long as it's unique.
   - **Default owner(s)** - This field identifies which users can fill out our form when it's complete. In our case we will choose from **Groups** and choose our **Management Team**. *put a link leading to group creation.*
   - **Activate with** - We can avoid this field. We will cover this in later use cases. 
   - **Submit mode** - Choose **Only this form** radio list. 
   - **Form icon** - Dropdown field to select an icon for the form.
   - **Form theme** - This option is used to change the colour of the form tile. We will change it to **Green**.
   - **Enable quick actions** - A check box which allows us to enable or disable different actions to our form. Leave this box unchecked. 

   ![Edit form box](/images/examples-request-form-edit-box.jpg)

4. **Request form** settings are now complete. Press **OK** to accept the changes, this will bring you back to the process creation page.

#### Form Layout

On the **Request form** there is 5 different fields which will be used to make a request for an inspection:

- **Company** - Which company we need the inspection to be completed in.
- **Location** - What location of that company we need to go to.
- **Engineer** - Assign an engineer to complete the inspection.
- **Safety Manager** - Assign a safety manager which will receive a completed **Inspection form**. 
- **Status** - Field representing the status of the process. For example the status can be **Open** or **Completed**.

#### Creating Fields

##### ***Company*** - List input.

<br>

<img src="/videos/gifs/examples/inspection/company-field.gif"/>

<br>

<br>

<br>

1. Click on **Controls** in the left-hand pane.

2. In the controls, click on the **Input** tab.

3. Finally to add a field, click on **List**. 

4. A field edit box will appear in which we change the **Title** to ***"Company"***. 

5. The **Name** field is changed automatically but you may change it into any unique identifier.

6. Select the **Data source** within the **List source** radio list.

7. Click on the **datasource** ![Datasource button](/images/datasource-button-blue.jpg) button. This will open a data source selector box. To learn more about adding a SharePoint data connector, follow this link. [Connecting to sharepoint](/docs/platform/connectors/sharepoint/)

8. Click on your SharePoint connector and select **Companies**. Press **OK** ![Ok button](/images/ok-16402622244922.png) on the Datasource popup.

   ***SharePoint Companies List***

   ![SharePoint companies list](/images/examples-sharepoint-companies.jpg)

9. From the dropdown on the **Display, Value** and **Sort by** fields select **Title**.

10. Leave all of the other options as default. Press **OK **![Ok button](/images/ok-16402622244922.png)

<br>

#####   ***Location*** - List input.

The location field is a cascading dropdown selection which corresponds to the **Company** field (see above). The goal is to display only the **locations** of the selected **company**. Take a look how we achieve this in the below steps.

<br>

<img src="/videos/gifs/examples/inspection/location-field.gif"/>

<br>

<br>

<br>

1. Click on **Controls** in the left-hand pane.

2. In the controls, click on the **Input** tab.

3. Finally to add a field, click on **List**. 

4. A field edit box will appear in which we change the **Title** to ***"Location"***. 

5. The **Name** field is changed automatically but you may change it into any unique identifier.

6. Select the **Data source** within the **List source** radio list.

7. Click on the **datasource** ![Datasource button](/images/datasource-button-blue.jpg) button. This will open a data source selector box.

8. Click on your SharePoint connector and select **Location**. Click **OK** ![Ok button](/images/ok-16402622244922.png) on the Datasource popup.

   ***SharePoint Locations List***

   ![SharePoint companies list](/images/examples-sharepoint-locations.jpg)

9. From the dropdown on the **Display, Value** and **Sort by** fields select **Locations**.

10. To create the cascading selection we add a condition. Click on **Edit conditions** ![Edit conditions button](/images/editconditions.png)

11. Select **Company** in the first drop down.

12. Select **Equals** in the second dropdown.

13. Select **Company** in the third dropdown.

    ![Edit conditions](/images/examples-edit-conditions.jpg)

14. Click on **OK** ![Ok button](/images/ok-16402622244922.png)on **Edit conditions** popup.

15. Leave all of the other options as default. Press **OK** ![Ok button](/images/ok-16402622244922.png)



##### ***Engineer*** - User picker input.

<br>

<img src="/videos/gifs/examples/inspection/engineer-field.gif"/>

<br>

<br>

<br>

1. Click on **Controls** in the left-hand pane.
2. In the controls menu, click on the **Input** tab.
3. Finally to add the field, click on **User picker**. 
4. In the **Edit field** box change the **Title** to ***"Engineer"***.
5. Change the **Name (unique)** to a unique identifier.
6. Click on **OK** ![Ok button](/images/ok-16402622244922.png)to save.

##### ***Safety Manager*** - User picker field.

This field is a **User picker** field just like the above **Engineer**. We will go through how to clone a field and add it into our form.

<br>

<img src="/videos/gifs/examples/inspection/safety-manager-field.gif"/>

<br>

<br>

<br>

1. Select the **Engineer**  field so that the blue pen icon ![Pen icon](/images/penicon.png) appears. This means you are now in edit mode of the field.
2. Go to the **Right-hand** pane and click on **Clone** ![Ok button](/images/clone.png)
3. A **Duplicate or move field** box appears. Click on the dropdown list and select **Request form**.
4. Leave **Move field instead** checkbox unchecked and click **OK** ![Ok button](/images/ok-16402622244922.png) 
5. Select the **Engineer copy** field so that the blue pen icon![Pen icon](/images/penicon.png)appears 
6. Click the blue pen icon![Pen icon](/images/penicon.png)to edit the properties.
7. Change the title to **Safety Manager**.
8. Change **Name (unique)** to a unique identifier.
9. Click **OK** ![Ok button](/images/ok-16402622244922.png)to save changes.

##### ***Status*** - text box.

We will make the status field invisible so we can track the inspection progress but not show it to the user. The **Status** field will be used in the dashboard at a later stage in this example.

<br> <img src="/videos/gifs/examples/inspection/status-field.gif"/>

<br>

1. In the **Left-hand** pane click on **Controls**.
2. Click on the **Input** tab.
3. To add the field, click on **Text box**.
4. Select the field and click on the blue pen icon![Pen icon](/images/penicon.png)
5. Change the **Title** to ***"Status"***.
6. Change **Name (unique)** to a unique identifier.
7. Click on **OK**![Ok button](/images/ok-16402622244922.png)to save the field.
8. Select the **Status** field.
9. In the **Right-hand** pane, under **Field properties** click on the **Visible** checkbox to uncheck it.

### Inspection Form

{{% pageinfo color="primary" %}}
Section under construction.
{{% /pageinfo %}}



## Dashboard

{{% pageinfo color="primary" %}}
Section under construction.
{{% /pageinfo %}}





