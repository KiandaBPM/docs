---
title: "REST Service and Access Token refresh"
linkTitle: "REST Service and Access Token refresh"
typora-root-url: ..\..\..\..\..\static
toc_hide: true
hide_summary: true
---

## Introduction

When creating a **REST Service datasource** that uses OAuth for authentication, you may want to create a 'refresh functionality' within Kianda. This is achieved by creating a **process** and scheduling the process to run before the Access Token expires.

## How to get started

### Create a datasource

First you will need to create the **datasource** to connect to the application, for example, creating a **REST Service** with **two REST Methods**. The method titled **Get/Refresh Auth Token** will be used to refresh the Access Token with the scheduled task. For more information on how to create **REST Services** go to the [REST Service page](docs/platform/connectors/rest/).

![Sample REST service](/images/sample-rest-service.gif)

There are five parameters to pass into the request body: `grant_type`, `client_id`, `client_secret`, `redirect_url` and `refresh token`, shown below as follows:

![Get/Refresh Auth Token](/images/refresh-token-body.jpg)

These parameters need to be 'held' in a process ...so that???? see [Create a process](#create-a-process).

### Create a process

Once a datasource is created, a process is created which will contain fields for the parameters for the request body, and will hold fields from the response parameters.  

As shown in the image above there are five parameters in the request body which need to be populated, and **each of these parameters must correspond to a field** in a process. 

In the response body there are five parameters : `access_token`, `token_type`, `expires_in`, `refresh_token` and `created_at`, although only `access_token`, `expires_in` and `created_at` is needed. ********? Separately, I have gotten the Access Token so I can enter these details into the designer directly.*********?

A form is created using [Kianda Designer](docs/platform/application-designer/designer/) with **textbox fields** as well as a button called **Refresh** as follows:

![Response parameters corresponding to form fields to hold values](/images/parameters-as-fields.jpg)



#### Form rules ####

Rules are applied to both the AccessToken textbox field and the Refresh button as follows:

1. On the **Refresh button** add a **Data rule** > **Set Form Field** which will be used to clear the AccessToken field. Map a 'blank' value to the Access Token field as follows:

   ![Set form field rule to Clear Access Token field](/images/clear-access-token.jpg)

2. On the same **Refresh button** add a **Data rule** > **Create item** which will be used to invoke the REST Service to get a new token and map the response back to the process. 

   - Within the rule, select the datasource created within [Create a datasource](#create-a-datasource), in the example below 'Sample Rest Service'.

   <img src="/images/get-new-token.jpg" alt="Create item rule to get a new token and map response back to a Kianda process" style="zoom:80%;" />

3. sdf

**2.**   **Create Item –** This rule will invoke the REST Service and map the response back to the process.

**a.**   Click on the Select data source button. In the following dialog box select the **Rest Service** and select the **Get/Refresh Auth Token REST Method.**

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg)

b.   In the Input mapping, map the values from the process into the request body. The left-hand column, Form field or text, represents the fields within the process or hard coded values. The right-hand column, Data source field, represent the values within the **REST Service,** be it the request header, request body, response header or response body**.** In addition to the parameters defined with the **REST Service** the **urlPath** can be defined in the process and passed into the datasource.

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image010.jpg)

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image011.png)

c.    The On Success Mapping section is used to map the result from the API call back into the Process. The left-hand column, Form field or text, represents the fields within the process or hard coded values. The right-hand column, Data source field, represent the values within the **REST Service,** be it the request header, request body, response header or response body

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image013.jpg)

\3.   The last rule must be a save rule.

Finally; run the Process in preview mode, ensure the details you want to pass into the **REST Service** are correct and save the process. Take note of the Process ID as this will be needed for setting up the Scheduled Task

 

**Create the Scheduled Task**

The final step will be to create the scheduled task that will run before the refresh token expires. Navigate to the **Scheduled tasks** within the **Administration** section in the site. Click on the **Schedule a task** button and fill in the dialog box.

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image015.jpg)

\1.   Enter a name for the task in the **Task Name** field.

\2.   Under **Schedule** select the **Minutes** option. In the **Every** **Minutes** field enter a numerical value. For example, if the Access Token expires every 60 minutes, enter 55, meaning the schedule will run every 55 minutes.

\3.   Leave the **Expire** checkbox blank as this schedule should never stop.

\4.   Under **Process Design** select the name of the process that you created in the step above. This will expose a new field called **Select the field or rule to trigger on schedule.**

\5.   In **Process ID** enter the ID of the process that you created in preview mode. 

\6.   In **Select the field or rule to trigger on schedule** select the **Refresh** button**.**

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image017.jpg)

\7.   Click **OK** to save.

The Schedule is now set up and will refresh the access token as frequently as the time entered in the minutes field.

 

**Next Steps**

The Schedule is now set up and will refresh the access token as frequently as the time entered in the minutes field. This will run indefinitely until a user chooses to delete the schedule.

The datasource is now available to used and the Access Token is being kept current. The Access Token can be pulled into different **Processes** and used to send further **REST APIs**. Check out the below articles on how to build processes and how to add more **REST Methods** to the datasource.

https://docs.kianda.com/docs/platform/administration/designer/

https://docs.kianda.com/docs/platform/connectors/webservices/

 

