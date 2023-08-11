---
title: "Users & Groups"
linkTitle: "Users and groups"
weight: 7
typora-root-url: ..\..\..\..\static
---

## Introduction

The **Users** function is available to users with the **Administrator** role and is found in the left-hand side menu under **Administration**. This function allows you to manage users and groups in your Kianda workspace.


## How to get started

To access the **Users** function:

1. Click on **Administration** in the left-hand side pane and then click on **Users**. 

2. You can view any existing users and groups that have been created in the main view pane. 

   ![Users main view](/images/user-main-view3.png)

   

   The two main areas are 1. **Users** and 2. **Groups**. These two areas are explained in more detail below. 

   

## Users

Existing users appear within this section, showing the **name** of the user, **email**, **role** and whether they are **active** or not in the system.  

![User management main user view](/images/user-mgmt-view2.png)

From this main view, you can:

- [**view and edit** existing user details](#view-and-edit-existing-user-details)
- [**create a new user**](#create-a-new-user)
- [create new **profile attributes**](#modify-profile-attributes)
- [bulk **import and export** users](#importing-and-exporting-users)
- [**add and remove users** to/from groups](#groups)

Click on each of the links above to read more about each function. In addition to the above administrative functions, you can also set passwords and delete users from this main view as follows:

- To **reset a password** for a user, click on the **Reset password/key** button ![Reset password/key button](/images/reset-password.jpg) beside a user name. This will open the **reset password** dialog box where you can type in a new password for the user.

![Reset password dialog box](/images/reset-password-box.jpg)

​		When you are finished adding the new password, click on **OK**, or click on **Close** to exit the dialog box. 

- To **delete an existing user**, click on the **Bin/Trash** button beside a user name. 

  ![Delete an existing user](/images/delete-user-popup.jpg)

- Then click on **OK**.



### Licenses

Before managing the user accounts on your platform, you will need to understand the concept of **Licenses**.  Depending on your subscription type, you will be allocated a certain number of licenses, which allow your users to be active on your platform. 

A single license is used by each individual active user within your platform, for example if your platform has 250 total licenses and you have 19 activated accounts, you will have 231 remaining licenses. If a user license is **issued**, the total number of licenses will **decrease**, and if a user license is **revoked**, the total number of licenses will **increase**. If there are no more remaining licenses, new users will be deactivated. You can get more licenses by deactivating users or purchasing additional licenses.

![Licenses image](/images/licenses.png)



### View and edit existing user details

1. Click on the **name** of a user and the user details appear.

   ![User details view](/images/user-profile2.png)

2. In the details box you can edit a user's:

   - **First name** - user's first name
   - **Last name** - user's last name
   - **Display name** - how their name will display in the system. The display name is autofilled based off of the user's entered first and last names, which can be changed if necessary.
   - **License activation status** - Checking this box will create the user as active. This will consume a license from your subscription. If you are out of licenses you will be prompted to purchase an additional license.
   - **Primary role** - click on **More roles** to see additional roles and choose from six system defined roles.
     - **User** - lowest level of access where users with this role can access dashboards and forms, Help and Account details

     - **Administrator** - highest level of access where users with this role can access all functions under **Administration** such as **Designer** and **Developer**.

     - **Manage partners** - users with this role can access the same areas as **User** as well as the **Invite partners** function under **Administration** to create shared processes for business partners.

     - **Design business process** - users with this role can access the same areas as **User** as well as the **Designer** function under **Administration** to create and manage processes and form designs.

     - **Manage datasources** - users with this role can access the same areas as **User** as well as the **Data sources** function under **Administration** to create and manage data sources such as connections to SAP, Dropbox, SharePoint and Salesforce.

     - **Developer** - users with this role can access the same areas as **User** as well as the **Developes** function under **Administration** to create custom widgets for fields/controls, rules and dashboards.
   - **Profile picture URL** - click on **Browse** to browse for a profile picture on a laptop or network drive to add a profile photo for the user.
   - **Profile properties** - click on this option to see additional properties that you can define, see [Modify profile attributes](#modify-profile-attributes).
   - **Group membership** - click on this option to see the groups that a user is added to. Click on the red x button  ![Red x](/images/redx.jpg) to remove a user from a group. 

3. When you are finished editing a user's details, click on **OK**, or click on **Close** to exit the dialog box. 

 

### Create a new user

1. Click on the **Create new user** button ![Create new user button](/images/create-new-user-button.jpg).

2. Complete the fields as listed in Step 2 in [View and edit existing user details](#view-and-edit-existing-user-details) above. If additional profile properties have been set for the workspace, add in details for those properties. These properties can be set by clicking on the **Profile attributes** button, see [Modify profile attributes](#modify-profile-attributes) section.

3. Check the **Send welcome email** check box if you wish to have a system generated email sent to the new user.

4. Click on **Group membership** to view a user's group membership, see [Groups](#groups) for more details.

5. When you are finished editing a user's details, click on **Save**, or click on **Close** to exit the dialog box.

   ![User profile properties and group membership](/images/create-new-user2.png)



6. When the user is created they will appear in the main Users view. 



### Modify profile attributes

As an administrator you can set profile attributes for workspace users within your organisation. For example if your organisation uses particular grade levels for roles, then these can be set using this feature. To modify attributes:

1. Click on the **Profile attributes** button in the main **Users** section.![Profile attributes button](/images/modify-user-attributes2.png)

2. In the **Modify user attributes** dialog box, any existing attributes will be listed under **Property**. To remove an attribute, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin-shared-process.jpg). 

   ![Modify user attributes](/images/modify-user-attributes.jpg)

3. To add a new attribute, click on the **Add attribute** button ![Add attribute button](/images/add-attribute.jpg), then type in the name of the new attribute.

4. When you are finished editing attributes, click on **OK**, or click on **Close** to exit the dialog box. 



### Importing and exporting users

In addition to clicking on the **Create new user** button ![Create new user button](/images/create-new-user-button.jpg), you can **import** users using an Excel file by clicking on the **Bulk import users** button ![Bulk import users](/images/bulk-import-users.jpg). The **Import users** dialog box opens.

![Import users dialog box](/images/import-users.jpg)

In the **Import users** dialog box you can:

- Click on **Browse User Import Excel File** to browse for a file of users to add. 
- Click on **Download sample user import Excel file** to see the file structure needed to import users. The key user fields here are: Email, First Name, Last Name, Display Name and optional is Telephone number.

You can **export** a list of users by clicking on the **Export to csv** button ![Export to csv](/images/export-to-csv.jpg). The resulting file will list users by:

* **Display name** 
* **Email** 
* **Primary role** 
* **Groups** - they are members of
* **Active** - if the user is active and is currently using a license
* **Last active** - when the user was last active

Seen below is an example CSV output in excel:

![exported csv image](/images/csv-file-export.png)



## Groups ##

When you create predefined **groups,** you can use these group names in a myriad of ways, for example to create a set of finance managers who can then be listed as [form owners](/docs/platform/application-designer/forms/form-owners/) to edit forms in process instances for procurement, or a set of contractors in an [SSO bypass group](/docs/security/sso/) who can go the workspace login page to login to Kianda.

![Groups in User Management](/images/groups.jpg)

Existing groups appear within the **Groups** section of the **User management page**, showing the **name** of the group and the **number of members**.

From this main view you can:

- [view and edit group members](#viewing-and-editing-group-members)
- [view and edit group details](#viewing-and-editing-group-details)
- [delete groups](#deleting-groups)
- [create a new group](#creating-new-groups)




### Viewing and editing group members

1. Click on the radio button beside the **group name** in the main view to see the group members. 

   ![Group membership](/images/group-members2.png)

2. From this view, you can **remove a user from the group** by checking the checkbox beside a user name and click on **Remove user(s) from group**. 

3. You can also change **users** from the current group **to another group** by clicking on the dropdown list of group names, by choosing a group, checking the checkbox beside the username.

   ![Add user to group](/images/add-user-to-group2.png)

4. Click on **Add user(s) to group**.
   
   **Note**: You can only add users to groups, if you yourself are an administrator for the group, see next section.



### Viewing and editing group details

1. Click on the **group name** in the main view to see details for a group.
2. The **Edit group 'Name'** dialog box appears. 

![Edit group dialog box](/images/edit-group.jpg)

3. In this dialog box you can edit:

   - **Group name** - the name of the group

   - **Primary role** - the primary role of the group

   - **Group member sync** - options are **No** or **Yes**. By choosing **Yes** this allows synchronisation of the Kianda group with Active Directory or other databases connected to Kianda as data sources. As a result of choosing Yes, other parameters appear:

     - **Override group members** - choose from **No** or **Yes**. By choosing **Yes**, a full synchronisation is enabled between the Kianda group and the data source of users. Any users that are not listed in the data source, will be removed from this group in Kianda.

       ![Group member synch](/images/group-sync.jpg)

     - **Datasource** - choose a data source from the dropdown list. This data source must be already created, see [Data connectors](/docs/platform/connectors/) for more details.

     - **Group name** - choose a name for the group if desired.

     - **Auto disable previously imported users that are missing on re-import** - choose from **No** or **Yes**. By choosing **Yes**, any previously imported users that no longer exist in the data source, will be disabled in Kianda when re-synchronisation is executed. Their account will still exist in the system, but they will no longer be able to login to Kianda. 

     - **Auto remove previously imported users that are missing on re-import** - choose from **No** or **Yes**. By choosing **Yes**, any previously imported users that no longer exist in the data source, will be removed from Kianda when re-synchronisation is executed. They will no longer be able to login to Kianda as their account will be removed from the system. 
     
	    Note: When a group is synchronised, a **scheduled task** is created to import users from the data source group every one hour by default. This can be changed by going to **Administration** > **Scheduled tasks**. Go to [Scheduled tasks](/docs/platform/administration/scheduledtasks/) to find out more about different schedules.
     
   - **Group administrators** - only **Users** or **Groups** listed here can manage the group; if you leave the field blank then Kianda administrators can manage the group.
   
   

### Deleting groups

1. To delete a group, click on the **Bin/Trash** button ![Bin/trash button](/images/bin.png) beside the name of the group.

2. You will receive a popup asking you if you want to delete the particular team. Click on **OK** to delete the team, or **Cancel** to cancel the deletion.

   

### Creating new groups

1. To create a new group, click on the **Create new group** button in the main view.

2. In the **Add group** dialog box, type in details for the group:

   ![Add group dialog box](/images/create-group.jpg)

   - **Group name** - the name of the group

   - **Primary role** - choose a role for the group from **User**, **Administrator**, **Manage partners**, **Design business process**, **Manage datasources** and **Developer** as before, see Role details in [Viewing and editing existing user details](#view-and-edit-existing-user-details). In addition there is another role, **Design own business process** that allows groups to design their own process.

     ![Group roles](/images/design-own-process.jpg)

   - **Group administrators** - add **Users** and/or **Groups** to add people who can manage group membership. If you leave the field blank, any Kianda administrator can manage the group. If you specify administrators, as group creator you must add yourself as group administrator.

3. When you are finished editing the dialog box click on **OK** to save changes, otherwise click on **Close** to exit at any time.




## What's next  ![Idea icon](/images/18.png) ###

To read more about how to create processes and forms go to [Application Designer](/docs/platform/application-designer/).

To find out about help and support, go to [Help](/docs/platform/general/help/).