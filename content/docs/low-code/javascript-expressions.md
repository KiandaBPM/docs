---
title: "Javascript expressions"
Weight: 5
typora-root-url: ..\..\..\static
---

## Introduction ##

**Expressions** are available for use extensively throughout the Kianda platform, both in **controls** like text box, number and rich text, as well as **rules** like Send email and Set form field. 

The use of expressions allows you to cleverly manipulate data to create new constructs that can be used within processes. For example if an 'Onboarding process' requires that a new hire completes a 'new employee form' filling out their 'firstname' and 'lastname', it may be useful to combine the two input strings to create a new ID for the employee that combines the data from each field.

![Expression new employee ID example](/images/expression-id-example.jpg)

The page [Expression builder](docs/platform/rules/general/expression-builder/) provides an introduction to expressions and shows one example of Expressions in use in a Send email rule to automate how emails are sent. The example simply uses the **[identifier]** or unique name from form fields to populate the body text of the email.

![Expression example](/images/expression-example.gif)

 **ProcessLink()** is a function that will return a link to that particular process instance. You can use JavaScript functions to make advanced expressions throughout your Kianda forms, see below for how to get started.

## How to get started with Javascript expressions ##

Expressions are recognisable in Kianda from the **Expressions** button ![Expressions](https://academy.kianda.com/wp-content/uploads/2022/02/ellipsis.png) found in **Edit rule dialog boxes** and controls like **text box**, **number** and **rich text**. 

Within rules, expressions can be created using the **Expression builder** where you can **Add field to an expression** or use the handy **Reference** guide to get a list of commonly used functions, such as **ProcessLink()**.

***Expression builder***

![Expression builder example in action](/images/expression-builder-eg.gif)

We can also insert JavaScript such as JavaScript Strings into the expression.

