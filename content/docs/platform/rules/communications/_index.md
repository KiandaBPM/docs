---
title: "Communication rules"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

**Communication** rules is one category of [rules](rules/Readme.md) to enable automated communications with process users, for example sending meeting requests or even user push notifications. 

Take an example of a **User alert** rule. Implementing this rule will result in a new item in the **user notification** in the [**Quick action menu**](/docs/platform/general/quickaction/), for example a rule that alerts a user to complete a form. The user notification icon will look like this when the alert comes in, indicating there is one new notification: ![New user notification](/images/user-notification-new-item.jpg)

Clicking on the notification icon, opens up a pop-up box with the notification, for example:

![User alert example to complete a form](/../content/docs/user-alert-example.jpg)

Clicking on the Reminder itself will bring the user to that form within the process instance, for the user to complete.



## Getting started with Communication rules ##

If you go to **Administration** > **Designer** and click on a process or create a new process, then click on **Add a rule** the **Communication** rules are found in the left-hand pane when you click on **Communications**.

![Communication rules](/images/communication-rules-all.jpg)



There are four types of **Communication** rules as follows:

- **Send email** - This rule allows you to send automated emails that contain images, text, process and other links and attachments. Emails can be sent out using a predefined SMTP connector, see [Setting up a Global SMTP mail Connector](/docs/platform/connectors/email/#setting-up-a-global-smtp-mail-connector) for more details. 

- **Meeting request** - This rule allows you to send automated emails that contain a meeting request. 

- **Anonymous form link** - This rule creates a link to a form which can be sent to external users who do not need Kianda login details or accounts to access the form(s), for example contractors or third party providers.

- **User alert** - This rule sends an alert to a user which appears in the user notifications in the top right-hand quick actions menu bar. See [Quick action menu](/docs/platform/general/quickaction/) for an introduction to the shortcuts available to users including notifications. 

  

### What's next  ![Idea icon](/images/18.png) ###

To read more about each of the rule types go to the links below:
