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

2. **Add new process** window will open with the following fields to fill out:
   - **Title** - represents the name of your process which is also the display name for other users.
   - **ID (unique)** - A unique ID which is used to identify your process. 
   - **Description** - Piece of text to describe your new process.
   - **Group** - A group which you want your new process to belong to.
     - If a group already exist, it will simply add your new process to that group. If the group does not exist, it will make a folder for you and automatically add the process to that group.
   - **Administrators** - In this field you can choose to add **Users** and **Groups** to be administrators of the new process. This field determines who can edit and make changes to your process.

   ![Add new process window](/images/examples-new-process.jpg)

3. After you fill out the information needed, press **OK**. You will be automatically brought into a **blank** process creation page, which looks as follow:

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

3. An **Edit form** box will appear on your screen. There are 8 different fields we need to fill in.

   - **Title** - Name to represent this form. In our case we will call it **Request Form**.
   - **Name (unique)** - A unique identifier for our form. You can give this any name you would like as long as it's unique.
   - **Default owner(s)** - This field identifies which users can fill out our form when it's complete. In our case we will choose from **Groups** and choose our **Management Team**.
   - **Activate with** - We can avoid this field. We will cover this in later use cases. 
   - **Submit mode** - From the two radio button options, we will choose **Only this form**. 
   - **Form icon** - Dropdown field to select an icon for the form. We will leave this field blank.
   - **Form theme** -  This option is used to change the colour of our form tile. We will change it to **Green**.
   - **Enable quick actions** - A check box which allows us to enable or disable different actions to our form. We will keep it simple and leave this box unchecked. 

   ![Edit form box](/images/examples-request-form-edit-box.jpg)

4. Now that we edited our **Request form** to our needs, we can press **OK** which will bring us back to the process creation page.

#### Form Layout

For our **Request form** we will need a couple of fields which will be used to make a request for an inspection:

- **Company** - Which company we need the inspection to be completed in.
- **Location** - What location of that company we need to go to.
- **Engineer** - Assign an engineer to complete the inspection.
- **Safety Manager** - Assign a safety manager which will receive a completed **Inspection form**. 
- **Status** - Field representing the status of the process. For example the status can be **Open** or **Completed**.

#### Creating Fields

- **Company**

   <img src="/videos/gifs/examples/inspection/company-field.gif"/>

  



### Inspection Form

{{% pageinfo color="primary" %}}
Section under construction.
{{% /pageinfo %}}



## Dashboard

{{% pageinfo color="primary" %}}
Section under construction.
{{% /pageinfo %}}





