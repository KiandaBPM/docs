---
title: "Form basics"
typora-root-url: ..\..\..\..\..\static
---



## Introduction

Processes in Kianda are made up of **forms**. Forms contain all the buttons, fields, and rule triggers needed to execute your process.

Using your **Administrator** or **Design business process** role, you will use Kianda **Designer** to design **forms** for **end users** who will use the platform to submit, save and review information, either as named users in the platform, users who receive a link to an anonymous form, or partners who can access shared processes. These end users will create new **process instances** or records in the system, or access **existing process instances** which shows information that has either been **saved or submitted** in a form.

When discussing forms we'll talk about **form design** that is creating and updating forms within a process using Kianda Designer as well **form use** which refers to editing or reading forms in a process instance/record in the system built using the form design.

## Form principles

There are three principles to consider when working with form design:

1. **Reading modes**: **Form users** can either use/access forms in **edit** mode or **read** mode. Edit mode means that users can submit information, while read mode means that users can only view forms. The latter may be useful for example for certain staff to review customer feedback in a form, but not be able to change/edit it.  

2. **Current form**: Typically there are several forms in a process, and by default, the **first form** in a process is the **current form**. 

   ![Three form process example](/images/3-form-example.jpg)

   For example in the Training Attendance Process above, the process flow would be:

   - be an employee initiates a process instance by filling out the **Training Request**

   - a manager approves the request via a **Training Approval** form

   - when training approval occurs, a trainer invites the employee to training and training is complete, the trainer completes a **Training Attendance** evaluation of the employee. 

​		Therefore when a process instance is initiated as a result of an employee submitting a request, then the next form in the process becomes the 			**current form**, in this case the **Training Approval** form.

​		Only the form that has the status ‘**current form’** **is editable**. However, in a complex multi-step process, other forms can be configured to activate 		with the current form, meaning they can also become editable at the same time, creating a form group, see section 2 of [New form creation](#new-f		orm-creation). Rules 		can also be used to make forms the 'current form'.

3. **Form owner**: The **default owner** is the person or group that the form is assigned to, this means they can **edit the current form(s) in a process instance**. Default owners are typically set when a form is created, see section 1 of [New form creation](#new-form-creation) below . By default, **only this person or group can edit the <u>current</u> form** in a process instance. All other users can only view forms in read mode. The default owner however can reassign forms to other individuals and/or groups. Form ownership can also be assigned dynamically using the [Assign form](/docs/platform/rules/workflow/assign-form/) rule.

These three considerations are established when the form is created, as seen in the dialog box below, and these parameters can be updated at any time by editing the form design. These properties can also change **dynamically** as a result of **implementing rules**, for example the [Go to form](/docs/platform/rules/workflow/go-to-form/) rule can change the workflow in a process.



### New form creation

As mentioned in the [Introduction](#introduction) there are certain considerations to keep in mind when working with forms. The image below shows a **New form** dialog box that is created when the **Add form** button is clicked in Kianda Designer. At any time if you click on a form and then the **Edit/pen** button ![Edit/pen button](/images/penicon.png) an **Edit form** dialog box appears which has the same parameters as the one shown in the image below.

***New form dialog box***

![img](https://academy.kianda.com/wp-content/uploads/2022/03/newformsegments-1.gif)

##### New form considerations

1. The **Default owner(s)** field is where you can set individuals and groups as the default **form owners** who can edit the form.
2. **Activate with** means that the form can be activated with other forms within the process, so they can be edited at the same time. This means several forms become the **current form** in a form group.
3. **Submit mode** means that when a process instance is running you can choose **only this form** to be submitted, or you can choose **all forms in edit mode** meaning that several forms could have their details submitted or saved.
4. **Enable quick actions** allows you to **statically** enable a) reassignment, b) edit, and c) custom actions on any form. For a) and b) you can choose individuals and/or groups who can reassign or edit forms. In the case of b) edit there are options to **hide form footer buttons** when editing, and to **trigger rules on save** against a set field when saving edits. For c) custom actions, you can set your own custom action and create an action label against a particular form field. This means that the user(s) assigning the custom action will see the labelled action designated for them. As a designer you can choose the **action display mode** as read-only, edit or both, so you can decide what type of access the user(s) will have.



### What's next  ![Idea icon](/images/18.png) ###

We have briefly introduced the principles of working with forms. To read more about working with forms, click on the links below:
