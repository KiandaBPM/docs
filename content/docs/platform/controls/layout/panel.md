---
title: "Panel layout control"
typora-root-url: ..\..\..\..\..\static
---

A **Panel field** is section within a form. Panels hold other elements of your form, such as [text box fields](/docs/platform/controls/input/textbox/), [list fields](/docs/platform/controls/input/list/) and [tables](/docs/platform/controls/input/table/), and enable flexible layout options that result in a better end-user experience. 

It is a good idea when first creating a form to insert a panel for each section of your form and then insert the fields you require into each of these panels. One advantage of having related fields contained within a panel is that you can then easily move that panel (and all of the fields within it) to another location within your form. 

For example, in a 'Training Request' form, you may decide to insert two panels - one panel to contain the details relating to the employee requesting the training and a second panel to contain the details of the training course being requested. 

 

## How to get started

1. To add a **Panel** to a form, first open the relevant process. Then select the form within that process that you want to add the field to (so that the **Edit Form** button ![Edit form button](/images/penicon.png) is visible). Go to [Create First Process](/docs/getting-started/create-first-process/) to learn how to create your first process.

2. Insert the **Panel** by clicking on **Controls** in the left-hand pane to expand the Controls menu, then select **Layout** to view the range of Layout controls and click on **Panel**. A pop-up message will appear saying '**Field added**' and a panel field with the default name **Panel 1** will be added to your form.

   ![Insert panel field](/images/panel-insert-blank-form.jpg)

   

   By default, the title of the new panel will not be displayed in your form, but you can make it visible by selecting the '**Show title**' checkbox in the **Field properties** panel to the right) - to learn more about editing the **Field properties** associated with Panels, go to [How to edit Panel field properties](/docs/platform/controls/layout/panel#how-to-edit-panel-field-properties).

   

### How to edit, move and delete Panels

As we go through the options available for editing a Panel in a form, we will keep in mind the example of adding two panels to a 'Training Request' form - one titled 'Employee Details' and one titled 'Training Details'. 

#### How to edit a Panel

To edit a **Panel**, select the field  and then click on the **Edit field** button (Pen icon) ![Edit field button](/images/penicon.png). 

![Select Panel to edit](/images/panel-edit.jpg)

The **Edit field - Panel** dialog box will open, enabling you to choose from a range of options:

![Edit Panel dialog box](/images/panel-edit-dialog.jpg)

​		The options within the **Edit field - Panel** dialog box include:

- **Title** - You can change the title of the Panel from the default '**Panel 1**'. 

  In our example, after inserting two panels into our form, we could edit each of them in turn and change their titles to 'Employee Details' and 'Training Details'. 

  In order to have the title of a Panel display in your form, you need to take one further step - select each panel and then select the '**Show title**' checkbox in the **Field properties** panel to the right. Now the titles of the two Panels will be shown - here we have selected the first panel in order to display the 'Show title' checkbox associated with it:

  ![Show Panel title](/images/panel-show-title.jpg)

  You will learn more about the Field properties associated with Panels in [How to edit Panel field properties](/docs/platform/controls/layout/panel#how-to-edit-panel-field-properties).

- **Name (unique)** - This is a unique name for the Panel field.

- **Help text** - You can insert text to help the form user to complete the Panel. 

  In our example, we could insert this help text to assist the user in completing the 'Employee Details' panel:

	![Panel help text](/images/panel-help-text.jpg)

  If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the Panel title and, if the user clicks on this, they will see the help text you have inserted.
  
  ![Panel help text displayed](/images/panel-help-text-shown.jpg)

- **Layout columns** - Here you can decide how wide you want your Panel to be in your form -  choose from 1 to 12 columns in width. For example click half-way across the blue bar to create a panel that is 6 columns wide, or click at the far right side of the blue bar to create a column that is 12 columns wide.

	![Panel width](/images/layoutcolumns.png)

- **Colour scheme** - You can choose from six different colour options: navy, green, blue, amber, red, white. By default, the colour is set to white.

- **Enable panel security** - If you want to restrict who can see the contents of the Panel, choose **Yes**. Two additional options will then be shown - '**Add security**' and '**Allow anonymous link**':

	![Enable Panel security](/images/panel-enable-security.jpg)

	To limit who can view the Panel contents, click the '**Add security**' button. A new row is displayed, within which you can select the user(s) or groups who will be able to vie the Panel:

	![Panel add security](/images/panel-add-security.jpg)

	If you choose to '**Allow anonymous link**', this means that the system can generate an anonymous link to the form (including to the Panel contents).

Once you are finished editing the **Panel** in the **Edit field** dialog box, click on the **OK** button ![OK button](/images/ok.png) to save your changes or click on **Close** to exit the dialog box without saving.

#### How to add fields to a Panel

Once you have inserted a Panel and completed the **Edit field - Panel** dialog box, you can then start to add the elements you need into the Panel - such as text boxes, lists, tables, number fields or date fields. Go to [Controls](/docs/platform/controls/) to see the full list of fields available and [Rules](/docs/platform/rules/) to learn about different categories of rules that can be applied.

To add fields to your Panel, select the Panel (by either clicking on the field title or on the field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)) so that the **Edit field** button ![Edit form button](/images/penicon.png) is visible - then click on whatever field you want to insert. 

Let's take the example of our first Panel, titled '**Employee Details**'. We will select the Panel by clicking on the 'Employee Details' field Drag handle and can then add a **Text box field** to this Panel by clicking on **Controls**>**Input**>**Text box** in the **Controls** menu - a pop-up message says 'Field added' and a new Text box, titled '**Text box 1**', is added to the 'Employee Details' panel:

![Insert text box field into a Panel](/images/panel-insert-fields.jpg)

You can then edit this new Text box field as needed - in our example, we will rename it as 'First Name'. To learn more about Text box fields, go to [Text box control](/docs/platform/controls/input/textbox/).

By adding two text box fields (titled 'First Name' and 'Surname') and a date field (titled 'Date of Birth') to our 'Employee Details' Panel, and then adding the fields we need to the 'Training Details' Panel, our 'Training Request' form - with its two Panels - could look like this when viewed on a user's mobile phone:

![Panel example on mobile phone](/images/panel-example-mobile.jpg)

To see how your form or field will look on a mobile, view it in **Mobile preview** by using the **Preview** option which can be opened by clicking the play button icon ![Preview](/images/preview.png). You also have the options to see how it will look on a PC or tablet.

#### How to move a Panel ####

To move a Panel, simply select the Panel field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png) and drag and drop it wherever you want to move it within your form.

![Move a Panel](/images/panel-move.jpg)

#### How to delete a Panel ####

To delete a Panel from your form, select it (by either clicking on the Panel field's name or its **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)), click on the **Bin/Trash** button ![Bin icon](/images/binicon.png) and then click on **OK** to confirm. Click on **Cancel** if you wish to cancel the deletion.

**Note**: Remember that deleting a Panel will result in all of the fields contained within that Panel also being deleted.



### How to edit Panel field properties ###

To view or edit the field properties associated with a **Panel**, select the Panel field (by clicking on the field title or drag handle button ![Drag handle button](/images/draghandlewhite-frame.png)) - the **Field properties** menu will appear in the right-hand pane.

In the example shown here, a **Panel** titled '**Employee Details**' has been selected and the **Field properties** associated with the Panel are shown in the Field properties menu to the right. They include: the field type (Panel), title, that the title will be shown in the form (the 'Show title' checkbox has been selected), that the field will be visible in the form (the 'Visible' checkbox has been selected) and how wide the field layout will be on a PC and mobile phone (the blue bars in 'Layout').

![Panel field properties](/images/panel-field-properties2.jpg)

To learn more about the different options within the Field properties menu, go to [Field Properties](/docs/platform/controls/properties#field-properties).



### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Panel control**, find out more about the other types of **Layout fields** you can add to a Kianda process:

- [Field group control](/docs/platform/controls/layout/field-group/)
- [Modal dialog control](/docs/platform/controls/layout/dialog/)
- [Richtext control](/docs/platform/controls/layout/richtext/)