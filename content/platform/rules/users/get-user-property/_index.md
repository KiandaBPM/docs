---
title: "Get user profile property"
weight: 1
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Get user property** rule allows you to retrieve a **property** of a user that has been selected. You can select a user by defining one in a **user picker** field or selecting the **current user**, meaning that the user currently filling out the form will be selected when retrieving a profile property of a profile attribute. For example you can retrieve properties such as **First Name**, **Last Name**, **Email** or **Phone number** of a current user, those property values can be used fill in fields associated with a user.

## When to use 

Use this rule when you need to retrieve a profile property or a profile attribute from a current user or a user defined in a user picker field. 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before getting started

In advance of using the **Get user property** rule, in your process you need to have created at least one or more forms. The rule also requires you to select a **user profile source**, the source can be the **current user** of the form or a user chosen within a **User picker** field. When selecting the **current user** option, you will target the **property** of the user that is **currently** using the form. When you pick the **user picker field**, you need to create a **User picker** field which is used to select a user to target when **retrieving** a property.  The rule also requires a **text box** field which is used as a **container** to store the **retrieved value** of the property.

- **User picker (required)** - field used to select a user for which you want to update a property. To learn more about user picker field go to [User picker control](/platform/controls/input/user-picker/).
- **Text box (required)** - field used as a container to store the value of the property. To learn more about text box field go to [Text box control](/platform/controls/input/textbox/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Users** > **Update user property**.

3. In the **Edit rule - Update user property** dialog box, give the rule a title in the **Title** field.

   ![Get user property - edit rule dialog box](/images/get-property-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **User profile source** - select which type of source you want to use as the user to update the property for, choose from:

     - **Current user** - selecting this option will result in targeting the user that is currently using the form.

     - **Defined in a user picker field** - selecting this option will result in a **Pick a user field** option to appear allowing you to select a user picker field from your process. This will then specify which user you are targeting when wanting to retrieve a property, see image below:

       ![Selecting the user picker field option](/images/get-property-user-picker.jpg)

   - **Field to store user profile property** - you can select a field within your process to store the value of the retrieved property.

   - **User profile property** - list of profile properties and profile attributes that you can retrieve. Note that you can create your own profile attributes which also appear in the list, to learn more about profile attributes go to [Profile attributes](/platform/administration/users/#modify-profile-attributes).

6. You can choose to retrieve more than one property of a user, to do so click on the ![Selecting the user picker field option](/images/update-propert-plus.jpg) button. This will result in adding more **Field to store user profile property** and **User profile property** fields. You can also delete unwanted fields by clicking on the red **Bin/trash** icon.

   ![Add/delete property selector](/images/get-property-add-delete.jpg)

7. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.


### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

- Use this rule to **automate** processes when a form **requires** information from a **users profile**. For example when a form contains field such as name, phone number or email address, you can use this rule to automatically set those fields by **retrieving** the users name, phone number and email address **properties**.

### What’s next ![Idea icon](/images/18.png)

To find out more about other User rules go to [User rules](/platform/rules/users/).

To find out more about other rules go to [Rules](/platform/rules/).







