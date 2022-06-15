---
title: "Show, hide or disable"
weight: 1
typora-root-url: ..\..\..\..\..\static
---

Use the **Hide or Disable** rule to hide, disable, show or enable a field or a component in a Kianda form. This rule is very useful if you want different parts of a form, a complete form or multiple forms, to appear or hide based on how the user of the form completes the form.  

There are seven possible actions within this rule that can be applied to fields or forms:

- Hide from the user (not visible)
- Show to the user (visible)
- Disable for the user (not enabled)
- Enable for the user (enabled)
- Toggle visible: toggle between visible and not visible
- Toggle enable: toggle between enabled and not enabled
- Hide and clear: hide from the user (not visible) and clear the contents



## When to use

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to use

To dynamically *hide* a field or component:
1. Choose a field.  
2. Select Add a rule > Workflow > Hide or disable.
3. Click on Edit condition and add a condition.
4. Under Action, select a field or component to be made not visible.
5. Choose Hide from the drop down list.
6. Under Add otherwise action, select the field or component to be made visible.
7. Choose Show from the drop down list.
6. Click OK.

The result is that a field or component will be made visible/not visible depending on the condition that has been set.

## Notes

It is not necessary to add a condition.  In this case the rule will be triggered automatically:  
- if the rule is applied to a *field*, then the rule will be triggered when the user enters a value in that field.  
- if the rule is applied to a *button*, then the rule will be triggered when the user clicks the button.
- if the rule is applied to a *form*, then the rule will be triggered when the form is submitted.
- if the rule is applied to a *process*, then the rule will be triggered on load.

If a rule causes a mandatory field (i.e. *Required* is ticked in the Field Properties) to be hidden or disabled, this will not stop the form from being submitted.



