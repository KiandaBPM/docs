---
title: "Create an anonymous link"
typora-root-url: ..\..\..\..\..\static
---

This rule allows you to create an anonymous link for a file within SharePoint from a Kianda form. This can be useful for example to share with contractors who don't need to be set up as SharePoint users, but may need access to a file in SharePoint. 

## When to use

This rule should be used when a file within SharePoint should be shared with an individual via an anonymous link.

You can add this rule:

- [x] to a field

- [x] to a form 

- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Create anonymous link**, in your process you need to have created at least one or more forms. The create anonymous link rule also requires two control fields. A **file control** in order to store a file which you want to share and a **text box control** for storing the generated link. You can also create another text box or a number field to store the link duration, this field is optional but can be a good idea if you want to customise the duration of the link dynamically.

- **File field** - used to store the file which you want to create a link to. To learn how to create a file field go to [File upload control](/docs/platform/controls/input/file-upload/).
- **Text box field** - used to store the generated anonymous link which can be shared with other users. To learn how to create a text box field go to [Text box control](/docs/platform/controls/input/textbox/).
- **Text box or Number field (optional)** - allows you to determine  the duration of the link in hours. To learn how to create a number field go to [Number control](/docs/platform/controls/input/number/).

## How to use

To apply this rule, first choose an item to attach the rule to, for example a file field within a form in Kianda.

1. Select a file field.

2. Click on **Add a rule** > **SharePoint** > **Create anonymous link**.

3. In the **Edit rule - Create anonymous link** dialog box, give the rule a **Title**.

   ![Create anonymous link dialog box](/images/create-anon-link-rule.jpg)

4. Under **Select a file field with files to create anonymous link(s)** select the file field to link to the desired SharePoint file(s). 

5. Under **Link duration in hours** type in a number value. By default the link duration is 6 hours, but this can be increased or decreased as needed. 

6. Under **Select a field to store resulting anonymous link(s)** choose a field within Kianda to store this anonymous link, which can then be used to access the file. For example you could create a utility panel with a textbox for the anonymous link, where the panel and the textbox are not visible to users. This textbox is simply used to hold the system generated link.

7. Once these fields are set you can also set conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more information. 

7. The final two sections are optional: **On success mapping** and **Error mapping**. See [Success and Error Mapping](/docs/platform/rules/general/success-error-mapping/) for more information. 

9. Click on **OK** when complete.

   

### User tip ![Target icon](/images/05.png) ###

If you have multiple rules attached to the field or other item, you may wish to reorder the rules to change the order of rule execution. Go to [Multiple rules](/docs/platform/rules/general/multiple-rules/)  to find out more. 



## What's next  ![Idea icon](/images/18.png) ##

Now that you've learned about **Create anonymous link**, return to the [SharePoint rules](/docs/platform/rules/sharepoint/) page to find out about other SharePoint rules. 
