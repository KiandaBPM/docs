---
title: "Field Display mode"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

The **Field display mode** rule temporarily changes the display mode of a field or form creating a temporary form or field display mode. This rule forces the display mode to override the automatically calculated display mode of fields and forms.		
**Note**: Form state (Edit / Read) will not be saved. It is recommended that display mode is reverted once no longer needed.

### When to use

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



### How to use

To showcase the **Field display mode** in action, we will change the display mode of a user picker field to **Read mode** after a user has been chosen. To learn more about **User picker** field go to [User picker control](/docs/platform/controls/input/user-picker/).

To implement the rule:

1. Select a field to attach the rule to so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.

   ![Field selection](/images/examples-form-actions-select-employee.jpg)

2. Click on **Add a rule** in the left-hand pane to expand the Rules menu.

3. Select **Form actions** to view the range of Input controls.

4. Click on **Field display mode**. 

   ![Validate input selection](/images/add-rule-menu-field-display-mode.jpg)

5. In the **Edit rule - Field display mode** dialog box, give the rule a **Title**. 

6.  The Field display mode rule does not need conditions to work. If **No** conditions will be applied, the rule will take affect on from load. In this example we will add a condition. Click on **Edit conditions** ![Edit Conditions button](/images/editconditions.png) To learn more about conditions go to [Conditions](/docs/platform/rules/general/add-conditions/).

7. Select the field you want the condition to be applied to. In this example it is the **Employee** field.

8. Select type of condition to be performed. In this example it is the **Not blank** condition. Here we are checking whether the **Employee** field is **Not blank**.

   ![Edit conditions](/images/example-condition-field-display-mode.jpg) 

9. In the **Field or form** option, select the field you want the **Field display mode** rule to affect. In this example it is the **Employee** field.

10. Choose from **Edit mode** or **Read mode**. In this example we choose **Read mode**.

11. Click on **Add** to add as many fields or forms as needed.

The video below demonstrates the **Field Display mode** rule in action, where the **Employee** field becomes **Read mode** after a user is selected. This is achieved by applying a condition to the **Employee** field. The condition checks if the **Employee** field is **Not blank**, therefore when a user has been selected this condition is valid, activating the **Field Display mode** rule.

<img src="/videos/gifs/examples/field-display-mode/field-display-mode.gif"/>



### What's next ![Idea icon](/images/18.png) 

To learn the next rule from the **Form Action** set of rules, go to [Submit form](/docs/platform/rules/form-actions/submit-form/).
