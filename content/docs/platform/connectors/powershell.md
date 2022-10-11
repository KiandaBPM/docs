---
title: "PowerShell"
weight: 14
typora-root-url: ..\..\..\..\static
---

One of the data connectors within Kianda that you can connect to is **PowerShell**. With the PowerShell connector you are able to use PowerShell scripts from within Kianda. You can call your scripts with the **Data rules** that are available in Kianda, use **input mapping** to pass **parameters** to your PowerShell script and **receive** the **outcome** of the script using results mapping. To learn more about input and result mapping visit one of the Data rules, for example [Create Item](/docs/platform/rules/data/create-item/).

## When to use

You can use the DocuSign data connector when a process your have created requires you to send individual documents or envelopes to get them signed **electronically**. With the connector you can access different types of **templates** that you have created within your DocuSign account, **download** documents, access already existing envelopes to see their **status** or **summary**. 

## Before you get started

In advance of using the DocuSign data connector, you must have an account with DocuSign. This account is used to authorise a connection between your Kianda subscription and your DocuSign account itself, so that the DocuSign **Application Programming Interface (API)** can be used. There are two types of accounts that you can create in DocuSign. An **ordinary** account and a **developer** account. Take note which account you have created as this information will be used to create a different connection within Kianda.
