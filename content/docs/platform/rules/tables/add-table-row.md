---
title: "Add table row"
typora-root-url: ..\..\..\..\..\static
weight: 2
---

## Introduction

The **Add table row** rule allows you to add rows within a specified table. You can set values for each field within the newly created row by mapping values into them. For mapping new values to each field, you can use manually typed text or use other fields from your process. You can also add rows with empty values by deleting the mapping fields. To learn more about mapping go to [Success/Error mapping](/docs/platform/rules/general/success-error-mapping/).

## When to use 

You can use this rule if you want more dynamic and more automated tables. By removing the original **add row** button from the table and adding a new button with the **Add table row** rule attached, you can map specific row fields to automatically appear with values when adding the rows. Take a look below how to add  and use the **Add table row** rule.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Add table row**.

3. In the **Edit rule - Add table row** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Add table row](/images/add-row-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. In the **Select a table** option, select the table you want to add a new row to. New mapping options are presented when you select a table.

6. In the **New row mapping** you have the option to assign values to newly created rows and the fields within it.

   ![Add table row - mapping](/images/add-row-mapping.jpg)

   - **Table row field** - allows you to select a field from the row which you want to map a value to.

   - **Form field or text** -  you can select a field within your form or type in text manually to represent the value you want to your row field to contain.

   - **Add mapping** - you can choose to assign values to multiple row in your row by clicking on **Add mapping** button. You can also remove fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png). To add a row without any values, delete all mapping fields as shown below.

     ![Empty new row mapping](/images/add-row-empty-mapping.jpg)

7. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.


### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Table rules go to [Table rules](/docs/platform/rules/tables/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

