---
title: "Remove table row"
typora-root-url: ..\..\..\..\..\static
weight: 3
---

## Introduction

The **Remove table row** rule allows you to remove rows within a specified table. The rule targets only the last row in a table and will do nothing when there are no rows present in a table. You can apply conditions to this rule which will allow you to perform checks and only remove rows when a certain condition is met.

## When to use 

You can use this rule paired up with the **Add table row** rule. The add table rule will allow you to add a row with data in its columns and remove table row rule could be applied to a button, used to remove a row if wrong data has been entered. This gives the user the ability to add a row and remove rows. Give the remove table row rule a condition to make sure not to delete valuable data, see [Conditions](/docs/platform/rules/general/add-conditions/) for more detail. To learn more about Add table row rule go to [Add table row](/docs/platform/rules/tables/add-table-row/).

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Remove table row**.

3. In the **Edit rule - Remove table row** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Remove table row](/images/remove-row-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png)see [Conditions](/docs/platform/rules/general/add-conditions/) for more details. It is a good idea to add condition to this rule to prevent deleting valuable information from the table.

5. In the **Select a table** option, select the table you want to remove a row from.

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

