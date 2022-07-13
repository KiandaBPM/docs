---
title: "Instances API"
linkTitle: "Instances API"
weight: 1
typora-root-url: ..\..\..\..\static
---

Kianda's REST Application Programming Interface (API) for **instances** allows you to flexibly and efficiently perform database operations or methods such as create, update and get/retrieve values on process instances. A process instance is created everything data is either saved or submitted to Kianda's database for a given process design.



## How to get started

Before you get started, there are three things to keep in mind:

1. To use API methods in Kianda you must have an **administrator** role, go to [View and edit user details](/administration/users/#view-and-edit-existing-user-details) to see information on how to set roles.

2. Each API method requires a **Bearer token** which is a **security token** to enable HTTP authentication. The bearer token is a cryptic text string, included in the request header. 

   - The token can be retrieved by querying `/Token`

   - Then pass the following in the header of the request:

     `username, password, grant_type:password remember:yes`

   - You will need your workspace Subscription ID

3. Each of the following methods can be used on **process instances** or records, where **{name}** is the name of a process instance, such as 'training-approval-request-1'.

   

## POST  - Create a process instance

```
{domain}/api/instances/create
```

This request creates a process instance/new record.

The **Request Body** for the POST request is:

![Create instance](/images/json-create.jpg)

The **Response Body** will be the following:

![Create Response Body](/images/json-create-response.jpg)





## PUT - Update a process instance

```
{domain}/api/instances/{name}
```

​	where `{name}`is the name of the process instance.

This request updates all fields in the instance by performing a comparison based on version number, to ensure there are no duplicate process instances.

The **Request Body** for the PUT request is:

![PUT Request Body](/images/put-request.jpg)

The **Response Body** for PUT request:

![Create Response Body](/images/put-request.jpg)




## GET - Retrieve process instance fields

```
{domain}/api/instances/{name}/fields?names=field1,field2..
```

​	where `{name}`is the name of the process instance.

This request retrieves the values of multiple fields by name.

No Request Body is required.

The **Response Body** for GET is:

![GET Response  Body](/images/get-response.jpg)
