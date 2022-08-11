---
title: "Create a file anonymous link"
typora-root-url: ..\..\..\..\..\static
weight: 7
---

## Introduction

The **Create a file anonymous link** rule enables you to create a link to a file from your process. The link is **fully anonymous** which means anybody can **access** the file if they have the link. You can set an expiry time of the link (in hours), the count down will start from the time the link was created.

## When to use 
Use this rule when your process or application requires sharing anonymously a file stored in one of the supported file connectors. For example when sharing a file link to a report stored behind an authenticated file system.

Add this rule to any form element.

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

In advance of using the **Anonymous form link**, in your process you need to have created at least one or more forms. The create a file anonymous link rule also requires two control fields in order to store a file which you want to share and a text box control for storing the link. You can also create another text box or a number field to store the link duration, this field is optional but can be a good idea if you want to customise the duration of the link dynamically.

- **File field** - used to store the file which you want to create a link to. To learn how to create a file filed go to [File upload control](/docs/platform/controls/input/file-upload/).
- **Text box field** - used to store the generated anonymous link which can be shared with other users. To learn how to create a text box field go to [Text box control](/docs/platform/controls/input/textbox/).
- **Text box or Number field (optional)** - allows you to determine  the duration of the link in hours.

## How to get started



1. Before adding the rule, 
   1. Add a file field: Click on Controls > Input > File and drag the field onto the form. Edit the file field to configure it to point to one of the configured file fields
   2. Add a textbox field to store the anonymous file link
   3. Add a button or other element to serve as the trigger point for the rule

2. Select button and go to Add a rule > File management > Create a file anonymous link
3. Configure the required input parameters
4. Click on OK. 

