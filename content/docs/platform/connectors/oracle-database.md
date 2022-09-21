---
title: "Oracle database"
weight: 13
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is an **Oracle** datasource. Oracle is a relational database management system (**RDBMS**) used to manage structured collections of data. This data can consist of a collection of data from a simple to do list to a more complex organisation network. The Oracle database is a structured format consisting of rows and columns. Using the Oracle connector as your datasource, you can perform any **Create**, **Read**, **Update** and **Delete** (**CRUD**) operations using the **Data** rules provided in the Kianda platform, to learn more about data rules go to [Data rules](/docs/platform/rules/data/). Using the Oracle connector, you have access to all tables within your database from your server, keep in mind that you can perform CRUD operations on the data from a **table** of the database, but you **cannot** create or delete **tables themselves**.

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **Oracle** from the list of datasources provided.

3. Fill out fields in the **Oracle details** screen.

   ![SQL Server details page](/images/oracle-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your Oracle server connector. This is used to distinguish between different data connectors on your platform.
   - **Data Source** - this field is used to provide the name of your host that you want to connect to. When accessing a public Oracle server, the host name must follow a URL style format, for example `https:/{host}:{port}`.  When connecting to a server that is run on your local machine, you can use `localhost` as well as the **Kianda Cloud Connect** .
   - **Schema** - the name of the database from your server that you want to connect to.
   - **User** - username used to log into the server. 
   - **Password** - password used to log into the server.
   - **Use Kianda Cloud Connect** - by default this option is disabled, the cloud connect is used to **create a connection** between a **locally run Oracle server** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/). Check this option if you want to connect to a server that is running on your local machine. When **Use Kianda Cloud Connect** is enabled, a **Connectors** option appears.
     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. This option is used to select the PC **connection** that **runs** the **local Oracle server** that you want to connect to.
   - **Status** - represents the current status of the connection.
     - **incomplete** - means that the details of the connector were not fully completed
     - **test failed** - means that the details of the connector are incorrect and the connection has failed.
     - **ready** - means that the connector has successfully connected and its ready to be used.

4. When you have added the Oracle details, you are ready to test your connection and add security. At the bottom of the **Oracle details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.

## What’s next ![Idea icon](/images/18.png)

Your **SQL Server connector** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
