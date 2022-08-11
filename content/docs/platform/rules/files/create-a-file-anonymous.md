---
title: "Create a file anonymous link"
typora-root-url: ..\..\..\..\..\static
weight: 7
---

## Introduction

The **Create a file anonymous link** rule enables you to create a link to a file from your process. The link is **fully anonymous** which means anybody can **access** the file if they have the link. You can set an expiry time of the link (in hours), the count down will start from the time the link was created. It is possible to create anonymous link for multiple files as long as your file field supports it, see [File upload control](/docs/platform/controls/input/file-upload/).

## When to use 
Use this rule when your process or application requires sharing anonymously a file stored in one of the supported file connectors. For example when sharing a file link to a report stored behind an authenticated file system.

Add this rule to any form element.

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Anonymous form link**, in your process you need to have created at least one or more forms. The create a file anonymous link rule also requires two control fields in order to store a file which you want to share and a text box control for storing the link. You can also create another text box or a number field to store the link duration, this field is optional but can be a good idea if you want to customise the duration of the link dynamically.

- **File field** - used to store the file which you want to create a link to. To learn how to create a file filed go to [File upload control](/docs/platform/controls/input/file-upload/).
- **Text box field** - used to store the generated anonymous link which can be shared with other users. To learn how to create a text box field go to [Text box control](/docs/platform/controls/input/textbox/).
- **Text box or Number field (optional)** - allows you to determine  the duration of the link in hours. To learn hot to create a number field go to [Number control](/docs/platform/controls/input/number/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **File management** > **Create a file anonymous link**.

3. In the **Edit rule - Create a file anonymous link** dialog box, give the rule a title in the **Title** field.

   ![Edit rule -Create a file anonymous link](/images/anonymous-file-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Select a file field to create anonymous link(s) for** - select the field that contain the file that you want to create the link for.
   - **Link duration in hours (Default is 6 hours)** - an optional field indicating the link expiry in hours.
   - **Select a filed to store resulting anonymous link(s)** - field to store the generated link.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- When sharing an anonymous link with someone, use the send email rule and attach the link in the body of the email. Make sure to generate the link before sending the email.
- To make the rule versatile with setting the duration time, create a text box or a number field and select it in the **Link duration in hours** field.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Table rules go to [Table rules](/docs/platform/rules/tables/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
