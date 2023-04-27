---
title: "Query Strings"
typora-root-url: ..\..\..\..\static
weight: 11
---

## What is a Query String?

Before we explain how and where you can use query strings within Kianda, you'll need to understand what a **query string** is, to help your understanding of how to use them. To put it simply, a query string is a **set of characters** that gets **appended onto the end of a URL path** beginning with a question mark `?`. 

A query string contains **parameters** also know as a key and value pair. Each key and value is separated by an **equal** sign `=`. An example of such query string with a single parameter is: 

`?name=John` 

where `name` is the key or object and `John` is a particular value assigned to `name`.

You can have **multiple parameters** within a query string and those parameters are **separated by an ampersand** `&` for example:

`?firstName=John&lastName=Rea`

A full example of a **URL and a query string** would for instance look like this: 

`https://green-itr.kianda.com/some/ulr/path?firstName=John`

or

`https://green-itr.kianda.com/some/ulr/path?firstName=John&lastName=Rea`

**Both** of the examples above **classify as a query string**, the only **difference** is the amount of **parameters** they hold, for example the latter holds two parameters which are a) `firstName=John` and b) `lastName=Rea`.

## Query Strings in Kianda

By using query string in Kianda, you are able to **transfer information** and data easily within different areas of the platform such as [Dashboards pages](/docs/platform/pages/) and [Processes](/docs/platform/application-designer/process/). Query strings allow you to pass data from a dashboard page into a processes or vice versa if required depending on your needs. How query strings are used in both areas are explained as follows: 

- [How to use Query Strings in Dashboard pages](/docs/platform/pages/querystrings/#how-to-use-query-strings-in-dashboard-pages)
- [How to use Query Strings in Processes](/docs/platform/pages/querystrings/#how-to-use-query-strings-in-processes).

### How to use Query Strings in Dashboard pages

When working with **query strings** in Kianda dashboard pages, we need to **create** a query string and **append** it to the **URL**. Once a query string is **created** and **appended** onto the **URL**, you can then use them in [Processes](/docs/platform/application-designer/process/) or other Dashboard pages. 

You can **create query strings** in a dashboard by utilising the [Filter](/docs/platform/pages/filter/) and [Link](/docs/platform/pages/link/) widgets which you can then use to **navigate** from a **dashboard to a process** or from a **dashboard to another dashboard**, while keeping the query string in order to **use** its **parameters**. Read more on specific widgets under [Link Widget Query Strings](/docs/platform/pages/querystrings/#link-widget-query-strings) and [Filter Widget Query Strings](/docs/platform/pages/querystrings/#filter-widget-query-strings). 

#### Link Widget Query Strings

Within the Link widget, we create parameters and assign them values which are then added into the URL creating a query string. To learn what a query string is, go to [What is a Query String](/docs/platform/pages/querystrings/#what-is-a-query-string).

To **create** a query string using the Link widget, first, you need to create the **Link Widget** in your dashboard, to do so follow steps 1 - 6 under [How to get started](/docs/platform/pages/link/#how-to-get-started) so that the **Edit link** dialog opens as shown in the image below.

![Dashboard Link widget Edit link dialog box](/images/dashboard-link-edit-link-dialog2.jpg)

The **QueryString parameters** textbox in the **Edit link** dialog box is where you can create **parameters** and **assign** them **values**. For example we want to create a **country** parameter with a value of **Ireland**, our **QueryString parameters** textbox will look like this: ![Dashboard Link widget Edit link dialog box](/images/qs-country-example.jpg) 

Once we click on the link in our link widget, our URL will be updated to `https://{website-domain}/some/ulr/path?country=Ireland`. 

The **Append query?** checkbox is used when you want to have the ability for the link to add another parameter with its value to the query string. We'll explain this concept in two examples, an **unchecked** version and **checked** version. 

##### <u>Append query Unchecked</u>

![Dashboard Link widget Edit link dialog box](/images/qs-country-example.jpg)

When the **Append query** checkbox is **unchecked**  we have two ways the functionality will work: 

- If the URL **does not contain a query string**, the click of the link will **create a new** query string with the given **parameter and value**. For example if the URL looks like this before clicking the link: `https://{website-domain}/some/ulr/path`. Then after the link is clicked, the URL will look like this: `https://{website-domain}/some/ulr/path?country=Ireland`. The question mark is added automatically by the system so there is no need to add it into the textbox.

- If the URL **already contains a query string**, the **existing** query string will be **overwritten**. This means that, for example, if the URL already holds parameters in the query string such as this: 

  `https://{website-domain}/some/ulr/path?firstName=John&lastName=Rea`. 

  After the link is clicked, the URL will be overwritten to:   `https://{website-domain}/some/ulr/path?country=Ireland`

##### <u>Append query Checked</u>

![Dashboard Link widget Edit link dialog box](/images/qs-country-checked.jpg)

When the **Append query** checkbox is **checked**  we have two ways the functionality will work: 

- If the URL **does not contain a query string**, the click of the link will **create a new** query string with the given **parameter and value**. For example if the URL looks like this before clicking the link: `https://{website-domain}/some/ulr/path`. Then after the link is clicked, the URL will look like this: `https://{website-domain}/some/ulr/path?country=Ireland`. The question mark is added automatically by the system so there is no need to add it into the textbox.
- If the URL **already contains a query string**, the **parameter with its value will be appended** to the query string. For example, if the URL already holds parameters in the query string such as this: `https://{website-domain}/some/ulr/path?firstName=John&lastName=Rea`. After the link is clicked, the URL will be updated to:   `https://{website-domain}/some/ulr/path?firstName=John&lastName=Rea&country=Ireland`

By using the link to navigate to a **process**, you can then use the query string parameters by populating their values into a process field, to learn how to do so, visit [Expression builder Query Strings](/docs/platform/pages/querystrings/#expression-builder-query-strings).

#### Filter Widget Query Strings

To **create** a query string using the Filter widget, first, you need to create the **Filter Widget** in your dashboard, to do so follow steps 1 - 6 under [How to get started](/docs/platform/pages/link/#how-to-get-started) so that the **Edit link** dialog opens as shown in the image below. You can use a query string with the **Dropdown list**, **Radio list** and **Free text** Filter types.

To add a query string to your filter, you must check the **Enable query string?** checkbox. This will allow you to specify a parameter in the textbox with the place holder text that says "Parameter name". In the example below a parameter called '`name`' is used which will have the values '`Paul`', '`John`' or '`David`' assigned to it by user interaction.

![Filter widget query string example](/images/enable-query-string.jpg)

The **Auto update URL** checkbox is used to automatically update URL in real time when an option is selected and therefore it is recommended if other dashboard widgets require query strings based on the input of the filter. 

When working with a **Dropdown** or a **Radio** list filter type, the specified parameter name will hold the value of the option you select. For example if the parameter name is `name` and the option `John` is chosen, the query string will be `?name=John`

![Filter widget query string example](/images/filter-example2.jpg)

When working with a Free text filter type, the idea of the parameter name is exactly the same as explained when working with **Dropdown** or **Radio** list, the only difference is that the value of your parameter will be the text you type into the filter search bar. The URL will be updated when you click away from the filter search bar which signals the system to update the query string parameter:

![Free text filter widget query string example](/images/free-text-filter-example.jpg)



### How to use Query Strings in Processes

To use query strings in a process, you first need to create query strings from a dashboard and pass parameters from your dashboard into a process, to learn more on how create query strings in a dashboard, see [How to use Query Strings in Dashboard pages](/docs/platform/pages/querystrings/#how-to-use-query-strings-in-dashboard-pages) above. 

You can use query strings within a process in a number of ways namely:

a) retrieve the query string parameters from the URL within a process using an expression builder which is explained in more detail under [Expression builder Query Strings](/docs/platform/pages/querystrings/#expression-builder-query-strings)

b) create query string parameter from a process and pass it on into a dashboard using the [Close rule](/docs/platform/rules/form-actions/close-form/) available from the **Form actions** set of rules. Passing query strings using the close rule is explained in more detail under [Close rule Query Strings](/docs/platform/pages/querystrings/#close-rule-query-strings).

#### Expression builder Query Strings

![Expression builder](/images/expression-builder.jpg)

To retrieve a query string parameter from the URL, you can use the **expression builder** which is available for use using the **Set form** field. Typically the retrieval of a query string parameter is done using in the **Onload rules section** of a process so that the query string parameter will automatically (onload of a process) load the parameters value into a desired process field. To achieve this follow the steps below:

1. Attach a **Set form field** into the **Onload rules** and select a form field from your process in the **From field to set** dropdown.
2.  Open the expression builder using the Ellipsis button:

![Expression builder](/images/set-form-field-exp-builder.jpg)

2. In the Expression builder dialog box click on the **Reference** button ![reference button](/images/reference.png)to open a menu of reference to functions available in the expression builder.

3. Copy the **QueryString('parameter')** function and paste it into the expression text box.

4. Replace the 'parameter' text within the brackets of the function with the query string parameter you want to retrieve. For example if your URL contains a `name` parameter like this: ![Expression builder](/images/URL-qs.jpg). Then to retrieve the value, the expression textbox will look as follows:

   ![Expression builder](/images/qs-expbuilder-name.jpg)

5. Click on **OK** in the expression builder dialog box.

#### Close rule Query Strings

![Return to dashboard option](/images/rule-close-return-dashboard.jpg)

You can create query strings using the [Close rule](/docs/platform/rules/form-actions/close-form/) available from the **Action forms** set of rules. The close rule query strings are typically used when **navigating** to a **dashboard** when a process instance is completed and submitted. The idea is that when you're navigated to a dashboard after completing a process, you can pass some information from the process into a dashboard to display certain data in that dashboard. You can also use the close rule to start a new **process** and pass some data from the process itself to **populate** process fields that you're starting. Passing parameters in both scenarios works the same:

1. In the **On form close navigate to** option, select **Return to a dashboard** or **Go to process**.

2. In the dropdown above the **Query string parameters** option, select the respective dashboard or process you wish to navigate to. To learn more about the **close rule**, visit [Close rule](/docs/platform/rules/form-actions/close-form/).

3. In the Query string parameters dropdown/textbox you can select a process field as a parameter. This will force the system to use the fields unique name as a parameter name and the value of that field will be the value of the parameter. For example, when a fields unique name is `firstName` and the value of that field is `John`, the final URL will look something like this: `https://green-itr.kianda.com/some/ulr/path?firstName=John`. See image below for the setup of the example: 

   ![Query string and close rule example](/images/qs-close-rule-example.jpg)

   