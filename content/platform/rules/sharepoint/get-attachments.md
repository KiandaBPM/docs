---
title: "Get List item attachments"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to retrieve an attachment from a SharePoint list for use in a Kianda process.

## When to use

This rule should be used when an attachment needs to be extracted from SharePoint and displayed within a Kianda process, for example a SharePoint list with attachment as seen in the image below.

![List attachment example](/images/list-attachment.jpg)



You can add this rule:

- [x] to a field

- [x] to a form 

- [x] to a process (the rule will run on load)

## Before you get stared

In advance of using the **Get attachments** rule, in your process you need to have created at least one or more forms. The get attachments rule also requires one **file field** which is used to store the attachment that you want to **retrieve** from your SharePoint. To learn more about file field in Kianda, go to [File upload control](/docs/platform/controls/input/file-upload/).

## How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you have your attachments from a list located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select the field or other item to attach the rule to.
2. Click on **Add a rule** > **SharePoint** > **Get attachments**.
3. In the **Edit rule - Get attachments** dialog box, give the rule a **Title**.
     ![Get attachments dialog box](/images/get-attachments-rule.jpg)
4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png). You create a condition for a rule if you want it to be triggered when a condition is true or false, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.
5. Under the **Action** section fill out the following:
   - **Select data source** - this button when pressed is used to select a SharePoint datasource that you want to use when retrieving an attachment. 
   - **Data source filter** - this is used to filter data within your datasource. It works on condition bases which allows you to pull wanted and unwanted data back into the process. To learn more about conditions go to [Conditions](/docs/platform/rules/general/add-conditions/).
   - **Select a destination file input** - this drop-down field is used to select a **file field** from your process. The selected file field will store the attachment retrieved from the datasource. 
6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

This rule can then be run for example on a button which is manually triggered by a user, or automatically on load of the process. From here the file can be utilised to populate data fields, tables and so on. Go to the [Rules](/docs/platform/rules/) page to navigate to other rules. 




### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 




### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Get attachments**, return to the [SharePoint rules](/docs/platform/rules/sharepoint/) page to find out about other SharePoint rules. 
