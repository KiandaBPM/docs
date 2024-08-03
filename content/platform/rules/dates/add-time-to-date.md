---
title: "Add time to date"
weight: 1
typora-root-url: ..\..\..\..\..\static
---



## Introduction

The **Add time to date** rule allows you to add time to a date field in order to have a future date set within your form. This rule can remind users through set intervals to complete a process instance before a set time. An example of this rule would be entering a numeric value of **1** into the **Time to add or a field**, selecting **Days** from the **Time unit** drop-down list, and selecting **Today()** from the **To date** radio button options.

![Date rules add time to date screen](/images/date-rules-add-time-to-date-screen.jpg)



## When to use

The Add time to date rule should be used when a user wishes to add time to a date. For example, sending a reminder email after a set interval of time.

 

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## Before you get started

In advance of using this rule, you need to have **created one or more forms, complete with control fields**. For example, you must have a created field in your form that the Add time to date rule can be applied to. See [Date control](/docs/platform/controls/input/date/) for more information on using date fields.

 



## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Dates** > **Add time to date**.

    ![Date rules selected](/images/date-rules-selected.jpg)

    

3. In the **Edit rule - Add time to date** dialog box, give the rule a title in the **Title** field.

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png). See [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

   ![Date rules edit conditions](/images/date-rules-add-time-to-date-screen-conditions.jpg)

5. Under **Action** create one or more actions for the rule by filling out the following:

   * **Time to add or a field** - click on the field and select a numerical value, or another field in your Kianda form. This will be the interval quantity.

   * **Time unit** - choose an option from the drop-down list to serve as your interval unit:

     * Minutes

     * Hours

     * Days

     * Weeks

     * Months

     * Years

   * **To date** - choose from the radio buttons:

     * Now() - adding time to date immediately

     * Today() - adding time to date from midnight today

     * Date field -  adding time to date from the date specified in another field

       ![Date rules select time](/images/date-rules-add-time-to-date-select-time.jpg)

     

   * **Destination date field** - choose the date field within your form which this new date is to be stored. If the **Use business hours?** checkbox is ticked, you will be prompted to enter the start and end time of your business' working day, using the time picker list. It should be noted that this checkbox only appears when the time unit chosen is minutes or hours.

     ![Date rules destination date field](/images/date-rules-add-time-to-date-destination.jpg)

     

   * **Date calculation settings** - you can select whether the time added to your chosen date field:

     * Includes weekends
     * Excludes weekends
     * Excludes weekends and special dates
     * Excludes special dates 

   * **Special dates** - you can also define custom special dates and save them accordingly. Click on Add special date to add in a date. Enter a label for this special date in the left field and a date in the right field. By choosing a title for a new special date, and entering the date into the date field, the date can be saved using the **Save special dates for reuse** button ![Date rules save special date button](/images/save-special-date-btn.jpg). To load previously saved dates, click on the **Load special dates** button ![Date rules load special date button](/images/load-special-date-btn.jpg). You can delete a saved Special date by clicking on the **Bin/Trash** button![bin icon](/images/binicon.png). 

     ![Date rules special dates](/images/date-rules-add-time-to-date-calculations.jpg)

6. Finally, clicking on the **OK** ![OK button](/images/ok.png) button will save the new rule you have just created and apply it to the chosen field.





### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](https://docs.kianda.com/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](https://docs.kianda.com/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### User tip ![Target icon](/images/05.png) ###

Multiple **Special dates** can be loaded at once to allow you to select a number of specific dates to exclude from the rule.

The Add time to date rule is commonly used with the [Schedule a rule](/docs/platform/rules/workflow/schedule-a-rule/) rule to apply the specified time to a rule on a button, for example. This can be used like a clock to countdown to an event such as sending a reminder email.



### What's next  ![Idea icon](/images/18.png) ###

To find out more about other date rules go to [Dates](/docs/platform/rules/dates/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

