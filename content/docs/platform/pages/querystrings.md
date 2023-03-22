---
title: "Query Strings"
typora-root-url: ..\..\..\..\static
weight: 11
---

## What is a Query String?

Before we explain how and where you can use query strings within Kianda, you'll need to understand what a query string is. This way you'll have a good understanding in which ways you can use them. To put it simply, a query string is a set of characters that gets appended onto the end of a URL path beginning with a question mark `?`. A query string contains parameters with values assigned to them separated with an equals sign `=`. An example of such query string is: `?name=John` . You can have multiple parameters within a query string and those parameters are separated by an ampersand `&`, an example of multiple parameters in a query string  would be: `?firstName=John&lastName=Rea`. A full example of a URL and a query string would for instance look like this: `https://green-itr.kianda.com/some/ulr/path?firstName=John&lastName=Rea`

## Query Strings in Kianda

By using query string in Kianda, you are able to transfer information and data easily within different areas of the platform such as [Dashboards pages](/docs/platform/pages/) and [Processes](/docs/platform/application-designer/process/). They allow you to pass data from a dashboard page into a processes or vice versa if required depending on your needs. Those two areas where you can use query strings are split further into more particular and specific areas which are explained in How to use [Query Strings in Dashboard pages](/docs/platform/pages/querystrings/#how-to-use-query-strings-in-dashboard-pages) and [How to use Query Strings in Processes](/docs/platform/pages/querystrings/#how-to-use-query-strings-in-processes).

### How to use Query Strings in Dashboard pages

Query strings are used in dashboards to **transfer** data into **processes** or you can also use them by **navigating** from **dashboard to dashboard** while also passing data. In dashboard pages you can create query strings by using the [Filter](/docs/platform/pages/filter/) and [Link](/docs/platform/pages/link/) widgets.

#### Link Widget Query Strings

![Dashboard Link widget Edit link dialog box](/images/dashboard-link-edit-link-dialog2.jpg)

There are two ways the append query works within the Link Widget, and that depends whether you want it to redirect you to a **Process** or a **Dashboard**. To learn more about the Link Widget, visit [Link Widget](/docs/platform/pages/link/). When redirecting to a **process**, you should always check the **Append query?** checkbox as the query will not automatically append to your URL and the query string parameter(s) will be lost. When redirecting to a dashboard with the **Append query?** checkbox checked, the query will append to the existing query string to the URL. But if the checkbox is unchecked, the query string will be overwritten. This is useful when working when passing query string parameters through multiple dashboards. To pass a query string parameter, in the **QueryString parameters textbox**, type in the name of your parameter and the value separated by an equals sign `=`. If you want to pass in more than one parameter, separate them by using an ampersand `&`, for example, `firstName=John&surname=Smith`. When the link will be clicked from the dashboard widget, the query string parameter will be passed into the URL which can be then used within your process. To learn more on how to retrieve a query string parameter in a process, go to [Expression builder Query Strings](/docs/platform/pages/querystrings/#expression-builder-query-strings).

#### Filter Widget Query Strings

![Filter widget query string example](/images/filter-query-string-example.jpg)

You can use a query string with in the **Dropdown list**, **Radio list** and **Free text** Filter type. To be able to add the query string to your filter, you must check the **Enable query string?** checkbox. This will allow you to specify a parameter name in the textbox with the place holder text that says "Parameter name".  The **Auto update URL** checkbox is used to automatically update URL in real time when an option is selected and therefore it is recommended if other dashboard widgets require query strings based on the input of the filter. 

When working with a **Dropdown** or a **Radio** list filter type, the specified parameter name will hold the value of the option you select. For example if the parameter name is `name` and the option `John` is chosen, the query string will be `?name=John`

![Filter widget query string example](/images/filter-example.jpg)

When working with a Free text filter type, the idea of the parameter name is exactly the same as explained when working with **Dropdown** or **Radio** list, the only difference is that the value of your parameter will be the text you type into the filter search bar. The URL will be updated when you click away from the filter search bar which signals the system to update the query string parameter:

![Free text filter widget query string example](/images/free-text-filter-example.jpg)



### How to use Query Strings in Processes

To use query strings in a process, you first need to create query strings from a dashboard and pass parameters from your dashboard into a process, to learn more on how create query strings in a dashboard, see [How to use Query Strings in Dashboard pages](/docs/platform/pages/querystrings/#how-to-use-query-strings-in-dashboard-pages) above. You can retrieve the query string parameters from a the URL within a process by using an expression builder which is explained in more detail under [Expression builder Query Strings](/docs/platform/pages/querystrings/#expression-builder-query-strings). You can also create query string parameter from a process and pass it on into a dashboard using the [Close rule](/docs/platform/rules/form-actions/close-form/) available from the **Form actions** set of rules. Passing query strings using the close rule is explained in more detail under [Close rule Query Strings](/docs/platform/pages/querystrings/#close-rule-query-strings)

#### Expression builder Query Strings

![Expression builder](/images/expression-builder.jpg)

To retrieve a query string parameter from the URL, you can use the expression builder which is available for use using the Set form field. Typically the retrieval of a query string parameter is done using in the Onload rules section of a process with the idea of it being that the query string parameter will automatically (onload of a process) load the parameters value into a desired process field. To do so:

1. Attach a **Set form field** into the **Onload rules** and select a form field from your process in the **From field to set** dropdown.
2.  open the expression builder using the Ellipsis button:

![Expression builder](/images/set-form-field-exp-builder.jpg)

2. In the Expression builder dialog box click on the ![reference button](/images/reference.png)to open a menu of reference to functions available in the expression builder.

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

   
