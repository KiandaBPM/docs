---
title: "Form display modes"
linkTitle: "Form display modes"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

Remember there are three principles to consider when working with forms:

- **Display mode**: **Form users** can either use forms in **edit** mode or **read** mode. Edit mode means that users can submit information, while read mode means that users can only view forms. The latter may be useful for example for certain staff to review feedback in a form, but not be able to edit/update it.
- **Form owner**: The **default owner** is the person or group that the form is assigned to **when the the form is created**. By default, only this person or group **can edit the current form**. All other users can only view forms in read mode. The default owner however can reassign forms to other individuals and/or groups.
- **Current form**: Typically there are several forms in a process, and only the form that has the status ‘**current form’** is **editable**. However, in a complex multi-step process, other forms can be configured to **activate with** the current form, meaning they can also become editable at the same time, creating a form group.

These three considerations are established when the form is created, as seen in the dialog box below. 

***New form dialog box***

![New form dialog box](/images/newformsegments-1.gif)

These properties can also change **dynamically** as a result of **rules being applied**, see [Rules](/platform/rules/).

### Setting display modes statically

Remember forms in process instances are either in **edit mode** meaning they can be edited/changed or **read mode** where the details are visible to form users but cannot be changed. The actions below refer to making forms **editable** so if the actions below are not used, then the forms are in **read mode**. The actions below refer to static or fixed use, set when the form is first created or updated at a later time.

1. Forms in process instances will be **editable** for **Default owner(s)**, that is the **form owners** defined when the form is created, or a form is edited. Form owners are defined in the **New form/Edit form** dialog box, shown in part 1 of the image above.  When a process instance runs, the form owner can then edit the form in that instance. 

2. By default the **first form** in a process becomes the **current form**, so only this form will be **editable**. However if several forms are **activated with** the current form when the form is created or edited in the **New form/Edit form** dialog box shown above, then **all forms in that group** will be editable by the form owner in a process instance.

3. By default the **Submit mode** for forms is **Only this form** meaning that when a process instance is running you can choose <u>only</u> that particular form can have details submitted or saved. Alternatively you can choose **all forms in edit mode**, meaning that several forms can have their details submitted or saved. For example if several forms are activated together and all are in **edit mode** then the details of all these forms can be submitted together in the database.

4. Forms can be statically set to allow **Quick actions** including allowing **editing**. When a form is created or edited using the **New form/Edit form** dialog box, clicking on **Enable quick actions** allows you to **statically** enable: 

   a) **reassignment** of forms

   b) **editing** of forms 

   c) **custom actions** on any form

   For a) and b) you can choose individuals and/or groups who can reassign or edit forms. In the case of b) edit there are options to **hide form footer buttons** when editing, and to **trigger rules on save** against a set field when saving edits. 

   ![Enable edit action](/images/enable-edit-action.jpg)

   For c) custom actions, you can set your own custom action and create an action label against a particular form field. This means that the user(s) assigning the custom action will see the labelled action designated for them. As a designer you can choose the **action display mode** as read-only, edit or both, so you can decide what type of access the user(s) will have.

### Changing form display dynamically with rules
If you use the **Form action** rule called **Field display mode**, you can change how a field or form displays **dynamically**. For example you have a condition set that the display will change based on the condition being present or not.

When you add this rule, under **Action** you can choose a field or form and choose from **Edit mode** or **Read mode**. 

![Field display rule](/images/field-display-rule.jpg)

For more information on this rule go to [Field Display mode rule](/platform/rules/form-actions/field-display-mode/).

Other rules can be used in other ways to change process workflow and therefore how forms behave. For example using the [Assign form rule](/platform/rules/workflow/assign-form/) you can assign a form to a particular user, making them the form owner, and therefore giving them edit access to the form.

### What's next  ![Idea icon](/images/18.png) ###

To read more about form ownership go to [Form owner](/platform/application-designer/forms/form-owners/).
To read more about quick actions, go to [Form quick actions menu](/platform/application-designer/forms/form-quick-action/).