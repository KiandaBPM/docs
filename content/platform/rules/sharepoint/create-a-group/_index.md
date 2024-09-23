---
title: "Create a group"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to create a SharePoint group from within Kianda.

## When to use

This rule should be used when you want to create a new SharePoint group from within your Kianda process for example as part of a new project you want to create a group in SharePoint to provide permissions to specific users.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Create a group** rule, you need to have created one or more forms. In the forms you must have created two separate fields which are needed for:

- Field which will represent the **title** of the group, for example a **Text box** field. To learn more about how to create a text box field go to [Text box control](/platform/controls/input/textbox/).
- Field which will represent the **description** of the group, this can also be a text box field.


## How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you want the group to be located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select the field or other item to attach the rule to.

2. Click on **Add a rule** > **SharePoint** > **Create a group**.

3. In the **Edit rule - Create a group** dialog box, give the rule a **Title**. Then select a SharePoint data source from the drop-down list.

   ![Create a group rule dialog box](/images/create-a-group-rule.jpg)

4. Two new fields will appear to allow you to confirm group details: 
   For **Group title** field, select the field where the group title is stored for example,  a list field.
   For **Group Description field**, create a description for the group. 

5. Once these fields are set you can also set conditions for the rule, see [Conditions](/platform/rules/general/add-conditions/) for more information. 

6. The final two sections are optional: **On success mapping** and **Error mapping**. See [Success and Error Mapping](/platform/rules/general/success-error-mapping/) for more information. 

7. Click on **OK** when complete.

   


### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/platform/rules/general/multiple-rules/)  to find out more. 



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about **Create a group**, return to the [SharePoint rules](/platform/rules/sharepoint/) page to find out about other SharePoint rules. 
