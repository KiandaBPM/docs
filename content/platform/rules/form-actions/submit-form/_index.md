---
title: "Submit form"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

The **Submit form** rule marks the current form as complete and makes it read-only. By default upon submit of a form, the next form in the process is activated. 	

 This rule is automatically attached to **Submit** button which is added to all forms by default. 

### When to use

This action is used to submit a form that you are working on, that is the 'current' form. 	

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)



## How to get started

To implement the rule:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Form actions** > **Field display mode**.
3. In the **Edit rule - Field display mode** dialog box, give the rule a title in the **Title** field.
4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/platform/rules/general/add-conditions/) for more details.
5. Under Action, **Set process status** choose from **Auto (Current form title)** or **Manual**. If you choose **Manual** then type in the desired text to appear to users in the **Status text after submit** field.

Each process contains an internal status value, this is automatically set to the name of the active form. For example there are two forms in a Incident process, a **Incident form**, a **Review form** and the **Auto (Current form title)** is selected in the **Set process status** option. When the **Incident form** is completed and submitted, the internal status will be set to the next active form, in this case the **Review form**. When all forms are completed and submitted, the internal status is set to **completed**. The image below shows how the internal status of the process can be reflected in a dashboard to keep track of the current stage of a process. 

![Submit form read only](/images/examples-submit-form-status.jpg)

We can also set our own value for the internal status by changing the **Set process status** option to **Manual**. This will open a textbox field in which you can enter in a custom status after a form is submitted. For example, after submitting the first form, we will set the status to open: 

![Submit form read only](/images/submit-rule.jpg)

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

   

### User tip ![Target icon](/images/05.png) ###

- You can display the internal status of a process in a list widget on your dashboard. This can help you keep track of the current state the process instance is. For example when the process is complete or which form in the process is currently active.

### What's next ![Idea icon](/images/18.png) 

To find our more about other form action rules go to [Form Action rules](/platform/rules/form-actions/).

To find out more about other rules go to [Rules](/platform/rules/).
