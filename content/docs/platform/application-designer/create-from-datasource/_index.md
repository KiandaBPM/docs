---
title: "Create from Datasource"
typora-root-url: ..\..\..\..\..\static
weight: 5

---

## Introduction

The **Create from Datasource** feature allows you to create a process using a [Datasource](/docs/platform/connectors/) of your choice where the datasource elements will populate your Kianda form. Note that the datasource is already created within your platform within the **Administration** > **Data sources** section. 

Using this feature serves as a way of swiftly populating your process with the relevant fields from your datasource lists so that you can increase design productivity from the beginning.

See below for an example of SharePoint columns being populated into the Kianda process as fields:

![SharePoint list as datasource](/images/datasource-sharepoint-process.png)



## How to get started

### Creating a process from a datasource

1. From the home page, navigate to **Administrator > Designer.**

2. When you are in the **Process designer** screen navigate your mouse to the ![Idea icon](/images/addnew-component.jpg) button and click the small **down arrow.**

   ![Idea icon](/images/component-addnew.jpg)

3. In the dropdown menu click on **Create from datasource**. 

   ![Idea icon](/images/create-from-datasource-new.png)

4. In the **Select datasource** dialog box, fill in the following details, note that these data sources must be precreated using the [Datasource](/docs/platform/connectors/) function under Administration:

   ![Idea icon](/images/select-datasource-create-from-datasource2.png)

   - **Replace list form with Kianda forms?** - select between *Yes* or *No*, where the default option is Yes. 

   - **Datasources** - select your datasource of choice that you would like to create the process with. The window displays data sources that are already created and connected within your Kianda platform. For more information, see [Datasources](/docs/platform/connectors/). In this example we will choose a [SharePoint](/docs/platform/connectors/sharepoint/) datasource.
   - **Datasource tree** - once a datasource has been selected, select which elements in that datasource that you want to use in your process, for example a list or a folder. You can drill down into the tree by clicking on the main datasource node at the top and select the relevant element, and you can search the tree by using the search bar in the top right. In this example we will choose **Accounts** as shown in the image above.

5. Click on **OK** when you are finished filling out the details. Alternatively you can click **Close** to exit the creation dialog.

   **Note**: When creating a new process from a datasource, ensure that there is not already **a process with the name** of the datasource list as this may cause conflicts in the unique names of the processes.

Your process will then be opened and it will detect all the fields of your selected datasource node and populate them into a form of the same name.

![Idea icon](/images/create-from-datasource-process.png)

**Note**: If you create new list columns within your chosen datasource, these options will not be reflected within the design unless you repeat the creation process.

### What's next  ![Idea icon](/images/18.png) ###

- To read more about field control visit [Controls](/docs/platform/application-designer/process/).
- To read more about rules visit [Rules](/docs/platform/rules/).
- To read more about datasources visit [Datasources](/docs/platform/connectors/).
