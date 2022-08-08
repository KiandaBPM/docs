---
title: "Lookup value from table"
typora-root-url: ..\..\..\..\..\static
weight: 8
---

## Introduction

The **Lookup value from table** rule allows you look for a column field within a row that contains a value specified in a lookup condition. When the lookup condition is met, you can extract any column value from that row and set a different field  from within your process with that value.

## When to use

You can use this rule when you want to extract values from the first row when a condition is met.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work you need to have one or more tables in your process. This will allow you to select a table that you wanttarget when looking up values. To learn how to add a table to your process go to [Table control](/docs/platform/controls/input/table/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Lookup value from table**.

3. In the **Edit rule - Lookup value from table** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Lookup value from table](/images/lookup-table-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Table to lookup value from** - select the table you wish target when looking up values from. This table needs to be pre-created before adding this rule. If no table is selected in this field, an error message will show. When the **Table to lookup value from** is assigned, two more options are presented:

   - **Table lookup conditions** - allows you to add a condition that works like a filter. Adding a condition will allow you to target a column of a row and check if it has a specific value. For example checking if a currency column is equals to Euro, the condition will look as follows:

     ![Copy row mapping](/images/lookup-table-condition.jpg)

     **Box 1** represents the column from a row which you are looking up.

     **Box 2** represents the value you are making the check against.

   - **Lookup mapping** - allows you to extract a value from the row that met the lookup condition.

     - Column to extract - select the specific column from the row to extract the value.
     - **Field to store extracted value** - select a pre-created field to store the value from the selected column in the **Column to extract** section.
     - **Add mapping** - you can choose to extract multiple values from a row by clicking on **Add mapping** button. You can also remove fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png).

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
