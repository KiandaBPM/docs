---
title: "Microservice Creation"
linkTitle: "Creating a microservice"
weight: 2
typora-root-url: ..\..\..\..\static
toc_hide: true
hide_summary: true
---

## What is a Microservice

A microservice is a self contained independent service, usually hosted in the cloud, which can integrate with applications through rest apis.

Microservices allow developers to focus on developing a service without worrying about dependencies.

A microservice can be developed using almost any programming language

## Prerequisites

* Ability/permissions to create resources with a cloud platform, e.g. Google Cloud, AWS or Azure
* Admin/Developer permissions within Kianda.
* Visual studio or text editor for the chosen language

### Requirements

The microservice should implement the following 3 functions.

1. Test
2. Metadata
3. Query

It is required that the microservice uses security best practices, to encrypt sensitive data using [AES](#AES256) encryption and verify that each request and response is secure using an [HMAC](#HMAC) signature. 

## Security

#### AES256: 

AES(Advanced Encryption Standard), will be the technique used to encrypt sensitive data. This is a symmetric encryption technique, which means the same key is used to encrypt and decrypt the data it is also a 2-way encryption algorithm. 

<img src="/images/AES_encryption.png" style="zoom: 150%;" />



#### HMAC:

We use HMAC to sign the signature to make sure the response is coming from the correct end point. HMAC is also an encryption algorithm but unlike AES it’s a one-way encryption, meaning it isn’t decrypted on the other side. It’s used for verification, for example if we encrypt with HMAC our secret key with a request id and then do the same in the response, we can verify that we have got the response back from the correct endpoint and it has not been tampered with because both hashes will match. HMAC stands for **H**ash based **M**essage **A**uthentication **C**ode and the hash used is SHA256. 

The main difference between the two is that AES we are encrypting and decrypting data, this is fast and secure for large data, with HMAC we use it to simultaneously verify both the data integrity and authenticity of a message.

<img src="/images/Sha256_Hashing.png" style="zoom:67%;" />

### Microservice Development

In this example the Microsoft Azure cloud will be used, the same features are available in other clouds but may have different naming conventions.

* Create a serverless Azure function app in visual studio. (Visual studio provides a template to get you started).

* Implement the following functions Test, Metadata and Query

* Debug locally and test using a tool such as postman or the Kianda cloud connect

* Deploy to azure 

  The steps highlighted in bold are unique to the functions, the other steps are repeated in all three.


### Test 

The Test function ensures that the user is authorized to use the datasource, if they are not authorized then this function can be used to authorize the user and retrieve an access token for any further requests

The steps for the test function are as follows

1. Deserialize the data in the [custom connector request](#Custom-Connector-Request) 

2. Decrypt the encrypted settings property bag using the shared secret key and the [Decrypt function](#decrypt-string-with-aes256)

3. **Authorize the user and retrieve bearer token for subsequent requests, save the token to the settings property bag **

4. **Add the oauth token to the settings property bag and [encrypt](#encrypt-string-with-aes256) using your secret key.**

5. Create [custom connector response](#Custom-Connector-Response) and include success message to indicate test succeeded/failed.

6. Sign the response using the  [EncryptdatawithHMACSHA256](#encrypt-data-with-hmacsha256) methodand include in the custom connector response. 

   Below shows an example connector test function from the Kianda demo microservice

```c#
 		
```

### Metadata 

The metadata function provides the list of available endpoints in the microservice and is called when selecting the datasource in a kianda process.

The steps for the metadata function are as follows:

1. Deserialize the data in the [custom connector request](#Custom-Connector-Request) 

2. Decrypt the encrypted settings property bag using the shared secret key and the [Decrypt function](#decrypt-string-with-aes256)
3. **Create a JSON tree structure similar to the one below.** 
4. Create [custom connector response](#Custom-Connector-Response) and include success message to indicate success/failure.
5. Create a signature string using the  [EncryptdatawithHMACSHA256](#encrypt-data-with-hmacsha256) method and include in the custom connector response. 


```json
{
    "text": "Countries And Cities",
    "name": "countriesAndCities",
    "icon": "fa fa-database",
    "selectable": false,
    "nodes": [
        {
            "text": "Countries",
            "icon": "",
            "desc": "",
            "nodes": [
                {
                    "text": "Country Name",
                    "name": "countryName",
                    "type": "string",
                    "desc": "",
                    
                },
                {
                    "text": "ISO Country Code",
                    "name": "ISOCode",
                    "type": "string",
                    "desc": ""
                }
            ]
        },
        {
            "text": "Cities",
            "name": "cities",
            "icon": "",
            "desc": "",
            "nodes": [
                {
                    "text": "City Name",
                    "name": "cityName",
                    "type": "string",
                    "desc": ""
                },
                {
                    "text": "ISO Country Code",
                    "name": "ISOCode",
                    "type": "string",
                    "desc": ""
                }
            ]
        }
    ]
}
```



### Query

The Query function is where the execution of the datasource methods occurs, the metadata function provides the list of available methods. 

The steps for the query function are as follows

1. Deserialize the data in the [custom connector request](#Custom-Connector-Request) 

2. Decrypt the encrypted settings property bag using the shared secret key and the [Decrypt function](#decrypt-string-with-aes256)
3. Get the [query object](#query-1) from the request and call the function related to the query in the datasource. 

4. Create [custom connector response](#Custom-Connector-Response) and include success message to indicate query succeeded/failed.

5. **Create the [query result](#queryresult) object and include in the custom connector response response**

6. Sign the response using the  [EncryptdatawithHMACSHA256](#encrypt-data-with-hmacsha256) method and include in the custom connector response. 

```c#
        
```



## Schemas required for Custom Connectors

#### Custom Connector Request

``` c#
	public class CustomConnectorRequest
        {
            public string subscriptionId { get; set; }
            public string userId { get; set; }
            public string requestId { get; set; }
            public string action { get; set; }
            public string encryptedSettingsPropertyBag { get; set; }
            public Query query { get; set; }
        }
```

##### Request Query Object

```c#
   public class Query {
        public string id { get; set; }
        public string action { get; set; }
        public JObject info { get; set; }
        public string orderBy { get; set; }
        public bool orderAscending { get; set; }
        public string paging { get; set; }
        public int rowLimit { get; set; }
        public List<string> fields { get; set; }
        public Dictionary<string, object> mappings { get; set; }
        public string filter { get; set; }
        public string filterBy { get; set; }
        public string filterMode { get; set; }
        public string signature { get; set; }

    }
```



#### Custom Connector Response

```c#
public class CustomConnectorResponse
    {
        public string requestId { get; set; }
        public string signature { get; set; }
        public string encryptedSettingsPropertyBag { get; set; }
        public QueryResult queryResult { get; set; }
    }
```

##### Response QueryResult 
``` c#
public class QueryResult
        {
            public bool success { get; set; }
            public string message { get; set; }
            public JObject data { set; get; }
            public List<JObject> items { get; set; }
            public string resultCount { get; set; }
            public string signature { get; set; }
        }
```
