---
title: "Generate word document"
typora-root-url: ..\..\..\..\..\static
---

This rule generates a word document from data stored in the process using a word DOCX template.  
![Send email rule dialog box](/images/generateworddocument.png)

## When to use 
Use this rule when your process requires dynamic document generation with high fidelity. This rule will use a word template previously mapped with smart tags using the Kianda task pane to generate a document containing the form captured from the process or data source.

Associate this rule to any form component. 

## How to use
Note: Kianda task-pane is required for mapping the field values to the word document.

###### How to use

To generate a word document from data stored in a process:

1. Before adding the rule, add two file fields: Click on Controls > Input > File and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to . 
2. Select the Submit button.
3. Add a rule > Data > Set form field.
4. Under Form field to set, select the new field called Status.
5. Under Value or expression, enter the status e.g. Complete.
6. Click on OK.



