---
title: "Button control"
linkTitle: "Button control"
typora-root-url: ..\..\..\..\..\static
---

**Button fields** can be used in forms to allow user interface actions. Often, rules are applied to buttons so that actions are automatically executed once the user clicks on the button. In this way, Button fields with rules can be used to trigger a sequence of events. To learn more about rules, go to [Rules](/platform/rules/).

For example, as part of an Employee Appraisal Process, a manager may complete a Performance Plan form for each employee, setting out their Key Performance Areas and goals. It could be useful to add a button to this form - titled 'Schedule Meeting' - that will automatically schedule a performance review meeting between the manager and the employee at a pre-determined date in the future. We will keep this example in mind as we learn more about using **Button controls**.



## How to get started ##

To add a **Button field** to a Kianda form:

1. Open an existing process by going to **Administration** > **Designer** in the left side menu and clicking on a process, or create a new process in Designer. See [Create First Process](/getting-started/create-first-process/) to learn how to create your first process.

   ![Open process in Designer](/images/designer-open-process.jpg)

2. Once you have opened your process, select the form you want to work on (so that the **Edit Form** button ![Pen icon](/images/penicon.png) is shown). 

   In this example, a Performance Plan form has been selected:

   ![Select form](/images/button-form-selected.jpg)

3. Select the area within the form where you want to insert the new **Button field** - in our example, we will select the panel containing the 'Schedule performance plan review meeting' information. 

   ![Select panel to insert Button](/images/button-select-area.jpg)

4. Click on **Controls** in the left-hand pane, and, from the four categories of Controls (Input, Layout, Actions and Custom), click on **Actions**.

5. Select **Button** from the four types of Action fields: Button, Link, Image and Signature:

   ![Actions menu insert Button](/images/button-insert.jpg)

6. A **New field - Button** dialog box will automatically open, giving you options for your new Button field: 

   ![Button field dialog box](/images/button-dialog-new.jpg)

   

7. **Title** - You can change the name of the Button from the default '**Button 1**'.

8. **Name (Unique)** - This is a unique name for the Button and inherits a camel case version of the entered Title.

9. **Help text** - You can insert text to help the form user. If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted.

10. **Custom CSS class name** - You can type the name of a CSS class to allow the Button to inherit specific styles defined in the [Global CSS file](/low-code/global-css/).

11. **Button size** - You can choose the size of the Button ranging from XL (extra large) to XS (extra small). By default, the Button size is medium.

12. **Block button** - If you choose **Yes**, the button will span the entire width of the button's allocated space. If you choose **No**, an additional field called **Align button** will appear that allows you to select what direction the Button aligns to. By default, the Button is aligned to the center.

    ![align button](/images/align-button.jpg)

13. **Color scheme** - You can choose a colour for your new Button field from six options.

14. **Icon** - You can choose an icon to appear on your Button by clicking on the down arrow to the right and scrolling to select the icon you want to use (or can opt not to add an icon).

![Button dialog box icon options](/images/button-dialog-icon.jpg)

15. **Show in form body** - Select **Yes** if you want your Button to be shown in the Form.

16. **Enable button security** - Select **Yes** if you want to limit who can see the Button you are adding to the form.

    ![Button dialog box enable button security](/images/button-dialog-security.jpg)

    If you select **Yes**, two additional options are displayed: **Add security** and **Allow anonymous link**.

    When you click on **Add security**, a new line appears with the options **Field security** and **Select user(s) or groups**:

    ![Buttons add security](/images/button-dialog-add-security.jpg)

    In **Field security**, you can choose from **three options in terms of who will be able to view the Button you are inserting**:

    ![Button visibility options](/images/button-dialog-visibility.jpg)

    (i) If you choose to limit the Button visibility to a '**User or group**', you can then select the user(s) or groups you want to be able to see the Button in the 'Select user(s) or groups' box.

    (ii) If you choose to limit the Button visibility to a '**User picker field**', you then select the User picker field in the 'Select a userpicker field' box:

    ![Button visibility limited to User picker field](/images/button-dialog-user-picker.jpg)

    This will limit the visibility of the Button to the user(s) selected in that User picker field.

    (iii) If you choose to limit the Button visibility to '**Form owner(s)**', you then select the form in the 'Select a form' box - only the owner(s) of the selected form will be able to view the new Button you are inserting:

    ![Button visibility limited to Form owners](/images/button-security-form-owner.jpg)

    

    The second main option in terms of Button security is '**Allow anonymous link**':

    - If you choose **Yes**, this will mean that the Button field will be visible when the form is accessed via an anonymous link. 

    - If you choose **No**, anyone accessing the form from an anonymous link will not be able to see the Button field. 

    Anonymous links can be useful if, for example, you want members of the public to complete your form without needing to log into Kianda. To learn more about how you can create anonymous links to a form that can be shared with external users, see [Anonymous form link](/platform/rules/communications/anonymous-form-link/).



 

17. Once you complete the **New field - Button** dialog box, click **OK** and the new **Button field** is added to your form. 

In our example, if we changed the Button field title to 'Schedule Meeting' and chose a green colour scheme and 'people' icon, set button size to small and aligned the button to the right, our new Button could look like this when added to our 'Performance Plan' form:

![Button example titled Schedule Meeting](/images/button-example-meeting.jpg)

- You may then decide to add rules to your new **Button field** - to learn more, go to [Rules](/platform/rules/). The rules we add will be executed in the order in which they are listed under **Rules** in the right hand pane.

  For example, we could add a series of rules to our new **Schedule Meeting** button:

  ![Button field example with rules](/images/button-example-rules.jpg)

  In our example, the sixth rule is a Meeting Request rule which will mean that, once the **Schedule Meeting** button is clicked, an automated email will be sent to the employee scheduling a performance review meeting - to learn more, go to [Meeting request rule](/platform/rules/communications/meeting-request/).

  

### How to edit, move and delete Button fields ###

To edit a **Button field**:

1. Select the Button field (by either clicking on the field name or on the field's **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).

2. Click on the **Edit Field** button (Pen icon) ![Pen button](/images/penicon.png).

3. The **Edit Field** dialog box will open (with the Button title you chose reflected in the dialog box name), enabling you to choose from the same range of options as appear in the **New field - Button** dialog box (as already discussed in [How to get started](/platform/controls/actions/button#how-to-get-started)).

   ![Button field dialog box](/images/button-dialog.jpg)

   

To move a **Button**, simply:

1. Select the Button's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png).

2. Drag and drop the Button wherever you want to move it within your form.

   For example, the 'Schedule Meeting' **Button** could be moved from where it was automatically added at the bottom of the panel to the location where we want it to go:

   ![Move Button field example](/images/button-move.jpg)

   

To delete a **Button** from your form:

1. Select the Button (by either clicking on the Button's title or its **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).
2. Click on the **Bin/Trash** button ![Bin icon](/images/binicon.png).
3. Click on **OK** to confirm.



### How to view and edit Button field properties ###

To view or edit a Button's **Field properties**:

1. Select the Button field (by either clicking on the field title or on the field's **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).

2. The Field Properties associated with the **Button** field will be displayed (and can be changed) in the **Field properties** menu to the right.

   ![Field properties associated with a Button](/images/button-field-properties.jpg)

   For example, the **Field Properties** associated with a **Button field** titled 'Schedule Meeting' are shown here and include:

   - **Field type** - The type of field, in this case a **Button**.
   - **Title** - The Title of the field, in this case 'Schedule Meeting'.
   - **Show title** - If this is selected, the Button field title will be shown in the form.
   - **Required** - If this is selected, the Button will be mandatory for the form user.
   - **Enabled** - If this is selected, the user will be able to edit or interact with the field.
   - **Visible** - If this is selected, the Button will be visible in the form.
   - **Layout** - The width of the blue bar can be adjusted to change the width of the Button as it appears on a PC or mobile phone (to view the Mobile layout, click on the expand button ![Expand button](/images/expand-icon.jpg) to the right).

​		For more details, go to [Field Properties](/platform/controls/properties#field-properties).



### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Button controls**, find out more about the other types of **Action fields** you can add to Kianda forms:

- [Image controls](/platform/controls/actions/image/)
- [Link controls](/platform/controls/actions/link/)
- [Signature controls](/platform/controls/actions/signature/)
