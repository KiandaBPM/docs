---
title: "Global JavaScript file"
weight: 5
description: "Add global JavaScript for custom logic and reusable functions available across your entire Kianda workspace"
typora-root-url: ..\..\..\static
---

The **Global JavaScript file** in Kianda gives you a central place to add custom JavaScript code that will be loaded and available across your entire workspace. Whether you want to create helper functions, bind custom actions to user interactions, or integrate with front-end frameworks at a deeper level, this file provides a convenient, site-wide JavaScript environment.

Because it’s globally accessible, you can think of this file as your own mini library of utilities and features that any process, form, or dashboard in Kianda can tap into. For example, you could define functions to:

- Manipulate DOM elements dynamically,
- Handle global events or user interactions,
- Integrate external APIs or services consistently,
- Hook into the Ember.js application lifecycle that Kianda’s front-end runs on.

## Why Use a Global JavaScript File?

**Reuse and maintainability:** Instead of duplicating code across multiple processes or forms, write it once here. Any code in this file can be called from anywhere else, reducing repetition and simplifying long-term maintenance.

**Centralized customization:** Keep your custom logic organized in one place. If you need to adjust a commonly used function, updating it in the Global JavaScript file instantly applies the change throughout the workspace.

**Deep integration:** Kianda is built on Ember.js. By hooking into the Ember application through the global file, you can access app instances, sessions, and stores, letting you implement advanced custom behaviors that integrate with Kianda’s internal mechanisms.

## Getting Started

1. **Access the Developer Page:**  
   As an **Administrator**, go to **Administration** > **Developer** in the Kianda menu.

2. **Open Global JavaScript Editor:**  
   Click **Edit Global JavaScript** to open the JavaScript editor. If you’ve already added code, it will appear here; if not, you can start from scratch.

3. **Add or Modify Code:**  
   Write or paste your JavaScript. You can define functions, create event listeners, or even hook into Ember’s initialization sequence. For example:
   
   ```javascript
   function testClick() {
     alert("Testing a button click");
   }
   
   // Ember app hooks for advanced integration
   window.kiandaApp = {
     init: function (app) {
       app.boot().then(async () => {
         var appInstance = app.__container__.owner;
         var session = appInstance.lookup("service:session");
         var store = appInstance.lookup("service:store");
         // Add custom logic here if needed
       });
     },
     didInit: function(appInstance) {
       // Fires after the app has initialized
       // Ideal place for actions that require a fully loaded environment
     }
   };
   ```

4. **Save and Apply Changes:**  
   Click **OK**, then **Save Changes** in the Subscription Details page. After saving, refresh your workspace to ensure the new code is loaded globally.

5. **Use the Generated URL (If Needed):**  
   A URL is generated for the Global JavaScript file. Typically, you don’t need to reference this URL directly within Kianda, but it’s available for troubleshooting or external references.

## Best Practices

- **Keep it organized:** Group related functions together and comment your code, so it’s easier to maintain as your workspace grows.
- **Use namespaces:** To avoid naming conflicts, consider wrapping related functions in a single object or namespace. For example:
  ```javascript
  window.myCompanyUtils = {
    setHeader: function(elementId, text) {
      const headerElement = document.getElementById(elementId);
      if (headerElement) {
        headerElement.innerHTML = text;
      }
    }
  };
  ```
- **Embrace Ember hooks:** The `window.kiandaApp` object gives you direct access to Ember’s lifecycle. Use `init` or `didInit` to run code at startup, obtain services, or dynamically modify application behavior.
- **Leverage jQuery/Vanilla JS:** Kianda includes jQuery, but you can also use modern JavaScript APIs (`document.querySelector`, etc.). Prefer modern APIs when possible for cleaner, more performant code.

## Example: Dynamic Interaction with a Dashboard

Here’s a more detailed example of a global function that updates a dashboard header based on a user’s selection in a dropdown:

```javascript
function setHeader(elementId) {
  // Assuming the dropdown has a Kendo UI component or a similar API
  var dropdown = $('filter.dropdown [data-role=dropdownlist]').data("kendoDropDownList");
  
  dropdown.bind("cascade", function () {
    var selectedText = dropdown.text();
    var headerElement = document.getElementById(elementId);
    if (headerElement) {
      headerElement.innerHTML = selectedText;
    }
  });
}
```

**How This Helps:**  
When a user selects a new filter in the dropdown, `setHeader` runs automatically (after binding), updating the displayed header dynamically. This logic can be easily reused in multiple dashboards or pages—just call `setHeader` with the correct element ID in each case.

## Additional Ideas

- **Data formatting functions:** Create global helpers for formatting dates, numbers, or strings consistently across all processes.
- **Event-based logic:** Attach global event listeners to window or document, and run specific functions in response to custom events fired within Kianda.
- **Complex integrations:** Use `fetch` or AJAX calls to integrate with external APIs, then store or display the returned data in various parts of your workspace.

---

**In summary**, the Global JavaScript file in Kianda is your toolbox. By placing commonly used functions, event handlers, and Ember lifecycle hooks here, you maintain a cleaner, more efficient codebase and give yourself the flexibility to implement custom logic throughout your workspace with minimal repetition.
