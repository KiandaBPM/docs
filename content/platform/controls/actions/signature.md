---
title: "Signature control"
linkTitle: "Signature control"
typora-root-url: ..\..\..\..\..\static
---

A **Signature control** can be used in a form to capture a user's electronic signature. This can be particularly useful in a form that needs to be signed off as part of an approval process.

For example, a manager may complete a Performance Plan form for each employee, setting out their Key Performance Areas and goals. It could be useful to add two **Signature fields** to this form - titled 'Manager Signature' and 'Employee Signature' - to record the Manager and Employee each signing off on the Performance Plan. We will keep this example in mind as we learn more about using Signature fields.

 

## How to get started

1. To add a **Signature field** to a Kianda form:

   1. Open an existing process by going to **Administration** > **Designer** in the left side menu and clicking on a process, or create a new process in Designer. See [Create First Process](/docs/getting-started/create-first-process/) to learn how to create your first process.

      ![Open process in Designer](/images/designer-open-process.jpg)

   2. Once you have opened your process, select the form you want to work on (so that the **Edit Form** button ![Pen icon](/images/penicon.png) is shown). 

      In this example, we have opened an Employee Appraisal Process and selected a Performance Plan form within it:

      ![Select form](/images/button-form-selected.jpg)

   3. Select the area within the form where you want to insert the new **Signature field(s)** - in our example, we want to insert one new Signature field below the 'For Manager' table and a second new Signature field below the 'For Employee' table in our Performance Plan form: 

      ![Select form section to insert Signature field](/images/signature-form-section.jpg)

   4. Click on **Controls** in the left-hand pane, and, from the four categories of Controls (Input, Layout, Actions and Custom), click on **Actions**.

   5. Select **Signature** from the four types of Action fields: Button, Link, Image and Signature:

      ![Actions menu insert Signature](/images/signature-insert.jpg)

   6. A **New field - Signature** dialog box will automatically open, giving you options for your new Signature field: 

      ![Signature field dialog box](/images/signature-dialog2.jpg)

      

   7. **Title** - You can change the name of the Signature field from the default '**Signature 1**'. In our example, we can change it to 'Manager Signature'.

   8. **Name (Unique)** - This is a unique name for the new field and inherits a camel case version of the entered Title.

   9. **Help text** - You can insert text to help the form user. If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted.

      For example, we could insert this Help text to go with our new 'Manager Signature' Signature field:

      ![Signature field help text](/images/signature-help.jpg)

   10. **Custom CSS class name** - You can type the name of a CSS class to allow the Signature to inherit specific styles defined in the [Global CSS file](/docs/low-code/global-css/).

   11. **Signature pad height (pixels)** - You can choose the height of the signature in pixels. To do this, either manually type in the number of pixels you want the height to be or use the up and down arrows ![Up down arrows](/images/up-down-arrows.jpg) to the right.

   12. **Signature color** - You can choose the colour for the signature itself, i.e. the name of the user electronically signing the form. To do this, click on the field and then either:

       (i) use the slider to move between colours and click on the palette to choose a particular hue

       (ii) click on the dropper icon ![Signature colour dropper icon](/images/signature-dropper.jpg) and then choose a colour from your open PC window(s)

       (iii) type in the R G B value if you know the colour you want to use

       ![Signature colour](/images/signature-colour.jpg)

   13. **Signature thickness** - Insert a numerical value for how thick you want the signature font to be. By default, this is set to 2.

   14. **Start signing button text** - You can choose the text you want to appear on the Signature field button. By default, the text is 'Start Signing' but you can change this to whatever you want.

   15. **Re-Sign button text** - You can choose the text you want to appear on the 'Re-Sign'  button. This 'Re-Sign' button appears after the user has clicked the Start signing button and completed the dialog box and it enables the user to replace or override the original signature they input. By default, the text is 'Re-sign' but you can change this to whatever you want.
   
       In our example of adding a Signature field titled 'Manager Signature', once the manager has signed, the 'Re-sign' button will be shown:
   
       ![Re-sign button showing after completing Signature field](/images/signature-resign.jpg)
   
   16. **Show username and signing time** - Select **Yes** to show the Kianda username of the person who has electronically signed with the Signature field and the time they signed at (per the local time settings on the user's Kianda account).
   
       ![Signature showing username and signing time](/images/signature-username-time.jpg)
   
   17. **Require user authentication** - Select **Yes** to require user authentication for the user clicking the Signature field button to sign the section/form. If you select Yes, an additional option will display - **Authenticate via SSO**.
   
       ![Signature user authentication option](/images/signature-user-authentication.jpg)
   
       If you then choose **Yes** for authenticating the user via Single Sign-on, an initial pop-up box will appear to check whether the user is signed in and, after clicking on the Signature button a second pop-up will appear to confirm the user's credentials.
   
       If you choose **No** for **Authenticate via SSO**, a pop-up appears requiring the user to confirm their login credentials.
   
   18. **Hide sign by textbox** - Select **Yes** if you want to hide the sign by textbox.
   
       For example, if we choose **Yes** for this option for our new 'Manager Signature', when the user clicks the 'Start signing' button and the pop-up box opens, they will just see an area where they can either choose Signature (with an electronically generated signature) or Draw or Upload (to draw or upload their signature):
   
       ![Signature pop up with sign by textbox hidden](/images/signature-hide-sign-by.jpg)
   
       If we choose **No** to **Hide sign by textbox**, when the user clicks Start signing they will see a 'Sign by' textbox at the top of the pop-up that appears:
   
       ![Signature pop up including Sign by textbox](/images/signature-sign-by.jpg)
   
   19. **Allow override sign by** - Select **Yes** if you want to allow override of the signature inserted in the Signature field. If you choose Yes, an additional option will be shown - **Default title of sign by**:
   
       ![Signature field allow override sign by option](/images/signature-override.jpg)
   
       If you select **Yes** to 'Allow override sign by' and then click into the '**Default title of sign by**' field, you can then select a field to be used to populate the default name in the Signature field. For example, you could select a [User picker field](/docs/platform/controls/input/user-picker/) within your form as the 'Default title of sign by' - this would then mean that the user that is selected in that User picker field will be the default name shown in the Signature field. 
   
       
   
   20. **Hide default signature tab** - Select **Yes** if you want to hide the default signature tab (where an electronic signature is automatically generated). If you choose Yes, the next option - **Auto save signature** - will no longer be available to you.
   
       In our example, if we select **No** to hiding the default signature tab, the user will see the electronically generated signature:
   
       ![Default signature tab shown](/images/signature-default-signature.jpg)
   
       
   
   21. **Auto save signature** - Select **Yes** if you want to auto save the signature.
   
   22. **Button icon** - You can choose an icon to appear on your Signature field button (or can opt not to have an icon on it). Click on the down arrow to the right of the field and select the icon you want from several hundred icons in the dropdown list.
   
	23. **Button color** - Choose the colour you want for your Signature field button. The options are Navy, Green, Blue, Amber, Red or White.
   
   24. **Sign dialog button text** - You can choose the text to appear on the button at the bottom right of the Signature dialog box. By default, the text is 'OK' but you can change this to whatever you want.
   
   25. Once you complete the **New field - Signature** dialog box, click **OK** and the new **Signature field** will be added to your form. 
   
       In our example, if we insert a new Signature field titled 'Manager Signature', it will be added to the bottom of the Performance Plan form and look like this:
   
       ![Inserted Signature field](/images/signature-inserted-no-title.jpg)
   
   26. By default, the **Title** of the new **Signature field** will not be shown but you can change this by selecting the the field and checking the **Show title** checkbox in the **Field properties** menu to the right.
   
       ![Show Signature field title](/images/signature-show-title.jpg)
   
       
   
   27. You can then click on the new **Signature field** within the form to see how it will appear to users. 
   
       In our case, we can click on the '**Start Signing**' Manager Signature button to see the dialog box that will appear when the form user clicks on it:
   
       ![Signature preview dialog box](/images/signature-preview-dialog.jpg)
   
       The user can choose between a system-created **Signature** or to **Draw or Upload** their own version. If you click on **Draw or Upload** you can see how the user can either sign on the dotted line (and click on **Clear** at any stage to erase a mistake) or click on **Upload handwritten signature** and browse for a file.
   
       ![Signature Draw or Upload option](/images/signature-draw-or-upload.jpg)
   
   
       	Click on the **OK** button to close the dialog box.
   
   10. You may decide to add rules to your **Signature field** - to learn more about the different categories of rules available, go to [Rules](/docs/platform/rules/). The rules we add will be executed in the order in which they are listed under **Rules** in the right hand pane.




   ### How to edit, move and delete Signature fields ###

   To edit a **Signature field**:

   1. Select the Signature field (by either clicking on the field name or on the field's **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png))

   2. Click on the **Edit Field** button (Pen icon) ![Pen button](/images/penicon.png)

      ![Edit Signature field](/images/signature-edit.jpg)

   3. The **Edit Field** dialog box will open (with the Signature field title you chose reflected in the dialog box name), enabling you to choose from the same range of options as appear in the **New field - Signature** dialog box (as already discussed in [How to get started](/docs/platform/controls/actions/signature#how-to-get-started)).

      ![Signature edit field dialog box](/images/signature-edit-dialog2.jpg)

      

   To move a **Signature field**, simply:

   1. Select the Signature field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png).

   2. Drag and drop the Signature field wherever you want to move it within your form.

      For example, we can move the 'Employee Signature' **Signature field** from where it was automatically added at the bottom of the panel to the location where we want it to go:

      ![Move Signature field](/images/signature-move.jpg)

      In our example, if we moved the two **Signature fields** we inserted in the Performance Plan form - one titled '**Manager Signature**' and a second titled '**Employee Signature**' - to go under the 'For Manager' and 'For Employee' sections, they could look like this:
      
      ![Signature example](/images/signature-example.jpg)
      
      

   To delete a **Signature field** from your form:

   1. Select the Signature field (by either clicking on the field's title or its **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).
   2. Click on the **Bin/Trash** button ![Bin icon](/images/binicon.png).
   3. Click on **OK** to confirm.




   ### How to view and edit Signature field properties ###

   To view or edit a Signature control's **Field properties**:

   1. Select the Signature field (by either clicking on the field title or **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).

   2. The Field Properties associated with the **Signature** field will be displayed (and can be changed) in the **Field properties** menu to the right.

      ![Field properties associated with a Signature field](/images/signature-field-properties.jpg)

      For example, the **Field Properties** associated with a **Signature field** titled 'Manager Signature' are shown here and include:

      - **Field type** - The type of field, in this case a **Signature** field.
      - **Title** - The Title of the field, in this case 'Manager Signature'.
      - **Show title** - If this is selected, the Signature field title will be shown in the form.
      - **Required** - If this is selected, the Signature field will be mandatory for the form user.
      - **Enabled** - If this is selected, the user will be able to edit or interact with the field.
      - **Visible** - If this is selected, the Signature field will be visible in the form.
      - **Layout** - The width of the blue bar can be adjusted to change the width of the Signature field as it appears on a PC or mobile phone (to view the Mobile layout, click on the expand button ![Expand button](/images/expand-icon.jpg) to the right).

   ​		For more details, go to [Field Properties](/docs/platform/controls/properties#field-properties).

   

   ### Saving changes and version history ###

   Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.

   

   ### What's next  ![Idea icon](/images/18.png) ###

   Now that you've learned about the **Signature control**, find out more about the other types of **Action fields** you can add to Kianda forms:

   - [Button control](/docs/platform/controls/actions/button/)

   - [Image control](/docs/platform/controls/actions/image/)

   - [Link controls](/docs/platform/controls/actions/link/)