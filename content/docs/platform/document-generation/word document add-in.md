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

1. On the right-hand side of the Home tab, click on the **Kianda Add-in**.

   ![Kianda button in word](/images/word-kianda-add-in-button.jpg)

2. In the Kianda pane log in using your Kianda username and password, select your subscription and press **Continue**.

3. Click on the process link button ![Process link button](https://academy.kianda.com/wp-content/uploads/2022/02/process-link-button.gif) to get a dropdown list of Kianda processes that you have access to based on your role, for example Administrator or Designer.

4. Select a relevant process and a relevant form that you want to create a template for.

5. Position your cursor in the Word document at the point where you would like to add in form fields.

6. Select the Kianda form field you would like to add to the Word template. For example **Company** field in the **Request** form as shown below.

   ![Field select in Kianda add-in](/images/word-kianda-field-select.jpg)

7. Click on ![insert button](/images/insert-kianda-add-in.jpg) at the bottom of Kianda task pane to add the form field into the template

8. Repeat steps 9 - 11 for as many form fields as needed and format the document as necessary.

9. Save the template. You can then add in the template as a File field within the process in Kianda.

### List of field types accessible by Word add-in

You can use different types of input controls when creating your template for an Word document, the images below represents the value pulled from the form into a Word document for each of the input controls that are available in Kianda:

*Excel template used to represent all values from the above form.*

![Excel template](/images/word-add-in-template.jpg)

*Word document result for the example values from the above form.*

![Excel workbook result from a process instance](/images/word-add-in-result.jpg)

- **Text box control** - retrieves the value from the text box into the place that the smart tag was inserted.

- **List control** - retrieves the value from the list field into the place that the smart tag was inserted.

- **Number control** - retrieves the value from the number field into the place that the smart tag was inserted.

- **Date control** - retrieves the date from the date field into the place that the smart tag was inserted.

- **Table control** - retrieves the values for each row inside of the table. Note that when the smart tag is inserted, extra rows will appear with the same smart tags, as shown in the image below:

  ![Word table smart tag](/images/word-add-in-table.jpg)

  You need to delete all extra rows that appear and only leave one, as shown in the image below:

  ![Word table smart tag](/images/word-add-in-table2.jpg)

- **File control** - retrieves the **hyperlink** to the file that is stored in the file field. When you click on the file, it will open it in browser.

- **User picker control** - retrieves the **name** of the user as a value.

- **Toggle control** - retrieves a **No** value when the toggle is turned **off**, and a **Yes** value when the toggle is turned **on**.

### What's next ![Idea icon](/images/18.png) 

With Kianda word add-in you can create templates which can be then used to generate dynamic word documents from the created template, to learn more how to generate a word document go to [Generate word document](/docs/platform/rules/files/generate-word-document/).

There is a Kianda Add-in for Excel that is added in the same way as the Kianda Add-in for Word. Usage is very similar allowing you to connect an Excel spreadsheet to Kianda processes to create a template that can be used within processes. To learn more about adding Kianda to excel go to [Excel workbook add-in](/docs/platform/document-generation/excel-workbook-add-in/).

