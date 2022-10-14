---
title: "Active directory"
weight: 1
typora-root-url: ..\..\..\..\static
---

One of the data connectors within Kianda that you can connect to is **Active Directory** (**AD**) also known as **Active Directory Domain Services** (**AD DS**). AD is a logical and hierarchical structured data store of objects which are mostly accounts. Accounts such as **Users, Computers, Groups** and other objects such as **Printers** or **Group Policy Objects** (GPO). You can store information about user accounts within AD such as **Name, Password, Job title** and **Permissions**. Having an AD connector will allow you to access information defined from your AD from your Kianda subscription. 



## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **Active Directory** from the list of data sources provided.

3. You will be automatically brought to the **Active Directory details** page, where you can start setting up the connection. 

   ![File system detail page](/images/ad-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your PowerShell connector. The display name is used to identify your connector.
   - **Directory path** - enter in the path to the directory. The path must be LDAP or GC.
   - **AD User** - enter in the domain and user that you want to connect to. To specify the domain and user correctly use the following format: `<domain>/<username>`
   - **Password** - enter in the password used to login for the desired user.
   - **Use Kianda Cloud Connect** - by default this option is enabled, the cloud connect is used to **create a connection** between the **Active Directory connector** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/). 
     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. This option is used to select the PC **connection** that is running the Active Director server.
   - **Status** - represents the current status of the connection.
     - **incomplete** - means that the details of the connector were not fully completed.
     - **test failed** - means that the details of the connector are incorrect and the connection has failed.
     - **ready** - means that the connector has successfully connected and its ready to be used.

4. When you have added PowerShell details, you are ready to test your connection and add security. At the bottom of the **PowerShell Connector** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.

### What’s next ![Idea icon](/images/18.png)

Your **Active Directory connector** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
