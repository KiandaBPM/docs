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

## Request Form

### Form Settings

1. From the process creation page, click on **form 1** to select the form. This can be found at the top of your screen. 

   ![Form selection](/images/examples-form-select.jpg) 

2. Click on the pen icon ![Pen icon](/images/penicon.png) on the selected form to edit it.

3. An **Edit form** box appear on your screen. There are 8 different fields to fill in.

   - **Title** - Name to represent this form. In our case we will call it **Request Form**.
   - **Name (unique)** - A unique identifier for our form. You can give this any name you would like as long as it's unique.
   - **Default owner(s)** - This field identifies which users can fill out our form when it's complete. In our case we will choose from **Groups** and choose our **Management Team** - [How to create groups in Kianda](/docs/platform/administration/users/#creating-new-groups).
   - **Activate with** - We can avoid this field. We will cover this in later use cases. 
   - **Submit mode** - Choose **Only this form** radio list. 
   - **Form icon** - Dropdown field to select an icon for the form.
   - **Form theme** - This option is used to change the colour of the form tile. We will change it to **Green**.
   - **Enable quick actions** - A check box which allows us to enable or disable different actions to our form. Leave this box unchecked. 

   ![Edit form box](/images/examples-request-form-edit-box.jpg)

4. **Request form** settings are now complete. Press **OK** to accept the changes, this will bring you back to the process creation page.

5. Click on the **save** ![Save button](/images/saveprocess.png) button to save any progress of your process. Remember to save your process when you make changes to it.

<img src="/videos/gifs/common/save-process.gif"/>

### Form Layout

On the **Request form** there is 5 different fields which will be used to make a request for an inspection:

- **Company** - Which company we need the inspection to be completed in.
- **Location** - What location of that company we need to go to.
- **Engineer** - Assign an engineer to complete the inspection.
- **Safety Manager** - Assign a safety manager which will receive a completed **Inspection form**. 
- **Status** - Field representing the status of the process. For example the status can be **Requested** or **Completed**.

### Company field

The **Company** field represents the company we want our inspection to take place at. It is a **List** input which is populated from our **SharePoint** datasource. [Learn more about List input](/docs/platform/controls/input/list/).

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

7. Click on the **datasource** ![Datasource button](/images/datasource-button-blue.jpg) button. This will open a data source selector box. To learn more about adding a SharePoint data connector, follow this link [Connecting to sharepoint](/docs/platform/connectors/sharepoint/).

8. Click on your SharePoint connector and select **Companies**. Click on **OK** on the Datasource popup.

   ***SharePoint Companies List***

   ![SharePoint companies list](/images/examples-sharepoint-companies.jpg)

9. From the dropdown on the **Display, Value** and **Sort by** fields select **Title**.

10. Leave all of the other options as default. Click on **OK **in the **Edit** **field** popup.

<br>

###   Location field

The **Location** field represents the location of our inspection. This field is a cascading dropdown selection which corresponds to the **Company** field (see above). The goal is to display only the **locations** of the selected **company**. We will add a condition to this field, you can see how that's done below. [How to create cascading dropdown lists](/docs/how-to/create-cascading-dropdown-lists/).

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

8. Click on your SharePoint connector and select **Location**. Click **OK** on the Datasource popup.

   ***SharePoint Locations List***

   ![SharePoint companies list](/images/examples-sharepoint-locations.jpg)

9. From the dropdown on the **Display, Value** and **Sort by** fields select **Locations**.

10. To create the cascading selection we add a condition. Click on **Edit conditions** ![Edit conditions button](/images/editconditions.png)

11. Select **Company** in the first drop down.

12. Select **Equals** in the second dropdown.

13. Select **Company** in the third dropdown.

    ![Edit conditions](/images/examples-edit-conditions.jpg)

14. Click on **OK** ![Ok button](/images/ok-16402622244922.png)on **Edit conditions** popup.

15. Leave all of the other options as default. Click on **OK** in the **Edit field** popup.



### Engineer field

The **Engineer** field represents the engineer we want to complete the inspection. This field is a **User picker** field in which we can pick any of our Kianda users.

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

### Safety Manager field

The **Safety Manager** field represents the manager which requests the inspection. This is a **User picker** field just like the above **Engineer**. We will go through how to clone a field and add it into our form.

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

### Status field

The **Status** field represents the current status of the whole process. We will make the status field invisible so we can track the inspection progress but not show it to the user. The **Status** field will be used in the dashboard at a later stage in this example.

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

### Submit Button

Here we will add 2 rules to the submit button.

- **Set status to Requested** - Sets the status field that we created to ***"Requested"***.
- **Send email to Engineer** - Sends an email to the selected engineer from the **Engineer field**.

#### Set status to Requested

Here we will be setting our **Status** field to **"Requested"**. We will be using the **Set form field** rule from the **Data** set of rules.

<br>

<img src="/videos/gifs/examples/inspection/status-rule.gif"/>

<br>

<br>

1. Select the **Submit** button by clicking on it. 

2. In the **Left-hand** pane click on the **Add a rule** tab.

3. Click on **Data**.

4. Select **Set form field**.

5. In the **Edit rule** box, change the **Title to** "**Set status to Requested**"

6. Click on **Form field to set** dropdown, in the **Request Form** select **Status** field.

7. In the **Value or expression** box type in ***Requested***.

8. Click on the **OK** button to save rule.

9. With the **Submit** button selected, in the **Right-hand** pane click on the **Rules** tab.

10. The **Set status to Requested** is under the **Close** rule. Drag and drop the **Set status to Requested**  rule to the top of the list.

    <br>

#### Send email to Engineer - Communications rule.

This rule will be used to send an email to the selected **Engineer**. We will be using the **Send email**  rule from the **Communications** set of rules. We will also add **expressions** to our email. [More about expressions](/docs/getting-started/create-first-process/plan-your-process/expressions/).

1. Select the **Submit** button by clicking on it. 

2. In the **Left-hand** pane click on the **Add a rule** tab.

3. Click on **Communications**.

4. Select **Send email**.

5. In the **Edit rule** box, change the **Title to** "**Send email to Engineer**"

6. Click on the person icon ![Person icon](/images/person.png) on the **To:** part of the email.

7. In the **Select email users** box select the **User(s) defined in a user field** radio button.

8. In the **Select a user field** select **Engineer**.

   ![Select email users box](/images/examples-send-email-to.jpg)

9. Change the subject to **New Inspection Request**.

10. Change the body of the email to: 

    <code>Hi, 

    You are requested to visit ...... to complete an inspection for ......

    Please ...... to view the Inspection Form.

    Regards,

    The Safety Team</code>

11. Adding **Expressions**:

    <img src="/videos/gifs/examples/inspection/expressions.gif"/>

    <br>

    <br>

    - **Location** 

      1. To add an **Location** click your cursor where you want to add it. In our case it is in the blank space between the words "visit" and "to".
      2. Click on the 3 dots button ![3 dots](/images/expression-dots.jpg) on the the **right-hand** side of the **Body** box.
      3. Click on the **Add field to expression** and select **Location** from the dropdown list.
      4. Click on **Add to expression** ![Add to expression](/images/addtoexpression.png) button. The expression is added into the **Expression**(unique identifier for that field) window.
      5. Click on **OK** on the **Expression builder** popup.

    - **Company**

      1. To add an **Company** click your cursor where you want to add it. In our case it is in the blank after the word "for".

      2. Click on the 3 dots button ![3 dots](/images/expression-dots.jpg) on the the **right-hand** side of the **Body** box.

      3. Click on the **X** in the **Add field to expression** field.

         ![Delete expression](/images/delete-expression.jpg)

      4. Click on the **Add field to expression** and select **Company** from the dropdown list.

      5. Click on **Add to expression** ![Add to expression](/images/addtoexpression.png) button. The expression is added into the **Expression**(unique identifier for that field) window.

      6. Click on **OK** on the **Expression builder** popup.

    - **ProcessLink()** - Links you to the open form of this process.

      1. To add the **ProcessLink()** expression, click on the 3 dots button ![3 dots](/images/expression-dots.jpg) on the the **right-hand** side of the **Body** box.

      2. Click on the **Reference** ![Reference button](/images/reference.png) button.

      3. From the **Expression reference** copy **ProcessLink()**

      4. Click on **Close** on the **Express builder** popup to exit.

      5. Paste in the **ProcessLink()** in between "Please" and "to" on the second line of the email.

      6. In the parentheses of the **ProcessLink()** open up quotation marks and in between, type **click here**. 

         <br>

12. Click on **OK** in the **Edit rule** popup.

13. With the **Submit** button selected, in the **Right-hand** pane click on the **Rules** tab.

14. **Send email to Engineer** is located under the **Close** rule. Drag and drop the **Send email to Engineer**  rule in between **Submit process** and **Set status to Requested**.

    <br>

## Inspection Form

Here we will create an **Inspection Form** for our process. The form will be used by our engineer, he will fill it out and submit it. We will add a rule to **Generate a word document** and a rule to **Convert to PDF**. The PDF file will be then sent to the **Safety Manager** which we will get from the **Request Form**. First we need to create a new **Inspection Form**.

### Create new form

1. In the process creation page, click on **Add form** 







## Dashboard

{{% pageinfo color="primary" %}}
Section under construction.
{{% /pageinfo %}}





