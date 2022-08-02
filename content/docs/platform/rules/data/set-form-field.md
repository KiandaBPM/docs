---
title: "Set form field rule"
linkTitle: "Set form field"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

## Introduction

Using the **Set form field** rule you have the ability to select a field within your process and assign it a value using manually typed text or an expression. With the **Set form field** rule you can set multiple fields at once by adding more fields to the value mapping within the rule.

This rule is useful when automating processes with previously provided information from other forms. You can apply this rule to a form which will activate the rule when the form is loaded. You can pass query strings and apply the Set form field rule assign values to fields when opening form for the first time. To learn more about query strings go to [Query strings](/docs/platform/pages/link/#heading).

## When to use 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Data** > **Set form field**.

3. In the **Edit rule - Set form field** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Set form field dialog box](/images/set-field-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png), see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. In the **Field value mapping** section, you can select which fields to set and what values to give them. You can do that with the following fields:

   - **Form field to set** - this dropdown list is used to select a field from within your process that you want to set.
   - **Value or expression** - in this field you are able to type in text manually to set the value for a desired field. To make this rule dynamic and use other fields as values, you can use expressions. To learn more about expressions go to [Expression builder](/docs/platform/rules/general/expression-builder/).
   - **Add mapping** - you can choose to set multiple fields in your process by clicking on **Add mapping** button. You can also remove fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png).

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Data rules go to [Data rules](/docs/platform/rules/data/).

To find out more about other rules go to [Rules](/docs/platform/rules/).







