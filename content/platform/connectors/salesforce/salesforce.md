---
title: "Salesforce"
weight: 16
typora-root-url: ..\..\..\..\static
---

One of the data connectors that you can connect to is **Salesforce**. Salesforce provides customer relationship management software and applications focused on sales, customer service, marketing automation, and analytics. The Salesforce data connector allows you to access information from your Salesforce account which can then be used within your Kianda subscription.

## Before you get started

In advance of using the Salesforce data connector, you must have an account with Salesforce which is used to obtain information for a successful connection. If you have an account with Salesforce, all you need to create within the Salesforce application is a **Connected App**. These connected apps within Salesforce enable external applications to integrate together using its APIs. The connected app will provide you with a **Consumer Key** and a **Consumer Secret**. These consumer information are used to establish the connection between your Connected app in Sales force and your Kianda subscription, to learn how to acquire the Consumer Key and Consumer Secret go to [Acquiring Consumer Key and Consumer Secret](/platform/connectors/salesforce/#acquiring-consumer-key-and-consumer-secret). In order to successfully connect your Connected App and Kianda, the **settings** of the Connected App in your salesforce account need to be **configured**, to learn how to configure your Connected App in Salesforce go to [Configuring Salesforce Connected App]().

## When to use

You can use a connected app to integrate external applications with the Salesforce API, such as a process that pulls in order status data from your Salesforce organisation into your Kianda subscription. 

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **Salesforce** from the list of data sources provided.

3. You will be automatically brought to the **Salesforce details** page, where you can start setting up the connection. 

   ![File system detail page](/images/salesforce-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your Salesforce connector. This is used to distinguish between different data connectors on your platform.

   - **Client Id** - used to identify the **Connected App** created in your salesforce account. In salesforce this Client ID is called **Consumer Key** and can be found in your Connected App **settings**. To learn more about on how to find the **Consumer Key** in sales force go to [Finding Consumer Key and Consumer Secret](/platform/connectors/salesforce/#finding-consumer-key-and-consumer-secret).

   - **Client Secret** - used to identify the **Connected App** created in your salesforce account. In salesforce this Client ID is called **Consumer Secret** and can be found in your Connected App **settings**. To learn more about on how to find the **Consumer Secret** in Salesforce go to [Finding Consumer Key and Consumer Secret](/platform/connectors/salesforce/#finding-consumer-key-and-consumer-secret).

   - **Salesforce Environment** - indicates which environment you have your account created in. There are two types of accounts that you can create in Salesforce. A **developer** account and an **ordinary** account. If you have an ordinary account and your trying to connect a salesforce app, you need to select the **Live** option and if your account is a developer account, then select the **Sandbox** option.
     - **Live** - indicates that your Salesforce account is an **ordinary** account.

     - **Sandbox** - indicates that your salesforce account is a **developer** account.

   - **Authorize** - allows you to authorize the connection with your Connected App and Kianda. When you click this button, a Salesforce window will open allowing you to log in into Salesforce to authenticate your account.

4. When you have added Salesforce details, you are ready to test your connection and add security. At the bottom of the **Salesforce details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.

### Acquiring Consumer Key and Consumer Secret

1. Log into your Salesforce account.
2. On the top right-hand side of the screen, click on the **cogwheel** and select **Setup**.
3. In the left-hand pane go to **Apps > App Manager**.
4. From the list of apps, find your **Connected App** that you want to connect with Kianda and click on the **drop-down** list on the right-hand side. Select **View**.
5. Under API (Enable OAuth Settings), click on **Manage Consumer Details**. A **Verify Your Identity** window opens.
6. Enter in the **Verification code** that was sent to your email that you used to sign up to Salesforce.
7. Click on **Verify**.
8. Once verified, your will be brought to a page where you can find the **Consumer Key** and **Consumer Secret**.

### Configuring Salesforce Connected App

Before starting going through the steps below you must ensure that you have a Connected App created in your Salesforce account, to learn how to do that go to [Create a Connected App](https://help.salesforce.com/s/articleView?id=sf.connected_app_create.htm&type=5).

1. Log into your Salesforce account.

2. On the top right-hand side of the screen, click on the **cogwheel** and select **Setup**.

3. In the left-hand pane go to **Apps > App Manager**.

4. From the list of apps, find your **Connected App** that you want to connect with Kianda and click on the **drop-down** list located on the right-hand side. Select **View**.

5. From your Connected App screen, click on **Edit**.

6. Scroll down to **API (Enable OAuth Settings)**. Check the Enable OAuth Settings checkbox.

7. In the **Callback URL** text box enter `https://app.kianda.com/index.html`.

8. On a second line of the **Callback URL** text box enter `https://{company}.kianda.com/index.html` where `company` is the name of your company's subscription, for example `https://green-itr.kianda.com/index.html`. The **Callback URL** should look as follows when the company's name is `green-itr`:

   ![Callback textbox](/images/salesforce-callback.jpg)

9. In the **Selected OAuth Scopes** section, move all of the scopes from **Available OAuth Scopes** to **Selected OAuth Scopes** window by selecting them and clicking **Add**. Here you can add scopes that you want your Connected App to have access to from within Kianda.

10. From your Connected App screen, click on **Manage**.

11. From the manage connected app screen, click on **Edit Policies**.

12. In the **OAuth Policies** section, go to **Permitted Users** and select **All users may self-authorize**.

13. In the **IP Relaxation** select the **Relax IP restrictions** option.

14. Click on **Save**.

## What's next  ![Idea icon](/images/18.png) ##

Your **Salesforce service** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/platform/application-designer/designer/).
