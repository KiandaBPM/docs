---
title: "Text Analysis"
typora-root-url: ..\..\..\..\..\static
weight: 1
---

## Introduction

The **Text analysis** rule allows you to analyse small or large amounts of text. There are **two functions** for analysis with the **Text analysis** rule:

- **Sentiment analysis**
- **Extract key phrases**

With each function, the AI is programmed to distil information and meaning from a text block. For example, sentiment analysis can be used to give a **Positive** or **Negative** result on feedback forms or item reviews. The **Extract key phrases** on the other hand is programmed to extract most relevant words or expressions from a block of text.

## When to use

Use this rule when you want to analyse large blocks of text into a **Positive** or **Negative** result with a percentage score, or when you want to extract key phrases. 

You can add this rule:

- [x] to a field
- [x] to a form 
- [x] to a process (the rule will run on load)

## Before you get started

To be able to use the Text analysis rule, there a couple of prerequisites needed in your process. To use both functions, your process needs a **Text box field** which will represent the text that is **targeted** during **Text analysis**. To learn more on how to add a text box to your process, go to [Text box control](/docs/platform/controls/input/textbox/).

To use the **Sentiment analysis** function, you need the following:

- **Text box field** - container which will store the computed sentiment result. **Positive** or **Negative**.
- **Number field** - container used to store the **percentage score** of the result. To learn on how to add a number field to your process, go to [Number control](/docs/platform/controls/input/number/).

To use the **Extract key phrases** function, you will need the following:

- **Text box field** - container which will store all of the most relevant words or expressions.

## How to get started

1. Click on an existing process by going to **Administration** > **Designer** and decide which form, or field you will apply the rule to, by clicking on that item so that it is in **edit mode** so you can see the Edit/pen button, **Pen** button ![Pen button](/images/penicon.png).

2. Click on **Add a rule** > **Kianda AI** > **Text analysis**.

3. In the **Edit rule - Text analysis** dialog box, give the rule a title in the **Title** field.

   ![Text analysis edit rule dialog box](/images/text-analysis-edit-rule.jpg)

4. If you want to add conditions for the rule, click on the **Edit conditions** button ![Edit conditions button](/images/editconditions.png) see [Conditions](/docs/platform/rules/general/add-conditions/) for more details.

5. Under the **Action** section fill out the following:

   - **Input field containing text for analysis** - select a field from within your process that you wish to target when analysing text.
   - **Text analysis function** - from the radio list, select the desired text analysis function.
     - **Sentimental analysis** - analysis text while giving it a positive or negative result along with the percentage score of the result.
     - **Extract key phrases** - extract most relevant words or expressions from a block of text.
   - **Text input language** - select the language in which the targeted text is in. The choices are as follows:
     - **English**
     - **French**
     - **German**
     - **Portuguese**

   When the **Sentiment analysis** function is selected, fill out the following fields:

   ![Sentiment function options](/images/text-analysis-sentiment.jpg)

   - **Field to store computed sentiment (Negative or Positive)** - select a field from your process to store the result of the analysis.
   - **Fields to store the sentiment score** - select a field from your process to store the percentage score of the analysis.

   When the Extract key phrases function is selected, fill out the following:

   ![Extract key phrases function options](/images/text-analysis-phrases.jpg)

   - **Field to store computed key phrases** - select a field from your process to store all of the most relevant words or expressions of the analysis.

6. When you are finished editing the dialog box, click on **OK** or click on **Close** at any time to exit the dialog box.

### What’s next ![Idea icon](/images/18.png)

To find out more about other rules go to [Rules](/docs/platform/rules/).
