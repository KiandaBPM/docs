---
title: "Format date"
weight: 4
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Format date** rule is used to reformat a selected date field within your Kianda form, and send it to a destination field. You can choose from a range of date formats where month or day leads, and time is also included, see step 5 in [How to get started](#how-to-get-started).

In the below example, the Format date rule is applied to a selected field from the drop-down list and is formatted to the *MM/DD/YYYY* format. The resulting formatted date is then displayed in the **Formatted Date** field that is selected under **Select a destination field for the formatted date**. You can utilise this rule to format the entered date so that it matches various national date formatting standards. The default formatting for Kianda dates are *DD/MM/YYYY*, so in the below example an entered date of *23/08/2022* would become *08/23/2022*.



![Format date screen](/images/date-rules-format-date-screen.jpg)



## When to use

The format date rule should be used when you wish to amend the formatting of a date field within Kianda. For example, you receive a date from a data source in one format and wish to present it in the form in another format.

 

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

 

## Before you get started

In advance of using this rule, you need to have **created one or more forms, complete with control fields**. For example, you must have a created field in your form that the Format date rule can be applied to. See [Date control](/platform/controls/input/date/) for more information on using date fields.



## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Dates** > **Format date**.

   ![Select format date](/images/date-rules-select-format-date.jpg)

3. In the **Edit rule - Format date** dialog box, give the rule a title in the **Title** field.

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png). See [Conditions](/platform/rules/general/add-conditions/) for more details.

    ![Format date screen conditions](/images/date-rules-format-date-screen-conditions.jpg)

5. Under **Action**, create one or more actions for the rule by filling out the following:

   *  **Select a date field** - choose a date field from the drop-down list you would like to be formatted. The help button ![help button](/images/help.png)provides you with additional support.

   * **Define a format or select a predefined value** - choose from the drop-down list the type of date formatting you would like to change your date to:

     ![date formats](/images/date-rules-different-date-formats.jpg)

   * **Select a destination field for the formatted date** - choose a date field from the drop-down list where you would like to store the new formatted date.

6. Finally, clicking on the **OK** ![OK button](/images/ok.png) button will save the new rule you have just created and apply it to the chosen field.

   


### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](https://docs.kianda.com/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](https://docs.kianda.com/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### User tip ![Target icon](/images/05.png) ###

This rule can be utilised to format a date to various national date formatting standards.



### What's next  ![Idea icon](/images/18.png) ###

To find out more about other date rules go to [Dates](/platform/rules/dates/).

To find out more about other rules go to [Rules](/platform/rules/).