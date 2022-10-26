---
title: "User alert"
typora-root-url: ..\..\..\..\..\static
weight: 4
---

The **User alert** rule sends an alert to a user who can click on the alert to open the process instance, for example to a form that needs to be completed by a given user.  A user can view all alerts by clicking on the **notifications** or bell icon on the top right-hand corner of their screen.

For example in the image below there is one new notification.

![User notification](/images/user-alert-notification.jpg)

When the user clicks on the icon, the alert created using the **User alert** rule appears. 

![User alert example](/images/user-alert-example.jpg)

In this example clicking on the alert itself, will bring the user to a form that they need to fill out. 

## When to use 

There are a lot of uses for the user alert rule. For example, the rule can be used as a reminder to complete a form or when a form is submitted and the form needs to be reviewed, a manger can receive the alert to review the information in the form.

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](https://docs.kianda.com/images/penicon.png).

2. Click on **Add a rule** > **Communications** > **Anonymous form link**.

3. In the **Edit rule - User alert** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Anonymous link dialog box](/images/user-alert-edit-box.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](https://docs.kianda.com/images/editconditions.png) to create conditions for the rule, see [Conditions](https://docs.kianda.com/docs/platform/rules/general/add-conditions/) for more details.

5. **Send alert to** - choose from the radio buttons:

   - **Any user** - choose from **Users**, **Groups** and/or **Partners** in the drop-down list. All users must be predefined in the system, see [Users and Groups](/docs/platform/administration/users/) for more details.
   - **Current user** - make the current user of the form, whoever is submitting or saving information, as the person that the alert is being sent to.
   - **Defined in a user field** - choose a user picker field from the process, where the selected users, groups or partners will have an alert sent to.
   - **Form owner(s)** - selecting this option means that the form owner(s) defined during form creation/editing will have the alert sent to, see [Form owners](https://docs.kianda.com/docs/platform/application-designer/forms/form-owners/) for more details on what form ownership is and how to create form owners.

6. **Alert title** - select a field from the process to be the title or type one in.

7. **Alert message** - select a field from the process for the message of the alert or type one in.

8. **Alert Status** - choose from four different colours to be applied to the tile of the alert.

9. **Alert icon** - choose an icon from the drop-down list.

   ![Edit rule - Anonymous link dialog box](/images/user-alert-settings.jpg)

   The resulting alert design looks like this:

   ![Edit rule - Anonymous link dialog box](/images/user-alert-reminder.jpg)

10. **Process ID** - when the user receives an alert and clicks on it, he will open the process instance defined in the Process ID field.

    * If left blank, this field will contain the current Process ID.  

    * A different process ID can be added by typing or copying in the ID (or if the Process ID is stored in a field, then that field can be selected). 

### What’s next ![Idea icon](/images/18.png)

To find out more about other communication rules go to [Communication rules](/docs/platform/rules/communications/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

