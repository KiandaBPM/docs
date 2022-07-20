---
title: "Process security"
weight: 5
typora-root-url: ..\..\..\..\..\static
---

The **Process security** rule *dynamically* changes the security settings of an instance of a process. You can set the security settings for a process by going to the Process Settings in the Designer.  If you tick Enable process security, you can then select users and their access level.  This setting is static and applies to every instance of the process.  The Process security rule is *dynamic* and changes the security settings for a particular instance.

![Process security rule dialog box 1](/images/ProcessSecurity.png)

## When to use 

You can add this rule:
- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## How to use

To change process security:
1. Select Controls > Input > User picker to add a field to store the user.
2. Click on a button e.g. the Submit button.
3. Select Add a rule > Workflow > Process security
4. Under Action, select Defined in a user field. Then select the User picker field created earlier.
5. Set Existing user(s) to Append to add the chosen user to the list of users of the process instance.
6. Set Override security settings to No.  See below for more on this flag.
7. Click OK

## Notes

This rule can be used multiple times in sequence.  You can use the first rule to override the existing users and the following rule(s) to append users.

You can override the process security settings by setting Override security settings to Yes. Tick Enable security to see the options for setting the security level.  These options are identical to those in the Process Settings.  See below.

> **Warning** 
>
> Setting Override security settings to Yes with Enable security *not* ticked will disable all security settings.

![Process security rule dialog box 2](/images/ProcessSecurity2.png)