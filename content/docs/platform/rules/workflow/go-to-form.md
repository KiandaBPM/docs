---
title: "Go to form"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

The **Go to form** rule is used to control how a user moves between forms.  Normally control passes to the next form and the user is not allowed to go back to the previous form.  The Go to form rule allows you to redirect the user to any form.  The user can then navigate back and forth between those forms.

![Go to form rule dialog box](/images/Gotoform.png)

## When to use

This rule may only be added to a button.

> **Warning** 
>
> The Close form and Go to form rules *cannot* be applied to the same button as both rules control which form comes next.  
>
> The Save form rule must be used *and* must appear before the Go to form rule in the list of rules.

## How to use

To make the user go to a particular form:
1. Click on a button.
2. Select Add a rule >Workflow > Go to form.
3. Under Action, choose the destination form from the list in the Select form field.
4. Select Edit mode as the Display mode so that the user will be able to edit the destination form.
5. Choose Yes (for Set as current form) to make the destination form the next active form.  This will enable previously completed forms so that the user can navigate between these forms. 
6. Click OK.

## Notes

Display mode:
- Auto - the display mode will be either edit or read as determined by the system.  If the destination form is the next form in the process workflow, and if the user is an owner of the form, and the form is not completed, then the form will be displayed in edit mode.  Otherwise the form will appear in read mode.
- Edit mode - the user will be able to edit the destination form.
- Read mode - the user will be able to read (but not edit) the destination form.

Set as current form: 
- Setting this flag to Yes will change the flow of control in your process.  Check the current workflow in your process before making this change.