---
title: "Set existing file"
typora-root-url: ..\..\..\..\..\static
weight: 5
---

## Introduction

The **Set existing file** rule allows a user to **create** a file and **assign** it into a **file field** based on a provided file **URL path**. For example if you have access to a file **stored** in the **cloud** and have the URL, you can use this URL to **download** the file from the internet and place it in a file field with a name. The **name** you give to the **downloaded** file must **contain the extension**, for example if the file stored in the cloud is a PDF file and you want the name of the file to be "Workbook", then you need to set the name of the file to `Workbook.pdf`. You must provide the **correct extension** for the file otherwise the created file will **not be downloadable.**

![Correct file extension](/images/set-file-extension.jpg)

### When to use 
Use this rule when your process requires you to bring an existing file **dynamically** into the form without having the user **uploading** such file. For example if proving a mechanism to allow the end user to search for file(s) you might use the results of this search as input of an existing file field based on display name and file URL.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Set existing file** rule, in your process you need to have created at least one or more forms. The rule also requires **one file field** in order to **store** the file which is created from the given URL.  

- **File field** **(required)** - used to store the created file from the given URL. To learn more on **File** fields go to [File upload control](/docs/platform/controls/input/file-upload/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **File management** > **Set existing file**.

3. In the **Edit rule - Set existing file** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - set existing file](/images/set-file-edit-rule.jpg)

4. f you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Set File** - file field used as a container to store the created file using the given URL.
   - **FileName field or text** - you can select a field within your form or type in text manually to represent the name you want your created file to have.
   - **File URL field or text** - you can select a field within your form or type in text manually to represent the URL used to create the file.

   Using a field for the name and a field for the URL will allow you to create a different file with a different name every time you use this rule, see the image below and note how the **File name** field corresponds to the created file in the **File** field:

   ![created file ussing fields](/images/set-file-result.jpg)

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- Create a **Text box field** that can be used to change the URL every time you want to create a file. This will make the rule dynamic and versatile. 
- Create another **Text box field** that can be used to change the name of the file every time you want to create it from a URL.

### What’s next ![Idea icon](/images/18.png)

To find out more about other File management rules go to [File management rules](/docs/platform/rules/files/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
