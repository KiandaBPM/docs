---
title: "Office 365"
weight: 10
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is a connector to Office 365. Kianda has the ability to read users’ profiles, extract data, update users and groups and enable Single Sign-On (SSO). The Office 365 datasource can be used for example to automatically import users using a scheduled task within Kianda or with individual Kianda processes to update the configuration of users and groups within Office 365.

## When to use

If you have an Office 365 subscription, you can create an Office 365 data connector so that Kianda can access data and manipulate data at that data source.

## How to get started ##

An Office 365data connector can be configured by users with the role **Administrator** or **Manage datasources**. These users can access the datasource management function, found under **Administration** > **Data sources**.

1. From the Kianda home page, click on **Administration** > **Data sources**.

   ![Opening data sources from Administration](/images/open-data-sources.jpg)

2. In the main view you will see any existing data sources that have been created. From this view, you can click on the **name** of a data source to see details or **delete** a data source by clicking on the **Bin/Trash** button ![Bin/trash button](/images/binicon.png).

3. To create a new data source, click on the **Add new** in the main view. A range of data source connectors will appear.

   ![Data source list](/images/datasource-range.jpg)

4. Click on **Office 365**.

5. The **Office 365 data connector** screen opens.

   ![Office365 data connector](/images/office365-data-connector.jpg)

6. Fill in the first set of fields:

      - **Display name –** this is the name of the data source. Use an appropriate name, as this will be used within your process(es). 
      - **Read all users' full profiles –** by default, this is enabled and cannot be disabled. This allows Kianda processes to read all user profiles that exist in Office 365.
      - **Read and write users & groups** - by checking this option it will allow Kianda the rights to read users and group information and update information.
      - **Enable Azure OpenID Connect Single-Sign-On** - checking this checkbox enables a user to sign into Kianda using their Office 365 login. For more details see the [SSO page](/docs/security/sso/).

7. When you have added Office 365 details, you are ready to test your connection and add security. At the bottom of the **Office 365 data connector** page, click on **Test connection** button ![Test connection for Office 365](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

      In the event of an error, you will receive a message that relates to the error.

   8. Click on **Save** ![Save connection button](/images/save-connection.jpg)to save the connection and you will receive a notification saying **Details saved successfully**.

   9. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.





## Office 365 parameters ##

When you use an Office 365 datasource, there are **default options** that can be passed as parameters, for example when using conditions with Office 365 data connectors. These are:

- **User List**
- **Group List**
- **Find Users**
- **Find Groups**
- **Create Group**
- **Add User to Group**
- **Remove User From Group**
- **Licence Plan List**
- **Assign Licence to User**
- **Remove Licence from User**
