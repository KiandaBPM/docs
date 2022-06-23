---
title: "REST Web Service"
linkTitle: "REST Web Service"
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is a connector to a **REST API**. Kianda has the ability to perform **GET, POST, PUT** and **DELETE** operation if they are supported by the webservice. The REST API datasource can support multiple REST methods, all of which can be called independently. Data from the webservice can be pulled into Kianda and manipulated or data from Kianda can be pushed to the webservice to be used by other systems.

## When to use 

You can create a REST API datasource when you want your Kianda processes and forms to have access to a REST API. 

## How to get started

A REST API data connector can be configured by users with the role **Administrator** or **Manage datasources**. These users can access the function, found under **Administration** > **Data sources**.

1.  In the left-hand side menu, go to **Administration** > **Data sources.** 

2. In the main view you will see any existing data connectors that have been created. From this view, uou can click on the **name** of a data connector to see details or **delete** a data connector by clicking on the **Bin/Trash** button. 

   ![Data sources main view](/images/datasource-main-view.jpg)

3. Click on the **Add new** In the dialog box select the **REST Service** option, the below screen will open.

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

Fill in the fields above to set up the **datasource**

·     **Display name –** This is the name of the datasourcce. Give it an adequate name as it will be used with your Process.

·     **Rest server base URL –** This is the base URL of the REST API. Ensure there are no trailing characters, for example https://api.mywebsite.com

·     **Enable Certificate Authentication –** By default this option is set to **No**. By Selecting **Yes** this will display two new fields

o  **Certificate (.pfx) –** This is a file field which you can use to upload your certificate

o  **Certificate password –** Enter the password of the certificate here so Kianda will be able to use it.

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)

·     **Rest Methods –** Is a list of the current **REST Methods** that have been created in Kianda. To add a new **REST Method** to Kianda click on the **+Add REST Method**. The dialog box will appear.

o  **Display Name –** The name you want to attribute to the REST Method

o  **HTTP Method –** The HTTP Method of the REST Method. 

o  **Url Path –** This is the rest of the URL that will be concatenated with the **Rest server base URL**. For example, /rest/GetUserDetails

o  **Request headers –** Request headers can be manually added here that need to be sent as part of the request. For example, Authorization. These values can be hard coded or passed into the **Request header** from the **Process.**

o  **Request body –** This section is for the **Request body** that will be used during the request. These values can be hard coded or passed into the **Request body** from the **Process.**

o  **Content type –** Here you can define the **Content type** of the body. The options are JSON and Form Data

o  **Response headers –** Here you can define any response headers you wish to capture in the response that you want to use in Kianda

o  **Response body –** Here you can define the response body that the request will receive. Include or remove fields as needed.

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg)

·     **Buttons**

o  **Test connection –** By clicking this button you verify that the **RESR server base URL** can be reached by Kianda.

o  **Save –** Saves the creation or changes made to the **REST Service**

o  **Security –** Define who can control, use and the level of access your **B2B Portals** have to the **REST Service.** See the **Data Access** page for more details. (https://docs.kianda.com/docs/platform/b2b-portals/data-access/)

o  **Close –** Close the **REST Service.** All changes will not be saved.

 

**Next Steps**

Your **REST Service** is now set up and ready to be used in your **Processes**. Check out the following article on how to implement a **REST Service** in order to refresh an Access token.


