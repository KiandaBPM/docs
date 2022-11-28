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

This sample tree schema is based on the github repository documentation [Bootstrap Tree View package](https://github.com/jonmiles/bootstrap-treeview#bootstrap-tree-view). Click on the link for more details on hierarchical tree structures.

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
    if(query.conditions)
    {
      query.filter = query.conditions[0].conditions[0].arg2.value;
    }
    return query;
  }
```

Sample schemas each are available by clicking on the relevant links: [`datasource`](#datasource-schema), [`query`](#query-schema),  [`rule`](#rule-schema),  and [`process`](#-process-schema) are available by clicking on the links.

### Query schema

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

### Rule schema 

**Note**: This is similar to the `rule` used in the **Query success hook**.

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



### What's next  ![Idea icon](/images/18.png) ###

To discover how to use your customised data connector widget in Kianda process design, go to [Kianda application designer](/docs/platform/application-designer/). 

To create other widgets go to [Custom field widget](/docs/low-code/field-widget/), [Custom dashboard widget](/docs/low-code/dashboard-widget/) and [Custom rule widget](/docs/low-code/rule-widget/) pages to find out more.




### **To return to the previous pages click on the links below**  ![Idea icon](/images/10.png) 

- [How to create a client connector](/docs/low-code/client-connector/how-to-create/)  
- [Create a microservice](/docs/low-code/client-connector/create-microservice/)  

