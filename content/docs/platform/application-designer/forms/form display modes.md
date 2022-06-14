---
title: "Form display modes"
linkTitle: "Form display modes"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

## Introduction

Remember there are three principles to consider when working with forms:

- **Reading modes**: **Form users** can either use forms in **edit** mode or **read** mode. Edit mode means that users can submit information, while read mode means that users can only view forms. The latter may be useful for example for certain staff to review feedback in a form, but not be able to edit/update it.
- **Form owner**: The **default owner** is the person or group that the form is assigned to **when the the form is created**. By default, only this person or group **can edit the form**. All other users can only view forms in read mode. The default owner however can reassign forms to other individuals and/or groups.
- **Current form**: Typically there are several forms in a process, and only the form that has the status ‘**current form’** is **editable**. However, in a complex multi-step process, other forms can be configured to **activate with** the current form, meaning they can also become editable at the same time, creating a form group.

These three considerations are established when the form is created, as seen in the dialog box below. 

***New form dialog box***

![New form dialog box](/images/newformsegments-1.gif)

These properties can also change **dynamically** as a result of **rules being applied**, see [Rules](/docs/platform/rules/).

### How to set edit and read modes

1. Forms in process instances will be **editable** for **Default owner(s)** that is the **form owners** defined when the form is created, or a form is edited. Form owners are defined in the **New form/Edit form** dialog box, shown in part 1 of the image above.  When a process instance runs, the form owner can then edit the form in that instance. 
2. By default the first form in a process becomes the **current form**, so only this form will be **editable** for form owners. However if several forms are **activated with** the current form, defined when the form is created or edited in the **New form/Edit form** dialog box, then **all forms in that group** will be editable by the form owner in a process instance, as shown in part 2 of the image above.
3. **Submit mode** means that when a process instance is running you can choose **only this form** to be submitted, or you can choose **all forms in edit mode** meaning that several forms could have their details submitted or saved.
4. **Enable quick actions** allows you to **statically** enable a) **reassignment**, b) **edit**, and c) **custom actions** on any form. For a) and b) you can choose individuals and/or groups who can reassign or edit forms. In the case of b) edit there are options to **hide form footer buttons** when editing, and to **trigger rules on save** against a set field when saving edits. For c) custom actions, you can set your own custom action and create an action label against a particular form field. This means the user(s) assigns the custom action will see the labelled action designated for them. As a designer you can choose the **action display mode** as read-only, edit or both, so you can decide what type of access the user(s) will have.

### Changing form display with rules
If you use the **Form action** rule called **Field display mode** you can change how a field or form displays dynamically. 

When you add this rule, under **Action** you can choose a field or form and choose from **Edit mode** or **Read mode**. How the form or field displays can then be based on a condition using the **Edit conditions** function.

![Field display rule](/images/field-display-rule.jpg)

For more information on this rule go to [Field Display mode rule](/docs/platform/rules/form-actions/field-display-mode/).