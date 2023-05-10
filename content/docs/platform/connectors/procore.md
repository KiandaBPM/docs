---
title: "Procore Connector"
weight: 15
typora-root-url: ..\..\..\..\static
toc_hide: true
hide_summary: true
---

A data connector available within Kianda is the **Procore connector**. Procore provide a widely used construction management software to streamline project communication, documentation and analysis. Procore also has project management and financial features, as well as tender management and builder information modelling (BIM) designers. Kianda allows you to connect to Procore as a data connector, providing an easy and seamless way of integrating all your Procore data gathered from these features into your Kianda process. For more information, see [Procore Developer Documentation](https://developers.procore.com/documentation/introduction).



## Before you get started

In advance of using the Procore data connector, you must have an account with Procore which is used to obtain information for a successful connection.



## When to use

You can use the Procore connector when you want a process within your Kianda subscription to have **access** to your Procore data. You can perform **Create, Read, Update** and **Delete** (**CRUD**) operations on your Procore data once the connection has been established and configured.



## How to get started ![Add new data connector button](/images/procore-logo.png) 

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **Procore** from the list of data sources provided.

3. You will be automatically brought to the **Procore details** page, where you can start setting up the connection. 

   ![Procore connection details](/images/procore-connector-details.png)

   Choose from the edit options:

   - **Datasource Name** - type in the name for your Procore connector. This is used to distinguish between different data connectors on your platform.
   
   - **Procore Company Id** - type in the Company ID that is assigned to your Procore account. When you enter your Procore Company ID, the **Authorize** button <img src="/images/authorize.jpg" alt="authorize button" style="zoom:150%;" /> will appear. This allows you to **authorize** the connection with your Procore account and Kianda. When you click this button, a Procore window will open allowing you to log in into your Procore to **authenticate** your account.
   
     <img src="/images/procore-log-in.png" alt="Procore log in window" style="zoom:50%;" />
   
   - **Procore Environment** - select one of the three radio buttons to choose your desired [Procore Environment](https://developers.procore.com/documentation/development-environments). The options are: 
   
     - **Live** - live feed of Procore data.
     - **Monthly Sandbox** - refreshed with current production data on a regularly scheduled basis once each month. Data you create, update, or manipulate within a Monthly Sandbox environment will never affect the original production data and will exist solely in the context of that environment.
     - **Developer Sandbox** - automatically generated for third-party developers in their Developer Portal account and includes seed project data that can be used for testing purposes. The Development Sandbox environment does not refresh with production data at any time.
   
   - **Use Kianda Cloud Connect** - by default this option is disabled, the cloud connect is used to **create a connection** between your **local device** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/). When **Use Kianda Cloud Connect** is enabled, a **Connectors** option appears.
   
     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. This option is used to select the PC **connection** that **runs** the **Procore account** that you want to connect to.
   
   - **Status** - represents the current status of the connection.
     - **incomplete** - means that the details of the connector were not fully completed.
     - **test failed** - means that the details of the connector are incorrect and the connection has failed.
     - **ready** - means that the connector has successfully connected and its ready to be used.
   
   - When you have added the Procore account details, you are ready to test your connection and add security. At the bottom of the **Procore datasource details** page, click on the **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.
   
   - Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.
   
   - Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.
   
   - Click on **Close** to close the details page and return to the data source management main view.



## Procore parameters

When you use the **Procore** datasource, there are **default parameters** invoked from the files that you can access. For example when you create a **list** filed in a Kianda form and use Procore as its datasource, these Procore parameters will appear in **Display field**, **Value field** and **Sort by** field in the **Edit field dialog box**, see **Name** for example in the image below:

**PICTURE HERE - NEED PROCORE CONNECTION TO BE ESTABLISHED TO CAPTURE THIS IMAGE**



## What's next  ![Idea icon](/images/18.png) ##

Your **Procore service** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
