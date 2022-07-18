---
title: "Show, hide or disable"
weight: 1
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

Use the **Hide or Disable** rule to hide, disable, show or enable a field or a component in a Kianda form. This rule is very useful if you want different parts of a form, a complete form or multiple forms, to appear or hide based on how the user of the form completes the form.  

There are seven possible actions within this rule that can be applied to fields or forms:

- **Hide** from the user (not visible)
- **Show** to the user (visible)
- **Disable** for the user (not enabled)
- **Enable** for the user (enabled)
- **Toggle visible:** toggle between visible and not visible
- **Toggle enable**: toggle between enabled and not enabled
- **Hide and clear**: hide from the user (not visible) and clear the contents



## When to use

You can add this rule:
- [x] to a field

- [x] to a form 

- [x] to a process (the rule will run on load)

  

## How to get started

To dynamically *hide* a field or component:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button,  **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Workflow** > **Hide or Disable**. 

3. In the **Edit rule - Hide or Disable** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Hide or Disable dialog box](/../content/docs/hide-or-disable.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under **Action** create an action for the rule by clicking on the **empty field** to add a form or form field, and then choose an option from the action drop-down list, choosing from **Hide**, **Show**, **Disable**, **Enable**, **Toggle visible**, **Toggle enable**, or **Hide and clear**, see [Introduction](#introduction) for an explanation of each action.

   ![Hide or disable example - Hide or show](/images/hide-example.jpg)

   For example in the image above, a **Feedback** field will be hidden, using **Hide**, based on a condition, when a field **Management decision** equals **Yes**.

6. To add more actions, click on **Add**. At any time remove an action by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png) beside the name of the action.

7. LIke an 'if..else' statement you can add alternative/elsewise actions, based on different conditions by clicking on **Add otherwise action**.

   ![Hide or show example](/images/hide-or-show-example.jpg)

   In the example above, **Signature** and **Training materials** field will show and a **Feedback** field will hide, while a **Management decision** field has a value of **Yes**, otherwise the shown fields will hide, while the **Feedback** field shows. The result is a dynamic form that will reveal particular fields based on user input for the Management decision field. 

8. To remove the otherwise action(s) click on the **Remove otherwise action** fields.

9. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

10. If the rule is attached to field within a form, a notification will appear within the form design, for example the field **Management decision** as shown in the image below.

    ![Rule on a form field](/images/rule-in-form-example.jpg)

11. When you click on the field or form that has the rule attached, the rule will appear in the right-hand pane under **Rules**. 

    ![Hide or disable rule example](/images/hide-or-show-rule.jpg)

    The next section will cover how to use the buttons visible in the right-hand pane to manipulate the rule.



### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

![Disable a rule](/images/disable-rule.jpg)

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg)beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### User tip ![Target icon](/images/05.png) ###

Note, it is not necessary to add a condition to the rule.  In this case the rule will be triggered automatically:  
- if the rule is applied to a *field*, then the rule will be triggered when the user enters a value in that field.  
- if the rule is applied to a *button*, then the rule will be triggered when the user clicks the button.
- if the rule is applied to a *form*, then the rule will be triggered when the form is submitted.
- if the rule is applied to a *process*, then the rule will be triggered on load, that is when the process is initiated.

If a rule causes a mandatory field to be hidden or disabled, this will not stop the form from being submitted.



### What's next  ![Idea icon](/images/18.png) ###

To find out more about other workflow rules go to [Workflow](/docs/platform/rules/workflow/).

To find out more about other rules go to [Rules](/docs/platform/rules/).





