---
title: "Copy file"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

## Introduction

The **Copy file** rule allows you to **copy a file** from one field in your form into another field in a different form. You can use this rule to copy files from **one datasource** into **another**, by using **different** file fields for where you are copying **to** and **from**. For example if you want to copy a file from your **local file system** to a **SharePoint** location, set file fields for these locations, see gif below:

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

2. Click on **Add a rule** > **File management** > **Copy file**.

3. In the **Edit rule - Copy file** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - copy file](/images/copy-file-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Copy from** - select a file field which holds the file that you want to copy.

   - **Copy to** - select a file field which will store the copied version of the original file.

   - **Copy mode** - you have two options when copying a file from one field into another:

     - **Override** - when a file already exists in the **Copy to** file filed and the copy rule is triggered again, the **Copy to** file filed will get overridden by the new file from **Copy from**. See example below:

       ![Override example](/images/copy-file-override.jpg)

       When the **Copy file** rule is triggered, the file **README.md** in the **SharePoint datasource** field will be **overridden** by the **access_frame.png** file in the **Local file system** field. See below to see the result when **Copy file** rule is triggered again:

       ![Override example - result](/images/copy-file-override-result.jpg)

     - **Append** - when a file already exists in the **Copy to** file filed and the copy rule is triggered again, the **Copy to** file filed will be appended resulting in **multiple files** in the **Copy to** filed. See example below:

       ![Override example](/images/copy-file-override.jpg)

       When the **Copy file** rule is triggered, the file **access_frame.png** in the **Local file system** field will be **appended** to the already existing **README.md** file in the **SharePoint datasource** field. See below to see the result when **Copy file** rule is triggered again:

       ![Override example - result](/images/copy-file-append-result.jpg)

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- You can use this rule to copy files **from one datasource into another**. In the file field options of the **Copy to** field, set the **destination** to a datasource you want to copy a file into. To learn how to **change the destination** option in a file field go to [File upload control](/docs/platform/controls/input/file-upload/).

### What’s next ![Idea icon](/images/18.png)

To find out more about other File management rules go to [File management rules](/docs/platform/rules/files/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

​	