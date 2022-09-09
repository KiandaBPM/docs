---
title: "Start a process"
weight: 6
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

The **Start a process** rule allows you to dynamically **start a new instance** of a different process, or a new instance of the same process, or **update an existing process instance** from a chosen process. 

For example if we have an 'Onboarding' process, our **primary process** that involves many different tasks like generating documentation, and sending out emails to managers, HR and new trainers, we could have a **secondary process** called 'Send email process' which sends out these automated emails for a new user once the 'Onboarding process'  starts. You can **transfer field data** from the Onboarding process to the new process instance for 'Send email process'. You can also **update the secondary process instance**, once you have the **ID** for the process instance, see step 5 below in [How to get started].



## When to use 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## How to get started

To dynamically start a new process:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item for example the **Submit** button so that it is in **edit mode** so you can see the Edit/pen button,  **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Workflow** > **Start a process**. 

3. In the **Edit rule - Start process** dialog box, give the rule a title in the **Title** field.

   ![Start a process rule](/images/start-a-process.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under **Action** create one or more actions for the rule. For the **Process source** list choose from **Own process** or **Partner process**. If you choose **Own process** then choose from a list of processes already created in the system under **Select a process design** using the drop-down list or start to type in the name of a process and the list will autofill

   ![Select process design](/images/select-process-design.jpg)

   When the design is chosen, other options will appear in the **Edit rule** dialog box, these include: 

   - **Lookup existing process** - options are **Yes** or **No**
     - If you choose **Yes** - then that means you are creating a **new process instance** from that process design.
     - If you choose **No** then that means you are **updating an existing process instance** and you must provide the target process name. You then need to provide the ID for the existing process instance. This can be done using the **On success mapping**
   - [Input mapping](#input-mapping) 
   - [Table mapping](#table-mapping)
   - [On success mapping](#on-success-mapping)

   ![Edit rule dialog box options](/images/lookup-existing-process.jpg)

6. For the **Process source** if you choose **Partner process** then choose from a list of predefined partner processes under **Select a process design** using the drop-down list or start to type in the name of a process and the list will autofill

7. The remaining options in the **Edit rule** dialog box are explained below.

9. Click **OK** when you are finished editing the dialog box, or **Close** at any time to exit the dialog box.



### Input mapping

For Input mapping you can map fields from one process to another. For example in an Onboarding process, if a user fills out their Name, then that Name will be mapped to a field in a form

![Input mapping example](/images/input-mapping-example.jpg)

Click on **Add mapping** to add more mappings to map fields from one process form to another. 

Click on the **Bin/Trash** button to delete mappings.

### Table mapping

If you use a **table** in your process you can map fields from the table in one process to another in a similar way to the fields in [Input mapping](#input-mapping).

### On success mapping

Success mapping can be used to map internal values like **Process ID** from one process, your secondary process, to your primary process. 

### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule click the slider across beside the rule name. 

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.



### User tip ![Target icon](/images/05.png) ###

The target process can be a **Partner process**.  The partner organisation must have enabled process security (in the Process settings for the target process) to allow your process to interact with the target process.

Use the **Lookup existing process** flag to find a particular instance of the target process at runtime.  If you select Yes, then you can select a field in the current process which contains the id of the target instance.

**Table mapping** allows you copy the contents of a table in the current process to a table in the target process.  Click on Table mapping.  On the right side, select a table in the current process;  on the left side, choose a table in the target process.  Click on the three dots icon to set the table mappings. If you select Copy rows and click on Copy row conditions you can control which rows are copied over to the target process.  If you select Update rows and click on Update row conditions, then you can control which rows are updated with new data.

Use **Trigger rules in target instance** to select a field or rule to trigger in the target process.  Set Execute in series to Yes to ensure server side execution is performed in series instead of in parallel.  

Another feature of this rule is that you can **read data from another process** instance.  In this case it is advisable to give the title of the rule a title such as Read data from Process X.  Here you click On success mapping and use this area to copy data from the target process to the current process.

Typically the **Start a process** rule is used in the following way: 

- One rule to **initiate a new process instance**

- **Another Start a process rule** to retrieve information from the new process instance

  

### What's next  ![Idea icon](/images/18.png) ###

To find out more about other workflow rules go to [Workflow](/docs/platform/rules/workflow/).

To find out more about other rules go to [Rules](/docs/platform/rules/).
