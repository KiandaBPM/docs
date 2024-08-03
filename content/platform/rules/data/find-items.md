---
title: "Find items data rule"
linkTitle: "Find items"
typora-root-url: ..\..\..\..\..\static
weight: 2
---

## Introduction

This rule implements the Read function which is one of the four CRUD (Create, Read, Update and Database) functions.  The rule will read one or more items of data from a chosen data source, for example SharePoint, SAP or Oracle databases, see [Data connectors](/docs/platform/connectors/) for more details. 

This rule is used to find an item from your data connections. To find an item, you could use a data source filter which acts as a conditional bridge between Kianda and data connections. If the condition is true, you could map the data source field or text to the Kianda form field.

This rule is used to perform a query and return data for use in the form. The data may be stored locally or in one of the data sources

The Data source filter is useful when you want to query data from a specific user using a unique identifier like an Id, name or email.

## When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Data** > **Find items**.

3. In the **Edit rule - Find items** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Assign form dialog box](/images/find-items-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Click on **Select data source** button ![Select data source](/images/button-select-data-source.jpg) to select the desired data source. When you select your data source, new mappings options are presented.

   ![Find items - mapping](/images/find-items-mapping.jpg)

6. **Data source filter** - this is used to filter data within your datasource. It works on condition bases which allows you to pull wanted and unwanted data back into the process. To learn more about conditions go to [Conditions](/docs/platform/rules/general/add-conditions/).

7. **Map results to table**:

   - **Yes** -  selecting this option will allow you to map results to a table and opens the following options below:

     ![Find items - mapping](/images/find-items-table-map.jpg)

     - **Select a table** - allows you to select a table from within your process which will be populated by mapping. This is useful when you want to display a lot of data from the datasource.
     - **Existing rows behaviour**:
       -  **Override** - will override any duplicate date therefore will keep the last duplicate inside of the table.
       - **Append** - will add any duplicate data to the table and therefore all occurrence of data will be displayed in the table.
     - **Enable server paging** - enables the server paging configurations. For example if your data source has 10 row per page, enabling this option will force the table to have 10 rows per page.

   - **No** - selecting this option will only pull the first occurrence from your data source.

8. **Results mapping** - is used to set fields within your form from the datasource itself. To learn more about results mapping go to [On Success Mapping](/docs/platform/rules/general/success-error-mapping/#on-success-mapping).

9. **On error mapping** - you can expand this option by clicking on it, then add fields where you can display any error message that may have occurred during the mapping process. To learn more about error mapping go to [On Error Mapping](/docs/platform/rules/general/success-error-mapping/#on-error-mapping).

10. **Max rows** - will allow you to set a number of fields to be displayed within a table.

11. **Sort By** - allows you to sort the results of your datasource within the mapped rows of the table.



### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name.
2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name.
3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).
4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### What’s next ![Idea icon](/images/18.png)

To find out more about other Data rules go to [Data rules](/docs/platform/rules/data/).

To find out more about other rules go to [Rules](/docs/platform/rules/).



