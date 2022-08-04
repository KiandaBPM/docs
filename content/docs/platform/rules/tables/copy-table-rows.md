---
title: "Copy table rows"
typora-root-url: ..\..\..\..\..\static
weight: 6
---

## Introduction

The **Copy table rows** rule allows you copy any field from within a specified table into another table within your process. You can select the same tables which will act similar to **Add table row**, see [Add table row](/docs/platform/rules/tables/add-table-row/) for more detail.

## When to use

You can use this rule when you want to copy specific fields from one table to another. You do not need to copy all columns from a row. For example, from a table row that has **Country**, **City**, **Currency** columns, you can just copy the **City** column.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work you need to have one or more tables in your process. This will allow you to select a table to copy from and to. It is possible to have only one table in your process but that will limit you to copy a row from the specific table to the same table.

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Copy table rows**.

3. In the **Edit rule - Copy table rows** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Import CSV](/images/import-csv-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Table to copy rows from** - select the table you wish to copy fields from. This table needs to be pre-created before adding this rule. If no table is selected in this field, an error message will show.
   - **Table to copy rows to** - select the table you wish to copy fields to. This field must be pre-created before adding this rule. You can select the same table as in the **Table to copy from** section. This will act similar to add table row rule, see [Add table row](/docs/platform/rules/tables/add-table-row/) for more detail.

   When both the **Table to copy rows from** and **Table to copy rows to** are assigned, more options are presented.

   - **Copy row conditions** - allows you to add conditions to the fields you want to copy into the new table. These conditions work like filters. For example if a table looks like this:

     ![Copy row table example](/images/copy-row-country-example.jpg)

     We can set a condition using the **Copy row condition** to copy only specific rows. For example we only want to copy the rows which contain the word "land" in the country field. To achieve this, the **Copy row condition** would look as follows: 

     ![Copy row mapping](/images/copy-rows-copy-conditions.jpg)

     **Box 1** represents the field from the table which you are copying from.

     **Box 2** represents the conditional check.

     *This is the example output table using the conditions and table shown earlier, Note we are only copying the country and currency into the new table*

     ![Example output table](/images/copy-row-output-table.jpg)

   - **Column mapping** - allows you to assign values from fields within your process into the newly copied row. 

     ![Copy row mapping](/images/copy-row-mapping.jpg)

     - **Field or text** - you can select a field within your form or type in text manually to represent the value you want your field in the new row to contain.
     - **To table** - select the field from the table you are copying to, to contain the value specified in the **Field or text** section.
     - **Add mapping** - you can choose to set multiple fields of a row by clicking on **Add mapping** button. You can also remove fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png).

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

