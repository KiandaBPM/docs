---
title: "Set form field rule"
linkTitle: "Set form field"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

This rule is used to set the value of a field (or fields) in a form. You can also use this rule to copy content between fields or to apply an expression to a given field. 	

![Set form field dialog box](/images/setformfield.png)

## When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to use
Some examples of the usage of this rule are given below.

**To set the value of a field:**

1. Before adding the rule, add a text field: Click on Controls > Input > Text and drag the field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title to Status. 
2. Select the Submit button.
3. Add a rule > Data > Set form field.
4. Under Form field to set, select the new field called Status.
5. Under Value or expression, enter the status e.g. Complete.
6. Click on OK.

**To empty a field:**
1. Select the Submit button.
2. Add a rule > Data > Set form field.
3. Under Form field to set, select the field to be emptied.
4. Under Value or expression, add a few characters and then delete them all. If you skip this step, then you will get an error message because this is a mandatory field.
5. Click on OK.

**To copy content between fields:**

1. Find two fields on the current form where one field is the source of the content and the other field is the destination for the content.
2. Select the Submit button.
3. Add a rule > Data > Set form field
4. Under Form field to set, select the destination field.
5. Under Value or expression, select the source field.
6. Click on OK.

**To add two values together (using an expression):**

1. Before adding the rule, add three number fields: Click on Controls > Input > Number and drag a number field onto the form. Edit the field by clicking on it and then clicking the pen icon. Change the Title of the field to First Number.  Change the Name(unique)  to firstNumber. Repeat for Second Number and Result.
2. Select the Second Number field.
3. Add a rule > Data > Set form field.
4. Under Form field to set, select the Result field.
5. Under Value or expression, open the Expression builder by clicking on the button with 3 black dots.
6. In the Expression builder:
   - Click on Reference to view all of the options.  Mathematical operations such as '+' are available.  
   - Under Add field to expression, select the First Number field.  Click on Add to Expression. 
   - In the Expression window, enter the '+' symbol. 
   - Under Add field to expression, select the Second Number field.  Click on Add to Expression.  
   - Click on OK.
7. Under Value or expression, check the expression is [firstNumber] + [secondNumber].
8. Click on OK.







