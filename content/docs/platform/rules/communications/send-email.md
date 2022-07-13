---
title: "Send email"
typora-root-url: ..\..\..\..\..\static
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
2. Decide who the automated email will be sent from, for example a no-reply type email. If you leave the From field empty, the email will be sent from noreply@kianda.com. If you want your email to come from a different sender, then go to [Email connector](#Email connector) for more details on how to set that up. 
3. Any email addresses to send To, From, CC or BCC must be set up in advance. This could be a textbox in a form called 'Email address' with a unique Name like 'emailAddress', or it could be a user picker field associated with particular users, groups or partners.
4. If you want to track the emails, then you must set up a field in your form to store email tracking. 
5. If you want to attach any files to an email, files must first be stored in a File field in one of the forms. 



## How to get started ##

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Pen button,  **Pen** button ![Pen button](/images/penicon.png). For example if the form Training Approval has a Submit button within a form and you want to attach the rule to Send an email when the form is submitted, then you need to click on the form and the Submit button in that form.

   ![Form and button edit mode](/images/formvsbutton.png)

1. Click on **Add a rule** > **Communications** > **Send email**. 

2. Choose from the edit options:

   1. **Title** - of the email for example 'Send email to Training Managers'

   2. **Edit conditions** - click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) create conditions to send the email, for example while a process has a 'status' of 'open'. This type of status value can be set in a utility panel.

   3. **From** - who the email is from, click on **Person** button ![Person button](/images/person.png) and choose from the appropriate Selection mode, see [Selection mode](#Selection mode) below.

      > **Warning** 
      >
      > If you add an email address to the From field then you must specify an Email connector, see [Email connector](#Email connector).
      
   4. **To** - who the email is to, click on **Person** button ![Person button](/images/person.png) and choose from the appropriate Selection mode, see [Selection mode](#Selection mode) below.
   
   5. **CC** - who will be copied on the email, as with **To** field.
   
   5. **BCC** - who will be blind copied on the email, as with **To** field.
   
   5. **Subject** - type in your email subject and click on the **Ellipsis** button ![Ellipsis button](/images/ellipsis.png) to add an expression, go to [Expression builder](#Expression builder) for more information. The **Subject** cannot be left empty.
   
   5. **Body** - choose from an array of styles and formats to create your email including **Style,** **Colour**, **Font  size**, **Remove font style**, **Font family**, **Unordered list**, **Ordered list**, **Paragraph**, **Table**, **Link**, **Picture**, **Attach a File** and **Code view**. For example if you click on **Code view** button ![Code view button](/images/\code.png) you can copy HTML code directly into the body text.
   
      ![Send email](/images/email.png)
   
      
   
      To find out more about how to attach a file, see [Attachments](#Attachments) for more details.
   
      Click into body text to type in your text. If you want a useful way to personalise automated emails using fields from the forms you have created click on the **Ellipsis** button ![Ellipsis button](/images/ellipsis.png) to add an expression, see [Expression builder](#Expression builder) for more details. 
   
   9. **Send via connector** - options are a) No or b) Yes 
   
      - If you choose **Yes** then you must choose an **Email connector** and decide if you want to **Save Sent Items** (Yes or No) which means sent emails are saved in a sent items folder in your email account. For more information go to [Email connector](#Email connector)
   ![Email connector options](/images/emailconnector.png) 
   
   5. **Enable tracking** - options are a) No or b) Yes 
   
      - Note that this option is only available if **Send via connector** is set to **No** and the email is being sent from noreply@kianda.com. 
      - If you choose **Yes** then you must click into the field under **Field to store tracking event (Open, Click, Bounce, Spam)** and choose a field from a form to store the event. 
   
      ![Enable tracking](/images/enabletrackingyes.png)
   
      * This option allows you to track the email after it is sent. All of these events, Open, Click, Bounce and Spam will be tracked.
   
   11. Click on **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.
   
   12. Note when your rule is complete you may want to change the order of rules for the particular field or form that it has been applied to. Drag the new Send email rule to where you want, so the order of execution of rules is correct. 
   
       For example for a Submit button on a form I may want my **Send email rule** to be executed first before any other rule is executed. To do this click on the **Submit** button to make sure you are in **Edit** mode, and under **Rules** in the right-hand pane,  drag the **Send email** rule to the top of the list by clicking on the rule and dragging it to the top.
       ![Rule order](/images/ruleorder.png)
       
       For more information on rules, see [Rules](rules/Readme.md).


### Email connector ###

The email connector must be set up in advance. 

If you leave the From field empty, the email will be sent from noreply@kianda.com.  If you want your email to come from a different sender, follow these steps when you are editing the Send email rule:

1. Set **Send via connector** to **Yes**.  
2. Click into the field under **Email connector** and select a connector. 
3. Click on **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.

Note that this will override the global Email connector setting if one has been configured for your system.  Go to **Administration** > **Subscription** > **Subscription Details** to check for a global setting. 



### Selection mode ###

When you are filling out the **To**, **From**, **CC** or **BCC** fields and click on the **Person** button ![Person button](/images/person.png)you have the following selection mode options to choose from: **Any user or partner**, **User(s) defined in a user field**, **Form owner(s)**, **Email address in a field**. Each option is explained below.

![Any user or partner mode](/images/anygroups2.png)

Please note in all modes you can clear a field by clicking on the field and click on **Clear field** ![Clear field](/images/clearx.png).

1. **Any user or partner** - if you choose this option, then click on **Users** and choose from Users, Groups or Partners and click into the field under **Select users** to see a dropdown list of users, predefined groups and partners and click onto your name of choice. You can add as many users, groups and partners as desired by clicking on a name in the list, or remove by clicking on the name within the field for example HR Team. 

![Clear user field](/images/clearfield.png)

​		Clear the field if needed clicking on the field and click on **Clear** ![Clear field](/images/clearx.png).

2. **User(s) defined in a user field** - if you choose this option, it means the user name is already defined in a form. Click on **User picker** button ![User picker button](/images/userpicker.png) and click into the field under **Select a user field** to see a user picker field or other field within a form, where the user (email address), for example 'Line Manager' is within the form Employee Request

![Select a user field](/images/userpickerfield.png)

Click on the field to add to the list. You can add as many fields as desired by clicking on the **User 		picker** button ![User picker button](/images/userpicker.png) or remove a field by clicking on the field or by clicking on the **Bin/Trash** button. 

![User defined field](/images/nameduserpicker.png)



3. **Form owner(s)** - if you choose this option, then click click into the field under **Form owner of selected form** and choose from the forms within that process, where the form owner(s) email addresses will be selected.

![Form owner of selected form](/images/formowners.png)

4. Email address in a field - if you choose this option, then click into the field under **Type the address or select from a field** and either type in an email address or choose from a field within a form within that process. 

![select email users](/images/selectemailusers.png)

In all cases when you have made your selection, click on **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.



### Expression builder

The expression builder is a useful and efficient way to use existing form fields as part of automated emails that you want to send out.

For example if you have a form Annual Leave request that contains a text box field 'Employee Name' you can use this field in an automated email to let a manager know that an employee has submitted an a request. 

1. Before you begin have your body text inserted into the **Body** of the email and position your cursor where you want to add an expression, for example an Employee Name after 'Your employee' as shown below.

   ![Body text](/images/bodytext.png)

2. Click on the **Ellipsis** button ![Ellipsis button](/images/ellipsis.png)beside email **Body** then the Expression builder dialog box opens.

3. Click into the field under **Add field to expression**. Forms and fields that are part of your process appear where you can expand elements to drill down to find the field that you want, for example 'Employee Name'. Click on the field to add field to the expression.



![Expression builder](/images/expressionaddfield.png)

3. Click on the **Add to expression** button ![Add to expression](/images/addtoexpression.png)to add the field as an expression.

   ![Expression added](/images/expressionadded.png)

   

5. Click on **OK** button when you are finished editing to save your changes or click on **Close** to exit the dialog box without saving.

6. The result is the expression is now part of the automated email. 

   ![Text box expression added](/images/expressionin.png)

6. To add more expressions, firstly position your cursor in your body text where you want to add the expression, then click on the **Ellipsis** button and under **Add field to expression** clear any existing fields by clicking on the **Clear** button. This appears when you hover over the Add field box.

   ![Clear field](/images/clearexpression.png)

   Then search for other fields, for example lists or links, and use the Expression reference functions, see step 7.

7. Click on Reference button ![Expression reference](/images/reference.png) button to find out how to use particular functions in your email. For example **ProcessLink()** returns the html link to the current process. Copy this function into the Expression box and click on **OK** to add the function. Then in the **Body** type in the text you want associated with this link for example "click here" into the brackets of the function:

   ![Click here text](/images/clickhere.png)

   In this way you can build sophisticated automated emails that provide a link back to a process instance, for example that a manager can view, update or approve. For more information on References and Expressions see [Expressions](expressions.md) for more information.



### Attachments ###

To attach a file to an automated email, click on the **Attach a file** button ![Attach a file button](/images/attachfile.png) and the Attach file to email dialog box opens.

**Attachments**: Files can be attached to the email.  First the file must be stored in a File field in one of the forms.  Open the Send Email rule and find the File icon in the Body field menu.  Click in the File field to find the field where the file is stored. Click on Insert attachment.  There is an option to attach a link to the file rather than the file itself.







