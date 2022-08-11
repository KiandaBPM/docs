---
title: "Copy file"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

This rule copies a file from one data location to another.  
![Send email rule dialog box](/images/copyfile.png)

###### When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

###### How to use
1. Before adding the rule, add two file fields: Click on Controls > Input > File and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to . 
2. Select the Submit button.
3. Add a rule > Data > Set form field.
4. Under Form field to set, select the new field called Status.
5. Under Value or expression, enter the status e.g. Complete.
6. Click on OK.

###### Notes
Copy files from one field to another
Allows copying files between datasources. Use this file together with two file fields to move files between two different file locations. Example to copy files between an on premises folder and a SharePoint folder		