---
title: "Copy file"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

## Introduction

The **Copy file** rule allows you to **copy a file** from one field in your form into another field in a different form. You can use this rule to copy files from **one datasource into another**, by having the **destination of each file field different**. For example having the datasource destination of the original file that you want to copy set to your local **File system**, and the destination of the file field that you are copying into is set to a **SharePoint** datasource, see the gif below as an example:

<img src="/videos/gifs/common/copy-file.gif"/>

## When to use 

Use this rule when you need to copy files from one form to another or to transfer files from one datasource into a different one.

You can add this rule:
- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Copy file** rule, in your process you need to have created at least one or more forms. The rule also requires two file fields in order to select the original file and the other is used to store the copied version. To learn how to add a file go to [File upload control](/docs/platform/controls/input/file-upload/).

- **File field** **(Original version)** - used to hold the file that you want to copy.
- **File field** **(Copied version)** - used to store the copied version of the original file.

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **File management** > **Create a file anonymous link**.

3. In the **Edit rule - Create a file anonymous link** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - copy file](/images/copy-file-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- When sharing an anonymous link with someone, use the send email rule and attach the link in the body of the email. Make sure to generate the link before sending the email.
- To make the rule versatile with setting the duration time, create a text box or a number field and select it in the **Link duration in hours** field.

​	