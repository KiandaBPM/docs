---
title: "User rules"
weight: 4
typora-root-url: ..\..\..\..\..\static
---

## Introduction

**User rules** is one of the category of [rules](/docs/platform/rules/) available in Kianda, that enables user-based operations associated with user **properties**, for example **updating** a user property, **retrieving** a user property and **finding** a user based on a property. The user rules also allow you to **invite partners** and **share** a particular process with them. These rules are very useful when you want to do any property actions on a user like find a user or update a property of a specific user.

Take an example of a **Look up user by property** rule. Implementing this rule will allow you to store a user in a **User picker** field by providing a property of a user, for example user role or email address. See image below when a location is being chosen, a trainer is found that is assigned to the location:

![User rules](/images/lookup-user-location.jpg)

In this case the trainer is **Mark Lycette** as he is the trainer assigned in Galway, see image below:

![User rules](/images/lookup-user-db.jpg)

## Getting started with User rules ##

If you go to **Administration** > **Designer** and click on a process or create a new process, then click on **Add a rule** the User rules are found in the left-hand pane when you click on **Users**.

![User rules](/images/user-rules-intro.jpg)

There are four types of User rules as follows:

- **Get user property** - this rule allows you to retrieve user profile properties like email, department and so on for a current user, or a user defined via a user picker field, and map these properties for use in form logic.

- **Lookup user by property** - this rule allows you to find users, groups or partner accounts based on input filters.

- **Invite partner** - this rule sends an invitation to a contact in a partner organization for them to access a shared process. 

- **Update user property** - this rule allows you to update user profile properties, for example if a user moves department, where the update happens in a dynamic way.

  

### What's next  ![Idea icon](/images/18.png) ###

To read more about each of the rule types go to the links below:
