---
title: "Process security"
weight: 5
typora-root-url: ..\..\..\..\..\static
---

## Introduction ##

The **Process security** rule dynamically changes the **security settings of a process instance**. 

Security settings for a process can be set statically by going to **Settings** for the process in Kianda Designer.  If you check the checkbox for **Enable process security**, you can then select users, groups, and/or partners and set their access level, see [Process settings](/platform/application-designer/process/settings/) for more details.

![Process security settings](/images/process-security-settings.jpg)

This setting is static and applies to every instance of the process.  However the Process security rule is **dynamic** and changes the security settings for a particular instance. For example if there is a Finance process with a Payroll request form containing personal data like employee salary, this request form  should only be visible to an assigned person. An **Assign form** rule could be used to give form ownership to an assigned person, allowing them to edit the form in a process instance, and if the rule is combined with the **Process security** rule then only the assigned person can view the request form for the process instance. 

If there are multiple process instances listed in a dashboard, then **process security** will allow only those who have the designated access, to view those process instances. 



## When to use 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## How to get started

To dynamically set security for process instances:

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button,  **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Workflow** > **Process security**. 

3. In the **Edit rule - Process security** dialog box, give the rule a title in the **Title** field.

   ![Edit rule - Process security dialog box](/images/process-security-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) to create conditions for the rule, see [Conditions](/platform/rules/general/add-conditions/) for more details.

5. Under **Action**, create one or more actions for the rule by filling out the following:

   - **Add to process security users** - choose from the radio buttons:
     
     - **Any user** - choose from **Users**, **Groups** and/or **Partners** in the drop-down list. All users and groups must be predefined in the system, see [Users and Groups](/platform/administration/users/) for more details. Partners must also be predefined within the [Invite partners](/platform/administration/b2b-portals/) section under Administration.
     - **Current user** - make the current user of the form, whoever is submitting or saving information, as the person that is added to the form process security.
     - **Defined in a user field** - choose a user picker field from the process, where the selected users, groups or partners will be added to the form process security.
     - **Form owner(s)** - selecting this option means that the form owner(s) defined during form creation/editing will be added to the form process security, see [Form owners](/platform/application-designer/forms/form-owners/) for more details on what form ownership is and how to create form owners.
   - Depending on the option chosen for **Add to process security users**, different fields will display: 
     - For example if **Any user** is chosen, then a **Select user(s)** field appears as shown in the image above. Choose from **Users**, **Groups** and/or **Partners**.

     - If **Defined in a user field** or **Form owner(s)** is chosen then a **Select form field** appears prompting you to select a user picker field for the former, and a form with form owners for the latter.  

   - **Existing user(s)** - choose from:
     -  **Override** - this means that this rule will override form ownership, making those referenced in the **Edit rule dialog** box the form owners.
     -  **Append** - this means that for a current list of form owners, for example those defined during form creation, that list will be appended with any users referenced in the **Edit rule dialog** box. 

   - **Override security settings** - choose from **Yes** or **No**.

     - If you choose **Yes** then a checkbox appears allowing you to **Enable security**. 

       ![Process security enabled security example](/images/process-security-rule-enabled.jpg)

     - If you check the checkbox, then you can choose the **Process security mode** which lists the following options:

       -  **Security users can create, assign to, can update, everyone else can view** - this is the lowest level of security, allowing the assigned user(s) the ability to view, edit and assign process instances, while others can view the process instances.
       -  **Security users can create, assign to, can view and update** - this allows the assigned user(s) the ability to view, edit and assign process instances.
       -  **Security users only can create, view and update** - this is the highest level of security where only the named users, that is those defined as **Line Manager** in a user picker field, will be able to view and edit process instances. No other users will have access to the process instances.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

8. When you click on the field or form that has the rule attached, the rule will appear in the right-hand pane under **Rules**. 

The next section will cover how to use the buttons visible in the right-hand pane to manipulate the rule.



### Editing, deleting or duplicating rules

When you have clicked on an existing rule, and the rule is visible in the right-hand pane under **Rules**, there are a number of options available to you.

1. To **disable** a rule, click the slider across beside the rule name. 

2. To **copy** a rule, click on the **Duplicate** button ![Duplicate button](/images/duplicate-button.jpg) beside the rule name. 

3. To **delete** a rule, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin.png).

4. To **view** a rule, click on the **rule name** to open the **Edit rule** dialog box.





### User tip ![Target icon](/images/05.png) ###

This rule can be used multiple times in sequence.  You can use the first rule to override the existing users and the following rule(s) to append users.

You can override the process security settings by setting Override security settings to **Yes**. Tick **Enable security** to see the options for setting the security level.  These options are identical to those in the static **Process settings** as mentioned in the [Introduction](#introduction).

**Warning!**
>
> Setting Override security settings to **Yes** with Enable security **<u>not ticked</u>** will disable all security settings.

![Process security rule dialog box 2](/images/override-security-settings.jpg)

### What's next  ![Idea icon](/images/18.png) ###

To find out more about other workflow rules go to [Workflow](/platform/rules/workflow/).

To find out more about other rules go to [Rules](/platform/rules/).