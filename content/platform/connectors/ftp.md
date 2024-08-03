---
title: "FTP"
weight: 7
typora-root-url: ..\..\..\..\static
---



One of the data connectors that you can connect to is **File Transfer Protocol (FTP)**. **FTP** is a standard communication protocol used for the transfer of computer files from one system to another over the internet.

The **FTP** data connector allows you to use an **online** file system as a data source for your Kianda forms or dashboards. This means that as your processes are running they will use the information from the online file system or depending on the process, update or delete information at in the online file system location. Kianda has the ability to **extract** files, **navigate** subfolders and **write** new files into the online directory. Any operation performed using the FTP data connector will directly change files within the online file system.

## When to use

You can use the FTP connector when you want **access** or **modify** data or files within any **folder** in your FTP server. You can perform Create, Read, Update and Delete (**CRUD**) operations on any files within the FTP server that you have access to.

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **FTP** from the list of data sources provided.

3. You will be automatically brought to the **FTP details** page, where you can start setting up the connection. 

   ![File system detail page](/images/ftp-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your FTP connector. This is used to distinguish between different data connectors on your platform.

   - **FTP Server** - the **server name** of the server you want to access or the **IP address** where the server is hosted. When you are running a **local** server on your machine you can use your **own** IP address as the server.

   - **FTP root folder** - name of the root folder that is specified in your server. Note that the root folder that you specify here must be **exactly** the same as on the FTP server. For example If your root folder on the FTP server is `/Files`, you must also specify that the **FTP root folder** is `/Files`. It is possible to successfully connect the FTP connector if you specify a different **FTP root folder** than on the server but you will not be able to access the files properly.

   - **FTP port** - enter the port on which your server listens on. 

   - **Use SSL** - check this box if your FTP server has SSL security.

   - **FTP username** - enter the username you use to connect to your FTP server.

   - **FTP password** - enter the password you use to connect to your FTP server.

   - **Use Kianda Cloud Connect** - by default this option is disabled, the cloud connect is used to **create a connection** between a **locally run FTP server** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/). Check this option if you want to connect to a server that is running on your local machine. When **Use Kianda Cloud Connect** is enabled, a **Connectors** option appears.

     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. This option is used to select the PC **connection** that **runs** the **local FTP server** that you want to connect to.

       ![Test connection for REST Service](/images/ftp-connectors.jpg)

4. When you have added File system details, you are ready to test your connection and add security. At the bottom of the **File system details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.



## FTP parameters

When you use a **FTP** datasource, there are **default parameters** invoked from the files. For example when you create a **list** in a Kianda form using a FTP datasource, these FTP parameters will appear in **Display field**, **Value field** and **Sort by** field in the **Edit field dialog box**, see **Name** for example in the image below.

![File system parameters](/images/file-system-parameters.jpg)

The FTP parameters that appear in those three dropdown fields are:

- **Name** - name of the file including the extension.
- **NameNoExtension** - name of the file without the extension.
- **Path** - displays the full path to the file.
- **Extension** - displays just the extension of the file.
- **Modified** - displays the date and time when the file was last modified.
- **Created** - displays the date and time when the file was created.
- **ParentFolderName** - name of the folder that contains the file.
- **ParentFolderPath** - path of the folder that contains the file.

### What’s next ![Idea icon](/images/18.png)

Your **FTP service** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
