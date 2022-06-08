---
title: "Update data item rule"
linkTitle: "Update item"
typora-root-url: ..\..\..\..\..\static
---

At any point, if you would like to update any item on your data connection, this rule does it. To find an item to update, you could use a data source filter and map the input controls or text.

![Update item dialog box](/images/updateitem.png)

## When to use 
You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

### How to use
To ..SharePoint list
1. Click on a button e.g. the Submit button.
2. Select Add a rule > Data >Update item.
3. Under Action, click on Select data source.
4. Data source filter
5. Under Input mapping
6. Under On success mapping
7. Under On error mapping

### Notes
Use this rule together with a datasource to perform an update query and return data identifiers for use with the form. Employ the transactional nature of the rule with input fields, results and error nodes to build retry logic.		

Mapping for blank fields: then if this flag is set, for example, if there are two fields to be updated and the user wants to update only one, and leaves the other blank, then the filled out field is updated and the other field is left unchanged.