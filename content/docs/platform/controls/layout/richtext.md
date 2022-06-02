---
title: "Richtext control"
typora-root-url: ..\..\..\..\..\static
---

**Richtext fields** can be used to create custom rich text content in forms, such as an attractive banner. They provide optimum formatting options, such as bold and italics, or the option to insert images or links.

For example, we may want to insert some colourful headings into a Training Approval form within an Education Request process (where employees can request training in a Training Request form and their manager then either approves or rejects this request in a Training Approval form).

 

## How to get started

1. To add a **Richtext field** to a form, first open the relevant process - in our case, we will open the Education Request process. Go to [Create First Process](/docs/getting-started/create-first-process/) to learn how to create your first process.

2. Then select the form within that process to which you want to add the **Richtext field** (so that the **Edit Form** button ![Edit form button](/images/penicon.png) is visible). We will select the 'Training Approval' form: 

   ![Select form to insert Richtext field](/images/richtext-example-select-form.jpg)

   The Training Approval form contains two panels (as indicated above), neither of which currently has a heading. For the first panel, we will insert a Richtext heading titled 'Training Details' and, for the second panel, we will insert a Richtext heading titled 'Approval Decision'. 

3. To insert a **Richtext field** into the first panel in the form:

   - Select that panel by clicking on the drag handle button ![Drag handle button](/images/draghandlewhite-frame.png)

   - Then click on **Controls** in the left-hand pane to expand the Controls menu and select **Layout** to view the range of Layout controls

   - Click on **Richtext**

   ![Insert Richtext field](/images/richtext-insert.jpg)

4. A **New field - Richtext** dialog box will open with a range of options you can choose from for your new Richtext field:

  ![Richtext dialog box](/images/richtext-dialog.jpg)

  The options available in the **New field - Richtext** dialog box include:

  - **Title** - You can change the title of the Richtext field from the default title of '**Richtext 1**'.

  - **Name** - This is a unique name for the field.

  - **Help text** - You can insert text to help the form user - if you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted.

  - **Richtext** - Here you can insert the text you want to appear and can choose from an wide array of styles and formats, including **Style,** **Colour**, **Bold**, **Underline**, **Remove font style**, **Font size**, **Font family**, **Unordered list**, **Ordered list**, **Paragraph**, and **Table**. You can also choose to insert a **Link** or **Picture** or to switch to **Code view**. For example, if you click on **Code view** button ![Code view button](/images/code.png)you can copy HTML code directly into the text. 

    Type in the text you want to use into the body of the Richtext box - in our example, we will insert the text 'Training Details' (the title we want to use for the first panel in our form), bold it, choose font size 14 and a blue colour scheme:

    ![Example of Richtext body text](/images/richtext-example-body-text.jpg)

    You can click on the **Help** button ![Help button](/images/help.png) to get a list of over 20 keyboard shortcuts that you can use to style your text.

    ![Richtext help](/images/richtext-help-shortcuts.jpg)

    Click on the **Ellipsis** button ![Ellipsis button](/images/ellipsis-16401854043731.png) if you want to add an expression - see [Expression builder](/docs/platform/rules/general/expression-builder/) for more details.

  - **Colour scheme** - You can choose from Navy, Green, Blue, Amber, Red or White Colours for your rich text background.

5. Once you have completed the **New field - Richtext** dialog box, click **OK** ![OK button](/images/ok.png) and the new **Richtext field** will be added to your form.

   In our example, it is inserted at the bottom of the panel we added it to. The same steps can be repeated in order to insert a Richtext heading in the second panel, titled 'Approval Decision'.

   ![Richtext field inserted](/images/richtext-inserted.jpg)

   By default, the Richtext **Title** will not be shown (unless you choose to display it, by selecting the **Show title** checkbox in the Field properties menu to the right).

   

### How to edit, move and delete Richtext fields

To edit a **Richtext field**, select the field (by either clicking on the field title or on the field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)) and then click on the **Edit field** button (Pen icon) ![Edit field button](/images/penicon.png). 

![Select Richtext field to edit](/images/richtext-select-to-edit.jpg)

The **Edit field - Richtext** dialog box will open, enabling you to choose from the same range of options as appear in the **New field - Richtext** dialog box (as already discussed in [How to get started](/docs/platform/controls/layout/richtext#how-to-get-started)).

![Richtext field edit dialog box](/images/richtext-edit-dialog.jpg)



To move a **Richtext field**, simply select the field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png) and drag and drop the field wherever you want to move it to within your form. 

In our example, we can move the new Richtext heading to the top of the first panel in the Training Approval form:

![Move a Richtext field](/images/richtext-move.jpg)



To delete a **Richtext field** from your form:

1. Select the field (by clicking on the **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png))

2. Click on the **Bin/Trash** button ![Bin icon](/images/binicon.png) 

3. Click on **OK** to confirm. Click on **Cancel** if you wish to cancel the deletion.

   


### How to preview your Richtext field

To see how your Richtext field or fields will look to a user on a PC or mobile phone:

1. Save your changes.
2. Click on the **Preview** button ![Preview](/images/preview.png).
3. Click on **Desktop preview** button ![Desktop preview button](/images/desktop.png) to see how the form will look when viewed on a PC or click on the **Mobile preview** button ![Mobile preview button](/images/mobile.png) to see how it will look on a mobile phone.

From our example, the new Richtext headings - 'Training Details' and 'Approval Decision' - could look like this when a user views the form on their mobile phone: 

![Richtext previewed on a mobile phone](/images/richtext-preview-mobile.jpg)



## How to edit Richtext field properties

To view or edit the field properties associated with a **Richtext field**, select the field (by clicking on the title or drag handle button ![Drag handle button](/images/draghandlewhite-frame.png)) - the **Field properties** menu will appear in the right-hand pane.

![Richtext field properties](/images/richtext-field-properties.jpg)

In the example shown here, the **Field properties** associated with the 'Training Details' Richtext field include:

- **Field type** - Richtext
- **Title** - the title of the Richtext field (default name '**Richtext 1**' unless you change this)
- **Show title** - this is not selected, which means that the Richtext title will not be shown in the form
- **Required** - this is not selected, so the Richtext field is not a mandatory field for the user to complete
- **Enabled** - the field is enabled so the user can edit it (not relevant for a richtext heading which the user will not interact with)
- **Visible** - this is selected, so the Richtext field will be visible to users
- **Layout** - the width of the blue bar can be adjusted to change the width of the Richtext field on PC or mobile. To view the mobile width, click on the expand button ![Expand button](/images/expand-icon.jpg) to the right of the Layout option.

To learn more about the different options within the Field properties menu, go to [Field Properties](/docs/platform/controls/properties#field-properties).



### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Richtext control**, find out more about the other types of **Layout fields** you can add to a Kianda process:

- [Field group control](/docs/platform/controls/layout/field-group/)
- [Modal dialog control](/docs/platform/controls/layout/dialog/)
- [Panel layout control](/docs/platform/controls/layout/panel/)
