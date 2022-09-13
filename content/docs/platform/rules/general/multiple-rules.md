---
title: "Multiple rules"
weight: 2
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

When working with rules in forms, a key principle to consider is **rule order**. Rule order is important if there are **multiple rules** attached to an item like a button or form field to determine the sequence of rule execution. As a form designer you can change the order of execution is important and modified form and process designs, including rule order to suit your needs.

Remember you can assign rules at:

- **Process level** - onload rules that execute when a new process instance is initiated.

  ![Process level rule example](/images/process-level-rule-example.jpg)

- **Form level** - onload rules that execute when a form is submitted.

  ![Form level rules](/images/form-level-rule.jpg)

- **Button/field level** - rules attached to buttons or fields within forms, or at the end of a form, for example a Submit button. An example of rule order is given at this level in the section below [Rule order example](#rule-order-example).

Rules are typically synchronously executed in Kianda, so for example when using a [Start a process](/docs/platform/rules/workflow/start-a-process/) rule, when the rule is executed first any mappings from a secondary/target process are mapped into a primary process, and from there if there are any rules to trigger on the secondary/target process those are executed, but a rule will only execute when the previous rule has completed. This is different to asynchronous execution where the system will execute rules without waiting for the previous rule execution to finish. Within time defined rules, like [Start a process](/docs/platform/rules/workflow/start-a-process/) and [Schedule a rule](/docs/platform/rules/workflow/schedule-a-rule/) there is an option to choose between synchronous/in-series or asynchronous/in-parallel where the latter may be useful for rules without dependency.

![Execute in series option on rules](/images/execute-in-series.jpg)

## Rule order example ##

For example, you may want a process to send automated emails to a safety manager, where the email includes submitted form data. In this case a **Send email rule** could be attached to a form **Submit** button so an email is sent once the button is clicked. This will result in an automated email to a designated person. To generate a report of the completed form you can use the **Generate word** **document** **rule** triggered again when the **Submit** button is clicked. In this example the **Generate word document rule** has to be executed <u>before</u> the **Send email rule**, so that the Word document can be generated and then attached to the email. 

The rule order consideration is therefore particularly important when rules are **dependent** on each other - where the output of one rule is the input of another rule.



## Changing the rule order of multiple rules

In the example below we will look at changing the rule order of a Send email rule attached to a Submit button. The **Submit**, **Save** and **Close** buttons by default already have **Submit**, **Save** and **Close** process rules attached, in order to allow form shutdown.

To change rule order, when the rule is created:

1. Click on the item that has multiple rules attached, for example a **Submit** button. Remember by default Submit buttons in forms will have 'form shutdown' rules, namely **Submit**, **Save** and **Close**.
2. Click on **Rules** in the right-hand pane, drag the **Send email** rule to the top of the list by clicking on the rule and drag it to the top of the list, before **Submit**, **Save** and **Close** rules. 

![img](https://academy.kianda.com/wp-content/uploads/2022/03/ruleorder_frame.png)

The video below shows an example of a **Send email rule** being created and saved. The rule is attached to the **Submit** button. Once the rule is created, by default the new rule goes to the bottom of the list of rules. To move the rule, simply click on it and drag it to where you wish to place it. In this example we want the email sent <u>before</u> any of the shutdown processes like Submit or Save, but after a **Generate Inspection** rule, so the output from that rule can be used in the Send email rule. 

<video width="100%" style="width:100%" controls>
    <source src="/videos/short-rule-order.mp4">
    Your browser does not support the video tag.
    </source>
</video>



### What's next  ![Idea icon](/images/18.png) ###

To find out more about rule implementation, go to the main [Rules](/docs/platform/rules/) page and then click on the links to the different rule categories.