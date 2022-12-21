---
title: "Custom Connectors"
linkTitle: "Custom Connector development"
description: Learn about custom connectors, what they are and why they are used
weight: 9
typora-root-url: ..\..\..\..\static
toc_hide: true
hide_summary: true
---
## What are Custom Connectors? 

Kianda provides predefined datasource connectors such as the SQL server and SharePoint to allow you to connect your Kianda forms to particular data sources. A complete list of these predefined datasources is available at [Data connectors](/docs/platform/connectors/). In addition to these predefined connectors, you can also create **Custom connectors** to enable you to configure your own connector to suit your needs. 

Custom connectors work in the same way as other Kianda connectors, but with the added benefit of customisation.

## What are Custom Connectors used for?

Custom connectors provide the infrastructure to allow developers to create a custom datasource, it provides hooks for pre- and post-processing of the query and the ability to customise the datasource settings for the connector. 

## Custom Connector VS Datasource

As previously mentioned, the Kianda platform provides a list of predefined datasource connectors, such as SharePoint, SQL server and SAP. These however cannot be customized for an individual companies needs. 

Custom Connectors provide end-to-end customisation for Datasource Connections. The custom Connector provides the architecture to allow customization pre and post processing of the query. 

Data sources currently require specific parameters for example SharePoint requires selection of the environment and user credentials, but what if there is an extra parameter required? this is where the custom connector can provide an advantage.  





## High-level steps for creating a custom connector

1. Register custom connector and store secret key. [See how to register a connector here ](/docs/low-code/custom-connector/steps-to-create/#register-new-connector)
2. Implement settings UI 
3. Develop remote microservice** with Query, Test and Metadata endpoints [See how to create a microservice here](/docs/low-code/custom-connector/create-microservice/)		 
4. Adjust query code in connector.

**  Remote: using a cloud service such as Azure or AWS

## What's next ![Idea icon](/images/18.png)

To learn how to create a custom connector view the [steps to create a custom connector](/docs/low-code/custom-connector/steps-to-create/).