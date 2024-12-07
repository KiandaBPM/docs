---
title: "Rule widget development"
weight: 9
typora-root-url: ..\..\..\static
---

There are currently 60 predefined rules available to use in forms and processes, across 10 categories:

- [Workflow](/platform/rules/workflow/)
- [Communications](/platform/rules/communications/)
- [Data](/platform/rules/data/)
- [Users](/platform/rules/users/)
- [File management](/platform/rules/files/)
- [Tables](/platform/rules/tables/)
- [Dates](/platform/rules/dates/)
- [Form actions](/platform/rules/form-actions/)
- [SharePoint](/platform/rules/sharepoint/)

Click on the relevant links to find out more about each area. However if customised rules have been created, they are available to those with the role **Administration** and **Design business process** to use in process and form design in Kianda **Designer**. Customised rules are available under the **Custom rules** category under **Add a rule**.

Custom rules are created by **Administrators** or **Developers** who have coding experience to use Kianda's low-code development feature, Kianda **Developer**. 

## How to get started

If you are an experienced developer with an **Administrator** or **Developer** role, see [Users & Groups](/platform/administration/users/), you can create a new rule widget within Kianda by doing the following: 

1. Navigate to **Administration** in the left-hand side menu, and click on **Developer**. This will bring you to the **Developer resources** page. Rule widgets are of type 'Rule' in this list.

   ***Widget view***

   ![Widget view](/images/developer-view.jpg)

2. Click on **New widget** to create a new rule widget.

3. Fill out the **Edit widget** dialog box - that is **Title**, **Unique Id** (which is autofilled from the title), **Widget Icon**, where you can select from hundreds of icons, and then **Widget type**. 

   ![Edit widget](/images/rule-widget.jpg)

4. Click on **OK** when complete.

5. When you create a custom field widget, the **Widget UI** and **Widget Code** tabs are displayed. These two screenshots show the default code for 'Widget UI' and 'Widget Code'.

      The 'Widget UI' defines the HTML, handlers, expressions and more.

      ***Rule widget UI***
      ![Widget UI](/images/rule-widget-ui.jpg)

      The 'Widget Code' defines the logic and functions.

      ***Rule widget code***

      ![Widget code](/images/rule-widget-code.jpg)

6. Widgets created are visible in the main widget view. From here, you can edit a widget by clicking on the **Edit** button  ![Pen button](/images/bluepen.png) (Pen icon), delete a widget by clicking on the **Bin/Trash** button ![Bin button](/images/binicon.png) and restore earlier versions of a widget by clicking on the **Version restore** button ![Restore](/images/bluerestore.png).

7. Custom rule widgets you create will be available for use in Kianda Designer by going to **Side menu** > **Administration** > **Designer** > **click on an existing process** or **Add new** to add a new process, then click on **Add a rule** to see the **Custom** rule category added under **Rules**.

      ![Custom fields](/images/custom-rule-category.jpg)


