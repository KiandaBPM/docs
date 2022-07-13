---
title: "Inspection Form"
weight: 2
typora-root-url: ..\..\..\..\static 
---

<!-- The **Inspection Form** for this process will be used by an engineer from our **Request Form**. The engineer will have the ability to access and edit the form. When the engineer submits the **Inspection Form**, we will generate a word document, convert it to a PDF file and send it to our **Safety Manager** from our **Request Form**. For this we will use **Generate a word document** rule along with **Convert to PDF** rule. We will also then use **Send email** rule to send.  -->

## Creating the Inspection Form

To begin this example of creating an **Inspection Form**, we need to add a new form to our process.

1. From the process creation page, click on **Add form**. This can be found at the top of your screen. 

   ![](/images/examples-add-form.jpg)

   - **Title** - Name to represent this form. In our case we will call it **Inspection Form**.

   - **Name (unique)** - A unique identifier for our form. You can give this any name you would like as long as it’s unique.

   - **Default owner(s)** - This field identifies which users can fill out our form when it’s complete. In our case we will choose from **Groups** and choose our **Management Team**. To learn more about how to create groups in Kianda go to [creating groups](http://localhost:1313/docs/platform/administration/users/#creating-new-groups).

   - **Activate with** - Means that the form can be activated with other forms within the process, so they can be edited at the same time. This means several forms become the **current form** in a form group. In our case we will leave this blank.

   - **Submit mode** - This option means that when a process instance is running you can choose **only this form** to be submitted, or you can choose **all forms in edit mode** meaning that several forms could have their details submitted or saved. Choose **Only this form** radio list.

   - **Form icon** - Dropdown field to select an icon for the form.

   - **Form theme** - This option is used to change the colour of the form tile, for example **Green**.

   - **Enable quick actions** - if you tick the checkbox, you can select from the options a) Enable re-assign b) Enable edit and c) Enable custom action. We will leave this box unchecked.

     ![Edit form box](/images/examples-inspection-form-edit-box.jpg)


















 













