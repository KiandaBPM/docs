---
title: "Conditions"
typora-root-url: ..\..\..\static
weight: 10
---

Conditions allow you to make forms and dashboards fully dynamic. They are easy to configure in the Kianda platform, using natural language to create triggers for rule execution.

Conditions can be applied to [Tile](/platform/pages/tile/), [List](/platform/pages/list/), [Chart](/platform/pages/chart/) [Chat v2](/platform/pages/chartv2/) and [Filter](/platform/pages/filter/) widgets.



## How to get started ##

1. Make sure you are in **Edit mode** on your dashboard page by clicking on the **Edit** button ![Edit button](/images/edit.png) in the top menu.

   ![Pen button in a widget](/images/penbutton_frame.png) 

2. Click on the **Update configuration** or **Pen** button for any of the above mentioned widgets.

3. In the edit dialog box of the Tile, List and Chart widgets, click on the **Conditions** button ![Conditions button](/images/conditions.png) after it opens. 

   - To add conditions in the Filter widget, visit [Filter](/platform/pages/filter/).

   - To add conditions to Chart v2, visit [Chart v2](/platform/pages/chartv2/).

4. Click on **Add a conditions group** ![Add conditions button](/images/addconditions.png) button to add a condition.

5. The **Edit conditions** dialog box opens. 

   ![Edit conditions](/images/conditions-dialog.jpg)

   Click into the first empty field to choose a field to filter on. This field can be a **Common field** or a **Design field** as found in a form. Click on the + symbol to drill down to the relevant fields to use. Click on a field to use, for example the Common field, 'Status'. If you want to replace the field with a different one, click on the ![X](/images/x.png) beside the field name.

6. Click on the operator field and choose from a relevant operator to apply, for example **Equals**, **Contains**, **Is blank**, **Matches pattern** and so on. 

   ![Condition operators](/images/operator.png)

   If a time-based field is chosen then a drop-down list of time-related operators become available, for example **Is Today**, **Is Between Days**, **Is Before Today** and so on.

7. Depending on the operator chosen, then a value field may be visible where you can either a) type in a value that you want to hone in on, or b) click into the field to drill down to a design field as found in a form. In the example below, we are looking for a particular value called 'completed' against the Common field, 'Status'.

   ![Condition applied](/images/conditionapplied.png)

8. Click on **Add condition** to add further conditions and group together into an expression using the **drop-down list** of Boolean operators a) And or b) Or 

   ![Conditions](/images/expression.png)

   Then add further condition groups using the **Add a conditions group** ![Add conditions button](/images/addconditions.png) button to add and apply the **radio buttons** of Boolean operators a) And or b) Or to tie groups together.

9. Delete conditions by clicking on the Bin/Trash button ![Bin button](/images/binicon.png).

10. Click on the **OK** button to save your changes or click on **Close** to exit the dialog box without saving.

11. Click on **OK** button again for the **Edit widget** dialog box to apply the changes or click on **Close** to exit the dialog box without saving.



### Saving changes ###

Make sure to save any changes you make to your dashboard by clicking on the **Save** button ![Dashboard Save button](/images/dashboard-save-button.jpg) in the dashboard top menu. If you leave the dashboard without saving the changes you have made, the next time you visit the dashboard it won't include any of the changes made to it since the dashboard page was last saved.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Conditions** that can be applied to Tile, List and Chart widgets, find out more about all of the types of **Dashboard widgets** you can add to your Kianda dashboard:

- [Chart widget](/platform/pages/chart/)
- [Filter widget](/platform/pages/filter/)
- [Rich Text widget](/platform/pages/richtext/)
- [Link widget](/platform/pages/link/)
- [List widget](/platform/pages/list/)
- [Tile widget](/platform/pages/tile/)
- [Walkthrough widget](/platform/pages/walkthrough/)
- [Custom dashboard widget]( /platform/pages/custom/)
