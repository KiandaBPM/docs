---
title: "Calculate time"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Calculate time** rule allows you to calculate the difference in time units between one date field and another, or from the current date and a chosen date field. The resulting number is then stored within a separate field within a Kianda form. An example of this rule would be entering a date under **From date**, selecting the **Now()** radio button, and entering a field under **destination field**. This will display the amount of days that are between the entered date field, and now.

![Calculate Time Screen](/images/date-rules-calculate-time-screen.jpg)



For example, the resulting number could be utilised as a countdown feature to communicate to the user that an important date is approaching, and that a task needs to be completed (as seen below). In this instance, there are 20 days before a deadline. To learn more about dates, see [Date control](/docs/platform/controls/input/date/).

![Calculate Time Results](/images/date-rules-time-calculate-result.jpg)





## When to use

The **Calculate time** rule should be used when a user wishes to calculate the time difference between a date field and another date/time. For example, creating a countdown function that returns the amount of time units between two set dates.

 

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

 

## Before you get started

In advance of using this rule, you need to have **created one or more forms, complete with control fields**. For example, you must have a created field in your form that the **Calculate time** rule can be applied to. See [Date control](/docs/platform/controls/input/date/) for more information on using date fields.



## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Dates** > **Calculate time**.

   ![Selecting Calculate Time](/images/date-rules-select-calculate-time.jpg)

3. In the **Edit rule - Calculate time** dialog box, give the rule a title in the **Title** field.

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png). See [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

   ![Selecting Calculate Time](/images/date-rules-calculate-time-screen-conditions.jpg)

5. Under **Action > Calculate time between dates**, create one or more actions for the rule by filling out the following:

   * **Time unit** - choose an option from the drop-down list to serve as your calculation unit:

     * Minutes

     * Hours

     * Days

     * Weeks

     * Months

     * Years

   * **From date** - click on the field and select another field from the drop-down list. This will be the date the calculation will start counting from.

   * **To date** - choose from the radio buttons:

     * Now() - calculating the number of time units between the From date to now.

     * Today() - calculating the number of time units between the From date to today at midnight.

     * Date field -  calculating the number of time units between the From date to the date specified in another field.

       ![Calculate time select date](/images/date-rules-calculate-time-select-date.jpg)

   * **Destination date field** - choose the date field within your form which this new date is to be stored. If the **Use business hours?** checkbox is ticked, you will be prompted to enter the start and end time of your business' working day, using the time picker list.

     ![Date rules destination date field](/images/date-rules-add-time-to-date-destination.jpg)

   * **Date calculation settings** - you can select whether the time calculated:

     * Includes weekends
     * Excludes weekends
     * Excludes weekends and special dates
     * Excludes special dates

     Beside the **Count only full hours?** label (or time unit chosen), if the No radio button is selected, the **Round result hours?** (or time unit chosen) label will appear to the right. You will be prompted to select either a Yes or No radio button, allowing you to neatly round the chosen time unit to the nearest whole number (if Yes is selected).

   * **Special dates** - you can also define custom special dates and save them accordingly. Click on **Add special date** to add in a date. Enter a label for this special date in the left field and a date in the right field. By choosing a title for a new special date, and entering the date into the date field, the date can be saved using the **Save special dates for reuse** button ![Date rules save special date button](/images/save-special-date-btn.jpg). To load previously saved dates, click on the **Load special dates** button ![Date rules load special date button](/images/load-special-date-btn.jpg). You can delete a saved Special date by clicking on the **Bin/Trash** button![bin icon](/images/binicon.png). 

     ![Calculate time calculations](/images/date-rules-calculate-time-calculations.jpg)
   
   6. Finally, clicking on the **OK** ![OK button](/images/ok.png) button will save the new rule you have just created and apply it to the chosen field.



### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](https://docs.kianda.com/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](https://docs.kianda.com/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### User tip ![Target icon](/images/05.png) ###

Multiple **Special dates** can be loaded at once to allow you to select a number of specific dates to exclude from the rule.



### What's next  ![Idea icon](/images/18.png) ###

To find out more about other date rules go to [Dates](/docs/platform/rules/dates/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

