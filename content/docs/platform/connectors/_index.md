---
title: "Data connectors"
linkTitle: "Data connectors"
weight: 6
typora-root-url: ..\..\..\..\static
---

The **Data sources** function is found under **Administration** in the left-hand side menu, and provides an easy way to create connections to ERP, CRM and IT systems. These connections allow you to combine multiple sources of data in one place and from there Kianda processes can use and update the data to creative effective workflows. 

## Predefined data connectors ##

Connecting to data in Kianda is a breeze. You can quickly connect to a data source, for example data in Salesforce, and use this data in Kianda forms and dashboards. The connection is called a **data connector** and Kianda comes with a predefined set of data connectors, these include:

- [Active Directory](active-directory/)
- [DocuSign](docusign/)
- [Dropbox](dropbox/)
- [Email](email/)
- [File system](file-system/) 
- [FTP](ftp/) 
- [Google Drive](google-drive/) 
- [MySQL](mysql/) 
- [Office 365](office-365/) 
- [Oracle](oracle-database/) 
- [Powershell](powershell/) 
- [REST Service](/docs/platform/connectors/rest/)
- [Salesforce](Salesforce/)
- [SAP](sap/)
- [SharePoint](sharepoint/)
- [SQL Server](sql-server/) 
- [Web services](webservices/) 

Click on each of the links above to find out more about each data connector. 

If you have a data source that is not on the list above, you can use SOAP or REST to easily connect to your data source, go to [SOAP](/docs/platform/connectors/soap) or [REST](https://docs.kianda.com/docs/platform/connectors/rest/) for more information.

## Viewing existing data sources ##

Only those with the role **Administrator** or **Manage data sources** have access to the **Datasource management** function. To view any existing data sources:

1. Go to **Administration** > **Data sources** in the left-hand side menu. 

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

   

## Creating a datasource

The video below demonstrates how to create a datasource for SharePoint. The procedure shown is similar for other data connectors. Click on the links in [Predefined data connectors](#predefined-data-connectors) to read more on how to connect to different data sources.

**Connecting to SharePoint Data (On-premises or Online) example**

<video width="100%" style="width:100%" controls>
    <source src="/videos/SharePoint connection.mp4">
    Your browser does not support the video tag.
    </source>
</video>




### Kianda Cloud Connect

Kianda Cloud Connect (KCC) is available with the following data sources, allowing you to streamline data system integration:

- Active Directory
- Email
- File System
- FTP
- MySQL
- Oracle
- PowerShell
- REST
- SAP
- SharePoint
- SQL Server
- SOAP

You can enable KCC when you **add a new** data source from the main by datasource management page:

1. Fill out details for your data source in the **data source details** page.
2. Check the checkbox beside **Kianda Cloud Connect**.
3. A link appears to **Download Kianda Cloud Connect**. Click on this link to download the software.
4. Click on the **setup file** in the zip package and step through the wizard to install Kianda Cloud Connect.



### Setting security for data sources ###

All data sources can have security added at different levels, for example at a role level and even database query level.

To enable security for datasources:

1. From the left-hand side menu, go to **Administration** > **Data sources**.

2. Click on an existing data source **name** or click on **Add new** to create a new data source.

3. In the data source details screen, click on the **Security** button.

4. The **Security settings** dialog box opens. 

   ![Security settings for data sources](/images/security-settings-datasource.jpg)

5. Fill out the details:

   - **Connection administrators** - click on the dropdown list to choose from **Users** and/or **Groups** who can edit the connection settings. If left blank any user with the role **Administrator** can edit the connection. See [Users and groups](/docs/platform/administration/users/) for more details on how to add users and groups to the workspace.
   - **Connection users** - click on the dropdown list to choose from **Users** and/or **Groups** who are allowed to query data using this connection. If left blank any user can query data using the datasource.
   - **Enable B2B ** - if you check the checkbox, this allows B2B external users to query the connection. The **Enable partner default query parameters** checkbox appears.

6. Check/Uncheck **Enable partner default query parameters**. If you check the checkbox, you can define default query parameters that are applied to any partner originated query. Parameters defined here take precedence over any design time queries. Click on **Add mapping** to choose a query type and table/operation as follows:

   - **Query type** - choose from **Create, Read, Update, Delete** (CRUD). These CRUD operations allow you to create, read, update and delete records within your datasource.

   - **Table/Operation** - click on **Select a table** to select a resource within the data connector. Click on **OK** when you are finished editing, or **Close** at any time to exit the dialog box.

   - **Query parameters** - when a datasource resource is chosen, for example a SharePoint list called 'Countries' below, then you will have an option to set conditions for filtering data. 

     ![Query parameters](/images/query-parameters-security.jpg)

     Click on **Filter conditions** to open an **Edit conditions** dialog box and from there click on **Add a conditions group**.

7. If you choose to set conditions using the steps above, then in the **Edit conditions** dialog box, you can set conditions based on data source parameters, operators and form fields.

   - The parameter on the left comes from the **data source**, for example for SharePoint, there are 18 possible values listed in [SharePoint parameters](/docs/platform/connectors/sharepoint/#sharepoint-parameters). See [Data sources](/docs/platform/connectors/) for information about other data connectors.

   ![Edit conditions dialog box in Security settings](/images/edit-conditions.jpg)

   - Within this dialog box you can also use different operators, for example **Equals** as shown above. See [Conditions](/docs/platform/rules/general/add-conditions/) for more details on using conditions in Kianda. 

   - The right-most field relates to the B2B Portal and B2B User. There are standard options listed below:

     - **Main Contact Name –** the first name and last name of the Partner
     - **Main Contact Email –** the email of the Partner
     - **Partner Company Name –** the Partner organisation of the Partner  
     - **Partner Current User Name –** the user within the B2B Portal that is accessing the datasource
     - **Partner Current User Email –** the user's email within the B2B Portal that is accessing the datasource

     ![B2B form parameters](/images/b2b-parameters.jpg)

   - When you have added conditions click on **OK**, or click on **Close** at any time to exit the dialog box.

8. When you are finished editing the security settings dialog box, click on **OK**, or click on **Close** at any time to exit the dialog box.


### What's next  ![Idea icon](/images/18.png) ###

We have introduced the data sources management function within **Administration**. Now let's look at each of the data connector types in more detail: