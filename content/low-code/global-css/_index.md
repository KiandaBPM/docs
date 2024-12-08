---
title: "Global CSS file"
weight: 4
typora-root-url: ..\..\..\static
---

Kianda’s visual style is built on standard web technologies—primarily CSS and the **Bootstrap** framework. By default, Kianda applies a site-wide style that gives your workspace a consistent look and feel. However, as a workspace **Administrator**, you can override these defaults by using the **Global CSS file**. This lets you adjust aesthetics, tweak layouts, and even enhance functionality for your forms, processes, and dashboards.

## Why Use the Global CSS File?

**Global CSS** lets you implement style changes that appear throughout your entire Kianda workspace. Rather than adjusting individual elements in each process or dashboard, you can create a unified look or add distinctive branding across all pages at once.

For example, you can:

- **Apply consistent branding:** Match your company’s color palette, typography, and visual identity.
- **Improve usability:** Make key buttons larger, adjust spacing for better readability, or change how messages are highlighted.
- **Add functional styling:** Hide certain elements until triggered by JavaScript, or highlight form fields based on conditions.

## Before You Begin

**Plan your design.** Decide in advance what changes you want to make, and consider creating mock-ups to visualize the final look. Having a clear design direction helps ensure your CSS changes are cohesive and meaningful.

If you’re new to CSS or Bootstrap, you might review basic CSS and Bootstrap documentation first. Since Kianda is built on Bootstrap, you can use familiar classes, breakpoints, and responsive utilities to craft a user-friendly layout.

## Where to Find and Edit the Global CSS File

1. As an **Administrator**, go to **Administration** > **Developer**.
2. Click on **Edit Global CSS**.
3. The global CSS file editor opens allowing a developer to edit the global CSS file.

   ![CSS Editor](/images/css-editor.jpg)

5. When finished, click **OK**, then **Save Changes** in the Look and Feel section. Refresh Kianda to ensure the changes load.

## Effective Use of CSS Classes

CSS classes let you define a style rule once and apply it to multiple elements. For instance, to create a “tile” style that you can reuse across many forms:

```css
.tile {
  border-radius: 12px;
  border: 1px solid #e7eaee;
  background: white;
  margin-bottom: 15px;
  padding: 18px 15px 2px 15px;
}
```

Next, apply this class to any element in Kianda by typing “tile” into the **Custom CSS class name** field in the process designer.

**Tip:** Use clear, descriptive class names. They help you maintain consistency and make future adjustments easier.

## Beyond Look and Feel: Using CSS for Functionality

While CSS is primarily for styling, you can also pair it with JavaScript to achieve functional effects. For example, you could:

- **Hide elements:** Use `display:none;` in CSS to initially hide a button, then show it dynamically through JavaScript.
- **Highlight states:** Combine CSS classes with conditions in Kianda’s logic to emphasize fields that need attention.

This blend of styling and scripting can improve your workflows without cluttering your markup.

## Working with Bootstrap

Since Kianda uses Bootstrap, you can leverage Bootstrap’s utility classes to quickly style elements without custom CSS. For example, use `.text-center` to center text or `.d-none` to hide elements. If you do need custom rules, try extending or overriding Bootstrap styles sparingly. Keep these tips in mind:

- **Avoid deep overrides:** Stick to high-level classes or create new classes rather than overriding too many built-in Bootstrap rules. This reduces complexity.
- **Responsive design:** Use Bootstrap’s responsive classes and media queries to ensure your workspace looks good on all devices.

## Using Font Awesome Icons

Icons can improve usability and help users instantly recognize actions:

```css
a:before {
  font-family: "Font Awesome 5 Free";
  content: "\f007";
  display: inline-block;
  padding-right: 10px;
  vertical-align: middle;
  font-weight: 900;
}
```

This rule displays a user icon before any link (`<a>` element). Adjust icons by changing the Unicode value or adding conditions. For more details, see Font Awesome’s [pseudo-elements guide](https://fontawesome.com/web/setup/upgrade/pseudo-elements) and [cheatsheet](https://fontawesome.com/cheatsheet).

## Local vs. Global CSS

While the Global CSS file affects your entire Kianda workspace, sometimes you want to make changes only in one process or dashboard. In that case, add `<style>` tags directly into a **Rich Text** field in that process or dashboard. This local approach ensures your changes are contained and won’t impact other parts of the system.

For example, to color all buttons magenta in a specific process:

1. Add a **Rich Text** field to your process.
2. Open **Code View** and wrap your CSS in `<style></style>` tags.
3. Add your button styling inside the tags.
4. Save and preview the process—the buttons will now have a magenta background, without altering buttons in other processes.

## Naming Conventions and Maintenance

Over time, your Global CSS file can grow. Keep it maintainable by:

- **Using meaningful names:** Class names like `.primary-btn` or `.invoice-tile` convey purpose.
- **Grouping related styles:** Organize your file so that similar rules (e.g., buttons, panels, modals) are together.
- **Commenting your code:** Document why certain overrides exist. This helps future administrators or developers understand your intentions.

## Testing and Iteration

After saving changes, always refresh Kianda and test your workspace on different devices or browsers. Check that your modifications didn’t unintentionally affect other elements. If you notice unwanted changes, refine your selectors or consider using local CSS for more targeted modifications.

---

**In summary**, the Global CSS file is a powerful tool that helps you shape your Kianda environment. By planning ahead, using descriptive classes, taking advantage of Bootstrap utilities, and keeping your code organized, you’ll create a more engaging, visually appealing, and functional workspace for your users.
