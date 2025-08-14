---
title: "SharePoint connector"
weight: 1
typora-root-url: ..\..\..\..\static
---

## Kianda SharePoint Connector — Developer Guide

### Overview

The **SharePoint data connector** lets Kianda processes interact directly with SharePoint data—whether to display data in forms or dashboards or to update SharePoint lists dynamically.

---

### 1. Setup: Adding a SharePoint Data Connector

To add a SharePoint connector:

1. Go to **Administration → Data sources**.
2. Click **“Add new”**, then select **SharePoint**.
3. Configure:

   * **Display Name**: Choose a meaningful identifier (e.g., “HR Site Connector”).
   * **Site URL**: Link to your SharePoint site.
   * **SharePoint Version**: Choose from:

     * SharePoint Online (Microsoft 365)
     * SharePoint 2016
     * SharePoint 2013
   * **Scope**: Select either one **Site** or an entire **Site Collection**.
   * **Authentication Mode**:

     * **SharePoint Online Authorization** (requires admin rights)
     * **System User Credentials** (uses username/password, no admin rights needed)
4. Click **Test connection**—if successful, click **Save**, then optionally set up additional **Security** settings.([docs.kianda.com][1])

---

### 2. SharePoint Query Parameters You Can Access

Once connected, the connector exposes both default SharePoint metadata and any custom list columns. Common fields include:

`ID`, `Content Type`, `Title`, `Modified`, `Created`, `Created By`, `Modified By`, `Version`, `Server Relative URL`, `Item Child Count`, and more. Custom columns (e.g., `Location`) also appear in display, value, and sort dropdowns.

---

### 3. Binding SharePoint Data to Kianda UI

To display SharePoint list items:

* Use the **List Control** in a form:

  1. Design or open your form in the **Process Designer**.
  2. Add a **List** input control.
  3. Under **List Source → Data source**, select your SharePoint connector.
  4. Set **Display Field**, **Value Field**, and optionally **Sort by** (and sort direction).
  5. Optionally, apply **Conditions** or cascading logic.

This makes the list option dynamic—automatically reflecting updates from SharePoint.

---

### 4. Managing SharePoint from Kianda via Rules

Kianda offers a suite of SharePoint-specific rules to perform CRUD operations and permission management via the SharePoint API.

Available rules include:

* **Create objects**:
  * **Create Item / Document** — Create items and upload documents..
  * **Create Site** — start a new SharePoint site using a template.
  * **Create List** — add a new list to a SharePoint site.
  * **Create Group** — create a user group in SharePoint.

* **User and Permissions Management**:

  * **Find a User** — search by display name, email, or ID; retrieve User ID or Username.
  * **Add User to Group**
  * **Remove User from Group**
  * **Reset Item Permissions**

* **File and Attachment Handling**:

  * **Check In / Out an Item** — with support for comments.
  * **Get List Item Attachments** — retrieve attachments for use in forms.
  * **Create Anonymous Link** — generate a public-access link to a file.

Workflow integration:

* Attach rules to form fields, processes, or buttons.
* Provide a title, set optional **Conditions**, map **Success** and **Error** outputs.
* Rules can run automatically (e.g., on load) or via manual triggers.

---

### 5. Quick Example: Retrieving a User ID from SharePoint

**Use case**: Auto-populate a form based on user lookup.

1. Create a text field in your form (e.g., "Email Input").
2. Attach a **Find a User** rule:

   * Choose your SharePoint data source.
   * Set search criteria (e.g., “Search by Email”).
   * Map “Username” or “User ID” into target fields.
3. Optionally add success/error mapping and rules conditions.
4. Trigger the rule (on load or via button).

---

### Summary & Best Practices

| Task                 | Approach                                                               |
| -------------------- | ---------------------------------------------------------------------- |
| **Set up connector** | Admin → Add new → Choose SharePoint → Configure → Test → Save          |
| **Populate UI**      | Bind SharePoint via List Control with proper mapping and filters       |
| **Run operations**   | Use SharePoint rules—Define rule, set source, conditions, and mappings |
| **Handle data flow** | Use Success/Error mapping to chain logic or give user feedback         |

**Tips for Developers**:

* Use consistent names for connectors to avoid confusion.
* Apply conditions and error mappings for robust user experience.
* Use rule chaining (e.g., Find user → Add to group) to build advanced logic.
* Test thoroughly with both Site and Site Collection scopes, and across auth methods.

