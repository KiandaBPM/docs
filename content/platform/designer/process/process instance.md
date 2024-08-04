---
title: "Process instance"
weight: "1"
linkTitle: "Process instance"
typora-root-url: ..\..\..\..\..\static
---

## Introduction

Kianda processes are made up of **forms**, which in turn contain **fields** or **controls** and **rules**. Fields are used to take in user input, make calculations, display values and so on, and rules are used to execute actions to drive the process.

**Kianda Designer** is used to create these forms and form elements within a process. Each process in Kianda Designer will have it’s own unique link or URL and this can be shared with other form designers for co-creation, for example, for a process named ‘Training process’ the link is:

https://green-itr.kianda.com/admin/designer/training-process



## Process instances

When your process is created in Kianda Designer, you can save the process, and then **submit data** to that process. When you save or submit data, then an **instance** of the process is created. Another name for a process instance is a **record**. This instance is tied to user data or calculated values, or to whatever the process is designed to do.

The instance has a unique ID which can be seen in a list widget in a **dashboard**. For example, this List widget displays the individual records of various training requests submitted by employees. The unique ID for each record is shown in the first column. Form owners or those with security access can click on ID ‘training-request-and-feedback-process-26’ to view the training request form completed and submitted by employee Mark Donnelli.

***List widget in a dashboard showing process instances***

![Process instance example](/images/process-instance.jpg)




This means that each new record generated by a process will have its own unique URL that can be shared with those who have the required security access and need to be involved in that **particular process instance**. For example, in this case, the training request submitted by Mark (an employee) may be viewed and approved by his line manager:

https://green-itr.kianda.com/forms/training-request-and-feedback-process-26

You can create a link on your dashboard – in the example shown above, the **Start new process** button at the top right of the Training Requests list widget – that enables you to create a **new record** by bringing you into the relevant form. For information on creating list widgets go to [List widget](/docs/platform/pages/list/).

If you commit to the process by **submitting or saving information**, then the result is a new process instance – that is, a new unique record – which will be seen in a list widget in the dashboard, as seen in the image above.

Keeping in mind that Designer is used to create processes, and that each ‘run’ of the process design results in a unique process instance or record, will help you later on when designing forms and dashboards. See [Process settings](/docs/platform/application-designer/process/settings/) for more details on process settings and parameters and [Dashboards](/docs/platform/pages/) for more information on dashboards.
