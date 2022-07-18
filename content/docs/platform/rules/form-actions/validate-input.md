---
title: "Validate input"
weight: 1
typora-root-url: ..\..\..\..\..\static
---



The **Validate input** provides the ability to perform flexible data validation and prevents incorrect data submission. For example, this could be performed on a **Date of Incident** field, where the validation checks that the date entered is a past date. 

### When to use

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



### How to use

To showcase the **Validate input** rule in action, we will make a validation check on a **Date of Incident** field to see if the entered date is a past date.

To implement the rule:

1. Select a field to attach the rule to so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.

   ![Field selection](/images/examples-form-actions-select-field.jpg)

2. Click on **Add a rule** in the left-hand pane to expand the Rules menu.

3. Select **Form actions** to view the range of Input controls.

4. Click on **Validate input**. 

   ![Validate input selection](/images/add-rule-menu-validate-input.jpg)

5. In the **Edit rule - Validate input** dialog box, give the rule a **Title**. 

6. Click on **Edit conditions** ![Edit Conditions button](/images/editconditions.png) to add a validation condition. To learn more about conditions go to [Conditions](/docs/platform/rules/general/add-conditions/).

7. Select the field you want to validate. In this example it is the **Date of Incident** field.

8. Select type of validation to be performed. In this example it is the **Is After Today** validation.

   ![Validate input selection](/images/examples-condition-after-today.jpg)

9. In the **Edit rule - Validate input** dialog box, In the **Error message to display when rule conditions above apply** text box, type in the error message you want to be displayed if validation condition apply.

10. Select a form or field to **Trigger rules if validation condition apply** so that rules attached to that particular form or field are initiated if the condition(s) set in step 4 apply.

From the example mentioned above, we created a simple **Incident Form** in which a user needs to select a date of an incident. The image below displays the **Validate input** rule in action, where the date selected **Is After Today** therefore the condition is valid and an error message is displayed. 



### What's next ![Idea icon](/images/18.png) 

To learn the next rule from the **Form Action** set of rules, go to [Field Display mode](/docs/platform/rules/form-actions/field-display-mode/).