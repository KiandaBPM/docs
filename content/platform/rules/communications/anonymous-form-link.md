---
title: "Anonymous form link"
typora-root-url: ..\..\..\..\..\static
weight: 3
---

The **Anonymous form** rule creates a link to a selected form from the process which can be sent to an external user. The user can open the form without the need for authentication into the Kianda platform.

## When to use 

To use the **Anonymous form** rule effectively, you would typically apply it to a **Submit** button along side **Send email** rule so that you can attach the link into an email and share the specified form with an external user.

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Anonymous form link**, in your process you need to have created at least one or more forms. This rule also requires a link to be stored inside of a field, for example text box control. To learn more about text box control go to [Text box control](/docs/platform/controls/input/textbox/).

## How to get started

To send an anonymous form link to an external user:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](https://docs.kianda.com/images/penicon.png).

2. Click on **Add a rule** > **Communications** > **Anonymous form link**.

3. In the **Edit rule - Anonymous form link** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Anonymous link dialog box](/images/anonymous-link-edit-box.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](https://docs.kianda.com/images/editconditions.png) to create conditions for the rule, see [Conditions](https://docs.kianda.com/docs/platform/rules/general/add-conditions/) for more details.

5. In the **Select a form** dropdown, select the desired form to create a link to.

6. Link expire settings contains three options:

   - **Never expires** - Indicating that the link will never expire and will always be active.

   - **Expire after a number of uses** - the link will expire after the specified number of uses in the **Expire link after number of uses** text box.

     ![Link expire settings - number of uses](/images/anonymous-link-expire-uses.jpg)

   - **Expire in time** - the link will expire after the specified **Days**, **Hours** and **Minutes** from the time it was created.

     ![Link expire settings - time](/images/anonymous-link-expire-time.jpg)

7. In the **Field to store the generated anonymous link** dropdown, select a field in which you want the link to be stored in.

8. In the **Message to display after anonymous submission** text box, type in a message your want users to see after they submit the form.

   ![Link expire settings - time](/images/anonymous-link-message-box.jpg)

   ![Link expire settings - time](/images/anonymous-link-message.jpg)

9. Selecting the **Hide form topbar** will hide all form tiles from the users view.

10. Force logout:

    - **Yes** - users will be logged out after submitting the form.
    - **No** - users will stay logged in after submitting the form.

11. Create a **Send email** rule and apply the link expression to the body of the email. To learn more about **Send email** rule and how to add expressions go to [Send email](/docs/platform/rules/communications/send-email/).



### User tip ![Target icon](/images/05.png)

- The field used to store the Anonymous Link can be made invisible to the user of the current form. Go to the field properties and set the field to **not visible**.
- Each record or instance of a process can have only one active link. If a second anonymous link is created for an instance of a process, the first link will not exist anymore. Users clicking on the first link will get an error message.

### What’s next ![Idea icon](/images/18.png)

To find out more about other communication rules go to [Communication rules](/docs/platform/rules/communications/).

To find out more about other rules go to [Rules](/docs/platform/rules/).