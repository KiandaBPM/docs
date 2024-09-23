---
title: "Delete form"
weight: 6
typora-root-url: ..\..\..\..\..\static
---

The **Delete form** rule marks a process instance to be deleted. This rule can be used for example for General Data Protection Regulation (GDPR) reasons whereby a process instance with personal data is deleted.  

## When to use

Use this rule with the **Save form** rule to commit the deletion request in the server.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## How to get started

As mentioned in the example above, we will use this rule to delete personal data for GDPR reasons. 

To implement the rule:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).
2. Click on **Add a rule** > **Form actions** > **Delete form**. 
3. In the **Edit rule - Delete form** dialog box, give the rule a **Title**. 
4. There is no action on the Delete form rule that can be specified. The internal action of this rule is to delete the process instance if a condition becomes true, see [Conditions](/platform/rules/general/add-conditions/) for more information.
5. To apply a condition to the **Delete form** rule, in the **Edit rule - Delete form** dialog box click on **Edit conditions** ![Edit conditions button](/images/editconditions.png).

### GDPR example use case

In this example we have two forms:

- **Personal Information** form in which some personal data of an employee are being stored.

  ![Personal information form](/images/examples-form-personal-info.jpg)

- **Company feedback** form in which the employee can give feedback of the company and decide whether to keep personal information in the company system or delete them.

  ![Company feedback form](/images/examples-form-company-feedback.jpg)

In this example we will add the **Delete form** rule to the **Submit** button of the **Company feedback** form. 

1. Follow steps 1 through 5 above to add the rule to a desired field. In this example it is the **Submit** button in the **Company feedback** form.

2. In the **Edit conditions** dialog box select a field for the condition check. In this example it is the **Delete personal data for GDPR reasons** field.

3. Select desired operator for the condition . In this example it is the **Equals** operator.

4. Choose a value for the conditional check. In this example type in **Yes**. 

   ![Delete data condition](/images/examples-condition-delete-form.jpg)

The image below presents deleted process instances. As shown in the **Delete personal data for GDPR reasons** column, there is no **Yes** values as all those processes were deleted from the system.

![Deleted processes - list widget](/images/examples-delete-form-list-widget.jpg)

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

   

### User tip ![Target icon](/images/05.png) ###

- When adding the **Delete form** rule to a process, make sure to change the rule order of execution of the **Delete form** to be after **Submit form**. Remember that you can't submit a deleted form.




### What's next ![Idea icon](/images/18.png) 

To find our more about other form action rules go to [Form Action rules](/platform/rules/form-actions/).

To find out more about other rules go to [Rules](/platform/rules/).
