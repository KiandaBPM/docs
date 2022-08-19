---
title: "Date rules"
weight: 7
typora-root-url: ..\..\..\..\..\static
---

**Date** rules is a category of [rules](/docs/platform/rules/) that allows for the calculation, manipulation and general formatting of times and dates. Date rules can be utilised to set the time of a scheduled task, determine which process user submitted an instance first, and format dates that are inputted in date fields. To learn more about dates, see [Date control](/docs/platform/controls/input/date/).

Below is an example of a date rule in operation; a **Compare date** rule is applied to a date field input in a form. If the date entered is after a set deadline,  the field **Status - After Deadline?** in this process is set to Yes. This could be used to ensure that process instances must be completed before an upcoming deadline.

 ![Date rules](/images/date-rules-compare-date-screen.jpg)



## Getting started with Date rules ##

If you go to **Administration** > **Designer** and click on a process or create a new process, then click on **Add a rule**, the **Date** rules are found in the left-hand pane when you click on **Dates**.

![Date rules](/images/date-rules-all.jpg)



There are four types of **Date** rules as follows:

- **Add time to date** - this rule allows the addition of time to a date which can be based on a chosen be parameter such as starting from now, today or another specified value. This can used in conjunction with the [Schedule a rule](/docs/platform/rules/workflow/schedule-a-rule/) rule to schedule reminders for certain process instances.

- **Calculate time** - this rule calculates the number of time units between two dates, or between now/today and a given date.

- **Compare dates** - this rule allows the comparison of date fields to know if one date is for example, between dates, before or after a given date. The rule could be used to ensure that process instances must be completed before an upcoming deadline.

- **Format date** - this rule applies custom formatting to input date fields so you can choose the format of the date (for example, parsing the date format MM/DD/YY to DD/MM/YY).

  

### What's next  ![Idea icon](/images/18.png) ###

We have briefly introduced the four types of Date rules. To read more about each of the rule types go to the links below:
