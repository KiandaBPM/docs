---
title: "Conditional logic"
linkTitle: "Conditions"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

Conditions are a key component of Kianda **rules**. They are the triggers that result in fully dynamic forms and add an important level of interactivity, creating pathways within a process based on user interaction. 

Conditions work on the 'if...then...else' principle: 'if' the condition exists 'then' an action happens, 'else' another action happens. There are three parts to applying a condition to a rule (depending on the rule that is used):

1. Create the **condition(s)**
2. Create the **action(s)** that will be applied as a result of the first condition being in place
3. Create the **otherwise action(s)** based on other conditions being in place

For example, let's take a simple Training Request and Approval Process, whereby an employee fills out a **request form**, the details of which are sent to a manager for review in an **approval form**. In this approval form, the manager can either a) approve the request with a signature or b) not approve the request and provide feedback on why. 

***Training Process flowchart***

![Training Process flowchart](/images/trainingflow.gif)

A condition is created based on the **Manager Decision radio list**:

1. **Condition**: If the decision is 'Yes'
2. **Action**: Then the Signature button appears
3. **Otherwise action:** Else the decision is 'No' and the Feedback text box appears

One of the most commonly used rules that uses conditions is the **Workflow** rule **Hide or Disable**. This is used as an example in the video and in the [Getting started](#getting-started-with-conditions) section below.

***Using conditions in rules: Example of Hide or disable***

<video width="100%" style="width:100%" controls>
    <source src="/videos/Conditions.mp4">
    Your browser does not support the video tag.
    </source>
</video>



## Getting started with conditions ##

Conditions are recognisable in Kianda from the **Conditions** button ![Conditions button](/images/condition.png) found in rules and dashboards. 

To create a condition:

1. Select a form or forms, field or fields and then, a rule, for example Hide or disable, as found in the **left side menu** > **Add a rule** > **Workflow** > **Hide or Disable**. 
2. Click on **Edit conditions**.
3. Click on **Add a conditions group**.
4. In the **Edit conditions dialog box**, choose from the elements below, by drilling down to the form(s) or field(s) that you want to apply the rule to.

***Condition elements***

![Condition elements](/images/conditions3.gif)

In the case of **multiple conditions**, you can use **And** or **Or** to create compound conditions.

***Compound conditions***

![Compound conditions](/images/editconditions.gif)

5. Click on **OK**.
6. Create the **actions** and, where applicable, otherwise actions. The action will depend on the rule that is chosen. For example, for the **Workflow rule**, **Hide or Disable**, click on the field under **Action** and choose the form(s) or field(s) where you want an action applied.


***Action elements for Hide and Disable***

![7 actions for Hide or Disable](/images/hideoptions.gif)

7. Then click on the field for **actions** and choose one of seven possible actions to apply.

   The actions within **Hide or disable** are: 

   a) **Hide** will hide a process element (forms or fields) from view

   b) **Show** will show the element

   c) **Disable** blocks a user from editing an element

   d) **Enable** allows a user to add a value to an element

   e) **Toggle visible** will toggle between showing an element or not, based on subsequent clicks of a field that the rule is applied to

   f) **Toggle enable** will toggle between allowing an element to be edited or not, based on subsequent clicks of a field that the rule is applied to

   g) **Hide and clear** will allow you to hide a process element and clear the details. For example, if a toggle button has this rule applied, with an **otherwise action** of **show** as actions on a textbox, then if one value is chosen on the toggle button, the user is allowed enter details into the textbox, otherwise the field is hidden and cleared of data so that no data can be retrieved; this may be useful for sensitive information like a social security number on a form.

8. Click on **+ Add** to add more actions. 

8. Click on **Add otherwise action** to add more actions based on other values for the condition.

The video demonstrates how a condition works within the **Hide and Disable** rule and highlights that multiple groups of conditions can be used to impact multiple actions to create highly sophisticated form interactions. 



### User tip  ![Target icon](/images/05.png)

You can use rules to create **actions** **without conditions too**. In this case, the rule will simply execute - for example, when the form or field is clicked on.





### What's next  ![Idea icon](/images/18.png)

To learn more about controls (fields) go to [**Controls**](/docs/getting-started/create-first-process/plan-your-process/controls/). 

To find out more about how expressions are used in rules go to [**Expressions**](/docs/getting-started/create-first-process/plan-your-process/expressions/). 



### **To return to the previous pages click on the links below**  ![Idea icon](/images/10.png)

- [**Plan your process**](/docs/getting-started/create-first-process/plan-your-process/) 

- [**Rules**](/docs/getting-started/create-first-process/plan-your-process/rules/)

  

