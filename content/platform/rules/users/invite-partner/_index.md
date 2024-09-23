---
title: "Invite partner"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Invite partner** rule allows you to **dynamically** send out an email to a partner organisation with an **invitation** to **share** a process from your subscription. This rule **creates a profile** for the partner as well as shares a process specified in the rule. You can choose to **generate** an invite link and store the link in a text box field if needed instead of sending out an automatic email.

## When to use 

Use this rule when inviting a **third-party organisation** from within a process instance, for example when your company must hire a third-party organisation to complete a specific task from your process, you can share this process with the third-party organisation to complete the task. Take a **maintenance** company for example, a process is created to perform a maintenance check. The maintenance company performs a check but some broken parts need to be re-manufactured, therefore the maintenance company sends out a **Partner invitation** to the **manufacturing** company in order to manufacture missing or broken parts as the maintenance company makes checks and fixes but not manufacture parts.

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before getting started

Before you get started with this rule, you need to create a **shared process instance** of the process you intend to share with the partner. To learn more how to create a shared process instance, go to [Shared processes](/platform/b2b-portals/shared-process/).

In advance of using the **Invite partner** rule, in your process you need to have created at least one or more forms. The **Invite partner** rule also requires you to create a list of fields that are used to hold information about the partner and which process you want to share. See below for the list of fields required in your process before using the invite partner rule:

- **Partner organisation** - text box field representing the name of the organisation that the partner is part of.
- **Shared process name** - text box field representing the name of the process you want to share.
- **Contact first name** - text box field representing the first name of the partner you want to share a process with.
- **Contact last name** - text box field representing the last name of the partner you want to share a process with.
- **Contact email** - text box field representing the email address of the partner you want to share a process with.
- **Partner country** - text box field representing the country that your partner is situated in.
- **Partner city** - text box field representing the city that your partner is in.

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Users** > **Invite partner**.

3. In the **Edit rule - Invite partner** dialog box, give the rule a title in the **Title** field.

   ![Invite partner - edit rule dialog box](/images/invite-partner-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Partner organisation** - field representing the name of the organisation that the partner is part of.

   - **Shared process name** - field representing the name of the process you want to share. Note that this name needs to match the name of the **Shared process** instance and not the name of a process. For example if your subscription has a process called **Maintenance check**, you need to create a shared process instance and give it an appropriate shared process name, for example **Maintenance check - Plumbing Partner**. In this field you need to use the Maintenance check - Plumbing Partner as the name.

   - **Contact first name** - field representing the first name of the partner you want to share a process with.

   - **Contact last name** - field representing the last name of the partner you want to share a process with.

   - **Contact email** - field representing the email address of the partner you want to share a process with.

   - **Partner country** - field representing the country that your partner is situated in.

   - **Partner city** - field representing the city that your partner is in.

   - **Partner logo** - text box field representing the URL of the partners logo or a file field with the uploaded logo.

   - **Send invite email** - radio list representing whether to send an email to the partner. If **No** is selected an extra field appears:
     - **Field to store invite link** - field used as a container to store the generated invite link. 
     
       ![Invite link field](/images/invite-partner-link.jpg)
     
   - **Partner account** - a user picker field used to specify the account of the partner. You can pre-create an account for your partner and set this field with his user. This will prevent the invited partner to create an account when accepting the invite link.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.


### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

Prior to inviting a partner, create a **shared process instance** of a process that you intend your partner to use. Give it a unique name for example use the original process name followed by the partners name. If you have a process called **Inspection Checklist** and your partners name is **Windmill Inspections**, call your shared process instance **Inspection Checklist - Windmill Inspections**. This will help you differentiate between your original process and the shared process.

### What’s next ![Idea icon](/images/18.png)

To find out more about other User rules go to [User rules](/platform/rules/users/).

To find out more about other rules go to [Rules](/platform/rules/).
