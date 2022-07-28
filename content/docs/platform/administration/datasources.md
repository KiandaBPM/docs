---
title: "Data sources"
typora-root-url: ..\..\..\..\static
---

The **Data sources** function is available to administrators and those users with the role **Manage datasources**. Data sources is found in the left-hand side pane, under **Administration**. The data sources function allows you to connect your processes to external data sources like SharePoint, Salesforce or SAP. 

Connecting your data sources in this way allows real-time scalability, so as your organisation and data grows, the processes created in Kianda will continue to operate with these data sources, providing sustainable, flexible growth.

Kianda comes with 19 predefined **data connectors** allowing you to connect to these data sources. These are listed below:

- Active Directory
- DocuSign
- Dropbox
- Dynamics CRM
- Email
- File system
- FTP
- GlobalPayments
- Google Drive
- MySQL
- Office 365
- Oracle database
- PowerShell
- Salesforce
- SAP
- SharePoint
- SOAP Service
- SQL Server
- REST Service

If you are a developer and want to connect to a datasource that is not included in the predefined set, you can use SOAP or REST to create your own API for data transfer.

## How to get started

To start viewing existing data sources:

1. To see the datasource management function, select **Administration** from the left-hand side pane and then click **Data sources**.
2. Any existing data sources that have been created for your workspace are shown in the main view under **Datasource management**. 

   ![Existing data connectors](/images/datasource-list.jpg)

   Data sources are listed by: **Name**, **Type and icon**, **Modified** (as in the date the connector was modified), **Modified By** (the person who last made changes) and the **Status**, for example **ready** means the connection has been tested and is working, while **incomplete** means that more details still need to be added. 
3. To **search** for a data source, type in the name or type of data source in the **search box**.

4. To **delete** a data source, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin-shared-process.jpg) beside the name of the datasource. You will receive a popup asking to you to confirm deletion by clicking **OK**, or you can exit the deletion by clicking on **Cancel**.

5. To **see the details** of a data source, click on the **name** of the Data source and from there you are brought to the **Data source details** page:

   ![Data source details example](/images/datasource-details-eg.jpg)

6. The details will vary depending on the data source, but there are some common elements:

   - **Display name** - the name of the data source as it will display in your system. Choose something meaningful, as you will use this name in process design to connect your forms to your data source.
   - **Information about the data source** - this could be a URL, Server name, Client ID, root folder path etc. 
   - **Authentication details** - this could be a username, password, client secret etc.
   - Option to use **Kianda Cloud Connect** - you enable this feature and download a zip file which you can install on your server, allowing the Kianda system to reach your server and get access to data, for example SQL Server, making system integration quick and efficient.
   - **Test connection** - all data source detail pages will allow you to test your connection using this button to ensure data exchange can happen.
   - **Save** - at any time you can save details, even if some parameters need to be completed, allowing you to return to the configuration at any point.
   - **Security** - all data sources can have different levels of security set up, including administrators for the connection, and users of the connection, see [Setting security for data sources](#setting-security-for-data-sources) for more details.
   - **Close** - allows you to exit from the data source details page.




## How to create a new datasource

The following uses **SharePoint as an example** when creating a new datasource. The main steps for any datasource will be similar, that is: click on the **Add new** button, fill out the **datasource details** page, **test the connection**, **save** and **add security**.

1. From the main datasource management view, click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and then one of 19 data connectors that appear, for example **SharePoint**.
2. Fill out fields in the **SharePoint details** screen.

   ![Sharepoint datasources](/images/sharepoint-connector.jpg)

   Choose from the edit options:

   - **Display name** - the name of the data source, for example SharePoint HR

   - **Site URL** - this is the link to your SharePoint data 

   - **SharePoint version** - choose from a) SharePoint Online (also known as SharePoint in Microsoft 365) b) SharePoint 2016 or c) SharePoint 2013

   - **Scope** - choose from a) Site for example a particular SharePoint website or b) Site Collection, a collection of SharePoint sites

   - **Authentication mode** - options are a) SharePoint Online Authorisation and b) System User Credentials

     If you choose a) SharePoint Online Authorisation then click on **Authorize** button ![Authorize button](/images/authorize.png) in this instance you will need SharePoint administration rights

     If you choose b) System User Credentials then fill out your username and password. In this instance you do not need SharePoint administration rights.

4. When you have added SharePoint details, you are ready to test your connection and add security. At the bottom of the **SharePoint details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg)to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the datasource management main view.


Once the data connector is created, this can be used with controls like lists and rules, for example in the image below, a SalesForce data connector called 'Training' has been setup within the Data sources function. Lists within SharePoint can then be linked to list fields in Kianda, by clicking on Data connector in the Edit list dialog box.

![Datasource](/images/edit-list-eg.jpg)



### What's next  ![Idea icon](/images/18.png) ###

To read more about data connectors and how to use them, go to [Data Connectors](/docs/platform/connectors/).



