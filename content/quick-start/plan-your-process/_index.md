---
title: "Implementing Process logic with rules"
linkTitle: "3. Process logic with rules"
description: "Define dynamic logic with rules and conditions to automates tasks, integrate with various data sources and external systems"
weight: 3
typora-root-url: ..\..\..\static
---

1. [Forms and controls](../form-controls-layout/)
2. [Connect to data sources](../connect-your-data/)
3. **Process logic with rules**
4. [Publish a process with pages](../publish-your-process/)

## 1. Introduction

In Kianda, rules form the backbone of dynamic and robust process applications. They enable you to define logic that responds to user inputs, automates tasks, and integrates with various data sources and external systems. 

By leveraging more than 60 built-in rules, along with the ability to create custom rules using JavaScript, Handlebars, and HTML, you can design process apps that are both flexible and powerful.

This guide will introduce you to the concept of process logic within Kianda, emphasizing the critical role rules play in creating responsive and efficient workflows. You'll learn how to use rules to control the behavior of forms and fields, automate communications, manage data, and integrate with user and file management systems. 

Whether you are hiding a field based on user input, sending automated emails, or updating a database, rules provide the necessary logic to make these actions possible.

Before diving into the specifics, ensure that you have a basic understanding of Kianda's interface and permissions, as well as familiarity with the types of [data sources](../connect-your-data/) and systems you plan to integrate. 

This foundation will help you navigate the various rule configurations and make the most of Kianda's process automation capabilities. 

By the end of this guide, you will be well-equipped to implement dynamic process logic that meets your business needs efficiently and effectively.

## 2. Understanding Rules in Kianda

Rules in Kianda are essential components that drive the behavior and logic of process applications. They provide the dynamic capabilities needed to respond to user actions, automate processes, and interact with external systems and data sources. 

Understanding the different types of rules and how they can be utilized is crucial for building effective and robust process applications.

#### Types of Rules

Kianda offers a wide range of built-in rules that cater to various needs, grouped into categories such as Workflow, Communications, Data, Users, File Management, Tables, Dates, Actions, and SharePoint Integration. Each category encompasses rules designed for specific functionalities. For example:

- **Workflow Rules**: Manage the flow of your process by showing or hiding fields, making fields required, navigating between forms, and starting or scheduling processes.
- **Communications Rules**: Automate sending emails, meeting requests, and user alerts and push notifications.
- **Data Rules**: Handle CRUD operations (Create, Read, Update, Delete) on data sources, enabling dynamic data management within your forms.
- **User Management Rules**: Manage user properties, look up users, and invite partners to processes.
- **File Management Rules**: Perform operations on files, such as copying, converting to PDF, generating documents, and creating anonymous links.
- **Table Management Rules**: Manipulate table data by adding, removing, sorting, and aggregating rows.
- **Date Rules**: Manage date-related operations, such as adding time, calculating intervals, and comparing dates.
- **Action Rules**: Perform actions such as validating input, submitting forms, and saving or closing forms.
- **SharePoint Integration Rules**: Integrate with SharePoint to manage lists, sites, groups, and permissions.

#### Custom Rules

In addition to the default rules, Kianda allows developers to create custom rules using JavaScript, Handlebars, and HTML. This feature provides the flexibility to implement bespoke logic and functionalities tailored to your specific business requirements. 

Custom rules can be used to extend the capabilities of your process applications, offering advanced control over how your processes operate.

#### Rule Categories and Their Uses

Each rule category in Kianda serves a specific purpose and is designed to address particular aspects of process automation:

- **Workflow Rules**: Ensure that the right actions are taken at the right time within your process, maintaining control over the flow and state of forms and fields.
- **Communications Rules**: Facilitate automated communication with users, keeping them informed and engaged throughout the process.
- **Data Rules**: Enable seamless interaction with data sources, ensuring that your forms are always up-to-date and can perform complex data operations.
- **User Management Rules**: Allow for dynamic user interactions, making it easy to manage user-related information and permissions.
- **File Management Rules**: Provide robust file handling capabilities, essential for processes that involve document management.
- **Table Management Rules**: Offer powerful tools for managing tabular data, which is often crucial for business applications.
- **Date Rules**: Simplify date manipulations, making it easier to work with time-sensitive data.
- **Action Rules**: Automate common actions, improving the efficiency and responsiveness of your forms.
- **SharePoint Integration Rules**: Seamlessly connect with SharePoint, leveraging its capabilities for document and user management.

By understanding these categories and the specific rules within them, you can effectively plan and implement dynamic process logic in Kianda. This foundational knowledge will enable you to create process applications that are not only functional but also highly adaptable to your business needs.

<video class="inline-video-player" loading="lazy" muted loop playsinline autoplay poster>
    <source src="/videos/Overview-of-Rules.mp4">
    Your browser does not support the video tag.
    </source>
</video>



## 3. Creating and Managing Rules

Creating and managing rules in Kianda is a straightforward process that allows you to implement complex logic and dynamic behaviors in your process applications. This section will guide you through the steps of adding rules to controls, managing form submission rules, and configuring process load rules.

#### Adding Rules to Controls

Adding rules to controls is a fundamental aspect of creating dynamic forms in Kianda. Controls, such as text boxes, dropdown lists, and buttons, can have rules attached to them to define their behavior based on user interactions. Here’s how you can add rules to controls:

1. **Select the Control**: Navigate to the form designer and select the control you want to add a rule to.
2. **Add the rule**: In the left panel,  find the and click on "Add a rule" to expand the section.
3. **Choose the Rule Type**: Select the type of rule you want to add from the list of available rules. For example, you might choose a "Hide or Disable" rule to conditionally hide a control based on user input.
4. **Define Rule Conditions**: Set the conditions that trigger the rule. Conditions can be based on field values, user properties, dates, and more. You can add multiple conditions and condition groups to create complex logic.
5. **Configure the Rule Action**: Specify the action that should occur when the conditions are met. For example, if the rule is to hide a control, you will specify which control to hide.
6. **Save the Rule**: Once you’ve configured the rule, click ok to apply the logic to the control.



#### Form Submission Rules

Form submission rules are executed when a form is submitted and marked as completed using the "Submit Form" rule. These rules are crucial for performing final validations, calculations, or data operations before the form is finalized. To add submission rules:

1. **Access Form Rules**: In the form designer, click on the form tab on the top to reveal the "Form submit rules" section under the properties panel.
2. **Add a Form Submission Rule**: On the left panel click on "Add a rule" to expand the rules section. Rules added here should be executed upon form submission. For example, you might add a "Send Email" rule to notify a supervisor that the form has been completed.
3. **Define Rule Conditions**: Similar to control rules, define any conditions that need to be met for these rules to execute. This ensures that the rules are only triggered under the appropriate circumstances.
4. **Save and Test**: Save the rules and test the form submission to ensure that all logic is executed as expected.

The "Submit Form Rule" rules can be added to a submit button to initiate the submit form event.

#### Process OnLoad Rules

Process load rules are executed when a process is loaded. These rules are useful for pre-loading data, initializing form fields, or performing any setup operations required when the users opens the process. Here’s how to configure process load rules:

1. **Open On Load Rules**: In the process designer, click the title of the process on the top bar above the save button". This will reveal the "On load rules" on the properties panel on the right.
2. **Add Onload Rules**: Select "Add a rule" under left panel to expand the rules section. Choose the type of rule you want to execute when the process loads, such as "Find Items" to pre-load data into the form.
3. **Define Conditions and Actions**: Set the conditions that trigger the rule and specify the actions to be performed. For example, you might set a condition to check if certain data is available before populating the form fields.
4. **Test the Process Load**: Save the rules and load the process to verify that the onload rules execute correctly and the form is initialized as intended.

By mastering the creation and management of rules in Kianda, you can build highly dynamic and responsive process applications. These rules allow you to automate tasks, enforce business logic, and create user-friendly forms that adapt to various inputs and conditions, ultimately enhancing the efficiency and effectiveness of your workflows.

<video class="inline-video-player" loading="lazy" muted loop playsinline autoplay poster>
    <source src="/videos/Add-a-rule.mp4">
    Your browser does not support the video tag.
    </source>
</video>



## 4. Rule Conditions

Rule conditions in Kianda provide the logical framework that determines when a rule will execute. These conditions are essential for implementing dynamic behaviors in your process applications, ensuring that actions are only taken when specific criteria are met. Understanding how to configure and use rule conditions is crucial for building robust and responsive process apps.

#### Overview of Rule Conditions

Rule conditions are the building blocks of logic within Kianda rules. They define the "if-then" scenarios that control the execution of actions in your process apps. Each rule can have an unlimited number of conditions, allowing you to create complex and nuanced logic. Conditions can be based on various factors, such as field values, dates, user properties, and more.

#### Condition Groups and Conditions

Rule conditions are composed of condition groups and individual conditions:

- **Condition Groups**: These act like parentheses in logical expressions, grouping multiple conditions together. You can define whether all conditions within a group must be met (AND logic) or if meeting any one condition is sufficient (OR logic).
- **Individual Conditions**: Each condition represents a specific logical test, such as checking if a field equals a certain value or if a date falls within a specified range. These conditions form the criteria that must be evaluated to determine whether a rule should execute.

The **conditions visual editor** provides a visual editor in the process designer that enables developers easily author conditions for use in many logical scenarios.

![Conditions editor](/images/editconditions.gif)

Here is an example JSON representation of rule conditions:

```json
"condition-groups": [{
  "group": "and",
  "conditions": [{
    "operator": "eq",
    "arg1": {
      type: "field",
      name: "field1"
    },
    "arg2": {
      type: "text",
      value: "text"
    }
  }]
}]
```

The above is only for illustration, developers use the visual conditions editor above to achieve the desired conditional logic.

#### Example of Rule Conditions

Consider a rule designed to hide a specific form field based on user input. The rule might include conditions that check if a text box contains a certain value. If the condition is met, the field will be hidden. This is an example of a hide/show rule with conditions:

#### Available Condition Operators

Kianda provides a wide range of condition operators to support various logical tests. These operators can be used to compare values, evaluate dates, check for patterns, and more. Here are some of the available condition operators:

- **Date Operators**:
  - Is Today
  - Is Before Today
  - Is After Today
  - Is This Week
  - Is Previous Week
  - Is Next Week
  - Is This Month
  - Is Previous Month
  - Is Next Month
  - Is This Year
  - Is Previous Year
  - Is Next Year
  - Is Between Dates
- **General Operators**:
  - Equals (eq)
  - Not Equals (neq)
  - Contains (contains)
  - Greater Than (gt)
  - Greater or Equal (gte)
  - Less Than (lt)
  - Less or Equal (lte)
  - Is Blank (isblank)
  - Not Blank (notblank)
  - Matches Pattern (match)
  - Does Not Match Pattern (nomatch)
  - Is Visible (isvisible)
  - Is Enabled (isenabled)
  - Is Current User or Member (IsUserOrMember)

#### Configuring Rule Conditions

To configure rule conditions in Kianda:

1. **Select the Rule**: Navigate to the rule you want to configure within the form or process designer.
2. **Edit Conditions**: Click on "Edit conditions" to open the conditions editor.
3. **Add Condition Groups**: Define your condition groups and specify whether they should use AND or OR logic.
4. **Add Conditions**: Within each group, add individual conditions using the available operators. Specify the field, value, or property to be tested.
5. **Save and Test**: Save your conditions and test the rule to ensure it behaves as expected under the defined criteria.

By leveraging rule conditions, you can create highly dynamic and responsive process applications in Kianda. These conditions allow you to implement precise control over when and how rules are executed, ensuring that your business logic is applied correctly and efficiently.



## 5. Workflow Rules

Workflow rules in Kianda are designed to manage the flow and state of forms and fields within your process applications. These rules help control visibility, required status, navigation between forms, assignment of forms, and more. Understanding and utilizing these rules effectively can significantly enhance the functionality and user experience of your process apps.

#### Hide or Disable

The "Hide or Disable" rule is used to control the visibility and interactivity of forms and fields based on specific conditions. This rule can hide, show or disable, enable elements dynamically, ensuring that users only see and interact with relevant parts of the form.

- **Use Case**: Hide a section of the form unless a checkbox is checked.

#### Make Required

The "Make Required" rule forces a field to be mandatory based on certain conditions. This ensures that users provide necessary information before proceeding.

- **Use Case**: Make an email field required if a "Contact Me" checkbox is checked.

#### Go to Form

The "Go to Form" rule sets a specific form as the current form within a multi-form process. This rule helps navigate users through different steps or stages of a process.

- **Use Case**: Direct users to a summary form after they complete the initial input form.

#### Assign Form

The "Assign Form" rule assigns a form to one or more users, enabling dynamic assignment based on certain criteria. This is useful for workflows that require different users to complete different parts of the process.

- **Use Case**: Assign a review form to a manager if the total expense exceeds a certain amount.

#### Process Security

The "Process Security" rule allows you to enable or disable process security dynamically. This rule helps in managing access and permissions based on specific conditions.

- **Use Case**: Enable additional security for sensitive forms.

#### Start a Process

The "Start a Process" rule initiates a new process based on certain conditions. This rule can automate the initiation of related processes, ensuring seamless workflow integration.

- **Use Case**: Start an approval process when a new request is submitted.

#### Schedule a Rule

The "Schedule a Rule" allows you to automate actions at specific times or intervals. This rule is useful for recurring tasks or timed actions within your process.

- **Use Case**: Send a reminder email every Monday morning.

By effectively utilizing workflow rules in Kianda, you can create dynamic and responsive processes that adapt to user inputs and automate essential tasks. These rules ensure that your forms and processes are intuitive, efficient, and aligned with your business requirements.



## 6. Communication Rules

Communications rules in Kianda are essential for automating interactions and keeping stakeholders informed throughout your process applications. These rules enable you to send emails, meeting requests, alerts, and create anonymous form links, ensuring seamless communication and collaboration. Understanding how to configure and use these rules will enhance the responsiveness and efficiency of your processes.

#### Send Email

The "Send Email" rule allows you to automatically send emails based on specific triggers or conditions. This rule is useful for notifying users about important events, updates, or actions required.

- **Use Case**: Send a confirmation email to a user after they submit a form.

#### Meeting Request

The "Meeting Request" rule automates the creation and sending of meeting invitations. This is particularly useful for scheduling meetings directly from a process without manual intervention.

- **Use Case**: Schedule a project kickoff meeting when a new project is approved.

#### Anonymous Form Link

The "Anonymous Form Link" rule generates a link to a form that can be accessed without requiring user authentication. This is useful for collecting information from external users or stakeholders who do not have access to the Kianda platform.

- **Use Case**: Create an anonymous feedback form link for external partners.

#### User Alert

The "User Alert" rule sends an alert or "push notification" to a specific user or group of users. This rule is useful for urgent notifications or reminders that require immediate attention.

- **Use Case**: Send an alert to a manager when a critical issue is reported.

By leveraging communications rules in Kianda, you can automate critical interactions and ensure that all relevant parties are kept informed and engaged. These rules help maintain clear and timely communication, which is essential for the smooth operation of your processes and the overall success of your projects.



## 7. Data Rules

Data rules in Kianda are crucial for managing and manipulating data within your process applications. These rules enable you to perform CRUD operations (Create, Read, Update, Delete) on various data sources, ensuring your forms are dynamic and data-driven. Understanding how to configure and use these rules will allow you to build powerful, data-centric process apps.

#### Set Form Field

The "Set Form Field" rule allows you to dynamically set the value of a form field based on specific conditions or calculations. This rule is useful for auto-populating fields, performing calculations, or dynamically updating form content.

- **Use Case**: Auto-fill the current date in a date field when the form is loaded.

#### Find Items

The "Find Items" rule queries a data source to retrieve and display data in your form. This rule is essential for populating tables, and other controls with external data based on specific criteria.

- **Use Case**: Retrieve and display a list of active projects in a table field.

#### Create Item

The "Create Item" rule inserts a new record into a data source based on user input from the form. This rule is transformed into an INSERT statement when working with databases, allowing you to add new data entries dynamically.

- **Use Case**: Add a new customer record to the CRM database when a form is submitted.

#### Update Item

The "Update Item" rule modifies existing records in a data source. This rule can update multiple items in one operation and includes a flag to ignore blank values, ensuring that only specified fields are updated.

- **Use Case**: Update the status of a project in the database when a form field is changed.

#### Delete Item

The "Delete Item" rule removes records from a data source based on specific conditions. This rule is equivalent to a DELETE statement in database terms, allowing you to dynamically manage data cleanup.

- **Use Case**: Delete a user record from the database if the user is marked as inactive.

By effectively utilizing data rules in Kianda, you can create process applications that are highly interactive and data-driven. These rules allow you to automate data management tasks, ensuring your forms are always up-to-date and reflecting the latest information from your data sources.



## 8. File Management Rules

File management rules in Kianda enable you to handle files and documents within your process applications. These rules allow you to perform various file operations such as copying, converting, generating documents, and creating anonymous links. Understanding how to configure and use these rules will help you build process apps that effectively manage and automate file-related tasks.

#### Copy File

The "Copy File" rule allows you to copy files from one field to another within a form or process. This rule is useful for duplicating files, maintaining backups, or distributing files across different parts of a process.

- **Use Case**: Copy an uploaded document to a review section when a form is submitted.

#### Convert to PDF

The "Convert to PDF" rule converts documents to PDF format. This rule is useful for standardizing document formats, ensuring compatibility, and preparing files for distribution or archiving.

- **Use Case**: Convert an uploaded Word document to PDF when a form is approved.

#### Generate Word Document

The "Generate Word Document" rule creates a Word document from process data. This rule is useful for generating reports, letters, and other documents dynamically based on form inputs.

- **Use Case**: Generate a contract document from form data when a form is submitted.

#### Generate Excel Workbook

The "Generate Excel Workbook" rule creates an Excel workbook from process data. This rule is useful for generating spreadsheets, reports, and data analysis files dynamically based on form inputs.

- **Use Case**: Generate a financial report in Excel format from form data when a form is submitted.

#### Set Existing File

The "Set Existing File" rule allows you to set an existing file into a file field within a form. This rule is useful for pre-populating file fields with documents that are already available in the system.

- **Use Case**: Attach a template document to a form when it is loaded.

#### Merge PDF

The "Merge PDF" rule combines two or more PDF or image files into a single document. This rule is useful for consolidating related documents into a single file for easier management and distribution.

- **Use Case**: Merge multiple PDF reports into a single document when a form is submitted.

#### Create File Anonymous Link

The "Create File Anonymous Link" rule generates a link to a file that can be accessed without requiring user authentication. This is useful for sharing files with external users or stakeholders who do not have access to the Kianda platform.

- **Use Case**: Create an anonymous download link for a report when it is generated.

By leveraging file management rules in Kianda, you can automate and streamline various file-related tasks within your process applications. These rules ensure that your files are handled efficiently and securely, enhancing the overall functionality and user experience of your forms.

## 9. Table Management Rules

Table management rules in Kianda enable you to manipulate and manage tabular data within your process applications. These rules allow you to perform operations such as adding, removing, and sorting table rows, importing and exporting data, and aggregating values. Understanding how to configure and use these rules will help you build process apps that effectively manage and automate tasks involving tabular data.

#### Loop Table

The "Loop Table" rule iterates through each row in a table, allowing you to perform actions on each row individually. This rule is useful for processing data row by row, such as performing calculations or updating records.

- **Use Case**: Calculate the total cost for each item in an order form.

#### Add Table Row

The "Add Table Row" rule adds a new row to a table dynamically based on specific conditions. This rule is useful for expanding tables as new data is entered or specific criteria are met.

- **Use Case**: Add a new row to the tasks table when a new task is created.

#### Remove Table Row

The "Remove Table Row" rule removes a specific row from a table based on certain conditions. This rule is useful for cleaning up data and ensuring that only relevant rows are displayed.

- **Use Case**: Remove a row from the expense report table if the expense is marked as invalid.

#### Import CSV

The "Import CSV" rule allows you to import data from a CSV file into a table. This rule is useful for bulk data entry, where data from external sources can be imported directly into the process application.

- **Use Case**: Import employee details from a CSV file into an employee records table.

#### Export CSV

The "Export CSV" rule exports the data from a table into a CSV file. This rule is useful for generating reports and exporting data for use in other applications.

- **Use Case**: Export a list of registered participants from an event registration table.

#### Copy Table Rows

The "Copy Table Rows" rule copies rows from one table to another within the same form or process. This rule is useful for duplicating data or transferring information between tables.

- **Use Case**: Copy selected rows from a draft table to a final approval table.

#### Clear Table Rows

The "Clear Table Rows" rule removes rows from a table based on specific criteria. This rule is useful for clearing outdated or irrelevant data from tables.

- **Use Case**: Clear all rows from a temporary data table after processing.

#### Lookup Value from Table

The "Lookup Value from Table" rule searches for a value in a table based on specified criteria and returns the matching row. This rule is useful for finding and displaying specific data within a table.

- **Use Case**: Lookup and display the details of an order based on the order ID.

#### Update Table Values

The "Update Table Values" rule updates the values of specific columns in a table based on certain conditions. This rule is useful for modifying table data dynamically as form inputs change.

- **Use Case**: Update the status of all tasks in a project tasks table when the project status changes.

#### Sort Table

The "Sort Table" rule sorts the rows of a table based on one or more columns. This rule is useful for organizing data in a specific order to improve readability and usability.

- **Use Case**: Sort the items in an inventory table by item name and quantity.

#### Aggregate Table

The "Aggregate Table" rule performs calculations on table data, such as summing up values or calculating averages. This rule is useful for generating summary statistics and insights from tabular data.

- **Use Case**: Calculate the total cost of items in a purchase order table.

#### Hide / Show Column

The "Hide / Show Column" rule allows you to dynamically control the visibility of table columns based on specific conditions. This rule is useful for customizing the display of table data.

- **Use Case**: Hide the cost column in a budget table for non-admin users.

By utilizing table management rules in Kianda, you can efficiently handle and automate tasks involving tabular data. These rules provide powerful tools to manipulate table data, ensuring your process applications are dynamic, interactive, and data-driven.



## 10. Action Rules

Action rules in Kianda are designed to automate various tasks and interactions within your process applications. These rules enable you to perform actions such as validating inputs, submitting forms, saving changes, and closing forms. Understanding how to configure and use these action rules will help you build responsive and efficient process apps that enhance user experience and ensure data integrity.

#### Validate Input

The "Validate Input" rule ensures that form inputs meet specified criteria before allowing the user to proceed. This rule is crucial for maintaining data quality and preventing errors.

- **Use Case**: Ensure that an email field contains a valid email address format before submission.

#### Field Display Mode

The "Field Display Mode" rule temporarily changes the display mode of a field or form. This rule is useful for customizing the user interface based on specific conditions or actions.

- **Use Case**: Change a text field to read-only mode after it is filled out.

#### Submit Form

The "Submit Form" rule marks a form as completed and triggers any associated submission logic. This rule is essential for finalizing forms and moving to the next step in a process. Additionally, it allows defining the process status upon submission.

- **Use Case**: Submit a leave request form after all required fields are filled.

#### Save Form

The "Save Form" rule saves or commits the current state of the form without marking it as completed. This rule is useful for allowing users to save their progress and return to the form later.

- **Use Case**: Save the progress of a long survey form so users can complete it later.

#### Close Form

The "Close Form" rule allows the user to exit the form and navigate to another location. This rule is useful for managing form navigation and user flow. There are several options for configuring the navigation behavior:

- **Auto**: Attempts to navigate the user to the previous page or screen before entering the form.
- **Return to a Dashboard**: Returns the user to a specific dashboard page, useful for allowing the user to return to the process landing page.
- **Return to a URL**: Redirects the user to another URL within or outside of the same workspace.
- **Go to a Process**: Redirects the user to another process record or new form, useful for scenarios where you want to navigate to related records or processes.
- **Use Case**: Close a feedback form and return the user to the main dashboard.

#### Delete Form

The "Delete Form" rule deletes the current form or process. This rule is useful for removing forms that are no longer needed or for cleanup operations.

- **Use Case**: Delete a temporary form used for data collection after processing the data.

By utilizing action rules in Kianda, you can automate a wide range of tasks within your process applications, ensuring that your forms are responsive and efficient. These rules help streamline workflows, maintain data integrity, and enhance the overall user experience, making your process apps more robust and effective.



## 11. Best Practices for Using Rules

Implementing rules effectively in Kianda is crucial for creating dynamic, efficient, and robust process applications. Following best practices ensures that your rules are not only functional but also maintainable and scalable. Here are some key recommendations to follow when working with rules in Kianda:

#### Planning Process Logic

Before you start adding rules to your forms and processes, it's essential to plan your logic carefully. Understand the business requirements and define the desired outcomes. Mapping out the process flow and identifying where and when each rule should be applied will save you time and prevent potential issues.

- **Define Objectives**: Clearly outline what each rule is supposed to achieve. For example, ensure that a required field is always filled or that a particular action is triggered under specific conditions.
- **Visualize the Flow**: Create flowcharts or diagrams to visualize the process logic. This helps in understanding the sequence of actions and identifying any potential gaps or conflicts.
- **Prioritize Rules**: Determine which rules are critical and should be implemented first. Focus on core functionalities before adding more complex or conditional rules.

#### Combining Rules for Robust Processes

Combining multiple rules can create powerful and flexible process applications. However, it's essential to ensure that these rules work together seamlessly and do not conflict with each other.

- **Layer Rules Strategically**: Start with basic validation and action rules, then layer more complex conditions and actions. This approach helps in building a solid foundation and ensures that simpler rules are not overshadowed by more complex ones.
- **Use Condition Groups**: Utilize condition groups to manage complex logic effectively. Grouping conditions allows you to apply AND/OR logic, making it easier to handle multiple criteria.
- **Test Incrementally**: After adding or modifying a rule, test the form or process to ensure that it behaves as expected. Incremental testing helps in identifying issues early and prevents cascading errors.

#### Testing and Debugging Rules

Thorough testing and debugging are crucial to ensure that your rules perform correctly under various scenarios. This step helps in maintaining the reliability and integrity of your process applications.

- **Simulate Different Scenarios**: Test your rules with various inputs and conditions to ensure they handle all possible cases. Consider edge cases and unlikely scenarios to ensure robustness.
- **Use Debugging Tools**: Kianda provides tools for debugging and monitoring rules. Utilize these tools to trace rule execution, identify issues, and understand the flow of actions.
- **Review Logs and Reports**: Regularly review logs and reports generated by Kianda to identify any errors or unexpected behaviors. Logs provide valuable insights into rule execution and help in pinpointing issues.
- **Involve Stakeholders**: Include end-users and stakeholders in the testing process. Their feedback can provide valuable insights into how the rules perform in real-world scenarios and help identify any usability issues.

#### Documentation and Maintenance

Maintaining clear documentation and regular updates is essential for managing rules over time. Well-documented rules make it easier for team members to understand and modify process logic as needed.

- **Document Rule Logic**: Keep detailed documentation of each rule, including its purpose, conditions, and actions. This documentation serves as a reference for current and future team members.
- **Version Control**: Use version control to track changes to rules and processes. This practice helps in managing updates and allows you to revert to previous versions if needed.
- **Regular Audits**: Periodically review and audit your rules to ensure they are still relevant and performing as expected. Remove or update outdated rules to maintain the efficiency and accuracy of your processes.

By adhering to these best practices, you can ensure that your rules in Kianda are well-designed, maintainable, and effective. These practices help in creating dynamic and responsive process applications that meet your business needs and provide a positive user experience.



#### Quick Start 

1. [Forms and controls](../form-controls-layout/)
2. [Connect to data sources](../connect-your-data/)
3. **Process logic with rules**
4. [Publish a process with pages](../publish-your-process/)

