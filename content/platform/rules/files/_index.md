---
title: "File management rules"
typora-root-url: ..\..\..\..\..\static
weight: 5
---

**File management** rules is one category of [rules](/platform/rules/) to enable operations such as the generation of Word documents, conversion to PDF format and merging PDF files together. These operations are useful when creating Word/Excel where the structure of those documents is the same for every instance but values are different. You can also use the **File management** rules for creating anonymous links which give access to files without permissions.

Take an example of a **Create a file anonymous link** rule. Implementing this rule will result in a **randomly generated link** which will lead to a file that you want to share. This link can be opened in **any browser** and can be **accessible** by anyone and there is **no need for authentication** when opening the link. You can also set the expiry time of the created link which will cause the link not to exist after the specified time. See images below for an example of the **Create a file anonymous link** rule:

![File management rules](/images/file-managemt-rules-example.jpg)

## Getting started with File management rules ##

If you go to **Administration** > **Designer** and click on a process or create a new process, then click on **Add a rule** the **File management** rules are found in the left-hand pane when you click on **File management**.

![File management rules](/images/file-managemt-rules.jpg)

There are seven types of **File management** rules as follows:

- **Copy file** - allows copying files between datasources. Use this file together with two file fields to move files between two different file locations. For example to copy files between an on premises folder and a SharePoint folder.

- **Convert to PDF** - this rule allows the conversation of DOCX and DOC files into PDF format.

- **Generate word document** - this rule generates a Word document from data associated with a process instance using a user-designed template.

- **Generate excel document** - this rule generates an Excel workbook from data associated with a process instance using a user-designed template.

- **Set existing file** - this rule is used to make an existing file accessible by a link, available within a configured file field. For example when you have access to a file through a link, you can use this link to store the file in a file field within your process.

- **Merge PDF** - this rule allows you to merge two or more PDF files into a single PDF file. It also allows you to merge image file such as PNG or JPG to an existing PDF file.

- **Create a file anonymous link** - this rule generates file links that can be shared anonymously with external users. No authentication is required when opening the anonymous link to a file.

  

### What's next  ![Idea icon](/images/18.png) ###

To read more about each of the rule types go to the links below:
