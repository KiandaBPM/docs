---
title: "Secure Data Access"
linkTitle: "Secure Data Access"
weight: 3
typora-root-url: ..\..\..\..\static
---

## Introduction

Access to the B2B Portal is controlled through standard user and group creation, dashboard security and through how the Shared Processes and Dashboards are defined.

## When to use

B2B Portals are a means of connecting your clients to your Kianda subscription through their own subscription. This provides a means of allowing your clients to interface with processes you have already created, be it through updating existing processes, deleting processes or creating processes. Access to the B2B Portal can be controlled by your own administrator and each B2B portal can have multiple users for your clients.

## How to get started

To share data with B2B portal users, there are a number of steps involved starting with:

a) Creating users and groups 

b) Create dashboards to share

c) Create shared processes and attach dashboards to share

### Create users and groups for the B2B portal

1. To begin create **Users** and **Groups** for the B2B portal. If you are an **administrator,** navigate to the **Administration** section in the left-hand side menu and click on **Users**.

2. Within this page you will be able to view all existing **Users** and **Groups**  in the portal. In the left-hand side, under **Users** you can see user names,  emails, role and if they are active or not. All existing **Groups** can be seen in the right-hand side of the screen. Here you can see group names and the number of members.

      ![Users main view](/images/user-main-view.jpg)

3. For full details on how to create, edit and delete users and groups got to [Users](/docs/platform/administration/users/).

### Create dashboards to share

1. Within your own portal you may then wish to create **Dashboards** to share. Dashboards provide a convenient way to gain insights into how your business processes are performing. They offer easy reporting, permissions management, quick build, condition-based filtering amongst other features. For details on how to get started with dashboards go to [Dashboards](/docs/platform/platform/pages/). 

### Create shared processes and attach dashboards to share

1. When the dashboard that you want to share within your **B2B portal** has been created, then you can control access by two means: a) Using the **Shared Processes** feature within **Invite partner** within **Administration** and b) within the B2B portal itself. 

2. To implement a) go to **Administration** > **Invite partner** and within the **Shared processes** section, click on **Share a process**.

3. Type in a **Title** and **Instructions for partner**, click on the **plus symbol** ![Add shared process](/images/add-process.jpg) to add a selected process design to share.

4. Then click on the dropdown list to search for a process to share.	

5. Click on the **tick symbol** ![Edit selected shared  process](/images/edit-selected-process.jpg) to add the selected shared process.

6. Click on the **Add partner group** button to add a group from step 3 and click on **Dashboard template** to add the desired Dashboard (from step 4) to share. Security can be set on this dashboard so that only a defined group can see the dashboard - click on the field under **Dashboard security** to add in a named 'partner group' to enable access to this group only. 

   ![Edit Shared Process dialog box](/images/edit-shared-process.jpg)

7. Add as many shared dashboards and partner groups as needed using the previous instructions. In addition the level of access for each shared process can be controlled through system settings. Click on the on the **tick symbol** ![Edit selected shared  process](/images/edit-selected-process.jpg) to change the shared processes details, and then click on the **Cog/Settings** button ![Edit selected shared process properties](/images/cog-shared-process.jpg) and edit the details within the **Process properties** dialog box, for example as shown for a Training Request process below.

   ![Edit selected shared process properties](/images/change-selected-prop.jpg)

8. Within the **Process properties** dialog box you can check radio buttons for:

   - **Allow partner to create a new process instance** - choose from **Yes** or **No**. If you choose **Yes**, then you are allowing invited partner(s) to create new process instances from the chosen shared process design. A field **Partner user group allowed to create new instances** appears, where you can define the group(s) in the partner organisation, that can create these new process instances. If you leave the field blank, then anyone in the partner organisation can create process instances.
   - **Allow partner delete a process instance** - choose from **Yes** or **No**. If you choose **Yes**, then you are allowing invited partner(s) to delete new process instances from the chosen shared process design.
   - **Partner user group allowed to create new instances**- choose from the **Partner user groups** that you created previously. By selecting a group here this dictates who can enter the process. Thus, defining a sub set of your B2B Portal users which can interact with that specific process.
   - **Partner process form visibility mode** - choose from **Assigned** or **All forms**. If you choose **Assigned**, then the invited partner(s) can view only assigned form versus all forms, if **All forms** is chosen.

9. When you are finished editing the dialog box, click on **OK**, or else click on **Close** to exit the dialog box at any stage.



### What's next  ![Idea icon](/images/18.png) ###

To read more about User and group management, go to [Users](/docs/platform/administration/users/).
To read more about Dashboards, go to [Dashboards](/docs/platform/pages/).