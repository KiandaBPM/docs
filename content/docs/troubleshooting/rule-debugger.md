---
title: "Rule debugger"
weight: 10
typora-root-url: ..\..\..\static
---

## Introduction

The **Rule debugger** is a troubleshooting feature that allows you to visualise each rule being executed in your process design within the preview window. It provides an insight into the logical flow of a process logical and serves as an important troubleshooting feature if your process does not work as expected. As well as this, it states what rule is being executed and on what field it is acting upon, alongside any associated conditions.

![Rule debugger in action example](/images/rule-debugger-example.jpg)

The **Rule Debugger** can be turned on at any point, for example when starting a new process or using the Previewer. We look at the [Previewer](/docs/platform/application-designer/designer/previewer/) in the steps below, however you can also access this feature via [Rule diagnostics](/docs/troubleshooting/rule-diagnostics/).



## Prerequisites

Before getting started, you must open a process design of your choice that features rules that require debugging.



## How to get started

To access the rule debugger feature:

1. Navigate to the left-hand pane of the designer screen and click on the **Run and preview process** button <img src="/images/preview.png" alt="run and preview process button" style="zoom:150%;" />.

   ![Left hand pane clicking the preview button](/images/preview-process-left-hand-pane.png)

2. In the preview window, click on the **Enable / Disable Rule debugging** button ![rule debugger button](/images/rule-debugger-btn.png) in the top right corner of the window.

   <img src="/images/rule-debugger-preview2.png" alt="rule debugger in the preview window" style="zoom:80%;" />

3. Begin entering data into your process as expected until the rule debugger modal dialog appears in the bottom right of the preview window. This appears as soon as the first rule is encountered in the design's logical workflow.

   ![Rule debugger dialog box](/images/rule-debugger-modal.png)

   The rule debugger dialog displays information such as the **Rule** currently being executed, any **Conditions** associated with the rule and the **Field** the rule is being enacted upon. Three buttons are also displayed, allowing you to:

   * **Execute rule** - executes the **currently displayed rule** on the currently displayed field, along with any conditions specified where you have two or more rules attached to a field, form or process. Once all the rules are executed for that field, then the dialog box will disappear and the system awaits further data input into the form's fields until the next rule or block of rules attached to a field are met. 
   * **Resume** - resumes the **execution of all rules in a block** where there are two or more rules attached to a field, form or process. The rule debug dialog will only then reappear when new data is entered into another field in the process flow.
   * **Stop debug** - **exits the debugging mode** and the rule debug dialog box disappears. You will not receive messages about current rule execution, but will remain in the process preview window.

4. You can alter the conditions on the currently displayed rule (if any), by clicking on the **Conditions** filter button ![Conditions filter button image](/images/conditions-filter-btn.png). This will display another modal dialog box, which gives you the option to change the condition being applied to the rule, add further conditions, remove some conditions and more - allowing for the troubleshooting of different use cases within your process. To learn more about this, see [Conditions](/docs/platform/rules/general/add-conditions/).

   ![Conditions dialog for rule debugger](/images/rule-debugger-conditions.png)



To exit the debugging process, you can click on the **Stop debug** button ![stop debug button](/images/stop-debug-btn.png), or alternatively click on the **Enable / Disable Rule debugging** button <img src="/images/rule-debugger-btn.png" alt="rule debugger button" style="zoom:80%;" />, or click on the **Exit preview mode** button <img src="/images/exit-preview-window-btn.png" alt="exit window preview button" style="zoom:80%;" />.



### What's next  ![Idea icon](/images/18.png) ###

Now that you've learned about the **Rule debugger**, find out more about other troubleshooting features:

- [Custom widget debugging](/docs/troubleshooting/custom-widget-debugging/)
- [Rule diagnostics](/docs/troubleshooting/rule-diagnostics/)
- [Version history and Auditing](/docs/troubleshooting/version-history-and-auditing)