---
title: "Hide or Show table column"
typora-root-url: ..\..\..\..\..\static
weight: 12
---

## Introduction

The **Hide / Show column** rule allows you change the visibility of a selected column within a table in a process. You can either disable or enable the property, you can also toggle between both of the visible states. 

## When to use

You can use this rule to hide or show specific columns in your table. This rule is often used when hiding private data from users that do not need access to it. For example you can choose to show total earning column of a table to your managers but not other employees. You can also apply this rule to a button and give it the toggle function which will allow you to toggle the visible property of a column.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work you need to have one or more tables in your process. This will allow you to select a table in which you want to hide or show a column in. To learn how to add a table to your process go to [Table control](/platform/controls/input/table/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Hide/Show column**.

3. In the **Edit rule - Hide/Show column** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Aggregate table](/images/hide-show-table.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Select a table to hide / show columns from** - select the table you wish target. This table needs to be pre-created before adding this rule. If no table is selected in this field, an error message will show. When the table is selected, an **+ Add** button appears. Click on it to add a field where you can select the column you wish to hide or show.

     ![Select field and visible property](/images/hide-show-select-fields.jpg)

   - **[1] Column to hide / show** - select the column you want to target you want the **hide / show** rule to apply to.

   - **[2] Visible** - select to which visible property you want the column to be set to.

     - **Hide** - will set the visible property to disabled.
     - **Show**- will set the visible property to enabled.
     - **Toggle visible** - will set the visible property as the opposite of what it is. For example if the current state of the visible property is enabled, when this rule is triggered, it will set the visible property to disabled.

   - **Add** - you can choose to change visibile property of multiple columns in your table by clicking on **+ Add** button. You can also remove fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png).

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
