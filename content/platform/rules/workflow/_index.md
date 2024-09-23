---
title: "Workflow rules"
weight: 1
typora-root-url: ..\..\..\..\..\static
---

**Workflow** rules is one category of [rules](/platform/rules/) that relates to user interactions with form components. Using Workflow rules will allow you to change the flow of information within a process. For example in a simple Training Process that is made up of three forms by default, the **first form** in a process is the **current form**. 

   ![Three form process example](/images/3-form-example.jpg)

In the example above, the workflow for this process would be completion of the forms in this order: **Training Request** > **Training Approval** > **Training Attendance**, however using Workflow rules, you could use **Go to form** to force the **Training Attendance** form to be the current form after the Training Request form has been completed. 

You could also use the **Assign form** rule to assign editing rights to particular users so they can edit forms. See more about Go to form and Assign form below.

Using rules in this way changes the flow of the process, and additional levels of security and user interaction can be added using **Process security** and **Hide or disable** see below.



## Getting started with Workflow rules ##

If you have the role **Administrator** or **Design business process**, go to **Administration** in the left-hand side menu and then **Designer** and click on an existing process or create a new process. Then decide on a form or field to add the rule to by clicking on that item and click on **Add a rule**. 

The **Workflow** rules are found in the left-hand pane when you click on **Workflow**.

![Workflow rules](/images/workflow-rules.jpg)

There are seven types of **Workflow** rules as follows:

1. ### Hide or disable 

   This rule is used to hide, disable, **show or enable one or more fields, one or more sections or entire forms**. This rule has special meaning in terms of workflow allowing the application to direct user action and flow by hiding or showing entire sections of the application.

2. ### Make required

   Use this rule to make individual **fields required or entire forms**. Unlike the field property 'Required', this rule will dynamically allocate a mandatory status on chosen forms or fields, that users must complete and submit.

3. ### Go to form 

   **Go to form** rule **navigates** the user from the current form to the destination form. This rule could also set the destination form's display mode.

4. ### Assign form 

   This rule **enables dynamic form ownership** and form security assignment of a form owner by assigning a user or a group to a form. You could also choose to override or append the form owner. By default only form owners can see the form in edit 

5. ### Process security 

   This rule **defines the security of the entire process instance** (record). Using this rule, you could add any user or group with the right permissions to view/update any instances.

6. ### Start a (sub) process

   **Start a process** rule helps you **create a new instance of the same process or a different process**. You could also map the inputs from the current instance to a new instance.

7. ### Schedule a rule 

   This rule helps you **schedule a rule/rules to be triggered** one time, with a recurring schedule or immediately. For example, this rule could be used to schedule a daily reminder email to a user if the task is not complete.



### What's next  ![Idea icon](/images/18.png) ###

We have briefly introduced each of the six types of **Workflow rules**. Now let's look at each of these types of rules in more detail:
