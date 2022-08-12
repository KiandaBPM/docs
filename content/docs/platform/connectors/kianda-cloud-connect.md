---
title: "Kianda Cloud Connect"
weight: 9
typora-root-url: ..\..\..\..\static
---

**Kianda Cloud Connect** is a piece of software that **establishes a connection** between your **local machine** and your **Kianda subscription**. This lightweight app will sit on your PC or server where files reside that you need to use in Kianda processes. It allows the data to **travel** from your local machine to the Kianda Cloud Connect service, and then the Kianda Cloud Connect service sends data to your Kianda subscription. This data transfer works both ways depending on what operation you are performing for example **Deleting** a file or **Creating** one.

Kianda Cloud Connect authenticates with a user created in Kianda, see [User management](/docs/platform/administration/users/) for more details on users and send information to and from Kianda using port 80. See details below on how to set up the connection.

## Downloading Kianda Cloud Connect

You can download **Kianda Cloud Connect** software in any details page of data source that might use it, for example in a **File system** data connector:

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **File system** from the list of data sources provided.

3. You will be automatically brought to the **File system details** page, where you can click on **Download Kianda Cloud Connect** at the bottom of the screen.

   ![File system detail page](/images/file-system-download-KCCjpg.jpg)

4. Clicking on Download Kianda Cloud Connect will automatically download a zipped folder. Extract the contents of the folder and open the **Kianda Cloud Connect** Windows Installer Package. You will need administrative privileges on your device in order to install the application.

   ![Cloud Connect package](/images/cloud-connector-msi.jpg)

5. Click on the Windows Installer Package **CloudConnect.msi** file.

6. Security on the device may prevent you from installing the app. If the below window appears click on the **More Info** link and then click **Run Anyway**.

   ![Windows Defender message](/images/windows-defender.jpg)

7. In the **Welcome to Kianda Cloud Connect Setup Wizard**, follow the installation wizard to install the application. Click **Next >**.

8. In the **Select Installation Folder** window, pick a folder where you want to install the software. Click **Next>**.

9. In the **Confirm Installation** window, click **Next>**.

10. Click on **Yes** in the administrator dialog box to give Kianda Cloud Connect access to your PC.

11. In the **Installation Complete** window click on **Close**.

12. Once installed the application will be available on your desktop

## Connecting your PC to Kianda Cloud Connect

To **establish a connection** between your **Kianda subscription** and your l**ocal machine**, you need to login using a **Kianda** **username**(email) and **password**. Note that the **user** you are trying to establish a connection with, **must be an administrator** and needs to be a **unique username**(email). The username you want to establish the connection **cannot** be used in **more than one Kianda subscriptions** as Kianda Cloud Connect will not be able to tell which subscription you want to connect to.

![Kianda Cloud Connect](/images/kianda-cloud-connect-app.jpg)

1. To establish a connection fill out the following:
   - **Machine Identity** - automatically sets the identity using the name of your local PC. This field **can not** be changed.
   - **Kianda Username** - type in the username/email of the user from your **Kianda subscription** you want to establish a connection with. This username must be **unique across all Kianda subscriptions** and must be an **administrator**. For example you **can not establish a connection** with a connector@domain.com if this email is used in more than one subscription, as Kianda Cloud Connect will not be able to determine which subscription to make a connection with.
   - **Kianda Password** - type in the password used to login, for the user in the **Kianda Username** field.
2. Click **login** to establish a connection.
3. If the connection succeeded, in the **Cloud Connection** dialog box, click **OK** to complete the connection.

When the connection has been established successfully, Kianda Cloud Connect will automatically connect to your subscription when the PC is turned on therefore you do not need to login when the PC is turned on.

All established connections will be visible in the **Kianda Cloud Connect Connector** section in any of the datasource connectors that use it, for example **File system** or **SQL Server**.

![Kianda Cloud Connect Connectors section](/images/kianda-cloud-connect-connector.jpg)
