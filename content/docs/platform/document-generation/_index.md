---
title: "Document generation"
weight: 9
typora-root-url: ..\..\..\..\static
---

**Document generation** refers to the use of Kianda Add-ins for Word, and also Excel, that you can use to **generate reports** within Kianda processes and **populate** the reports with **data captured** within each process instance. This could be useful, for example, for inspection reports where a report template can be used to show the information the engineer input to a **Kianda form** during his inspection. Each time an inspection is performed, a report is generated based on a Word template and the report shows the relevant information that was captured during that particular inspection.

*Microsoft Word template with Kianda form fields*

![MS Word template containing Kianda form fields](https://academy.kianda.com/wp-content/uploads/2022/04/word-template.gif)

In the example above, a report will generate data pulled from a Kianda process instance (record) that contains the date, company and location data within an ‘Inspection Form’ and a ‘Request Form’. To create this kind of template, you can use a **Kianda Add-in** in Word to link your document to your Kianda process.

#### Installing Kianda Add-in to Word or Excel

The example below steps through how to use the Kianda Add-in for Word, however the same steps apply to get started with the Kianda Add-in for Excel.

1. Create a template outline in Microsoft Word.

2. Click on the **Insert** tab > **Get Add-ins**

   ![Get add-ins](/images/word-get-add-in.jpg)

3. Search for **Kianda**.

4. Click on **Add**, then **Continue** and click on the **Home** tab. The **Show Kianda Taskpane** should be added to your ribbon.

5. On the right-hand side of the Home tab, click on the **Kianda Add-in**.

   ![Kianda button in word](/images/word-kianda-add-in-button.jpg)

6. In the Kianda pane log in using your Kianda **username** and **password**.

   ![Kianda add-in login](/images/kianda-add-in-login.jpg)

7. From the drop-down list under **Login to Kianda**, select your Kianda subscription and press **Continue**. Note that all of your subscriptions will be available in the drop-down. Make sure to select the correct one when creating you template.

   ![Kianda add-in subscription selection](/images/kianda-add-in-select.jpg)

After you have installed the Kianda add-in and successfully logged into your subscription, you are now ready to create templates for Word document or Excel workbook files. To learn how to create templates using Excel or Word go to:

- [Word document add-in](/docs/platform/document-generation/word-document-add-in/).
- [Excel workbook add-in](/docs/platform/document-generation/excel-workbook-add-in/).

