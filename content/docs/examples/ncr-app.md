---
title: "Non-Conformance Report"
linkTitle: "Nonconformance Report"
weight: 6
typora-root-url: ..\..\..\static
---

In this example we will show how we can create a Nonconformance Process and step through the logic behind the rules and fields within each of the forms: 

- a **Nonconformity Details Form** which is completed by a company employee, reporting a nonconformance within a company.
- an **Auditor Review Form** which will be completed by an **Auditor** that reviews the nonconformance and has the ability to create an action plan along with individual actions that will be sent via email to responsible employees.
- an **Action Confirmation Form** which will be completed by a supervisor within the company. This form is used to confirm that all actions from the auditor review form were completed.
- a **Closure Form** which is completed by a manager within the company. This form is used to select the outcome of the plan to resolve the nonconformance.

The result at the end of the process is an email to both the originator and a site manager, who receive a **PDF** report of the nonconformance.

The process will use **utility panels** to hold form fields and values, not visible to the end user, but these will be used with rules to automate the process.

You can download the process file which you will be able to [import](/docs/how-to/reuse-or-clone-process-elements/) to your own subscription and examine the process in full detail. Click on the following link to download the **.kianda** file: <a download="non-conformance-process.kianda" href="/files" title="Nonconformance Process">Nonconformance Process
</a>

The following image is a step by step roadmap of our process: 

![Nonconformance Process Roadmap](/images/ncr-roadmap.jpg)

## Introduction

Nonconformance introductory video going through the idea of the process and what can be done with it. We are also introducing staff that will help to understand the process and the workflow between users and its forms.

<video width="100%" style="width:100%" controls>
    <source src="/videos/Examples/Slide-show.mp4">
    Your browser does not support the video tag.
    </source>
</video>


## Non conformance details form

This section describes the purpose of the **Nonconformance details** form, and outlines the type of information that is captured. In this form we will focus our attention to an [Assign form](/docs/platform/rules/workflow/assign-form/) rule and a [Send email](/docs/platform/rules/communications/send-email/) rule. We will be using the send email rule across the process and therefore the logic behind implementing it will be the same. We will also focus on a **Configuration** panel that will be invisible to users. We will use the panel to store a template for our report and have a few fields that will help us when creating a name for the report. In combination with our **Closure** form, we will also take a quick look at the [Kianda Word add-in](/docs/platform/document-generation/word-document-add-in/) to create a template for our report.


<video width="100%" style="width:100%" controls>
    <source src="/videos/Examples/NonconformityDetailsForm.mp4">
    Your browser does not support the video tag.
    </source>
</video>


## Auditor review

This section describes the purpose of the **Auditor review** form, and outlines the type of information that is captured. In this form we will focus our attention on individual actions that the **Auditor** can create to match his **Plan** and **Implementation**. We will use a [Table](/docs/platform/controls/input/table/) and a [Dialog](/docs/platform/controls/layout/dialog/) fields as well as a [Loop table](/docs/platform/rules/tables/loop-table/) rule to create the desired functionality.

<div width="100%" style="width:100%; height:589px;" controls>
<div class="smart-player-embed-container" style="height:100%">
<iframe class="smart-player-embed-iframe" id="embeddedSmartPlayerInstance" style="width:100%;height:100%" src="/videos/smart-player/auditor-review/AuditorReviewFormead3fb6.autosave_player.html" scrolling="no" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
<script src="scripts/embedded-smart-player.min.js"></script>
</div>



## Action confirmation

This section describes the purpose of the **Action confirmation** form, and outlines the type of information that is captured. In this form we will focus our attention on a [Field group](/docs/platform/controls/layout/field-group/) that allows us to mirror fields from different forms within our process and group them together. The **Field group** prevents us from **re-creating** fields as the values from the original field will be copied into the field inside of the field group.

<video width="100%" style="width:100%" controls>
    <source src="/videos/Examples/ActionConfirmationForm-Retake.mp4">
    Your browser does not support the video tag.
    </source>
</video>

## Closure

This section describes the purpose of the **Closure** form, and outlines the type of information that is captured. In this form we will focus our attention on a [Schedule a rule](/docs/platform/rules/workflow/schedule-a-rule/) and a [Generate word document](/docs/platform/rules/files/generate-word-document/) rules. We will use those rules in combination with the resources from our **Nonconformity details** form and more specifically the template that is stored within a configuration panel.

<video width="100%" style="width:100%" controls>
    <source src="/videos/Examples/Closure.mp4">
    Your browser does not support the video tag.
    </source>
</video>


## Dashboard

Kianda **dashboards** deliver a convenient way to provide insights into how your business processes are performing. Kianda dashboards offer easy reporting, permissions management, quick build, condition-based filtering and many more features.

From lists to tiles, filter and charts, dashboards allow you to build full digital experiences to monitor your real-time processes in a few minutes. To learn more about dashboards go to [Dashboard pages](/docs/platform/pages/).

You can also examine how a dashboard was made for our Inspection process example by going to [Simple Inspection process](/docs/examples/inspection/dashboard/).

### What's next  ![Idea icon](/images/18.png) ###

You can create a **Dashboard page** to show the status completion of the process.

This process is available as a downloadable .kianda file here. 
