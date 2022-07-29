---
title: "Update data item rule"
linkTitle: "Update item"
typora-root-url: ..\..\..\..\..\static
---

## Introduction

This rule implements the Update function which is one of the four CRUD functions. The rule will update one or more items of data from a chosen data source (see notes below on the types of data source that can be used).

The **Data source filter** in this rule is used for targeting specific data item in your data connection. The item you want to update within your data source is targeted by filtering it out using a field within your form. It is a good idea to connect a dummy field to your data source first and then use that field to filter for the item you want to update. The actual value used to update the item in your data source can also use a field or text filled out in your mapping section (see below for more detail). To make your **Update item** rule extremely dynamic, it is recommended to create field for filtering an item and a separate field for the new value you want your item to hold.

## When to use 

The Update item rule should be used whenever you want to update an existing item within a data source of your choice. 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Data** > **Update item**.

3. In the **Edit rule - Update item** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Update form dialog box](/images/update-item-edit-dialog.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png), see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Click on **Select data source** button ![Select data source](/images/button-select-data-source.jpg)to select the data source you want to update an item in. When you select your data source, new mapping options are presented.

   ![update item - mapping options](/images/update-item-mapping.jpg)

6. **Data source filter** - works on condition bases where by you can filter the specific item that you want to update within your data source. The condition uses a field from within your form and therefore it is good practice to create a field and connect it to your data source to have the ability of selecting an item that you want to update. To learn more about conditions go to [Conditions](/docs/platform/rules/general/add-conditions/).

7. **Input mapping** - used to update an item inside of the data source that you selected.

   - **Form field or text** - you can select a field within your form or type in text manually to represent the value you want to your updated item to contain.
   - **Data source field** -  select a field in your data source to hold the new value.
   - **Add mapping** - you can choose to create multiple items in your data source by clicking on **Add mapping** button. You can also remove fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png).

8. **On success mapping** - select the field(s) in the form which will store information and populate the **data source field or text** field with the respective data source value. To learn more about success mapping go to [Success/Error Mapping](/docs/platform/rules/general/success-error-mapping/).

9. **On error mapping** - select the field(s) in the form which will store error messages. Then type in a value or use Error message, to create a system generated error message if an error occurs during rule execution. To learn more about error mapping go to [Success/Error Mapping](/docs/platform/rules/general/success-error-mapping/).

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Data rules go to [Data rules](/docs/platform/rules/data/).

To find out more about other rules go to [Rules](/docs/platform/rules/).