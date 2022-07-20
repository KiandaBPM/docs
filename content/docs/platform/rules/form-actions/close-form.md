---
title: "Close form"
weight: 5
typora-root-url: ..\..\..\..\..\static
---



The **Close form** rule closes the form to allow users to navigate to another resource. This rule is automatically attached to **Close**, **Submit** and **Save** buttons which are added to forms by default. 



## When to use

Together with the **Submit**, and **Save** rules, the **Close form** rule forms the shutdown procedures for forms and should not be deleted from **Submit**, **Save** or **Close** buttons.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## How to get started

By default all forms come with a Close button, and therefore a **Close form** rule however, you can set a close rule yourself, and redirect the user anywhere. To do so:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](http://localhost:1313/images/penicon.png).

2. Click on **Add a rule** > **Form actions** > **Close form**. 

3. In the **Edit rule - Close form** dialog box, give the rule a **Title**. 

4. In the **On form close navigate to** option, you can select from four different actions.

   - **Auto** - This option will redirect the user to the last location they were before opening the form.
   - **Return to a dashboard** - This option will redirect the user to a dashboard of choice. To navigate to a specific dashboard, in the **Please choose a dashboard** option select the desired dashboard. 
   - **Return to URL** - This option will redirect the user to any URL specified in the **Please choose a field or type the URL** text box.
   - **Go to process** - This option will redirect you to a process specified in the **Please indicate the process or instance ID** text box.

   #### How the Go to process option works

   With this option selected, you can now enter an ID of a process you want the user to be navigated to. There is also a **Is new instance?** radio list available with a **Yes** or **No** options. If you choose: 

   - **Yes** - In the  **Please indicate the process or instance ID** text box, you **MUST** specify a process ID which is the **ID (Unique)** of a process.

     ![Edit process - ID field](/images/edit-process-id.jpg)

   - **No** - In the **Please indicate the process or instance ID** text box, you **MUST** specify an instance ID of a process. The instance ID is a unique identifier for a process instance. For example an **Incident** process may have more than one instances and each of those instances contains a unique ID as shown in the image below.

     ![Edit process - ID field](/images/rule-close-instance-id.jpg)

   Query string parameters are used to populate form or fields when a given form is loaded. To learn more about query parameters go to [Query parameters](/docs/platform/pages/link/#heading).
   
   

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

![Disable a rule](/images/disable-rule.jpg)

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg)beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png) ###

Note,  You cannot use Close form and Go to form in the same button.

Note, it is not necessary to add a condition to the rule.  In this case the rule will be triggered automatically:  

- if the rule is applied to a *field*, then the rule will be triggered when the user enters a value in that field.  
- if the rule is applied to a *button*, then the rule will be triggered when the user clicks the button.
- if the rule is applied to a *form*, then the rule will be triggered when the form is submitted.
- if the rule is applied to a *process*, then the rule will be triggered on load, that is when the process is initiated.

### What's next ![Idea icon](/images/18.png) 

To find our more about other form action rules go to [Form Action rules](/docs/platform/rules/form-actions/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
