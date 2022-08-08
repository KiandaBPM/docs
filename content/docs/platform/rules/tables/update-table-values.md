---
title: "Update table values"
typora-root-url: ..\..\..\..\..\static
weight: 9
---

## Introduction

The **Update table values** rule loops through a table allowing you to update column values. You can update all values in a selected column or update just the columns that match a condition. 

## When to use

You can use this rule when you want to update a column value in rows that match the condition specified inside the rule.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work you need to have one or more tables in your process. This will allow you to select a table that you want to update values in. To learn how to add a table to your process go to [Table control](/docs/platform/controls/input/table/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Update table values**.

3. In the **Edit rule - Update table values** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Update table values](/images/update-table-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Table to update** - select the table you wish target to update values in. This table needs to be pre-created before adding this rule. If no table is selected in this field, an error message will show. When the **Table to update** is assigned, three more options are presented:

   - **Table lookup conditions** - allows you to add a condition that works like a filter. Adding a condition will allow you to target the specific row that the condition specifies. For example checking if a currency column is equal to Euro, the condition will look as follows:

     ![Copy row mapping](/images/lookup-table-condition.jpg)

     **Box 1** represents the column from a row which you are looking up.

     **Box 2** represents the value you are making the check against.

   - **Table column to update** - allows you to select a column you want to update when a condition in the **Table lookup conditions** option is met. This field will be updated with the value given in **Field or text to update table column with** section.

   - **Field or text to update table column with** - you can select a field within your form or type in text manually to represent the value you want your updated column to contain.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.


### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Table rules go to [Table rules](/docs/platform/rules/tables/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

