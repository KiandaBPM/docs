---
title: "Sample code for a microservice"
linkTitle: "Sample code for a microservice"
weight: 9
toc_hide: true
hide_summary: true
typora-root-url: ..\..\..\..\..\static

---
## Sample code

The following sections provide some sample code to help you get started in creating **Test**, **Metadata** and **Query** functions for your Microservice so that you can test and deploy a Custom Connector in Kianda, allowing you to connect forms and use data from any data source. 

### Encryption and Decryption sample code

```C#
        public static string HashWithHMACSHA256(string key, string value)
        {

            using (var hash = new HMACSHA256(Convert.FromBase64String(key)))
            {
                var hashedByte = hash.ComputeHash(Encoding.UTF8.GetBytes(value));
                var hashed = Convert.ToBase64String(hashedByte);
                return hashed;
            }
        }

        public static string AESEncrypt(string key, string plainData, out byte[] iv)
        {
            var _key = Convert.FromBase64String(key);
            using (Aes aes = Aes.Create())
            {
                aes.GenerateIV(); 
                aes.Mode = CipherMode.CBC;
                iv = aes.IV;
                aes.KeySize = 256;
                aes.Key = _key;
                using (var encryptor = aes.CreateEncryptor())
                {
                    using (MemoryStream ms = new MemoryStream())
                    {
                        using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                        {

                            using (StreamWriter sw = new StreamWriter(cs))
                                sw.Write(plainData);
                        }
                        return Convert.ToBase64String(ms.ToArray());
                    }
                }

            }
        }


        public static string AESDecrypt(string key, string encryptedData, byte[] iv)
        {
            var buffer = Convert.FromBase64String(encryptedData);
            var _key = Convert.FromBase64String(key);
            using (Aes aes = Aes.Create())
            {
                aes.KeySize = 256;
                aes.Mode = CipherMode.CBC;
                aes.Key = _key;
                aes.IV = iv;
                using (var decryptor = aes.CreateDecryptor())
                {
                    using (MemoryStream ms = new MemoryStream(buffer))
                    using (CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader sw = new StreamReader(cs))
                            return sw.ReadToEnd();
                    }
                }
            }

        }

        public static string GenerateAESKey()
        {
            using (Aes aes = Aes.Create())
            {
                aes.KeySize = 256;
                aes.GenerateKey();
                return Convert.ToBase64String(aes.Key);
            }
        }

        private static string GetSecretKey()
        {
            return "{secret key generated from Kianda}"; //REPLACE ME
        }
```

To return to Microservice development, click on the [Microservice](/docs/low-code/custom-connector/create-microservice) link.



### Test sample code

```c#
        [FunctionName("connectorTest")]
        public static async Task<CustomConnectorResponse> connectorTest(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)][FromForm] HttpRequest req,
            ILogger log)
        {
            string SECRET_KEY = GetSecretKey(); 
            string signature = string.Empty;
            CustomConnectorResponse response = new CustomConnectorResponse();
            response.queryResult = new QueryResult();
            try
            {
                string testBody = await new StreamReader(req.Body).ReadToEndAsync();
                CustomConnectorRequest data = JsonConvert.DeserializeObject<CustomConnectorRequest>(testBody);
                var settings = JsonConvert.DeserializeObject<JObject>(AESDecrypt(SECRET_KEY, data.encryptedSettingsPropertyBag, data.iv));
                var accessCode = settings["accessCode"];
                var clientID = settings["client_key"];

                JObject tokenRequestObj = new JObject
                {
                    ["grant_type"] = "authorization_code",
                    ["client_id"] = clientID,
                    ["redirect_uri"] = "https://app.kianda.com/index.html",
                    ["code"] = accessCode
                };
                signature = HashWithHMACSHA256(SECRET_KEY, data.requestId);
                byte[] iv;
                var encryptedSettings = JsonConvert.SerializeObject(settings);
                var settingsobj = AESEncrypt(SECRET_KEY, encryptedSettings, out iv); //encrypt the settings
                response.encryptedSettingsPropertyBag = settingsobj;

                response.iv = iv;
                response.signature = signature;
                response.queryResult.success = true;
                response.queryResult.message = "Test completed successfully";
            }
            catch (Exception ex)
            {
                log.LogError(ex.Message);
                CustomConnectorResponse result1 = new CustomConnectorResponse();
                return result1;

            }

            return response;
        }
```

To return to Microservice development, click on the [Microservice](/docs/low-code/custom-connector/create-microservice) link.



### Metadata sample code

```c#
         [FunctionName("connectorMetadata")]
        public static async Task<CustomConnectorResponse> connectorTree(//metadata
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string SECRET_KEY = GetSecretKey();
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            CustomConnectorRequest data = JsonConvert.DeserializeObject<CustomConnectorRequest>(requestBody);
            // Do Request for token and update settings object 
            var settings = JsonConvert.DeserializeObject<JObject>(AESDecrypt(SECRET_KEY, data.encryptedSettingsPropertyBag, data.iv));

            JObject tokenRequestObj = new JObject
            {
                ["grant_type"] = "authorization_code",
                //["client_id"] = clientID,
                ["redirect_uri"] = "https://app.kianda.com/index.html"
                //["code"] = accessCode
            };
            //settings = GetToken(tokenRequestObj, settings);

            //create the Queryresult 
            CustomConnectorResponse result = new CustomConnectorResponse();
            QueryResult resultQuery = new QueryResult();
            result.queryResult = resultQuery;


            //create the return Tree 
            string signature = string.Empty;
            List<JObject> CityFields = new List<JObject> { };
            CityFields.Add(new JObject { ["name"] = "cityName", ["title"] = "City Name", ["text"] = "City Name", ["icon"] = "", ["type"] = "string", ["desc"] = "", });
            CityFields.Add(new JObject { ["name"] = "ISOCode", ["title"] = "ISO Country Code", ["text"] = "ISO Country Code", ["icon"] = "", ["type"] = "string", ["desc"] = "" });
            List<JObject> CountryFields = new List<JObject> { };
            CountryFields.Add(new JObject { ["name"] = "countryName", ["text"] = "Country Name", ["title"] = "Country Name", ["icon"] = "", ["type"] = "string", ["desc"] = "", });
            CountryFields.Add(new JObject { ["name"] = "ISOCode", ["text"] = "ISO Country Code", ["title"] = "ISO Country Code", ["icon"] = "", ["type"] = "string", ["desc"] = "" });

            List<JObject> nodes = new List<JObject> { };
            nodes.Add(new JObject { ["name"] = "Countries", ["text"] = "Countries", ["icon"] = "fa fa-globe", ["type"] = "STRUCTURE", ["nodes"] = new JArray { CountryFields }, ["fields"] = new JArray { CountryFields }, ["selectable"] = true });
            nodes.Add(new JObject { ["name"] = "Cities", ["text"] = "Cities", ["icon"] = "fa fa-globe", ["type"] = "STRUCTURE", ["nodes"] = new JArray { CityFields }, ["fields"] = new JArray { CityFields }, ["selectable"] = true });

            //create the tree root to be returned
            List<JObject> root = new List<JObject> { };
            root.Add(new JObject
            {
                ["text"] = "Countries and Cities",
                ["name"] = "CountriesAndCities",
                ["icon"] = "fa fa-database",
                ["selectable"] = false,
                ["nodes"] = new JArray { nodes }

            });

            try
            {
                result.queryResult.items = root;
                result.signature = HashWithHMACSHA256(SECRET_KEY, data.requestId);
                result.queryResult.success = true;
                result.queryResult.message = "Metadata Action Completed";
                byte[] iv;
                var encryptedSettings = JsonConvert.SerializeObject(settings);
                var settingsobj = AESEncrypt(SECRET_KEY, encryptedSettings, out iv); //encrypt the settings
                result.iv = iv;
                result.encryptedSettingsPropertyBag = settingsobj;
            }
            catch (Exception ex)
            {
                CustomConnectorResponse resultExc = new CustomConnectorResponse();
                QueryResult resultQueryExc = new QueryResult();
                result.queryResult = resultQuery;
                resultExc.queryResult.success = false;
                resultExc.queryResult.message = "Exception occured; " + ex.Message;
                resultExc.signature = signature;
                return resultExc;
            }

            return result;
        }
```

To return to Microservice development, click on the [Microservice](/docs/low-code/custom-connector/create-microservice) link.



### Query sample code

```C#
    [FunctionName("connectorQuery")]
    public static async Task<CustomConnectorResponse> connectorQuery(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        string SECRET_KEY = GetSecretKey();
        CustomConnectorResponse result = new CustomConnectorResponse();
        QueryResult resultQuery = new QueryResult();
        result.queryResult = resultQuery;
        string signature = string.Empty;
        var myresponsestring = string.Empty;
        try
        {
            string testBody = await new StreamReader(req.Body).ReadToEndAsync();
            CustomConnectorRequest data = JsonConvert.DeserializeObject<CustomConnectorRequest>(testBody);
            Query query = data.query;
            var settings = JsonConvert.DeserializeObject<JObject>(AESDecrypt(SECRET_KEY, data.encryptedSettingsPropertyBag, data.iv));

            //demo object list creation

            result.queryResult.items = new List<JObject>();

            if (query.info.Value<string>("text") == "Countries")
            {
                List<JObject> CountriesList = new List<JObject>();
                var country1 = new JObject { ["countryName"] = "England", ["ISOCode"] = 123 };
                var country2 = new JObject { ["countryName"] = "Ireland", ["ISOCode"] = 124 };
                CountriesList.Add(country1);
                CountriesList.Add(country2);

                result.queryResult.items = CountriesList;
            }
            else
            {
                List<JObject> CitysList = new List<JObject>(); //create a list of jobjects 
                var city1 = new JObject { ["countryName"] = "England", ["cityName"] = "London" };
                var city2 = new JObject { ["countryName"] = "England", ["cityName"] = "Liverpool" };
                var city3 = new JObject { ["countryName"] = "Ireland", ["cityName"] = "Dublin" };
                var city4 = new JObject { ["countryName"] = "Ireland", ["cityName"] = "Cork" };
                CitysList.Add(city1);
                CitysList.Add(city2);
                CitysList.Add(city3);
                CitysList.Add(city4);

                //check for conditions then return accordingly
                if (query != null && !string.IsNullOrEmpty(query.filter))
                {
                    //filtering the city list depending on the filter 
                    var j = CitysList.Where(x => x.GetValue("countryName").Value<string>() == query.filter).ToList();
                    result.queryResult.items = j;
                }
                else
                {
                    // if no filter return the full list of citys
                    result.queryResult.items = CitysList;
                }
            }
            byte[] iv;
            var settingsobj = AESEncrypt(SECRET_KEY, JsonConvert.SerializeObject(settings), out iv); //encrypt the settings
            result.iv = iv;
            result.encryptedSettingsPropertyBag = settingsobj;
            result.signature = HashWithHMACSHA256(SECRET_KEY, data.requestId);
            result.queryResult.success = true;

        }
        catch (Exception ex)
        {
            CustomConnectorResponse resultExc = new CustomConnectorResponse();
            QueryResult resultQueryExc = new QueryResult();
            resultExc.queryResult.success = false;
            resultExc.queryResult.message = "Exception occured; " + ex.Message;
            resultExc.signature = signature;
            return resultExc;
        }

        return result;
    }
```


To return to Microservice development, click on the [Microservice](/docs/low-code/custom-connector/create-microservice) link.




## What's next ![Idea icon](/images/18.png)

To learn how to create a custom connector view the [steps to create a custom connector](/docs/low-code/custom-connector/steps-to-create/).