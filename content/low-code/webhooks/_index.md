---
title: "Webhooks"
description: "Learn how to configure webhooks to receive web callbacks from record creation"
weight: 11
typora-root-url: ..\..\..\static
---

**Webhooks** in Kianda provide a straightforward way to notify external applications in real time when certain events occur within your workspace. Rather than constantly polling Kianda for updates, webhooks allow you to react immediately whenever **process instances are created, updated, or deleted**. This makes event handling efficient and responsive.

When a webhook event fires, Kianda sends an HTTP GET request to the configured URL(s), passing along essential details such as the process name, instance ID, and the type of event. Your external application can then use this information to update its own records, trigger workflows, or perform any other actions needed.

**Note:** The callback request has a timeout of 10 seconds. If your external service does not respond within this time, the request may fail.

## Setting Up Webhooks in Kianda

To implement webhooks, you need an **Administrator** or **Developer** role. For more details on roles, see [Users & Groups](/platform/administration/users/).

1. **Open the Developer Resources:**
   - Go to **Administration** in the left-hand sidebar.
   - Click on **Developer** to open the **Developer resources** page.
   
   ![Developer resources page](/images/widgetview.gif)

2. **Access Webhooks:**
   - Click on **Webhooks** to configure callback URLs.

3. **Configure Instance Callback URLs:**
   - The **Instance Callback URLs** dialog box appears.
   
     ![Webhooks dialog](/images/webhooks-oneurl.jpg)

4. **Enable and Specify Callbacks:**
   Turn on the relevant callback(s) using the sliders, then provide the URL(s) that Kianda should call when the selected event occurs.
   
   - **Created Callback:** Fires whenever a new process instance is created.  
     - Kianda sends a **HTTP GET** request with parameters:  
       `instanceID={instanceID}&processName={processName}&eventType=created`
   
   - **Updated Callback:** Fires whenever a process instance is updated.  
     - Kianda sends a **HTTP GET** request with parameters:  
       `instanceID={instanceID}&processName={processName}&eventType=updated`
   
   - **Deleted Callback:** Fires whenever a process instance is deleted.  
     - Kianda sends a **HTTP GET** request with parameters:  
       `instanceID={instanceID}&processName={processName}&eventType=deleted`

   For each event type, you can enter one or more URLs (one URL per line) to notify multiple services simultaneously.

5. **Help and Guidance:**
   If you need more details, click the **Help** button ![Help button](/images/webhookhelp.PNG) to see additional instructions and examples.

   ![Callback helptext](/images/callback-helptext.jpg)

6. **Save Your Settings:**
   - Click **OK** to confirm your settings.
   - Click **Close** if you want to exit without saving.

Once configured, Kianda will send HTTP GET requests to the specified URLs whenever the corresponding event occurs. You can then build logic in your external application(s) to handle these events—updating records, triggering other workflows, or integrating with third-party services.

---

**In summary**, Kianda’s webhook functionality allows your workspace to seamlessly connect with external applications in real time, reducing the need for constant polling and making it easier to maintain synchronized data and processes across systems.

   





