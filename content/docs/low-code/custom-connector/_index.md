---
title: "Custom Connectors "
linkTitle: "Custom Connector development "
description: Learn about custom connectors, what they are and why they are used
weight: 9
typora-root-url: ..\..\..\..\static
toc_hide: true
hide_summary: true
---
## What are Custom Connectors? 

Kianda provides datasource connectors such as the SQL server and SharePoint. Custom connectors enable you to configure end to end your own connector to suit your needs. 

Custom connectors work in the same way as other Kianda connectors, but with the added benefit of customization.

## What are Custom Connectors used for?

Custom connectors provide the infrastructure to allow the developer to create a custom datasource, it provides hooks for pre and post processing of the query and ability to customize the datasource settings for the connector. 

## Custom Connector VS Datasource

The Kianda platform provides some predefined datasource connectors, such as SharePoint, sql server and SAP, these however cannot be customized for an individual companies needs. 

Custom Connectors provide end to end customization for Datasource Connections. The custom Connector provides the architecture to allow customization pre and post processing of the query. 

Data sources currently require specific parameters for example SharePoint requires selection of the environment and user credentials, but what if there is an extra parameter required? this is where the custom connector can provide an advantage.  





## High-level steps for creating a custom connector

1. Register custom connector and store secret key. [See how to register a connector here ](/docs/low-code/custom-connector/steps-to-create/#register-new-connector)
2. Implement settings UI 
3. Develop remote microservice** with Query, Test and Metadata endpoints [See how to create a microservice here](/docs/low-code/custom-connector/create-microservice/)		 
4. Adjust query code in connector.

**  Remote: using a cloud service such as Azure or AWS

## What's next ![Idea icon](/images/18.png)

To learn how to create a custom connector view the [steps to create a custom connector](/docs/low-code/custom-connector/steps-to-create/).