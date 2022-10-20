---
title: "No-code design principles"
typora-root-url: ..\..\..\static
---


## Introduction

Designing process in Kianda is considered one of the most important factors when creating a process. With a good design, your process will run smoothly and efficiently without the need of going through unnecessary steps, calculations or actions. 

When designing your process, think of simplicity, think of all the necessary inputs and outputs that your process may have. When you know what kind of inputs and outputs are needed in your process, you will be able to figure out what kind of fields you need to gather information. 

### What is the process outcome

![Outcome dashboard](/images/why-no-code-outcome.jpg)

When starting to design your process, first you need to think of is the **outcome** of the process, what is the end **result** that you are expecting after your complete the process. For example if you want to create an **Inspection Process**, what would you want to be the result of this process. You will definitely want to know how the inspection went, did it pass the inspection, fail, are there any repairs that need to be made and does the inspection needs to be completed again? You most likely need a **report** of the inspection itself. 

### Users of the process

When designing your process, you need to consider who will be using your process. This will determine how many forms are need for your process. Taking the inspection example from earlier, you might need someone to start the process with requesting an inspection. We also might need a form for the inspector who will do the inspection. This brings the process to two forms.

Now that you know how many forms are needed, we can start thinking about the information that we need to gather within each of the forms.

### What information is needed

Now that you know what the outcome is, you need to figure out what kind of information you're going to need to fulfill the outcome. To keep it simple, we will stick with our inspection example and the report as our outcome. What kind of information do we need on the report? The inspectors details perhaps, date of the inspection, maybe photographs for proof of visual checks. We might also need a signature from both the inspector and the area manager. These are just an example of what kind of information might be needed for a report, there can be lots more but the idea is to slowly step through the **requirements** of the process.

### What fields are needed

![Outcome dashboard](/images/action-fields.jpg)

Now that we know what the information we need to gather for our process, lets look into how are we going to capture that information. There are 16 predefined fields in Kianda that allows you to capture different types of information, for example, text, dates, files, signatures, visit [Controls](/docs/platform/controls/) for more.

With all the fields available, you can easily decided what kind of fields are needed for different types of information that you want to collect. For example images can be captured using the image field, files of any type can be captured using the file filed, text box fields are used for any form of text, For example, names, feedbacks, emails or passwords. 

When you have decided what fields you will use to gather your information, you can move on to functionality of your process.

### What functionality is needed

Business rules are what make Kianda forms come alive. They represent the actual actions users intend to perform when they interact with form components - for example, sending automated emails, revealing certain parts of a form based on user interactions and automatically generating Word and PDF documents from completed forms. 

There are 60 predefined rules across 10 categories and they can be applied to fields (controls), forms, groups of forms or even to a whole process - see [Rules list](#rules-list) for more details.

There are two key principles to consider when working with rules:

1. [Rule design](#rule-design) - Consider the type of rule you are going to apply and what you are going to apply it to - for example, to a button, field or form. As part of your design considerations it is important to know what you can do with rules, in particular, the use of [conditions](/docs/getting-started/create-first-process/plan-your-process/conditions/) and [expressions](/docs/getting-started/create-first-process/plan-your-process/expressions/). 

2. [Rule order](#rule-order) - If there are several rules attached to an item like a button, then the order the rules are going to be executed in becomes important. You can change the rule execution order to suit your needs.

## What's next  ![Idea icon](/images/18.png)

We have discussed all major designing principles of your process, to learn more how to plan your first process, visit [Plan your process](/docs/getting-started/create-first-process/plan-your-process/).
