---
title: "Meeting request"
typora-root-url: ..\..\..\..\..\static
weight: 2
---

The **Meeting request** rule sends an email according to a predefined template. It works exactly like the [Send email](/docs/platform/rules/communications/send-email/) rule with three additional fields to which are used to set up the date and time of the meeting. The three additional fields are as follow:
* **Start time** - indicating the starting date and time of the meeting.

* **End time** - indicating the ending date and time of the meeting.

* **Location** - indicating the location of the meeting.

  ![](/images/meeting-request-fields.jpg)

If you are using an email connector, a meeting request will appear in the calendar of the receiver(s).  Otherwise the meeting request will appear as a calendar file (.ics file type) attached to an email. to learn more about email connector go to [Email connector](/docs/platform/connectors/email/).

## When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## Before you get started

As mentioned above, the **Meeting request** rule has three additional fields to the Send email rule. Those fields need to be added into your form before applying this rule. Create a **Date** control for both the **Start** and **End** time fields, as well as a field the **Location** of the meeting.

> Note; the start and end time fields are both required on the request meeting rule therefore you should make the start and end fields required on your form too. To learn more about required fields go to[ Control properties](/docs/platform/controls/properties/#field-properties).

## How to get started
1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](https://docs.kianda.com/images/penicon.png). For example selecting the **Submit** as shown below.

   ![Form and button edit mode](/images/send-email-page-select-submit.jpg)

2. In the left-hand side pane, click on **Add a rule** > **Communications** > **Meeting request rule**.

3. Choose from the edit options:

1. Before adding the rule, add fields to store the start date & time, the end date & time, and the location of the meeting: 
   a. Add a date field to the current form: Click on Controls > Input > Date and drag the field onto the form.  Edit the field by clicking on it and then clicking the pen icon. Change the Title to *Start*.  Change the Name(unique) to *start*.  Set Display format to Date and time. Click OK.
   b. Repeat the last step to add another field called *End*.
   c. Add a text field: Click on Controls > Input > Text and drag the field onto the form.  Edit the field by clicking on it and then clicking the pen icon. Change the Title to *Location*. Change the Name(unique) to *location*.  
2. Select the Submit button.
3. Add a rule > Communications > Meeting request.
4. For the Start time, select the Start field added earlier. 
5. For the End time, select the End field added earlier. 
6. And for the Location, select the Location field added earlier.
7. Continue as for the Send email rule.



