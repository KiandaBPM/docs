---
title: "Inspection Form"
weight: 2
typora-root-url: ..\..\..\..\static 
---

<!-- The **Inspection Form** for this process will be used by an engineer from our **Request Form**. The engineer will have the ability to access and edit the form. When the engineer submits the **Inspection Form**, we will generate a word document, convert it to a PDF file and send it to our **Safety Manager** from our **Request Form**. For this we will use **Generate a word document** rule along with **Convert to PDF** rule. We will also then use **Send email** rule to send.  -->

## Creating the Inspection Form

To begin this example of creating an **Inspection Form**, we need to add a new form to our process.

1. From the process creation page, click on **Add form**. This can be found at the top of your screen. 

   ![Add form](/images/examples-add-form.jpg)

   - **Title** - Name to represent this form. In our case we will call it **Inspection Form**.

   - **Name (unique)** - A unique identifier for our form. You can give this any name you would like as long as it’s unique.

   - **Default owner(s)** - This field identifies which users can fill out our form when it’s complete. In our case we will choose from **Groups** and choose our **Management Team**. To learn more about how to create groups in Kianda go to [creating groups](http://localhost:1313/docs/platform/administration/users/#creating-new-groups).

   - **Activate with** - Means that the form can be activated with other forms within the process, so they can be edited at the same time. This means several forms become the **current form** in a form group. In our case we will leave this blank.

   - **Submit mode** - This option means that when a process instance is running you can choose **only this form** to be submitted, or you can choose **all forms in edit mode** meaning that several forms could have their details submitted or saved. Choose **Only this form** radio list.

   - **Form icon** - Dropdown field to select an icon for the form.

   - **Form theme** - This option is used to change the colour of the form tile, for example **Green**.

   - **Enable quick actions** - if you tick the checkbox, you can select from the options a) Enable re-assign b) Enable edit and c) Enable custom action. We will leave this box unchecked.

     ![Edit form box](/images/examples-inspection-form.jpg)

2. Click on the **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.

3. To save your changes to the form, click on the **Save** button ![Save button](/images/saveprocess.png)

<img src="/videos/gifs/common/save-process.gif"/>

### Creating Form Fields

Taking a look back at our [requirements](/docs/examples/inspection/#planning-form-requirements), on the **Inspection Form** there is five different fields which will be used to complete an inspection along with five inner fields for our table:

- **Date** - Representing the day of the inspection.
- **Inspection checklist** - Checklist that will be filled out by an **Engineer.**
  - **Question** - Question asking the engineer to make a check on the inspection.
  - **Pass or fail** - Radio list for with a yes or no indicating whether a check is passed or failed.
  - **Comment** - Text box used by the engineer for any comments on a check.
  - **Upload file** - Upload file button used to upload an image.
  - **Image** - Image container that contains the uploaded image.
- **Utility panel** - An invisible to the user panel used to hold our word template and generated PDF file. 
- **Upload template** - Word template used to create a PDF file.
- **Generated PDF** - File field to hold our generated PDF.

#### Creating a Date field - Date

The **Date** field represents the day, month and year of our inspection. To learn more about **Date** fields, go to [Date Control](/docs/platform/controls/input/date/).

<img src="/videos/gifs/examples/inspection/date-field.gif"/>

1. To add a **Data** field, first select the **Inspection Form** so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.

2. Click on **Controls** in the left-hand pane to expand the Controls menu.

3. Select **Input** to view the range of Input controls.

4. Click on **Date**.

5. Select the **Date** field so that the edit or pen icon  ![Pen icon](/images/penicon.png) appears.

6. Click on the edit or pen icon  ![Pen icon](/images/penicon.png) to open the **Edit field** dialog box.

   ![Edit date dialog box](/images/examples-edit-date.jpg)

7. Change the **Title** to **Date**.

8. Chane the **Name (unique)** to a unique identifier.

9. Click on **OK** on the **Edit field** dialog box.

#### Creating a Table field - Inspection Checklist

The **Inspection Checklist** will be used by an engineer to fill out. Inside of the table we need to have five different columns. **First** column will be a text box representing a check that our engineer must complete. **Second** column will be our passed radio list of **Yes** and **No** options. **Third** column is another text box for any comments that the engineer might have. **Forth** column is a **File upload** field to upload any images. Our last, **fifth** column is the **Image** container to hold the uploaded image.

<img src="/videos/gifs/examples/inspection/table-field.gif"/>

1. To add a **Table** field, first select the **Inspection Form** so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.

2. Click on **Controls** in the left-hand pane to expand the Controls menu.

3. Select **Input** to view the range of Input controls.

4. Click on **Table**.

5. Select the **Table** field so that the edit or pen icon  ![Pen icon](/images/penicon.png) appears.

6. Click on the edit or pen icon  ![Pen icon](/images/penicon.png) to open the **Edit field** dialog box.

   ![Table select](/images/examples-table-select.jpg)

7. Change the **Title** to **Inspection Checklist**.

8. Chane the **Name (unique)** to a unique identifier.

9. Click on **OK** on the **Edit field** dialog box.

   ![Edit table dialog box](/images/examples-table-1.jpg)

### Changing the Table layout

When adding a table in Kianda, the table has two text boxes inside by default. We will leave them in as we'll be using them for our **Question** and **Comment** fields.

#### Changing Text box field - Question

The **Question** field represents what kind of check the engineer must complete. This field will be disabled so that the users of this form will not be able to change the contents of the question.

<img src="/videos/gifs/examples/inspection/changing-text-box.gif"/>

<br><br>

1. Click on the left text box inside of the table so that the edit or pen icon  ![Pen icon](/images/penicon.png) appears.

   ![Table Left text box select](/images/examples-table-left-textbox.jpg)

2. Click on the edit or pen icon  ![Pen icon](/images/penicon.png) to open the **Edit field** dialog box.

3. Change the **Title** to **Question**.

4. Chane the **Name (unique)** to a unique identifier.

5. Click on **OK** on the **Edit field** dialog box.

6. Click on **Field properties** in the right-hand pane. 

7. Click on the **Enabled** checkbox to uncheck it.

   ![Field properties, enabled unchecked](/images/field-properties-enabled-uncheck.jpg)

   



#### Adding Radio List to a table - Passed field

The **Radio list** is a **List** type from the **Input** set of fields. We will enter the options manually and set the field to be of type radio. To find out more about radio lists, go to [List Control](/docs/platform/controls/input/list/).

<img src="/videos/gifs/examples/inspection/table-radio-list.gif"/>

<br>

<br>

1. To add a **Radio** list, first select the **Question** field in the checklist table so that the edit or pen icon ![Pen icon](/images/penicon.png) appears.

2. Click on **Controls** in the left-hand pane to expand the Controls menu.

3. Select **Input** to view the range of Input controls.

4. Click on **List**.

   ![Adding Radio list](/images/examples-table-add-radiolist.jpg)

5. In the **New field - List** dialog box, change the **Title** to **Passed**. 

6. Select **Entered manually** in the **List source** options.

7. Type in **Yes** and **No** in the text box as shown in the image below.

8. Select **Radio list** from the **Display format** options.

9. Select **Vertical** in the **List display position**.

   ![Radio List edit dialog box](/images/examples-table-radio-list.jpg)

10.  Click on **OK** on the **Edit field** dialog box.

The image below shows how the **Inspection Checklist** should look so far. You can move the table fields with the left and right arrows above each field. Note the crossed circle above the question text box, this indicated that this field is disabled and will not be editable by an user of the form.

![Table move left and right](/images/table-move-fields.jpg)



#### Changing Text box field - Comment

The **Comment** field gives the ability to type in a comment on any of the checks performed by the engineer.

<img src="/videos/gifs/examples/inspection/comment.gif"/>

<br><br>

1. Click on the right **Text 2** inside of the table so that the edit or pen icon  ![Pen icon](/images/penicon.png) appears.

   ![Table Left text box select](/images/examples-table-right-textbox.jpg)

2. Click on the edit or pen icon  ![Pen icon](/images/penicon.png) to open the **Edit field** dialog box.

3. Change the **Title** to **Comment**.

4. Chane the **Name (unique)** to a unique identifier.

5. In the **Mode** options, select **Multiple lines of text**. Selecting **Multiple lines of text** adds another option called **Rows**. To learn more about text box options, go to [Text box control](/docs/platform/controls/input/textbox/).

6. Click on the **Rows** option and type "**3**" or use the up arrow to increase and down arrow to decrease.

   ![Increasing row number](/images/textbox-rows.jpg)

7. Click on **OK** on the **Edit field** dialog box.





























