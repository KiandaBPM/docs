---
title: "REST Service and Access Token refresh"
linkTitle: "REST Service and Access Token refresh"
typora-root-url: ..\..\..\..\..\static
---

**Introduction**

When creating a **REST Service datasource** that utilises oAuth to authenticate you may want to create the refresh functionality within Kianda. This is possible by creating a **Process** and scheduling it to run before the Access Token expires.

**How to get started**

**Create the datasource**

First you will need to create the **datasource**. For example, see a sample **REST Service** below with two **REST Methods. The** method titled **Get/Refresh Auth Token** is what will be used to refresh the Access Token with the scheduled task. For more information on how to create **REST Services** go to the **REST Service** page ***LINK***

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)

**Create the process**

Next, the process to contain fields for the parameters for the request body and fields to hold the parameters from the response.

In the request body there are five parameters which need to be populated, the grant_type, client_id, client_secret, redirect_url and refresh token. Each of these parameters get a corresponding field.

In the response there are five fields as well, the Access token, Token type, expiry time, Refresh token and creation time. The only fields I require are the Access Token, expiry and creation times. Each field has a corresponding field.

Separately, I have gotten the Access Token so I can enter these details into the designer directly.

![img](file:///C:/Users/CAITRI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg)

Create a button called **Refresh**. Within this button there are three buttons.

\1.   **Set Form Field** - Clear the Access Token field.

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

 

