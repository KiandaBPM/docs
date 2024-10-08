---
title: "Data rules"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

**Data** rules is the category of rules that enables the flow of data between data connectors and form elements, for example reading or writing data from a database table or performing data manipulation. 

![Data rules](/images/data-rules-all.jpg)

Take an example of one of the rules in the Data rules category, the **Find items** rule. This rule can be used to extract data from a data source and use this information in a Kianda form. Take an example of an Employee Onboarding or New hire process, where a user chooses a country for a 'Country' field from a drop-down list.

![Drop-down list Find items example](/images/find-items-example.jpg)

The drop-down list is populated using a SharePoint list in this example, and the 'Country' field in turn uses a **Find item** rule to populate the table below it in the form.

![Find items rule populating a table](/images/find-items-populate.jpg)

The section below introduces each of the Data rules.



## Getting started with Data rules ##

If you go to **Administration** > **Designer** and click on a process or create a new process, then click on **Add a rule** the **Data** rules are found in the left-hand pane when you click on **Data**.

There are five types of **Data** rules as follows:

- **Create item** - The create item rule is used to create an item on your data connection. This is a straightforward rule which allows you to connect to your data source and map inputs. You can also map a data source field or text back to Kianda on success or store an error message on failure.

- **Delete item** - To delete an item from your data connection, you could use a data source filter and map data source field or text from a data connection to Kianda form field.

- **Update item** -  This rule works in the same way as the Delete item rule. At any point, if you would like to update any item on your data connection, use this rule. To find an item to update, you could use a data source filter and map the input fields or text.

- **Find items** - Use this rule together with a datasource to perform a query and return data for use with the form. To find an item, you could use a data source filter which acts as a conditional bridge between Kianda and data-connections. If the condition is true, you could map the data source field or text to the Kianda form field.

- **Set form field** - This rule is used to update the value of fields in a form. The field value could be simple text or based on a custom expression with the ability to define JavaScript expressions. Use this rule to copy content between fields or to apply a custom expression to set the value of a given field. 

  

### What's next  ![Idea icon](/images/18.png) ###

We have briefly introduced each of the five types of **Data rules**. Click on the links below to find out more about each rule in detail. 

