---
title: "Publish your process with pages"
linkTitle: "4. Publish your process"
description: "Build interfaces for end-users to access process applications"
weight: 3
typora-root-url: ..\..\..\static
---

1. [Forms and controls](../form-controls-layout/)
2. [Connect to data sources](../connect-your-data/)
3. [Process logic with rules](../plan-your-process/)
4. **Publish a process with pages**

## 1. Introduction

In Kianda, pages serve as the essential interface for delivering process applications to end-users. They act as dashboards, landing pages, and reporting tools, allowing users to interact with and manage business processes efficiently. By leveraging pages, you can create intuitive and dynamic interfaces that facilitate user interaction with your process apps.

Pages are constructed using a variety of specialized widgets, which are components designed to display data, charts, lists, links, and more. These widgets follow a responsive layout system based on Bootstrap, ensuring that your pages look great and function well across different devices and screen sizes. This flexibility allows you to build customized dashboards that can handle millions of records and present data in a meaningful way.

Creating and configuring pages in Kianda is straightforward and user-friendly. With just a few clicks, you can add and arrange widgets, set up data connections, and define the layout to match your requirements. This guide will walk you through the process of creating a new page, adding and configuring widgets, and publishing your pages to make your process apps accessible to users. By the end of this guide, you will have the knowledge needed to design and deploy powerful and interactive pages in Kianda.

## 2. Creating a New Page

Creating a new page in Kianda is a simple process that enables you to design customized interfaces for your users. These pages can be tailored to serve as dashboards, landing pages, or detailed reporting tools, providing users with a seamless way to interact with your process applications. Follow the steps below to create a new page in Kianda.

<video class="inline-video-player" loading="lazy" muted loop playsinline autoplay poster>
    <source src="/videos/Creating-a-page.mp4">
    Your browser does not support the video tag.
    </source>
</video>

## 3. Understanding Page Widgets

Page widgets are the fundamental building blocks in Kianda that allow you to create dynamic and interactive pages. Each widget serves a specific purpose, enabling you to display data, provide navigation, or offer interactive elements to users. Understanding the different types of widgets and how to configure them is essential for designing effective pages in Kianda. Below, we explore the various widgets available and their functionalities.

#### Rich Text Widget

The Rich Text widget allows you to insert and format text or HTML content on your page. This widget is useful for adding descriptive content, instructions, or any custom HTML elements you need to include.

- **Text Content**: Enter and format your text or HTML content.

#### Tile Widget

The Tile widget displays data expressions based on a query. It is typically used to show aggregated data such as counts, sums, or averages. Tiles are great for providing at-a-glance information and key metrics.

- **Data Expression**: Choose between count, sum, or average.
- **Data Source**: Select the process or data source for the query.
- **Icon**: Select an icon to represent the data visually.
- **Conditional Formatting**: Change the color or text of the tile based on specific conditions.

#### List Widget

The List widget displays tabular data based on a query. It supports data from processes or data sources and allows for various processes to be combined into a single view. The List widget is highly flexible and can include sorting, filtering, and search functionalities.

- **Data Source**: Select the data source or process.
- **Columns**: Define which fields to display as columns.
- **Sorting and Filtering**: Enable or disable sorting and filtering options.
- **Pagination**: Set the number of items per page.

#### Chart Widget

The Chart widget allows you to visualize data using various chart types, including pie, bar, line, radar, doughnut, and polar area charts. This widget is ideal for presenting data trends, distributions, and comparisons.

- **Chart Type**: Select the type of chart.
- **Data Source**: Choose the data source or process.
- **Labels and Data**: Define the labels and data points for the chart.
- **Appearance**: Customize the colors, legend, and other visual settings.

#### Filter Widget

The Filter widget enables dynamic filtering of data displayed in other widgets on the page. It can connect to various data sources, including process data, and supports cascading filters by linking multiple filters together.

- **Filter Type**: Choose between dropdown list, radio list, date range, free text, or current user.
- **Filter Options**: Set manual entries or bind to a data source.
- **Default Value**: Define a default filter value.
- **Widget Connections**: Link the filter to other widgets on the page.

#### Link Widget

The Link widget allows you to create responsive link buttons for navigation. This widget can be used to guide users to different processes, pages, or external URLs.

- **Links**: Define the text, icon, and destination for each link.
- **Visibility**: Set visibility rules based on user roles or conditions.
- **Styling**: Customize the appearance of the links.

#### Walk-through Widget

The Walk-through widget enables administrators to record and display walkthrough steps, guiding users on how to use processes and features within Kianda. This is especially useful for onboarding new users or introducing new features.

- **Steps**: Define the steps of the walkthrough.
- **Target Elements**: Specify the UI elements to highlight in each step.
- **Instructions**: Provide detailed instructions and tips for each step.



General Page Widget Settings

![Widget General settings](images/widget-general-settings.png)

### 4. Customizing Layout with Bootstrap Grid System

In addition to the individual widgets, Kianda supports custom layouts using a grid system (Bootstrap). This allows you to create responsive layouts that adapt to different screen sizes and devices.

- **Creating Layout Containers**: Use layout containers to structure your page.
- **Defining Columns**: Specify column spans to control the width of each widget.
- **Responsive Design**: Ensure your layout adjusts appropriately for various devices.

By understanding and utilizing these page widgets, you can design comprehensive and user-friendly pages in Kianda that cater to your specific needs. Each widget provides unique functionalities that, when combined, create powerful and interactive interfaces for end-users.

#### Example Layouts

Here are some examples of common layouts you can create using the Bootstrap grid system in Kianda:

1. **Dashboard Layout**:
   - **Header**: A full-width row with a title or navigation bar.
   - **Main Content**: Two rows, each containing three columns (4 units each) to display tiles or charts.
   - **Footer**: A full-width row with footer information or links.
2. **Landing Page Layout**:
   - **Hero Section**: A full-width row with a large image or text banner.
   - **Features Section**: A row with three columns (4 units each) highlighting key features.
   - **Call-to-Action Section**: A full-width row with a call-to-action button or form.
3. **Reporting Page Layout**:
   - **Filters Row**: A row with multiple columns (e.g., 3 units each) for filter widgets.
   - **Charts Row**: A row with two columns (6 units each) for different charts.
   - **Data Table**: A full-width row for displaying a list widget with tabular data.



## 5. Best Practices for Designing Pages

Designing effective and user-friendly pages in Kianda requires a thoughtful approach to layout, content, and functionality. By following best practices, you can ensure that your pages are intuitive, visually appealing, and optimized for performance. Here are some key recommendations to keep in mind when designing pages in Kianda.

#### User-Centric Design

Designing with the end-user in mind is essential for creating pages that are easy to navigate and use. Consider the needs and expectations of your users at every step of the design process.

- **Understand Your Audience**: Know who your users are and what they need from the page. Tailor the content and layout to meet their specific requirements.
- **Simplify Navigation**: Make it easy for users to find what they are looking for. Use clear headings, logical grouping of content, and intuitive navigation elements.
- **Consistent Design**: Maintain a consistent design throughout your pages to provide a cohesive user experience. Use consistent colors, fonts, and styles.

#### Performance Optimization

Optimizing page performance ensures that your pages load quickly and run smoothly, providing a better experience for your users.

- **Efficient Data Queries**: Optimize data queries to minimize load times. Use pagination in list widgets to handle large datasets efficiently.
- **Minimalist Design**: Avoid cluttering your page with too many elements. Focus on essential content and functionality to reduce load times and improve user focus.
- **Responsive Design**: Ensure your pages are responsive and adapt well to different screen sizes. Use the Bootstrap grid system to create flexible layouts.

#### Effective Use of Widgets

Widgets are the building blocks of your pages. Using them effectively can enhance the functionality and interactivity of your pages.

- **Choose the Right Widgets**: Select widgets that best meet your needs. For example, use chart widgets for visual data representation and list widgets for tabular data.
- **Widget Configuration**: Configure widgets properly to display the correct data and provide the desired functionality. Customize widget settings to align with your design goals.
- **Dynamic Filters**: Implement filter widgets to allow users to refine data displayed on the page. Cascading filters can provide a more interactive and personalized experience.

#### Consistent Styling

Applying consistent styling across your pages helps create a professional and cohesive look, enhancing the overall user experience.

- **Use Themes and Templates**: Utilize Kianda’s theming and templating features to apply consistent styles across all your pages. This saves time and ensures uniformity.
- **Custom CSS**: If needed, apply custom CSS to fine-tune the appearance of your widgets and layouts. This allows for greater control over the visual design.
- **Visual Hierarchy**: Establish a clear visual hierarchy using font sizes, colors, and spacing to guide users' attention to the most important elements on the page.

#### Accessibility Considerations

Making your pages accessible ensures that all users, including those with disabilities, can use your applications effectively.

- **Text Alternatives**: Provide text alternatives for non-text content, such as images and icons, to ensure screen readers can interpret them.
- **Keyboard Navigation**: Ensure that all interactive elements can be accessed and used with a keyboard.
- **Colour Contrast**: Use sufficient color contrast to make text and other elements easily readable for users with visual impairments.

#### Regular Maintenance and Updates

Keeping your pages up-to-date and well-maintained is crucial for long-term success. Regularly review and update your pages to ensure they remain relevant and functional.

- **Monitor Performance**: Regularly check page performance and make necessary optimizations. Use analytics to understand user behavior and identify areas for improvement.
- **User Feedback**: Collect and analyze user feedback to identify pain points and areas for enhancement. Continuous improvement based on user feedback ensures your pages meet user needs.
- **Documentation**: Maintain clear and detailed documentation of your pages, including design decisions, configurations, and updates. This helps in managing changes and onboarding new team members.

By following these best practices, you can design pages in Kianda that are user-friendly, performant, and visually appealing. These practices help ensure that your pages provide a positive experience for your users and effectively support your business processes.

