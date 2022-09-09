---
title: "Make required"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

The **Make required** rule is used to **dynamically** make form elements required or mandatory for users to fill in, or not required or to toggle between both states.

It is possible to make fields **statically** mandatory for users to fill in by checking the **Required** property for the field. However using this rule gives a greater degree of flexibility to cause an action based on user input using a [**Condition**](/docs/platform/rules/general/add-conditions/).

Take the example of a feedback form, where there is an option for a customer to fill in their name or not. If they do fill in their name however, then a Customer Account Number field becomes mandatory. 

![Make required rule example](/images/make-required-example.jpg)

As soon as Maddie fills out her name in the example above, then and only then the Customer Account Number becomes required, indicated by an asterix. This rule could be combined with [Hide or Disable](/docs/platform/rules/workflow/hide-or-disable/) rule to make fields appear/hidden based on user input.



## When to use

You can add this rule:

- [x] to a field

The rule can be added at other levels, but it is most commonly used in the method outlined in the [Introduction](#introduction).



## How to get started

To dynamically make a field required:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button,  **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Workflow** > **Make required**. 

3. In the **Edit rule - Make required** dialog box, give the rule a title in the **Title** field.

   ![Make required rule example](/images/make-required-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under **Action** create one or more actions for the rule by clicking on the **empty field** to add a form or form field, and then choose an option from the action drop-down list, choosing from **Required**, **Not required** or **Toggle required**. 

6. To add more actions, click on **Add**. At any time remove an action by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png) beside the name of the action.

7. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

8. If the rule is attached to a field within a form, a notification will appear within the form design, for example the field **Management decision** as shown in the image below.

   ![Rule on a form field](/images/rule-in-form-example.jpg)

9. When you click on the field or form that has the rule attached, the rule will appear in the right-hand pane under **Rules**. 

   The next section will cover how to use the buttons visible in the right-hand pane to manipulate the rule.



### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### What's next  ![Idea icon](/images/18.png) ###

To find out more about other workflow rules go to [Workflow](/docs/platform/rules/workflow/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

