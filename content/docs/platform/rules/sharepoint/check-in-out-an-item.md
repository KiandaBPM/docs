---
title: "Check in or out an item"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to check in or check out an item within SharePoint using Kianda.

 

## When to use

This rule should be used when a user within Kianda wanted to check in or check out an item from SharePoint

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Check in or out an item** rule, you need to have created one or more forms within your process. When using the check in or out function of the rule, you are required to have a field within your process that specifies an **Id** of an item you want to check in or out. For example the **Item Id** field can be a [Text box field](/docs/platform/controls/input/textbox/). When using the **Check in** functionality of the rule, you are required to create a field which is used to store a comment for the check in, the field type of the comment can also be a text box.

## How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you want the list to be located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select the field or other item to attach the rule to.

2. Click on **Add a rule** > **SharePoint** > **Check in/out an item**.

3. In the **Edit rule - Check in/out an item** dialog box, give the rule a **Title**. Then select a SharePoint data source from the drop-down list.

    ![Check in/out an item dialog box](/images/check-in-out-rule.jpg)

4. Three options are presented:

    - **List** - select the list where the item is present which is needed to be checked in/out.
    - **Operation** - choose from **Check in** or **Check out**. If you choose **Check in** then select also a field from a Kianda form which will serve as a **Check in comment field**.
    - **Item Id field** - this will be used to determine which item is being checked in/out. Select the appropriate field from a Kianda form.

5. Once these fields are set you can also set conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information. 

6. The final two sections are optional: **On success mapping** and **Error mapping**. See [Success and Error Mapping](/docs/platform/rules/general/success-error-mapping/) for more information. 

7. Click on **OK** when complete.



### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about **Check in/out an item**, return to the [SharePoint rules](/docs/platform/rules/SharePoint/) page to find out about other SharePoint rules. 
