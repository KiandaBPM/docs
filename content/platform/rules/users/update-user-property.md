---
title: "Update user property"
weight: 4
typora-root-url: ..\..\..\..\..\static
---

## Introduction

The **Update user property** rule allows you to **change/update** a profile property of a user within your subscription. When updating a property of a user, you can choose to select between the **current user** of the form or a user that can be selected from a **user picker** field. To learn more about a user picker field go to [User picker control](/docs/platform/controls/input/user-picker/). You can update the following properties of a user:

- **Phone number**
- **Partner language**
- **Partner region**
- **Custom profile attributes**, to learn more about profile attributes go to [Profile attributes](/docs/platform/administration/users/#modify-profile-attributes).

## When to use 

Use this rule when you need to update a profile **property** or a profile **attribute** of a user. Select the **current user** option to update a property of the user that is **currently** filling out a form, or create a **user picker** field to have more **flexibility** with user selection. 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before getting started

In advance of using the **Update user property** rule, in your process you need to have created at least one or more forms. The update user property rule also requires you to select a **user profile source**, the source can be the **Current user** or a **User picker** field. When selecting the **current user** option, you will target the **property** of the user that is **currently** using the form. When you pick the **user picker field**, you need to create a **User picker** field which is used to specify a user when updating a property. For best practices you can create a text box field which will represent the new value of the property you want to update.

- **User picker (required)** - field used to select a user for which you want to update a property. To learn more about user picker field go to [User picker control](/docs/platform/controls/input/user-picker/).
- **Text box (optional)** - field representing the **new value** of the property you want to update. To learn more about text box field go to [Text box control](/docs/platform/controls/input/textbox/).

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Users** > **Update user property**.

3. In the **Edit rule - Update user property** dialog box, give the rule a title in the **Title** field.

   ![Update user property - edit rule dialog box](/images/update-property-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **User profile source** - select which type of source you want to use as the user to update the property for, choose from:

     - **Current user** - selecting this option will result in targeting the user that is currently using the form.

     - **User picker field** - selecting this option will result in a **Pick a user field** option appearing allowing you to select a user picker field from your process. This will then specify which user you are targeting when wanting to update a property. See image below:

       ![Selecting the user picker field option](/images/update-propert-user-picker.jpg)

   - **Field or text** - you can select a field within your form or type in text manually to represent the value of the property you want to update.

   - **User property to update** - list of profile properties and profile attributes that you want the update. Note that you can create your own profile attributes which also appear in the list, to learn more about profile attributes go to [Profile attributes](/docs/platform/administration/users/#modify-profile-attributes).

6. You can choose to update more than one property of a user, to do so click on the ![Selecting the user picker field option](/images/update-propert-plus.jpg) This will result in adding more **Field or text** and **User property to update** fields. You can also delete unwanted property selectors by clicking on the red **Bin/Trash** icon.

   ![Add/delete property selector](/images/update-property-add-delete.jpg)

7. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.

### User tip ![Target icon](/images/05.png)

When updating multiple properties at once, create a text box field for each property you want to update. This way you have more control of the value you want to assign to each property. To learn more about text box field go to [Text box control](/docs/platform/controls/input/user-picker/).

### What’s next ![Idea icon](/images/18.png)

To find out more about other User rules go to [User rules](/docs/platform/rules/users/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

