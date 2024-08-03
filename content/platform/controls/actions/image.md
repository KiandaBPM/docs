---
title: "Image control"
linkTitle: "Image control"
typora-root-url: ..\..\..\..\..\static
---

**Image fields** can be used to insert and display images, either statically or images captured from [File upload fields](/docs/platform/controls/input/file-upload/). For example, you may wish to insert an image at the top of your form or may wish to enable form users to annotate an image.

## How to get started ##

To add an **Image field** to a Kianda form:

1. Open an existing process by going to **Administration** > **Designer** in the left side menu and clicking on a process, or create a new process in Designer. See [Create First Process](/docs/getting-started/create-first-process/) to learn how to create your first process.

   ![Open process in Designer](/images/designer-open-process.jpg)

2. Once you have opened your process, select the form you want to work on (so that the **Edit Form** button ![Pen icon](/images/penicon.png) is shown). 

   In this example, a Training Approval form in an Education Request Process has been selected:

   ![Select form to insert an Image field](/images/image-form-selected.jpg)

3. Select the area within the form where you want to insert the **Image field** - in our example, we will select the first panel in the form - Training Details: 

   ![Select panel to insert Image field](/images/image-location.jpg)

4. Click on **Controls** in the left-hand pane, and, from the four categories of Controls (Input, Layout, Actions and Custom), click on **Actions**.

5. Select **Image** from the four types of Action fields: Button, Link, Image and Signature:

   ![Actions menu insert Image](/images/image-insert.jpg)

6. A **New field - Image** dialog box will automatically open, giving you options for your new Image field: 

   ![Image field dialog box](/images/image-dialog2.jpg)

   

7. **Title** - You can change the name of the Image field from the default '**Image 1**'. In our example, we could change the title to 'Employees'.

8. **Name (Unique)** - This is a unique name for the new field and inherits a camel case version of the entered Title.

9. **Help text** - You can insert text to help the form user. If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted.

10. **Custom CSS class name** - You can type the name of a CSS class to allow the Image to inherit specific styles defined in the [Global CSS file](/docs/low-code/global-css/).

11. **Image source** - You can choose to insert the image either from an **Image URL** or from a **File field** within the form. Different additional options will be available to you, dependent on the Image source you choose.

    (i) If you choose **Image URL** as the Image source, insert the URL for the image into the **Image URL** field:

    ![Image source Image URL](/images/image-url.jpg)

    Then complete the **Image max height** and **Image max width** options:

    - **Image max height** - Insert the maximum height (in pixels) for your new Image field by either manually inserting a number or using the up down arrows ![Up down arrows buttons](/images/up-down-arrows.jpg) to the right of the field.

    - **Image max width** - Insert the maximum width (in pixels) for your new Image field by either manually inserting a number or using the up down arrows ![Up down arrows buttons](/images/up-down-arrows.jpg) to the right of the field.

    When you've completed the New field - Image dialog box and clicked **OK**, your new Image field will be inserted at the bottom of the area you selected - in our case, at the bottom of the first panel in the Training Approval form:

    ![Image field inserted with URL as Image source](/images/image-url-example.jpg)

    (ii) If you choose **File field** as the **Image source**, three additional options will be displayed below the 'Image max height' and 'Image max width' options - **Enable image annotations**, **Display images inline** and **Enable quick remove image**:

    ![Image source File field](/images/image-file-field-options.jpg)

    To use a **File field** as the **Image source**, you must first have inserted a **File Upload field** into your form and it must hold an image file. 

    In our example, you could insert a File Upload field titled 'Image file' into the panel where you want to insert the new Image field and then browse to find an image you have saved on your computer:

    ![Insert File upload field to hold an image](/images/image-file-upload-field.jpg)

    You could choose to make this File Upload field **invisible to form users**, by ensuring the **Visible** checkbox is not selected in the Field Properties menu to the right. 

    If you want to allow form users to make annotations on the Image, make sure to select **Yes** to the **Allow file override** option in the **New field - File** dialog box. To learn more about File Upload fields, see [File Upload field](/docs/platform/controls/input/file-upload/).

    Once the File Upload field has been added to the form and it contains the image file you want to use, you can then insert an **Image field** and, in the dialog box, choose **File field** as your **Image source**, click into the File field and select the field containing the image:

    ![Image with File field as Image source](/images/image-file-field-select.jpg)

    Then complete the **Image max height** and **Image max width** fields:

    ![Image source as File field and max height and max width inserted](/images/image-file-field-height-width.jpg)

    In our example, if we inserted an **Image field** using a **File field** as the Image source (and choose not to make the File field visible to form users), the new Image field could look like this once inserted in our form:

    ![Image example inserted using a File field as the Image Source](/images/image-file-field-example.jpg)

    You have three additional options if you choose **File field** as your Image source:

    - **Enable image annotations** - If you choose **Yes**, this will enable both you (as the Form Designer) and the end user (the form user) to make annotations to the Image - such as adding a text comment or inserting a shape. 

      To make annotations to the Image as the Form Designer, choose **Yes** to 'Enable image annotations' and after clicking **OK** at the bottom of the **New field - Image** dialog box, click on the new **Image field** that has been added to your form:

      ![Click on image to annotate as form designer](/images/image-annotations-designer.jpg)

      When you click on the Image, a new pop-up box will open, with an **Annotate Image** button at the top right:

      ![Click on image to annotate and Annotate button displays](/images/image-annotate-designer.jpg)

      Click on this Annotate Image button and a menu will display with a range of options for annotating the image:

      ![Menu for annotating an Image field](/images/image-annotate-menu.jpg)

      The options available for annotating the image include:

      ​	- **Undo the last annotation** ![Image annotation undo button](/images/image-annotate-undo.jpg)
      
      ​	- **Draw a rectangle** ![Image annotation draw a rectangle button](/images/image-annotate-rectangle.jpg)
      
      ​	- **Draw a circle** ![Image annotation draw a circle](/images/image-annotate-circle.jpg)
      
      ​	- **Write some text** ![Image annotation Write some text button](/images/image-annotate-text.jpg)

      ​	- **Draw an arrow** ![Image annotation draw an arrow button](/images/image-annotate-arrow.jpg)

      ​	- **Pen tool** ![Image annotation pen tool button](/images/image-annotate-pen.jpg) (which allows you to do a free hand drawing on the image)  

      ​	- **Redo the last undone annotation** ![Image annotation Redo last undone annotation button](/images/image-annotate-redo.jpg) 
      
      An end user completing the form will be able to make annotations to the image in the same way - by clicking on the Image in the form and then clicking the Annotate Image button to view the menu.
      
      When you have made the changes you want to the image, click on the green **Save** button ![Image annotation green Save button](/images/image-annotate-save.jpg). This annotation will then be visible in the image in your form.
      
      If you choose **Yes** to **Enable image annotations**, another option is shown - **Keep original image**:
      
      ![Enable image annotations Keep original image sub-option](/images/image-annotations.jpg)
      
      If you choose **Yes** for **Keep original image**, when the Image field is annotated, both the original image and annotated image will be shown side by side and will both be saved in the location you chose as the 'Destination' in the File Upload field.
      
    - **Display images inline** - Select **Yes** if you want the Image field to appear in line with the text in your form.

    - **Enable quick remove image** - If you select **Yes**, a **Bin/Trash** button ![Bin icon](/images/binicon.png) will be available to the form user at the bottom of the Image field in the form, enabling them to delete the image by clicking on it.

      ![Image quick remove button](/images/image-quick-remove.jpg)

12. When you have finished selecting the options you want for your new **Image field** in the **New field - Image** dialog box, click **OK** and the Image will be added to your form.

13. You can preview how the image will look to an end user by first saving the changes you've made to your form (by clicking on the **Save** button ![Save](/images/saveprocess.png)) and then clicking the **Preview** ![Preview button](/images/preview.png) button.

    In our example, if we added an **Image field** to our Training Approval form and choose a File field as the Image source and to allow the user to make annotations to the image - it could look like this to user completing the form on their mobile phone:

    ![Preview Image field on a mobile phone](/images/image-preview-mobile.jpg)

    If you chose to enable image annotations, the form user can click on the image, click on the **Annotate image** button ![Annotate image button](/images/image-annotate-icon.jpg) and then use the options in the menu to make annotations on the image and save these.



### How to edit, move and delete Image fields ###

To edit an **Image field**:

1. Select the Image field (by either clicking on the field name or on the field's **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).

2. Click on the **Edit Field** button (Pen icon) ![Pen button](/images/penicon.png).

   ![Edit Image field](/images/image-edit-button.jpg)

3. The **Edit Field - Image** dialog box will open (with the Image field title you chose reflected in the dialog box name), enabling you to choose from the same range of options as appear in the **New field - Image** dialog box (as already discussed in [How to get started](/docs/platform/controls/actions/image#how-to-get-started)).

   ![Image edit field dialog box](/images/image-edit-dialog.jpg)

   

To move an **Image field**, simply:

1. Select the Image field's **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png).

2. Drag and drop the Image field wherever you want to move it within your form.

   For example, when we added the 'Employees' **Image field** to the first panel in the Training Approval form, it was automatically inserted at the bottom of the panel - if we want it to show at the top of the panel, we can simply drag the image to the top of the panel and drop it there:

   ![Move Image field example](/images/image-move.jpg)

   

To delete an **Image field** from your form:

1. Select the Image field (by either clicking on the field's title or **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).
2. Click on the **Bin/Trash** button ![Bin icon](/images/binicon.png).
3. Click on **OK** to confirm.



### How to view and edit Image control Field properties ###

To view or edit an Image control's **Field properties**:

1. Select the Image field (by either clicking on the field title or on its **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).

2. The Field Properties associated with the **Image** field will be displayed (and can be changed) in the **Field properties** menu to the right.

   ![Field properties associated with an Image field](/images/image-field-properties.jpg)

   For example, the **Field Properties** associated with an **Image field** titled 'Employees' are shown here and include:

   - **Field type** - The type of field, in this case an **Image** field.
   - **Title** - The Title of the field, in this case 'Employees'.
   - **Show title** - If this is selected, the Image field title will be shown in the form.
   - **Required** - If this is selected, the field will be mandatory for the form user.
   - **Enabled** - If this is selected, the user will be able to edit or interact with the field.
   - **Visible** - If this is selected, the Image field will be visible in the form.
   - **Layout** - The width of the blue bar can be adjusted to change the width of the Image field as it appears on a PC or mobile phone (to view the Mobile layout, click on the expand button ![Expand button](/images/expand-icon.jpg) to the right).

		For more details, go to [Field Properties](/docs/platform/controls/properties#field-properties).



### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Image controls**, find out more about the other types of **Action fields** you can add to Kianda forms:

- [Button controls](/docs/platform/controls/actions/button/)
- [Link controls](/docs/platform/controls/actions/link/)
- [Signature controls](/docs/platform/controls/actions/signature/)
