---
title: "How to create a client connector"
linkTitle: "How to create"
weight: 1
typora-root-url: ..\..\..\..\static
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

   <img src="/images/settings-ui-tab.png" style="zoom:200%"/>

A quick runthrough of what this code does, 

lines 1-4 is a Client Key field

lines 6-9 is a list of radio buttons for environment selection, the options are demo and live

lines 12-29 is a button for authorizing the user of the datasource

below is the output on the datasource settings

 <img src="/images/Connector-datasource-created.png" style="zoom:50%; border:1px solid black"/>



#### Query Code 

The following screenshot shows the query code that comes as default when the connector is created

<img src="/images/connector-query-code.png" style="border:1px solid black"/>

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

  

## Microservice Development

### Requirements

The microservice requires 3 functions to be implemented.

1. Metadata
2. Query
3.  Test

Each function will receive a clientConnectorRequest payload.

The following is an example request to the Test function, the test function does not require a query.

The encrypted settings property bag will be an object containing the datasource settings, settings would include the client key, and the environment settings. 

```json
{
    "subscriptionId":"322f14a6-63a0-4c68-b53e-4ca041c0e9ae",
    "userId":"5650d471-8c41-49b6-8f72-b77dddf3b956",
    "requestId":"9b26abcf-fddb-485b-9600-5505ff5d8256",
    "action":"select",
    "encryptedSettingsPropertyBag":null,
    "Query":null
}
```

The an example of the query property would like this.

Since the settings property bag is encrypted and is sent with every request, a decryption function is provided below in C#

```c#
public static string DecryptStringWithAES256(string key, string cipherText)
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





### Up Next  

After creating the client connector and the datasource, the next step is to look at how the connector can be used.  



























