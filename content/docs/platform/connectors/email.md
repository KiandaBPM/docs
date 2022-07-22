---
title: "Email connector"
typora-root-url: ..\..\..\..\static
---

An email data connector enables you to send emails as well as receive them on your company's Kianda platform. It is mostly used when applying the **Send email** rule which allows you to set a **From** field. To learn more about send email rule go to [Send email](/docs/platform/rules/communications/send-email/).

## How to get started

1. From the Kianda home page, click on **Administration** > **Data sources**.

2. Click on **+ Add new** button ![Add new data connector button](http://localhost:1313/images/addnew.png) and choose **Email** from the list of data sources provided.

3. You will be automatically brought to the **Email connection details** page where we can start setting up the email connector.

   ![Sharepoint datasources](/images/email-connector-settings.jpg)

4. Choose a **Display name** for your email connector. This is used to distinguish between different email connectors on your platform.

## IMAP settings

Internet Message Access Protocol, or IMAP, is **a standard email retrieval (incoming) protocol**. It stores email messages on a mail server and enables the recipient to view and manipulate them as though they were stored locally on their device(s). In order to activate your email connector we need to fill out the following:

- **IMAP server** - IMAP server is an address for a given mailing service, it usually comes in the form of **imap.yourdomain.com**. For example Google's IMAP is **imap.gmail.com**. To access your IMAP address, contact your email provider or email server.
- **IMAP server port** - Indicates which port your IMAP server listens to. The IMAP server typically listen to a well known port **143** or **993** with **SSL/TSL** functionality. The port information can be found by contacting your email provider.
- **Use SSL** - Secure Socket Layer (SSL) is a standard technology for keeping the internet connection secure and safeguarding. Contact your email provider to find out if **SSL** is required when accessing IMAP server.
- **Username/ email** - The credentials used to access your emailing provider.
- **Password** -  The credentials used to access your emailing provider.
- **Enable mail send from** - With this option you can choose the ability to send email **OUT** to others using the connected emailing service. If you choose **Yes**, you need to fill in **SMTP details**. to find out more got to [SMTP detail](/docs/platform/connectors/email/#smtp-details).

## SMTP details

Simple Mail Transfer Protocol or SMTP, is **a standard email outgoing (sending) protocol**. It is used for sending email messages from one email account to another via the internet. The SMTP server checks whether the two emails are valid and proceeds with sending of the mail. To be able sending of mail using your email provider, the following details need to be filled out:

- **SMTP server** -  SMTP server is an address for a given mailing service, it usually comes in the form of **smtp.yourdomain.com**. For example Google's SMTP is **smtp.gmail.com**. To access your IMAP address, contact your email provider or email server.
- **SMTP server port** - Indicates which port your SMTP server listens to. The SMTP server typically listen to port **25** if unencrypted or **465** with **SSL** encryption. The port information can be found by contacting your email provider.
- **Email address** - Used to send test email to ensure emails are delivered.
- **Use same credentials as above** - By choosing **Yes**, you will be using the same credentials to log into your SMTP server as you are to the IMAP server. If your SMTP server credentials are different, select **No** to be presented with:
  - **SMTP Username** - The credentials used to access your SMTP provider.
  - **Password** - The credentials used to access your SMTP provider.







