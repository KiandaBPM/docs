---
title: "Modal dialog control"
typora-root-url: ..\..\..\..\..\static
---

The **Modal dialog field** allows you to design pop-up dialog messages that alert or provide reminders or warnings to form end-users.

The most common way to use Dialog fields is to apply a **rule** - to a field, form or button - so that the pop-up Dialog only displays in *certain circumstances*. Rules allow actions based upon conditions resulting from user interaction with fields. Go to [Rules](/docs/platform/rules/) to learn about the different categories of rules that can be applied.

The **Show, hide or disable** rule is often used in conjunction with the **Dialog field** so that the pop-up Dialog appears if a user interacts with a field, button or form in a certain way. To learn more, go to [Show, hide or disable](/docs/platform/rules/workflow/hide-or-disable/) or to see a step-by-step example of adding a Show, hide or disable rule, see [Adding a Workflow rule called Hide and Disable](/docs/getting-started/create-first-process/design-and-build/add-controls-and-rules#adding-a-second-workflow-rule-called-hide-and-disable).

For example, in a simple Training Request form that employees can complete if they want to request training, it could be useful to insert a Dialog field so that a reminder message pops up when the form user clicks on the Save or Submit buttons, to remind them to check that they have completed all fields before they submit their form. We will keep this example in mind as we learn more about Dialog fields.

To view a **video** example of how to create a Modal dialog field, go to [**How to create a modal dialog**](/docs/how-to/create-a-modal-dialog/).

 

## How to get started

1. To add a **Modal dialog field** to a form, first open the relevant process. Then select the form within that process that you want to add the field to (so that the **Edit Form** button ![Edit form button](/images/penicon.png) is visible). Go to [Create First Process](/docs/getting-started/create-first-process/) to learn how to create your first process.

2. Insert the **Modal dialog field** by clicking on **Controls** in the left-hand pane to expand the Controls menu, then select **Layout** to view the range of Layout controls and click on **Dialog**. A pop-up message will appear saying '**Field added**' and a Dialog field will be added to the bottom of your form.

   ![Insert Dialog field](/images/dialog-insert.jpg)

   

   By default, the Dialog field will *not* be displayed in the form to users. This is denoted by the eye symbol with the line through it ![Eye symbol with line through it](/images/eye-symbol.jpg). This is because, as already mentioned, the most common way to use Dialog fields is to apply a **rule** to a field or button - such as the **Submit** or **Save** buttons - so that the pop-up Dialog message is only shown to users in *certain circumstances*, rather than it being shown all the time.

   In our example of the Training Request form, we may only want the Dialog to display when the user clicks on either **Submit** or **Save**, to remind them to check that they have completed all fields. 

#### How to set the heading for the Dialog

The title of the **Dialog field** will display as the heading at the top of the pop-up Dialog message.

By default, the title of the new Dialog field is '**Dialog 1**'. To change this to the heading you want, select the new Dialog field (by either clicking on the drag handle ![Drag handle button](/images/draghandlewhite-frame.png) or clicking in the area of the Dialog field) so that the **Edit field** button ![Edit form button](/images/penicon.png) is visible - you can then view and edit the **Title** in the **Field properties** panel to the right. 

For example, we could decide to give our pop-up Dialog message a heading of  'Reminder'. To learn more about editing the Field properties associated with Modal dialog fields, go to [How to edit Modal dialog field properties](/docs/platform/controls/layout/dialog#how-to-edit-modal-dialog-field-properties).

![Changing the Dialog title](/images/dialog-title.jpg)



#### How to insert body text for the Dialog

To insert the text you want to display in the body of the pop-up Dialog, select the Dialog field and then insert a **Richtext field** into it by clicking **Controls** >**Layout** >**Richtext** in the right-hand pane. To learn more about Richtext fields, go to [Richtext control](/docs/platform/controls/layout/richtext/).

   ![Insert richtext into Dialog field](/images/dialog-insert-richtext.jpg)

   A  **New field - Richtext** dialog box will open:

   ![Richtext dialog box](/images/richtext-dialog.jpg)

​		The options within the **New field - Richtext** dialog box include:

- **Title** - You can change the title of the Richtext field from the default '**Richtext 1**'

- **Name** - This is a unique name for the field

- **Helptext** - You can insert text to help the form user to complete the field - if you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted. This option is not as relevant to the Dialog field as it is to other fields, as the Dialog field is not a field the user needs to complete.

- **Richtext** - Type the text that you want to be shown as the main body text in the pop-up Dialog into this field and format it as you want - there are options to highlight text, change the font style and font colour, bold, underline, increase or decrease font size, use a bulleted or numbered list, format the text to align left/centre/right, insert a table or a link, insert an image or to switch to code view. 

- **Colour scheme** - You can choose from five colour options for the colour that will appear in the background behind the Dialog richtext body text.

  For our example of the Training Request form, we will insert text to remind the employee completing the form to check that they have completed all fields before submitting it and will choose an orange background colour:

  ![Example richtext for Dialog field](/images/dialog-richtext-example.jpg)

  Once you have completed the **New field - Richtext** dialog box, click **OK**. 

  You will now see the body text of your Dialog field in the Richtext field you added to it:

  ![Dialog example](/images/dialog-example.jpg)
  
  To preview how the pop-up Dialog will look for users, either click on the Dialog **Preview** button ![Dialog field preview button](/images/dialog-preview-button.jpg) or click on the eye symbol ![Eye symbol](/images/eye-symbol.jpg):
  
  ![Preview example of Dialog](/images/dialog-example-preview.jpg)

​		Click on **Close** or **OK** to close the preview.

### How to edit, move and delete Modal dialog fields

As we go through the options available for editing a Modal dialog field in a form, we will keep in mind our example of the 'Reminder' pop-up Dialog message in the Training Request form.



#### How to edit a Modal dialog field

To edit a **Modal dialog field**, select the field (by either clicking on the drag handle ![Drag handle button](/images/draghandlewhite-frame.png) or clicking in the area of the Dialog field) and then click on the **Edit field** button (Pen icon) ![Edit field button](/images/penicon.png). 

![Select Dialog to edit](/images/dialog-select-to-edit.jpg)

The **Edit field - Dialog** dialog box will open, enabling you to choose from a range of options (we already changed the Dialog field title to 'Reminder' so this name will be shown in the dialog box name):

![Edit Modal Dialog field dialog box](/images/dialog-dialog-box.jpg)

​		The options within the **Edit field - Dialog** dialog box include:

- **Title** - You can change the title of the Modal Dialog field here. We already changed it to 'Reminder' from the default **Dialog 1** in the 'Title' field in the **Field properties** pane.  

- **Name** - This is a unique name for the field

- **Help text** - You can insert text to help the form user. If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted. This option is less relevant for the Dialog field as it is for other field types, as the Dialog field is not a field the user needs to complete.

- **Hide "OK" button** - Select **Yes** if you do not want the user to see an 'OK' button at the bottom of the Dialog message.

- **Hide "Close" button** - Select **Yes** if you do not want the user to see a 'Close' button at the bottom of the Dialog message.

- **Enable dismiss (X button right top)** - Choosing **Yes** means an X button (that the user can click on to dismiss the pop-up message) will be shown at the top right of the Dialog.

- **Dialog size** - You can choose from the **Default** size or **Large** size for your Dialog message.

Once you have finished editing the **Dialog field** in the **Edit field - Dialog** dialog box, click on the **OK** button ![OK button](/images/ok.png) to save your changes or click on **Close** to exit the dialog box without saving.

To see how your form or Dialog field will look on a mobile, view it in **Mobile preview** by using the **Preview** option which can be opened by clicking the play button icon ![Preview](/images/preview.png). You also have the options to see how it will look on a PC or tablet.



#### How to move a Modal dialog field ####

To move a Modal dialog field, simply select the field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png) and drag and drop it wherever you want to move it within your form.

![Move a Dialog field](/images/dialog-example-move.jpg)



#### How to delete a Modal dialog field ####

To delete a Modal dialog field from your form, select it (by either clicking on the Panel field's name or its **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)), click on the **Bin/Trash** button ![Bin icon](/images/binicon.png) and then click on **OK** to confirm. Click on **Cancel** if you wish to cancel the deletion.



### How to edit Modal dialog field properties ###

To view or edit the field properties associated with a **Modal dialog field**, select the Dialog field (by clicking on the drag handle button ![Drag handle button](/images/draghandlewhite-frame.png)or clicking in the area of the Dialog field) - the **Field properties** menu will appear in the right-hand pane.

In the example shown here, a **Dialog field** titled '**Reminder**' has been selected and the **Field properties** associated with it are shown in the Field properties menu to the right. They are: the Dialog Title ('Reminder') and the field Layout (how wide the field layout will be on a PC and mobile phone, denoted by the width of the blue bar).

![Panel field properties](/images/dialog-field-properties.jpg)



### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Modal dialog control**, find out more about the other types of **Layout fields** you can add to a Kianda process:

- [Field group control](/docs/platform/controls/layout/field-group/)
- [Panel layout control](/docs/platform/controls/layout/panel/)
- [Richtext control](/docs/platform/controls/layout/richtext/)
