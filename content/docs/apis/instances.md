---
title: "Instances API"
linkTitle: "Instances API"
weight: 1
typora-root-url: ..\..\..\static
---

---
Introduction
---

Kianda's REST Application Programming Interface (API) for **instances** allows you to flexibly and efficiently perform database operations or methods such as create, update and get/retrieve values on **process instances**. A process instance is created every time data is either saved or submitted to Kianda's database for a given process design, see [Process instance](/docs/platform/application-designer/process/process-instance/) for more details.



## How to get started

Before you get started, there are three things to keep in mind:

1. To use API methods in Kianda you must have an **administrator** role, go to [View and edit user details](/administration/users/#view-and-edit-existing-user-details) to see information on how to set roles.

2. Each API method requires a **Bearer token**, see [Authentication](/docs/apis/authentication/) for more details.

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




## REST API Methods
You can perform Create, Read, and Update operations on Kianda resources using standard HTTP method requests, as summarised below:

| Method                                       | Description                           |
| -------------------------------------------- | ------------------------------------- |
| [POST](#create-a-process-instance-post)      | Create a process instance             |
| [GET](#read/retrieve-a-process-instance-get) | Read/Retrieve process instance fields |
| [PUT](#update-a-process-instance-put)        | Update a process instance             |
| PATCH                                        | Partially update a process instance   |

Before any of the requests are used, you must have the bearer access token



### Create a process instance - POST

This request creates a process instance/new record. 

1. The format for the request is:

```
{{domain}}/api/instances/create
```

2. Ensure that the **bearer** token is inserted into the authorisation header, for example to create an instance of a process called 'new-training-process-43' as shown below:

   ![Create instance example](/images/create-instance.jpg)

3. The **Request Body** for the POST request is:

```json
{
	"ProcessName":"",
	"FieldsMappings":[],
	"TriggerField":"",
	"Status":""
}
```

The **Response Body** will be as follows:

```json
{
	"success":true,
	"instanceID":0
}
```



### Read/Retrieve process instance fields - GET

```
{{domain}}/api/instances/{name}/fields?names=field1,field2..
```

	where `{name}`is the name of the process instance.

This request retrieves the values of multiple fields by name.

No Request Body is required.

The **Response Body** will be as follows:

```json
{
	"name":"",
	"text":"",
	"value":"",
}
```



### Update a process instance - PUT

```
{{domain}}/api/instances/{name}
```

	where `{name}`is the name of the process instance.

This request updates all fields in the instance by performing a comparison based on version number, to ensure there are no duplicate process instances.

The **Request Body** for the PUT request is:

```json
{
	"ProcessName":"",
	"FieldsMappings":[],
	"TriggerField":"",
	"Status":""
}
```

The **Response Body** will be as follows:

```json
{
	"ProcessName":"",
	"FieldsMappings":[],
	"TriggerField":"",
	"Status":""
}
```







