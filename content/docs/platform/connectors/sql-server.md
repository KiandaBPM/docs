---
title: "SQL Server connector"
weight: 18
typora-root-url: ..\..\..\..\static
---



## SQL Server parameters

One of the datasources available in Kianda is a Structured Query Language **(SQL) Server** datasource. Using the SQL server as your datasource, you can perform any Create, Read, Update and Delete (**CRUD**) operations using the **Data** rules provided in the Kianda platform, to learn more about data rules go to [Data rules](/docs/platform/rules/data/). Using the SQK server connector, you have access to all tables within your server but keep in mind that you can perform CRUD operations within a **table** of the server, but you **cannot** create or delete **tables themselves**.

## When to use

You can use the SQL Server connector when you want **access** or **modify** data within any **table** in your SQL server. When connecting a SQL server datasource to a field, you can only connect and display information of a **table** from your server, not the  information of the **server** itself. For example if your SQL server contains tables such as **Employees**, **Purchases** and **Standing Orders**, you will be able to connect the list field to **only one** of those tables giving you CRUD access.

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **SQL Server** from the list of datasources provided.

3. Fill out fields in the **SQL Server details** screen.

   ![SQL Server details page](/images/sql-server-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your SQL server connector. This is used to distinguish between different data connectors on your platform.
   - **Server** - the name of the server you want to access or the IP address where the server is hosted. When you are running a local server on your machine you can use `localhost` as the server name.
   - **Database** - the name of the database from your server that you want to connect to.
   - **User** - username used to log into the server. Note that in order to log into a server with a username and password, the user must be a **system admin** for the connection to be successful.
   - **Password** - password used to log into the server.
   - **Trusted connection** - enable windows trusted connection. Only available when using with Kianda cloud connector, enabling this will automatically enable the **Use Kianda Cloud Connect** option. Will use the connector service credentials to connect to the destination datasource.
   - **Use Kianda Cloud Connect** - by default this option is disabled, the cloud connect is used to **create a connection** between a **locally run SQL server** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/). Check this option if you want to connect to a server that is running on your local machine. When **Use Kianda Cloud Connect** is enabled, a **Connectors** option appears.
     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. This option is used to select the PC connection that runs the local SQL server that you want to connect to.

4. When you have added the SQL server details, you are ready to test your connection and add security. At the bottom of the **SQL Server details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.









 
