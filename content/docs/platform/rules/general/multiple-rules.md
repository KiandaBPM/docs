---
title: "Multiple rules"
weight: 2
typora-root-url: ..\..\..\..\..\static
---



### Introduction

When working with rules in forms, a key principle to consider is **rule order**. This is important if there are **multiple rules** attached to an item like a button. In this case the order of execution is important and can be modified to suit your needs.

For example, you may want a **Send email rule** to be executed once the **Submit** button is clicked. This will result in an automated email to a designated person. You may also want to attach a report to this email, a report that is a complete form. In this example a **Generate word** **document** **rule** could be used to generate a report when the **Submit** button is clicked. In this example the **Generate word document rule** has to be executed before the **Send email rule**, so that the Word document can be generated and then attached to the email. 

The rule order consideration is therefore particularly important when rules are dependent on each other - where the output of one rule is the input of another rule.

### Changing the rule order of multiple rules

In the example below we will look at changing the rule order of a Send email rule attached to a Submit button. The **Submit**, **Save** and **Close** buttons by default already have **Submit**, **Save** and **Close** process rules attached, in order to allow form shutdown.

To change rule order, when the rule is created:

1. Click on the item that has multiple rules attached, for example a **Submit** button.
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