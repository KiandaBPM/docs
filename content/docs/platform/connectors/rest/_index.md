---
title: "REST Web Service"
linkTitle: "REST Web Service"
typora-root-url: ..\..\..\..\..\static
---

One of the datasources available in Kianda is a connector to a **REST API**. Kianda has the ability to perform **GET, POST, PUT** and **DELETE** operations if they are supported by the webservice. The REST API datasource can support multiple REST methods, all of which can be called independently. Data from the webservice can be pulled into your Kianda workspace and manipulated, or data from Kianda can be pushed to the webservice to be used by other systems.

## When to use 

You can create a REST API datasource when you want your Kianda processes and forms to have access to a REST API. 

## How to get started

A REST API data connector can be configured by users with the role **Administrator** or **Manage datasources**. These users can access the datasource management function, found under **Administration** > **Data sources**.

1. In the left-hand side menu, go to **Administration** > **Data sources.** 

2. In the main view you will see any existing data sources that have been created. From this view, you can click on the **name** of a data source to see details or **delete** a data source by clicking on the **Bin/Trash** button ![Bin/trash button](/images/binicon.png).

   ![Data sources main view](/images/datasource-main-view.jpg)

3. To create a new data source, click on the **Add new** in the main view. A range of data source connectors will appear.

   ![Data source list](/images/datasource-range.jpg)

4. To add a REST Service data source click on **REST Service**.

5. The **REST Service details** screen opens. 

![REST Service details](/images/rest-service-details.jpg)

6. Fill in the first set of fields:

   - **Display name –** This is the name of the data source. Use an appropriate name, as this will be used within your process(es). 

   - **Rest server base URL –** This is the base URL of the REST API. Ensure there are no trailing characters, for example https://api.mywebsite.com   

   - **Enable Certificate Authentication –** By default this option is set to **No**. By Selecting **Yes** this will display two new fields:
     
     - **Certificate (.pfx) –** This is a file field which you can use to upload your authentication certificate.
     
     - **Certificate password –** Enter the password of the certificate here so the Kianda platform will be able to use it.
     

![Enable Certificate Authentication](/images/rest-cert-authentication.jpg)


7. Under **REST Methods**, a list of current REST Methods that have been created in Kianda will appear, listed by **Name**, **Path** and **HTTP Method**. 

   ![Existing REST Methods](/images/rest-methods-existing.jpg)

   You can edit details of the existing REST Methods by clicking on the **Edit/Pen** button ![Edit REST Methods](/images/edit-method.jpg)or delete a REST Method by clicking on the **Bin/Trash** button ![Delete REST Method](/images/delete-method.jpg).

8. To add a new **REST Method** to Kianda click on the **+Add REST Method** button. The **REST Method editor** dialog box appears.

   ![REST Method editor](/images/rest-method-editor.jpg)

   Fill out the fields: 

   - **Display Name –** this is the name you want to attribute to the REST Method.
   - **HTTP Method –** this is the HTTP Method of the REST Method. 
   - **Url Path –** this is the rest of the URL that will be concatenated with the **Rest server base URL**. For example /rest/GetUserDetails
   - **Request headers –** Request headers can be manually added here that need to be sent as part of the request, for example, Authorization. These values can be hard coded or passed into the **Request header** from the **process.** Click on **Add header** to add a request header.
   - **Request body –** This section is for the **Request body** that will be used during the request. These values can be hard coded or passed into the **Request body** from the **process.**
   - **Content type –** Here you can define the **Content type** of the body. The options are **JSON** and **Form Data**.
   - **Response headers –** Here you can define any response headers you wish to capture in the response that you want to use in Kianda. Click on **Add header** to add a response header.
   - **Response body –** Here you can define the response body that the request will receive. Include or remove fields as needed.

   When you are finished editing the dialog box click on **OK** to save your changes, or click on **Close** at any time to exit.

9. Under the REST Methods on the REST Service details page, there is a check box to **Use Kianda Cloud Connect?** If you check this checkbox it gives you an option to Download Kianda Cloud Connect. Click on **Download Kianda Cloud Connect** to download a zip file.

   ![Kianda Cloud Connect](/images/kianda-cloud-connect.jpg)

10. When you have added REST Service details, you are ready to test your connection and add security. At the bottom of the **REST Service details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

    ![Connection test succeeded message](/images/connection-test-succeeded.jpg)

    In the event of an error, you will receive a message that relates to the error, for example a null or incorrect URL as shown in the example below:

    ![REST test connection error](/images/rest-connection-error.jpg)

    

11. Click on **Save** ![Save connection button](/images/save-connection.jpg)to save the connection and you will receive a notification saying **Details saved successfully**.

12. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

 

### What's next  ![Idea icon](/images/18.png) ###

Your **REST Service** is now set up and ready to be used in your **processes**. Check out the following article on how to implement a **REST Service** in order to [refresh an Access token](/docs/platform/connectors/rest/rest-access-token/).

