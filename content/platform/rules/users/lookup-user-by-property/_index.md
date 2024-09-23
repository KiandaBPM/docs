---
title: "Lookup user by property"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Lookup user by property** rule allows you to look up a user from your **subscription** using one of the **properties** in their **profile** for example first name, last name, email or department. Using this rule you can also look up **groups** or **partners** by specifying one of the properties available. When looking up a user, group or a partner you can use the following properties:

- **First Name**
- **Last name** 
- **Display name**
- **Email**
- **Phone number**
- **Partner company name**
- **Partner main contact email**
- **Partner language**
- **Partner region**
- **UserId**
- **Custom** **profile attributes**, to learn more about profile attributes go to [Profile attributes](/platform/administration/users/#modify-profile-attributes).

## When to use 

Use this rule when your process requires to **filter** a **user** using a profile property, for example, when a user fills out his email address, a user picker field is assigned with the user that **matches** the entered email address. This rule is used to **automate** a **user picker** field when property input is provided.

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before getting started

In advance of using the **Lookup user by property** rule, in your process you need to have created at least one or more forms. The lookup user by property rule also requires a **User picker** field which is used to store the user that matches the property you have entered. For best practice, you can also create a **text box** field which holds the **value** of the property that you want to look by, for example the email address of a user. 

- **User picker (required)** - field to store the user when the look up is performed. To learn more about user picker field, go to [User picker control](/platform/controls/input/user-picker/).
- **Text box (optional)** - value of the property you want to look by. To learn more about text box field, go to [Text box control](/platform/controls/input/textbox/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Users** > **Lookup user by property**.

3. In the **Edit rule - Lookup user by property** dialog box, give the rule a title in the **Title** field.

   ![Lookup user by property - edit rule dialog box](/images/lookup-user-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Type of user** - select the type of user you want to look for, the choices are:
     - **Person** - individual user from your subscription.
     - **Group** - user group that you have created in your subscription.
     - **Partner** - user that is part of your subscription with partner rights.
   - **User property to locate user by** - list of profile properties and profile attributes that you want the user to be looked up by. Note that you can create your own profile attributes which also appear in the list, to learn more about profile attributes go to [Profile attributes](/platform/administration/users/#modify-profile-attributes).
   - **Field value or text** - you can select a field within your form or type in text manually to represent the value of the property you want to look up by.
   - **User field to store lookup result** - field to store the user that the property you searched by matches.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

Create a **datasource** with all users and their **properties**, you can create a **list** field and set the field to the created datasource. You can set the display of the list field to the property value of the data source. With that you will have a **selection** of **user properties** which you can use as a search mechanism for users. For example search users that are based in a specific location. To learn more about list field go to [List control](/platform/controls/input/list/).

### What’s next ![Idea icon](/images/18.png)

To find out more about other User rules go to [User rules](/platform/rules/users/).

To find out more about other rules go to [Rules](/platform/rules/).

