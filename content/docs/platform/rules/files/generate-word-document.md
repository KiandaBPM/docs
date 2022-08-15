---
title: "Generate Word document"
typora-root-url: ..\..\..\..\..\static
weight: 3
---

## Introduction

This rule generates a Word document from data **stored in the process** using a Word DOCX template. The Word **template** needs to be **pre-created** before using this rule and must be **attached to a file field**, this way the rule will know which template you want to use when creating the document. The **Generate** **Word document** rule can also convert the Word document into a PDF right after generating the document. 

## When to use 
Use this rule when your process requires **dynamic document generation** with high fidelity. This rule will use a **Word template** previously mapped with **smart tags** using the Kianda task pane to generate a document containing the form captured from the process or data source.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Generate Word document** rule, in your process you need to have created at least one or more forms. The rule also requires **two file fields**, one for storing the Word template and the other for storing the generated Word document or PDF. To learn how to add a file go to [File upload control](/docs/platform/controls/input/file-upload/).

- **File field** **(Template)** - used as a container to store the Word template used to generate the Word document.
- **File field** **(Generated Word Document)** - used as a container to store the generated Word document.

A Word template that is used to generate the Word document also needs to be **pre-created** using the Kianda add-in for Word. You can make each generated Word document very dynamic by using the smart tags that Kianda add-in uses to retrieve information for your form fields and places the values into the word document when generating it. To learn more about how to install and use Kianda add-in, go to [Word document add-in](/docs/platform/document-generation/word-document-add-in/).

## How to get started
1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **File management** > **Generate Word document**.

3. In the **Edit rule - Generate Word document** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - copy file](/images/word-doc-rule-edit.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Select a document template** - select a file field that stores the word template. Your template can pull all values from **Input** fields in the **Controls** section of Kianda. For example if a text box field contains "This is a test" text, the value pulled into the generated word document is "This is a test", see image below:

     ![word document example](/images/word-doc-fields.jpg)

   - **Select a document destination** - select a file field that will store the generated word document.

   - **Convert to PDF** - radio button list which indicates whether you want to convert the generated document into a PDF file or not.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- When using this rule, create a **utility panel** and make it **invisible** to other users. You can then **move** the Word template file filed and the generated word document file field inside the utility panel. This way other users will not be able to see the **unnecessary** file fields and will not be able to **tamper** with them.
- You can use the **Convert to PDF** function of the rule to convert the generated word document into a PDF file **instead** of using the **Convert to PDF rule** which is also available in the **File management** rules.

### What’s next ![Idea icon](/images/18.png)

To find out more about other File management rules go to [File management rules](/docs/platform/rules/files/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

