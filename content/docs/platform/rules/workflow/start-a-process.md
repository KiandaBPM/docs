---
title: "Start a process"
weight: 6
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

The **Start a process** rule allows you to dynamically **start a new instance** of a different process, or a new instance of the same process. You can **transfer field data** from the current process instance to a new process instance and vice versa, typically in the case of the latter by using a second **Start a process** rule. 



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

5. Under **Action** create one or more actions for the rule by filling out the following:

   - **Process source** - choose from the radio buttons:
     - **Own process** - choose from a list of processes 
     - **Partner process** 
   
   - **Select a process design** - choose a target process design from the drop-down list
   
6. Under Input mapping, click on Add mapping.  On the left side, choose a field from the current process.  On the right side, select a destination field in the target process.
7. Click On success mapping. On the right side, type a message;  on the left side, choose a field to store the message.  Here data is being mapped back from the target process to the current process.
8. Click OK.

## 

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
