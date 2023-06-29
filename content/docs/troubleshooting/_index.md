---
title: "Troubleshooting"
weight: 8
typora-root-url: ..\..\..\static
---

## Introduction

Your Kianda environment is designed to be an intuitive, user-friendly workspace with built-in features like Kianda [**Previewer**](/docs/platform/application-designer/designer/previewer/) that support quick prototyping and testing. To support your work there are also a number of additional features that you can use to troubleshoot issues. The categories of troubleshooting include:

- Using the [Previewer](/docs/platform/application-designer/designer/previewer/) to test designs
- Using the [Rule debugger](/docs/troubleshooting/rule-debugger) and [Rule diagnostics](/docs/troubleshooting/rule-debugger) to troubleshoot process instance flow
- [Custom widget debugging](/docs/troubleshooting/custom-widget-debugging/) 
- [Version history management](/docs/troubleshooting/version-history-and-auditing)

Click on each of the links above to read more. Version history management is introduced below.



## Version history management

Version history management is useful for troubleshooting but also during audits, to see specifically changes made and who executed those changes. 

Your Kianda workspace cleverly allows you to manage **process design** and **process instance versioning** so that **administrators** can see what has happened at specific moments during process execution and roll-back to earlier versions if needed.  

Kianda **Designer** allows **administrators** or those with the **design business process** role, to update process designs. The platform keeps a record of all versions previously created. The **current or active version** of a process is always visible in the right-hand pane, for example V1.0 for the 'Inspection Process' as shown below.

![Process version history](/images/published-version.jpg)

The **first version** of a process is always **0.1** and each time the **Save** button ![Save button](/images/saveprocess.png)is clicked, the version will increment to 0.2 and so on. Once the process is **published** the version changes to **1.0** and increments to 2.0 and so on with each publication. 

Clicking on the **Design version history** button itself opens the **Version history details** dialog box. 

![Version history details example](/images/version-history-details-eg.jpg)

Here you can see when a process design was modified and by whom. Clicking on the version number itself releases details of changes made, for example forms, fields and rules that were added,  modified or removed.

![Version history details example](/images/version-history-details-example.jpg)

At any time an older version of the design can be reinstated by clicking on the **Restore** button ![Restore button](/images/restore.png) beside a particular version.

This level of detail provides a precise way to monitor what is happening with a process design and to control which version should be the current version in an easy-to-use interface. The [Version history](/docs/platform/application-designer/designer/version-history/) page provides a step-by-step guide on how to view version history. 

When a process design has been published, and data captured using that design, then the [Process instance version history](/docs/troubleshooting/version-history-and-auditing) provides a useful way to see how and when a process design has been used and who has captured data using that design. Click on the link to read more details. 

### What's next  ![Idea icon](/images/18.png) ###

Find out more about other troubleshooting features:

- [Rule debugger](/docs/troubleshooting/rule-debugger)
- [Rule diagnostics](/docs/troubleshooting/rule-diagnostics/)
- [Custom widget debugging](/docs/troubleshooting/custom-widget-debugging/)
- [Version history and Auditing](/docs/troubleshooting/version-history-and-auditing)

