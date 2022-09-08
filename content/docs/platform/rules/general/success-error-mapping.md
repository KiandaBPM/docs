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

7. To add success mapping, click on **On success mapping** and click on the **Add mapping** button. See [On Success Mapping](/docs/platform/rules/general/success-error-mapping/#on-success-mapping) for more details.

8. For **On error mapping** and click on the **Add mapping** button. See [On Error Mapping](/docs/platform/rules/general/success-error-mapping/#on-error-mapping) for more details.

9. you simply need to select the field within the form which will store the error message

10. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box. 

### On Success Mapping

Success mapping is a concept of **populating** your form fields with **data** that is **retrieved** from a **datasource** using a **data connector**, to learn more about data connectors go to [Data connectors](/docs/platform/connectors/). This retrieved data from the datasource is known as a **response**. Using this response data, you can populate a field within your form, for example you can retrieve a file which is stored in your SharePoint or Dropbox datasource and populate the retrieved file into a **File field**. This will give you the ability to access the retrieved file in your process. 

All data connectors within Kianda may have different response data that can be used to populate fields in a form. You can use the **Success mapping** in the rules mentioned in the [When to use](/docs/platform/rules/general/success-error-mapping/#when-to-use) section. Take one of the SharePoint rules [**Create a site**](/docs/platform/rules/sharepoint/create-a-site/) as an example. When all information is filled out in the rule, in the **On success mapping** section you can assess the **data object** (response) called **Site properties**. From the **Site properties** data object you can access three different pieces of data; **Site Name**, **Site Id** and **Site URL**. You can map (populate) those piece of data into fields in your form by selecting a field in the **Form field** section: 

![Success mapping example](/images/success-mapping.jpg)

- **Form field** - this field allows you to select a field in your form to store the value from the datasource.
- **Data source field or text** - this field allows you to select which piece of data your want to retrieve from the datasource, and store it in a form field.
- **Add mapping** - Click on the **Add mapping** to add more fields for mapping results from the datasource to form fields.
- **Bin/Trash** **![Bin/Trash button](/images/bin.png)** - Click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png) to delete a mapping.

### On Error Mapping

Error mapping is a concept of populating a form field in your Kianda process when using the rules from the [When to use](/docs/platform/rules/general/success-error-mapping/#when-to-use) section. When using those rules, you get presented with ability to map an **error** when there is an **issue** as the rule is executing. You might get an error when some details from the rule is not filled out properly or some details are missing. You have no way of telling what kind of error it is but the details of the error message will come from the datasource that you are trying to use. To see the error message, you need to create a separate text box field in your form and map the error to that field. Open the **On error mapping** section and add a mapping by clicking on **Add mapping** button:

![Error mapping example](/images/error-mapping.jpg)

- In the **Form field** select a form field which will store the error message in your Kianda form.
- In the **Error message or text** enter a error message that you want to appear in the event of errors or click on the text box and select the **Error message** option to use a system generated error indicating what has gone wrong when the rule executed.
- Click on the **Add mapping** to add further mappings.
- Click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png) to delete a mapping.

## What's next  ![Idea icon](/images/18.png) ##

To find out more about rule implementation, go to the main [Rules](/docs/platform/rules/) page and then click on the links to the different rule categories.
