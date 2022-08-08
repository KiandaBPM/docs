---
title: "Aggregate table"
typora-root-url: ..\..\..\..\..\static
weight: 11
---

## Introduction

The **Aggregate table** rule loops through a table allowing you to aggregate a specific column and store the value in another field from within you process. There are three functions of the **Aggregate table** rule which are **Sum**, **Average** and **Count**. Sum and Average only work on number fields while count will count the number of rows it looped through.

## When to use

You can use this rule to sum up all the values in a column or get the average. **Sum** and **Average** functions of the aggregate rule work only on number fields. The **Count** function can be used to count the rows that the aggregate rule looped through.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work there are a couple of prerequisites needed inside of your process:

- **Table** - needed to let the rule know which table will be used to aggregate columns together, for more detail on how to add a table go to [Table control](/docs/platform/controls/input/table/).
- **Text box** - needed as a container to hold the result from the aggregate. For more detail on how to add a text box field go to [Text box control](/docs/platform/controls/input/textbox/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Aggregate table**.

3. In the **Edit rule - Aggregate table** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Aggregate table](/images/aggregate-table-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Select a table field** - select the table you wish target when aggregating values. This table needs to be pre-created before adding this rule. If no table is selected in this field, an error message will show. 
   
   - **Table aggregate conditions** - allows you to add a condition that works like a filter. Adding a condition will allow you to target the specific row that the condition matches. For example, you want to aggregate all rows that the avarage score is more than 50%.
   - **Operation** - radio selection of the operation that you want performed on the aggregate rule:
      - **Sum** - counts all fields together and outputs the total(only works with numbers). Requires a **Number** field within your table. To lean more on Number field, got to [Number control](/docs/platform/controls/input/number/).
     - **Average** - gets the average from all the values provided in a column(only works with numbers). Requires a **Number** field within your table. To lean more on Number field, got to [Number control](/docs/platform/controls/input/number/).
     - **Count** - counts all row instances that the aggregate rule looped through.
     - **Select a number field to aggregate** - allows you to select a number field within your table. It is only used with the **Sum** and **Average** operations.
   
   - **Result field** - select the field you want to store the value of the aggregation.
   - **Auto update result** - checkbox allowing you to enable or disable auto update. This will determine if the result field will be updated when more rows are added after the aggregation. 
   
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
