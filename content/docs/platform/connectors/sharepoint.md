---
title: "SharePoint connector"
weight: 16
typora-root-url: ..\..\..\..\static
---

A SharePoint data connector allows you to use SharePoint data sources as part of your Kianda forms or dashboards. This means that as your processes are running they will use the information at the data source or depending on the process, update information at a data source location. 



## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **SharePoint** from the list of datasources provided.

3. Fill out fields in the **SharePoint details** screen.

   ![Sharepoint datasources](/images/sharepoint-connector.jpg)

   Choose from the edit options:

   - **Display name** - the name of the data source, for example SharePoint HR

   - **Site URL** - this is the link to your SharePoint data 

   - **SharePoint version** - choose from a) SharePoint Online (also known as SharePoint in Microsoft 365) b) SharePoint 2016 or c) SharePoint 2013

   - **Scope** - choose from a) Site for example a particular SharePoint website or b) Site Collection, a collection of SharePoint sites

   - **Authentication mode** - options are a) SharePoint Online Authorisation and b) System User Credentials

     If you choose a) SharePoint Online Authorisation then click on **Authorize** button ![Authorize button](/images/authorize.png) in this instance you will need SharePoint administration rights

     If you choose b) System User Credentials then fill out your username and password. In this instance you do not need SharePoint administration rights.

4. When you have added SharePoint details, you are ready to test your connection and add security. At the bottom of the **SharePoint details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg)to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the datasource management main view.

   

## SharePoint parameters

When you use a SharePoint datasource, there are **default parameters** invoked from SharePoint. For example when you create a **list** in a Kianda form using a SharePoint datasource, these SharePoint parameters will appear in **Display field**, **Value field** and **Sort by** field in the **Edit list dialog box**, see **Title** for example in the image below.

![SharePoint parameters](/images/edit-list-params.jpg)

The SharePoint parameters that appear in those three dropdown fields are:

- **ID**
- **Content Type**
- **Title**
- **Modified**
- **Created**
- **Created By**
- **Modified By**
- **Version**
- **Server Relative URL**
- **Item Child Count**
- **Folder Child Count**
- **Label setting**
- **Retention label**
- **Retention label Applied**
- **Label applied by**
- **App created By**
- **App modified By**
- **Compliance Asset ID**
- **Telephone Code**

All custom columns in the datasource will also appear at the **bottom** of this list. For example in a SharePoint list, a column named **Location** will also be listed in the Display, Value and Sort by fields.

![SharePoint list example](/images/sharepoint-list-field.jpg)

This customised name 'Location' appears in the dropdown list, for example the **Display field** for the list.

![Customised column name example in SharePoint](/images/location-sharepoint-field.jpg)

​     

### What's next  ![Idea icon](/images/18.png) ###

Your **SharePoint service** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).

To see how SharePoint parameters are used in a form, for example with a **list** field, go to [List control](//docs/platform/controls/input/list/#how-to-get-started). 