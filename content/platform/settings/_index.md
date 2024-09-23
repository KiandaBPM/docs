---
title: "Settings"
typora-root-url: ..\..\..\..\static
---

The **Settings** page offers a wide range of customization and administrative tools through its settings page, which is accessible only to users with administrative rights. Below is a detailed guide to each section of the settings page, providing an overview of available options and how developers can leverage them to customize the platform.

## Accessing the Settings Page

To access the settings page, log in to the Kianda platform with an administrator account. Click the **administration cog** in the top right corner of the page. This will open the admin menu, where you can navigate to the settings page. All the options described below are available exclusively to users with admin permissions.

---

## Create Your Own Style

The **Create Your Own Style** section allows administrators to personalize the appearance of the Kianda platform by configuring various style and layout options:

- **Custom CSS**: Upload your own stylesheets to override default styles or enhance the look and feel of the platform to match your branding.
- **Built-in Themes**: Choose from a selection of pre-built themes that modify the overall appearance of the platform.
- **Logo and Image Icon**: Upload custom logos and icons to be displayed across the platform interface, enhancing your brand's visibility.
- **Layout Options**:
  - **Boxed Layout**: Restrict content within a fixed-width container, leaving space around the edges.
  - **RTL Layout**: Enable right-to-left (RTL) layout for languages and regions where this orientation is preferred.
  - **Disable Web Zoom**: Prevent users from zooming in on the web interface for more control over the viewing experience.

---

## Login Page Settings

The **Login Page Settings** section focuses on branding the login page, offering the following options to align the page with your organization's identity:

- **Login Page Branding**:
  - Upload a custom logo to be displayed on the login screen.
  - Set a background color and font color to match your brand's visual guidelines.
  - Define two tagline messages that appear on the login page to provide additional context or instructions for users.

These options make it easy to create a cohesive brand experience from the moment users access your Kianda environment.

---

## Mobile Settings

The **Mobile Settings** section allows developers to configure options for mobile app design through the use of a manifest file, which includes:

- **App Name**: Define the full name of the app as it will appear on mobile devices.
- **App Short Name**: Provide a shorter version of the app name for use where space is limited, such as in icons or home screens.
- **Splash Screen Color**: Set the background color for the splash screen displayed when the app is launched.
- **Theme Color**: Choose a theme color that will apply across the mobile interface.
- **Mobile Icons**: Upload various app icons to be used across mobile platforms, ensuring compatibility with different screen sizes and resolutions.

This section is essential for delivering a seamless user experience on mobile devices, including progressive web apps (PWAs).

---

## Regional Settings

The **Regional Settings** section is where administrators can configure locale and time zone preferences for the platform. This includes:

- **Locale**: Set the default language and regional settings for the platform interface.
- **Time Zone**: Define the time zone that will be used across the platform, affecting process schedules, timestamps, and date/time displays.

Configuring regional settings is crucial for ensuring that the platform is tailored to the needs of your global or local user base.

---

## Storage Files

The **Storage Files** section is a central location where administrators can manage all uploaded files within the Kianda platform. It is divided into two categories:

- **Public Files**: These files are accessible without specific security restrictions and can be used for public-facing content.
- **Private Files**: Files with additional security layers, restricting access to authorized users only.

This section allows admins to manage files uploaded via process apps, user uploads, and system-level files such as logos or static content.

---

## Single Sign-On (SSO)

In the **Single Sign-On (SSO)** section, administrators can configure integration with external authentication systems, enhancing security and user management. Supported options include:

- **SAML 2.0 Integration**: Set up SAML-based authentication for secure and efficient user login.
- **Azure AD SSO Integration**: Connect to Microsoft Azure Active Directory for seamless single sign-on with your organization’s users.

SSO simplifies login management, offering a single, secure access point for users across multiple platforms.

---

## General Settings

The **General Settings** section provides configuration options for platform-wide settings, including:

- **Company Details**: Set the company's name, email address, and other general information that will appear in system notifications or platform communications.
- **Email Connector Provider**: Define the default email provider for sending automated emails from within Kianda processes. This includes setting up SMTP servers or integrating third-party email services.

These settings are vital for ensuring the platform operates with your organization's communication and branding standards.

---

## Best Practices

To make the most of the settings page in Kianda:

- **Regularly Update Branding**: Ensure your platform’s visuals, logos, and layout options are updated to reflect your current branding.
- **Optimize Mobile Settings**: Customize mobile settings for a seamless experience on mobile devices, especially if you expect significant mobile usage.
- **Use SSO for Security**: Implement Single Sign-On with Azure AD or SAML 2.0 for enhanced security and user management, especially in larger organizations.

This settings page offers powerful customization and administrative options that can greatly enhance both the functionality and appearance of your Kianda platform.

---

This documentation offers a detailed overview of the Kianda settings page, designed to guide developers and administrators in configuring and customizing their platform.
