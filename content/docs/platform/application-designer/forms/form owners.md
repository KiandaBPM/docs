---
title: "Form owners"
linkTitle: "Form owners"
weight: 1
typora-root-url: ..\..\..\..\..\static
---

## Introduction

When creating forms, is important to consider **form access** during the design phase, that is who can access and edit forms in a process instance. For example if an employee submits a performance review form, a line manager may wish to access that submitted process instance/record and edit the form, adding in comments and performance grades. 

There are two key principles to keep in mind in terms of **form access**:

1. Forms are **assignable** - this means that only a form assignee, that is, someone that is assigned to a form, can **edit** a particular form in a process instance. The 'assignee' can be a combination of users and groups.
2. **Only form owners** can edit a given form by **default**. Any other user with access to view the form will see it in read-only mode.

So what is **form owner**? A form owner can be assigned when a form is created in Kianda Designer. Only the form owner will be able to edit **process instances** (records).

Once a process has been designed and users can initiate new process instances or records from a dashboard page, then the only people who can edit process records are the form owners or someone who has had the record assigned to them.
For example, a line manager who is a form owner may need to add additional information about work goals in an appraisal form that their employee has already filled out.

### Getting started with Form owners

To create form owners:

1. Click on a process by going to **Administration** > **Designer** and click on an existing process or create a new process by clicking on **Add new** and complete the **Add new process** dialog box.
2. Then within Kianda **Designer** click on a form of interest and then click on the **Edit/(Pen)** ![Edit/Pen button](/images/penicon.png) button for that form.
3. In the **Edit form** dialog box you can add form owners in the **Default owner(s)** field - this can be **Users**, **Groups** or **Partners**.

 ![Partner account details attributes](/images/new-form-owners.jpg)

The **default owner** is the person or group that the form is assigned to **when the the form is created**. By default, only this person or group **can edit the form**. All other users can only view forms in read mode. The default owner however can reassign forms to other individuals and/or groups.

