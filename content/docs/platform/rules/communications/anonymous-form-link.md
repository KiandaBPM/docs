---
title: "Anonymous form link"
typora-root-url: ..\..\..\..\..\static
weight: 3
---

This rule creates a link to a form which can be sent to an external user.  The user can open the form without the need for authentication.  

![Anonymous form link dialog box](/images/anonymousformlink.png)



###### When to use 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)
###### How to use
To send an anonymous form link to an external user:
1. Before adding the rule, add a text field to store the anonymous link: Click on Controls > Input > Text and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to *Anonymous Link*.  Change the Name(unique) to *anonymousLink*.  
2. Select the Submit button.
3. Click on Add a rule > Communications > Anonymous form link.
4. Under Action, Select a form to be completed by an external user.
5. Select the Anonymous Link field where the link will be stored.
6. Enter a message for the external user.  This message will be displayed when they submit the form.
7. Click OK.
8. Select Add a rule > Communications  > Send email:
   a. Add the external user's email address under To:
   b. Add a Subject.
   c. Use the Expression builder to add [anonymousLink] to the Body of the email.
   d. Refer to the documentation for the Send email rule, if required.
9. Click OK.

The field used to store the Anonymous Link can be made invisible to the user of the current form. Go to the field properties and set the field to *not visible*.

###### Notes

*Each record or instance of a process can have only one active link.* If a second anonymous link is created for an instance of a process, the first link will not exist anymore.  Users clicking on the first link will get an error message.

| Link expire settings          | Options                                                      |
| :---------------------------- | :----------------------------------------------------------- |
| Never expires                 | The link will never expire.                                  |
| Expire after a number of uses | Add the number of uses before the link expires.              |
| Expire in time                | Give the number of days, hours, and minutes before the link expires. |

Hide form topbar: when selected, the tabs with the form names will not appear at top of the form opened by the external user.

Force log out: when set to Yes, the user will be logged out automatically.