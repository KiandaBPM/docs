---
title: "Form owners"
linkTitle: "Form owners"
weight: 1
typora-root-url: ..\..\..\..\static
---

When creating forms, it is important to consider **form access** during the design phase, that is who can access and edit forms **in a process instance**. For example if an employee submits a performance review form, a line manager may wish to access that submitted process instance/record and edit the form, adding in comments and performance grades. 

There are two key principles to keep in mind in terms of **form access**:

1. Forms are **assignable** - this means that forms can be assigned to individuals and/or groups, and then only they can **edit** the form, when it is the current form, in a process instance. The 'assignee' can be a combination of users and groups. There are various ways a form can be assigned to a user: 

   ​	a) Using **Rules**, in particular the Workflow rule **Assign form**, see [Assign form](/platform/rules/workflow/assign-form/) for details 

   ​	b) Using **Quick actions**, see [Form Quick action](/platform/application-designer/forms/form-quick-action/) for details

   ​	c) Creating **form owners** when creating or updating a process design, see [Creating form owners](#creating-form-owners) for details

2. **Only form owners** can edit a given form when it is a **current form** in a process flow by **default**. Any other user with access to view the form will see it in read-only mode.

So what is **form owner**? A form owner is assigned when a form is created in Kianda **Designer**. Form owners can also be added to a form design at a later stage by editing the form. Only the form owner will be able to **edit current forms** in **process instances** (records), see below.

## Changing form access

The **default owner** is the person or group that the form is assigned to using the **default owner field** in the **new form** dialog box  as shown above. By default, only this person or group **can edit the current form** in a process instance. All other users can only view forms in read mode. The next section details how to [Change default owners](#changing-default-owners).

It is also possible to allow other users to have edit access to forms using the [Assign rule](/platform/rules/workflow/assign-form/) and [Quick actions](/platform/application-designer/forms/form-quick-action/). 

### Changing default owners

1. Using your **Administration** or **Design business process** role, go to **Administration** > **Designer** > select a process > select a form in the process. 

2. Click on the form so the **Edit/Pen** button appears in the form name. 

   ![Select form to edit](/images/select-form-to-edit.jpg)

3. Then click on the **Edit/Pen** button itself to edit the form. 

4. An **Edit form** dialog box opens which has the same layout as the **New form** dialog box seen in [Creating form owners](#creating-form-owners) above.

   ![Edit form dialog box](/images/edit-form-dialog-box.jpg)

5. Here you can change the default owner choosing from **Users**, **Groups** as before.

