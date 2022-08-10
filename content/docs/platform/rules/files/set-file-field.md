---
title: "Set existing file field"
typora-root-url: ..\..\..\..\..\static
weight: 5
---

This rule enables to construct the file field reference based on provided file URL path
![Send email rule dialog box](/images/setexistingfile.png)

### When to use 
Use this rule when your process requires you to bring an existing file dynamically into the form without having the user uploading such file. For example if proving a mechanism to allow the end user to search for file(s) you might use the results of this search as input of an existing file field based on displayname and file url.

Add this rule to any form component.

### How to use

1. Before adding the rule, add two file fields: Click on Controls > Input > File and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to one of desired choice. 
2. Select the Submit button.
3. Add a rule > Data > Set form field.
4. Under Form field to set, select the new field called Status.
5. Under Value or expression, enter the status e.g. Complete.
6. Click on OK.
