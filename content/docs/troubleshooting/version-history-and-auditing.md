---
title: "Version history and auditing"
weight: 8
typora-root-url: ..\..\..\static
---

## Introduction
As an **administrator** you can test **process designs** using the [Previewer](/docs/platform/application-designer/designer/previewer/) and **roll-back to earlier versions** using the steps in [Version history](/docs/platform/application-designer/designer/version-history/) page. In addition to managing process design version history, as an administrator you can manage process instance history using the **Process history** feature. This will allow administrators to view when data has been saved for a particular record, who has saved the data and the changes made going from one version of the record to another. 

## Prerequisites

Before getting started, consider a particular process that requires investigation, using the name of the process design found in the [Process designer](/docs/platform/application-designer/) page, for example Asset Request is a chosen process design as shown in the image below.

![Process design example](/images/process-design-example.jpg)

Then check the records or instances of the process design by going to or creating a dashboard page and viewing a [List](/docs/platform/pages/list/) widget that is linked to that process design. For example in the image below there are six process instances for the Asset Request design. We can investigate one of these in the steps below.

![List of process instances for Asset Request process design](/images/list-of-instances-example.jpg)



## Process instance version history

**Process instances** can be accessed from a **list widget** in a dashboard page linked to the process design. Access to the dashboard and list widget can be set using security settings, see [Dashboard security](/docs/security/process-level-security/#dashboard-security).

![Example of a chosen process instance](/images/chosen-instance-example.jpg)

For example by clicking on a process ID like 'asset-request-3' as seen in the list widget above, we can then see the actual record/process instance held in the system. In the Asset Request example below, all forms have had data submitted, including the last form in the process, the Order form.

![Accessing process history within a record](/images/accessing-process-history.jpg)

**Administrators** have access to the process instance history feature highlighted above, to manage process instance versions. By clicking on the **process history** button, the **Process history and Rule diagnostics view** opens. Manage the history of the record/instance by following the steps below:

1. Click on the **Process history** tab. 

   ![Process history view](/images/process-history-tab.jpg)

2. View all versions of the process instance in the Process history view. Here you can see the number of the version, the date the version was created, who modified the version and you can restore to that version by clicking on the **Restore** button ![Restore button](/images/restore.png). To see the details of a version click on the hyperlinked **Modified date**.

   ![Process history version example](/images/process-version-eg.jpg)

3. Within the Version page you can see which **forms and fields** were **modified**/updated and which **rules were executed**. 

   For example in the version below, you can see **system generated anonymous links** such as that stored in in the field 'Anonymous Order form Link' which can be useful to retrieve and test. 

   ![Process instance history details](/images/process-history-details.jpg)

   You can also see **changes** in values, for example by default the Approval Status field in Kianda Designer is set to 'False', but when a user choose a Management Decision value of 'Yes', a Set form field rule will execute a rule to set a value in the field to 'True'. This rule can be seen when the process design is viewed.

   ![Set form field rule example](/images/set-form-field-eg.jpg)

   A good knowledge of the process design as seen in Kianda [Designer](/docs/platform/application-designer/designer/) is necessary to support troubleshooting changes in process instances. 

4. Click on the **Back** button ![Back button](/images/back-process-history.jpg)or **Close** to return to the list of process instance versions. 



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Custom widget debugging**, find out more about other troubleshooting features:

- [Rule debugger](/docs/troubleshooting/rule-debugger)
- [Rule diagnostics](/docs/troubleshooting/rule-diagnostics/)
- [Custom widget debugging](/docs/troubleshooting/custom-widget-debugging/)