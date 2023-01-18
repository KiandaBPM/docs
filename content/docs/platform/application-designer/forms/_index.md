---
title: "Form basics"
typora-root-url: ..\..\..\..\..\static
---



## Introduction

Processes in Kianda are made up of **forms**. Forms contain all the buttons, fields, and rule triggers needed to execute your process.

Using your **Administrator** or **Design business process** role, you will use Kianda **Designer** to design **forms** for **end users** who will use the platform to submit, save and review information, either as named users in the platform, users who receive a link to an anonymous form, or partners who can access shared processes. These end users will create new **process instances** or records in the system, or access **existing process instances** which shows information that has either been **saved or submitted** in a form.

When discussing forms we'll talk about **form design** that is creating and updating forms within a process using Kianda **Designer** as well **form use** which refers to end users who will edit or read forms in a process instance/record in the system, built using the **Designer**.

## Form design principles

As you work with Kianda **Designer** you are designing the 'user interface' for users to interact with a particular process. Keeping the end user in mind, there are three design principles: 

1. **Reading modes**: **Form users** can either use/access forms in **edit** mode or **read** mode. Edit mode means that users can submit information, while read mode means that users can only view forms. The latter may be useful for example for certain staff to review customer feedback in a form, but not be able to change/edit the feedback form.  

2. **Current form**: Typically there are several forms in a process, and by default the **first form** in a process is the **current form**. 

   ![Three form process example](/images/3-form-example.jpg)

   For example in the Training Attendance Process above, the process flow is as follows:

   - **Training Request** - an employee initiates a process instance by filling out this form

   - **Training Approval** - the manager approves the request using this form

   - **Training Attendance** - when training approval occurs, a trainer invites the employee to attend training and once complete, the trainer completes a this form to evaluate the employee's participation.
   
     Therefore when a process instance is initiated upon submission of the **Training Request** form, then the next form in the process becomes the **current form**, in this case the **Training Approval** form.
   
     Only the form that has the status ‘**current form’** **is editable** by a form owner (see point 3 below). In a complex multi-step process, several forms can be configured to **activate with** the current form, meaning they are also editable at the same time, creating a **form group**, see section 2 of [New form creation](#new-form-creation). Rules can also be used to change the workflow and make other forms the 'current form'.
   
     Also note that **all first forms** in a process flow add the current user as a 'form owner' therefore allowing **all users** to edit the first form, as clicking on 'submit' or 'save' in the first form results in a new process instance.

3. **Form owner**: The **default owner** is the person or group that the form is assigned to, this means they can **edit the <u>current</u> form(s) in a process instance**. Default owners are typically set when a form is created, see section 1 of [New form creation](#new-form-creation) below. By default, **only this person or group can edit the <u>current</u> form** in a process instance. All other users can only view forms in read mode. The default owner however can reassign forms to other individuals and/or groups. Form ownership can also be assigned dynamically using the [Assign form](/docs/platform/rules/workflow/assign-form/) rule.

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
