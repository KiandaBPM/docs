---
title: "Number control"
linkTitle: "Number control"
weight: 4
typora-root-url: ..\..\..\..\..\static
---

**Number controls** (fields) can be inserted in a form if you want form users to insert a numerical value. Number fields can be formatted to be integers (whole numbers), currency or percentages. 

For example, in a Purchase Order Request form, you may want to use Number fields to allow the user to insert the number, unit price and total cost of items being ordered and you may apply rules to some of those fields so that they perform calculations or pull values from other fields or forms. Go to [Rules](/docs/platform/rules/) and [Expression builder](/docs/platform/rules/general/expression-builder) for more information on how you make your forms dynamic.

## How to get started

1. To add a **Number field** to a form, first open the relevant process. 

2. Then select the form within that process that you want to add the field to (so that the **Edit Form** button ![Edit form button](/images/penicon.png) is visible). 

3. Click on **Controls** in the left-hand pane to expand the Controls menu.

4. Select **Input** to view the range of Input controls and click on **Number**. 

   A number field will be added to your form with the default title of ''**Number 1**'' and a pop-up message will say 'Field added'.

   ![Number field added](/images/number-field-added.jpg)

   

   By default, the new **Number field** will have up and down arrow buttons ![Up and down arrows](/images/up-down-arrows.jpg) at the right that users can click to increase or decrease the number in the field and will show any numbers entered to two decimal places. These settings can be amended by editing the field. 

   In the example shown here, a new Number field has been added to form called 'Training Request'. This new Number field could be edited to rename it 'Cost of Training Course' and could be formatted as currency (Euro) so that users could insert the cost of the training course they want to take.

   


### How to edit, move and delete Number fields

To edit a **Number field**:

1. Select the field (by either clicking on the field title or on the field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).
2. Click on the **Edit field** button (Pen icon) ![Edit field button](/images/penicon.png). 

	![Select number field to edit](/images/number-field-edit2.jpg)

	The **Edit field - Number** dialog box will open, enabling you to choose from a range of options:

	![Edit number field dialog box](/images/number-edit-dialog2.jpg)

	

3. **Title** - you can change the title of the Number field from the default '**Number 1**'.

4. **Name** - This is a unique name for the field and inherits a camel case version of the entered Title.

5. **Help text** - you can insert text to help the form user to complete the Number field. If you add help text, a question mark ![Help text icon](/images/help-icon.jpg) icon will appear next to the field title and, if the user clicks on this, they will see the help text you have inserted.

   ![File upload help text example](/images/number-help-text.jpg)

6. **Custom CSS class name** - You can type the name of a CSS class to allow the Number to inherit specific styles defined in the [Global CSS file](/docs/low-code/global-css/).

7. **Display format** - you can choose whether the number inserted by the user is formatted to be an integer (whole number), currency or a percentage. 

   If you select **Currency** as the Display format, a new option will appear - **Currency format** - where you can select the currency you want to use.

   ![Number field currency options](/images/number-currency.jpg)

   If you select **Euro** as the Currency format, a new format option called **Country format** appears to the right. This is a drop-down list from which you can choose from three different ways that Euro amounts can be displayed: 

   ![Euro format options](/images/number-euro-format.jpg)

   If you choose **Ireland** as the Country format, Euro amounts will be displayed like this:

   ![Euro Ireland currency format](/images/number-euro-Ireland.jpg)

   If you choose **Portugal** as the Country format, Euro amounts will be displayed like this:

   ![Euro Portugal currency format](/images/number-euro-portugal.jpg)

   If you choose **France** as the Country format, Euro amounts will be displayed like this:

   ![Euro France currency format](/images/number-euro-france.jpg)



8. **Show number up/down arrows** - you can choose whether or not you want the Number field to have up/down arrow buttons ![Up and down arrows](/images/up-down-arrows.jpg) that enable the user to increase or decrease the number in the field.

9. **Enable native number input on mobile** - you can select this to enable native number input when a user is completing the Number field on their mobile phone.

10. **Decimal places** - you can insert the number of decimal places you want the figure in the Number field to have.

11. **Placeholder** - you can insert placeholder text to appear in the Number field to assist the user. For example, this Number field titled 'Salary' has placeholder text:

    ![Number field with placeholder text](/images/number-placeholder.jpg)

12. **Expression** - you can add an expression to your Number field if, for example, you want the field to contain a calculation based on another field or want it to pull values from other fields. To add an expression, click on the expression button (ellipsis) ![Expression button ellipsis](/images/ellipsis.png) to open the **Expression builder** dialog box - here you can add expressions to perform math operations and various other actions. 

    For example, let's say you have a Number field called 'Salary' where the user inputs their salary and another Number field called 'Bonus' which you want to be automatically populated with a figure that is 20% of the 'Salary' figure. To do this, you add an Expression to the 'Bonus' field:

    ![Expression builder](/images/number-expression-example.jpg)

    Now when a user completes the 'Salary' field, the Bonus field automatically populates with a figure that is 20% of their salary:

    ![Number expression example](/images/number-expression-example2.jpg)

    To learn more about applying rules and expressions to Number fields, go to [Rules](/docs/platform/rules/) and [Expression builder](/docs/platform/rules/general/expression-builder).



13. Make whatever changes you want in this **Edit field - Number** dialog box and then click **OK** to confirm. 

    


To move a **Number field**:

1. Select the field's **Drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png).
2. Drag and drop the field wherever you want to move it to within your form.

![Date field drag handle](/images/number-move.jpg)

To delete a **Number field** from your form:

1. Select the field (by either clicking on the field's name or its **drag handle** button ![Drag handle button](/images/draghandlewhite-frame.png)).
2. Click on the **Bin/Trash** button ![Bin icon](/images/binicon.png). 
3. Click on **OK** to confirm.

### How to edit Number field properties ###

To view or edit the field properties associated with a **Number field**, select the field (by clicking on the field title or field drag handle button ![Drag handle button](/images/draghandlewhite-frame.png)) - the **Field properties** menu will appear in the right-hand pane.

![Field properties](/images/number-properties.jpg)

For example, the **Field Properties** associated with a **Number field** titled 'Salary' are shown here and include:

- **Field type** - The type of field, in this case a **Number** field.
- **Title** - The Title of the field, in this case 'Salary'.
- **Show title** - If this is selected, the Number field title will be shown in the form.
- **Required** - If this is selected, the Number field will be mandatory for the form user.
- **Enabled** - If this is selected, the user will be able to edit or interact with the field.
- **Visible** - If this is selected, the Number field will be visible in the form.
- **Layout** - The width of the blue bar can be adjusted to change the width of the Number field as it appears on a PC or mobile phone (to view the Mobile layout, click on the expand button ![Expand button](/images/expand-icon.jpg) to the right).

To learn more about the different options within the Field properties menu, go to [Field Properties](/docs/platform/controls/properties#field-properties).

### Saving changes and version history ###

Make sure to save any changes you make by clicking on the **Save** button ![Save](/images/saveprocess.png). You will always have the option to revert back to previous versions of your form by clicking the **Design Version History** ![Version button](/images/version8.png) button in the top right corner.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Number control**, find out more about the other types of **Input fields** you can add to a Kianda process:

- [Date control](/docs/platform/controls/input/date/)
- [File upload control](/docs/platform/controls/input/file-upload/)
- [List control](/docs/platform/controls/input/list/)
- [Table control](/docs/platform/controls/input/table/)
- [Text box control](/docs/platform/controls/input/textbox/)
- [Toggle control](/docs/platform/controls/input/toggle/)
- [User picker control](/docs/platform/controls/input/user-picker/)
