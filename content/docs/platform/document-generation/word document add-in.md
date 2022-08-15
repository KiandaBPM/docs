---
title: "Word document add-in"
weight: 1
typora-root-url: ..\..\..\..\static
---

## Introduction

You can **generate reports** within Kianda processes and **populate** the reports with **data captured** within each process instance. This could be useful, for example, for inspection reports where a report template can be used to show the information the engineer input to a **Kianda form** during his inspection. Each time an inspection is performed, a report is generated based on a Word template and the report shows the relevant information that was captured during that particular inspection.

*Microsoft Word template with Kianda form fields*

![Get add-ins](/images/word-kianda-example.jpg)

In the example above, a report will generate data pulled from a Kianda process instance (record) that contains the date, company and location data within an ‘Inspection Form’ and a ‘Request Form’. To create this kind of template, you can use a **Kianda Add-in** in Word to link your document to your Kianda process.

### Using the Kianda Add-in for Word

1. Create a template outline in Microsoft Word.

2. Click on the **Insert** tab > **Get Add-ins**

   ![Get add-ins](/images/word-get-add-in.jpg)

3. Search for **Kianda**.

4. Click on **Add**, then **Continue** and click on the **Home** tab. The **Show Kianda Taskpane** should be added to your ribbon.

5. Click on the **Kianda Add-in**.

   ![Kianda button in word](/images/word-kianda-add-in-button.jpg)

6. Log in using your username and password, select your subscription.

7. Click on the process link button ![Process link button](https://academy.kianda.com/wp-content/uploads/2022/02/process-link-button.gif) to get a dropdown list of Kianda processes that you have access to based on your role, for example Administrator or Designer.

8. Select a relevant process and a relevant form.

9. Position your cursor in the Word document at the point where you would like to add in form fields.

10. Select the Kianda form field you would like to add to the Word template. For example Company field in the Request form as shown below.

    ![Field select in Kianda add-in](/images/word-kianda-field-select.jpg)

11. Repeat for as many form fields as needed and format the document as necessary.

12. Save the template. You can then add in the template as a File field within the process in Kianda.

To watch a short video demonstrating each of the steps above and showcases the use of a template to produce a report in a sample inspection process, go to [Kianda Add-in](https://vimeo.com/696535028/ef00136ecd).

### What's next ![Idea icon](/images/18.png) 

With Kianda word add-in you can create templates which can be then used to generate dynamic word documents from the created template, to learn more how to generate a word document go to [Generate word document](/docs/platform/rules/files/generate-word-document/).

There is a Kianda Add-in for Excel that is added in the same way as the Kianda Add-in for Word. Usage is very similar allowing you to connect an Excel spreadsheet to Kianda processes to create a template that can be used within processes. To learn more about adding Kianda to excel go to [Excel workbook add-in](/docs/platform/document-generation/excel-workbook-add-in/).

