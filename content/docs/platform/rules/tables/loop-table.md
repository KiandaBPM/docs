---
title: "Loop table"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

## Introduction

The **Loop table **rule allows you to loop through table rows allowing you to trigger fields or rules within the specified table. This rule is often used when the same action must be performed for a multiple rows within a table. To prevent triggering the action manually, you can use this rule to loop through each row and trigger the action. For example calculating the total price spent for an item.

## When to use 

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## Before you get started

To demonstrate this rule, we will loop through a simple **Purchase table** in which we will calculate the total price spent on each item bought. To learn more on how to add a table into your form go to In the table we will have the following columns:

- **Item** - text box field representing the name of the item bought. To learn how to add a text box field go to [Text box control](/docs/platform/controls/input/textbox/).

- **Price** - number field representing the price of the item. To learn how to add a number field go to [Number control](/docs/platform/controls/input/number/).

- **Quantity** - number field representing the quantity of the item.

- **Total** - number field representing the total quantity spent on the item.

- **Calculate total** - a button with a **Set form field** rule attached. To learn more on how to add and how to use the **Set form field** go to [Set form field rule](/docs/platform/rules/data/set-form-field/).

  ![Edit rule - purchase table](/images/loop-table-purchase-table.jpg)

The goal in this example is to loop though the table and trigger the **Calculate total** button so that for each item purchased, the total can be calculated depending on its quantity.

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Loop table**.

3. In the **Edit rule - Loop table** dialog box, give the rule a title in the **Title** field.

4. In the **Select a table** option, select the table you want to loop through.

5. In the **Select a column field or rule to trigger** option, select a field or rule you want to trigger when looping through the table. In this example, we will select the **Calculate total** button from the table column.

   ![Edit rule - loop table](/images/loop-table-edit-rule.jpg)

6. **Enable start action** gives you two options:

   - **Yes** - allows you to select a field that will execute before the loop starts.
   - **No** - no changes are made, the loop will execute straight away.

7. **Enable end action** gives you two options: 

   - **Yes** - allows you to select a field that will execute after the loop finishes.
   - **No** - no changes are made, the loop will end without any action.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Table rules go to [Table rules](/docs/platform/rules/tables/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

