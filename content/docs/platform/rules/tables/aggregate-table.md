---
title: "Aggregate table"
weight: 11
---

This rule allows you to aggregate the values of a column in a table within Kianda.

When to use:

This rule should be used when working with a table in Kianda and you want to aggregate the values in a column and store this in another field within the form.

You can add this rule:

·    to a field

·    to a form

·    to a process (the rule will run on load)

 

How to use:

1. To aggregate a table column, the first step is to select the table which you want to use.

2. Following this you will select the operation which you want to perform on the column, be this sum, average, or count.

3. You will then be presented with two fields **select a number field to aggregate** & **Results field**. 

You can also set a **table aggregate condition** this will be 	used to set conditions on how the table aggregation will be performed, for more details on conditions, please see here: 

https://docs.kianda.com/docs/platform/rules/general/add-conditions/



4. These two fields will be present within the Kianda form and are used to confirm the number column within the table which will be used in the aggregation. And the results field will be a field within the form, which will be used to store result of the aggregation

5. Finally, there is a check box which will enable auto update of the result, which will automatically update the result field when a change is made within the table.

 

Once these fields are set you can also set conditions on the rule, further details on conditions can be found here:

https://docs.kianda.com/docs/platform/rules/general/add-conditions/