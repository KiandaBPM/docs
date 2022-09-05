---
title: "DocuSign"
weight: 3
typora-root-url: ..\..\..\..\static
---

## Introduction

One of the data connectors within Kianda that you can connect to is **DocuSign**. DocuSign enables organisations to manage electronic agreements by offering electronic signatures also know as **eSignatures**. eSignatures are a way to sign different types of documents electronically on many different devices.  

## Before you get started

In advance of using the DocuSign data connector, you must have an account with DocuSign. This account is used to authorise a connection between your Kianda subscription and your DocuSign account itself so that the DocuSign **Application Programming Interface (API)** can be used. There are two types of accounts that you can create in DocuSign. An ordinary account and a developer account. Take note which account you have created as this information will be used to create a different connection within Kianda.

## When to use

You can use the DocuSign data connector when a process your have created requires you to send individual documents or envelopes to get them signed electronically. With the connector you can access different types of templates that you have created within your DocuSign account, download documents, access already existing envelopes to see their status or summary. 

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **DocuSign** from the list of data sources provided.

3. You will be automatically brought to the **DocuSign details** page, where you can start setting up the connection.

   ![Add new data connector button](/images/docusign-details.jpg) 

   Choose from the edit options:

   - **Display name** - type in the name for your DocuSign connector. This is used to distinguish between different data connectors on your platform.
   - **DocuSign Environment** - indicates which environment you have your account created in. There are two types of accounts that you can create in DocuSign. A **developer** account and an **ordinary** account. If you have an ordinary account and your trying to connect to DocuSign, you need to select the **Live** option, and if your account is a developer account, then select the **Demo** option. This is important as the authentication of the account is different for those two types of account.
     - **Demo** - indicates that your DocuSign account is a **developer** account.

     - **Live** - indicates that your DocuSign account is an **ordinary** account.

   - **Authorize** - allows you to **authorize** the connection with your DocuSign account and Kianda. When you click this button, a DocuSign window will open allowing you to log in into your DocuSign to **authenticate** your account.

4. When you have added File system details, you are ready to test your connection and add security. At the bottom of the **File system details** page, click on **Test connection** button ![Test connection for REST Service](/images/test-connection.jpg) and if the service has been correctly configured, then you should receive a notification saying **Connection test succeeded**.

5. Click on **Save** ![Save connection button](/images/save-connection.jpg) to save the connection and you will receive a notification saying **Details saved successfully**.

6. Add Security settings by clicking on the **Security** button, go to [Setting security for data sources](/docs/platform/connectors/#setting-security-for-data-sources) for more details.

7. Click on **Close** to close the details page and return to the data source management main view.



## What's next  ![Idea icon](/images/18.png)

Your **SharePoint service** is now set up and ready to be used in your **processes**. To find out more about how to design processes go to [Designer](/docs/platform/application-designer/designer/).
