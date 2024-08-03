---
title: "Compare dates"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Compare dates** rule is utilised to compare two date fields. Depending on the selected comparison function, the result of this rule will be saved as a boolean value (true/false) in another Kianda form field.

In the below example, the Compare dates rule is applied to a date field input in a form. If the date entered is after a set deadline, the field **Status - After Deadline?** in this process is set to Yes. You could use this to ensure that process instances must be completed before an upcoming deadline.

 ![Date rules](/images/date-rules-compare-date-screen.jpg)



## When to use

The Compare dates rule should be used when a user wishes to compare two different dates. For example, creating a submission deadline function that disallows form submissions after a specified date.

 

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

 

## Before you get started

In advance of using this rule, you need to have **created one or more forms, complete with control fields**. For example, you must have a created field in your form that the Compare dates rule can be applied to. See [Date control](/docs/platform/controls/input/date/) for more information on using date fields.





## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Dates** > **Compare dates**.

   ![Selecting Compare dates](/images/date-rules-select-compare-dates.jpg)

3. In the **Edit rule - Compare dates** dialog box, give the rule a title in the **Title** field.

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png). See [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

   ![Compare dates screen conditions](/images/date-rules-compare-dates-screen-conditions.jpg)



5. Under **Action > Compare dates**, create one or more actions for the rule by filling out the following:

   * **Date to compare** - choose a date field from the drop-down list to serve as the date you would like to compare. This date will be placed *before* the comparison function.

   * **Compare to date** - choose a date field from the drop-down list to serve as the date you would like to compare to the initially selected date (Date to compare). This date will be placed *after* the comparison function.

   * **Compare function** - Choose from the radio buttons:

     * Is between dates - checking this button displays a new field **Compare from date**, where you must select a start date field from the drop-down list, as well as choosing a Compare to date from the other drop-down list (end date). This function returns true or false if the Date to compare falls within the start and end dates selected.

       ![Between dates function](/images/date-rules-compare-date-between.jpg)

     * Is before date - checking this button determines if the selected date for the Date to compare field falls *before* the selected date for the Compare to date field.

     * Is after date - checking this button determines if the selected date for the Date to compare field falls *after* the selected date for the Compare to date field.

       

6. Under **Action > Result**:

   * **Destination field** - choose the field within your Kianda form where you would like to store the resulting boolean value of the comparison function. As can be seen in the below example, you can utilise the result as a status checker using a destination text field.

   * **Value when true** - if the result of the comparison function is *true*, enter what string of text you would like to return to your form. 

   * **Value when false** - if the result of the comparison function is *false*, enter what string of text you would like to return to your form. 

     The resulting value can be used in a Kianda **Condition** to control other parameters. See [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

     ![Compare dates result](/images/date-rules-compare-date-result.jpg)

7. Finally, clicking on the **OK** ![OK button](/images/ok.png) button will save the new rule you have just created and apply it to the chosen field.



### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](https://docs.kianda.com/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](https://docs.kianda.com/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.





### User tip ![Target icon](/images/05.png) ###

Selecting the **Compare to date** function displays an additional field where you can select two different dates, and determine if your Date to compare is within.

The resulting boolean value can be used within other Kianda [Conditions](/docs/platform/rules/general/add-conditions/).



### What's next  ![Idea icon](/images/18.png) ###

To find out more about other date rules go to [Dates](/docs/platform/rules/dates/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

