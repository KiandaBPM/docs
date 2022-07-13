---
title: "Request Form"
weight: 1
typora-root-url: ..\..\..\..\static
---

## Creating the Request Form

### Configuring Form Settings

1. From the process creation page, click on **form 1** to select the form. This can be found at the top of your screen. 

   ![Form selection](/images/examples-form-select.jpg) 

2. Click on the edit or pen icon ![Pen icon](/images/penicon.png) on the selected form to edit it.

3. An **Edit form** dialog box appears on your screen. There are 8 different fields to fill in.

   - **Title** - Name to represent this form. In our case we will call it **Request Form**.
   - **Name (unique)** - A unique identifier for our form. You can give this any name you would like as long as it's unique.
   - **Default owner(s)** - This field identifies which users can fill out our form when it's complete. In our case we will choose from **Groups** and choose our **Management Team**. To learn more about how to create groups in Kianda go to [creating groups](/docs/platform/administration/users/#creating-new-groups).
   - **Activate with** - Means that the form can be activated with other forms within the process, so they can be edited at the same time. This means several forms become the **current form** in a form group. In our case we will leave this blank.
   - **Submit mode** - This option means that when a process instance is running you can choose **only this form** to be submitted, or you can choose **all forms in edit mode** meaning that several forms could have their details submitted or saved. Choose **Only this form** radio list. 
   - **Form icon** - Dropdown field to select an icon for the form.
   - **Form theme** - This option is used to change the colour of the form tile, for example **Green**.
   - **Enable quick actions** -  if you tick the checkbox, you can select from the options a) Enable re-assign b) Enable edit and c) Enable custom action. We will leave this box unchecked. 

   ![Edit form box](/images/examples-request-form-edit-box.jpg)

4. Click on the **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.

5. To save your changes to the form, click on the **Save** button ![Save button](/images/saveprocess.png) 

<img src="/videos/gifs/common/save-process.gif"/>

### Creating Form Fields

On the **Request form** there is 5 different fields which will be used to make a request for an inspection:

- **Company** - Which company we need the inspection to be completed in.
- **Location** - What location of that company we need to go to.
- **Engineer** - Assign an engineer to complete the inspection.
- **Safety Manager** - Assign a safety manager which will receive a completed **Inspection form**. 
- **Status** - Field representing the status of the process. For example the status can be **Requested** or **Completed**.

#### Creating a List field- Company

The **Company** field represents the company we want our inspection to take place at. It is a **List** input which is populated from our **SharePoint** datasource. To learn more about **List input**, go to [List Control](/docs/platform/controls/input/list/).

<br>

<img src="/videos/gifs/examples/inspection/company-field.gif"/>

<br>

<br>

<br>

1. Click on **Controls** in the left-hand pane to expand the Controls menu.

2. Select **Input** to view the range of Input controls.

3. Click on **List**.

4.  A **New field - List** dialog box will open with a range of options you can choose from for your new List field. 

5. Change the **Title** to **"Company"**. 

6. Change the **Name (unique)** to a unique identifier.

7. Select the **Data source** within the **List source** radio list.

8. Click on the **Datasource** ![Datasource button](/images/datasource-button-blue.jpg) button. This will open a data source selector dialog box. To learn more about adding a SharePoint data connector, go to [Connecting to SharePoint](/docs/platform/connectors/sharepoint/).

9. Click on your SharePoint connector and select **Companies**(the companies data should be pre-created in your SharePoint, see the image below for an example). Click on **OK** on the Datasource dialog box.

   ***SharePoint Companies List***

   ![SharePoint companies list](/images/examples-sharepoint-companies.jpg)

10. From the dropdown on the **Display, Value** and **Sort by** fields select **Title**.

11. Leave all of the other options as default. Click on **OK **in the **Edit** **field** dialog box.

<br>

####   Creating a List field- Location 

The **Location** field represents the location of our inspection. This field is a cascading dropdown selection which corresponds to the **Company** field (see above). The goal is to display only the **locations** of the selected **company**. We will add a condition to this field, you can see how that's done below. To learn more about cascading dropdown lists go to [Cascading dropdown lists](/docs/how-to/create-cascading-dropdown-lists/).

<br>

<img src="/videos/gifs/examples/inspection/location-field.gif"/>

<br>

<br>

<br>

1. Click on **Controls** in the left-hand pane to expand the Controls menu.

2. Select **Input** to view the range of Input controls.

3. Click on **List**.

4. A field edit box will appear in which we change the **Title** to **"Location"**. 

5. Change the **Name (unique)** to a unique identifier.

6. Select the **Data source** within the **List source** radio list.

7. Click on the **datasource** ![Datasource button](/images/datasource-button-blue.jpg) button. This will open a data source selector box.

8. Click on your SharePoint connector and select **Location**(the location data should be pre-created in your SharePoint, see the image below for an example). Click **OK** on the Datasource dialog box.

   ***SharePoint Locations List***

   ![SharePoint companies list](/images/examples-sharepoint-locations.jpg)

9. From the dropdown on the **Display, Value** and **Sort by** fields select **Locations**.

10. To create the cascading selection we add a condition. Click on **Edit conditions** ![Edit conditions button](/images/editconditions.png)

11. In the **Edit condition** dialog box, select **Company** in the first dropdown.

12. Select **Equals** in the second dropdown.

13. Select **Company** in the third dropdown.

    ![Edit conditions](/images/examples-edit-conditions.jpg)

14. Click on **OK** on **Edit conditions** dialog box.

15. Leave all of the other options as default. Click on **OK** in the **Edit field** dialog box.



#### Creating a User Picker field - Engineer

The **Engineer** field represents the engineer we want to complete the inspection. This field is a **User picker** field in which we can pick any of our Kianda users.

<br>

<img src="/videos/gifs/examples/inspection/engineer-field.gif"/>

<br>

<br>

<br>

1. Click on **Controls** in the left-hand pane to expand the Controls menu.
2. Select **Input** to view the range of Input controls.
3. Click on **User picker**. 
4. In the **Edit field** box change the **Title** to **"Engineer"**.
5. Change the **Name (unique)** to a unique identifier.
6. Click on **OK** ![Ok button](/images/ok-16402622244922.png)to save.

#### Cloning a User Picker field - Safety Manager

The **Safety Manager** field represents the manager which requests the inspection. This is a **User picker** field just like the above **Engineer**. We will go through how to clone a field and add it into our form.

<br>

<img src="/videos/gifs/examples/inspection/safety-manager-field.gif"/>

<br>

<br>

<br>

1. Select the **Engineer** field so that the edit or pen icon ![Pen icon](/images/penicon.png) appears. This means you are now in edit mode of the field.
2. Go to the **Right-hand** pane and click on **Clone** ![Ok button](/images/clone.png)
3. A **Duplicate or move field** dialog box appears. Click on the dropdown list and select **Request form**.
4. Leave **Move field instead** checkbox unchecked and click **OK**. 
5. Select the **Engineer copy** field so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.
6. Click the edit or pen icon![Pen icon](/images/penicon.png)to edit the properties.
7. Change the **Title** to **Safety Manager**.
8. Change **Name (unique)** to a unique identifier.
9. Click **OK** to save changes.

#### Status field - text box

The **Status** field represents the current status of the whole process. We will make the status field invisible so we can track the inspection progress but not show it to the user. The **Status** field will be used in the dashboard at a later stage in this example.

<br> <img src="/videos/gifs/examples/inspection/status-field.gif"/>

<br>

1. Click on **Controls** in the left-hand pane to expand the Controls menu.
2. Select **Input** to view the range of Input controls.
3. Click on **Text box**. 
4. Select the **Text box 1** field so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.
5. Change the **Title** to **"Status"**.
6. Change **Name (unique)** to a unique identifier.
7. Click on **OK **to save the field.
8. Select the **Status** field so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.
9. In the **Right-hand** pane, under **Field properties** click on the **Visible** checkbox to uncheck it. To learn more about field properties, go to [Field properites](/docs/getting-started/create-first-process/design-and-build/add-controls-and-rules/properties/#field-properties).

## Adding rules to Submit button

To take a look back at our [requirements](/docs/examples/inspection/#planning-form-requirements) for our **Request form**, we need 2 rules for the **Submit** button.

- **Set status to Requested** - Sets the status field that we created to **"Requested"**.
- **Send email to Engineer** - Sends an email to the selected engineer from the **Engineer field**.



#### Creating a Set form field rule - Set status to Requested 

With this rule we will be setting our **Status** field to **"Requested"**. We will be using the **Set form field** rule from the **Data** set of rules.

<br>

<img src="/videos/gifs/examples/inspection/status-rule.gif"/>

<br>

<br>

1. Select the **Submit** button by clicking on it so that the edit or pen icon ![Pen icon](/images/penicon.png) appears. 

2. In the **Left-hand** pane click on **Add a rule**.

3. Click on **Data**.

4. Select **Set form field**.

5. In the **Edit rule** dialog box, change the **Title** to "**Set status to Requested**"

6. Click on **Form field to set** dropdown.

7. Under the **Request Form** select **Status** field.

8. In the **Value or expression** box, type **Requested**. ![Set form field dialog box](/images/examples-set-form-field.jpg)

9. Click on **OK** button to save rule.

10. With the **Submit** button selected, in the **Right-hand** pane click on the **Rules**.

11. The **Set status to Requested** is under the **Close** rule. Drag and drop the **Set status to Requested**  rule to the top of the list.

    <br>

#### Creating a Send email rule - Send email to Engineer

This rule will be used to send an email to the selected **Engineer**. We will be using the **Send email**  rule from the **Communications** set of rules. In this rule we will add expressions, to learn more go to [Expressions](/docs/getting-started/create-first-process/plan-your-process/expressions/).

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

    ```
    Hi, 
    
    You are requested to visit ...... to complete an inspection for ......
    
    Please ...... to view the Inspection Form.
    
    Regards,
    
    The Safety Team
    ```

11. Adding **Expressions**:

    <img src="/videos/gifs/examples/inspection/expressions.gif"/>

    <br>

    <br>

    - **Location** 

      - To add an **Location** click your cursor where you want to add it. In our case it is in the blank space between the words "visit" and "to".
      - Click on the 3 dots button ![3 dots](/images/expression-dots.jpg) on the the **right-hand** side of the **Body** box.
      - Click on the **Add field to expression** and select **Location** from the dropdown list.
      - Click on **Add to expression** ![Add to expression](/images/addtoexpression.png) The expression is added into the **Expression** window. Note that the expression is the unique identifier for that field.
      - Click on **OK** on the **Expression builder** dialog box.

    - **Company**

      - To add the **Company** expression, start off by clearing **Add field to expression** field and follow the steps above.

        ![Delete expression](/images/delete-expression.jpg)

    - **ProcessLink()** - Links you to the open form of this process.

      - To add the **ProcessLink()** expression, click on the 3 dots button ![3 dots](/images/expression-dots.jpg) on the the **right-hand** side of the **Body** box.

      - Click on the **Reference** ![Reference button](/images/reference.png) button.

      - From the **Expression reference** copy **ProcessLink()**

        ![Copying ProcessLink](/images/examples-process-link.jpg)

      - Click on **Close** on the **Express builder** dialog box to exit.

      - Paste in the **ProcessLink()** in between "Please" and "to" on the second line of the email.

      - In the parentheses of the **ProcessLink()** open up quotation marks and in between, type **click here**. 

         <br>

12. Click on **OK** in the **Edit rule** dialog box.

13. With the **Submit** button selected, in the **Right-hand** pane click on the **Rules**.

14. **Send email to Engineer** is located under the **Close** rule. Drag and drop the **Send email to Engineer**  rule in between **Submit process** and **Set status to Requested**.

    ![Right-hand pane Rule menu](/images/examples-rules-tab.jpg)

15. To save your changes to the form, click on the **Save** button ![Save button](/images/saveprocess.png) 

<br>

## Request Form Summary 

To summarise our **Request From**, we created all fields, buttons and rules that we stated in our [requirements](/docs/examples/inspection/#planning-form-requirements). Our Safety Managers can fill out our **Request Form** which automatically sends an email to an engineer stating what **Location** to visit and at what **Company**. We are also updating our **Status** field to keep track of the process.

### What's next ![Idea icon](/images/18.png) 

To follow a step by step guide on creating our **Inspection From**, go to [Creating Inspection Form](/docs/examples/inspection/inspect-form/).



