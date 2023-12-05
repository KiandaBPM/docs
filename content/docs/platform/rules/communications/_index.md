---
title: "Communication rules"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

**Communication** rules is one category of [rules](/docs/platform/rules/) to enable automated communications with process users, for example sending meeting requests or even user push notifications. 

Take an example of a **User alert** rule. Implementing this rule will result in a new item in the **user notification** in the [**Quick action menu**](/docs/platform/general/quickaction/), for example a rule that alerts a user to complete a form. The user notification icon will look like this when the alert comes in, indicating there is one new notification: ![New user notification](/images/user-notification-new-item.jpg)

Clicking on the notification icon, opens up a pop-up box with the notification, for example:

![User alert example to complete a form](/images/user-alert-example.jpg)

Clicking on the Reminder itself will bring the user to that form within the process instance, for the user to complete.

Depending on how you configure the alert, you can create an alert message which appears as a warning in a user's workspace as shown in the image below.

![user alert warning](/images/user-alert-warning2.jpg)





## Getting started with Communication rules ##

If you go to **Administration** > **Designer** and click on a process or create a new process, then click on **Add a rule** the **Communication** rules are found in the left-hand pane when you click on **Communications**.

![Communication rules](/images/communication-rules-all.jpg)



There are four types of **Communication** rules as follows:

- **Send email** - This rule allows you to send automated emails that contain images, text, process and other links and attachments. Email templates are defined within the rule, allowing you to style emails the way you want and use [Expressions](/docs/platform/rules/general/expression-builder/) to automate the process. You can map fields and content from within the process, for example using a userpicker field so that user input in a form determines who an email is sent to. Emails can be sent out using a predefined SMTP connector, see [Setting up a Global SMTP mail Connector](/docs/platform/connectors/email/#setting-up-a-global-smtp-mail-connector) for more details. 

- **Meeting request** - This rule is similar to the **Send email** rule and allows you to send automated specially formatted emails that contain a meeting request. 

- **Anonymous form link** - This rule creates an anonymous link to a form which can be sent to external users who do not need Kianda login details or accounts to access the form(s), for example contractors or third party providers. The receivers of the link can then simply click on the link and submit data back to a process instance in Kianda.

- **User alert** - This rule sends an alert to a user which appears in the user notifications in the top right-hand quick actions menu bar. See [Quick action menu](/docs/platform/general/quickaction/) for an introduction to the shortcuts available to users including notifications. You can configure the alert to appear the way you want for example to allow warning messages to appear as shown in the image in the [Introduction](#introduction) or to link to a form for a user to complete.

  

### What's next  ![Idea icon](/images/18.png) ###

To read more about each of the rule types go to the links below:
