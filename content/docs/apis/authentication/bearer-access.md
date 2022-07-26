---
title: "Bearer access token"
weight: 3
typora-root-url: ..\..\..\static
---



Kianda's REST Application Programming Interface (API) for **instances** allows you to flexibly and efficiently perform database operations or methods such as create, update and get/retrieve values on **process instances**. A process instance is created every time data is either saved or submitted to Kianda's database for a given process design.



## How to get started

Before you get started, there are three things to keep in mind:

1. To use API methods in Kianda you must have an **administrator** role, go to [View and edit user details](/administration/users/#view-and-edit-existing-user-details) to see information on how to set roles.

2. Each API method requires a **Bearer token**, see [Authorization](#authorization) below for more details.

3. Each of the following methods can be used on **process instances** or records, where **{name}** is the name of a process instance, such as 'training-approval-request-1'.

   

## Authentication

The Instances API methods require a **Bearer token** or **Access token** which is a **security token** to enable HTTP authentication. The bearer token is a cryptic text string, included in the request header. 

The token can be retrieved by using a **GET** query as follows:

```
{{domain}}/token
```

Pass the following in the header of the request:

`username, password, scope, grant_type:password, remember:yes`

where {scope} is your **Subscription ID** found in your Kianda workspace by going to **Administration** > **Subscription** > **Subscription Details** > **Subscription Id**

![Subscription Id](/images/subscription-details.jpg)

