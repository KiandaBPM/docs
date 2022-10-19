---
title: "Expression builder"
weight: 3
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

Expressions allow you to put together form **identifiers** (form field IDs) and **constants** with **operators** and **functions** to return a **dynamic value** that can be used in various places – for example, in a form or field rule to automate processes.

***Expressions***

![Expression elements](https://academy.kianda.com/wp-content/uploads/2022/02/expressions.gif)

For example, expressions could be used in the body of an automated email sent using the **Send email** rule, as shown here:

***Expression example***

![Expression example](/images/expression-example.gif)

In the example above, **[RequesterName]** and **[category]** are identifiers, that are unique IDs for form fields. **ProcessLink()** is a function that will return a link to that process instance. Using the expressions above in an email will mean that every time an instance of the process runs, the values will be presented in an automated email, creating greater efficiencies and personalising the email for the recipient.

## Getting started with expressions – example Email body text

Expressions are recognisable in Kianda from the **Expressions** button ![Expressions](https://academy.kianda.com/wp-content/uploads/2022/02/ellipsis.png) found in **Edit rule dialog boxes** and **other menu items**, such as enabling **quick actions** for processes and **number fields**.

Within rules, expressions can be created using the **Expression builder** where you can **Add field to an expression** or use the handy **Reference** guide to get a list of commonly used functions.

***Expression builder***

![Expression builder example in action](/images/expression-builder-eg.gif)

Let's look at an example of using an expression in the **Body** section of an email being sent using the **Send email** rule:

1. First, add a **Send email** rule to a form or forms, field or fields by selecting **Add a rule** > **Communications**> **Send email** from the left-side pane.

2. Type in any text that you want in the email **Body** and position your cursor where you want to add the expression.

   ![Cursor positioning in an email body to add an expression](/images/cursor-in-expression.jpg)

3. On the right of the **Body** section of the email, click on the **Expressions** button ![Expressions](https://academy.kianda.com/wp-content/uploads/2022/02/ellipsis.png).

4. The **Expression builder** dialog box appears.

5. Click on the blank box under **Add field to expression** and find the field you want to reference in your email, for example, a text box with a name **'EmployeeName'**.

6. Click **Add to expression**. The result is that the field appears in the Expression box. 

   ![Expression builder example](/images/expression-builder-example.jpg)

7. Click **OK** to add the expression to the email body text, or click on **Close** to exit the dialog box without making changes.

8. To add additional field expressions, click on the **Expressions** button ![Expressions](https://academy.kianda.com/wp-content/uploads/2022/02/ellipsis.png)again, under **Add field to expression**, click on **X** beside the field name to clear the expression box and then search for the desired field from a form.

9. To add a function, click on **Reference** and copy the function into the body of the email. A list of references are available below.

   

## Expression functions

All JavaScript expressions and functions can be used in the Expression builder to create the impact you want, see [Javascript expressions](/docs/low-code/javascript-expressions/) for more details.

In addition to defining your own expressions there is a set list of expressions found under **References**, see table below for meaning.

| Expression                                    | Function                                                     |
| :-------------------------------------------- | :----------------------------------------------------------- |
| +, -, /, \*                                   | Performs one of the basic mathematical operations: add, subtract, divide or multiply. |
| Sum(arg1, arg2, ...)                          | Returns the sum of the arguments listed between the parentheses. |
| Date(arg1)                                    | Converts the argument into a date.                           |
| DateAdd(dateArg, day, month, year, hour, min) | Adds time to a given date. The date is stored in dateArg and the time to be added is stored in the day, month, year, hour and min arguments. |
| Status()                                      | Returns the status of the current process.                   |
| ProcessID()                                   | Returns the ID of the current process.                       |
| FormOwner(formName)                           | Returns the form owner(s) for the given form.                |
| FormCompleted(formName)                       | Returns the date completed for the given form.               |
| Pad(value, size, symbol)                      | Adds left padding to the value with the symbol provided.     |
| QueryString(parameter)                        | Returns the URL query string for the given parameter (or an empty string if undefined). |
| IsOnline()                                    | Returns "yes" or "no" depending on the status of the online connection. |
| ProcessLink()                                 | Returns the HTML link to the current process  The link text can be added between the parantheses e.g. ProcessLink("click here"). This expression is for use in emails and rich text fields. |
| Digest()                                      | Returns a summary of changes to fields in the current process.  A table will be given with the original and new values. |
| Digest('fieldName1','fieldName2')             | Returns a summary of the changes for the given fields.  See note below. |
| GetFieldText('fieldName')                     | Returns the text in the given field. See note below.         |
| GetFieldValue('fieldName')                    | Returns the value in the given field. See note below.        |

**Note**: In the case of the last three expressions, you should select a field which contains data.  If you give the name of a button field for example, then no data will be returned.

### What's next  ![Idea icon](/images/18.png) ###

To find out more about rule implementation, go to the main [Rules](/docs/platform/rules/) page and then click on the links to the different rule categories.

To see how expressions are used in controls such as Number fields, go to [Number control](/docs/platform/controls/input/number/).

To learn more about how to use JavaScript expressions in expression builder go to [Javascript expressions](/docs/low-code/javascript-expressions/) for more details.



