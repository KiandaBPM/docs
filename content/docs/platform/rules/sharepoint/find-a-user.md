---
title: "Find a user"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to find a user from a data source using a Kianda process.

### When to use

Use this rule to pull user data into a Kianda form for example when someone wants to add employee information to a form using SharePoint details.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

 

### How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you want the list to be located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select a field or other item to attach the rule to.

2. Click on **Add a rule** > **SharePoint** > **Find a user**.

3. In the **Edit rule - Find a user** dialog box, give the rule a **Title**. Then select a SharePoint data source from the drop-down list.


     ![Find a user dialog box](/images/find-a-user-rule.jpg)

5. You will be presented with two options within the dialog box:

  - **Find user by** provides the search criteria to find the user that is, **display name**, **email**, or **ID**. These are all SharePoint parameters.
  - **Search term field** is used to select the Kianda form field which will be used to lookup the user details from the data source. 

6. Once these fields are set you can also set conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information. 

7. The final two sections are optional: **On success mapping** and **Error mapping**. See [Success and Error Mapping](/docs/platform/rules/general/success-error-mapping/) for more information. 

8. Click on **OK** when complete.



### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 




### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Find a user**, return to the [SharePoint rules](/docs/platform/rules/sharepoint/) page to find out about other SharePoint rules. 
