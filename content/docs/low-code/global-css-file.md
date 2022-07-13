---
title: "Global CSS file"
weight: 6
typora-root-url: ..\..\..\static
---

Within Kianda there is standard site-wide Cascading Style Sheets (CSS) that forms the default styling on the site. However as a workspace **Administrator** you can access a **Global CSS File** that exists within the **Look and Feel** section of the Subscription, within the **Administration** section of the site. 



## When to use ##

You may want to modify or add to the **Global CSS File** when you want to change the **Look and Feel** of the site or your **processes**. You can do this by selecting individual fields in the **process** via the unique name or can change entire elements by selecting their element name or a selector. Once items are added to the file they will be available globally in the **Subscription** function within **Administration**. 



## How to get started ##

To access the Global CSS file:

1. As an **administrator**, go to **Administration** > **Subscription**.

2. Click on **Look and Feel**.

3. On the **Look and Feel** page, click on the **ellipsis** button ![Ellipsis button](/images/expression-button.jpg) beside the **Custom CSS Url** to access the Global CSS file.

   ![Custom CSS Url file](/images/custom-css-url.jpg)

4. The **CSS Editor** opens, allowing you to make edits to default code. 

   ![CSS Editor](/images/css-editor.jpg)

5. Within the file there are some items already added that can be expanded upon. For example these items include:

   - **Class selectors** for example:

   ```css
   .list-row {
     border-radius: 5px;
     background-color: #ffffff;
     padding: 10px;
     -webkit-transition: background-color 100ms ease-out;
     transition: background-color 100ms ease-out;
   }
   ```
   
   - **Class selector and element** for example:
   
   ```css
     .pagination > .active > a {
      background-color: #1e2458;
      border-color: #1e2458;
     }
   ```
   
   - **Elements and attributes** for example:
   
     ```css
     div[data-name$="?card"].form-group {
      border-radius: 12px;
      border: 1px solid #e7eaee;
      background: white;
      margin-bottom: 15px;
      padding-bottom: 0px !important;
      padding-top: 18px;
      padding-right: 15px;
     }
     ```
   
   - **Media controls** for example:
   
   ```css
   @media only screen and (max-width: 767px) {
     div[data-name$="?headerTitle"]:not(.is-design) {
       margin-left: calc(-52vw + 50%);
       width: 101vw;
     }
   }
   ```
   

The next section deals with [Adding items](#adding-items-to-global-css) to the file.



### Adding items to Global CSS

Additional items can be added to the file whenever you wish. Best practice is to update only individual items based on the **Unique Name** which becomes an attribute.

For example, if you have a button in a process and you want to change background colour and text colour, first you need to note down the **Unique Name.** Next, because you only want to target the button in a specific process and not all buttons in the system, use the **Element and attribute** selector. This will take the form of: 

```css
button[data-name$="?pinkButton"]:not(.is-design) {}
```

1. Within the **Global CSS File** add the necessary details, for example the above along with the necessary CSS properties, for example:

   ```css
    button[data-name$="?pinkButton"]:not(.is-design) {
         color: green;
       background-color:pink;
     }
   ```

2. When you are finished making changes click on **OK** or else click on **Close** at any time to close the dialog box. 

3. Ensure to save changes to the file by clicking on the **Save Changes** button in **Look and Feel**. You should see a notification to say **Subscription settings updated**.

   ![Subscription settings updated](/images/subscription-settings.jpg)

   **Once** the file is saved ensure to refresh Kianda to download the most recent changes into the cache. 

4. Return to the process and select the button that needs the custom CSS.

5. Edit the button and enter the attribute name into the **Unique Name** field.

   ![image-20220712071246993](/images/unique-name)

6. When the process is viewed in preview mode or published the Global CSS will override the default system CSS.

   ![image-20220712071813270](/images/send-email-pink)

The steps above can be used to edit any element in the subscription using any standard CSS syntax.

### Process and Dashboard specific CSS
The steps in the [Adding items](#adding-items) provide a perfect means to ensure your CSS is available throughout the subscription. However changes may unintentionally cause changes in order parts of the system. For this reason, it possible to add **localised CSS** to each process and dashboard through a rich text field.
For example, if you want to change all buttons in the process to have a background colour of Magenta, you can follow the following steps.

1. Navigate to the process and add a **Rich Text** field. 

2. It is important to name it **_CSS**. Within the Rich text field click on the **Code View** button to open up the code editor.

   ![Richtext source code](/images/richtext-source-code.jpg)

3. Enter the <style></style> tags into the body.

   ![image-20220712073111187](/images/style-tags)

4. Click the Code View button again to commit the change and click **OK**. 

5. To make all buttons show the changes, use the class selector by editing the richtext field again and go into the Code View and add the necessary CSS.

   ![image-20220712073306562](/images/style-magenta)

6. The buttons now have a background colour of magenta provided they do not have a custom colour already selected.

   ![image-20220712073349125](/images/magenta-buttons)

   The steps above can be used to edit any element in a process or dashboard using any standard CSS syntax. 

   

### What's next  ![Idea icon](/images/18.png) ###

To learn more about designing processes go to [Application designer](/docs/platform/application-designer/).

To learn more about dashboards go to [Dashboard pages](/docs/platform/pages/).
