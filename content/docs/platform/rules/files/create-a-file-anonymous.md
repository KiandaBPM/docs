---
title: "Create a file anonymous link"
typora-root-url: ..\..\..\..\..\static
weight: 7
---

This rule enables the creation of file links from an existing file field that can be shared anonymously 	

![Send email rule dialog box](/images/createafileanonymouslink.png)

## When to use 
Use this rule when your process or application requires sharing anonymously a file stored in one of the supported file connectors. Example when sharing inside an email a link to a report stored behing an authenticated file system.

Add this rule to any form element.

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to use
To create an anonymous link to a file:
1. Before adding the rule, 
   1. Add a file field: Click on Controls > Input > File and drag the field onto the form. Edit the file field to configure it to point to one of the configured file fields
   2. Add a textbox field to store the anonymous file link
   3. Add a button or other element to serve as the trigger point for the rule

2. Select button and go to Add a rule > File management > Create a file anonymous link
3. Configure the required input parameters
4. Click on OK. 
