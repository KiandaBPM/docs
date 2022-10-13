---
title: "Dropbox"
weight: 3
typora-root-url: ..\..\..\..\static
---

A **Dropbox** data system connector allows you to the Dropbox cloud file system as a data source for your Kianda forms or dashboards. Dropbox is a personal cloud based file system with many subscriptions including team subscriptions. This allows you to store files online and share them with your team or use it as a backup. This means that as your processes are running they will use the information from the cloud file system or depending on the process, update or delete information at the Dropbox cloud file system. 

## When to use

You can use the Dropbox connector when you want a process within your Kianda subscription to have **access** to your Dropbox cloud file directory. You can **extract** files from Dropbox into Kianda by using a **List** field control. Set the datasource of the List field to be your Dropbox connector allowing you to access files from you Dropbox account, to learn more about the List field go to [List control](/docs/platform/controls/input/list/). You can also use the Dropbox data connector within the **Data** set of rules, these rules allow you to perform **Create, Read, Update** and **Delete** (**CRUD**) operations. To learn more about the Data rules, go to [Data rules](/docs/platform/rules/data/).

## Before getting started

In advance of using the Dropbox data connector, you must have an account with Dropbox. The account is used to authorise a connection between your Kianda subscription and your Dropbox account.  

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

4. A Dropbox authentication window will open. Enter your login details to **authenticate** the connection.

5. When you have added the Dropbox details, you are ready to test your connection and add security. At the bottom of the **Dropbox details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

6. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

7. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

8. Click on **Close** to close the details page and return to the data source management main view.

## Dropbox parameters

When you use the **Dropbox** datasource, there are **default parameters** invoked from the files that you can access. For example when you create a **list** filed in a Kianda form and use Dropbox as its datasource, these Dropbox parameters will appear in **Display field**, **Value field** and **Sort by** field in the **Edit field dialog box**, see **Name** for example in the image below:

![File system parameters](/images/dropbox-parameters.jpg)

The Dropbox parameters that appear in those three dropdown fields are:

- **Name** - name of the file including the extension.
- **NameNoExtension** - name of the file without the extension.
- **Path** - displays the full path to the file.
- **Extension** - displays just the extension of the file.
- **Modified** - displays the date and time when the file was last modified.
- **Created** - displays the date and time when the file was created.
- **ParentFolderName** - name of the folder that contains the file.
- **ParentFolderPath** - path of the folder that contains the file.

## What’s next ![Idea icon](/images/18.png)

Your **Dropbox connector** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
