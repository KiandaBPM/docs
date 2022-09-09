---
title: "Schedule a rule"
weight: 7
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Schedule a rule** allows you to schedule a rule or a field to be triggered **immediately**, at some **point in the future** or **recurrently**. When a form field is selected with **multiple** rules attached to it, all rules will be triggered **one by one**. You can also select a specific rule from a form field that has multiple rules attached to it, by expanding the field and selecting the desired rule you want to schedule. For example if you have a **Text box** field with multiple rules, you can expand the textbox field and there you will see a **Rules** tab which stores all rule that are attached to the field, see image below showcasing that a Text box field called **First Name** contains two rules in the **Rules** tab called **Set field** and **Make required**, you can select one of those rules if you want only one rule to be triggered:

![Selecting one rule to be triggered](/images/schedule-rule-single-rule.jpg)

## When to use 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to get started

The following step illustrates a scenario to schedule a [Send email rule](/docs/platform/rules/communications/send-email/) as a reminder after a form has been submitted:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button,  **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Workflow** > **Schedule a rule**. 

3. In the **Edit rule - Schedule a rule** dialog box, give the rule a title in the **Title** field.

   ![Go to form rule](/images/schedule-rule-details.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under **Action** fill out the following:

   - **Select the field or rule to trigger on schedule** - allows you to select a field or rule you want to trigger. By selecting a field with multiple options, all rules will be triggered one after another. You can also select a specific rule from a field with multiple rules by drilling down and selecting the desired rule. In this example we want to select a rule called **Send email** which is attached to the **Submit** button.

      ![Schedule a send email rule](/images/schedule-rule-send-email.jpg)

   - **Schedule** - allows you to choose a time of schedule. For this example we will select to send the email **Weekly** at 10 am every 2 weeks 

     ![Schedule a send email rule](/images/schedule-rule-weekly.jpg)

     - **One time** - Select **Time mode** as **Absolute** or **Relative** from now.  If **Absolute**, you can select the time using the clock icon and the date using the calendar icon or you can select a form field (where the date is stored) by clicking on the icon with black discs ![Disks](/images/icon-blackdisks.jpg).  If **Relative** from now, enter the days, hours and minutes directly.
     - **Minutes** - select the number of minutes you want the scheduled rule to reoccur.
     - **Hourly** - select the number of minutes and hours you want the scheduled rule to reoccur.
     - **Daily** - select the time of day and the number of days you want to scheduled rule to reoccur. You can select that the rule will trigger only on week days by enabling the **Week days only** checkbox.
     - **Weekly** - select a day of the week, time of the day and the number of weeks that you want the scheduled rule to reoccur.
     - **Monthly** - select the date of the month or **First, Second, Third, Fourth, Last** weekday of the month. You can also select a specific time that you want the scheduled rule to reoccur.
     - **Immediately** -

   - 















###### Notes
| Schedule    | Options                                                      |
| :---------- | :----------------------------------------------------------- |
| One time    | Select **Time mode** as Absolute or Relative from now.  If *Absolute*, you can select the time using the clock icon and the date using the calendar icon OR you can select a form field (where the date is stored) by clicking on the icon with black discs.  If *Relative from now*, enter the days, hours and minutes directly. |
| Minutes     | Every \<select number of minutes> minutes.                   |
| Hourly      | Minutes of hour \<select number of minutes after the hour> Every \<select number of hours>. |
| Daily       | At \<click on clock icon to select time> Every \<select number of days>.  Tick Week days to exclude Saturday and Sunday. |
| Weekly      | Weekday \<select day> At \<click on clock icon to select time> Every \<select the number of weeks>. |
| Monthly     | Select **Day**, \<select the day> or **The** \<select which day e.g. First Monday>.  At \<click on clock icon to select time> Every \<select number of months>. |
| Immediately | None                                                         |

Note that all of the Schedule options are executed on the server side except the Immediately option.

It is possible to set the schedule rule to expire by ticking **Expire**.  There are three options:
1. By: the rule will expire by the date and time given.  Either select the time using the clock icon and the date using the calendar icon OR select a form field (where the date is stored) by clicking on the icon with black discs.
2. After: the rule will expire after a set number of occurrences.  Select the number of occurrences in the blank field or click on the icon with black discs to choose a field where the number of occurrences is stored.
3. When: add a condition which will cause the rule to expire when it is true.

Select **Make task unique** if you want to prevent a second identical task being created for this instance of the process.

Select **Execute in series** if you want the server-side execution to be in series rather than in parallel.          

