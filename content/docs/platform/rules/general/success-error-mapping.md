---
title: "Success/Error Mapping"
typora-root-url: ..\..\..\..\..\static
weight: 3
---

## Introduction
Success and Error mapping is used to denote the success or failure of certain rules being executed where data is being transferred or a rule is connected to a data connector. As a user with a **administrator** or **designer** role, you can use Kianda **Designer** to populate fields within the Kianda form, using the **Edit rule** dialog box to set parameters for success and error mapping.


## When to use
Success and Error mapping should be with rule execution, displaying values that you want for rule execution success or failure.

**You can use mapping with the following rules:**

- [x] Data rules > Find items
- [x] Data rules > Create item
- [x] Data rules > Update item
- [x] Data rules > Delete item
- [x] All SharePoint rules, except Get attachments and Create anonymous link

## How to use

1. Select the field that will have the rule attached, for example a button at the end of a form, or a field within a form.

2. Click on **Add a rule** in the left-hand pane and select one of the rules that uses mapping as shown in the [When to use](#wehn-to-use) list above, for example the **SharePoint rule** called **Create list**, used to create a list in SharePoint dynamically using Kianda form data.

   ![(Example of a rule with mapping)](/images/create-a-list-eg.jpg)

3. In the **Edit rule** dialog box, give the rule a **Title**.

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under **Action**, click on the field **Select a SharePoint data source** from the drop-down list.

   ![Create a list example with details](/images/create-a-list-filled.jpg)

6. Fill out any additional fields as necessary, for example to create a list the following fields must be completed:

   - **List template** - choose from a list of SharePoint list types

   - **List name field** - choose a form field that will be used the create a name for the list in SharePoint

   - **List url field** - choose a form field that will be used in the creation of a URL within SharePoint

   - **List description field** - choose a form field that describes what the list is about

   - **Quick Launch menu** -  options are **Yes** or **No**. Choosing **Yes** allows the created list to be displayed in the Quick Launch menu, containing a link to the list.

7. To add success mapping, click on **On success mapping** and click on the **Add mapping** button:

   - In the **Form field** select a form field which will store information in your Kianda form
   - In the **Data source field or text** select a data source field that is used in the mapping
   - Click on the **Add mapping** to add further mappings
   - Click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png) to delete a mapping

8. For **On error mapping** and click on the **Add mapping** button:

   - In the **Form field** select a form field which will store information in your Kianda form
   - In the **Error message or text** enter a error message that you want to appear in the event of errors or leave empty to use a system generated error indicating what has gone wrong when the rule executed.
   - Click on the **Add mapping** to add further mappings
   - Click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png) to delete a mapping

9. you simply need to select the field within the form which will store the error message

10. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box. 



### What's next  ![Idea icon](/../content/docs/platform/rules/general/success-error-mapping.assets/18.png) ###

To find out more about rule implementation, go to the main [Rules](/docs/platform/rules/) page and then click on the links to the different rule categories.
