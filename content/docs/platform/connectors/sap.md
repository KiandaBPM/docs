---
title: "SAP connector"
weight: 16
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is a **SAP** datasource. SAP is an enterprise resource planning software which allows you centralises data between all areas of your business and manage them in one SAP system. 

Data in the SAP system are represented with schemas and tables. Each **schema** represents an **area** of your business and **tables** represent **data** within that business area. Using SAP as your datasource, you can perform Create, Read, Update and Delete (**CRUD**) operations on **tables** within your SAP system using the [**Data rules**](/docs/platform/rules/data/) provided in the Kianda platform. When using the SAP connector, keep in mind that you can perform CRUD operations on data within a **tables** of the system, but you **cannot** perform CRUD operations on **tables themselves**, this mean are unable to **create** or **delete** tables. 

SAP connector also has the ability to use Business Application Programming Interface (**BAPI**) functions through Kianda. This allows you to perform particular business tasks in your SAP system by calling BAPI functions using the Data rules provided.

## When to use

You can use the SAP connector when you want **access** or **modify** data within a **table** in your SAP system. You can connect the SAP connector to a **List** field as its datasource, meaning you can access information from a table and display the information that is stored in the table. For example if your SAP system contains a table called **HR** and within, tables such as **Employees**, **Departments** and **Jobs**. You will be able to connect the list field to one of those tables giving you CRUD access to its data. 

## Before getting started

When establishing a connection using SAP data connector, you are creating a connection with a **Schema** from you SAP system. Before continuing make sure that your SAP system has a **schema** you can connect to. 

You also need to create a Kianda Cloud Connect connection with your device which will be used in the settings when filling out the SAP connector settings. To learn how to create a connection with you device using Kianda Cloud Connect, visit [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/).

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **SAP** from the list of datasources provided.

3. Fill out fields in the **SAP system details** screen.

   ![SQL Server details page](/images/sap-details.jpg)

   Choose from the edit options:

   - **Application server** -
   - **Instance number** -
   - **System ID** - 
   - **Client** - 
   - **Username** - enter a username used to connect to your SAP system.
   - **Password** - enter in the password used to connect to your SAP system.
   - **SAP BAPIs** - enter in BAPI functions that you want access too when performing BAPI functionalities on your SAP system.
   - **SAP Tables** - enter in SAP tables you want to have access too when performing CRUD operations from your SAP system.
   - **Use Kianda Cloud Connect** - by default this option is disabled, the cloud connect is used to **create a connection** between your **local device** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/). This option must be enabled to successfully establish a connection between a SAP system and Kianda.
     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. 
   - **Status** - represents the current status of the connection.
     - **incomplete** - means that the details of the connector were not fully completed
     - **test failed** - means that the details of the connector are incorrect and the connection has failed.
     - **ready** - means that the connector has successfully connected and its ready to be used.

4. When you have added the SAP system details, you are ready to test your connection and add security. At the bottom of the **SAP system details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.
