---
title: "Add a user to a group"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to add a user into a SharePoint group using Kianda.



## When to use

This rule should be used when a user within Kianda should be added to SharePoint Group, for example, a new hire being added to a team group during their onboarding phase.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Add a user to a group** rule, you need to have created one or more forms. In the forms you must have created two separate fields which are needed when using the rule:

- Field which represents the **title** of the group you are adding the user to. This field can for example be a **Text box** field. To learn more about how to create a text box field go to [Text box control](/docs/platform/controls/input/textbox/).
- Field which represents the **Username** or **User Id**  of the user you want to add to the group, this can also be a text box field.


## How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you want the list to be located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select the field or other item to attach the rule to.

2. Click on **Add a rule** > **SharePoint** > **Add a user to a group**.

3. In the **Edit rule - Add a user to a group** dialog box, give the rule a **Title**. Then select a SharePoint data source from the drop-down list.

    ![Add a user to a group dialog box](/images/add-user-group-rule.jpg)

4. Two new fields will appear: 
   For **Group title** field, select the field where the group title is stored for example, a list field.
   For **Username or User Id**, select the field where the Username or User id is stored.

5. Once these fields are set you can also set conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information. 

6. The final two sections are optional: **On success mapping** and **Error mapping**. See [Success and Error Mapping](/docs/platform/rules/general/success-error-mapping/) for more information. 

7. Click on **OK** when complete.



### User tips ![Target icon](/images/05.png) ###

To use this rule, you must have a user predefined in Kianda and in SharePoint. The group must also be predefined in SharePoint. This rule gives the advantage of allowing multiple users to move to SharePoint groups which could be useful for example during restructuring in an organisation, where existing users need to move to other departments/groups. 

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 




### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Add a user to a group**, return to the [SharePoint rules](/docs/platform/rules/SharePoint/) page to find out about other SharePoint rules. 

