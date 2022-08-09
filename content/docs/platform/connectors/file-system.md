---
title: "File system"
weight: 6
typora-root-url: ..\..\..\..\static
---

## Introduction

A File System data connector allows you to use your local file system as a data sources for your Kianda forms or dashboards. This means that as your processes are running they will use the information from the local file system or depending on the process, update or delete information at in the local file system location. Any Create, Read, Update and Delete (CRUD) operations performed in Kianda, will be reflected automatically and in real-time in your local system.



## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **File system** from the list of data sources provided.

3. You will be automatically brought to the **File system details** page, where you can start setting up the connection. 

   ![File system detail page](/images/file-system-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your file sytem connector. This is used to distinguish between different data connectors on your platform.
   - **Root folder path** - type in manually the file path to the folder of your connector. The connector will be able to access data only in this folder and folders within.
   - **File search pattern** - select the extension you want the connector to display. For example typing in `*.txt` will only output the .txt files within the folder path, it will ignore all other path endings and will not display them. To set pattern you need to type in `*` followed by `.extenstion` for example `*.txt` , `*.docx` or `*.pdf`
   - **Search options** - it only allows you to search the files of the top directory that is set in the **Root folder path** or all other files of other directories within. For example selecting if **Top Directory Only** is selected, you will be able to see only the files that are in **Root folder path** while ignoring folders. If the **All Directories** is selected, you will be able to see files that are in **Root folder path** and all files from within each folder.
   - **Use Kianda Cloud Connect** - by default this option is enabled and cannot be changed, the cloud connect is needed to create a connection between the local file system and Kianda itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to 
   - **Connectors** - displays all available connector PC's that have a connection established with your Kianda website. You must choose the correct PC connection which contains the folder specified in the **Root folder path**, otherwise the connection will fail.

4. When you have added File system details, you are ready to test your connection and add security. At the bottom of the **File system details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg)to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.



## Connecting Kianda Cloud Connect to your PC

Kianda Cloud Connect is a piece of software that establishes a connection between your local machine and your Kianda subscription. It allows the data to travel from your local machine to the Kianda Cloud Connect service, and then the Kianda Cloud Connect service sends data to your Kianda subscription. 

### Downloading Kianda Cloud Connect

You can download **Kianda Cloud Connect** software in any details page of data source that might use it, for example in a **File system** data connector:

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **File system** from the list of data sources provided.

3. You will be automatically brought to the **File system details** page, where you can click on **Download Kianda Cloud Connect** at the bottom of the screen.

   ![File system detail page](/images/file-system-download-KCCjpg.jpg)

4. **CloudConnect.zip** file should download onto your PC. Extract the files from the zip folder.

5. Run the CloudConnect.msi file.

6. In the **Welcome to Kianda Cloud Connect Setup Wizard**, click **Next >**.

7. In the **Select Installation Folder** window, pick a folder where you want to install the software. Click **Next>**.

8. In the **Confirm Installation** window, click **Next>**.

9. Click on **Yes** in the administrator dialog box to give Kianda Cloud Connect access to your PC.

10. In the Installation Complete window click on **Close**.

