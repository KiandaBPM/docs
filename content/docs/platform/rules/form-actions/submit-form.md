---
title: "Submit form"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

The **Submit form** rule marks the current form as complete and makes it read-only. By default on submit, the next form is activated. 	

 This rule is automatically attached to **Submit** button which is added to all forms by default. 

### When to use

This action is used to submit a form that you are working on, that is the 'current' form. 	

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)



### How to use

As mentioned above, the Submit form rule is applied to each form automatically therefore, to showcase the **Submit form** rule in action, we will take a look how forms are presented for users after the submission.

To implement the rule:

1. Select a field to attach the rule to so that the edit or pen icon ![Pen icon](/images/penicon.png) appears. 

   ![Field selection](/images/examples-submit-form-select.jpg)

2. Click on **Add a rule** in the left-hand pane to expand the Rules menu.

3. Select **Form actions** to view the range of Input controls.

4. Click on **Submit form**. 

   ![Validate input selection](/images/add-rule-menu-submit-form.jpg)

5. In the **Edit rule - Submit form** dialog box, give the rule a **Title**.

6. Under Action, **Set process status** choose from **Auto (Current form title)** or **Manual**. If you choose **Manual** then type in the desired text to appear to users in the **Status text after submit** field.

7. You can set conditions for the action to happen, see [Conditions](https://docs.kianda.com/docs/platform/rules/general/add-conditions/) for more information.

The image below shows how a form is displayed to users after it has been submitted.

![Submit form read only](/images/examples-submit-form-read-only.jpg)

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

![Disable a rule](/images/disable-rule.jpg)

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg)beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### What's next ![Idea icon](/images/18.png) 

To find our more about other form action rules go to [Form Action rules](/docs/platform/rules/form-actions/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
