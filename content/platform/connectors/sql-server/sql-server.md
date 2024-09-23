---
title: "SQL Server connector"
weight: 20
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is a Structured Query Language **(SQL) Server** datasource. Using the SQL server as your datasource, you can perform any Create, Read, Update and Delete (**CRUD**) operations using the **Data** rules provided in the Kianda platform, to learn more about data rules go to [Data rules](/platform/rules/data/). Using the SQL server connector, you have access to all tables within your database from your server. Keep in mind that you can perform CRUD operations on data within a **table** of the database, but you **cannot** create or delete **tables themselves**.

## When to use

You can use the SQL Server connector when you want **access**, **modify** or **retrieve** data within a **table** in your SQL server. When connecting a SQL server datasource to a [List field](/platform/controls/input/list/), you can only connect and display information from a **table**, not the information of the **server** itself. For example if your SQL server contains **tables** such as **Employees**, **Purchases** and **Standing Orders**, you will be able to connect the list field to **only one** of those tables giving you CRUD access.

## Before getting started

When establishing a connection using the SQL data connector, you are creating a connection with a **Database** from a server, not the **server** itself. Before continuing make sure that your SQL server has a **database** you can connect to.

In order to successfully establish this connection with your server, a user is needed to access the server by logging in. This user that you use to connect to the server must be a **sysadmin**.

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **SQL Server** from the list of datasources provided.

3. Fill out fields in the **SQL Server details** screen.

   ![SQL Server details page](/images/sql-server-details.jpg)

   Choose from the edit options:

   - **Display name** - type in a name for your SQL server connector. This is used to distinguish between different data connectors on your platform.
   - **Server** - the name of the server you want to access or the IP address where the server is hosted. When you are running a local server on your machine you can use `localhost` as the server name.
   - **Database** - the name of the database from your server that you want to connect to.
   - **Trusted connection** - enable windows trusted connection. Only available when using with Kianda cloud connector, enabling this will automatically enable the **Use Kianda Cloud Connect** option. This option will use the connector service credentials to connect to the destination datasource. Having this option enabled will automatically hide the **User** and **Password** fields.
   - **User** - username used to log into the server. Note that in order to log into a server with a username and password, the user must be a **system admin** for the connection to be successful.
   - **Password** - password used to log into the server.
   - **Use Kianda Cloud Connect** - by default this option is disabled, the cloud connect is used to **create a connection** between a **locally run SQL server** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/platform/connectors/kianda-cloud-connect/). Check this option if you want to connect to a server that is running on your local machine. When **Use Kianda Cloud Connect** is enabled, a **Connectors** option appears.
     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. This option is used to select the PC **connection** that **runs** the **local SQL server** that you want to connect to.

4. When you have added the SQL server details, you are ready to test your connection and add security. At the bottom of the **SQL Server details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.



## Connecting to a local server

Here we will go step by step on how to create a connection between your locally run SQL Server and your Kianda subscription. Follow the steps below to create this connection:

![Test connection for REST Service](/images/sql-server-example.jpg)

1. Connect to a SQL server using `localhost` as the name of the server.
2. Open the SQL details page by following steps 1 and 2 from [How to get started](/platform/connectors/sql-server/#how-to-get-started).
3. Choose a Display name.
4. In the **Server** text box type in `localhost`.
5. In the **Database** text box type in the name of your database you want to connect from your server. For this example we will connect to a **GreenITR** database from our server. 
6. Enable the **Trusted connection** checkbox.
7. Enable the **Use Kianda Cloud Connect** checkbox.
8. In the **Connectors** radio checklist, select the PC that you are running the local server on. For this example we are using **PC31**. To establish a connection between your Kianda subscription and your PC go to [Kianda Cloud Connect](/platform/connectors/kianda-cloud-connect/).
9. Click on **Test connection**.
10. A notification **Connection test succeeded** shows up. Now you are ready to use the SQL connector that is run on your local machine.

## SQL Server parameters

When you use a **SQL Server** datasource, unlike some of the other data connectors in Kianda, SQL Server does not have **default** parameters. When you connect a SQL server as your datasource, you can choose which **table** you want to use when performing CRUD operations. For example when connecting a SQL datasource to a **List** field and selecting a table you want to use, the parameters will depend on what **columns** are present in the **table**. Take GreenITR database from the [Connecting to a local server](/platform/connectors/sql-server/#connecting-to-a-local-server) example. We have an **Employee** table which we select when connecting a datasource to a **List** field, to learn how to a datasource to a list field go to [List control](/platform/controls/input/list/), see image below:

![Connecting employee table to list field](/images/sql-server-employee.jpg)

The list of parameters displayed in the the **Display field**, **Value field** and **Sort by** field will match the columns that we have in the **Employee** table, see image below:

![columns in a table](/images/sql-server-columns.jpg)

### What’s next ![Idea icon](/images/18.png)

Your **SQL Server connector** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/platform/application-designer/designer/).
