---
title: "Create from datasource"
typora-root-url: ..\..\..\..\..\static
weight: 5
toc_hide: true
hide_summary: true
---

## Introduction

The **Create from Datasource** feature allows you to create a process with a [Datasource](/docs/platform/connectors/) of your choice, so long as the datasource is already created and connected from within your platform. It serves as a way of swiftly populating your process with the relevant fields of your datasource's lists so that you can increase design productivity from the beginning.

Examples of fields that can be populated instantly into your processes include **ProcessID**, **Title**, **Description**, and other fields such as an associated utility panel - important hidden metadata relating to your list.



## How to get started

##### How to create a new process from a datasource:

1. From the home page, navigate to **Administrator > Designer.**

2. When you are in the **Process designer** screen navigate your mouse to the ![Idea icon](/images/addnew-component.jpg) button and click the small **down arrow.**

   ![Idea icon](/images/component-addnew.jpg)

3. In the dropdown menu click on **Create from datasource**. 

   ![Idea icon](/images/create-from-datasource-new.png)

4. In the **Select datasource** dialog box, fill in the following details:

   ![Idea icon](/images/select-datasource-create-from-datasource.png)

   - **Replace list form with Kianda forms?** - select *yes* to .... and select *no* to....

   - **Datasources** - select your datasource of choice that you would like to create the process with. These displayed datasources are the datasources that are already created and connected within your Kianda platform. For more information, see [Datasources](/docs/platform/connectors/). In this example we will choose a [SharePoint](/docs/platform/connectors/sharepoint/) datasource.
   - **Datasource tree** - once a datasource has been selected, select which elements in that datasource to be displayed as fields in your process. For example a list or a folder. You can drill down into the tree by clicking on the main datasource node at the top and select the relevant element, and you can search the tree by using the search bar in the top right.

5. Click on **OK** when you are finished filling out the details. You will be automatically moved to the process designer screen. Alternatively you can click **Close** to exit the creation dialog.

