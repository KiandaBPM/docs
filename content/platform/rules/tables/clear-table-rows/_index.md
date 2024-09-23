---
title: "Clear table rows"
typora-root-url: ..\..\..\..\..\static
weight: 7
---

## Introduction

The **Clear table rows** rule allows you clear/delete all or some rows from a specified table in your process. This rule acts similar to **Remove table row** except with the **Clear table rows**, you can delete multiple rows and filter out which rows to delete by adding conditions. To learn more about **Remove table row** go to [Remove table row](/platform/rules/tables/remove-table-row/).

## When to use

You can use this rule when you want clear all rows from a table or by adding criteria to delete rows, you can filter out which rows to clear from the table.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work you need to have one or more tables in your process. This will allow you to select a table that you want to clear rows in. To learn how to add a table to your process go to [Table control](/platform/controls/input/table/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Clear table rows**.

3. In the **Edit rule - Clear table rows** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Clear table rows](/images/clear-rows-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Table to clear rows from** - select the table you wish target when clearing rows from. This table needs to be pre-created before adding this rule. If no table is selected in this field, an error message will show. When the **Table to clear rows from** is assigned, the **Criteria to delete rows** is presented.

   - **Criteria to delete rows** - allows you to add a condition which works like a filter. Adding a condition will allow you to filter out which rows to delete and which to keep when using the **Clear table rows** rule. For example if a table looks like this:

     ![Copy row table example](/images/copy-row-country-example.jpg)

     We can set a condition using the **Criteria to delete rows** button. For example if we want to delete all rows in which the **Country** field contains the word "land". To achieve this, the **Criteria to delete rows** would look as follows: 

     ![Copy row mapping](/images/copy-rows-copy-conditions.jpg)

     **Box 1** represents the field from the table which you are clearing rows in.

     **Box 2** represents the conditional check.

     *This is an example of the output using the conditions shown above:*

     ![Example output table](/images/clear-rows-output-table.jpg)

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.


### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Table rules go to [Table rules](/platform/rules/tables/).

To find out more about other rules go to [Rules](/platform/rules/).