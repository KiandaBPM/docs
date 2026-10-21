---
title: "Kianda documentation"
linkTitle: "Documentation"
description: "Build business process applications with Kianda. Find guides for forms, workflow rules, custom widgets, REST APIs and dashboards."
menu:
  main:
    weight: 30
type: "docs"
typora-root-url: ..\static
---

# Kianda documentation

Kianda is a low-code platform for building business process applications with forms, workflow rules, data connections and dashboards.

Use these guides to build applications in the visual designer, develop custom components, or integrate Kianda with other systems through the REST APIs.

## Choose a starting point

<div class="row">
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h3 class="h4 mt-0">Build your first app</h3>
        <p>Create forms, arrange controls, connect data and add workflow rules. Follow the quick-start guide to build a process app and give users access through Pages.</p>
        <p class="mt-auto mb-0"><a href="/quick-start/">Start the quick-start guide</a></p>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h3 class="h4 mt-0">Develop custom components</h3>
        <p>Build field, rule and page widgets using JavaScript, Ember.js and Handlebars. Develop custom connectors to integrate additional data sources.</p>
        <p class="mt-auto mb-0"><a href="/low-code/">Explore development guides</a> &middot; <a href="/low-code/connector/">Build a connector</a></p>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h3 class="h4 mt-0">Integrate through REST APIs</h3>
        <p>Use the Instances API to create, retrieve, update and delete process records. Use the Summaries API to search indexed instance data, retrieve paged results and calculate aggregates.</p>
        <p class="mt-auto mb-0"><a href="/apis/authentication/">Authentication</a> &middot; <a href="/apis/instances/">Instances</a> &middot; <a href="/apis/summaries/">Summaries</a></p>
      </div>
    </div>
  </div>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h3 class="h4 mt-0">Build dashboards and pages</h3>
        <p>Give users access to applications and relevant process data. Combine list, tile, chart and filter widgets to display records, totals and trends.</p>
        <p class="mt-auto mb-0"><a href="/platform/pages/">Explore Pages and widgets</a></p>
      </div>
    </div>
  </div>
</div>

## Understand the core concepts

<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th scope="col">Concept</th><th scope="col">Meaning</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Process</th><td>The application definition, including its forms, fields and business rules.</td></tr>
      <tr><th scope="row">Form</th><td>A screen containing related fields and controls within a process.</td></tr>
      <tr><th scope="row">Instance</th><td>An individual process record, such as one request, incident report or inspection.</td></tr>
      <tr><th scope="row">Page</th><td>An interface containing widgets that provide access to applications and display their data.</td></tr>
    </tbody>
  </table>
</div>

For example, a request process can contain a submission form and a review form. Each request is a separate instance. A page can list those requests and display charts or totals.

## See a process app in use

<p id="process-demo-description">This example opens a contact form, enters a name, company, email address and phone number, then saves the record. Returning to the dashboard shows the new instance in the list.</p>

<details class="mb-4">
  <summary><strong>Watch: create a process record</strong> &mdash; 13 seconds, silent demonstration of the steps above</summary>
  <video class="w-100 mt-3" controls playsinline preload="none" width="1280" height="720" style="height: auto;" aria-label="Create a process record" aria-describedby="process-demo-description">
    <source src="/videos/Process-Apps-Intro.mp4" type="video/mp4">
    Your browser does not support embedded video. <a href="/videos/Process-Apps-Intro.mp4">Open the MP4 demonstration</a> or use the written description above.
  </video>
</details>

## Find supporting guidance

- [Platform reference](/platform/) — Explore controls, rules, data connectors and automation.
- [Administration](/platform/administration/) — Configure and manage a workspace.
- [Security](/security/) — Review permissions, single sign-on and data residency.
- [Troubleshooting](/troubleshooting/) — Investigate rule behaviour, version history and custom widget issues.
- [Video tutorials](/how-to/) — Watch demonstrations of specific platform tasks.
