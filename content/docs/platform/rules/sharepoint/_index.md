---
title: "SharePoint rules"
weight: 9
typora-root-url: ..\..\..\..\..\static
---

**SharePoint** rules is a category of rules within Kianda that are associated with SharePoint specific functionality. These rules are using SharePoint Application Programming Interface (**API**) to perform Create, Read, Update and Delete (**CRUD**) operations within your SharePoint connector. The SharePoint rules are designed to **manage** your SharePoint connector instead of populating it with data. With these rules you can create a site, a list or a group on your SharePoint connector along with adding users to groups, removing them from groups or changing user or group permissions.

Take an example of a **Find a user** rule. Implementing this rule will result in acquiring a **Username** or **User Id** of a particular user which is part of your SharePoint users group. When using SharePoint rules that are managing users, the **Find a user** rule is very useful as rules such as **Add user to a group** or **remove user from a group** require a **User Id** that can be retrieved from the **Find a user** rule.

## Before getting started

In advance of using the SharePoint rules you must have created a SharePoint data connector and establish a connection with your SharePoint site. The data connector is used as part of the SharePoint rules to perform CRUD operations on a site you established a connection with. To learn more about the SharePoint data connector go to [SharePoint connector](/docs/platform/connectors/sharepoint/).

## Getting started with SharePoint rules

If you go to **Administration** > **Designer** and click on a process or create a new process, then click on **Add a rule** the **Sharepoint** rules are found in the left-hand pane when you click on **Sharepoint**.

![Sharepoint rules](/images/sharepoint-rules-all.jpg)

There are 10 **SharePoint** rules as follows:

- **Create a list** - creates a new list in a SharePoint site.	
- **Create a site** - creates a new site on SharePoint, enabling the use of a site template.	
- **Create a group** - creates a new group on SharePoint
- **Find a user** - finds or searches for a user within SharePoint
- **Add a user to a group** - adds a SharePoint user to a SharePoint group. It is important to note the difference between Sharepoint users and Kianda users.  Sharepoint users are users of the Sharepoint system.  Kianda users are users of the Kianda system.
- **Remove a user from a group** - removes a SharePoint user from a SharePoint group
- **Reset an item permission**s - changes the SharePoint permissions for a given list, document or folder.
- **Check in / out an item** - checks in or out a file in SharePoint
- **Get attachments** - reads the attachments from a SharePoint list 	
- **Create anonymous link** - creates anonymous links for a SharePoint held file	



### What's next  ![Idea icon](/images/18.png) ###

We have briefly introduced each of the ten types of **SharePoint rules**. Click on the links below to find out more about each rule in detail. 



​	

​		

​	