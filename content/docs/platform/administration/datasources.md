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

### How to get started

To add a SharePoint data connector, the steps are:

1. To connect to a datasource, select **Administration** from the left-hand side pane and then click **Data sources**.
2. Click on **+ Add new** button and then one of 19 data connectors, for example **SharePoint**.
3. In the case of a SharePoint data connector, fill out the **Site URL** and choose from options like **SharePoint version**, **Scope** as in, if it is a **Site** or **Site Collection** and **Authentication mode**. For example, if you choose **System User Credentials** as an authentication mode, you must provide your SharePoint system username and password.
4. Click on **Test connection** and then **Save**.

Once the data connector is created, this can be used with controls like lists and rules, for example in the image below, a SalesForce data connector called 'Training' has been setup within the Data sources function. Lists within SharePoint can then be linked to list fields in Kianda, by clicking on Data connector in the Edit list dialog box.

![Datasource](/images/edit-list-eg.jpg)



### What's next  ![Idea icon](/images/18.png) ###

To read more about data connectors and how to use them, go to [Connectors](/docs/platform/connectors/).



