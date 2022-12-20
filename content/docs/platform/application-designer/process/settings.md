---
title: "Process settings"
weight: "2"
linkTitle: "Process settings"
typora-root-url: ..\..\..\..\..\static

---

 ## Introduction ## 

There are a number of properties and settings that you can implement to your process and forms. 

***Settings and properties***

![Process and form properties](/images/settingsprocess.png)

Settings are available from the right-hand pane and give you the ability to:

- [Import processes](/docs/how-to/reuse-or-clone-process-elements/)

- View [Version history](/docs/platform/application-designer/designer/version-history/)

- Change [Process settings](#process-settings) ![Settings button](/images/settings.png).

- Edit form information by selecting a form and clicking on the **Pen** button ![Pen icon](/images/penicon.png).

- Change a field to another field by clicking on  **Change field**

- Create a duplicate form by selecting a form, clicking on the **Clone** button ![Clone button](/images/clone.png) and then click on **Ok**. A version called 'Form Name Copy' is created and available to edit on the canvas. The **Clone** button can also be used to clone form elements like controls or buttons. 

- Delete a form by selecting a form, clicking on the **Bin/Trash** button ![Bin icon](/images/binicon.png) and then click on **Ok** after you have reviewed the form title and you are sure this is what you want to delete. Click on **Cancel** if you wish to cancel the deletion.

- View and edit [Form properties](/docs/platform/application-designer/process/properties/) and [rules](/docs/platform/rules/).

  


### Process settings

You can edit process settings by clicking on the **Settings** button ![Settings button](/images/settings.png) in the right-hand pane. ![Process settings](/images/process-settings-tabs.jpg) 

Within process settings, there are four tabs to navigate to:



1. **General**:

   ![Process settings general tab](/images/process-settings-general.jpg)

   * **Process ID Settings** - choose from a) Default or b) Custom and use a combination of [ProcessName]-[UniqueNumber]-[FieldName]

   * **On load rules execution mode** - options are a) Always b) When in edit mode or c) When open new. The default setting is **Always**.

   *  **Enable form assignment notification?** - options are a) Yes or b) No

   * **Prevent closing instance with unsaved data?** - options are a) Yes or b) No

   * **Enable process navigator?** - options are a) Yes or b) No. If you select Yes, the Process navigator tab will appear in the right hand panel, allowing you to quickly snap to and view desired form controls and rules.

      ![Process navigator panel](/images/process-navigator-panel.jpg)

     ![Process navigator selection](/images/process-navigator-selection.jpg)

     

     

2. **Security**:

   ![Process settings security tab](/images/process-settings-security.jpg)

   * **Enable process security** - if you tick the checkbox, can allow certain Users, Groups or Partners to have certain privileges related to the radio button options to create, assign and view as shown below. The default setting is **Security users can create, assign to can update, everyone else can view**.

   * **Instance delete settings** - options are a) Any user can delete b) Creator can delete c) "Current form owner" can delete d) "Security users" can delete e) "Admins only" can delete. The default setting is **Creator can delete**.

     

3. **Tabs**:

   ![Process settings tabs tab](/images/process-settings-tabs2.jpg) 

   * **Hide form tabs** - gives you the ability to hide form tabs, options are a) Yes or b) No 

   * **Hide left nav** - gives you the ability to hide navigation elements, options are a) Yes or b) No 

   * **Enable mobile navigation?** - options are a) Yes or b) No

   * **Selected tab theme** - choose from Navy, Green, Blue, Amber, Red or White as a colour when a form is selected.

   * **Completed tab theme** - choose from Navy, Green, Blue, Amber, Red or White as a colour when a form is completed.

     

4. **Anonymous Form**:

   ![Link for external users](/images/process-settings-anonymous2.jpg)

   * **Enable anonymous sharing of forms** - gives you the ability to share forms with people outside your organisation for example a feedback form or GDPR subject access request. Options are a) Yes or b) No. If you click on **Yes** there are various options that you can add:

     * Click on **New link** to generate a new anonymous form link to share with users and click on **Edit** to change the link. 
     * **Message to display after anonymous submission** - to add a display message.

     - **Hide form topbar** - checkbox to hide the form topbar.
     - **Force authenticated user to log out** - options are a) Yes or b) No to force the authenticated user to log out once the form is submitted. If **No** is selected, you can choose to **Redirect authenticated user to**:
       - **Process URL**
       - **Workspace Home** 

When you are finished editing the process settings:

1. Click on the **OK** button ![OK button](/images/ok.png) to save your changes or click on **Close** to exit the dialog box without saving.
2. Click on the **Exit** button ![Exit process](/images/exitdesign.png) to go back to the process list, the Save button ![Save button](/images/save.png) to save your work, the **Preview** button ![Preview](/images/preview.png) to preview what you have created and the **Publish** button ![Publish button](/images/publish.png) to publish your work.



### What's next  ![Idea icon](/images/18.png) ###

- To learn more about rules and controls that can be applied to forms go to [**Controls**](/docs/platform/controls/) and [**Rules**](/docs/platform/rules/). 
- To learn more about properties, go to [**Properties**](/docs/platform/application-designer/process/properties/).
