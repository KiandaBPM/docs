---
title: "Update user profile property"
weight: 4
typora-root-url: ..\..\..\..\..\static
---

This rule is used to update a property in a user profile.

![Update user property dialog box](/images/updateuserproperty.png)

### When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

### How to use
To update the phone number for a given user:
1. Before adding the rule, add a text field: Click on Controls > Input > Text and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to Phone. 
2. Select the 'Submit' button.
3. Administration > Add a rule > Update user property.
4. Under Action, select Current user.
5. For Field to store user profile property, choose the new Phone field.
6. From the drop down list, choose the user property to update i.e. Phone number.
7. Click OK.

