---
title: "Authentication"
weight: 1
typora-root-url: ..\..\..\static
---

## Introduction

The framework used for authentication in Kianda is **OAuth 2.0**. This framework uses industry-standard protocol for authorisation focusing on simplifying client developer practices, and at the same time providing specific authorisation flows for applications. The **OAuth 2.0** framework uses **Bearer** type tokens to authorise access to the platform for individual users. This type of token is required by Kianda to perform any **Create, Read, Update and Delete** (CRUD) requests to external **Application Programming Interfaces** (APIs).

When working **within** Kianda, there is no need for the Bearer token when making API requests during widget, rule or field creation because the Bearer token is already retrieved as part of a user login. If you may want to create an application outside of Kianda however, this Bearer token needs to be provided for any CRUD operations to the API. There are two methods to retrieve the Bearer token:

- [Using a POST request](#retrieving-a-bearer-token-using-a-post-request)
- [Using DevTools](#retrieving-a-bearer-token-usin-devtools)

Click on the links above to go the the relevant sections.

### Retrieving Bearer token using a POST request 

You can retrieve a bearer token using a **POST** request where the **content body type** is is set to **application**, **x-www-form-urlencoded**.

The request will look like `https://domain.com/token` where the domain is your company, for example `https://green-itr.kianda.com/token` . For the request to be valid, you need to pass the following form parameters to the body of the request:

| Parameter     | Value                       |
| :------------ | --------------------------- |
| `username:`   | your Kianda username        |
| `password:`   | your Kianda password        |
| `scope:`      | your Kianda subscription ID |
| `grant_type:` | `password`                  |

The **Response Body** will be as follows:

```json
{
    "access_token": "<Bearer access_token",
    "token_type": "bearer",
    "expires_in": 299,
    "userName": "<Provided username>",
    "userId": "<Application userId>",
    "subscriptionId": "<SubscriptionID>",
    "securityStamp": "<Token Security token (Guid)>",
    "hostURL": "<Your kianda domain>",
    ".issued": "<Token Issued Date and time>",
    ".expires": "<Token Issued Date and time>"
}
```
You can obtain the `scope` value by going to **Administration** > **Subscription** > **Subscription Details** > **Subscription Id**.

![Subscription Id](/images/subscription-details.jpg)

### Retrieving Bearer token using DevTools

You can retrieve your Bearer token using Chrome DevTools, making sure you are logged into Kianda. When logged in, open Chrome DevTools by:

1. Right clicking your mouse anywhere on the screen. 
2. Click on **Inspect** in the dialog box.
3. Open the **Network** tab.
4. Click on the **info** request.
5. In the **Header** tab, scroll down to **authorisation**. You can find your **Bearer** token here.

### What’s next ![Idea icon](/images/18.png)

To learn more about Kianda's API go to [Instance API](/apis/instances/).
