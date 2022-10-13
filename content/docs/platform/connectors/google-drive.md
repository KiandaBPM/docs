---
title: "Google drive"
weight: 9
typora-root-url: ..\..\..\..\static
---

A **Google Drive** data system connector allows you to have access to the Google Drive cloud file system as a data source for your Kianda forms or dashboards. Google Drive is a personal cloud based file system with many subscriptions including team subscriptions. This allows you to store files online and share them with your team or use it as a backup. This means that as your processes are running they will use the information from the cloud file system or depending on the process, update or delete information at the Google Drive cloud file system. 

## When to use

You can use the Google Drive connector when you want a process within your Kianda subscription to have **access** to your Google Drive cloud file directory. You can **extract** files from Google Drive into Kianda by using a **List** field control. Set the datasource of the List field to be your Google Drive connector allowing you to access files from you Google Drive account, to learn more about the List field go to [List control](/docs/platform/controls/input/list/). You can also use the Google Drive data connector within the **Data** set of rules, these rules allow you to perform **Create, Read, Update** and **Delete** (**CRUD**) operations. To learn more about the Data rules, go to [Data rules](/docs/platform/rules/data/).

## Before getting started

In advance of using the Google Drive data connector, you must have an account with Google. The account is used to authorise a connection between your Kianda subscription and your Google Drive account.  

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **Google Drive** from the list of data sources provided.

3. You will be automatically brought to the **Google Drive data connector** page, where you can start setting up the connection. 

   ![Google Drive details page](/images/gd-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your Google Drive connector. The display name is used to identify your connector.

4. Click on the **Authorize** button.

5. A Google Drive authentication window will open. Select the account you want to use when **authenticating** the connection.

   ![Google drive authentication window](/images/gd-sign-in.jpg)

6. Google Drives security will block the access to Kianda when trying to authenticate and you will be presented with similar window as shown below. In the window, click on **Advanced**.

   ![Google drive authentication window](/images/gd-verify-screen.jpg)

7. In the advanced options, click on **Go to kianda.com(unsafe)**. 

   ![Google drive authentication window](/images/gd-advanced.jpg)

8. This will now bring you to a web page in which you will be able to allow the connection. Click on **Allow**.

   ![Google drive authentication window](/images/gd-apply.jpg)

9. When you have successfully authenticated your Google Drive account, the system will test your connection automatically. If that has not been done, at the bottom of the **Google Drive details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and you should receive a notification saying **Connection test succeeded**.

10. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

11. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

12. Click on **Close** to close the details page and return to the data source management main view.

## Google Drive parameters

When you use the **Google Drive** datasource, there are **default parameters** invoked from the files that you can access. For example when you create a **list** filed in a Kianda form and use Google Drive as its datasource, these Google Drive parameters will appear in **Display field**, **Value field** and **Sort by** field in the **Edit field dialog box**, see **Name** for example in the image below:

![File system parameters](/images/gd-parameters.jpg)

The Google Drive parameters that appear in those three dropdown fields are:

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
