---
title: "Global JavaScript file"
weight: 5
typora-root-url: ..\..\..\static
---

As a workspace **Administrator** you can add a **Global JavaScript** file to add new functionality to your organisation's workspace that is **globally available**, for example a helper class or a helper method that can be called from different parts of the platform. Your function could also bind to an onscreen element, for example if a user clicks on a particular element on screen you may want a specific action to happen using JavaScript.

The **Global JavaScript editor** exists within the **Subscription details** section of the Subscription function, within the **Administration** section of the site, see [Subscription](/platform/administration/subscription/) for an introduction to the **Subscription** function.

The benefit of this file is that any functions listed within it become **globally available** across the site. Therefore you are creating a library of reusable functions that can be called upon anywhere in the processes you create. The file loads immediately when the application starts.

## How to get started with Global JavaScript file ##

To use a Global JavaScript file:

1. As an **administrator**, go to the left-hand side menu and **Administration** > **Subscription**.

2. Click on **Subscription Details**.

3. Within the **Subscription Details** page, under **General Settings** there is a field for the **Global JavaScript file**. If a file has already been uploaded it will be named here. 

   ![Global Javascript file in General Settings](/images/global-javascript-file.jpg)

4. Click on the **ellipsis** button ![Ellipsis button](/images/expression.jpg) beside the **Global JavaScript** field to access the file details for files already uploaded. Alternatively click on **Browse** to browse for a file on a PC or network.

5. The **JavaScript Editor** opens, allowing you to add new code or edit code if your organisation has already added in **functions**. Click on the Editor screen to show the code or to start adding code. The image below shows how a sample of code can be added/created.

   ![Javascript editor sample code](/images/javascript-editor.jpg)

   A further example of a [JavaScript global function](#using-your-javascript-global-functions) is shown below. 

6. Add or modify code as needed and when complete click on **OK** or alternatively click on **Close** at any time to close the dialog box.

7. A **URL is generated** for the Global JavaScript file found in the Global JavaScript file field.

8. Click on **Save Changes** to save changes for the Subscription Details page and click on **Back** to go back to the Subscription main page.

By adding functions added to the file will are creating a library of reusable functions that can be made available globally within your application.

### Using your JavaScript global functions

Here is an example of code found in a JavaScript file:

```javascript
function setHeader(elementId) {
  var dropdown = $('filter.dropdown [data-role=dropdownlist]').data("kendoDropDownList");
  dropdown.bind("cascade", function () {
    var value = dropdown.value();
    var text = dropdown.text();
    var headerElement = document.getElementById(elementId);
    if (headerElement) {
      headerElement.innerHTML = text;
    }
  }
  );
}
```

The function `setHeader`is used to locate an element on screen using JQuery where the function locates the element and sets a specific header ID. The function is used in combination with a filter drop-down list and will allow you to set the header. This can be used for example when selecting a particular filter in a dashboard, where the function sets the text on a particular header element in that dashboard.

This function can be attached to a page so when the page loads, the `setHeader` function executes and automatically changes the header of the project.
