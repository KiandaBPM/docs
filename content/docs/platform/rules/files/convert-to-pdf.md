---
title: "Convert to PDF"
typora-root-url: ..\..\..\..\..\static
weight: 2
---

The **Convert to PDF** rule allows you to convert a Word document (.doc or .docx) into a PDF (.pdf) file. This rule is very useful when sharing word documents using the **send email** rule, the **Convert to PDF** rule will convert a file into PDF which can be **attached** to an email. This will allow others to open the PDF file on any device.

## When to use 

You can use this rule when you need to convert a .doc or .docx file into a PDF. PDF files are very useful as they can be opened on any device. 

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Convert to PDF** rule, in your process you need to have created at least one or more forms. The rule also requires two file fields in order to select a **Word document** file and the other is used to store the **converted PDF version**. To learn how to add a file go to [File upload control](/docs/platform/controls/input/file-upload/).

- **File field** **(Word document)** - used to hold the word document file that you want to convert.
- **File field** **(Converted PDF file)** - used to store the converted PDF version of the original word document file.

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **File management** > **Convert to PDF**.

3. In the **Edit rule - Convert to PDF** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - convert to PDF](/images/convert-to-pdf-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Convert Word File** - used to hold the word document file that you want to convert.

   - **Converted PDF File** - used to store the converted PDF version of the original word document file.

      See below for an example of a word document before and after conversion, note the file extension in the **Word file** field before converting into a PDF:

     ![Convert to pdf before](/images/convert-to-pdf-example-before.jpg)

     Below is an image representing the result after converting the Word document file into a PDF, note the file extension in the **Converted PDF file** field:

     ![Edit rule - convert to PDF](/images/convert-to-pdf-example.jpg)

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- When converting files to a **PDF format**, you can set the **destination** of the **converted file field** to a location where you want to **store** the PDF. This will save you some time as you will not have to **download** the converted file because the **destination** that you choose in the file field will keep a separate copy.

### What’s next ![Idea icon](/images/18.png)

To find out more about other File management rules go to [File management rules](/docs/platform/rules/files/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
