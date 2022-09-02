---
title: "Process common fields"
weight: "4"
linkTitle: "Process common fields"
typora-root-url: ..\..\..\..\..\static
---

 ## Introduction ## 

Within every process, there are forms and forms contain **fields**. The fields you add in, such as a text box, list or button are called **Design fields**. For example as seen in [Field properties](/docs/platform/application-designer/process/properties/#field-properties) you can change properties for a textbox field, like making the field **Required** and **Visible** for form users as shown in the image below for the Training Request form field called 'Employee Name'

![.](/images/settingsprocess.png)

These design fields are also apparent when creating **dashboards**, for example **list** widgets. In the example below we can see the **Design fields** highlighted that are found in the Training Request form. These highlighted fields like **Employee Name** will appear in the list widget in the dashboard.

![Example of design fields in a list widget](/images/design-fields-example.jpg)

Clicking on **List fields** in list widget shown above will **show all the fields** that will appear in the widget.

![List field example](/images/list-field-defaults.jpg)

Note that non Design fields are also included in the fields to display, namely **ID**, **Process Name** and **Modified** fields. These fields are part of the set of **Common fields** associated with all Kianda processes.



## Common fields

The non-design fields associated with all Kianda processes are listed below. It is useful to keep these fields in mind when designing forms, as they can be used to retrieve, store or display values from **process instances** for example **Status** which is the status of a process instance. Using these 'internal values' could be useful where the status of one process could be used as a condition to trigger the start of another process, for example using the [**Start a process**](/docs/platform/rules/workflow/start-a-process/) rule.

The common fields associated with process instances are:

| Field name          | Explanation                                                  |
| ------------------- | ------------------------------------------------------------ |
| **ID**              | This is the **process instance ID**, labelled as 'process-name-number', for example 'safety-inspection-8'. This ID is part of the URL that brings you to the process instance/record held on the system when information is either submitted or saved. For example clicking on the process instance ID 'safety-inspection-8' in a dashboard brings you to the form https://green-itr.kianda.com/forms/safety-inspection-8. |
| **Unique ID**       | This is a **system generated ID** for each process instance, a 32 letter and number generated value. |
| **Status**          | This is the status for the process instance, that is either a '**form name**' or '**Completed**'. Completed indicates that all forms in a process have been submitted, while 'form name' indicates what the active form is in the process, that is, where the process is 'at'. For example in a process of two forms, a Request form and an Approval form. Once the Request form has been submitted then the status for a process is 'Approval form' indicating that this form needs to be completed. |
| **Version**         | This is the **process instance version number** that starts as 1.0. If a process instance is updated, for example if a process design is updated and published and process instances are updated with the change, then the next version of the instance will be 2.0. |
| **Process Version** | This is the **process design version**, that is the version of the process design that has been used as a template for the process instance. |
| **Process Name**    | This is the **Unique ID name** that comes from the process design that is the template for the process instance. The ID is created when the process is created. The ID field autofills from the title of the process as shown in [Create your first process](/docs/platform/application-designer/#creating-your-first-process). |
| **Process Title**   | This is the **Process title** that comes from the process design title, created when the process is created or updated, for example see [Create your first process](/docs/platform/application-designer/#creating-your-first-process). |
| **Created**         | This is a **date and time stamp** when the process instance is created. |
| **Created by**      | This is the **user name** of the user who **created** the process instance. |
| **Modified**        | This is the **date and time stamp** when the process instance is modified, for example after a process design is published and existing process instances are updated. |
| **Modified by**     | This is the **user name** of the user who **modified** the process instance. |
| **Assign to**       | This is the **user name** of the user who a process is **assigned** to. Process designs may have a static option for reassignment in their design so that process instances can be reassigned using [Quick actions](/docs/platform/application-designer/forms/form-quick-action/#how-to-get-started). Alternatively the [Assign form](/docs/platform/rules/workflow/assign-form/) rule can be used to dynamically assign form ownership to another user. That user is named in the **Assign to** field. |
| **Security users**  | These are the named security users, defined using [**Process settings**](/docs/platform/application-designer/process/settings/#process-settings) by selecting **Enable process security** and naming **Process security users** which can be **Users**, **Groups** and/or **Partners**. |



### What's next  ![Idea icon](/images/18.png) ###

- To learn more about design controls that can be applied to forms go to [**Controls**](/docs/platform/controls/).
- To learn more about how common fields are displayed in dashboards in a list widget go to [**List widget**](/docs/platform/pages/list/).
