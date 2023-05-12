---
title: "Getting started with Kianda processes"
linkTitle: "Process"
typora-root-url: ..\..\..\..\..\static
weight: 3
---

The power of Kianda lies in giving anyone, even those without coding experience, the ability to design a **business application or process** quickly and efficiently, for example, this process could be a Quality Assurance checklist that installation engineers must follow on site using a mobile app or it could be a HR process to allow employees to submit annual leave requests and approve these online. Processes can connect to your data sources like Sharepoint or SalesForce allowing for the flexibility of your applications to grow as your business grows.

Each process can be linked to **dashboards** so you can see at a glance, for example, how many leave requests were submitted, purchase orders approved and so on. And you can customise all of these processes the way you want.

Before you begin, we at Kianda recommend doing some simple planning before you design your process. It could be something as simple as a quick flow chart or a spreadsheet where you quickly log the key components, fields or rules that should be needed in the process. 



## Creating processes ##

1. To start creating your first process, go to the side menu on the left of the screen and click on  **Administration** > **Designer**. 

2. To create processes you can:

   - Use Kianda's pre-defined processes or Apps, see [Using the App Store](#using-the-app-store).

   - Create your own processes from scratch, see [Creating your own processes](#creating-your-own-processes).

   - Import processes that are already created, see [Importing processes](#importing-processes).

3. When you have created your process(es)  go to [Editing processes](#editing-processes) to find out how to start adding forms.

3. You can also export any processes for backup and reuse, see [Exporting processes](#exporting-processes).



### Using the App Store ###

1. You can choose from Kianda's process templates by clicking on the **App Store** button ![App Store button](/images/appstore.png).

2. Choose from **General**, **IT**, **Customer Services**, **Finance**, **Travel**, **Quality** and **Accounting** apps by clicking on the relevant button in the left-hand pane and then select an app from within that category, for example Customer Support Queries.

   ![App Store General Apps](/images/appstoreegs.png) 
   
3. You can click on **Read More** to read about the app and click on **Import Process App** to import the process. 

   ![Customer Support Queries App](/images/supportapp.png) 

4. If the process is an existing process, you can choose to override the existing process by clicking **Yes** or if not, click **No**. Change the Title and Name of the process as needed, for example Customer Queries, and click on **Next**.

   ![Override existing processes](/images/importcustomerprocess.png) 

5. The system will report datasources being imported. Click on **Next**. 

   ![Import business processes](/images/importbusinessprocess_frame.png)

6. Select dashboards to be included by checking the checkbox beside dashboards you want to import. In each case you can decide to override the existing dashboards by clicking on **Yes** or if not **No**. Click on **Next**.

   ![Import dashboards](/images/importcustomerdashboard_frame.png)

7. You will see a summary of what is about to be imported. Click on **Import** to execute the import.

8. Imported processes are available to view and edit from the main process view.

9. When you have created your process go to [Designer](platform/application-designer/designer/) to find out more on how to add and change forms within your process(es).

   


### Creating your own processes

1. To create your own process, click on the **Add new** button ![Add new process button](/images/addnew.png) . Note that if you click on the arrow on the button, you have options to create a **Process**, a **Component** or **Create from datasource**.

   ![Add new process options](/images/newprocessoptions_resized.png)

   - A **Process** is a complete set of forms that encapsulates a business process for example, Purchase Order Approval.

   - A **Component** is a part of a business process, and you can decide your approach and how you want to order and present forms.

   - **Create from datasource** refers to using a particular data source and elements within that datasource tree, for example if you choose Kianda pre-defined processes then when you select **Kianda** you can see all the processes that are already imported into your system as shown on the right in the image below.

     ![Kianda data source](/images/datasourcecreate_frame.png)

      Click on the **OK** button when you are finished to save your work, or click on **Close** to exit the dialog box.

2. The following edit options are available:

   - **Title** - of the process, for example Annual Leave Approval

   - **ID** - this is a unique name for the field

   - **Description** - a description of the process

   - **Group** - a defined group of users for example HR Managers. If you choose 'Create new group', a further field **New group name** will be displayed, where you will enter the new group's name.

   - **Administrators** - choose from a) Users or b) Groups

     These are the users or groups who will act as administrators for the process, for example to edit or delete the process. For example if you click on **Users** and click in the Administrators field you will see a list of all the users who are approved to administrate this process.

     ![Admin users](/images/adminusers_frame.png)

3. Click on the **OK** button when you are finished to save your work, or click on **Close** to exit the dialog box.

3. When you have created your process go to [Designer](platform/form_designer2.md) to find out more on how to add forms to your process(es).

   

### Importing processes

1. If you already have Kianda processes, you can also import these by clicking on the **Import** button ![Import process button](/images/import_frame.png).

2. Click on the **Browse Process App** button ![browse brocess app button](/images/browse-process-app-btn.jpg) to browse for Kianda files. 

3. Select the files you want, for example quarterly-training-request.kianda and click on Open. 

   <img src="/images/importkianda2.png" alt="Importing processes" style="zoom:80%;" />

4. If the process name is an already existing process in your environment, then this new process will override it. However, if the process name does not match any current process, a new process will be created. Change the Title and Name of the process as needed and click on **Next**.

   <img src="/images/overrideprocess2.jpg" alt="Override existing processes" style="zoom:67%;" />

5. The system will report any datasources being imported. Click on **Next**. 

   ![Import business processes](/images/importbusinessprocess.png)

6. Under **Dashboards to be included**, you can view the Title and Name of the dashboards that are present in the Kianda file. If this dashboard already exists in your environment, then including this dashboard in your upload will overwrite it. If this dashboard does not currently exist, then it will create a new dashboard. When finished, click on **Next**.

   ![Import dashboards](/images/importdashboards2.png)

7. Under **Included custom widgets**, you can view the title of the custom widgets that are included within the Kianda file being imported. In this example, a [Custom dashboard widget](/docs/platform/pages/custom/) is included for use within the User Training Dashboard. Click on **Next** to continue.

   ![User Training Dashboard Widget](/images/import-custom-widgets.png)

8. You will see a summary of what is about to be imported. Click on **Import** to execute the import.

   ![Import summary](/images/importsummary2.png)

9. Imported processes are available to view and edit from the main process view.

10. When you have imported your process(es) go to [Designer](/docs/platform/application-designer/designer/) to find out more on how to edit or add forms to your process(es).




## Editing processes

1. When processes are created they are available to view and to edit from the central view panel found within **Administration** > **Designer**.

   ![Process created](/images/firstprocess_resized.png)

   Information related to your processes, is found in this panel, for example who created the process, and when, the version of the process and a description if it exists. 

2. The first version of a process is **0.1** and will increment to 0.2 and so on, each time a process is updated. Once the process is **published** the version changes to **1.0** and increments with each publication. This makes it is easy to keep track of who made changes and when, and to restore an older version if needed. You can also search for processes by typing your keywords into the search bar.

3. At any time you can edit the Title, Description, Group and Administrators of the process by clicking on the **Pen** button ![Pen icon](/images//penicon.png) beside your process of choice.

4. At any time you can delete a process by clicking on the **Bin/Trash** button ![Bin icon](/images/binicon.png) and then click on **Ok** after you have reviewed the process title and you are sure that this is what you want to delete. Click on **Cancel** if you wish to cancel the deletion.

4. Once you have created your process, you are ready to add forms. Go to [Designer](/docs/platform/application-designer/designer/) to find out more on how to add and change forms within your process(es).



## Exporting processes

1. You can export any processes, by clicking on the **Export** button ![Export Process](/images/export_frame.png) and select a process to export from the dropdown list. Click on **Next** when you have selected your desired process.

   ![Export processes](/images/exportprocesses_frame2.png)

2. The system will report what datasources are included. Click on **Next**.

   ![Exporting business processes with datasources](/images/exportanddata_frame.png)

3. Select dashboards to be included by checking the checkbox beside dashboards you want to export. Click on **Next**.

   ![Export business processes](/images/exportingprocesses_frame2.png)

4. Under **Include custom widgets?**, you check the checkbox beside the displayed custom widget(s) to include this custom widget within the exported Kianda file. In this example, a [Custom dashboard widget](/docs/platform/pages/custom/) is included for use within the User Training Dashboard. Click on **Next** to continue.

   ![Custom widget include](/images/include-custom-widgets.png)

5. The final screen displays a confirmation message communicating that the process is now ready for export. Click on the **Export** button ![Export button](/images/export-btn.png) to export the Kianda file.

6. The result is a downloadable file of type .kianda. This can be kept as a backup on a separate system and [imported](/docs/platform/application-designer/process/#importing-processes) into other Kianda instances as needed.

   ![Exported files](/images/kianda-downloadable.png)


### What's next  ![Idea icon](/images/18.png) ###

We have briefly introduced how to create, edit and export processes. To read more about process instances and settings go to the links below: