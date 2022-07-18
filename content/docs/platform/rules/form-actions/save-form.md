---
title: "Save form"
weight: 4
---

The **Save form** rule saves changes made in a form. This is particularly useful if a user needs to complete a long form, or is offsite, so that initial changes to the form are saved and then all changes can be submitted later on. The rule commits a record in the server. 

 This rule is automatically attached to **Submit** and **Save** buttons which are added to forms by default. 

### When to use

Use this rule to ensure the state of the application is stored with data.	

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



### How to use

To implement the rule:

1. Select a field to attach the rule to.

2. Click on **Add a rule** > **Form actions** > **Save form**. 

3. In the **Edit rule - Save form** dialog box, give the rule a **Title**. 

4. Under Action, check the box for **Perform background save** if you want to allow background upload of forms or chunked upload of forms. 

   For example if you are offsite or don't have a good internet connection and need to upload files to forms, then it is useful to allow 'chunked' and 'background upload' so that the file can be transmitted in resumable chunks. See [File upload control](/docs/platform/controls/input/file-upload/)  for more information on file upload.  

5. Under Action, you can also check the box for **Perform partial save** to allow partial save of a form. 

6. You can also create a notification to display to users when a save has been successful by typing a message in the **Save notification** field. 

7. You can create conditions for the actions to happen, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information.



