---
title: "Create a site"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to create a SharePoint site from within Kianda.

## When to use

This rule should be used when within your Kianda process you wish to create a new SharePoint site, for example, as part of a new project you want to create a site in SharePoint to store information pertaining to that project, to include all lists and other documentation that you need. 

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get stared

In advance of using the **Create a site** rule, you need to have created one or more forms within your process and within the process you need to create three separate fields. Those fields that you create will be used when filling out the rule details:

- A field which will represent the **Name** of the site, for example a **text box** field. To learn more about a text box field, go to [Text box control](/docs/platform/controls/input/textbox/).

- A field which will represent the **Description** of the newly created site, for example a text box field.
- A field which will be used when creating the **URL** for the site, for example a text box field.

## How to use

To apply this rule, first choose an item to attach the rule to and have a SharePoint data source ready where you want the site to be located. This data source should be a predefined data connector created with **Data sources** under **Administration**. 

1. Select a field or other item to attach the rule to.
2. Click on **Add a rule** > **SharePoint** > **Create a site**.
3. In the **Edit rule - Create a site** dialog box, give the rule a **Title**. Then select a SharePoint data source from the drop-down list.

	![Create a site rule dialog box](/images/create-a-site-rule.jpg)

4. You will be presented with five options within the dialog box:
   - **Site template** allows you to select an existing SharePoint site within the SharePoint data source to emulate the formatting and design of the site.
   - **Site title field** will be used to create the name of the site. **Site title field**, **site URL**, and **site description field** are all derived from the Kianda form. Choose a field from a Kianda form.
   - **Site url field** will be used in the creation of the URL within SharePoint. Choose a field from a Kianda form.
   - **Site description field** will be used for the SharePoint site description. Choose a field from a Kianda form.
   - **Inherit parent permissions** - options are: **Yes** and **No**. If you choose 'Yes' it will allow your new site to inherit parent permissions for that SharePoint location.
5. Once these fields are set you can also set conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information. 
6. The final two sections are optional: **On success mapping** and **Error mapping**. See [Success and Error Mapping](/docs/platform/rules/general/success-error-mapping/) for more information. 

6. Click on **OK** when complete.

   

### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about **Create a site**, return to the [SharePoint rules](/docs/platform/rules/sharepoint/) page to find out about other SharePoint rules. 
