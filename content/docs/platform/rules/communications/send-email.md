---
title: "Send email"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

This rule sends an email according to a predefined template.  Each element of the email is configurable.  The body of the email can include text, images and attachments.  Data stored in fields in the current form can be copied in dynamically. 



## When to use the Send email rule

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)



## Before you get started ##

In advance of using this rule, you need to have **created one or more forms, complete with control fields**. For example a text box control with an employee's 'Name' may be part of a form 'Annual Leave Request'. Then this 'Name' field can be used as an **expression** in the email to send personalised emails, so these aspects must be set up in advance.

1. Decide how the rule will be implemented, for example will an email be sent once a form is saved or submitted. In the example of form submit, then click on that form in the process > **Submit** button > **Add a rule** > **Send email**.
2. Decide who the automated email will be sent from, for example a no-reply type email. If you leave the From field empty, the email will be sent from noreply@kianda.com. If you want your email to come from a different sender, then go to [Email connector](/docs/platform/rules/communications/send-email/#email-connector) for more details on how to set that up. 
3. Any email addresses to send To, From, CC or BCC must be set up in advance. This could be a textbox in a form called 'Email address' with a unique Name like 'emailAddress', or it could be a user picker field associated with particular users, groups or partners.
4. If you want to track the emails, then you must set up a field in your form to store email tracking. 
5. If you want to attach any files to an email, files must first be stored in a File field in one of the forms. 



## How to get started ##

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](https://docs.kianda.com/images/penicon.png). For example selecting the **Submit** as shown below.

   ![Form and button edit mode](/images/send-email-page-select-submit.jpg)

2. In the left-hand side pane, click on **Add a rule** > **Communications** > **Send email**. 

3. Choose from the edit options:

   1. **Title** - of the email for example 'Send email to Training Managers'

   2. **Edit conditions** - click on **Edit conditions** ![Edit conditions button](/images/editconditions.png) to set conditions for sending an email, for example while a process has a 'status' of 'open', send reminder emails. To learn more about conditions go to [Conditions](/docs/platform/rules/general/add-conditions/).

   3. **From** - who the email is from, click on **Person** button ![Person button](/images/person.png) and choose from the appropriate **Selection mode**, see [Selection mode](/docs/platform/rules/communications/send-email/#selection-mode) below.

      **Warning** 
   
      *If you add an email address to the **From** field, you must specify an Email connector, see [Email connector](/docs/platform/rules/communications/send-email/#email-connector). If a connector is not specified, the emails will come from noreply@kianda.com. If a Global SMTP connector is configured, all emails will be sent from the global connector.*
   
   4. **To** - who the email is to, click on **Person** button ![Person button](/images/person.png) and choose from the appropriate Selection mode, see [Selection mode](/docs/platform/rules/communications/send-email/#selection-mode) below.

   5. **CC** - who will be copied on the email, as with **To** field.

   6. **BCC** - who will be blind copied on the email, as with **To** field.

   7. **Subject** - type in your email subject and click on the **Ellipsis** button ![Ellipsis button](/images/ellipsis.png) to add an expression, go to [Expression builder](/docs/platform/rules/general/expression-builder/) for more information. The **Subject** cannot be left empty.

   8. **Body** - choose from an array of styles and formats to create your email including **Style,** **Colour**, **Font  size**, **Remove font style**, **Font family**, **Unordered list**, **Ordered list**, **Paragraph**, **Table**, **Link**, **Picture**, **Attach a File** and **Code view**. For example if you click on **Code view** button ![Code view button](/images/code.png) you can copy HTML code directly into the body text.

      ![Send email](/images/send-email-edit-box.jpg)

      

      If you click on the **Picture** button ![Picture button](/images/picture-button.jpg)you will be redirected to the **File storage** area where you can search for existing images stored in the Kianda file system, create a folder, or upload a file. 

      ![Storage files management area](/images/storage-files-upload.jpg)

      To find out more about how to attach a file, see [Attachments](/docs/platform/rules/communications/send-email/#attachments) for more details.

      To add a message to your email, click on the **Body** text box. You can personalise automated emails using fields from the process by clicking on the **Ellipsis** button ![Ellipsis button](/images/ellipsis.png) to add an expression, see [Expression builder](/docs/platform/rules/general/expression-builder/) for more details. 
   
   9. **Send via connector** - options are a) **No** or b) **Yes** 
   
      If you choose **Yes** then you must choose an **Email connector** and decide if you want to **Save Sent Items** (Yes or No) which means sent emails are saved in a sent items folder in your email account. For more information go to [Email connector](/docs/platform/rules/communications/send-email/#email-connector)
      ![Email connector options](/images/send-email-connector-yes.jpg)
   
      Note that if **Global SMTP Mail connector** has been configured, all emails sent will use the Global connector settings instead, including no-reply@kianda.como find out more, go to [Setting up a Global SMTP mail connector](/docs/platform/connectors/email/#setting-up-a-global-smtp-mail-connector). 
   
   10. **Enable tracking** - options are a) **No** or b) **Yes** 
   
      - Note that this option is only available if **Send via connector** is set to **No** and the email is being sent from noreply@kianda.com. 
   
      - If you choose **Yes** then you must click into the field under **Field to store tracking event (Open, Click, Bounce, Spam)** and choose a field from a form to store the event.
   
        ![Enable tracking](/images/send-email-tracking.jpg)
   
      * This option allows you to track the email after it is sent. All of these events, Open, Click, Bounce and Spam will be tracked.
   
   11. Click on **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.
   
   12. Note when your rule is complete you may want to change the order of rules for the particular field or form that it has been applied to. Drag the new Send email rule to where you want, so the order of execution of rules is correct. 
   
       For example for a Submit button on a form I may want my **Send email rule** to be executed first before any other rule is executed. To do this click on the **Submit** button to make sure you are in **Edit** mode, and under **Rules** in the right-hand pane,  drag the **Send email** rule to the top of the list by clicking on the rule and dragging it.
       
       ![Rule order](/images/ruleorder.png)
       
       For more information on rule order, see [Multiple Rules](/docs/platform/rules/general/multiple-rules/).


### Email connector ###

The **Email connector** is a mailing tool that allows you to send emails with a specified email account, for example support@ or info@. An email connector must be set up in advance, to learn how to set up an **Email connector** go to [Email connector](/docs/platform/connectors/email/).

If you leave the **From** field empty, the email will be sent from noreply@kianda.com.  If you want your email to come from a different sender, follow these steps when you are editing the Send email rule:

1. Set **Send via connector** to **Yes**.  
2. Click into the field under **Email connector** and select a connector. 
3. Click on **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.

Note that if **Global SMTP Mail connector** has been configured, all emails sent will use the Global connector settings instead of what is specified in the **send email** rule. Go to **Administration** > **Subscription** > **Subscription Details** to check for a global setting or to find out more, go to [Setting up a Global SMTP mail connector](/docs/platform/connectors/email/#setting-up-a-global-smtp-mail-connector).



### Selection mode ###

When you are filling out the **To**, **From**, **CC** or **BCC** fields and click on the **Person** button ![Person button](/images/person.png)you have the following selection mode options to choose from:

- [x] **Any user or partner** 

- [x] **User(s) defined in a user field**

- [x] **Form owner(s)**

- [x] **Email address in a field**. 



> **Note**; You can reset user/ field you selected by clicking **Clear**![Clear field](/images/clearx.png) on the dropdown field in the **Select email users** dialog box.



![Select email users dialog box](/images/send-email-selection-mode.jpg)

- **Any user or partner** - With this **Selection mode** selected. On the right-hand side of the **Select users** dropdown list, you can choose to select from **Users, Groups** and **Partners**. This allows you to distinguish which users are picked for this field. For example a single user, or a group of users.

- **User(s) defined in a user field** - if you choose this option, it means the user name is already defined in a form. By clicking into the **Select a user field**, you can select a field from the process you are working in. 

  - Click on the desired **User** field in your process to add to the **Select a user field** box.

    ![Select user](/images/send-email-select-user.jpg)

  - Click on  ![User picker button](/images/userpicker.png) to add more selection fields.

    ![Add user field](/images/send-email-add-user-field.jpg)

  - Remove a field clicking on the **Bin/Trash** button

    ![User defined field](/images/send-email-remove-user-field.jpg)




- **Form owner(s)** - With this option selected, by clicking into the field under **Form owner of selected form** and choose from the forms within that process. This automatically uses the form owner(s) email address. To learn more about forms and form owners go to [Form basics](/docs/platform/application-designer/forms/).

  ![Form owner of selected form](/images/send-email-form-owner.jpg)

- **Email address in a field** - With this option selected, by clicking into the field under **Type the address or select from a field**, you can either type in an email address or choose from a field within the process you are working in.


![select email users](/images/send-email-email-address.jpg)

In all cases when you have made your selection, click on **OK** button to save your changes or click on **Close** to exit the dialog box without saving.



### Expression builder

The expression builder is a useful and efficient way to use existing form fields as part of automated emails that you want to send out.

For example if you have a form Annual Leave request that contains a text box field 'Employee Name' you can use this field in an automated email to let a manager know that an employee has submitted a request. 

1. Before you begin have your message inserted into the **Body** of the email and position your cursor where you want to add an expression, for example an Employee Name after 'Your employee' as shown below.

   ![Body text](/images/bodytext.png)

2. Click on the **Ellipsis** button ![Ellipsis button](/images/ellipsis.png)on the right-hand side of the email **Body**. An **Expression** **builder** dialog box opens.

3. Click into the field under **Add field to expression**. Forms and fields that are part of your process appear where you can expand elements to drill down to find the field that you want, for example 'Employee Name'. Click on the field to add field to the expression.

   ![Expression builder](/images/expressionaddfield.png)

3. Click on the **Add to expression** button ![Add to expression](/images/addtoexpression.png)to add the field as an expression. Note that the expression is the **Name(unique)** of that field.

   ![Expression added](/images/expressionadded.png)

   

5. Click on **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.

6. The result is the expression is now part of the automated email. 

   ![Text box expression added](/images/expressionin.png)

6. To add more expressions, firstly position your cursor in your body text where you want to add the expression, then click on the **Ellipsis** button and under **Add field to expression** clear any existing fields by clicking on the **Clear** button. This appears when you hover over the Add field box.

   ![Clear field](/images/clearexpression.png)

   Then search for other fields, for example lists or links, and use the Expression reference functions, see step 7.

7. Click on **Reference** ![Expression reference](/images/reference.png) to find out how to use particular functions in your email. For example **ProcessLink()** returns the html link to the current process. Copy this function into the Expression box and click on **OK** to add the function. Then in the **Body** type in the text you want associated with this link for example "click here" into the brackets of the function:

   ![Click here text](/images/clickhere.png)

   In this way you can build personalised automated emails that provide a link back to a process instance, for example that a manager can view, update or approve. For more information on References and Expressions see [Expressions](/docs/getting-started/create-first-process/plan-your-process/expressions/) for more information.



### Attachments ###

To attach a file into the **Send email** rule, you must first contain a file field in your process. To learn more about file control go to [File upload control](/docs/platform/controls/input/file-upload/). 

1. To attach a file to an email, click on the **Attach a file** button ![Attach a file button](/images/attachfile.png). The **Attach file to email** dialog box opens. 

2. Select a **File** field from your process to attach the file, for example an **Image** filed as shown in the image below.

   ![Attach file dialog box](/images/send-email-attach-file.jpg)

3. Click in the **File** field, find and select the desired field.

4. Click on **Insert attachment**. There is an option to attach a link to the file rather than the file itself.

In the **Attachments** section of the **Send email** dialog box, the name of the **File** field will appear indicating that attachments will come from the specified field. You can delete the specified File field by clicking the red bin/trash icon.

![Send email dialog box - attachment section](/images/send-email-attachment.jpg)



### What’s next ![Idea icon](/images/18.png)

To find out more about other communication rules go to [Communication rules](/docs/platform/rules/communications/).

To find out more about other rules go to [Rules](/docs/platform/rules/).

