---
title: "Authentication"
weight: 1
typora-root-url: ..\..\..\..\static
---

The framework used for authentication in Kianda is **OAuth 2.0**. This framework uses **Bearer** type tokens to authorise access to the platform for individual users. This token is required by Kianda to preform any **Create, Read, Update and Delete** (CRUD) requests in the **Application Programming Interface** (API).

Your Bearer token carry many privilages, so be sure to keep it secure! Do not share your Bearer token  in publicly accessible areas such as GitHub, client-side code, and so forth.

When working within Kianda, there is no need for the Bearer token when making API requests during widget, rule or field creation because the Bearer token is already retrieved from the user being logged in. If you may want to create an application outside of Kianda however, this Bearer token needs to be provided for any CRUD operations to the API. There are two ways for retrieving the Bearer token:

### Retrieving Bearer token using a GET request

To retrieve your token you need to make the a **GET** request looking like `https://domain.com/token` where the domain is your company's, for example `https://green-itr.kianda.com/token` . For the request to be valid, you need to pass the following perameters to the header of the request:

| Parameter     | Value                        |
| :------------ | ---------------------------- |
| `username:`   | your Kianda username.        |
| `password:`   | your Kianda password.        |
| `scope:`      | your Kianda subscription ID. |
| `grant_type:` | `password`                   |
| `remember:`   | `yes`                        |

You can obtain your `scope` by going to **Administration** > **Subscription** > **Subscription Details** > 		**Subscription Id**.

### Retrieving Bearer token using devtools

To retrieve your Bearer token using the devtools, first you need to log into Kianda. When logged in, open the devtools by:

1. Right clicking your mouse anywhere on the screen. 
2. Click on **Ispect** in the dialog box.
3. Open the **Network** tab.
4. Click on the **info** request.
5. In the **Header** tab, scroll down to autorization. You can find your Bearer token here.

