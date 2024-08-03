---
title: "Task Automation with Kianda"
linkTitle: "Task Automation"
typora-root-url: ..\..\..\..\static
---

## Introduction

Automation in Kianda happens at various level and in various ways, all of which you can control using the click of a button, or configuring a parameter. To help you recognise how automation can happen, we've broken it down for you into different sections:

1. [Process level automation](#process-level-automation)
2. Field level automation

## Process level automation

Process level automation, means that new **process instances are created automatically** without requiring a user action to initiate the process.

This can happen in a number of ways:

- [Scheduled tasks function](#scheduled-tasks-function)
- [Start a process rule](/docs/platform/rules/workflow/start-a-process/)
- [Schedule a Rule rule](/docs/platform/rules/workflow/schedule-a-rule/)

### Scheduled tasks function

As an **administrator** you can use Kianda to automate any tasks in few simple steps. Tasks could be something like sending reminder emails, having a background check, action with respect data source or scheduling a sub-process. 

![Scheduled tasks list](/images/kianda-schedule-tasks.JPG)

Scheduling a task from the left navigation panel in a few simple steps:

1. Click on 'Scheduled tasks' and click 'Schedule a task' to create a new task.

   ![Scheduled task settings](/images/kianda-schedule-new-task.JPG)

2. Type in a task name.

3. Schedule: This field defines when does the schedule run.

4. Time mode: Choose an Absolute time or define a Relative time from now.

5. Process design: The process we are looking to automate.

6. Process ID: If we want to restrict the scheduled task on one particular instance of the process, then we could define the unique process ID of the instance in the Process ID field.

7. Select the field or rule: Selecting which rule or field to automate.

## Re-occurrence

The Kianda schedule tasks can be triggered for re-occurrence. The re-occurrence could be by minutes, hours, days, weeks or months. Further, the schedule tasks could be configured easily to run at a specific minute of the hour, weekdays only, specific day of the week or specific day of the month.



