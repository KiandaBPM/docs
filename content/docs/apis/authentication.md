---
title: "Authentication"
weight: 1
typora-root-url: ..\..\..\static
---

## Introduction

The framework used for authentication in Kianda is **OAuth 2.0**. It is a framework that uses industry-standard protocol for authorisation which focuses on simplifying client developer practices, while providing specific authorisation flows for applications. **OAuth 2.0** framework uses **Bearer** type tokens to authorise access to the platform for individual users. This token is required by Kianda to preform any **Create, Read, Update and Delete** (CRUD) requests to the **Application Programming Interface** (API).

When working within Kianda, there is no need for the Bearer token when making API requests during widget, rule or field creation because the Bearer token is already retrieved from the user being logged in. If you may want to create an application outside of Kianda however, this Bearer token needs to be provided for any CRUD operations to the API. There are two ways for retrieving the Bearer token:

### Retrieving Bearer token using a POST request

To retrieve your token you need to make a **POST** request that looks like `https://domain.com/token` where the domain is your company, for example `https://green-itr.kianda.com/token` . For the request to be valid, you need to pass the following parameters to the header of the request:

| Parameter     | Value                       |
| :------------ | --------------------------- |
| `username:`   | your Kianda username        |
| `password:`   | your Kianda password        |
| `scope:`      | your Kianda subscription ID |
| `grant_type:` | `password`                  |
| `remember:`   | `yes`                       |

You can obtain the `scope` value by going to **Administration** > **Subscription** > **Subscription Details** > **Subscription Id**.

![Subscription Id](/images/subscription-details.jpg)

### Retrieving Bearer token using devtools

To retrieve your Bearer token using devtools, first you need to log into Kianda. When logged in, open the devtools by:

1. Right clicking your mouse anywhere on the screen. 
2. Click on **Inspect** in the dialog box.
3. Open the **Network** tab.
4. Click on the **info** request.
5. In the **Header** tab, scroll down to **authorisation**. You can find your **Bearer** token here.

### What’s next ![Idea icon](/images/18.png)

To learn more about Kianda's API go to [Instance API](/docs/apis/instances/).
