---
title: "Sort table"
typora-root-url: ..\..\..\..\..\static
weight: 10
---

## Introduction

The **Sort table** rule loops through a table allowing you to sort data in an **ascending** or **descending** manner. In the rule options, you can select which column of the table to sort by. The column you select can be any of the **Control input** fields, the sorting algorithm takes the numerical or text value of each field and sorts it accordingly. For example if there is a **User picker** column in the table like as shown below:

![Sort table users before sort](/images/sort-table-user-before.jpg)

The sorting algorithm will use the **text** value or in this case the name of each user and sort it in an alphabetical order as the order is set to **ascending**. Take note that the **Favorite Image** column has also changes the order to the matching user as the sorting rule targets the whole row, **not just the column**. The result of the sort is as follows:

![Sort table users before sort](/images/sort-table-user-after.jpg)

## When to use

You can use this rule when you want to sort a table in an ascending or descending manner. The rule allows you to select the column by which you want to sort it, a field which identifies that column will make your table dynamic and very versatile. For example having a **List** field with options for all columns in your table.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work you need to have one or more tables in your process. This will allow you to select a table that you want to be sorted. To learn how to add a table to your process go to [Table control](/docs/platform/controls/input/table/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Sort table**.

3. In the **Edit rule - Sort table** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Sort table](/images/sort-table-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Select a table** - select the table you wish target when sorting values in. This table needs to be pre-created before adding this rule. If no table is selected in this field, an error message will show. 

   - **Column to sort** - allows you to select a column within your table you wish to sort by.

   - **Sort order** - radio button selection of the sorting order:

     - **Asc** - Ascending order. For example sorting number in an ascending order will look as follows:

       ![Numbers Ascending](/images/sort-table-asc.jpg)

     - **Desc** - Descending order. For example sorting number in an descending order will look as follows:

       ![Numbers Descending](/images/sort-table-desc.jpg)

   - **Add Sort** - you can choose to set multiple columns to sort your table by clicking on **Add Sort** button. You can also remove fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png).

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