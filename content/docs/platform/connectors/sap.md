---
title: "SAP connector"
weight: 16
typora-root-url: ..\..\..\..\static
---

One of the datasources available in Kianda is a **SAP** datasource. SAP is an enterprise resource planning software which allows you centralises data between all areas of your business and manage them in one SAP system. 

Data in the SAP system are represented with schemas and tables. Each **schema** represents an **area** of your business and **tables** represent **data** within that business area. Using SAP as your datasource, you can perform Create, Read, Update and Delete (**CRUD**) operations on **tables** within your schema using the [**Data rules**](/docs/platform/rules/data/) provided in the Kianda platform. When using the SAP connector, keep in mind that you can perform CRUD operations on data within a **tables** of the schema, but you **cannot** perform CRUD operations on **tables themselves**, this mean are unable to **create** or **delete** tables. 

SAP connector also has the ability to use Business Application Programming Interface (**BAPI**) functions through Kianda. This allows you to perform particular business tasks in your SAP system.

## When to use

You can use the SAP connector when you want **access** or **modify** data within a **table** in your SAP schema. You can connect the SAP connector to a **List** field as its datasource, meaning you can access information from a table and display the information that is stored in the table. For example if your SAP system contains a schema called **HR** and within, tables such as **Employees**, **Departments** and **Jobs**. You will be able to connect the list field to one of those tables giving you CRUD access to its data. 

Take a table **Employees** as an example, if this employee table contains data about the employees in your company such as name, phone number, email address and home address. You can **create** a new employee by providing necessary information, you can **read** (display) employee data, **update** employees information for example when a home address has changed. You can also **delete** an employee from the table. Those are the CRUD operations you can perform on SAP system through a process within Kianda. 

## Before getting started

When establishing a connection using SAP data connector, you are creating a connection with a **Schema** from you SAP system. Before continuing make sure that your SAP system has a **schema** you can connect to. 

You also need to create a Kianda Cloud Connect connection with your device which will be used in the settings when filling out the SAP connector settings. To learn how to create a connection with you device using Kianda Cloud Connect, visit [Kianda Cloud Connect](/docs/platform/connectors/kianda-cloud-connect/).
