---
title: "User alert"
typora-root-url: ..\..\..\..\..\static
weight: 4
---

This rule sends an alert to a user who can then open an instance of a process.  A user can view all alerts by clicking on the bell icon on the top right-hand corner of their screen.

![User alert dialog box](/images/useralert.png)

### When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

### How to use
To send an alert to the current user:
1. Select the Submit button
2. Add a rule >Communications > User Alert
3. Select Current user.
4. Enter a title for the Alert.
5. Enter a message to be displayed to the user.
6. Select a colour to indicate the Alert Status.
7. Choose an Alert icon e.g. flag.
8. Click on OK. 



### Notes

**Send alert to:**
| Option | Notes                                                |
| :---------- | :----------------------------------------------------------- |
| Any user | Select from any user in the system. |
| Current user | The current user will get an alert. |
| Defined in a user field | Select a user picker field which stores the user to receive the alert. |
| Form owner(s) | Select the form and the owner(s) will receive the alert. |

**Process ID:**
When the user receives an alert and clicks on it, he will open the process instance defined in the Process ID field.

* If left blank, this field will contain the current Process ID.  

* A different process ID can be added by typing or copying in the ID (or if the Process ID is stored in a field, then that field can be selected).  
