---
title: "Export table as CSV"
typora-root-url: ..\..\..\..\..\static
weight: 5
---

## Introduction

The **Export CSV** rule allows you export a specified table from within your process into a CSV (Comma Separated Values) file. In the edit rule dialog box you can format how each value is separated and which columns to include and exclude when exporting. Keep in mind when exporting a table into a CSV format, it will export data for the following field types:

- **Text box**
- **Number**
- **Date**

Any other field types will be ignored, for example all control types from within **Layout** and **Actions** will be ignored.

## When to use 

You can use this rule when you want to open the table with a notepad or excel. This rule is also useful when you want to share a table with other users, you can do that by exporting the table into a **File** field and attaching the file into an email using the **Send email** rule. To learn more about attaching a file into an email go to [Attachments](/docs/platform/rules/communications/send-email/#attachments).

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

For this rule to work there are a couple of prerequisites needed inside of your process:

- **Table** - needed to let the rule know which table will be used to export into the CSV file, for more detail on how to add a table go to [Table control](/docs/platform/controls/input/table/).
- **File** - needed as a container to hold your exported CSV file. When the table is exported into this file field, you can downloaded by clicking on the file name.  For more detail on how to add a file field go to [File upload control](/docs/platform/controls/input/file-upload/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Table** > **Export CSV**.

3. In the **Edit rule - Export CSV** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Export CSV](/images/export-csv-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details. It is a good idea to add condition to this rule to prevent exporting incomplete tables.

5. Under the **Action** section fill out the following:

   - **Origin table** - field that allows you to select the table you want to target when exporting into a CSV file. When selecting a table, new options appear:

   - **Columns to export** - this is a checklist allowing you to select or deselect columns from a table that you want to keep or dismiss from exporting into the CSV file. These fields will correspond to field names given in your table, see below image for an example.

     *Table with three columns will correspond to **Columns to export** option in the export CSV edit rule dialog box.* 

     ![Export to export checklist](/images/export-csv-columns.jpg)

   - **CSV separator** - the default separator is a comma ` ,` but you can set it to any character, number or symbol you want. Keep in mind that the separator fields separates each column of a row. For example you can have a file that looks as follows when setting this field with a semi-colon `;`as shown with Notepad below:

     ![Semicolon separated csv file](/images/export-csv-semicolon.jpg)

     Keep in mind when exporting a table using a separator other than a comma `,` and open it in Excel, the data will not be formatted correctly within Excel as it recognises columns when only separated by commas `,` for example the above file is opened with Notepad while the image below shows the same exported file opened with Excel:

     ![Semicolon separated csv file](/images/export-csv-semicolon-excel.jpg)

   - **Include header row** - radio button asking whether to include the header row meaning that the column title will be included or not.

   - **Destination file field** - field specifying the container which hold the csv file of the exported table. When the CSV file is present in the file field, the name of the file will be the same as the title of the table specified to export. For example if the title of a table is **Countries**, the file will be called **Countrie.csv**. You can download the file by clicking on the file name.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.


### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other Table rules go to [Table rules](/docs/platform/rules/tables/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
