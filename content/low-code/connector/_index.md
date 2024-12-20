---
title: "Custom Connector Development"
linkTitle: "Connector development"
description: Learn about custom connectors, what they are and why they are used
weight: 13

typora-root-url: ..\..\..\..\static
---
## What are Custom Connectors? 

Kianda provides predefined datasource connectors such as the SQL server and SharePoint to allow you to connect your processes to particular data sources. A complete list of these predefined datasources is available at [Data connectors](/platform/connectors/). In addition to these predefined connectors, you can also create **Custom connectors** to enable you to configure your own connector to suit your needs. 

Connectors in Kianda rely on a secure **micro-service architecture** that  uses HMAC 256 to allow the configuration and connection to data sources.

Custom connectors work in the same way as other Kianda connectors, but with the added benefit of customisation.

The key components for a connector are:

1. Backend micro-service to handle the actual connection to data sources
2. Front-end data source configuration component (Handlebars + JavaScript)
3. Security Keys (ClientID + Secret Key)

## What are Custom Connectors used for?

Custom connectors provide the infrastructure to allow developers to create a custom datasource, it provides hooks for pre- and post-processing of the query and the ability to customise the datasource settings for the connector. 

## Custom Connector VS Datasource

As previously mentioned, the Kianda platform provides a list of predefined datasource connectors, such as SharePoint, SQL server and SAP. These however cannot be customized for an individual companies needs. 

Custom Connectors provide end-to-end customisation for datasource connections. The Custom Connector provides the architecture to allow customisation of pre- and post-processing of database queries. 

For example when using a SharePoint data source you can use parameters for example selection of the environment and user credentials, but if you needed extra parameter, you could use the custom connector to provide this ability.  

## How to get started

There are three key steps that need to be implemented in order to create and use a customised connector as follows:

1. Microservice - create a **microservice** that will implement metadata, query and test functions. <!-- click on the [Microservice](/low-code/connector/create-microservice/) link to get further details. -->

2. Use Kianda features to create and test your customised connector - use **Developer** to register a new connector<!-- [register a new connector](/low-code/connector/steps-to-create/#register-a-new-connector) --> and use **Data sources** to <!-- [create a datasource](/platform/connectors/#registering-a-datasource) --> create a datasource for the newly customised connector. Both of these features are available under **[Administration](/platform/administration/)**

3. Process - use the custom connector to bring data into a process and use the **query hook** to filter the data. Use Kianda **Designer** to connect your data source to Kianda forms, for example a List control can connect to a datasource, see step 9 in [List control](/platform/controls/input/list/#how-to-get-started).

## What's next ![Idea icon](/images/18.png)

To create a test service, follow the 3 steps above, or if you have already created a microservice go straight to [steps to create a custom connector](/low-code/connector/steps-to-create/) to learn how to create a custom connector.