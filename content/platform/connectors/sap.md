---
title: "SAP connector"
weight: 17
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is a **SAP** datasource. SAP is an enterprise resource planning software which allows you centralises data between all areas of your business and manage them in one SAP system. 

Data in the SAP system are represented with schemas and tables. Each **schema** represents an **area** of your business and **tables** represent **data** within that business area. Using SAP as your datasource, you can perform Create, Read, Update and Delete (**CRUD**) operations on **tables** within your SAP system using the [**Data rules**](/docs/platform/rules/data/) provided in the Kianda platform. When using the SAP connector, keep in mind that you can perform CRUD operations on data within a **tables** of the system, but you **cannot** perform CRUD operations on **tables themselves**, this mean are unable to **create** or **delete** tables. 

SAP connector also has the ability to use Business Application Programming Interface (**BAPI**) functions through Kianda. This allows you to perform particular business tasks in your SAP system by calling BAPI functions using the Data rules provided.

## When to use

You can use the SAP connector when you want **access** or **modify** data within a standard SAP or custom **table** in your SAP system. You can connect the SAP connector to a **List** field as its datasource, meaning you can access information from a table and display the information that is stored in the table. Take a standard SAP table **MARA** as an example, using this table you can display information on your Kianda forms using the data within  the MARA table. You can also display information of your custom made tables within your SAP system.

## Before getting started

You need to create a Kianda Cloud Connect connection with your device which will be used in the settings when filling out the SAP connector settings. To learn how to create a connection with you device using Kianda Cloud Connect, visit [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/).

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **SAP** from the list of datasources provided.

3. Fill out fields in the **SAP system details** screen.

   ![SAP Details page](/images/sap-details.jpg)

   Choose from the edit options:

   - **Application server** - enter in the IP address that your SAP system is run on.

   - **Instance number** - enter in the Instance number that you want to connect to from your SAP server.

   - **System ID** - enter in the ID of your SAP system. A system ID has three characters.

   - **Client** - enter in the Client your want to connect to from your SAP system.

   - **Username** - enter a username used to connect to your SAP system.

   - **Password** - enter in the password used to connect to your SAP system.

   - **SAP BAPIs** - enter in BAPI functions that you want access too when performing BAPI functionalities on your SAP system. Each BAPI must be on a separate line with no spaces, see image below:

     ![SAP BAPIs](/images/sap-bapi.jpg)

   - **SAP Tables** - enter in SAP tables you want to have access to when performing CRUD operations from your SAP system. Each table must be on a separate line with no spaces, see image below:

     ![SAP tables](/images/sap-tables.jpg)

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

## SAP Table parameters

When you use a **SAP** datasource, unlike some of the other data connectors in Kianda, SAP does not have **default** parameters. When you connect a SAP connector as your datasource, you can choose which **Table** or **BAPI** you want to use when performing CRUD operations. For example when connecting a SQL datasource to a **List** field and selecting a table you want to use, the parameters will depend on what **data** are present in the **tables**. Take standard SAP Table **MARA** as an example. We have an **Employee** table which we select when connecting a datasource to a **List** field, to learn how to a datasource to a list field go to [List control](/docs/platform/controls/input/list/), see image below:

![Connecting MARA table to list field](/images/sap-mara.jpg)

The list of parameters displayed in the the **Display field**, **Value field** and **Sort by** field will match the columns that we have in the **Employee** table, see image below:

![columns in a table](/images/sap-mara-list-field.jpg)

## SAP BAPI functions

In order to use **BAPI functions** from your SAP system **effectively**, the **[Data rules](/docs/platform/rules/data/)** within Kianda can be used. Data rules allow you to **send** data as well as **receive** it. For example if your BAPI function needs data when calling it, you can use any of the Data rules for example **[Create item rule](/docs/platform/rules/data/create-item/)** to send data using the **input mapping** section or when receiving data you can use the **on success mapping**. 

Take a BAPI function which retrieves a list from your SAP system as an example. You can use the on success mapping to store the list in a Kianda field. If for example this BAPI function takes an argument where you want to specify how many items from the list it retrieves, you can input that information in to the input mapping section of the data rules. To learn more about on success mapping go to [On Success Mapping](/docs/platform/rules/general/success-error-mapping/#on-success-mapping).

### What’s next ![Idea icon](/images/18.png)

Your **SAP system connector** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
