---
title: "User rules"
weight: 4
typora-root-url: ..\..\..\..\..\static
---

## Introduction

**User rules** is one of the category of [rules](/docs/platform/rules/) available in Kianda, that enables user-based operations associated with user **properties**, for example **updating** a user property, **retrieving** a user property and **finding** a user based on a property. The user rules also allow you to **invite partners** and **share** a particular process with them. These rules are very useful when you want to do any property actions on a user like find a user or update a property of a specific user.

Take an example of a **Look up user by property** rule. Implementing this rule will allow you to store a user in a **User picker** field by providing a property of a user, for example user role or email address. See image below when a location is being chosen, a trainer is found that is assigned to the location:

![User rules](/images/lookup-user-location.jpg)

In this example the **Location of training** is a **List** control is connected to a **SQL Server connector**. The Display field, Value field and Sort by  of the List control is set to **Location**. With the list control set up that way, we are provided with a list based on our Location column in the database. For more information on how to create a List control and set its datasource go to [List control](/docs/platform/controls/input/list/). See image below to see how the **Location of training** field is set up:

![User rules](/images/users-list-control-example.jpg)

With all of our users, we have set up a **Location property** and each user is assigned a different locations based on where they operate and provide training. The **lookup user by property** is set to **Location** which we provide to the rule by selecting our **Location of training**  field. The outcome of this combination will set our **Trainer** field with the user that the **Location property** matches the value specified in the **Location of training** field. To learn more about how to create your own user properties and attributes go to [Modifying profile attributes](/docs/platform/administration/users/#modify-profile-attributes). See image below of the Lookup user by property rule:

![User rules](/images/users-lookup.jpg)

For example when a user selects **Galway** from the **Location of training**, the lookup rule will search for a user that has the location property set to Galway and the result is **Mark Lycette**. See image below to see the SQL database and that Mark Lycette matches with the Galway location.

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
