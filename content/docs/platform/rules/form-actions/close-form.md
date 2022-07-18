---
title: "Close form"
weight: 5
---



The **Close form** rule closes the form to allow users to navigate to another resource. This rule is automatically attached to **Close**, **Submit** and **Save** buttons which are added to forms by default. 

###### 

### When to use

Together with the **Submit**, and **Save** rules, the **Close form** rule forms the shutdown procedures for forms and should not be deleted from **Submit**, **Save** or Close buttons.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



### How to use

By default all forms come with a Close button, and therefore a **Close form** rule however, you can set a close rule yourself, and redirect the user anywhere with the Close rule. To do so:

1. Select a field to attach the rule to.

2. Click on **Add a rule** > **Form actions** > **Close form**. 

3. In the **Edit rule - Close form** dialog box, give the rule a **Title**. 

4. Select the action you want to execute after closing the form.

5. Auto will redirect the user to the last location they were before opening the form.

6. Return to a dashboard will redirect the user to a dashboard of your choice

7. Return to URL will redirect the user to any URL specified

**Note**: You cannot use Close form and Go to form in the same button.



