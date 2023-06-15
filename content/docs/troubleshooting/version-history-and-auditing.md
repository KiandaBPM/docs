---
title: "Version history and auditing"
weight: 8
typora-root-url: ..\..\..\static
---

## Design version history

Kianda **Designer** allows **administrators** or those with the **design business process** role, to update process designs. The platform keeps a record of all versions previously created. The **current or active version** of a process is always visible in the right-hand pane, for example V1.0 for the 'Inspection Process' as shown below.

![Process version history](/images/published-version.jpg)

The **first version** of a process is always **0.1** and each time the **Save** button ![Save button](/images/saveprocess.png)is clicked, the version will increment to 0.2 and so on. Once the process is **published** the version changes to **1.0** and increments to 2.0 and so on with each publication. 

Clicking on the **Design version history** button itself opens the **Version history details** dialog box. 

![Version history details example](/images/version-history-details-eg.jpg)

Here you can see when a process design was modified and by whom. Clicking on the version number itself releases details of changes made, for example forms, fields and rules that were added,  modified or removed.

![Version history details example](/images/version-history-details-example.jpg)

At any time an older version of the design can be reinstated by clicking on the **Restore** button ![Restore button](/images/restore.png) beside a particular version.

This level of detail provides a precise way to monitor what is happening with a process design and to control which version should be the current version in an easy-to-use interface. The [Version history](/docs/platform/application-designer/designer/version-history/) page provides a step-by-step guide on how to view version history. 

## Process instance version history

**Process instances** can be accessed from a list widget in a dashboard page linked to the process design. Access to the dashboard and list widget can be set using security settings, see [Dashboard security](/docs/security/process-level-security/#dashboard-security).

![Process instance example](/images/process-instance-example.jpg)

For example by clicking on a process ID like 'inspection-process-10' as seen in the list widget above, we can then see the actual record/process instance held in the system. In the Inspection process example below, a 'Request form' has had information submitted.

![Process instance view](/../content/docs/process-instance-view.jpg)

**Administrators** have access to the process instance history feature highlighted above, to manage process instance versions. By clicking on the **process history** button. 
