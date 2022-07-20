---
title: "Save form"
weight: 4
typora-root-url: ..\..\..\..\..\static
---

The **Save form** rule saves changes made in a form. This is particularly useful if a user needs to complete a long form, or is offsite, so that initial changes to the form are saved and then all changes can be submitted later on. The rule commits a record in the server. 

 This rule is automatically attached to **Submit** and **Save** buttons which are added to forms by default. 

## When to use

Use this rule to ensure the state of the application is stored with data.	

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## How to get started

To implement the rule:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](http://localhost:1313/images/penicon.png).

2. Click on **Add a rule** > **Form actions** > **Save form**. 

3. In the **Edit rule - Save form** dialog box, give the rule a **Title**. 

4. Under Action, check the box for **Perform background save** if you want to perform background save of forms. This option **MUST** be **enabled** to allow background upload and chunked upload to be possible in the **File upload control**.

   *Edit rule - Save form dialog box*

   ![File upload - Upload rules](/images/rule-save-process-background-save.jpg)

   For example if you are offsite or don't have a good internet connection and need to upload files to forms, then it is useful to allow 'chunked' and 'background upload' so that the file can be transmitted in resumable chunks. See [File upload control](/docs/platform/controls/input/file-upload/) for more information on file upload. 

   *File upload - background and chunked upload options*

   ![File upload - Upload rules](/images/file-upload-upload-option.jpg)

5. Under Action, you can also check the box for **Perform partial save** to allow partial save of a form. 

   For example if this option is selected, it will allow you to save a form in small amounts so information is not lost when internet connection is lost.

6. You can also create a notification to display to users when a save has been successful by typing a message in the **Save notification** field. 

7. You can create conditions for the actions to happen, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

![Disable a rule](/images/disable-rule.jpg)

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg)beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- You can add a condition to the **Save form** rule to make sure that users fill out certain pieces of information in your form before they can actually save it.

### What's next ![Idea icon](/images/18.png) 

To find our more about other form action rules go to [Form Action rules](/docs/platform/rules/form-actions/).

To find out more about other rules go to [Rules](/docs/platform/rules/).



