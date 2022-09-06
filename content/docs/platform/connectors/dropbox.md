---
title: "Dropbox"
weight: 4
typora-root-url: ..\..\..\..\static
---

A **Dropbox** data system connector allows you to the Dropbox cloud file system as a data source for your Kianda forms or dashboards. Dropbox is a personal cloud based file system with many subscriptions including team subscriptions. This allows you to store files online and share them with your team or use it as a backup. This means that as your processes are running they will use the information from the cloud file system or depending on the process, update or delete information at the Dropbox cloud file system. 

## When to use

You can use the Dropbox connector when you want a process within your Kianda subscription to have **access** to your Dropbox cloud file directory. You can **extract** files from Dropbox into Kianda by using the **List** field by connecting your Dropbox connector to the List fields datasource, to learn more about the List field go to [List control](/docs/platform/controls/input/list/). You can also use the Dropbox data connector within the **Data** set of rules, these rules allow you to perform **Create, Read, Update ** and **Delete** (**CRUD**) operations. To learn more about the Data rules, go to [Data rules](/docs/platform/rules/data/).

## Before getting started



## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **Dropbox** from the list of data sources provided.

3. You will be automatically brought to the **Dropbox data connector** page, where you can start setting up the connection. 

   ![File system detail page](/images/dropbox.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your Dropbox connector. This is used to distinguish between different data connectors on your platform.
   - **Authorize** - allows you to **authorize** the connection with your Dropbox account and Kianda. When you click this button, a Dropbox window will open allowing you to log in into your Dropbox to **authenticate** your account.
   - **Status** - represents the current status of the connection.
     - **incomplete** - means that the details of the connector were not fully completed
     - **test failed** - means that the details of the connector are incorrect and the connection has failed.
     - **ready** - means that the connector has successfully connected and its ready to be used.

4. When you have added the MySQL server details, you are ready to test your connection and add security. At the bottom of the **MySQL Server details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.

## What’s next ![Idea icon](/images/18.png)

Your **SQL Server connector** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
