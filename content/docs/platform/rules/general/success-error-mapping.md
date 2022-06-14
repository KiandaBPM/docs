---
title: "Success/Error Mapping"
typora-root-url: ..\..\..\..\..\static
weight: 3
---

## Introduction
Success/Error mapping is used to denote the success or failure of certain rules being executed where data is being transferred or a rule is connected to a data connector. As an **administrator** or **designer**, you can use Kianda **Designer** to populate fields within the Kianda form, in the **Edit rule** dialog box and set parameters for success and error mapping.


## When to use
Success/Error mapping should be with rule execution, displaying values that you want for rule execution success or failure.

**You can use mapping with the following rules:**

- [x] Data rules > Find items
- [x] Data rules > Create item
- [x] Data rules > Update item
- [x] Data rules > Delete item
- [x] All SharePoint rules, except Get attachments and Create anonymous link

## How to use

1. Select the field that will have the rule attached, for example a button at the end of a form, or a field within a form.

2. Click on **Add a rule** in the left-hand pane and select one of the rules that uses mapping as shown in the [When to use](#wehn-to-use) list above, for example the **SharePoint rule** called **Create list**.

3. In the **Edit rule** dialog box, give the rule a **Title**, add conditions if desired by clicking on the **Edit conditions** button and under **Action** select a SharePoint data source from the dropdown list.

   ![(Example of a rule with mapping)](/images/create-a-list-eg.jpg)

4. Fill out any additional fields as necessary, for example to create a list the following fields must be completed.

5. For on success mapping select the “form field” and chose the field within the form which you want to store the information. 

6. Then in the “data source field or text” you can select the column/field within your respective data source and this value will be stored in the “form field”.

7. For on error mapping, you simply need to select the field within the form which will store the error message

8. Then select the error message from the dropdown. This error message will be a system generated error which will indicate what if anything has gone wrong when the rule executed.

9. Click OK and the mapping is set.



### What's next  ![Idea icon](/../content/docs/platform/rules/general/success-error-mapping.assets/18.png) ###

To find out more about rule implementation, go to the main [Rules](/docs/platform/rules/) page and then click on the links to the different rule categories.
