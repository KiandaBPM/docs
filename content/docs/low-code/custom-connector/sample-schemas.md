---
title: "Sample schemas"
linkTitle: "Sample schemas"
weight: 2
typora-root-url: ..\..\..\..\static
---

# Introduction 
This page features sample schemas for parameters used in the [Query Code](/docs/low-code/client-connector/how-to-create/#query-code) tab when creating a customised data connector. 

Each section below features exemplar schemas and parameters to help you when creating code for your hooks in the **Query Code** tab.



## Metadata hook related schemas

The **Metadata hook** in the [Query Code](/docs/low-code/client-connector/how-to-create/#query-code) tab typically looks like the following, using two parameters: `tree` and `datasource`.

```handlebars
metaData(tree, datasource) {
    return tree;
  }
```

Sample schemas for [`tree`](#tree-schema) and [`datasource`](#datasource-schema) are available by clicking on the links.

### Tree schema


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

To return to Microservice development, click on the [Microservice](/docs/low-code/custom-connector/create-microservice) link.

### Datasource schema 

**Note**: The same structure below can be used used in both **Query hooks** and **Query success hooks**, although data will vary slightly.

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



## Query hook related schemas

The **Query hook** in the [Query Code](/docs/low-code/client-connector/how-to-create/#query-code) tab typically looks like the following, using four parameters: `datasource, query`, `rule`  and `process`.

```javascript
 query(datasource, query, rule, process) {
     return query;
  }
```

Sample schemas each are available by clicking on the relevant links: [`datasource`](#datasource-schema), [`query`](#query-schema),  [`rule`](#rule-schema),  and [`process`](#-process-schema) are available by clicking on the links.

### Query schema

```json
{
   "action": "select",
   "info": {
      "text": "Cities",
      "name": "Cities",
      "type": "item"
   },
   "rowLimit": 100,
   "conditions": [
      {
         "group": "and",
         "conditions": [
            {
               "id": "b3fe6a0b-c455-4560-abde-b5b7291d1ca8",
               "operator": "eq",
               "arg1": {
                  "name": "countryName",
                  "text": "Country Name",
                  "title": "Country Name",
                  "icon": "",
                  "type": "string",
                  "desc": ""
               },
               "arg2": {
                  "text": "Name",
                  "name": "name",
                  "type": "field",
                  "id": "07b1e8ab-9260-478c-a3e2-487aa0ee56f8",
                  "fieldType": "fields/field-textbox",
                  "date1": null,
                  "date2": null,
                  "value": "London"
               },
               "group": "and"
            }
         ],
         "id": "b6597e4d-60f1-44da-863a-e15287f72f1a"
      }
   ],
   "orderAscending": false
}
```

### Rule schema 

**Note**: This is similar to the `rule` used in the **Query success hook**.

The following sample rule schema is for a find-items rule which maps the response from the connector query to a table, notice the inputmapping and output mapping.

```json
{
  "title": "Find items 3",
  "action": "rules/rule-finditems",
  "originalId": "5e6d1abc-1c5f-471c-b1f2-4bc038d7aefd",
  "enabled": true,
  "schedule": "default",
  "settings": {
    "inputMapping": [
      {
        "lefterror": "has-error",
        "righterror": "has-error"
      }
    ],
    "outputMapping": [
      {
        "left": {
          "text": "Country Name",
          "name": "country-name",
          "id": "6070ad52-7e4e-4a96-aa6b-320266644d93",
          "type": "field",
          "fieldType": "fields/field-textbox",
          "selectable": true,
          "icon": "fa fa-text-height"
        },
        "right": {
          "text": "Country Name",
          "name": "countryName",
          "type": "datafield"
        },
        "lefterror": "",
        "righterror": ""
      },
      {
        "left": {
          "text": "ISO Country Code",
          "name": "ISOCode",
          "id": "c2246c9a-af60-4fd0-9ac6-3195c456d3ff",
          "type": "field",
          "fieldType": "fields/field-textbox",
          "selectable": true,
          "icon": "fa fa-text-height"
        },
        "right": {
          "text": "ISO Country Code",
          "name": "ISOCode",
          "type": "datafield"
        },
        "lefterror": "",
        "righterror": ""
      }
    ],
    "errorMapping": [],
    "rowLimit": 100,
    "list": {
      "text": "Countries",
      "name": "Countries",
      "type": "item"
    },
    "mapToTable": "yes",
    "offlineCache": "no",
    "overrideTable": "yes",
    "serverPaging": "no",
    "table": {
      "text": "Table 1",
      "name": "form1-f4",
      "id": "7746f138-a913-4438-ba65-4905d8453d57",
      "type": "field",
      "fieldType": "fields/field-table",
      "selectable": true,
      "icon": "fa fa-table",
      "nodes": [],
      "visible": true,
      "rows": [
        {
          "text": "row1",
          "name": "form1-f4-row1",
          "id": "219e1d44-a997-4f76-b815-f409fdcb4774",
          "type": "field",
          "fieldType": "fields/table-row",
          "selectable": false,
          "nodes": [
            {
              "text": "Country Name",
              "name": "country-name",
              "id": "6070ad52-7e4e-4a96-aa6b-320266644d93",
              "type": "field",
              "fieldType": "fields/field-textbox",
              "selectable": true,
              "icon": "fa fa-text-height"
            },
            {
              "text": "ISO Country Code",
              "name": "ISOCode",
              "id": "c2246c9a-af60-4fd0-9ac6-3195c456d3ff",
              "type": "field",
              "fieldType": "fields/field-textbox",
              "selectable": true,
              "icon": "fa fa-text-height"
            }
          ],
          "visible": true,
          "state": {
            "expanded": true
          }
        }
      ]
    },
    "lastExecuted": "2022-12-14T17:29:42.425Z"
  },
  "elseSettings": {},
  "hasElse": false
}
```

### Process schema 

**Note**: This is similar to the `process` used in the **Query success hook**.

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



## Query success hook related schemas

The **Query success hook** in the [Query Code](/docs/low-code/client-connector/how-to-create/#query-code) tab typically looks like the following, using four parameters: `datasource, result`, `rule`  and `process`.

```c#
 querySuccess(datasource,result,rule,process) {
    // this.get("dataservice").mapSuccess(result,rule,process); //uncomment to use default mapping behaviour
   return result;
  }
```

Sample schemas each are available by clicking on the relevant links: [`datasource`](#datasource-schema), [`result`](#result-schema),  [`rule`](#rule-schema),  and [`process`](#-process-schema) are available by clicking on the links.

#### Result schema

```json
{
    "success": true,
    "items": [
        {
            "countryName": "England",
            "ISOCode": 123
        },
        {
            "countryName": "Ireland",
            "ISOCode": 124
        }
    ]
}
```



### What's next  ![Idea icon](/images/18.png) ###

To discover how to use your customised data connector widget in Kianda process design, go to [Kianda application designer](/docs/platform/application-designer/). 

To create other widgets go to [Custom field widget](/docs/low-code/field-widget/), [Custom dashboard widget](/docs/low-code/dashboard-widget/) and [Custom rule widget](/docs/low-code/rule-widget/) pages to find out more.




### **To return to the previous pages click on the links below**  ![Idea icon](/images/10.png) 

- [How to create a client connector](/docs/low-code/custom-connector/steps-to-create)  
- [Create a microservice](/docs/low-code/custom-connector/create-microservice/)  

