---
title: "Form owners"
linkTitle: "Form owners"
weight: 1
typora-root-url: ..\..\..\..\..\static
---

## Introduction

When creating forms, it is important to consider **form access** during the design phase, that is who can access and edit forms **in a process instance**. For example if an employee submits a performance review form, a line manager may wish to access that submitted process instance/record and edit the form, adding in comments and performance grades. 

There are two key principles to keep in mind in terms of **form access**:

1. Forms are **assignable** - this means that only a form assignee, that is, someone that is assigned to a form, can **edit** a particular form in a process instance. The 'assignee' can be a combination of users and groups. There are various ways a form can be assigned to a user: 

   ​	a) Using **Rules**, in particular the Workflow rule **Assign form**, see [Assign form](/docs/platform/rules/workflow/assign-form/) for details 

   ​	b) Using **Quick actions**, see [Form Quick action](/docs/platform/application-designer/forms/form-quick-action/) for details

   ​	c) Creating **form owners** when creating or updating a process design, see [Creating form owners](#creating-form-owners) for details

2. **Only form owners** can edit a given form when it is a **current form** in a process flow by **default**. Any other user with access to view the form will see it in read-only mode.

So what is **form owner**? A form owner is assigned when a form is created in Kianda Designer. Form owners can also be added to a form design at a later stage by editing the form. Only the form owner will be able to **edit current forms** in **process instances** (records), see below.

## Getting started with Form owners

### Creating form owners

1. Click on a process by going to **Administration** > **Designer** and click on an existing process or create a new process by clicking on **Add new** and complete the **Add new process** dialog box.
2. Then within Kianda **Designer** click on a form of interest and then click on the **Edit/(Pen)** ![Edit/Pen button](/images/penicon.png) button for that form.
3. In the **New form/Edit form** dialog box you can add form owners in the **Default owner(s)** field. 

 ![Partner account details attributes](/images/new-form-owners.jpg)

​	Using the dropdown list choose from:

- **Users** - Users must already be in the system, see [Users & Groups](/docs/platform/administration/users/)
- **Groups** - Groups must be defined in advance, see [Users & Groups](/docs/platform/administration/users/)
- **Partners** - Partners must be already in the system and active, see [B2B portals](/docs/platform/administration/b2b-portals/)

4. If you make a mistake, or form owners need to be changed in an existing process, click on the **x** beside the name of the **Users**, **Groups** or **Partners** to remove them and choose from the dropdown list again.
5. Add to or edit the remaining parameters in the dialog box as desired, see [Editing forms](#editing-forms/docs/platform/application-designer/designer/) and click on **OK** when complete, or **Close** to exit the dialog box at any time.

### Form ownership and process instances

The **default owner** is the person or group that the form is assigned to **when the the form is created**. By default, only this person or group **can edit the form**. All other users can only view forms in read mode. The default owner however can reassign forms to other individuals and/or groups.

