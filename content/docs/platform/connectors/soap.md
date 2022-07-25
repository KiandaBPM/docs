---
title: "SOAP"
weight: 6
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is a connector to Simple Object Access Protocol (SOAP) messaging services. Kianda has the ability to execute a command within the service whatever the function may be.

## When to use

You will want to create a SOAP Service datasource when you want Kianda to have access to your SOAP Service operations and execute them. 



## How to get started ##

A SOAP Service data connector can be configured by users with the role **Administrator** or **Manage datasources**. These users can access the datasource management function, found under **Administration** > **Data sources**.

1. From the Kianda home page, click on **Administration** > **Data sources**.

   ![Opening data sources from Administration](/images/open-data-sources.jpg)

2. In the main view you will see any existing data sources that have been created. From this view, you can click on the **name** of a data source to see details or **delete** a data source by clicking on the **Bin/Trash** button ![Bin/trash button](/images/binicon.png).

3. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and a range of data source connectors will appear.

   ![Data source list](/images/datasource-range.jpg)

4. Click on **SOAP Service**.

5. Fill out the details in the **SOAP Service details** page:

   ![SOAP service detais](/images/soap-detail.jpg)

   - **Display name** - this is the name of the data source. Use an appropriate name, as this will be used within your process(es). 

   - **Service URL** - this will be the URL of the service.

   - **Service WSDL URL** - this will be the URL of the service including the WSDL

   - Authentication Mode - there are three options available:

     - Anonymous

     - Basic

     - Windows

       Selecting Basic or Windows exposes the options below. Enter the credentials as needed.

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg)

**Status:** when the datasource has not been configured, the status will be ‘incomplete’. When set up it will be ‘ready’.

 

**Next Steps**

The SOAP Service is now ready to be used. Check out the below on how to design processes.

https://docs.kianda.com/docs/platform/application-designe
