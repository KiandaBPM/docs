---
title: "Generate excel workbook"
typora-root-url: ..\..\..\..\..\static
weight: 4
---

## Introduction

This rule generates an Excel workbook from data **stored in the process** using a Excel `.xlsx` template. The Excle **template** needs to be **pre-created** before using this rule and must be **attached to a file field**, this way the rule will know which template you want to use when creating the workobook. 

## When to use 

Use this rule when your process requires **dynamic workbook generation** with high fidelity. This rule will use an **Excel template** previously mapped with **smart tags** using the Kianda task pane to generate a document containing the form captured from the process or data source. Use this rule with combination of the **Table** control to output big tables and transfer them into the Excel workbook.

You can add this rule:

- [x] to a field
- [x] to a form
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Generate Excel workbook** rule, in your process you need to have created at least one or more forms. The rule also requires **two file fields**, one for storing the Excel template and the other for storing the generated Excel workbook. To learn how to add a file go to [File upload control](/docs/platform/controls/input/file-upload/).

- **File field** **(Template)** - used as a container to store the Excel template used to generate the workbook.
- **File field** **(Generated Excel workbook)** - used as a container to store the generated Excel workbook.

A Excel template that is used to generate the Excel workbook also needs to be **pre-created** using the **Kianda add-in for Excel**. You can make each generated Excel workbook very **dynamic** by using the **smart tags** that Kianda add-in uses to **retrieve** information for your form fields and places the values into the Excel workbook when generating it. To learn more about how to install and use Kianda add-in in Excel, go to [Excel workbook add-in](/docs/platform/document-generation/excel-workbook-add-in/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **File management** > **Generate excel workbook**.

3. In the **Edit rule - Generate excel workbook** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - copy file](/images/generate-excel-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Excel workbook template** - select a file field that stores the excel template. Your template can pull all values from **Input** fields in the **Controls** section of Kianda. For example if a text box field contains "This is a test" text, the value pulled into the generated excel workbook is "This is a test".

     ![word document example](/images/generate-excel-example.jpg)

   - **Generated workbook destination** - select a file field that will store the generated word document.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- When using this rule, create a **utility panel** and make it **invisible** to other users. You can then **move** the Excel template file filed and the generated excel workbook file field inside the utility panel. This way other users will not be able to see the **unnecessary** file fields and will not be able to **tamper** with them.
- Use this rule when working with **tables** inside of Kianda. It is very easy to create an excell spreadshet by **tranfering data** from your processes into Excel using the **Excel add-in**. Use **smart tags** from the add-in to add a table, the data from your table will be transfered into the excel spreadsheet without manually typing them. See [Excel workbook add-in](/docs/platform/document-generation/excel-workbook-add-in/) for more detail.

### What’s next ![Idea icon](/images/18.png)

To find out more about other File management rules go to [File management rules](/docs/platform/rules/files/).

To find out more about other rules go to [Rules](/docs/platform/rules/).





