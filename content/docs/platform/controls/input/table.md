---
title: "Table control"
linkTitle: "Table control"
weight: 5
typora-root-url: ..\..\..\..\..\static
---

**Table controls** (fields) can be inserted in a form if you want form users to complete a table, if you want display data pulled from external sources in a table, or if you want a table to be autofilled as part of a rule. Tables can include different types of fields, such as text boxes, date fields, number fields, and list fields. 

For example, in a Purchase Order Request form, you may want to use a Table field to display certain information about items or suppliers and/or to capture details the user inputs about items being ordered. In addition, you could apply rules to some of the fields within the table to, for example, automatically calculate totals or percentages or to pull in data from external data sources. 

For more information about applying rules to fields and forms go to [Rules](/docs/platform/rules/) and for more specific information about applying rules to **Table fields** see [Table rules](/docs/platform/rules/tables/).

We will now go through
- [how to add a Table field to a form](/docs/platform/controls/input/table#how-to-get-started)
- [how to edit column fields in a Table](/docs/platform/controls/input/table#how-to-edit-column-fields-in-a-table)
- [how to change the title of a Table colulmn](/docs/platform/controls/input/table#how-to-change-the-title-of-a-table-column)
- [how to delete a column from a Table](/docs/platform/controls/input/table#how-to-delete-a-column-from-a-table)
- [how to change the field type of an existing Table column](/docs/platform/controls/input/table#how-to-change-the-field-type-of-an-existing-table-column)
- [how to insert new columns in a Table](/docs/platform/controls/input/table#how-to-insert-new-columns-in-a-table)
- [how to move columns in a Table](/docs/platform/controls/input/table#how-to-move-columns-in-a-table)
- [how to edit the Table field](/docs/platform/controls/input/table#how-to-edit-the-table-field)
- [how to move Table fields](/docs/platform/controls/input/table#how-to-move-table-fields)
- [how to delete Table fields](/docs/platform/controls/input/table#how-to-delete-table-fields)
- [how to edit Table field properties](/docs/platform/controls/input/table#how-to-edit-table-field-properties)

## How to get started

1. To add a **Table field** to a form, first open the relevant process. Then select the form within that process that you want to add the field to (so that the **Edit Form** button ![Edit form button](/images/penicon.png) is visible). 

2. Insert the **Table field** by clicking on **Controls** in the left-hand pane to expand the Controls menu, then select **Input** to view the range of Input controls and click on **Table**. A Table field will be added to your form with the default title of ''**Table 1**'' and a pop-up message will say 'Field added'.

   ![Table field added](/images/table-added.jpg)

   

   By default, the new **Table field** will have one row with two columns of text fields, titled **Text 1** and **Text 2**. You can add rows, columns and various different types of fields to the table by editing the table field, as outlined in the next section. In the example shown here, a new table has been added to a form called 'Training Request'.


### How to edit, move and delete Table fields

As we go through the options available for editing a Table, we will keep in mind the example of the table we added to the 'Training Request' form above. 

#### How to edit column fields in a Table

First, decide **how many columns** you need in your table and **what type of input field** you want to use for each column. To learn more about the eight different types of Input fields that you can use, go to [Input controls](/docs/platform/controls/input/).

In our example, we want to change the default table that was inserted - titled **Table 1** with two columns of text box fields - into a table called 'Existing Qualifications' to capture the existing qualifications of the user who is requesting further training. 

We want our table to have three columns: the first column will be a text box field titled 'Qualification Description' where the user will manually type in the name of a qualification, the second column will be a drop-down list titled 'Educational Institution' (which could link to an external data source) where the user will choose the relevant institution, and the third column will be a date field titled 'Date Qualification Obtained', as shown here:

![Table example training](/images/table-training-example.jpg)

##### How to change the title of a Table column

To change the title of the default first column texbox field from **Text 1**, simply select that field by either clicking on the field title or by clicking into the blank text box so that the **Edit field** button  ![Edit field button](/images/penicon.png) (Pen icon) displays and then click the Edit field button.

![Table select field to edit](/images/table-edit-field.jpg)

The **Edit field - Text** dialog box will open and you can change the title of the field here. There are also a number of other options available to you - see [Text box control](/docs/platform/controls/input/textbox/) for more information on how you can edit text box fields.

##### How to delete a column from a Table

To delete a column from a Table field, select the column field you want to delete (either by clicking on the title or clicking into the blank field below the title) so that the Edit field and **Bin/Trash** button ![Bin icon](/images/binicon.png)are shown, click the **Bin/Trash** button:

![Delete Table column](/images/table-delete-column.jpg)

##### How to change the field type of an existing Table column

In our example, we want the second column in our table to be a drop-down list. We can either delete the default second text box column and then insert a new list column or we can **change the field type of the existing column** from text box to list. To do this, select the column field you want to change (by either clicking on the column Title or clicking into the blank box below it) so that the Edit field button ![Edit field button](/images/penicon.png) (Pen icon) is shown and then click on the **Change field** button in the right-hand pane:

![Change Table column type](/images/table-change-column-type.jpg)

A **Change** dialog box will open up, allowing you to change the existing column field type to another type of input field - there are many options to choose from (only some of which are shown here):

![Table change column type dialog box](/images/table-change-column-type-dialog.jpg)

In our example, if we want to change the 'Text 2' text box column to be a List field, we would select the **List** radio box and then click **OK** to confirm. An **Edit field** dialog box for the type of input field you have chosen will then open, allowing you to change the column field title (in our case, we will rename it as 'Educational Institution') and to choose from a range of options relevant to that field type. 

##### How to insert new columns in a Table

To **insert new columns into a Table**, either select the Table field itself or select one of the individual columns, then go to **Controls>Input** in the menu in the left-hand pane and click on the **type of input field** you want to insert. The new column will be inserted to the right of the existing columns, or, if you selected one of the existing columns before inserting the new column, it will be inserted to that right of that column.

In our example, we will insert a date field to be our third column (and can then rename it as 'Date Qualification Obtained' by clicking on **Edit field** button ![Edit field button](/images/penicon.png) (Pen icon) and changing it in the **Edit field - Date** dialog box):

![Date field inserted in Table](/images/table-date-column-added.jpg) 

##### How to move columns in a Table

To re-order columns in a Table, simply select the column field you want to move (by either clicking the column title or clicking into the blank box below the title) so the Edit field button ![Edit field button](/images/penicon.png) (Pen icon) displays and then click on the left or right arrow buttons ![Left or right arrow buttons](/images/left-right-arrows.jpg) to move that column to the left or right:

![Move table columns](/images/table-move-columns.jpg)

##### How to edit the Table field 

To edit the **Table field** itself, select the Table (by either clicking on the Table title or on the table's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)) and then click on the **Edit field** button (Pen icon) ![Edit field button](/images/penicon.png). 

![Select table field to edit](/images/table-edit.jpg)

The **Edit field - Table** dialog box will open, enabling you to choose from a range of options:

![Edit table field dialog box](/images/table-edit-dialog.jpg)

The options within the **Edit field - Table** dialog box include:

- **Title** - you can change the title of the Table from the default '**Table 1**'. In our example, we could change the name of the table to 'Existing Qualifications'.

- **Help text** - you can insert text to help the form user to complete the Table. If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted.

  ![Table help text example](/images/table-helptext.jpg)

- **Add row text** - you can insert the text you want to appear with the Add Row button ![Table add row button](/images/table-add-row.jpg). By default, this will be 'add row'.

- **Page size** - you can increase or decrease the number of row items you will see per page by clicking the up/down arrow buttons ![Up and down arrows](/images/up-down-arrows.jpg) at the right of the field. By default, it is set to show 10 row items per page.

- **Enable adding rows** - selecting 'Yes' enables the user to add rows to the table when they are completing it and displays the **Add row** button ![Table add row button](/images/table-add-row.jpg) and selecting 'No' removes this option. By default, this option is set to 'Yes'.

- **Enable removing rows** - selecting 'Yes' enables the user to remove rows from the table as they are completing it (by clicking on the **Bin/Trash** button ![Bin icon](/images/binicon.png) at the end of each table row) and selecting 'No' removes this option. By default, this option is set to 'Yes'.

- **Show row count** - you can choose to display text showing the number of rows in the table. This text will appear below the **Add row** button:

  ![Number field with placeholder text](/images/table-row-count.jpg)

- **Enable sorting** - you can select 'Yes' to enable the form user to sort the data in the table 

- **Enable search** - you can select 'Yes' to enable the form user to search the data in the table. If you choose this option, the form user will see a search field at the top of the table:

  ![Table search field](/images/table-search.jpg)

- **Add first row onload** -  by default, this is set to 'Yes', meaning that when the form is loaded the first row is automatically shown

- **Enable export to csv** - you can select 'Yes' to enable the form user to export the table contents to a csv file. If you select 'Yes', some additional options appear in the **Edit field - Table** dialog box: 

  ![Table enable export to csv](/images/table-export-csv.jpg)

  The **CSV Separator** is set to be a comma by default (but you can change this) and you can insert text you want to appear on the **Export CSV** button. For example, if you insert 'Export to CSV' as the text to appear on the button, it will appear like this in the form to the user:

  ![Table export to CSV button](/images/table-export-csv-button.jpg)
  
  The **Columns to export** will automatically show the columns in your table

Make whatever changes you want to make to the table in the **Edit field - Table** dialog box and then click **OK** to confirm. 

If you want to make your table more dynamic - for example, so that calculations are made or information is autofilled into part of the table - you can add rules to it. To learn about applying rules to fields and forms go to [Rules](/docs/platform/rules/) and for more specific information about applying rules to **Table fields** see [Table rules](/docs/platform/rules/tables/).



#### How to move Table fields

To move a **Table field** within your form, simply select the field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png) and drag and drop the field wherever you want to move it to.

![Table field drag handle](/images/table-move.jpg)



#### How to delete Table fields

To delete a **Table field** from your form, simply select the field (by either clicking on the field's name or its **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)), click on the **Bin/Trash** button ![Bin icon](/images/binicon.png) and then click on **OK** to confirm.



### How to edit Table field properties ###

To view or edit the field properties associated with a **Table field**, select the table (by clicking on the field title or field drag handle button ![Drag handle button](/images/draghandlewhite-frame.png)) - the **Field properties** menu will appear in the right-hand pane.

![Field properties](/images/table-field-properties.jpg)

In the example shown here, our sample **Table field** titled '**Existing Qualifications**' has been selected and the Field properties associated with this field include the field type (Table), its Title, that its title will be shown in the form (the 'Show title' checkbox is ticked), that it will not be a mandatory field that users must complete (the 'Required' checkbox is not selected), that this field will be enabled for users to complete (the 'Enabled' checkbox is ticked), and it will be visible to form users (the 'Visible' checkbox is ticked).

You can change the size of the Table by clicking into the **Layout** or **Mobile Layout** options at the bottom of the Field Properties menu and changing the width of the blue bar. You can then check how the Table will appear to users on their PC or mobile phone by first saving your form and then clicking on the Preview button ![Preview button](/images/preview.png). Our sample table, **Existing Qualifications** could look like this when viewed on a PC:

![Sample table in preview](/images/table-preview-example.jpg)

You can also view and edit the properties of the individual column fields within the Table by selecting the column field.

To learn more about the different options within the Field properties menu, go to [Field Properties](/docs/platform/controls/properties#field-properties).

### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Table control**, find out more about the other types of **Input fields** you can add to a Kianda process:

- [Date control](/docs/platform/controls/input/date/)
- [File upload control](/docs/platform/controls/input/file-upload/)
- [List control](/docs/platform/controls/input/list/)
- [Number control](/docs/platform/controls/input/number/)
- [Text box control](/docs/platform/controls/input/textbox/)
- [Toggle control](/docs/platform/controls/input/toggle/)
- [User picker control](/docs/platform/controls/input/user-picker/)
