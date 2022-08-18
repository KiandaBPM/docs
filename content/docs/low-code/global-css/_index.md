---
title: "Global CSS file"
weight: 6
typora-root-url: ..\..\..\..\static
---

Within Kianda there is standard site-wide Cascading Style Sheets (CSS) that forms the default styling on the whole site. However as a workspace **Administrator** you can add a **Global CSS File** to make changes to the look and feel of the site as well as processes. The **Global CSS file editor** exists within the **Look and Feel** section of the Subscription, within the **Administration** section of the site, see [Subscription](/docs/platform/administration/subscription/) for an introduction to the **Subscription** function.



## When to use ##

Remember the visual style of processes and individual controls like buttons, can be heavily customised using Kianda [**Designer**](/docs/platform/application-designer/designer/) to achieve a unique look that is both appealing to the eye and practical. Many of these changes can be achieved simply by using the provided customisation controls within **Designer**, for example selecting a button, and clicking on the **Edit/pen** icon to make changes. 

![Selected button example](/images/button-example.jpg)

Selecting the button in this way to edit it, will allow you to select the colour scheme of the control and assign an icon to it from a large library of available icons. 

However, you may want to achieve a **deeper level of customisation**. There are several methods available to combine practicality and ease of user with an aesthetically pleasing design. One option is to modify the **Global CSS File** when you want to change the look and feel of the **site or your processes**. You can do this by selecting individual fields in the **process** via the unique name or can change entire elements by selecting their element name or a selector. Once items are added to the file they will be available globally in the **Subscription** function within **Administration**. 



## Before you get started

The key to building functional and aesthetically pleasing workspaces and processes within Kianda is to **plan ahead** and create a design in advance that you can then use as your vision and mould your process or workspace into. **Design** **tools** can be used to create **visual** **mock**-**ups** of the processes and workspaces you would like to create, for example the mock-up below was created using **Adobe** **XD**. 

<img src="/images/mock-up-design.jpg" alt="Mock-up design example" style="zoom:80%;" />

Bootstrap has released a **library** that can be imported into Adobe XD that allows you to create designs using **bootstrap** **elements**. This allows you to see all of the **available** **components** you have to create your processes and workspaces, and then create **visually** **pleasing** and **functional** **designs** using these elements. 

The **mock**-**up** was then used as a plan to **create** **this** **process**. You don’t have to create processes or workspaces exactly the same as the mock-ups to create during the **planning** **stage**, but they act as a great **reference** and allow you to have a **solid** **foundation** to build off of whilst still being able to **deviate** from the **design** when the need arises. Go to [Create your first Kianda process](/docs/getting-started/create-first-process/) for advice and tips on planning processes. To help you in planning your CSS design, see the sections below.

### Effective use of CSS classes

Although you may be familiar with the concept of using **CSS** **classes** to apply styling to several methods, you may not be familiar with the concept of using the **name** **field** of a Kianda element to **instantly** **apply** **styes** to that element that you have already developed. Within the **global** **CSS** file, we can create **style** **rules** and have them to apply to any **data**-**name** that contains a name that we precede with a **question** **mark**.

```css
div[data-name$="?card"].form-group{
     border-radius: 12px;
     border: 1px solid #e7eaee;
     background: white;
     margin-bottom: 15px;
     padding-bottom: 1px !important;
     padding-top: 18px;
     padding-right: 15px;
}
```

It is good practice to use **relevant** and **descriptive** names for these style rules. In the example above we have a “?card” section with styling rules to style an element to that the **appearance** of a card.



## How to get started with Global CSS ##

To use a Global CSS file:

1. As an **administrator**, go to **Administration** > **Subscription**.

2. Click on **Look and Feel**.

3. On the **Look and Feel** page, click on the **ellipsis** button ![Ellipsis button](/images/expression.jpg) beside the **Custom CSS Url** to access the Global CSS file.

   ![Custom CSS Url file](/images/custom-css-url.jpg)

4. The **CSS Editor** opens, allowing you to make edits to default code, see example below.

   ![CSS Editor](/images/css-editor.jpg)

5. Within the file there may already be some items added that can be expanded upon, or you can create your own, for example:

   - **Class selectors** example

   ```css
   .widget-list-row {
     border-radius: 5px;
     background-color: #ffffff;
     padding: 10px;
     transition: background-color 100ms ease-out;
   }
   ```
   
   - **Class selector and element** example:
   
   ```css
     .pagination > .active > a {
      background-color: #101641;
      border-color: #101641;
     }
   ```
   
   - **Elements and attributes** example:
   
     ```css
     .field-panel[data-name$="?card-view"].form-group {
      border-radius: 12px;
      border: 1px solid #e7eaee;
      background: white;
      margin-bottom: 15px;
      padding-bottom: 0px !important;
      padding-top: 18px;
      padding-right: 15px;
     }
     ```
   
   - **Media controls** example:
   
   ```css
   @media only screen and (max-width: 767px) {
     .field-panel[data-name$="?card-view"].form-group:not(.is-design) {
      background: whitesmoke;
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

   Once the file is saved ensure to refresh Kianda to download the most recent changes into the cache. 

4. Click on **Back** to return to the **Subscription** page and go to **Administration** and **Designer** to navigate to the desired process. Within that process **select the button** that needs the custom CSS.

5. Click on the **Edit/Pen** button to edit the field and enter the attribute name into the **Unique Name** field.

   ![Unique Name field change](/images/send-email-pink-name.jpg)

6. Click on **OK** to submit changes or click on **Close** at any time to exit the dialog box.

7. When the process is viewed in preview mode or published the Global CSS will override the default system CSS.

   ![CSS styled button](/images/send-email-pink-button.jpg)

The steps above can be used to edit any element in the subscription using any standard CSS syntax.



### Process and dashboard specific CSS
The steps in the [Adding items to Global CSS](#adding-items-to-global-css) section provide a perfect means to ensure your CSS is available throughout the workspace subscription. However changes may unintentionally cause changes in other parts of the system. For this reason, it possible to add **localised CSS** to each process and dashboard through a rich text field.
For example, if you want to change all buttons in the process to have a background colour of Magenta, you can follow the following steps.

1. Navigate to the process and add a **Rich Text** field. 

2. **Give the field a title** **_CSS**. Within the Rich text field click on the **Code View** button ![Code view button](/images/source-code.jpg)to open up the code editor.

   ![Richtext _CSS title](/images/richtext-css.jpg)

3. Enter the `<style></style>` tags into the body. 

   ![Style tags in Richtext body](/images/style-tags-richtext.jpg)

4. Click the **Code View** button again to commit the change and click **OK** when you are finished editing the dialog box, or click on **Close** to exit the dialog box at any time.

5. To make all buttons show the changes, use the class selector by editing the richtext field again and go into the **Code View** and add the necessary CSS. 

6. Click on the **Code View** button again to commit changes and then click** on **OK** when you are finished editing the dialog box.

   ![Richtext CSS example](/images/richtext-magenta.jpg)

7. The buttons now have a background colour of magenta provided they do not have a custom colour already selected.

   ![Richtext button styling example](/images/button-color-change.jpg)

The steps above can be used to edit any element in a **process or dashboard** using any standard CSS syntax. 

   

### What's next  ![Idea icon](/images/18.png) ###

To learn more about designing processes go to [Application designer](/docs/platform/application-designer/).

To learn more about dashboards go to [Dashboard pages](/docs/platform/pages/).
