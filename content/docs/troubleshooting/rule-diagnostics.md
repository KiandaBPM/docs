---
title: "Rule diagnostics"
weight: 11
typora-root-url: ..\..\..\static
---

## Introduction

**Rule diagnostics** is a troubleshooting feature within Kianda that allows you to view a nested list of all forms, fields and rules - the purpose being that you can choose to **manually trigger** these rules for diagnostic purposes, as well as **toggle field visibility**, **re-assign forms**, and more.

The rule diagnostics feature is available for troubleshooting specific [Process instances](/docs/platform/rules/general/add-conditions/) where as the [Rule debugger](/docs/troubleshooting/rule-debugger) feature focuses more so on troubleshooting a process design pre-publishing.



## Prerequisites

Before getting started, you must open a process instance that you would like to perform rule diagnostics on.



## How to get started

To access the rule diagnostics feature:

1. On your chosen process instance, click on the **Process history** button <img src="/images/process-history-button.jpg" alt="process history button" style="zoom:150%;" /> in the top right-hand corner of the screen. This will open the Process history modal dialog box.

   ![Process history](/images/process-history-btn2.png)

2. On the process history dialog, navigate to the **Rule diagnostics** tab. From here, you can view a nested list of all forms, fields and rules. In the example below, you can view rules and fields across three different forms in the process, as well as expand the onload rules. You can search for a specific element in your process by utilising the search bar.

   ![rule diagnostics tab](/images/process-history-modal1.png)

3. There are many possibilities for testing your process instance, however in this example we will try to troubleshoot the [Send email rule](/docs/platform/rules/communications/send-email/) to ensure that the line manager receives the correctly formatted email during this process. 

   To do this, we will drill down into the following path: *Asset request* form > *Submit* button > *Rules* > *Email Line Manager*. 

   ![Drill down into line manager](/images/expanding-process-instance.png)

4. Beside the *Email Line Manager* rule, click on the orange **Trigger** bolt button <img src="/images/trigger-btn.png" alt="trigger bolt button" style="zoom:150%;" /> to **manually trigger** the rule. This is a powerful feature as you do not need to fill out an entire process from start to finish to troubleshoot this. You will then see a *Rule executed* alert at the top of the page, and the specific rule should perform as expected.

   <img src="/images/request-assets-email.png" alt="Request assets email sent to the line manager" style="zoom:67%;" />

5. There are other features you can troubleshoot in the **Rule diagnostics** tab such as clicking:

   * **Toggle form visibility** button ![toggle visibility button](/images/toggle-visibility-btn.png) - to hide or show the selected form
   * **Make editable** button ![Editable button](/images/editable-btn.png) - make the current field/form editable
   * **Re-assign form** button ![re-assign button](/images/re-assign-btn.png) - to assign the form to a different person
   * **Go to form** button ![go to form button](/images/go-to-form-btn.png) - snaps to the selected form
   * **Toggle field enable** button ![toggle field enable](/images/toggle-field-enable-btn.png) - to enable/disable the selected field

   As well as this, the **Rule executed status** can be seen beside each rule - a green tick ![green tick](/images/green-tick.png) for executed, and a grey tick ![grey tick](/images/grey-tick.png) for not executed.

   ![Rule diagnostics other buttons](/images/rule-diagnostics-other-btns.png)

6. To change the current form in your process instance, you can click on the **Change current active form** button ![change current active form button](/images/change-current-active-form-btn.png) below the form list. This will allow you to troubleshoot different forms and how they behave when changed to the active form in the process.

   ![other debug features](/images/current-form-screen.png)

7. You can also choose to **Enable rule debugging** by choosing the *Yes* radio button, also below the nested list. This will enable the [Rule debugger](/docs/troubleshooting/rule-debugger) feature, however instead of executing within a process design preview window, it will enact upon your selected process instance. The rule debugger modal dialog will appear in the bottom right-hand corner of the screen.

   ![Rule debugger modal dialog within rule diagnostics](/images/rule-debugger-within-rule-diagnostics.png)

8. When finished troubleshooting, click the **Close** button to close the process history dialog box.

   

   

### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Rule Diagnostics**, find out more about other troubleshooting features:

- [Custom Widget Debugging](/docs/troubleshooting/custom-widget-debugging/)
- [Rule Debugger](/docs/troubleshooting/rule-debugger/)
- [Version History and Auditing](/docs/troubleshooting/version-history-and-auditing)
