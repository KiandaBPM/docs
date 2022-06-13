---
title: "Form basics"
typora-root-url: ..\..\..\..\..\static
---



Processes in Kianda are made up of **forms**. Forms contain all the buttons, fields, and rule triggers needed to execute your process.

There are three principles to consider when working with forms:

- **Reading modes**: **Form users** can either use forms in **edit** mode or **read** mode. Edit mode means that users can submit information, while read mode means that users can only view forms. The latter may be useful for example for certain staff to review feedback in a form, but not be able to edit/update it. See [**Rules**](/docs/getting-started/create-first-process/plan-your-process/rules/) for more information on different types of rules. 
- **Form owner**: The **default owner** is the person or group that the form is assigned to **when the the form is created**. By default, only this person or group **can edit the form**. All other users can only view forms in read mode. The default owner however can reassign forms to other individuals and/or groups.
- **Current form**: Typically there are several forms in a process, and only the form that has the status ‘**current form’** is editable. However, in a complex multi-step process, other forms can be configured to **activate with** the current form, meaning they can also become editable at the same time, creating a form group.

These three considerations are established when the form is created, as seen in the dialog box below. These properties can also change **dynamically** as a result of **rules being applied**. See [**Rules**](/docs/getting-started/create-first-process/plan-your-process/rules/) for more information on different types of rules. 



***New form dialog box***

![img](https://academy.kianda.com/wp-content/uploads/2022/03/newformsegments-1.gif)

##### New form considerations

1. The **Default owner(s)** field is where you can set individuals and groups as the default **form owners** who can edit the form.
2. **Activate with** means that the form can be activated with other forms within the process, so they can be edited at the same time. This means several forms become the **current form** in a form group.
3. **Submit mode** means that when a process instance is running you can choose **only this form** to be submitted, or you can choose **all forms in edit mode** meaning that several forms could have their details submitted or saved.
4. **Enable quick actions** allows you to **statically** enable a) reassignment, b) edit, and c) custom actions on any form. For a) and b) you can choose individuals and/or groups who can reassign or edit forms. In the case of b) edit there are options to **hide form footer buttons** when editing, and to **trigger rules on save** against a set field when saving edits. For c) custom actions, you can set your own custom action and create an action label against a particular form field. This means the user(s) assigns the custom action will see the labelled action designated for them. As a designer you can choose the **action display mode** as read-only, edit or both, so you can decide what type of access the user(s) will have.

