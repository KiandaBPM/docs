---
title: "Excel workbook add-in"
weight: 2
typora-root-url: ..\..\..\..\static
---

## Introduction

You can **generate excel workbooks** within Kianda processes and **populate** the workbooks with **data captured** within each process instance. This could be useful, for example, when working with a lot of table data within Kianda. The add-in will **automatically** populate excel cells with the data from a table within your process. Each time value changes inside of a table, those values will be reflected in the Excel workbook every time you generate a new workbook.

### Using the Kianda Add-in for Excel

1. Create a template outline in Microsoft Excel.

2. Click on the **Insert** tab > **Get Add-ins**

   ![Get add-ins](/images/excel-get-add-ins.jpg)

3. Search for **Kianda**.

4. Click on **Add**, then **Continue** and click on the **Home** tab. The **Show Kianda Taskpane** should be added to your ribbon.

5. On the right-hand side of the Home tab, click on the **Kianda Add-in**.

   ![Kianda button in word](/images/excel-show-pane.jpg)

6. In the Kianda pane, log in using your Kianda username and password, select your subscription and press **Continue**.

7. Click on the process link button ![Process link button](https://academy.kianda.com/wp-content/uploads/2022/02/process-link-button.gif) to get a dropdown list of Kianda processes that you have access to based on your role, for example Administrator or Designer.

8. Select a relevant process and a relevant form that you want to create a template for.

9. Select a **cell** in the Excel workbook that you want to use to **store** the data from your process.

10. Select the Kianda form field you would like to add to the Excel template. For example **Population table** field in the **Generate Excel** form as shown below.

    ![Field select in Kianda add-in](/images/excel-field-select.jpg)

11. Click on **<-Insert** at the bottom of Kianda task pane to add the form field into the template. Note that when you select a **Table** into the template, only the **Title** columns appear. This is because the add-in will look for all rows with the specific column name and insert the values into the excel workbook. See below for an example:

    ![Table example - excel template](/images/excel-table-example.jpg)

    When you add in the above table into excel as a template **smart tag**, it will look as follows:

    ![excel table smart tag](/images/excel-table-template.jpg)

    The resulting excel workbook of the above table and template is shown below:

    ![excel table smart tag](/images/excel-table-result.jpg)

12. Repeat steps 9 - 11 for as many form fields as needed and format the workbook as necessary.

13. Save the template. You can then add in the template as a **File** field within the process in Kianda.

### What's next ![Idea icon](/images/18.png) 

With Kianda Excel add-in you can create templates which can be then used to generate dynamic Excel workbooks, to learn more on how to generate a Excel workbooks go to [Generate excel workbooks](/docs/platform/rules/files/generate-excel-document/).

There is a Kianda Add-in for Word that is added in the same way as the Kianda Add-in for Excel. Usage is very similar allowing you to connect a Word document to Kianda processes to create a templates that can pull data from specific process instances. To learn more about adding Kianda to excel go to [Word document add-in](/docs/platform/document-generation/word-document-add-in/).

