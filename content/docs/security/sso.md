---
title: "Single Sign On (SSO)"
weight: 4
typora-root-url: ..\..\..\static
---

Single Sign-On(SSO) is an authentication process that allows a user to log in with a single ID to any of several related, yet independent, software systems. Single sign-on allows the user to log in one time and access services without re-entering authentication factors.

On Kianda, Single-Sign-On allows the user to login via Single Sign-On connector. This connector for example could be SharePoint, Office365 or Salesforce. 

## How to get started

To enable Single-Sign-On, follow the steps below:

1. Login to Kianda with an **Administrator** account.

2. From the left-hand side pane, click on **Administration** > **Subscription** > **Details**. 

3. In the **Single Sign-On Details** page, beside **Enable Single Sign-On** click on **Yes** to enable Single Sign-On. If Single-Sign-On is already enabled and if you wish to disable it, click on **No** and then clear the cache memory and login to Kianda by entering your password first and then the username.

   ![Enable Single Sign-On](/images/single-sign-on.jpg)

4. Choose a **Single Sign-On Provider** by choosing **Office 365** or **SAML**.

   - If you choose **Office 365**, you must choose an **Office 365 Connector** from a dropdown list. This will show Office 365 datasources already created in the **Data sources** function under **Administration**. Go to [Office 365 data connector](/docs/platform/connectors/office-365/) to learn how to create a data source if one doesn't exist.

     ![Office 365 data connector](/images/office365-signon.jpg)

   - If you choose **SAML 2.0**, you must provide the **SAML 2.0 Target URL**. This is the SAML 2.0 enabled Idp target URL which is redirected by the HTTP POST. 
     - You can also provide the **SAML 2.0 Token Signing Certificate** **(.cer)** by clicking on **Browse** to navigate, find and add the cert, a .cer file to the details page.

5. For **Auto redirect to SSO** choose from **No** or **Yes**. If you choose **Yes** then users cannot login with their Kianda username and password directly, and are automatically redirected to the configured SSO provider for authenticaion.

   - However if you have an external set of users, for example contractor who need access to Kianda, you can set a **SSO bypass group.** You must define a group of users in advance using the [**Users**](/docs/platform/administration/users/) function under **Administration**. From here you can define a group of users that can login using Kianda's username and password. Use this option for users that are external for the configured SSO provider, so they can go directly to the workspace login page to login.

6. For the option **Default "Remember Me" to false** choose from **No** or **Yes**, to remember the login details. 

7. When you have completed your edits, click on **Save Changes** or click on **Back** at any time to exit the page without saving. 

   
