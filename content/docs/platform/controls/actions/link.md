---
title: "Link control"
linkTitle: "Link control"
typora-root-url: ..\..\..\..\..\static
---

**Link fields** can be used to add custom links to forms, including external links. 

For example, as part of an Employee Appraisal Process, a manager may complete a Performance Plan form for each employee, setting out their Key Performance Areas and goals. It could be useful to add a Link Field to this form that links to the company's Employee Handbook. We will keep this example in mind as we learn more about using **Link controls**.



## How to get started ##

To add a **Link field** to a Kianda form:

1. Open an existing process by going to **Administration** > **Designer** in the left side menu and clicking on a process, or create a new process in Designer. See [Create First Process](/docs/getting-started/create-first-process/) to learn how to create your first process.

   ![Open process in Designer](/images/designer-open-process.jpg)

2. Once you have opened your process, select the form you want to work on (so that the **Edit Form** button ![Pen icon](/images/penicon.png) is shown). 

   In this example, a Performance Plan form within an Employee Appraisal Process has been selected:

   ![Select form](/images/link-form-selected.jpg)

3. Select the area within the form where you want to insert the new **Link field** - in our example, we will select the first panel in the 'Employee Information' section of the form. 

   ![Select panel to insert Link field](/images/link-select-area.jpg)

4. Click on **Controls** in the left-hand pane, and, from the four categories of Controls (Input, Layout, Actions and Custom), click on **Actions**.

5. Select **Link** from the four types of Action fields: Button, Link, Image and Signature:

   ![Actions menu insert Link](/images/link-insert.jpg)

6. A **New field - Link** dialog box will automatically open, giving you options for your new Link field.

   ![Link field dialog box](/images/link-dialog.jpg)

   The options available in the **New field - Link** dialog box include:

   - **Title** - You can change the name of the Link field from the default '**Link 1**'. In our example, we will change the title to 'Employee Handbook'.

   - **Name (Unique)** - This is a unique name for the new field.

   - **Help text** - You can insert text to help the form user. If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted.

     In our example, we could insert this help text:

     ![Link field help text "Click here to open the latest version of the Employee Handbook"](/images/link-help-text.jpg)

     The user will then be able to view this help text by clicking on the question mark icon ![Help text icon](/images/help-icon.jpg) next to the Link field title:

     ![Link field sample help text](/images/link-help-text-example.jpg)

   - **Link target** - You can choose to have the link either open as a **New tab** or open in the **Same tab** the form user is currently in.

   - **Default URL** - This is where you can insert the URL you want the user to be brought to when they click on the Link field.

7. Once you complete the **New field - Link** dialog box, click **OK** and the new **Link field** is added to your form. 

   In our example, if we changed the default Link field title to 'Employee Handbook'  and inserted help text (as shown previously), our new Link field could look like this when added to our 'Performance Plan' form:

   ![Link field example titled Employee Handbook](/images/link-example.jpg)



### How to edit, move and delete Link fields ###

To edit a **Link field**:

1. Select the Link field (by either clicking on the field name or on the field's **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png))

2. Click on the **Edit Field** button (Pen icon) ![Pen button](/images/penicon.png)

   ![Edit Link field](/images/link-edit.jpg)

3. The **Edit Field - Link** dialog box will open (with the Link field title you chose reflected in the dialog box name), enabling you to choose from the same range of options as appear in the **New field - Link** dialog box (as already discussed in [How to get started](/docs/platform/controls/actions/link#how-to-get-started)).

   ![Link field Edit field dialog box](/images/link-edit-dialog.jpg)

   

To move a **Link field**, simply:

1. Select the Link field's **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png) 

2. Drag and drop the Link field wherever you want to move it within your form.

   For example, we could move the 'Employee Handbook' **Link field** by selecting its drag handle and dragging and dropping it wherever we want within our Performance Plan form:

   ![Move Link field example](/images/link-move.jpg)

   

To delete a **Link field** from your form:

1. Select the Link field (by either clicking on its title or its **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png))
2. Click on the **Bin/Trash** button ![Bin icon](/images/binicon.png) 
3. Click on **OK** to confirm.



### How to view and edit Link control Field properties ###

To view or edit a Link control's **Field properties**:

1. Select the Link field (by either clicking on the field's title or **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).

2. The Field Properties associated with the **Link field** field will be displayed (and can be changed) in the **Field properties** menu to the right.

   ![Field properties associated with a Link control](/images/link-field-properties.jpg)

   For example, the **Field Properties** associated with a **Link control** titled 'Employee Handbook' are shown here and include:

   - **Field type** - The type of field, in this case a **Link field**.
   - **Title** - The Title of the field, in this case 'Employee Handbook'.
   - **Show title** - If this is selected, the Link field title will be shown in the form.
   - **Required** - If this is selected, the Link field will be mandatory for the form user.
   - **Enabled** - If this is selected, the user will be able to edit or interact with the field.
   - **Visible** - If this is selected, the Link field will be visible in the form.
   - **Layout** - The width of the blue bar can be adjusted to change the width of the Button as it appears on a PC or mobile phone (to view the Mobile layout, click on the expand button ![Expand button](/images/expand-icon.jpg) to the right).

​		For more details, go to [Field Properties](/docs/platform/controls/properties#field-properties).



### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### User tips ![Target icon](/images/05.png) ###
If you want the **Link to be automatically emailed** to someone once the form user clicks on the Submit button, for example, you could apply a **Send email rule** to the Submit button and reference the Link field in an **expression** in the email.

Rules allow actions based upon conditions resulting from user interaction with fields. To learn about the different types of rules that you can apply go to [Rules](/docs/platform/rules/), to learn about expressions see [Expression builder](/docs/platform/rules/general/expression-builder/) or for more information specifically about the Send email rule, see [Send email](/docs/platform/rules/communications/send-email/).



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about **Link controls**, find out more about the other types of **Action fields** you can add to Kianda forms:

- [Button controls](/docs/platform/controls/actions/button/)
- [Image controls](/docs/platform/controls/actions/image/)
- [Signature controls](/docs/platform/controls/actions/signature/)
