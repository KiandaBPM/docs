---
title: "Creating a microservice"
linkTitle: "Creating a microservice"
weight: 2
typora-root-url: ..\..\..\..\static
toc_hide: true
hide_summary: true
---

# Introduction 
## Create a microservice

Note that a microservice can be created in any programming language, the examples below are in c#, more languages will be added soon. 

### Requirements

The microservice should implement the following 3 functions.

1. Test
2. MetaData
3. Query

### Test 

The test function authenticates the user making the request and creates a token for any further requests to the datasource. 

The steps for the test function are as follows

1. Get the data from the [client connector request](#clientconnectorrequest) 

2. Decrypt the encrypted settings property bag using your secret key and the [Decrypt function](#decrypt-string-with-aes256)

3. Authorize the user and create bearer token using oauth for example

4. Add the oauth token to the settings property bag and [encrypt](#encrypt-string-with-aes256) using your secret key.

5. Create [client connector response](#clientconnectorresponse) and include success message to indicate test succeeded/failed.

6. Sign the response using the  [EncryptdatawithHMACSHA256 function](#encrypt-data-with-hmacsha256) and include in the client connector response. 

   Below shows an example connector test function from the Kianda demo microservice

```c#
 		[FunctionName("connectorTest")]
        public static async Task<ClientConnectorResponse> connectorTest(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] [FromForm]HttpRequest req,
            ILogger log)
        {
            // { SubscriptionID, UserID, RequestID, Action, EncryptedSettingsPropertyBag, RequestObject}

            string signature = string.Empty;
            ClientConnectorResponse result = new ClientConnectorResponse();
            result.queryResult = new QueryResult();
            try
            {
                string testBody = await new StreamReader(req.Body).ReadToEndAsync();
                ClientConnectorRequest data = JsonConvert.DeserializeObject<ClientConnectorRequest>(testBody);
                var settings = JsonConvert.DeserializeObject<JObject>(DecryptStringWithAES256(SECRET_KEY, data.encryptedSettingsPropertyBag));
                var accessCode = settings["accessCode"];                 
                var clientID = settings["client_key"];
                JObject tokenRequestObj = new JObject
                {
                    ["grant_type"] = "authorization_code",
                    ["client_id"] = clientID,
                    ["redirect_uri"] = "https://app.kianda.com/index.html",
                    ["code"] = accessCode
                };
                settings = GetToken(tokenRequestObj, settings); //This is an example function that makes a request to oauth

                signature = EncryptDataWithHMACSHA256(SECRET_KEY, data.requestId); //sign using the secret key and requestid 
                var settingsobj = EncryptStringWithAES256(SECRET_KEY, JsonConvert.SerializeObject(settings)); //encrypt the settings
                result.encryptedSettingsPropertyBag = settingsobj;
                result.queryResult.signature = signature;
                result.queryResult.success = true;
                result.queryResult.message = "Test completed successfully";
            }
            catch (Exception ex) //dont forget to catch any exceptions and send them back with success false
            {
                log.LogError(ex.Message);
                ClientConnectorResponse result1 = new ClientConnectorResponse();
                result1.queryResult.success = false;
                result1.queryResult.signature=signature;
                result.queryResult.message = "Test has failed";
                return result1;
            }

            return result;
        }

```

### Metadata 

The metadata function provides the list of available endpoints in the microservice and is called when selecting the datasource in a kianda process.

The steps for the metadata function are as follows:

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

The Query function is where the . 

The steps for the query function are as follows

1. Get the data from the [client connector request](#clientconnectorrequest) 

2. Decrypt the encrypted settings property bag using your secret key and the [Decrypt function](#decrypt-string-with-aes256)

3. Get the [query object](#query-1) from the request and call the function related to the query in the datasource. 

4. Create [client connector response](#clientconnectorresponse) and include success message to indicate query succeeded/failed.

5. Create the [query result](#queryresult) object and include in the response

6. Sign the response using the  [EncryptdatawithHMACSHA256 function](#encrypt-data-with-hmacsha256) and include in the client connector response. 

Below is a code sample of the connector query function, it includes a check for filters sent from the query and a response.

This is just sample code and a fully featured connector would include sperate functions where the query would be executed and return a response.

A user can query this function for the list of countries, list of cities or pass a filter value which will return a list of cities for a specific country.

```c#
        [FunctionName("connectorQuery")]
        public static async Task<ClientConnectorResponse> connectorQuery(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            ClientConnectorResponse result = new ClientConnectorResponse();
            QueryResult resultQuery = new QueryResult();
            result.queryResult = resultQuery;
            string signature = string.Empty;
            var myresponsestring = string.Empty;
            try
            {
                string testBody = await new StreamReader(req.Body).ReadToEndAsync();
                ClientConnectorRequest data = JsonConvert.DeserializeObject<ClientConnectorRequest>(testBody);
                Query query = data.query;
                var settings = JsonConvert.DeserializeObject<JObject>(DecryptStringWithAES256(SECRET_KEY, data.encryptedSettingsPropertyBag));
                //demo object list creation
                result.queryResult.items = new List<JObject>();
                if (query.info.Value<string>("text") == "Get Countries")
                {
                    List<JObject> CountriesList = new List<JObject>();
                    var country1 = new JObject { ["Country"] = "England" };
                    var country2 = new JObject { ["Country"] = "Ireland" };
                    CountriesList.Add(country1);
                    CountriesList.Add(country2);
                    result.queryResult.items = CountriesList;
                }
                else
                {
                    List<JObject> CitysList = new List<JObject>(); //create a list of jobjects 
                    var city1 = new JObject { ["Country"] = "England", ["City"] = "London" };
                    var city2 = new JObject { ["Country"] = "England", ["City"] = "Liverpool" };
                    var city3 = new JObject { ["Country"] = "Ireland", ["City"] = "Dublin" };
                    var city4 = new JObject { ["Country"] = "Ireland", ["City"] = "Cork" };
                    CitysList.Add(city1);
                    CitysList.Add(city2);
                    CitysList.Add(city3);
                    CitysList.Add(city4);

                    //check for conditions then return accordingly
                    if (query != null && !string.IsNullOrEmpty(query.filter))
                    {
                        //filtering the city list depending on the filter 
                        var j = CitysList.Where(x => x.GetValue("Country").Value<string>() == query.filter).ToList();
                        result.queryResult.items = j;
                    }
                    else
                    {
                        // if no filter return the full list of citys
                        result.queryResult.items = CitysList;
                    }
                }

                var settingsobj = EncryptStringWithAES256(SECRET_KEY, JsonConvert.SerializeObject(settings)); //encrypt the settings
                result.encryptedSettingsPropertyBag = settingsobj;
                result.signature = EncryptDataWithHMACSHA256(SECRET_KEY, data.requestId);
                result.queryResult.success = true;

            }
            catch (Exception ex)
            {
                ClientConnectorResponse resultExc = new ClientConnectorResponse();
                QueryResult resultQueryExc = new QueryResult();
                resultExc.queryResult.success = false;
                resultExc.queryResult.message = "Exception occured; " + ex.Message;
                resultExc.signature = signature;
                return resultExc;
            }

            return result;
        }
```




## Schemas

#### ClientConnectorRequest

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

#### Query

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

#### ClientConnectorResponse

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

#### QueryResult

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



## Sample schemas

### Related to metaData hook

#### Tree schema

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


#### Datasource schema 

same structure used in both query and query success data will vary slightly

```json
{
  "id": "2fe2d2c7-4feb-4c92-ac4c-fed4623d2d6e",
  "title": "Demo Connector",
  "type": "client",
  "typeIcon": "http://localhost:4171/public-file/322f14a6-63a0-4c68-b53e-4ca041c0e9ae/Geo-Connector-Icon.png",
  "typeTitle": "Demo Connector",
  "candelete": false,
  "readOnly": false,
  "status": "ready",
  "useConnector": false,
  "connectorId": "",
  "clientConnectorId": "19275478-68a9-43be-b8fb-54dc310cc0d6",
  "settings": {},
  "modified": "2022-11-11T15:12:44.173Z",
  "enableB2B": true,
  "enableFiltering": false,
  "b2bMappings": [],
  "modifiedBy": "5650d471-8c41-49b6-8f72-b77dddf3b956",
  "admins": [],
  "allowedUsers": [],
  "exclusionUsers": []
}
```


### Related to query hook

#### Query schema

```json
{
  "action": "select",
  "info": {
    "text": "Get Countries",
    "name": "Get Countries",
    "type": "STRUCTURE",
    "filter": "England"
  },
  "fields": [
    "Country",
    "Country"
  ],
  "filter": "England",
  "filterBy": "Country",
  "filterMode": "startswith",
  "rowLimit": 50,
  "orderAscending": false
}
```

#### Rule schema 

Will be similar in the query success hook

```json
{
  "title": "Country Selection",
  "name": "countriesSelect",
  "help": null,
  "type": "fields/field-list",
  "text": "England",
  "value": "England",
  "showTitle": true,
  "visible": true,
  "enabled": true,
  "submitOffline": false,
  "required": false,
  "settings": {
    "listsource": "datasource",
    "displayformat": "dropdownlist",
    "choices": "Choice 1\nChoice 2\nChoice 3",
    "filterMode": "startswith",
    "nativeMobile": "no",
    "offlineCache": "no",
    "list": {
      "text": "Get Countries",
      "name": "Get Countries",
      "type": "STRUCTURE",
      "filter": "England"
    },
    "valueField": "Country",
    "displayField": "Country"
  },
  "class": null,
  "customCssClass": null,
  "usersValue": [],
  "parentField": null,
  "parentForm": "5af0c34e-28ea-4404-bba3-a8cf2df8eaff",
  "datasource": "2fe2d2c7-4feb-4c92-ac4c-fed4623d2d6e"
}
```

#### Process schema 

Will be similar in the query success hook

```json
{
  "processVersion": "1.1",
  "processName": "connector-example",
  "isCreated": false,
  "isOfflineCreated": false,
  "isOfflineUpdated": false,
  "uniqueID": "45758d2b-f713-44c9-81dc-0e4cb7618902",
  "title": "connector example",
  "type": "Process",
  "name": "connector-example",
  "desc": "",
  "version": "1.0",
  "modified": "2022-11-14T09:33:46.254Z",
  "created": "2022-11-11T15:13:28.108Z",
  "status": "form 1",
  "securityMode": null,
  "enableSecurity": false,
  "deleted": false,
  "rejected": false,
  "completed": false,
  "settings": {
    "keepRuleExecutionOrder": "yes",
    "buttonDisplayFlag": true,
    "mobileNav": "yes",
    "comments": "",
    "offline-tag": "45758d2b-f713-44c9-81dc-0e4cb7618902"
  },
  "partnerId": null,
  "instanceIDFormat": null,
  "customInstanceIDFormat": null,
  "isPartner": false,
  "isDraft": true,
  "publish": false,
  "allowNew": false,
  "visMode": null,
  "group": null,
  "fieldsUpdated": null,
  "modifiedBy": null,
  "createdBy": null,
  "currentForm": "5af0c34e-28ea-4404-bba3-a8cf2df8eaff",
  "partner": null
}
```

### Related to query success hook 

#### Datasource schema

#### Result schema

```json
{
  "success": true,
  "items": [
    {
      "Country": "England"
    },
    {
      "Country": "Ireland"
    }
  ],
  "meta": {
    "cache-control": "no-cache,no-cache, no-store",
    "content-length": "173",
    "content-type": "application/json; charset=utf-8",
    "expires": "-1,-1",
    "pragma": "no-cache,no-cache"
  }
}
```











