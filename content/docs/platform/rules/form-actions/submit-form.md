---
title: "Submit form"
weight: 3
typora-root-url: ..\..\..\..\..\static	
---

The **Submit form** rule marks the current form as complete and makes it read-only. By default on submit, the next form is activated. 	

 This rule is automatically attached to **Submit** button which is added to all forms by default. 

### When to use

This action is used to submit a form that you are working on, that is the 'current' form. 	

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



### How to use

To implement the rule:

1. Select a field to attach the rule to.

2. Click on **Add a rule** > **Form actions** > **Submit form**. 

3. In the **Edit rule - Submit form** dialog box, give the rule a **Title**. 

4. Under Action, **Set process status** choose from **Auto (Current form title)** or **Manual**. If you choose **Manual** then type in the desired text to appear to users in the **Status text after submit** field.

5. You can set conditions for the action to happen, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information.
