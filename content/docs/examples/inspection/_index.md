---
title: "Simple Inspection process"
typora-root-url: ..\..\..\..\static
---

In this example we will step through how to create a simple Inspection process made up of two forms: 

- a **Request form** which is completed by a company employee, requesting an engineer to visit a specific location to perform an inspection
- an **Inspection form** which contains the inspection checklist that the engineer must complete

The result at the end of the process is an email to a designated Safety manager, who receives a PDF report of the inspection form.

The process will use **utility panels** to hold form fields and values, not visible to the end user, but these will be used with rules to automate the process.

The following image is a step by step roadmap of our process: ![Inspection process](/images/inspection-process-roadmap.jpg)



## Creating a new process

You can create an Inspection process if you have the role **Administrator** or **Designer** by going to the left-hand side menu and click on **Administration** and **Designer**.

1. When you are in process designer window, click on **Add new** button to start a new process. This button can be found at the top of the screen.

2. **Add new process** window appears with the following fields to fill out:
   
   - **Title** - represents the name of your process which is also the displayed name for other users.
   - **ID (unique)** - A unique ID which is used to identify your process. 
   - **Description** - Piece of text to describe your new process.
   - **Group** - A group which you want your new process to belong to.
     - If a group already exist, it will simply add your new process to that group.
     - If the group does not exist, it will make a folder for you and automatically add the process to that group.
   - **Administrators** - In this field you can choose to add **Users** and **Groups** to be administrators of the new process. This field determines who can edit and make changes to your process.

   ![Add new process window](/images/examples-new-process.jpg)
   
3. After you fill out the information needed, press **OK**. You are automatically brought into a **blank** process creation page, which looks as follows:

   ![Process creation page](/images/examples-process-creation-page.jpg)



## Planning Form Requirements 

In the example of the Inspection process we already discussed, we will need two forms: 1) Request form and 2) Inspection form. For our process, we need to make a list of requirements for the information we need to capture in each form. The information that will be provided to users in each form, for example a what company and location the inspection needs to be completed in. To learn more about planning process requirements, go to [Planning your process](/docs/getting-started/create-first-process/plan-your-process/).



![](/images/examples-inspection-template.jpg)

### What's next ![Idea icon](/images/18.png) 

Now that we have a list of all our requirements for this process, we can continue on by creating our first form. To learn more on how to create the **Request Form** step by step, go to [Creating Request Form](/docs/examples/inspection/request-form/).
