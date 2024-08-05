---
title: "Connect to data sources"
linkTitle: "2. Connect to data sources"
description: "Connect your process apps to data sources. Enhance functionality and relevance of your forms, automate data-driven tasks"
weight: 2
typora-root-url: ..\..\..\static
---

1. [Forms and controls](../form-controls-layout/)
2. **Connect to data sources**
3. [Process logic with rules](../plan-your-process/)
4. [Publish a process with pages](../publish-your-process/)

## 1. Introduction

Connecting to data sources is a crucial aspect of building robust and dynamic process applications in Kianda. By integrating external data, you can enhance the functionality and relevance of your forms, automate data-driven tasks, and ensure seamless communication between different systems within your organization. 

This section will guide you through the basics of managing data sources in Kianda, enabling you to create more powerful and efficient applications.

You will learn how to access and configure data sources using Kianda’s administration menu. We will cover the process of registering new data sources, integrating them into your process apps, and utilizing them effectively to meet your business needs. 

Additionally, you will gain insights into best practices for maintaining and optimizing data source connections, ensuring your applications run smoothly and securely.

Before you begin, ensure you have admin privileges within your Kianda workspace, as managing data sources requires access to administrative functions. A basic understanding of the types of data sources you will be working with (such as databases, web services, or file systems) will also be beneficial. 

With these prerequisites in place, you are ready to start leveraging the full potential of Kianda's data source integration capabilities.

## 2. Accessing and Registering Data Sources

To manage and integrate data sources within Kianda, you need to access the Data Sources administration menu. 

This section will guide you through the steps to navigate the admin menu, understand the data sources landing page, and register a new data source in your workspace.

#### Navigating to the Data Sources Admin Menu

1. Access the Admin Menu
   - Click on the cog icon located at the top right corner of the screen to open the admin menu.
2. Select Data Sources
   - From the admin menu, select the "Data Sources" option to access the Data Sources management page.

The Data sources management page displays a list of all registered data sources in your workspace that can be managed centrally.

#### Registering a New Data Source

1. Click on the "Add new" button located at the top of the Data Sources management page.

2. Select a Data Source Type. Choose from a variety of supported data sources such as:

   - Office 365, SharePoint, SQL Server, Salesforce, DocuSign, MySQL, Oracle, SAP, Active Directory, SOAP Service, REST Service, File System, Email, FTP, Dropbox, PowerShell, Global Payments, Google Drive, Stripe, Autodesk, Procore.

3. Configuring a New Data Source

   After selecting the type of data source, you will be prompted to enter the necessary configuration details.

   - Example: Configuring a MySQL Data Source
     - **Display Name**: Enter a descriptive name for the data source.
     - **Server**: Enter the server address (e.g., `serverA.company.com`).
     - **Database**: Enter the database name (e.g., `products`).
     - **User**: Enter the username for accessing the database.
     - **Password**: Enter the corresponding password.
     - **Test Connection**: Click to verify that the connection details are correct.

By following these steps, you can efficiently access and manage data sources in Kianda. This foundational step is crucial for integrating external data into your process applications, enabling you to build more dynamic and data-driven solutions. 

Once your data sources are registered and configured, you can start integrating them into your process apps using list controls and CRUD rules, which will be covered in the next section.

<video class="inline-video-player" loading="lazy" muted loop playsinline autoplay poster>
    <source src="/videos/Register-a-datasource.mp4">
    Your browser does not support the video tag.
    </source>
</video>

## 3. Integrating Data Sources with Process Apps

Integrating data sources with your process apps in Kianda allows you to dynamically read and display data from external databases directly within your forms. 

There are two primary methods to achieve this: using the List control for direct binding to data sources and utilizing the Find Items rule. These tools enable you to create forms that interact seamlessly with your data sources, providing real-time access to essential data.

The List control in Kianda can be directly bound to a data source, making it a powerful tool for displaying data within your forms. When configuring the List control, you can select the desired data source using the data source picker. 

Once selected, additional fields are provided to fine-tune the data binding. The Display field specifies the column from the data source that will be shown to users as the display value, while the Value field determines the column that will hold the actual value. 

This setup is particularly useful for dropdown lists, radio buttons, multi-select options, and checkbox lists, allowing you to populate these controls with data directly from your databases without requiring additional coding.

By leveraging the List control and the Find Items rule, you can effectively integrate data sources with your Kianda process apps, providing a dynamic and interactive experience for users. 

These tools enable you to seamlessly read data from external databases, enhancing the functionality and usability of your forms. In the next section, we will explore how to configure and utilize these controls and rules in detail, ensuring you can implement these integrations smoothly and efficiently.

### 3.1. List Control Data Binding

<video class="inline-video-player" loading="lazy" muted loop playsinline autoplay poster>
    <source src="/videos/List-control-datasource.mp4">
    Your browser does not support the video tag.
    </source>
</video>

### 3.2. Find Items Rule (Data Query)

Another robust method for reading data into your forms is the Find Items rule. This rule is used to execute a data retrieval (Select) operation from any configured data source and map the results into various controls within your form.

The Find Items rule allows you to set conditions for filtering data and specify how the retrieved data should be mapped to form fields or table controls. When mapping to a non-table control, only the first result of the query is mapped. 

Additionally, the Find Items rule includes a sort order and max rows setting to limit the number of results returned. This feature is particularly useful for displaying query results in a table control, providing a dynamic way to present and manage data within your forms.

<video class="inline-video-player" loading="lazy" muted loop playsinline autoplay poster>
    <source src="/videos/Find-Items-Rule.mp4">
    Your browser does not support the video tag.
    </source>
</video>

### 3.3. Saving Form Inputs to Data Sources

Writing data to data sources in Kianda is a crucial functionality that allows users to take input from forms and persist it into various external systems. 

This can be achieved using the Create Item rule, Update Item rule, and Delete Item rule, which together with the Find Items rule, provide full CRUD (Create, Read, Update, Delete) operations. 

These rules are not limited to databases but can also be applied to non-database data sources such as REST APIs or third-party services, making them extremely versatile for various integration needs.

The Create Item rule is used to insert new records into a data source based on user input from a form. This rule supports the creation of one item at a time and, when working with databases, it translates into an INSERT statement. 

The rule employs a visual transactional logic represented by three panels: Input Mapping, Success Mapping, and Error Mapping. These panels allow you to define what data should be sent to the data source, how to handle successful transactions, and how to manage errors. 

This conditional logic enables complex workflows where subsequent actions can be triggered based on the success or failure of the initial data write operation.

Similarly, the Update Item rule is used to modify existing records in a data source. It can update multiple items in a single operation, which corresponds to an UPDATE statement in database terms. 

This rule includes a flag to automatically ignore blank values, ensuring that only specified fields are updated. Like the Create Item rule, the Update Item rule uses the same transactional logic with Input Mapping, Success Mapping, and Error Mapping panels. 

This allows developers to conditionally execute additional logic based on the outcome of the update operation. 

The Delete Item rule completes the set of CRUD operations by allowing the removal of records from a data source. Together, these rules provide a robust framework for interacting with external data sources, enabling dynamic and responsive process applications.

By combining these data rules with the Find Items rule, Kianda users can create comprehensive data management workflows within their forms. For example, a process could begin with a Find Items rule to retrieve existing records, followed by an Update Item rule to modify those records, or a Create Item rule to add new records based on user input. 

This seamless integration of reading and writing data ensures that Kianda forms can handle complex business scenarios, making your process applications both powerful and flexible.

## 4. Best Practices

Implementing best practices when integrating and managing data sources in Kianda ensures that your process applications are secure, efficient, and maintainable. Here are some key recommendations to follow:

### Performance Optimization

Optimizing the performance of your data interactions is crucial for maintaining responsive and efficient applications. When designing forms, use server-side filtering and pagination to manage large datasets effectively, avoiding the need to load extensive data sets into the client-side. 

For frequent data interactions, enable caching where appropriate to reduce the load on your data sources and improve response times. 

Additionally, optimize your queries and rules to retrieve only the necessary data, and use indexed columns in your databases to speed up search operations.

Kianda automatically performs server side paging and filtering under the hood to ensure that the application is fast and responsive to users. 

### Security Considerations

Securing your data connections is paramount.  Restrict access to data sources based on the principle of least privilege, ensuring that only authorized users and services can read or write data. 

Utilize Kianda’s security features, such as data source security, enabling security settings for panels and buttons, to further control access and actions within your forms.

### Managing Data Source Changes

Change management is an essential aspect of maintaining data source integrations. Document your data source configurations and changes meticulously. 

Before making changes to live data sources, test them thoroughly in a development or staging environment to ensure they do not disrupt existing processes. Implement fallback mechanisms and error handling in your forms to manage unexpected issues gracefully. 

Regularly review and audit your data source configurations to ensure they remain aligned with your organizational policies and performance standards.

## 5. Data source connectors in Kianda

| **Data Source**  | **Description**                                              |
| ---------------- | ------------------------------------------------------------ |
| Office 365       | Microsoft's cloud-based suite for office applications, including email and collaboration tools. |
| SharePoint       | Microsoft's platform for document management and collaboration. |
| SQL Server       | Microsoft's relational database management system.           |
| Salesforce       | Cloud-based customer relationship management (CRM) platform. |
| DocuSign         | Electronic signature and digital transaction management service. |
| MySQL            | Open-source relational database management system.           |
| Oracle           | Comprehensive database management system.                    |
| SAP              | Enterprise resource planning (ERP) software to manage business operations and customer relations. |
| Active Directory | Microsoft's directory service for Windows domain networks.   |
| SOAP Service     | Protocol for exchanging structured information in the implementation of web services. |
| REST Service     | Architectural style for designing networked applications.    |
| File System      | System that controls how data is stored and retrieved on a computer. |
| Email            | Email protocol support for sending and receiving messages.   |
| FTP              | Protocol for transferring files between systems over a network. |
| Dropbox          | Cloud storage service for file sharing and collaboration.    |
| PowerShell       | Task automation framework from Microsoft, consisting of a command-line shell and scripting language. |
| GlobalPayments   | Payment technology services for processing transactions.     |
| Google Drive     | Cloud storage service from Google for file storage and synchronization. |
| Stripe           | Online payment processing for internet businesses.           |
| Autodesk         | Software applications for 3D design, engineering, and entertainment. |
| Procore          | Construction management software for project management, scheduling, and collaboration. |
| Custom           | Developers can develop their own data connectors using micro-services and common schema. |

This table provides a brief description of each data source, helping you understand the various integration options available in Kianda.

## 6. Summary

In this guide, we covered the essential steps to connect and integrate data sources with your Kianda process applications. From accessing and registering data sources to reading and writing data, these functionalities enable you to create dynamic, data-driven forms. 

By following the best practices outlined, you can ensure your applications are secure, efficient, and maintainable. With these skills, you are well-equipped to leverage Kianda's powerful data integration capabilities to build comprehensive business solutions.



#### Quick Start

1. [Forms and controls](../form-controls-layout/)
2. **Connect to data sources**
3. [Process logic with rules](../plan-your-process/)
4. [Publish a process with pages](../publish-your-process/)
