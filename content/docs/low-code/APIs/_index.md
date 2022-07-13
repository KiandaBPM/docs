---
title: "Instances API"
linkTitle: "Instances API"
weight: 1
typora-root-url: ..\..\..\..\static
---

You can query Kianda's REST Application Programming Interface (API). Using REpresentational State Transfer (REST) allows you to flexibly and efficiently perform database operations or methods such as create, update and get/retrieve values on process instances.



## How to get started

Before you get started, there are three things to keep in mind:

1. To use API methods in Kianda you must have an **administrator** role, go to [View and edit user details](/administration/users/#view-and-edit-existing-user-details) to see information on how to set roles.

2. Each API method requires a **Bearer token** which is a **security token** to enable HTTP authentication. The bearer token is a cryptic text string, included in the request header. 

   - The token can be retrieved by querying `/Token`

   - Then pass the following in the header of the request:

     `username, password, grant_type:password remember:yes`

   - You will need your workspace Subscription ID

3. Each of the following methods can be used on **process instances** or records, where **{name}** is the name of a process instance, such as 'training-approval-request-1'.

   

## POST Create an instance

```
For example for the workspace for the company GreenITR:
https://green-itr.kianda.com/api/instances/create
```

This request creates a process instance/new record.

The **Request Body** for the POST request is:

![Create instance](/images/json-create.jpg)

The **Response Body** will be the following:

![Create Response Body](/images/json-create-response.jpg)





## PUT Update an instance

```
/api/instances/{name}
```

​	where `{name}`is the name of the process instance.

This request updates all fields in the instance by performing a comparison based on version number, to ensure there are no duplicate process instances.

The **Request Body** for the PUT request is:

![PUT Request Body](/images/put-request.jpg)

The **Response Body** for PUT request:

![Create Response Body](/images/put-request.jpg)



## PATCH Partially save an instance

```
/api/instances/{name}/update
```

​	where `{name}`is the name of the process instance.

This request partially updates an instance by comparing changes to the last saved version of the instance, and updating only changed fields.

The **Request Body** for the PATCH request is:

![PATCH Request Body](/images/patch-request.jpg)

The **Response Body** for PATCH is:


## GET Retrieve instance fields

```
/api/instances/{name}/fields?names=field1,field2..
```

​	where `{name}`is the name of the process instance.

This request retrieves the values of multiple fields by name.

No Request Body is required.

The **Response Body** for GET is:

![GET Response  Body](/images/get-response.jpg)
