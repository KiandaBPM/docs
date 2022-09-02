---
title: "Quick action menu"
typora-root-url: ..\..\..\..\static
---

## Introduction ##
The **Quick action menu** contains all the shortcuts that you need to manage your pages efficiently. The menu is found in the top right-hand corner of your Kianda workspace. 

![Quick action menu](/images/quick-action-menu.jpg)

If you have an **Administrator** role you will see five buttons from your workspace **home** page, other roles will see three buttons listed below:

The buttons include:

- [Create a new page](#create-a-new-page)  ![Create new page button](/images/new-page-button.jpg) **Administrators** can use this function to create a **new dashboard page**.
- [Edit current page](#edit-current-page) ![Edit current page button](/images/edit-current-page.jpg) **Administrators** can use this function to edit a dashboard **page**. 
- [Online session refresh](#online-session-refresh) ![Refresh button](/images/refresh.png) **All users** can use this function to **refresh a session** to allow offline use.
- [User notifications](#user-notifications) ![Notifications button](/images/notifications.png) provides notifications to **all users** such as being assigned forms to edit or reassign.
- [User profile](#user-profile) ![User profile](/images/userprofile.png)allows **all users** to change profile details, such as working offline or changing password.

Click on each link above to find out more about each button.



## Create a new page ##
Administrators can create a new dashboard page that connects to a chosen process. Users can view this dashboard to monitor how processes are performing and gain business insights to improve the business. 
1. Click on the **Create new page** ![Create new page button](/images/new-page-button.jpg) button.

2. The **Create dashboard page** dialog box opens. 

    ![Create dashboard page](/images/new-dashboard-page.jpg)

    In this dialog box fill out the following fields:

    - **Title** - give the dashboard a title.
    
    - **Name** - this field is autofilled from the title field and creates a unique ID for the dashboard page.
    
    - **Visible to** - choose from **Users** and/or **Groups** of users who will see this dashboard. In this way you are setting the first level of security for the dashboard, see [Dashboard security](/docs/security/process-level-security/#dashboard-security) for more details.
    
    - **Icon** - choose from hundreds of icons to represent your dashboard in the left-hand pane.
    
    - **Sort order** - enter a numeric value to set the order of display in a dashboard group, for example a dashboard called **Induction** has a sort order value of '1', while a dashboard called **Annual leave** has a value of '2'. The dashboards will display in chronological order according to the values associated with them.
    
    - **Group** - choose an existing group or create a new group to add the dashboard to. As soon as two dashboard pages are added to a group, then the group will appear in the left-hand pane, for example see **HR dashboards group** below with 2 dashboards: **Induction** and **Annual leave**. 
      ![Dashboard group](/images/dashboard-group.jpg)
    
    - **Enable favourites** - allows you to set this dashboard as a 'favourite'. If you check the checkbox, then users will see a **Add to favourites** button in the **Quick actions menu**, allowing them to add this dashboard to a 'favourites' catalog. 
    
      ![Favourite dashboard](/images/favourite-dashboard.jpg)
    
3. Click on **OK** when complete, or **Close** to exit the dialog box. 

4. From there you are in the main dashboard view where you can add dashboard **widgets** to display lists or charts or edit the **settings** for the dashboard page. To find out more about dashboards, go to the [Dashboards](/docs/platform/pages/) section of the documentation. 

 

## Edit current page ##

Administrators can edit an existing dashboard page by clicking on the dashboards button when on a selected page.

1. As an administrator, click on a dashboard page of choice displayed in the left-hand pane.

2. Click on the **Edit current page** ![Edit current page button](/images/edit-current-page.jpg) button. You are then in **Edit mode** for the page recognisable by the widget menu, along with **Settings** for the dashboard and any **widgets** that exist.

   ![Editing page](/images/editing-page.jpg)

3. In Edit mode you can add new **dashboard widgets**, edit **Settings**, or **Delete** the dashboard page. To read more about Edit mode go to [Dashboards](/docs/platform/pages/).




## Online session refresh ##

You can use Kianda offline for example to view dashboards even without internet access. To synchronise dashboards with system data:
1. Click on the **Online session** button ![Online session refresh button](/images/refresh.png) to synchronise data. 

2. A **Synchronising** message appears, followed by a **Ready for offline use** notification.
   ![Synchronising message](/images/synchronising-offline.jpg)

3. You can view dashboards even without internet access.

**Note**: You can switch to offline mode by clicking on your profile and slide the **work offline** toggle to 'on' see [User profile](#user-profile) below.

   

## User notifications ##

This icon alerts you when actions happen associated with processes, for example if a form has been assigned to you. Any new notifications will be seen as a number beside the **user notification** icon/bell symbol. 

![User notification](/images/user-alert-notification.jpg)

You will receive a configured message indicating the title of the notification and a short piece of text explaining what has happened, for example if a process design has been published and existing process instances have been updated, or the message could be as a result of a [User alert rule](/docs/platform/rules/communications/user-alert/) as seen below. In this example, the user can click on the alert and they are brought to the form that they have to complete. 

![User alert example](/images/user-alert-example.jpg)

## User profile ##

The information found under User profile includes your name, email, role for example Administrator, and options to update your information.

![My account information](/images/myaccount.png)

To update your information, you can:

1. Add your photo by clicking on the **Update profile picture** button ![Update profile picture button](/images/profilepic.png).

2. Change your password by clicking on **Change Password**. You need to type in your current password and then your new password twice and click on **Change Password** or click on **Close** to exit the dialog box.

   ![Change password](/images/changepassword.png)

3. Update your profile by clicking on **Update My Profile**. Type in your **Job title,** **Department** and **Phone number** and click on **Update Profile** or click on **Close** to exit the dialog box.

4. Logout of Kianda by clicking on **Sign-Out**. Then click on **Ok** to confirm that you want to logout or click on **Cancel** to exit the dialog box.

5. Work offline by clicking on the slider button, moving it across. When you do this you will get a message to say **Offline mode** is **enabled.** 

   ![Work offline](/images/workoffline.png)

   If you move the slider back then Offline mode is disabled.

6. View the system version of Kianda, for example System version 2.11.3 as shown in the image above.

7. Collapse account information by clicking on the **User profile** button ![User profile](/images/userprofile.png) again. 




### What's next  ![Idea icon](/images/18.png) ###

To read more about how to create processes and forms go to [Application Designer](/docs/platform/application-designer/).
