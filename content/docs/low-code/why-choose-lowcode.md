---
title: "Why choose low-code development?"
weight: 2
typora-root-url: ..\..\..\static
---

## Introduction

Kianda’s low code development environment provides developers with a graphical user interface to quickly create customised applications that can be used in automated processes.

Kianda Developer can be utilised to implement HTTP requests and [API](/docs/apis/) calls to allow for real-time data interactions. To learn more about low-code development, see [What is Low-Code Development?](/docs/getting-started/welcome/low-code/).



## Why choose low-code development? 

Providing you have some software development and/or coding knowledge, low-code development can allow you to implement customised Kianda widgets to meet user-specific needs such as creating custom ‘Field’, ‘Rule’ or ‘Dashboard widget’ elements.

There are 16 predefined fields and 60 rules available for non-developers to use in a no-code form design GUI. However if these do not suit, then Kianda’s low-code development solution provides near limitless room for process expansion. As the Kianda platform offers access to any data source (including real-time synchronisation of the data) and integration with many other software tools and applications, the implementation of low-code can provide your business processes with extreme scalability and room for improvement.

You can also build upon pre-defined field, rule and dashboard code to offer the developer a shortcut in creating something new and beneficial for the organisation. For example, you can see a rule widget user interface being designed below, using HTML, handlers, expressions and more.

![Rule widget UI](/images/rulewidgetui150.PNG) 



## How to implement low-code development 

If you are an experienced developer with an **Administrator** or **Developer** role (see [Users & Groups](/docs/platform/administration/users/)), you can create a new custom widget within Kianda by doing the following: 

1. Navigate to **Administration > Developer > New widget** to begin creating a new custom widget.

2. Under **Edit widget**, you must fill out the following: 

   * **Title** – The name of your new custom widget

   * **Unique Id** – The unique identifier used within the code to refer to this widget (It should be noted that this field is filled out automatically based on the entered Title, however it can be edited).

   * **Widget Icon** – The icon image that the custom widget will be associated with

   * **Widget type** – choose from **Field**, **Rule**, and **Dashboard Widget**

     ![Edit widget screen](/images/dashboard-widget-holiday.jpg) 

3. From here, you can select:
   * **Widget UI** – a coding environment that allows you to define HTML handlers (*link*), expressions and more.
   * **Widget Code** – a coding environment that allows you to define the logic and functions behind the custom widget.
4. When you are complete, click on the OK button ![update button](/images/ok.png) to save the changes made. The newly created custom widget can be displayed in the view widget pane. You can use the version history button ![version history button](/images/version-history-btn.jpg), edit button ![edit button](/images/edit_orig.png) and delete button ![delete button](/images/delete-btn.jpg) to visualise and perform any necessary changes.



Depending on the type of newly created custom widget, they can be accessed by:

* **Field widget** - Navigate to **Administration > Designer > *Your Process* > Controls.** Under **Custom**, your field widget will be displayed and is now ready for use.

* **Rule widget** - Navigate to **Administration > Designer > *Your Process* > Add a rule.** Under **Custom**, your rule widget will be displayed and is now ready for use.

* **Dashboard widget** - Navigate to **Dashboard > *Your Dashboard* > Edit current page** button ![edit current page button](/images/editpage.PNG). From there, you click the drop-down list button and you will have access to the created custom dashboard widgets.

  To learn more about widgets, see [Custom form control development](/docs/low-code/field-widget/).



## What's next

To continue with low-code development, you can view [Templating basics](/docs/low-code/templating-basics/). If you would like to learn more about ‘no-code versus low-code’ in general, see [What is no-code?](/docs/getting-started/welcome/no-code/) and [What is low-code?](/docs/getting-started/welcome/low-code/). 



