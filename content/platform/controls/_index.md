---
title: "Controls"
linkTitle: "Controls"
weight: 3
typora-root-url: ..\..\..\static
description: "Intro to form controls and their options"
---

**Controls** (commonly called **fields**) are predefined field widgets that allow you to add specific elements to your forms and processes, such as lists, text boxes, buttons and tables. There are 16 types of controls (fields) you can add to a form - see the controls list below for details.


| Category | Field Name   | Purpose                                                                                                                    |
|----------|--------------|----------------------------------------------------------------------------------------------------------------------------|
| **Input** | Text box      | Allows users to enter text. Help text and placeholder options guide users when filling out a form.                         |
|          | List          | Displays info as dropdown, radio, multiselect or checkbox lists. Users select values from these lists.                     |
|          | Number        | Allows users to enter numbers as integers, currency, or percentages.                                                       |
|          | Date          | Allows users to enter dates, with options for default date, user time zone adjustment, and data display.                   |
|          | File          | Allows file upload with options like override, multiple file uploads, and file deletion.                                    |
|          | Table         | Enables data entry in table format with options to add/remove rows and sorting/searching.                                  |
|          | User picker   | Lets users choose from a predefined set of users/groups/partners. Supports selection mode for single or multiple users.    |
|          | Toggle        | Allows a user to slide a toggle or check a checkbox, with preassigned values based on user input.                          |
| **Layout** | Panel         | Creates an area for fields. Panels can be used to create sections within a form and be visible only to specific users.     |
|          | Dialog        | Creates a pop-up dialog box prompting users for information.                                                               |
|          | Richtext      | Creates text with formats, images, and links that can be displayed in forms.                                               |
|          | Field group   | Mirrors a group of fields already created, allowing for easier form linking and reuse by process designers.                |
| **Actions** | Button        | Creates custom buttons with various display/control options, including security settings for specific users.               |
|          | Link          | Creates a hyperlink for users to click, with options to open in a new or the same tab.                                     |
|          | Image         | Allows images to be added to forms.                                                                                        |
|          | Signature     | Adds electronic signatures with options for authentication or manual/drawn signature uploads.                              |

If you have developer skills,  you can create your own custom field widget - see [Development](/low-code/) for more information.

## Getting started with Controls ##

If you go to **Administration** > **Designer** and click on an existing process or create a new process and then select a form within that process so that the **Edit Form** button (Pen icon ![Pen button](/images/penicon.png)) is visible, the predefined fields you can add to forms are found in the left-hand pane.

![Controls](/images/access-controlsmenu-select-form.jpg)

**Note:** By default, three buttons are automatically added to any new form created - **Submit**, **Save** and **Close** (as shown in this form canvas image).

There are three categories of controls (fields):

1. **Input** - There are eight types of Input fields. These include the most commonly used data fields such as text box, user picker, date field, table, checkbox, drop-down and number field. See [Input](/platform/controls/input/) for more information. 
2. **Layout** - There are four Layout fields that serve the purpose of perfecting the layout of your form. They include responsive panels, dialog box, field groups and rich text fields - see [Layout](/platform/controls/layout/) for more information.
3. **Action** - There are four Action fields that allow user interface actions like buttons, links or even signature components - see [Actions](/platform/controls/actions/) for more information.

If you develop custom fields, they will be available to form designers under a fourth category of controls called **Custom**.

### Adding, moving and removing controls

To start **adding** controls or fields to a form:

1. Select the form you want to work on so that the **Edit Form** button (Pen icon ![Pen button](/images/penicon.png)) appears.
2. Click on a Controls **category** (Input, Layout or Action) and control type in the left-hand pane. For example, you could choose the **Input** category and select **Text box** to insert a text box into your form. 

3. To **move** a control, click on the **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png).

4. To **remove** a control from your form, select the field you want to remove, then click on the **Bin/Trash** button ![Bin icon](/images/binicon.png) and click on **OK** to confirm removal.

### Editing controls

All controls/fields will have edit options when you start creating the field, as well as Field properties that you can edit to tailor the field (control) to make it work the way you want. Each field can also have rules applied to it to make your processes dynamic.

To edit a control:

1. Click on the added control, so that the **Edit** button (Pen icon ![Pen button](/images/penicon.png)) appears.

2. Then click on the **Edit** button itself so that the edit control dialog box appears, for example as shown with the textbox control below.

   ![Edit textbox example](/images/edit-textbox-example.jpg)

3. Fill out the fields within the dialog box as necessary. All controls need a **Title** from which a **Unique Name** is auto-created. This Unique ID is used in [expressions](/platform/rules/general/expression-builder/) to create automated emails for example. 

   ![Edit textbox name](/images/edit-field-name2.jpg)

   Additional syntax can be added to the **Unique** **name** to attribute customised styling, see User tips.

4. The remaining fields within the dialog box will depend on the type of control implemented, where different fields and values can be selected, see Controls list for a full set of controls. Links available at the end of this page will also bring you to each control category and from there you can find out what each parameter means for each control type.

   

### Control customization with CSS 

If customised styling has been applied in a **Global CSS file,** available to administrators under **Administration** > **Developer**, then these attributes can be applied to controls by entering the desired class name into the **Custom CSS class name** field, as shown below. 

![Textbox with attributes](/images/textbox-attribute2.jpg)

In the example above, **redField** is defined in the **Global CSS file** as follows:

```css
.redField{
    background-color: red;
  	color: white;
  	border-radius: 15px;
    padding-bottom: 18px;
    padding-top: 18px;
    padding-right: 15px;
}
```

When applied to a textbox in forms, a particular colour border with padding is applied to the field, as well as white font colour, as seen below:

![Applied styling example](/images/applied-styling-example2.jpg)

Go to [Global CSS file](/low-code/global-css/) for more details.
