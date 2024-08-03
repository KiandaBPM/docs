---
title: "Create a list"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to create a SharePoint List from within Kianda.

## When to use

This rule should be used when within your Kianda process you wish to create a new SharePoint list, for example as part of a new project you want to create a list in SharePoint to store information pertaining to that project such as invoice numbers.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Create a list** rule, you need to have created one or more forms within your process and within the process you need to create three separate fields which will be used when setting up the rule:

- A field which will represent the **Name** of the list, for example a text box field. To learn more about a text box field, go to [Text box control](/docs/platform/controls/input/textbox/).

- A field which will represent the **Description** of the newly created list. This field can also be a text box field.
- A field which will be used when creating the **URL** for the list. You can also use a text box field.

## How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you want the list to be located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select a field or other item to attach the rule to.

2. Click on **Add a rule** > **SharePoint** > **Create a list**. 

3. In the **Edit rule - Create a list** dialog box, give the rule a **Title**. Then select a SharePoint data source from the drop-down list.

     ![Create a list rule dialog box](/images/create-a-list-rule.jpg)

4. You will be presented with five options within the dialog box:

   - **List template** allows you to select an existing SharePoint list within the SharePoint data source to emulate the formatting and design of the list. 
   - **List name field** allows you to create a name for the list. This field, **List url field** and **List description field** are all populated from a Kianda form. Choose a field from a Kianda form.
   - **List url field** will be used in the creation of the URL within SharePoint. Choose a field from a Kianda form.
   - **List description field** will be used for the SharePoint list description. Choose a field from a Kianda form.
   - **Quick Launch menu** - options are **Yes** or **No**.

5. Once these fields are set you can also set conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information.

6. The final two sections are optional: **On success mapping** and **Error mapping**. See [Success and Error Mapping](/docs/platform/rules/general/success-error-mapping/) for more information. 

7. Click on **OK** when complete.

     


### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about **Create a list**, return to the [SharePoint rules](/docs/platform/rules/sharepoint/) page to find out about other SharePoint rules. 
