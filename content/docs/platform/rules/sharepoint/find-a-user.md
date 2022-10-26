---
title: "Find a user"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to find a user from a data source using a Kianda process.

## When to use

Use this rule to pull user data into a Kianda form for example when someone wants to add employee information to a form using SharePoint details.

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Find a user** rule, you need to have created at least one or more forms within your process. The find a user rule also requires you to create a field which is used as the **search term** for the user. You can retrieve two pieces of data from a user that you are looking for, a **Username** and a **User Id**. You can store the retrieved data in a field within your form, for example in a [Text box field](/docs/platform/controls/input/textbox/). 

## How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you have your user located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select a field or other item to attach the rule to.

2. Click on **Add a rule** > **SharePoint** > **Find a user**.

3. In the **Edit rule - Find a user** dialog box, give the rule a **Title**. Then select a SharePoint data source from the drop-down list.

 ![Find a user dialog box](/images/find-a-user-rule.jpg)

5. You will be presented with two options within the dialog box:

     - **Find user by** provides the search criteria to find the user that is, **display name**, **email**, or **ID**. These are all SharePoint parameters.

     - **Search term field** is used to select the Kianda form field which will be used to lookup the user details from the data source. 


6. Once these fields are set you can also set conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information. 

7. **On success mapping** is used to retrieve data from the user we are searching for. The two pieces of data you can retrieve is a **Username** and **User Id**. Go to [On success mapping](/docs/platform/rules/general/success-error-mapping/#on-success-mapping) to learn how to retrieve data and populate it in a form field.

8. The final section is optional: **Error mapping**. See [On error Mapping](/docs/platform/rules/general/success-error-mapping/#on-error-mapping) for more information. 

9. Click on **OK** when complete.



### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 




### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Find a user**, return to the [SharePoint rules](/docs/platform/rules/sharepoint/) page to find out about other SharePoint rules. 
