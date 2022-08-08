---
title: "File system"
weight: 6
typora-root-url: ..\..\..\..\static
---

## Introduction

A File System data connector allows you to use your local file system as a data sources for your Kianda forms or dashboards. This means that as your processes are running they will use the information from the local file system or depending on the process, update or delete information at in the local file system location. Any Create, Read, Update and Delete (CRUD) operations performed in Kianda, will be reflected automatically and in real-time in your local system.



## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](/images/addnew.png) and choose **File system** from the list of data sources provided.

3. You will be automatically brought to the **File system details** page, where you can start setting up the connection. 

   ![File system detail page](/images/file-system-details.jpg)

   Choose from the edit options:

   - **Display name** - type in the name for your file sytem connector. This is used to distinguish between different data connectors on your platform.

   - **Root folder path** - type in manually the file path to the folder of your connector. The connector will be able to access data only in this folder and folders within.

   - **File search pattern** - select the extension you want the connector to display. For example typing in `*.txt` will only output the .txt files within the folder path, it will ignore all other path endings and will not display them. To set pattern you need to type in `*` followed by `.extenstion` for example `*.txt` , `*.docx` or `*.pdf`

   - **Search options** - it only allows you to search the files of the top directory that is set in the **Root folder path** or all other files of other directories within. For example selecting if **Top Directory Only** is selected, you will be able to see only the files that are in **Root folder path** while ignoring folders. If the **All Directories** is selected, you will be able to see files that are in **Root folder path** and all files from within each folder.


