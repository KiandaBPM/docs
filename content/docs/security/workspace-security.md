---
title: "Workspace security"
weight: 1
typora-root-url: ..\..\..\static
---

There are a number of different ways of setting security within your Kianda workspace. Security refers to both access to processes as a Designer, and access to process instances. 

## Security privileges by role

The Kianda platform allows for **different security privileges to be set for different types of users**, making administration of users and their access rights easy to manage. The following are **the different roles** users can be assigned on Kianda – each has certain **default permissions**:

- **User** – can only access what is assigned to them. For example, forms and dashboards.
- **Administrator** – can access (view and edit) all published processes. Can only edit draft processes that they have created themselves or for which they have been made Process Administrators.
- **Manage partners/customers** – can only access the essentials to manage customer portals; that is, they can use the Invite partners function under the Administration menu.
- **Design business process** – can only design business forms and workflows using Kianda Designer
- **Manage data sources** – can only manage data sources and connections, namely the Data sources function
- **Developer** – can design new widgets within the platform using the Developer function

In addition to default permissions, you can also create user groups and assign ownership and/or access to processes or dashboards as needed. Security settings can be applied to dashboards or particular widgets within a dashboard so that they are only visible to certain users or groups of users; and data source connections can be configured in the same way to ensure the highest access control levels. We will now look at different ways of assigning access and controlling security.

## Process administrators

When an **Administrator** creates a new process in Kianda, they can set who they want the **Process Administrators** of that process to be (anyone chosen to be a Process Administrator needs to be someone who has an Administrator role, so that they have access to the Designer function to be able to edit the process). The **Process Administrators** can be individual users, groups or a combination of the two.

If you are an Administrator, you can edit a process you have created and set the Administrator role for that process by clicking on the **Edit process** button (Pen icon) in the main process view. Choose the user(s) and/or groups you want to be the Process Administrator(s) in the Edit process dialog box.

*Setting process administrators in the Edit process dialog box*

![img](https://academy.kianda.com/wp-content/uploads/2022/04/process-administrator.gif)

In the example above, Vikky was already a Workspace Administrator who had access to the Designer function in Kianda – now that she has been assigned to be the Process Administrator for the Maintenance Process, this means that she **can edit the draft process design**.

## Form ownership

When you create a process in Kianda, you can then set a **default owner** for each form you create within that process. Only Form Owners can **edit individual** **process records**. For example, if a ‘Maintenance Request Process’ is initiated from a dashboard, then the default Form Owner, regardless of their role (that is, regardless of whether their ‘role’ on Kianda is ‘administrator’ or ‘user’ etc), will be able to edit information submitted in new process records from that form.

If you are a Workspace Administrator and you’ve created a new process that contains a form, you can set the default owner for that form by opening the process in Kianda Designer, selecting the form and clicking the Edit form button (Pen icon). This opens the **Edit form** dialog box within which you can choose from individual users, groups or a combination of both under **Default owner(s)**.

### Quick actions within forms

Within the **Edit form** dialog box, you can select the **Enable quick actions** checkbox so that options to **Enable re-assign**, **Enable edit** and **Enable custom action** appear. From here, a Process Administrator or form designer can give individuals, groups or a combination of both, the ability to have **process instances** assigned to them, to enable them to **edit** **in process records** and **custom actions** of their choice.

*Edit form dialog box*

![img](https://academy.kianda.com/wp-content/uploads/2022/04/edit-form-dialog-box.gif)

Select the **Enable quick actions** checkbox, then select one or more of the checkboxes for the three options that appear below it (as shown in the image). For each of the options you select, click on the ellipsis button ![ellipsis button used to select users and groups](https://academy.kianda.com/wp-content/uploads/2022/02/ellipsis-1.png) and select from Users, Groups and Partners, and/or check the box to **Allow form owners** the particular action – for example, re-assignment means the chosen users can click on the **quick action** button ![Quick action button on forms](https://academy.kianda.com/wp-content/uploads/2022/02/quick-action-1.png) in the form and **reassign** the form to someone else.

## Process security settings

When you are creating or editing a process in Kianda Designer, you can set security settings for that process. This setting will **apply to every record (instance)** created from that process. To do this, click on the process in Designer and then, in the right-hand pane, click on the **Settings** button ![Process settings button](https://academy.kianda.com/wp-content/uploads/2022/02/settings.png) and select the checkbox beside **Enable process security.**

Choose an individual user, groups or partner or combination, to be ‘security users’ and then choose from one of three security modes, as shown in here.

*Process security settings*

![img](https://academy.kianda.com/wp-content/uploads/2022/04/process-security-settings.gif)

The three available security levels are listed from lowest to highest. For example, if you choose **Security users only can create, view and update** means that only the users listed as **Process security users** – in the example shown here, Mike Balcoome and the Management Team – will be able to access and view process records. No other users will have access to the process records generated by this process.

## Process security rule

Another way to set security is to use one of the **Workflow** rules called **Process security** to **dynamically change** the security settings for a process record (instance). Using this rule allows you to set the same security modes shown in the process settings above, but this can happen based on a particular condition or trigger – for example, clicking the Submit button.

To add this rule, open your process in Kianda Designer and select the relevant form. Then, in the left-hand pane, go to **Add a rule** > **Workflow** > **Process security**. In the Edit rule – Process security dialog box, create a condition if desired, and then choose from the type of users who will become security users. Choose from the options: **Override** to override existing security, or **Append** if you want to add a new level of access. Click the **Enable security** checkbox to choose a Process security mode.

*Edit rule – Process security dialog box*

![img](https://academy.kianda.com/wp-content/uploads/2022/04/security-rule.jpg)

## Panel and button security

In addition to process and form level security, you can set panel and button security by clicking on a panel or button within a form. Click on the panel or button of choice, click the **Edit** button (Pen icon) and choose **Yes** beside **Enable security**. Click on the **Add security** button to add users or groups to enable access to the button or panel.

*Panel security within the edit field dialog box*

![img](https://academy.kianda.com/wp-content/uploads/2022/04/panel-security.jpg)

## Dashboard security

As an end user, when you login to Kianda, you are presented with dashboards and widgets for different processes. The dashboard is made of multiple widgets like tiles, charts, links and lists. Go to [Dashboard](/docs/platform/pages/) to find out more about each widget type. You can set security at both a) dashboard level and b) widget level, see [Widget security](#widget-security) for more details. This section will deal with dashboard level security.

Dashboard level security can only be applied if you have the **Administrator** role to allow visibility of **dashboards and widgets.**

To apply security to dashboards:

1. Go to the existing dashboard page by clicking on **Dashboard** and the page name in the left-hand side menu.

2. Click the **Edit** button ![Edit button](/images/edit.png) visible in the top menu bar.

3. Now in **Edit mode**, the **Settings** button  ![Settings button](/images/settings2.png) is visible. Click on the **Settings** button.

4. The **Edit dashboard page** dialog box appears where you can find the **Visible to** user picker with an option to select **Users** and/or **Groups**. 

   ![Edit dashboard visible to parameter](/images/edit-dashboard-users.jpg)

5. Select the correct **Users** and/or **Groups** using the dropdown menu.

6. Make any other changes you need to the dashboard, see [Dashboard](/docs/platform/pages/) for more details. 

7. Click on **OK** when you are finished editing the dialog box or **Close** to exit the dialog box at any time.

8. Save the changes you make by clicking on the **Save** button ![Save button](/images/save-dash.png) at the top of the page.

### Widget security

Similarly, you can set the visibility for an individual widget on the dashboard like a tile, chart, or list, for example, if you want the dashboard to be visible to everyone and a particular chart on the dashboard only visible to management. This can be achieved by setting the **visible to** field to the management group as shown below.

To apply security to a dashboard widget:

1. Go to the existing dashboard page by clicking on **Dashboard** and the page name in the left-hand side menu.

2. Click the **Edit** button ![Edit button](/images/edit.png) visible in the top menu bar.

3. Now in **Edit mode**, click on the **Cog/settings** button ![Widget settings](/images/widget-cog.jpg) of the widget.

4. The **Edit widget** dialog box appears where you can find the **Visible to** user picker with an option to select **Users** and/or **Groups**. The example below shows the dialog box for a **List** widget.

   ![Edit widget dialog box](/images/edit-widget-eg.jpg)

5. In the **Visible to** field select the correct **Users** and/or **Groups** from the dropdown menu.

6. Click on **OK** when you are finished editing the dialog box or **Close** to exit the dialog box at any time.

7. Save the changes you make by clicking on the **Save** button ![Save button](/images/save-dash.png) at the top of the page.
