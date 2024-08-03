---
title: "Dashboard"
weight: 3
typora-root-url: ..\..\..\..\static
---



Kianda **dashboards** deliver a convenient way to provide insights into how your business processes are performing. Kianda dashboards offer easy reporting, permissions management, quick build, condition-based filtering and many more features.

From lists to tiles, filter and charts, dashboards allow you to build full digital experiences to monitor your real-time processes in a few minutes. To learn more about dashboards go to [Dashboard pages](/docs/platform/pages/).

## Creating a Dashboard

1. In the left-hand side menu click on Home.

   ![Home](/images/left-menu-home.jpg)

2. On the top right-hand side menu click on the plus![Plus](/images/top-right-menu-plus.jpg) to add a dashboard.

3. Change the **Title** to **Inspection Dashboard**.

4. Click on **OK** on the **Create dashboard page** dialog box.

5. Creating the **Inspection dashboard** will automatically bring you to a blank **dashboard creation page**.

### Creating a List Widget

In this example we will use a List widget to keep track of all instances of our Inspection Processes. We will add the **Status** field from the **Request From** to the list to keep track in what stage is a particular process.

1. On the dashboard creation page, click on **List** in the top menu.

   ![Home](/images/dashboard-widget-menu-list.jpg)

2. In the **Add widget** dialog box, change the **Title** to **Inspection records**.

3. List widget automatically shows all records of all our processes in the system. We need to select the **Inspection Process**. Click on the pen icon on the **Inspection Records**.

   ![Edit list widget](/images/examples-edit-list.jpg)

4. In the **Edit List** dialog box, select **Inspection Process** in the **Business process** option.

5. On the right-hand side of the **Edit List** dialog box click on **Design Fields**.

6. Select **Status** field from the **Request Form**.

   ![List dialog box](/images/examples-list-editbox.jpg)

7. Click on **OK** in the **Edit List** dialog box to save changes.



### Creating a Link widget

In this example we will use the Link widget in our dashboard. By clicking on it, our users will be able to create new instances of the **Inspection Process** starting in the **Request Form**. To learn more about Link widgets go to [Link widget](/docs/platform/pages/link/)

1. On the dashboard creation page, click on **List** in the top menu.

   ![Add link in dashboard](/images/dashboard-widget-menu-link.jpg)

2. In the **Add widget** dialog box, change the **Title** to **Request an Inspection**.

3. Click on **OK** in the **Add widget** dialog box.

4. We need to activate which process to start when clicking on the link, click on the pen icon to edit the **Link widget** 

   ![Link edit](/images/dashboard-edit-link.jpg)

5. Click on **Start New Process** in the **Edit button links** dialog box.

6. In the **Edit buttons links Request an Inspection** dialog box select **Inspection Process** in the **Target process** option.

7. Click on **OK** in the **Edit Link** dialog box.

8. Click on **OK** in the **Edit buttons links Request an Inspection** dialog box.

### Creating a Pie Chart widget - Pie chart

In this example we will use the Chart widget in our dashboard. We will create a pie chart from the available options, representing the status of our inspection processes. To learn more about Chart widgets go to [Chart widget](/docs/platform/pages/chart/).

1. On the dashboard creation page, click on **Chart** in the top menu.

   ![Add link in dashboard](/images/dashboard-widget-menu-chart.jpg)

2. In the **Add widget** dialog box, change the **Title** to **Inspection Status**.

3. Click on **OK** in the **Add widget** dialog box.

4. We need to attach a process to the pie chart, click on the pen icon on the chart widget to edit it.

5. Select **Inspection process** in the **Business process** option.

6. Select **Pie chart** from the **Chart type** option.

7. Select **Status** field from the **Label field** option.

8. Click on **OK** in the **Edit chart** dialog box.

   ![List dialog box](/images/examples-chart-editbox.jpg)

9. In the top right-hand menu click on ![Link edit](/images/dashboard-save-button.jpg) to save your dashboard.

   ![Link edit](/images/dashboard-menu.jpg)

## Inspection Process Dashboard Summary

We have now created the dashboard for our Inspection process. Using the List widget, we can see all details of all instances of each inspection process that was created. By picking the **Status** field to show in our **List** widget, we can see which processes are **Completed** and **Requested**. With the **Link** widget we are allowing the users of the dash board to click on the link to start an **Inspection process.** Take a look at the finished dashboard for the **Inspection Process** below.

![Finished Dashboard](/images/examples-inspection-dashboard.jpg)

