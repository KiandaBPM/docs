---
title: "Validate input"
weight: 1
typora-root-url: ..\..\..\..\..\static
---



The **Validate input** provides the ability to perform flexible data validation and prevents incorrect data submission. For example, this could be performed on a **Date of Incident** field, where the validation checks that the date entered is a past date. 

## When to use

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## How to get started

To showcase the **Validate input** rule in action, we will make a validation check on a **Date of Incident** field to see if the entered date is a past date.

To implement the rule:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Form actions** > **Validate input**.

3. In the **Edit rule - Field display mode** dialog box, give the rule a title in the **Title** field.

4. Click on **Edit conditions** ![Edit Conditions button](/images/editconditions.png) to add a validation condition. To learn more about conditions go to [Conditions](/docs/platform/rules/general/add-conditions/).

5. Select the field you want the condition check to be performed on. In this example it is the **Date of Incident** field.

6. Select type of validation to be performed. In this example it is the **Is After Today** validation.

   ![Validate input selection](/images/examples-condition-after-today.jpg)

7. In the **Edit rule - Validate input** dialog box, In the **Error message to display when rule conditions above apply** text box, type in the error message you want to be displayed if validation condition apply.

8. Select a form or field to **Trigger rules if validation condition apply** so that rules attached to that particular form or field are initiated if the condition(s) set in step 6 apply.

   For example if the **Submit** button is selected in this field, all its rules will be executed which means the **Submit process**, **Save process** and **Close** rules will be executed after a condition is met.

   ![Submit button rules](/images/submit-button-rules.jpg)

From the example mentioned above, we created a simple **Incident Form** in which a user needs to select a date of an incident. The image below displays the **Validate input** rule in action, where the date selected **Is After Today** therefore the condition is valid and an error message is displayed. 

![Incident form date error message](/images/examples-validate-input-error-message.jpg)

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg)beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

   

### User tip ![Target icon](/images/05.png) ###

- When validating a field, form or a process, think of conditions. When a condition is met, an action must follow. For example an error message is displayed (**Action**) when the wrong date is entered (**Condition**).

  

### What's next ![Idea icon](/images/18.png) 

To find our more about other form action rules go to [Form Action rules](/docs/platform/rules/form-actions/).

To find out more about other rules go to [Rules](/docs/platform/rules/).