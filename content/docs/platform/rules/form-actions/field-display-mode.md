---
title: "Field Display mode"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

The **Field display mode** rule temporarily changes the display mode of a field or form creating a temporary form or field display mode. This rule forces the display mode to override the automatically calculated display mode of fields and forms.		


## When to use

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## How to get started

To showcase the **Field display mode** in action, we will change the display mode of a user picker field to **Read mode** after a user has been chosen. To learn more about **User picker** field go to [User picker control](/docs/platform/controls/input/user-picker/).

To implement the rule:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Form actions** > **Field display mode**.

3. In the **Edit rule - Field display mode** dialog box, give the rule a title in the **Title** field.

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. To demonstrate how this rule works, we will add a condition to a field. Select the field you want the condition to be applied to. In this example it is the **Employee** field.

6. Select type of operator check to be performed on the condition. In this example it is the **Not blank** operator. Here we are checking whether the **Employee** field is **Not blank**.

   ![Edit conditions](/images/example-condition-field-display-mode.jpg) 

7. In the **Field or form** option, select the field you want the **Field display mode** rule to affect. In this example it is the **Employee** field.

8. Choose from **Edit mode** or **Read mode**.

   - **Edit mode** - allows the form or field to be edited.
   - **Read mode** - sets the mode of a form or a field to **Read-only**.

9. Click on **Add** to add as many fields or forms as needed.

   ![Edit rule dialog box](/images/examples-field-display-mode-fields.jpg)

	The video below demonstrates the **Field Display mode** rule in action, where the **Employee** field becomes **Read mode** after a user is selected. The 	**Date** field which was not editable changes to **Edit mode** after a user is selected. This is achieved by applying a condition to the **Employee** field. The condition checks if the **Employee** field is **Not blank**, therefore when a user has been selected this condition is valid, activating the **Field Display mode** rule.

<img src="/videos/gifs/examples/field-display-mode/field-display-mode2.gif"/>



### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg)beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

   

### User tip ![Target icon](/images/05.png)

- Form state (Edit / Read) will not be saved. It is recommended that display mode is reverted once no longer needed.

  

### What's next ![Idea icon](/images/18.png) 

To find our more about other form action rules go to [Form Action rules](/docs/platform/rules/form-actions/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
