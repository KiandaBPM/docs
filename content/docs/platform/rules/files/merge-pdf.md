---
title: "Merge PDF"
typora-root-url: ..\..\..\..\..\static
weight: 6
---

## Introduction

The **Merge PDF** rule allows you to **combine** two or more `.pdf` files together. It is also possible to **combine** image files to the PDF file, for example `.png` or `jpg`. This rule can be useful when creating one large PDF document from smaller files. The generated file name will be the same as the first file used to merge, see image below for an example:

![Generated PDF file name](/images/merge-pdf-name.jpg)

## When to use 
Use this rule when your process requires you to merge **dynamically** two or more PDF files. For example **automatically** merge expense receipts submitted by users into a single PDF files containing all images or PDF receipts.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Merge PDF** rule, in your process you need to have created at least one or more forms. The rule also requires at least 3 file fields, which are used to select files that you want to select and a file to store the merged PDF. To learn how to add a file go to [File upload control](/docs/platform/controls/input/file-upload/).

- **File field** **(To be merged file #1)** - used to hold the first file that you want to merge.
- **File field** **(To be merged file #2)** - used to hold the first file that you want to merge.
- **File field** **(Merged PDF file)** - used to store the merged PDF version of the two files.

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **File management** > **Merge PDF**.

3. In the **Edit rule - Merge PDF** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - copy file](/images/merge-pdf-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Files to be merged (PDF OR Images)** - select a file field which contains a PDF file or an image. Note that in order to merge PDF and image files, your first merging file must be a `.pdf` file followed by other image files, see image below:

     ![PDF files merged with images](/images/merge-pdf-images.jpg)

   - **+Add more files** - you can choose to merge multiple PDF or image files together by clicking on **Add more files** button. You can also remove file fields by clicking on the **Bin/Trash** icon ![Bin/Trash button](/images/bin.png). Adding more file fields will allow you to attach more PDF or images files that you want to merged, see below image as an example:

     ![Multiple files to be merged](/images/merge-pdf-mulitiple-files.jpg)

   - **Merged PDF file** - select a file field from your process that you want to store your merged PDF file.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- When merging file with this rule, you need to place the `.pdf` file first followed by the image files.

### What’s next ![Idea icon](/images/18.png)

To find out more about other File management rules go to [File management rules](/docs/platform/rules/files/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
