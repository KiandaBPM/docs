---
title: "Controls"
linkTitle: "Controls"
weight: 3
typora-root-url: ..\..\..\..\static
---

**Controls** (commonly called **fields**) are predefined field widgets that allow you to add specific elements to your forms and processes, such as lists, text boxes, buttons and tables. There are 16 types of controls (fields) you can add to a form - see [Controls list](#controls-list) for details.

If you have developer skills,  you can create your own custom field widget - see [Development](/docs/low-code/) for more information.



## Getting started with Controls ##

If you go to **Administration** > **Designer** and click on an existing process or create a new process and then select a form within that process so that the **Edit Form** button (Pen icon ![Pen button](/images/penicon.png)) is visible, the predefined fields you can add to forms are found in the left-hand pane.

![Controls](/images/access-controlsmenu-select-form.jpg)

**Note:** By default, three buttons are automatically added to any new form created - **Submit**, **Save** and **Close** (as shown in this form canvas image).

There are three categories of controls (fields):

1. **Input** - There are eight types of Input fields. These include the most commonly used data fields such as text box, user picker, date field, table, checkbox, drop-down and number field. See [Input](/docs/platform/controls/input/) for more information. 
2. **Layout** - There are four Layout fields that serve the purpose of perfecting the layout of your form. They include responsive panels, dialog box, field groups and rich text fields - see [Layout](/docs/platform/controls/layout/) for more information.
3. **Action** - There are four Action fields that allow user interface actions like buttons, links or even signature components - see [Actions](/docs/platform/controls/actions/) for more information.

If you develop custom fields, they will be available to form designers under a fourth category of controls called **Custom**.

### Adding, moving and removing controls

To start **adding** controls or fields to a form:

1. Select the form you want to work on so that the **Edit Form** button (Pen icon ![Pen button](/images/penicon.png)) appears.
2. Click on a Controls **category** (Input, Layout or Action) and control type in the left-hand pane. For example, you could choose the **Input** category and select **Text box** to insert a text box into your form. 

3. To **move** a control, click on the **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png).

4. To **remove** a control from your form, select the field you want to remove, then click on the **Bin/Trash** button ![Bin icon](/images/binicon.png) and click on **OK** to confirm removal.

### Editing controls

All controls/fields will have edit options when you start creating the field, as well as [Field properties](/docs/getting-started/create-first-process/design-and-build/add-controls-and-rules/properties#field-properties) that you can edit to tailor the field (control) to make it work the way you want. Each field can also have rules applied to it to make your processes dynamic.

To edit a control:

1. Click on the added control, so that the **Edit** button (Pen icon ![Pen button](/images/penicon.png)) appears.

2. Then click on the **Edit** button itself so that the edit control dialog box appears, for example as shown with the textbox control below.

   ![Edit textbox example](/images/edit-textbox-example.jpg)

3. Fill out the fields within the dialog box as necessary. All controls need a **Title** from which a **Unique Name** is auto-created. This Unique ID is used in [expressions](/docs/platform/rules/general/expression-builder/) to create automated emails for example. 

   ![Edit textbox name](/images/edit-field-name.jpg)

   Additional syntax can be added to the **Unique** **name** to attribute customised styling, see [User tips](#user-tips).

Depending on the type of control implemented, different fields and values can be selected, see [Controls list](#controls-list) for a full set of controls.

## Controls list ##

This table lists out the full range of available field types.

![Form controls](/images/fields-controls-list-table.jpg)



### What's next  ![Idea icon](/images/18.png) ###

Now that you know what **Controls** are, the different types of Controls (fields) and how to add them to a form, find out more about the properties associated with Controls and more about each of the three categories of Controls, as well as Custom controls: