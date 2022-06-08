---
title: "Generate excel workbook"
typora-root-url: ..\..\..\..\..\static
---

This rule generates an Excel workbook from data stored in the process using a template.  
![Send email rule dialog box](/images/generateexcelworkbook.png)

## When to use 
Use this rule to dynamicaly generate excel workbooks based on form or process data. This data can be available inside tables or in any field

Associate this rule to any form element.

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to use

###### How to use

To generate an Excel workbook from data stored in a process:

1. Before adding the rule, add two file fields: Click on Controls > Input > File and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to . 
2. Select the Submit button.
3. Add a rule > Data > Set form field.
4. Under Form field to set, select the new field called Status.
5. Under Value or expression, enter the status e.g. Complete.
6. Click on OK.





