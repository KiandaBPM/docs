---
title: "Scheduled tasks"
typora-root-url: ..\..\..\..\static
---

The **Scheduled tasks** function is available to administrators and is found in the left-hand side pane, under **Administration**. The Scheduled tasks function allows you to schedule a task, that could be a process or a rule for example to send reminder emails.

### How to get started

To view use the Scheduled tasks function:

1. Click on **Administration** in the left-hand side pane and then click on **Scheduled tasks**. 

2. You can view any current tasks in the main tasks view. 

   ![Scheduled tasks view](/images/schedule-tasks-view.jpg)

   In this view you can see the **Name** of the task, the **Schedule** for example weekly or monthly, when the task was **last run**, when the task will **next run**, the **status** of the task, the name of the associated **process** and process **instance** where relevant, and **who** is the administrator of the task/who has created the task. 

3. To see a complete list of scheduled tasks click on **Show All**.

4. To schedule a new task, click on the **Schedule a task** button. 

5. In the **Schedule a task** dialog box, select a **Task name** for the task and then a **schedule** choosing from  **One time**, or a periodic schedule from: **Minutes**, **Hourly**, **Daily**, **Weekly**, **Monthly** or **On demand**.

  ![Scheduled tasks view](/images/schedule-tasks-box.jpg)

6. Depending on which option you choose, different **time modes** or ways of scheduling the task will be presented:

   - **One time** - choose from **Absolute** or **Relative from now** as shown in the image above. Choosing **Absolute** means the time starts at the date and time entered into the date and time field, choosing **Relative from now** means you can choose that the schedule starts in X number of **days**, **hours** and **mins**. 

   - **Minutes** - enter a numeric value into the minutes box

   - **Hourly** - enter a numeric value into the minutes and **Every** field, to set a recurring schedule, see image below:
     ![Hourly schedule option](/images/hours-schedule.jpg)

   - **Daily** - enter a time in the **At** field, a numeric value in the **Every** field, to set a recurring schedule and check the checkbox for **Week days** **only** to only schedule the task on weekdays.

   - **Weekly** - enter a day of the week in the **Week day** field, a time in the **At** field, and a numeric value in the **Every** field.

   - **Monthly** - enter a numeric value in the **Day** field to set what day of the month, or choose values to set when the task should happen for example , the **First** **Monday** of a month, as shown in the image below.  Also select a time in the **At** field, and a numeric value in the **Every** field.
   
     ![Monthly schedule option](/images/schedule-monthly.jpg)


   - **On demand** - if you choose this option then a **Task Webhook URL** field will appear. If you click on **OK** the URL is generated by the system. This will send a POST request to the generated URL to trigger the task on demand. If you add an optional instanceID parameter you can run the task on a specific instance. 

6. Select a process from the **Process design** dropdown list.

6. For **Process ID** leave the field empty if it is a new task or enter the process ID for a given record/process instance.

   

### What's next  ![Idea icon](/images/18.png) ###

To read more about how to create processes and forms go to [Application Designer](/docs/platform/application-designer/).

