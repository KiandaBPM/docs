---
title: "How to use the client connector"
linkTitle: "Using the Client Connector"
weight: 2
typora-root-url: ..\..\..\..\static
toc_hide: true
hide_summary: true
---

# Introduction 
The new client connector is designed to allow users to create custom datasources to meet business requirements, and allow more flexibility by providing an editor to edit the ui and javascript for the connector

## Settings page

<img src="/images/ConnectorTabsScreen.png" style="zoom:100%;border:2px solid black" />

#### Query.js

The query hook gets datasource,query rule and process as parameters, below is an outline in json of what to expect for each of these, 
the developer can use any of the parameters to alter the query going to the microservice.



**datasource**

```json
{
"title": "GeoConnector",
"type": "client",
"typeIcon": "http://localhost:4171/public-file/322f14a6-63a0-4c68-b53e-4ca041c0e9ae/Geo-Connector-Icon.png",
"typeTitle": "GeoConnector",
"candelete": false,
"readOnly": false,
"status": "ready",
"useConnector": false,
"connectorId": "",
"clientConnectorId": "74f7f976-b9d9-42ae-bfe2-c7731e9f1a58",
"settings": {},
 "modified": "2022-09-08T16:18:58.263Z",
"enableB2B": true,
"enableB2BDefaultQuery": false,
"b2bMappings": []
}
```

**query**
	
```json
{ 
"action": "select",
  "info": {
    "text": "Get Countries",
    "name": "Get Countries",
    "type": "STRUCTURE",
    "filter": ""
  },
  "fields": [
    "Country",
    "Country"
  ],
  "filter": "",
  "filterBy": "Country",
  "filterMode": "startswith",
  "rowLimit": 50,
  "orderBy": "",
  "orderAscending": true
}
```

**rule**
```json
	{
   		"title": "Countries",
    	"name": "countries",
     	"help": null,
      	"type": "fields/field-list",
      	"text": "",
      	"value": "",
     	"showTitle": true,
     	"visible": true,
      	"enabled": true,
     	"submitOffline": false,
     	"required": false,
     	"settings": {
       	"listsource": "datasource",
       	"displayformat": "multiselect",
       	"choices": "Choice 1\\nChoice 2\\nChoice 3",
       	"filterMode": "startswith",
       	"nativeMobile": "no",
       	"offlineCache": "no",
       	"list": {
          	"text": "Get Countries",
        	"name": "Get Countries",
         	"type": "STRUCTURE",
         	"filter": ""
        	},
        	"displayField": "Country",
        	"valueField": "Country",
        	"sortBy": "",
        	"sortByDir": "asc"
      	},
      	"class": null,
      	"usersValue": [],
      	"parentField": null,
      	"parentForm": "2229c95f-8834-432b-8c70-a2eb3d895e80",
   		"datasource": "0604527b-5bbd-4af6-955e-47929cc569b1"
    	}
```
**process**

```json
{
  "processVersion": "2.0",
  "processName": "countries-and-cities",
  "isCreated": false,
  "isOfflineCreated": false,
  "isOfflineUpdated": false,
  "uniqueID": "d6a00acb-41a2-4109-9b7a-66584dbf0559",
  "title": "Countries and cities",
  "type": "Process",
  "name": "countries-and-cities",
  "desc": "",
  "version": "1.0",
  "modified": "2022-09-19T15:05:50.251Z",
  "created": "2022-09-05T10:20:54.786Z",
  "status": "form 1",
  "securityMode": null,
  "enableSecurity": false,
  "deleted": false,
  "rejected": false,
  "completed": false,
  "settings": {
    "keepRuleExecutionOrder": "yes",
    "buttonDisplayFlag": true,
    "onload": "default",
    "hideTabs": "no",
    "hideNav": "no",
    "enableAnonymous": "no",
    "mobileNav": "no",
    "deleteMode": "any",
    "notifyUser": "yes",
    "preventUnsavedNav": "no",
    "selectedTabtheme": "bg-default",
    "completedTabtheme": "bg-default",
    "comments": "",
    "offline-tag": "d6a00acb-41a2-4109-9b7a-66584dbf0559"
  },
  "partnerId": null,
  "instanceIDFormat": "default",
  "customInstanceIDFormat": null,
  "isPartner": false,
  "isDraft": false,
  "publish": false,
  "allowNew": false,
  "visMode": null,
  "group": null,
  "fieldsUpdated": "2022-09-19T15:05:51.267Z",
  "modifiedBy": null,
  "createdBy": null,
  "currentForm": "2229c95f-8834-432b-8c70-a2eb3d895e80",
  "partner": null,
  "owners": []
}
```

{{< swaggerui src="/swagger/connectorAPI.yaml" >}}