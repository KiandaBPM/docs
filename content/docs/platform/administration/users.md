---
title: "Users & Groups"
typora-root-url: ..\..\..\..\static
---

The **Users** function is available to users with the **Administrator** role and is found in the left-hand side pane under **Administration**. This function allows you to manage users and groups in your Kianda workspace.


## How to get started

To access the **Users** function:

1. Click on **Administration** in the left-hand side pane and then click on **Users**. 

2. You can view any existing users and groups in the main view pane. 

   ![Users main view](/images/user-main-view.jpg)

   

   The two main areas are **Users** and **Groups**. These two areas are explained in more detail below. 

   

## Users

Existing users appear within this section, showing the **name** of the user, **email**, **role** and whether they are **active** or not in the system.  

![User management main user view](/images/user-mgmt-view.jpg)

From this main view, you can:

- [**view and edit** existing user details](#view-and-edit-existing-user-details)
- [**create a new user**](#create-a-new-user)
- [create new **profile attributes**](#modify-profile-attributes)
- [bulk **import and export** users](#import-and-export-users)
- [**add and remove users** to/from groups](#add-and-remove-users-to/from-groups)

Click on each of the links below to read more about each function. In addition to the above administrative functions, you can also set passwords and delete users from this main view as follows:

- To **reset a password** for a user, click on the **Reset password/key** button ![Reset password/key button](/images/reset-password.jpg) beside a user name. This will open the **reset password** dialog box where you can type in a new password for the user.

![Reset password dialog box](/images/reset-password-box.jpg)

​		When you are finished adding the new password, click on **OK**, or click on **Close** to exit the dialog box. 

- To **delete an existing user**, click on the **Bin/Trash** button beside a user name. 

  ![Delete an existing user](/images/delete-user-popup.jpg)

- Then click on **OK**.





### View and edit existing user details

1. Click on the **name** of a user and the user details appear.

   ![User details view](/images/user-profile.jpg)

2. In the details box you can edit a user's:

   - **First name** - user's first name

   - **Last name** - user's last name

   - **Display name** - how their name will display in the system

   - **Primary role** - click on **More roles** to see additional roles and choose from six system defined roles:
     - **User** - lowest level of access where users with this role can access dashboards and forms, Help and Account details

     - **Administrator** - highest level of access where users with this role can access all functions under **Administration** such as **Designer** and **Developer**.

     - **Manage partners** - users with this role can access the same areas as **User** as well as the **Invite partners** function under **Administration** to create shared processes for business partners.

     - **Design business process** - users with this role can access the same areas as **User** as well as the **Designer** function under **Administration** to create and manage processes and form designs.

     - **Manage datasources** - users with this role can access the same areas as **User** as well as the **Data sources** function under **Administration** to create and manage data sources such as connections to SAP, Dropbox, SharePoint and Salesforce.

     - **Developer** - users with this role can access the same areas as **User** as well as the **Developes** function under **Administration** to create custom widgets for fields/controls, rules and dashboards.

   - **Phone number** - user's phone number (mobile or office)

   - **Profile picture URL** - click on **Browse** to browse for a profile picture on a laptop or network drive to add a profile photo for the user.

   - **Active** checkbox - by default this checkbox is checked but you can **uncheck it to disable** a user's account.

   - **Profile properties** - click on this option to see additional properties that you can define, see [Modify profile attributes](#modify-profile-attributes).

   - **Group membership** - click on this option to see the groups that a user is added to. Click on the red x button  ![Red x](/images/redx.jpg) to remove a user from a group. 

3. When you are finished editing a user's details, click on **OK**, or click on **Close** to exit the dialog box. 

 

### Create a new user

1. Click on the **Create new user** button ![Create new user button](/images/create-new-user-button.jpg).
2. Complete the fields as listed in Step 2 in [can [**view and edit** existing user details](#view-and-edit-existing-user-details)](#view-existing-user-details) above. If additional profile properties have been set for the workspace, add in details for those properties. These properties can be set by clicking on the **Profile attributes** button, see [Modify profile attributes](#modify-profile-attributes) section.
3. Check the **Send welcome email** check box if you wish to have a system generated email sent to the new user. 
4. Click on **Group membership** to view a user's group membership, see [Groups](Groups) for more details.
5. When you are finished editing a user's details, click on **OK**, or click on **Close** to exit the dialog box. 

![User profile properties and group membership](/images/create-new-user.jpg)

6. When the user is created they will appear in the main Users view. 



### Modify profile attributes

As an administrator you can set profile attributes for workspace users within your organisation. For example if your organisation uses particular grade levels for roles, then these can be set using this feature. To modify attributes:

1. Click on the **Profile attributes** button in the main **Users** section![Profile attributes button](/images/profile-attributes.jpg).

2. In the **Modify user attributes** dialog box, any existing attributes will be listed under **Property**. To remove an attribute, click on the **Bin/Trash** button ![Bin/Trash button](/images/bin-shared-process.jpg). 

   ![Modify user attributes](/images/modify-user-attributes.jpg)

3. To add a new attribute, click on the **Add attribute** button ![Add attribute button](/images/add-attribute.jpg) then type in the name of the new attribute.

4. When you are finished editing attributes, click on **OK**, or click on **Close** to exit the dialog box. 



### Importing and exporting users

In addition to clicking on the **Create new user** button ![Create new user button](/images/create-new-user-button.jpg) you can import users using an Excel file by clicking on the **Bulk import users** button.



## Groups ##

When you create predefined **groups,** you can use these group names in a myriad of ways, for example to create a set of finance managers who can then be listed as [form owners](/docs/platform/application-designer/forms/form-owners/) to edit forms in process instances for procurement, or a set of contractors in an [SSO bypass group](/docs/security/sso/) who can go the workspace login page to login to Kianda.

Existing groups appear within the **Groups** section of the **User management page**, showing the **name** of the group, the **number of members** with options to **search** for groups, **delete** groups and **create** new groups.




### Viewing and editing group members

1. Click on the radio button beside the group name to see the group members. 

![Group membership](/images/group-members.jpg)

2. From this view you can **remove a user from the group** by checking the checkbox beside a user name and click on **Remove user(s) from group**. 

3. You can also change **users** from the current group **to another group** by clicking on the dropdown list of group names, by choosing a group, checking the checkbox beside the username and click on **Add user(s) to group**.

   ![Add user to group](/images/add-user-to-group.jpg)

   **Note**: You can only add users to groups, if you yourself are an administrator for the group, see next section.



### Viewing and editing group details

1. Click on the **group name** to see details for a group.
2. The **Edit group 'Name'** dialog box appears. 

![Edit group dialog box](/images/edit-group.jpg)

3. In this dialog box you can edit:

   - **Group name** - the name of the group

   - **Primary role** - the primary role of the group
   - **Group member sync** - options are **Yes** or **No**
   - **Group administrators** - only users or groups listed here can manage the group; if you leave the field blank then Kianda administrators can manage the group

4. To delete a group, click on the **Bin/Trash** icon. 




## What's next  ![Idea icon](/images/18.png) ###

To read more about how to create processes and forms go to [Application Designer](/docs/platform/application-designer/).

To find out about help and support, go to [Help](/docs/platform/administration/help).