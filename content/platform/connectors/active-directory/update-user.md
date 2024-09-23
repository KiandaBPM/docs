---
title: "Active Directory Connector - Update user"
weight: 1
typora-root-url: ..\..\..\..\static
description: "Kianda Active Directory Connector - update users"
---

One of the data connectors within Kianda that you can connect to is **Active Directory** (**AD**) also known as **Active Directory Domain Services** (**AD DS**). AD is a logical and hierarchical structured data store of objects which are mostly accounts. Accounts such as **Users, Computers, Groups** and other objects such as **Printers** or **Group Policy Objects** (GPO). For example, you can store information about user accounts within an AD such as **Name, Password, Job title** and **Permissions**. 

## When to use

Having an AD connector will allow you to access information that is stored there within your Kianda subscription. You will be able to use **User** related AD functions which will allow you to use the connector when manipulating users within your AD. For example creating users, updating their permissions, moving them between groups or removing them from the directory. To use the AD functions, you can use the [Data](/platform/rules/data/) rules that are predefined within Kianda.

## Before you get started

Before you can create a connection with your Active Directory and your Kianda subscription, you need to download Kianda Cloud Connect. **Kianda Cloud Connect** is a piece of software that **establishes a connection** between your **local machine** and your **Kianda subscription**. This lightweight app will sit on your PC or server where files reside that you need to use in Kianda processes. It allows the data to **travel** from your local machine to the Kianda Cloud Connect service, and then the Kianda Cloud Connect service sends data to your Kianda subscription. This data transfer works both ways depending on what operation you are performing for example **Deleting** a file or **Creating** one. 

To learn more about how to download and create a connection between your Kianda subscription and Kianda Cloud Connect go to [Kianda Cloud Connect](/platform/connectors/kianda-cloud-connect/).

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
   - **Use Kianda Cloud Connect** - by default this option is enabled, the cloud connect is used to **create a connection** between the **Active Directory connector** and **Kianda** itself. To learn more about **Kianda Cloud Connect** and how to create a connection between Kianda and your PC, go to [Kianda Cloud Connect](/platform/connectors/kianda-cloud-connect/). 
     - **Connectors** - displays all available connector PC's that have a **connection established** with your **Kianda** subscription. This option is used to select the PC **connection** that is running the Active Directory server.
   - **Status** - represents the current status of the connection.
     - **incomplete** - means that the details of the connector were not fully completed.
     - **test failed** - means that the details of the connector are incorrect and the connection has failed.
     - **ready** - means that the connector has successfully connected and its ready to be used.

4. When you have added PowerShell details, you are ready to test your connection and add security. At the bottom of the **PowerShell Connector** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.

## Active Directory functions

Active Directory functions are **Users** related and to use them you have to use the [Data](/platform/rules/data/) rules that are predefined within Kianda. The functions that are available are:

![Active Directory list of functions](/images/ad-functions.jpg)

- **FindUsers** - allows you to look for a user within your directory by defining a user attribute as a means of searching for them.
- **IsMemberOf** - allows you to see if a user is a member of a group. You need to specify both a user and a group.
- **CreateUser** - allows you to create a user within your directory. You need to specify a **username**, **first name, last name, email and password** to create a user successfully.
- **UpdateUser** - allows you to update user attributes. You need to specify what user to update by providing their **sAMAccountName** and **distinguishedName** (DN).
- **AddUserToGroup** - allows you to add a user to a group by providing the group name and both the **distinguishedName** and **sAMAccountName** of the user.
- **RemoveUserFromGroup** - allows you to remove a user from a group by providing the group name and both the **distinguishedName** and **sAMAccountName** of the user.
- **Enable User** - allows you to enable or disable a user by providing the enable parameter and both the **distinguishedName** and **sAMAccountName** of the user. The enable parameter is either **true** or **false**.
- **MoveUser** - allows you to move a user to a specific path in your directory by providing the destination path and both the **distinguishedName** and **sAMAccountName** of the user.

Lets take the **CreateUser** function as an example to show how these functions work. As mentioned earlier, we need to use the Data rules to use these functions and for this example we use the **Create item** rule which is available from the Data rules. 

1. When creating a user in Active Directory, there are some required properties that we need to provide. Those properties are a **username**, **givenName** (first name), **surname** (last name), **email** and **password**. There are also extra properties that can be provided by expanding a properties tab within the function:

   ![Active Directory list of functions](/images/ad-create-user.jpg)

2. We need to create at least five fields that will be used to provide a value as the required properties. We will use a [text box field](/platform/controls/input/textbox/) for each one:

   ![Required fields for the required properties](/images/ad-fields.jpg)

3. Use the [create item](/platform/rules/data/create-item/) rule to use the function. We need to map the text box fields to the appropriate properties as follow:

   ![Mapping the required fields to create item rule](/images/ad-create-user-rule.jpg)

You can apply the create item rule to a button, for example, the submit button. This will result in a user being created in your AD whenever the submit button will be clicked.



### What’s next ![Idea icon](/images/18.png)

Your **Active Directory connector** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/platform/application-designer/designer/).
