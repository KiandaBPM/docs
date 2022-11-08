---
title: "How to create a client connector"
linkTitle: "How to create"
weight: 1
typora-root-url: ..\..\..\..\static
toc_hide: false
hide_summary: false
---

# Introduction 

This section will detail how to create a new client connector. Feel free to try follow along and use the demo code, more detail will be provided in the how-to-use section.

**Please Note - you must be an administrator to create a client connector.**

There are 3 parts that need to be implemented to create and use a connector 

1. Frontend - create a new connector and datasource for the connector.

2. Microservice - create a microservice or use an existing service for performing the metadata query and test actions

3. Process - use the custom connector to bring data into a process and use the query hook to filter the data

   

## Create a new connector

Lets create a new connector and add some custom code to it.

1. Navigate under administration->developer then select **new connector**.

<img src="/images/create-new-connector.png" style="zoom: 67%; border:1px solid black" />

2.  Now you can add a title and logo for your connector. 

Make sure to **copy the secret key** to a safe location where you will find it as it will be needed later



<img src="/images/create-connector.png" style="zoom:100%;border:1px solid black"/>

3. After creating the connector, 

   The next screen will show the following  4 tabs:

  **Connector Settings:** This is where the connector title and icon can be changed. The URL for metadata, test and query  can be edited here too.

   **Settings UI:** The settings UI tab is where the custom handlebars can be added for the settings of the connector datasource.

   **Settings code:** This is the js code for the settings UI.

   **Query Code:** The Query Code section contains hooks for the metadata, query and querySuccess.

   ![](/images/connector-tabs.png)

4. Switch to the settings UI tab and notice that some sample code has been included here, this code will be rendered when the datasource for this connector is created. See [create a connector datasource](/low-code/client-connector/how-to-create/#create-a-connector-datasource).

   <img src="/images/settings-ui-tab.png"/>

A quick runthrough of what this code does, 

lines 1-4 is a Client Key field

lines 6-9 is a list of radio buttons for environment selection, the options are demo and live

lines 12-29 is a button for authorizing the user of the datasource

below is the output on the datasource settings

 <img src="/images/Connector-datasource-created.png" style="zoom:50%; border:1px solid black"/>



#### Query Code 

In the query code tab there are 3 methods that can be customized for your needs, some default code is provided to get you started.

This section covers each of the hooks in detail.

<img src="/images/connector-query-code.png" style="zoom:100%;border:1px solid black"/>

The metadata hook is where return of the tree/metadata call can be altered. 
This is where the tree function gets triggered as can be seen in the network tab calls when a datasource is selected the tree function is queryed and the response is then rendered as a tree view.

<img src="/images/trigger-tree-function.png"/>

Below is an example of what the json response from the tree function looks like.



```json
[
  {
    "name": "Get Countries",
    "text": "Get Countries",
    "title": "Get Countries",
    "icon": "fa fa-globe",
    "type": "STRUCTURE",
    "nodes": [
      {
        "name": "Country",
        "text": "Country",
        "title": "Country",
        "icon": "",
        "type": "text"
      }
    ],
    "fields": [
      {
        "name": "Country",
        "text": "Country",
        "title": "Country",
        "icon": "",
        "type": "text"
      }
    ],
    "selectable": true
  },
  {
    "name": "Get Cities",
    "text": "Get Cities",
    "title": "Get Cities",
    "icon": "fa fa-globe",
    "type": "STRUCTURE",
    "nodes": [
      {
        "name": "Country",
        "text": "Country",
        "title": "Country",
        "icon": "",
        "type": "text"
      },
      {
        "name": "City",
        "text": "City",
        "title": "City",
        "icon": "",
        "type": "text"
      }
    ],
    "fields": [
      {
        "name": "Country",
        "text": "Country",
        "title": "Country",
        "icon": "",
        "type": "text"
      },
      {
        "name": "City",
        "text": "City",
        "title": "City",
        "icon": "",
        "type": "text"
      }
    ],
    "selectable": true
  }
]
```


## Create a connector datasource

1. Navigate to Administration -> Data sources

Click **add new** select the newly created connector, in this case the demo connector will be selected.

<img src="/images/connector-datasource.png" style="zoom:80%;border:1px solid black"/> 



2. Once the datasource is created you will see the datasource details screen, the buttons at the bottom are similar to any other datasource. The section in the middle is what can be customized using the settings UI and settings Code. 
    <img src="/images/Connector-datasource-created.png" style="zoom:100%; border:1px solid black"/>

  

## Create a microservice

### Requirements

The microservice should implement the following 3 functions.

1. Metadata

2. Query

3. Test

### Test 



### Metadata 

The metadata function provides the list of available endpoints in the microservice and is called when selecting the datasource in kianda

The steps for the metadata function is as follows:

1. Get the client connector request 

2. Decrypt the encrypted settings property bag recieved in the request 

3. Create the Client connector response and include the tree 

   The following is an example of how to create the tree object in c#

```c#
List<JObject> CityFields = new List<JObject> { };

CityFields.Add(new JObject{["name"] = "Country", ["text"] = "Country", ["title"] = "Country", ["icon"] = "",["type"] = "text"});

CityFields.Add(new JObject { ["name"] = "City", ["text"] = "City", ["title"] ="City", ["icon"] = "", ["type"] = "text" });

List<JObject> CountryFields = new List<JObject> { };
CountryFields.Add(new JObject{["name"] = "Country", ["text"] = "Country", ["title"] = "Country",["icon"] = "",["type"]="text"});

List<JObject> nodes = new List<JObject> { };
nodes.Add(new JObject { ["name"] = "Get Countries", ["text"] = "Get Countries", ["title"] = "Get Countries", ["icon"] = "fa fa-globe", ["type"] = "STRUCTURE", ["nodes"] = new JArray { CountryFields }, ["fields"]=new JArray { CountryFields}, ["selectable"] = true });
nodes.Add(new JObject{ 
              ["name"] = "Get Cities", 
              ["text"] = "Get Cities", 
              ["title"] = "Get Cities", 
              ["icon"] = "fa fa-globe", 
              ["type"] = "STRUCTURE", 
              ["nodes"] = new JArray { CityFields }, 
              ["fields"] = new JArray { CityFields }, 
              ["selectable"] = true 
          });
//create the tree root to be returned
var root = new JObject {
["text"] = "Function",
["icon"] = "fa fa-bolt",
["nodes"] = new JArray { nodes }
};
```



The above code renders the following result

<img src="/images/example-tree-result.png"/>

### Query






## Schemas

### ClientConnectorRequest

Each function will receive a clientConnectorRequest payload.

Note, the Encrypted settings property bag will contain the encrypted datasource settings, it can only be decrypted using the secret key recieved when creating the client connector.

```c#
       public class ClientConnectorRequest
        {
            public string subscriptionId { get; set; }
            public string userId { get; set; }
            public string requestId { get; set; }
            public string action { get; set; }
            public string encryptedSettingsPropertyBag { get; set; }
            public Query query { get; set; }
        }


```
### Query
The query object is included in the Client Connector Request

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

### ClientConnectorResponse

The Response again includes the encrypted settings property bag, the encrypt and decrypt functions are provided below. 

```c#
public class ClientConnectorResponse
    {
        public string requestId { get; set; }
        public string signature { get; set; }
        public string encryptedSettingsPropertyBag { get; set; }
        public QueryResult queryResult { get; set; }
    }
```
### QueryResult
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
The query result contains typical response paramaters, Note the signature string needs to be created using hmac for validation. 



## Encryption/Decryption Functions 

### Encrypt Data with HMACSHA256 


``` c#
private static string EncryptDataWithHMACSHA256(string key, string value)
        {
            using (var hash = new HMACSHA256(Encoding.UTF8.GetBytes(key)))
            {
                var hashedByte = hash.ComputeHash(Encoding.UTF8.GetBytes(value));
                var hashed = Convert.ToBase64String(hashedByte);
                return hashed;
            }
        }

```

### Decrypt String With AES256 

Since the settings property bag is encrypted and is sent with every request, a decryption function is provided below in C#

```c#
public static string DecryptStringWithAES256(string key, string cipherText) 
// Where key is the unique secret key recieved when creating the client connector and cipherText is the encryptedSettingsPropertBag
        {
            byte[] iv = new byte[16];
            byte[] buffer = Convert.FromBase64String(cipherText);

            using (Aes aes = Aes.Create())
            {
                aes.Key = Encoding.UTF8.GetBytes(key);
                aes.IV = iv;
                ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream(buffer))
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader streamReader = new StreamReader((Stream)cryptoStream))
                        {
                            return streamReader.ReadToEnd();
                        }
                    }
                }
            }
        }
```

### Encrypt String With AES256 
```c#
public static string EncryptStringWithAES256(string key, string plainText)
        {
            byte[] iv = new byte[16];
            byte[] array;

            using (Aes aes = Aes.Create())
            {
                aes.Key = Encoding.UTF8.GetBytes(key);
                aes.IV = iv;

                ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter streamWriter = new StreamWriter((Stream)cryptoStream))
                        {
                            streamWriter.Write(plainText);
                        }

                        array = memoryStream.ToArray();
                    }
                }
            }

            return Convert.ToBase64String(array);
        }
```
## Security

 **AES256:** We use AES 256 to encrypt and decrypt to secure the data in the request and response so that even if the data is exposed, it cannot be decrypted without the right key. This is a symmetric encryption technique, which means the same key is used to encrypt and decrypt the data it is also a 2-way encryption algorithm.

<img src="/images/AES_encryption.png" style="zoom: 150%;" />



**HMAC:** We use HMAC to sign the signature to make sure the response is coming from the correct end point. HMAC is also an encryption algorithm but unlike AES it’s a one-way encryption, meaning it isn’t decrypted on the other side. It’s used for verification, for example if we encrypt with HMAC our secret key with a request id and then do the same in the response, we can verify that we have got the response back from the correct endpoint and it has not been tampered with because both hashes will match. HMAC stands for **H**ash based **M**essage **A**uthentication **C**ode and the hash used is SHA256. 

The main difference between the two is that AES we are encrypting and decrypting data, this is fast and secure for large data, with HMAC we use it to simultaneously verify both the data integrity and authenticity of a message.





<img src="/images/Sha256_Hashing.png" style="zoom:67%;" />

After creating the client connector and the datasource, the next step is to look at how the connector can be used.  



























