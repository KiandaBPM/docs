---
title: "Lookup user by profile property"
---



This rule is used to look up a user using one of the properties in their profile such as first name, last name, email, department etc..  	

![Look up user by property dialog box](/images/lookupuserbyproperty.png)

### When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)


### How to use
To look up a user by first name:
1. Before adding the rule, add a text field to store the First Name and a user picker field to store the User:
- Click on Controls > Input > Text and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to First Name.  
- Click on Controls > Input > User picker and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to User.  
4. Select the 'Submit' button.
5. Administration > Add a rule > Lookup user property.
6. Under Action, select Type of user as Person.
7. For User property to locate user by, choose First Name.
8. For Field value or text, select the First Name field.
9. For User field to store lookup result, choose the User field.
9. Click OK.


