---
title: "Summaries API"
linkTitle: "Summaries"
weight: 3
description: "Search Kianda instance data, build condition groups, retrieve paged lists, and calculate tile and chart aggregates."
typora-root-url: ..\..\static
---

The Summaries API searches the indexed properties of Kianda process instances. It is the central data-access API used by list, tile, chart, and filter widgets to retrieve selected fields and calculate aggregates across large collections of instance documents.

A request describes the process scope, conditions, fields, and result type. Kianda applies the current user's instance permissions and executes the query against an optimized summary index. A successful HTTP response contains a JSON array; the objects in that array depend on the requested action.

| Action | Use it to | Successful result with data |
| --- | --- | --- |
| `list` | Retrieve selected properties from matching instances. | An array of summary records. |
| `tile` | Calculate a count, sum, or average. | An array containing one aggregate result, with the populated value in `properties.value`. |
| `chart` | Group records by a field and calculate aggregate series. | An array containing a grouped result with `properties.labels`, `properties.values1`, and, when configured, `properties.values2`. |

Designers normally compose conditions through Kianda's conditions editor. The JSON examples in this page explain the resulting API contract and can also be used by external integrations. Page widgets use the same query concepts through Kianda's client store.

## 1. How instance data becomes searchable

Kianda stores selected representations of instance fields in shallow, highly indexed tables. This allows a query to search, sort, and aggregate field data without loading every complete instance document.

The index uses these representations:

| Indexed representation | Source | Purpose |
| --- | --- | --- |
| `shortText` | A short text representation from `field.text`. | Text search, displayed values, and alphabetical sorting. |
| `dateValue` | The value of a date field, together with applicable internal date properties. | Date comparisons and chronological sorting. |
| `numberValue` | The value of a number field. | Numeric comparisons, sorting, and aggregation. |

A summary is a query result over this indexed data. It is not an editable process model, and changing a returned object does not update the underlying instance. Use the instance's `name` with the appropriate [Instances API](/apis/instances/) operation when you need to work with the document itself.

### What is indexed

Fields outside tables are indexed automatically. This includes fields inside panels and dialogs.

| Data | Search coverage |
| --- | --- |
| Ordinary instance fields outside tables | Automatically indexed using the applicable text, date, or number representation. |
| Fields inside panels and dialogs | Indexed in the same way as other fields outside tables. |
| Cells and fields inside tables | Table contents cannot be addressed by a Summaries search. |
| Custom field widgets | Their `field.text` representation is automatically searchable. |
| Arbitrary properties inside a custom field's structured value | These properties are not independently searchable. |
| Client-calculated list columns such as `___CUSTOM_FIELD13` | Calculated by the client and deliberately omitted from server results. |

When a custom field needs to participate in searches, maintain a useful `field.text` representation. Storing a nested object in `field.value` does not automatically make each nested property queryable.

### Indexing is asynchronous

After an instance document is updated, a background job updates its searchable field data. This typically completes in less than a second, but it is asynchronous: an immediately repeated query can briefly return the previous indexed values.

Treat a successful instance save and a refreshed summary result as separate events. If a workflow must confirm the saved document immediately, use the instance operation's result or retrieve the instance; refresh summary-based views after the index catches up.

### Permissions apply to records

The endpoint is available to authenticated users, including ordinary users. Instance permissions apply to all three actions, including the records contributing to counts, sums, averages, and charts.

Field visibility inside a document is a presentation setting. It does not provide field-level API security. Use instance permissions to control access to the record.

## 2. Endpoint and first request

```http
POST https://{workspace-domain}/api/summaries
Authorization: Bearer {access-token}
Content-Type: application/json
Accept: application/json
```

Use the workspace's domain and the authenticated user's bearer token. See [Authentication](/apis/authentication/) for token acquisition.

The controller accepts a query in the request body:

```csharp
[HttpPost]
public async Task<IEnumerable<Models.Summary>> Post([FromBody] Models.Query query)
```

The following request retrieves the first page of action instances, ordered by their custom ID:

```json
{
  "action": "list",
  "info": {
    "process": "action",
    "queryType": "all",
    "page": 0,
    "sortFieldType": "fields/field-textbox",
    "isOData": true
  },
  "orderBy": "processCustomID",
  "orderAscending": false,
  "fields": [
    "__NAME",
    "__STATUS",
    "processCustomID",
    "ACT_TXTSIN_Desc",
    "ACT_DATE_DueDate"
  ],
  "conditions": [],
  "rowLimit": 30
}
```

Save the JSON as `query.json` and send it, for example, with curl:

```bash
curl --request POST \
  'https://your-workspace.kianda.com/api/summaries' \
  --header "Authorization: Bearer $KIANDA_ACCESS_TOKEN" \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --dump-header response-headers.txt \
  --data-binary @query.json
```

Set `KIANDA_ACCESS_TOKEN` to your token before running the command. Replace the process and field names with names present in your workspace. The headers are saved separately because list pagination uses the `total-items` response header.

For list queries, supply a nonempty `fields` array. The examples also set the action, page size, relationship filter, and sorting explicitly so their intent is clear.

## 3. Request reference

### Top-level query properties

The server's `Query` model exposes the following properties:

| Property | JSON type | Purpose |
| --- | --- | --- |
| `action` | String | Result type: `list`, `tile`, or `chart`. |
| `info` | Object | Process scope and action-specific settings. The server model uses `JObject`. |
| `fields` | Array of strings | Field and system-property names requested from indexed storage. Required for list queries. See [field projection](#5-list-results-and-field-projection) for automatically added properties. |
| `conditions` | Array of condition groups | Structured query conditions. Use `[]` when no explicit conditions are needed. |
| `orderBy` | String | Field or system-property name used to sort a list. |
| `orderAscending` | Boolean | `true` for ascending order; `false` for descending order. |
| `rowLimit` | Integer | Maximum row count the request asks the server to load. Use a positive value. A value of `0` is converted to `1`. |
| `filter` | String | Text to search for using the separate text-filter facility. |
| `filterBy` | String | Field or system-property name searched by `filter`. |
| `filterMode` | String | Text-filter mode. See [text filters](#9-text-filters). |
| `id` | String | Present in the shared server model; not used by the request patterns on this page. List-widget result identity uses `info.id`. |
| `paging` | String | Present in the shared server model; not used by the page-number workflow on this page. List pagination uses `info.page` and the `total-items` header. |

There is no fixed upper limit for `rowLimit` in the described implementation. Larger row counts and more requested fields increase the amount of work and data transferred. Use bounded pages for interactive lists.

The tile and chart examples retain the row limits used by those request patterns. Do not interpret a tile's `rowLimit: 1` as a documented instruction to aggregate only one instance.

### Common and list-related `info` properties

| Property | Type | Purpose |
| --- | --- | --- |
| `process` | String | One process's unique name. If blank or omitted, the query can search across processes accessible to the user. |
| `queryType` | String | Additional relationship filter: `all`, `assignedTo`, `createdBy`, or `modifiedBy`. |
| `page` | Integer | Zero-based list page. `0` is the first page; `1` is the second. |
| `isListWidget` | Boolean | Enables list-widget result identities that isolate cached summaries by widget. |
| `id` | String | The query identity used with `isListWidget`; also identifies aggregate datasets in the client store. Use distinct IDs for separate tile or chart datasets, even when one widget requests them. |
| `isOData` | Boolean | Enables additional typed or related field properties, such as date `_utc`, numeric `_number`, and user `_email` properties. It does not change the JSON body into an OData response envelope. |
| `sortFieldType` | String | Selects the indexed representation used for sorting: text, date, or number. |
| `additionalSortings` | Array | Additional sorting configuration carried by built-in list widgets. The examples here use a single explicit sort and do not define a descriptor format for additional sorts. |
| `isFilterWidget` | Boolean | Enables filter-widget-specific result identities to avoid client-store identity collisions. |
| `filterWidgetId` | String | Identifies the filter widget when `isFilterWidget` is used. |

Tile-specific properties are described in [Tile queries](#10-tile-queries). Chart-specific properties are described in [Chart queries](#11-chart-queries).

`processSource` and `isPartner` are deprecated and should be omitted from new Summaries requests, even if they appear in older widget code.

### Query type and user relationships

`queryType` adds a relationship filter to the query's matching conditions and instance permissions:

| Value | Meaning |
| --- | --- |
| `all` | Records matching the conditions that the current user can access. |
| `assignedTo` | Matching records assigned to the current user. |
| `createdBy` | Matching records created by the current user. |
| `modifiedBy` | Matching records modified by the current user. |

For example, use `assignedTo` to build a "My actions" list. Use `all` for matching records regardless of those particular relationships, while retaining normal instance permissions.

### Query across specific processes

Set `info.process` to a process name to restrict a query to that process. To select several specific processes, leave `info.process` blank or omit it and add conditions on `__PROCESS_NAME`, joined with `or`.

This condition group selects action or observation instances:

```json
[
  {
    "id": "process-filter",
    "group": "and",
    "conditions": [
      {
        "operator": "eq",
        "arg1": {
          "name": "__PROCESS_NAME",
          "type": "__Field"
        },
        "arg2": {
          "text": "action",
          "type": "text"
        },
        "group": "or"
      },
      {
        "operator": "eq",
        "arg1": {
          "name": "__PROCESS_NAME",
          "type": "__Field"
        },
        "arg2": {
          "text": "observation",
          "type": "text"
        },
        "group": "or"
      }
    ]
  }
]
```

This is a `conditions` fragment, not a complete request. Request the field names needed for the selected processes and handle properties that are absent from a particular record.

## 4. List query example

The following request selects actions whose status is `Follow-up`. It includes the list-widget identity settings used by Kianda's built-in list widget.

```json
{
  "action": "list",
  "info": {
    "process": "action",
    "id": "b84cb3d7-7638-481e-98ac-a35b52ddc2da",
    "isListWidget": true,
    "queryType": "all",
    "page": 0,
    "sortFieldType": "fields/field-textbox",
    "isOData": true
  },
  "orderAscending": false,
  "orderBy": "processCustomID",
  "fields": [
    "__NAME",
    "__STATUS",
    "__CREATED_BY",
    "processCustomID",
    "ACT_TXTSIN_Desc",
    "ACT_DATE_DueDate",
    "ACT_USER_ResponsibleUsers"
  ],
  "conditions": [
    {
      "id": "follow-up-filter",
      "group": "and",
      "conditions": [
        {
          "operator": "eq",
          "arg1": {
            "text": "Status",
            "name": "__STATUS",
            "type": "__Field"
          },
          "arg2": {
            "text": "Follow-up",
            "type": "text"
          },
          "group": "and"
        }
      ]
    }
  ],
  "rowLimit": 30
}
```

The following response excerpt shows one representative row, with example display text and user details. A real page can contain up to the requested number of records.

```json
[
  {
    "id": "ef0d79ba-49dd-4cd3-8e65-747fefb2fbd0-b84cb3d7-7638-481e-98ac-a35b52ddc2da",
    "name": "ef0d79ba-49dd-4cd3-8e65-747fefb2fbd0",
    "assignTo": [],
    "owners": [],
    "status": "Follow-up",
    "processName": "action",
    "modified": "2026-09-30T13:15:51.547+00:00",
    "created": "2026-09-30T13:14:02.103+00:00",
    "createdBy": "049e635c-6ac8-4d47-a16d-edab750a8103",
    "properties": {
      "__NAME": "ef0d79ba-49dd-4cd3-8e65-747fefb2fbd0",
      "__STATUS": "Follow-up",
      "__CREATED_BY": "049e635c-6ac8-4d47-a16d-edab750a8103",
      "__PROCESS_NAME": "action",
      "__CREATED": "2026-09-30T13:14:02.103",
      "__MODIFIED": "2026-09-30T13:15:51.547",
      "processCustomID": "ACT_2026_00143",
      "ACT_TXTSIN_Desc": "Clear standing water near the access route",
      "ACT_DATE_DueDate": "30/09/2026",
      "ACT_DATE_DueDate_utc": "2026-09-29T23:00:00",
      "ACT_USER_ResponsibleUsers": "Example User",
      "ACT_USER_ResponsibleUsers_email": "example.user@example.com"
    }
  }
]
```

When no list records match, the response body is:

```json
[]
```

### Use `name` for instance operations

With `info.isListWidget: true`, a list result's identity is constructed using the instance name and widget ID:

```text
Summary.id = Summary.name + "-" + info.id
```

This allows multiple list widgets on the same page to cache their results independently in IndexedDB. Two widgets can display the same instance with different projected fields without sharing the same summary-record identity.

Use **`Summary.name`** when an action needs to retrieve, open, update, or otherwise address the underlying instance. Do not split the composite `id`: instance names can themselves contain hyphens, and they are not always GUIDs.

## 5. List results and field projection

### Summary model properties

The server's `Summary` model has the following properties. Their presence depends on the action and available data; tile and chart results use only a subset of this model.

| Property | JSON type | Meaning |
| --- | --- | --- |
| `id` | String | Summary result identity. It may include a widget-specific suffix. |
| `name` | String | Underlying instance identifier used for instance operations. |
| `title` | String or null | Title metadata, when supplied. |
| `assignTo` | Array of strings or null | Assignment information. |
| `owners` | Array of strings or null | Ownership information. |
| `status` | String | Instance status. |
| `version` | String or null | Instance version metadata. |
| `processName` | String or null | Process name. |
| `modified` | Date/time string or null | Instance modification time. |
| `created` | Date/time string or null | Instance creation time. |
| `createdBy` | String or null | Creator identifier. |
| `modifiedBy` | String or null | Modifier identifier. |
| `properties` | Object | Projected field values, system properties, or action-specific aggregate data. |

Optional members can be omitted from the serialized response. The list example does not include every property declared by the model. Consumers should read the properties relevant to their action rather than requiring every model member to exist.

### Requested fields and automatically added properties

The `fields` array identifies data to retrieve from summary storage. The result may also contain system properties and companion values.

These system properties are automatically included in every list result's `properties` dictionary for offline sorting and filtering:

- `__NAME`
- `__PROCESS_NAME`
- `__CREATED`
- `__MODIFIED`

Other selected system properties can appear both as top-level summary metadata and in `properties`. For example, an explicitly requested `__STATUS` can accompany the top-level `status`.

With `info.isOData: true`, additional properties can include:

| Example property | Purpose |
| --- | --- |
| `ACT_DATE_DueDate` | Display text for the selected date field. |
| `ACT_DATE_DueDate_utc` | Its UTC date representation, useful for sorting and data processing. |
| `<number-field>_number` | Numeric companion data. |
| `ACT_USER_ResponsibleUsers` | Display text for the selected user field. |
| `ACT_USER_ResponsibleUsers_email` | Related email information. |

Do not assume that a companion key is present for every empty field. A blank date field can appear as `""` without an accompanying `_utc` property, while a blank user field can also have an empty `_email` property.

Date display strings and typed companion strings serve different purposes. For example, `30/09/2026` is display text, while the sample `_utc` value is `2026-09-29T23:00:00`. The sample's `_utc` string has no explicit timezone suffix; preserve its UTC meaning deliberately when converting it in a client, rather than relying on ambiguous automatic date parsing.

### Field names are exact storage names

Use field names as stored by the process designer. Names containing characters such as `?` are preserved, including:

```text
ACT_LSTSIN_Priority?inlineButtons
OBS_LSTSIN_TopicType?radioCards
```

Do not remove the suffix or treat it as a URL query string. Use bracket access for such property names:

```javascript
const priority = summary.properties["ACT_LSTSIN_Priority?inlineButtons"];
```

A `___CUSTOM_FIELD*` entry refers to a client-calculated list column. It can appear in widget configuration but is deliberately omitted from the API response. The widget calculates that column after loading the server data.

### System-property names

These are the internal system-field identifiers available to the query model:

| Identifier | Represents |
| --- | --- |
| `__NAME` | Instance name used to address the instance. |
| `__UNIQUE_ID` | Internal unique-ID property. Use `name` for the instance operations described on this page. |
| `__PROCESS_NAME` | Process name. |
| `__PROCESS_TITLE` | Process title. |
| `__STATUS` | Instance status. |
| `__VERSION` | Instance version. |
| `__PROCESS_VERSION` | Process version. |
| `__CREATED` | Creation date/time. |
| `__CREATED_BY` | Creator. |
| `__MODIFIED` | Modification date/time. |
| `__MODIFIED_BY` | Modifier. |
| `__ASSIGN_TO` | Assignment information. |
| `__SECURITY_USERS` | Instance security-user information. |

Use `type: "__Field"` when a condition argument refers to one of these system fields. Selectors generated by the conditions editor supply the appropriate metadata.

## 6. Condition groups and query operators

The `conditions` property contains groups of conditions. Each group represents parentheses in the generated query expression.

There is **one level of groups**: a group contains conditions, and a condition cannot contain another group.

| Structure | Property | Meaning |
| --- | --- | --- |
| Condition group | `conditions` | Array of conditions inside this group. |
| Condition group | `group` | `and` or `or` connector between groups. |
| Condition group | `id` | Editor identity included when groups are serialized. |
| Condition | `operator` | Exact operator identifier. |
| Condition | `arg1` | Left-hand field or system-property reference. |
| Condition | `arg2` | Comparison input or prepared date boundaries, when required. |
| Condition | `group` | `and` or `or` connector between conditions within the group. |
| Condition | `id` | Editor identity included when conditions are serialized. |

The condition and condition-group UI models default their `group` property to `and`. Preserve the serialized connectors emitted by the editor.

For example, a process group joined internally with `or`, followed by a status group joined internally with `or`, can express:

```text
(process is action OR process is observation)
AND
(status is Follow-up OR status is Open)
```

Use the editor to construct mixed conditions and grouping. Do not add a nested group object where an individual condition is expected.

### Argument references

Argument types distinguish form fields, system fields, and literal text:

| `type` | Meaning | Typical argument |
| --- | --- | --- |
| `field` | A form-field reference. | `{"name":"ACT_DATE_DueDate","type":"field","fieldType":"fields/field-date"}` |
| `__Field` | A system-property reference. | `{"name":"__STATUS","type":"__Field"}` |
| `text` | Literal text. | `{"text":"Follow-up","type":"text"}` |

For a field reference, `name` selects the indexed field. Its optional `text` is the selector's display label, not the field's current contents. `fieldType` supplies type metadata for operations that need it.

Date ranges use `arg2.date1` and `arg2.date2`. The conditions editor supplies the appropriate argument representation for the selected control; retain that representation for numeric, boolean, and other typed comparisons rather than substituting an invented argument schema.

### Comparison, text, blank, and membership operators

Operator identifiers are listed with their exact spelling.

| Operator | UI label | Behaviour |
| --- | --- | --- |
| `eq` | Equals | Equality comparison. |
| `neq` | Not equals | Inequality comparison. |
| `contains` | Contains | Text contains the supplied value. |
| `startsWith` | Starts with | Text begins with the supplied value. |
| `gt` | Greater than | Greater-than comparison. |
| `gte` | Greater or equal | Greater-than-or-equal comparison. |
| `lt` | Less than | Less-than comparison. |
| `lte` | Less or equal | Less-than-or-equal comparison. |
| `isblank` | Is blank | SQL null or blank check. |
| `notblank` | Not blank | Complementary nonblank check. |
| `match` | Matches pattern | SQL `LIKE` pattern matching. |
| `nomatch` | Does not match pattern | SQL `NOT LIKE` pattern matching. |
| `IsUserOrMember` | Is Current User Or Member | Compares a user-picker field with the current user or the user's groups. Uses the authenticated user context; no `arg2` is required. |

String comparisons use case-insensitive SQL comparison. This describes comparison of field data; it does not establish case-insensitive spelling for property names, operators, or other API option values.

### Date operators

| Operator | UI label |
| --- | --- |
| `isToday` | Is Today |
| `isBeforeToday` | Is Before Today |
| `isAfterToday` | Is After Today |
| `isThisWeek` | Is This Week |
| `isPrevWeek` | Is Previous Week |
| `isNextWeek` | Is Next Week |
| `isThisMonth` | Is This Month |
| `isPrevMonth` | Is Previous Month |
| `isNextMonth` | Is Next Month |
| `isThisYear` | Is This Year |
| `isPrevYear` | Is Previous Year |
| `isNextYear` | Is Next Year |
| `isBetweenDates` | Is Between Days |

Date conditions require the client-side preparation described next. Relative operator names alone do not replace that preparation.

## 7. Prepare date conditions before sending

Kianda prepares date conditions on the client so date selections can use client location awareness together with the workspace's regional settings.

The helper used by the built-in list widget is:

```javascript
this.get("ruleEngine").parseDateConditions(conditions);
```

It is called before the same `conditions` object is included in the request. Use this side-effect-based calling pattern; the built-in list integration does not use a returned array or await a Promise from this helper.

Relative selections such as "Is Before Today" or "Is This Year" are resolved to explicit UTC boundaries in `arg2.date1` and `arg2.date2`. The posted query can retain its original relative operator name alongside those prepared boundaries.

For example, this condition was prepared for a query on 20 October 2026:

```json
{
  "operator": "isBeforeToday",
  "arg1": {
    "text": "Due date",
    "name": "ACT_DATE_DueDate",
    "type": "field",
    "fieldType": "fields/field-date"
  },
  "arg2": {
    "name": "",
    "date1": "1926-10-20T21:42:28.679Z",
    "date2": "2026-10-19T22:59:59.000Z"
  },
  "group": "and"
}
```

These are captured example boundaries, not reusable constants for every overdue query. Recompute relative dates before issuing a new request.

A custom integration can copy the serialized settings before resolving dates:

```javascript
const savedConditions = this.get("widget.settings.conditions") || [];
const conditions = JSON.parse(JSON.stringify(savedConditions));

this.get("ruleEngine").parseDateConditions(conditions);
```

This fragment assumes the component already has access to the rule engine. The copy is appropriate because `serialize=true` stores plain objects in settings; resolving dates in the request copy avoids rewriting the persistent configuration.

An external REST client does not have access to the Ember helper. It must prepare explicit UTC date boundaries itself for the intended regional/calendar period. Use `isBetweenDates` for an explicitly selected range, as demonstrated by the tile example. Avoid hard-coding one UTC offset for all dates, since the relevant offset can vary over the calendar.

## 8. Pagination and sorting

### Pagination uses a response header

List requests use:

- `info.page`: the zero-based page index.
- `rowLimit`: the requested page size.
- The **`total-items` response header**: the total number of matching items.

The JSON body remains an array of summaries. There is no `meta` or `totalItems` object added to the raw REST body.

For the second page of the first-request example, keep its query settings and change:

```javascript
query.info.page = 1;
```

Given a parsed `totalItems` header and a query with an explicit page size:

```javascript
const pageSize = query.rowLimit === 0 ? 1 : query.rowLimit;
const currentPage = query.info.page;

const pageCount = totalItems === null
  ? null
  : Math.ceil(totalItems / pageSize);

const hasNextPage = totalItems === null
  ? null
  : (currentPage + 1) * pageSize < totalItems;
```

In this client example, `null` means the total header was not available; it is not a zero-result count.

For example, a total of 75 items with `rowLimit: 30` gives three pages:

| `info.page` | User-facing page | Expected items, if the matching data stays unchanged |
| --- | --- | --- |
| `0` | 1 | 30 |
| `1` | 2 | 30 |
| `2` | 3 | 15 |

Reset the page to `0` when changing the process scope, conditions, relationship filter, or search text. Refresh the total count with the new results.

### Choose the correct sort representation

`orderBy` identifies the field. `orderAscending` chooses the direction. `info.sortFieldType` determines which indexed representation SQL uses.

| `info.sortFieldType` | Sort representation |
| --- | --- |
| Omitted, empty, or an ordinary text-field type | Alphabetical sorting by `shortText`. |
| `DateTime` | Chronological sorting by the indexed date value. |
| `fields/field-date` | Chronological sorting by the indexed date value. |
| `Number` | Numeric sorting by the indexed number value. |
| `fields/field-number` | Numeric sorting by the indexed number value. |

For example, the following request fragment selects an ascending numeric sort:

```json
{
  "orderBy": "DATAMS_NUM_EmployeeHours",
  "orderAscending": true,
  "info": {
    "sortFieldType": "fields/field-number"
  }
}
```

Merge these settings into the complete query; this fragment does not include the remaining request properties.

Without the number type, displayed values such as `"10"` and `"2"` are sorted as text. Similarly, sorting formatted display dates alphabetically is different from chronological date sorting.

The built-in list widget obtains the sort type from the selected field's `fieldType` or `type`. Carry that metadata through when users change the sort field.

## 9. Text filters

The separate text-filter properties let a client search a named field without constructing a condition group for the text search:

| Property | Example | Meaning |
| --- | --- | --- |
| `filter` | `"fra"` | Search text. |
| `filterBy` | `"country"` | Field to search; system-property names are also supported. |
| `filterMode` | `"contains"` | Search mode. |

The following filter-widget-style request searches country text in observation instances:

```json
{
  "action": "list",
  "info": {
    "process": "observation",
    "page": 0,
    "isFilterWidget": true,
    "filterWidgetId": "41ad30c0-103f-49cb-b251-ffc10479a40d",
    "isOData": true
  },
  "fields": [
    "country",
    "processCountryCode"
  ],
  "conditions": [],
  "filter": "fra",
  "filterBy": "country",
  "filterMode": "contains",
  "rowLimit": 500,
  "orderAscending": false
}
```

Prefix matching is also supported. A captured prefix-search request from the built-in filter widget uses `"filterMode": "startswith"`. Preserve the emitted mode spelling when reusing filter-widget configuration. This setting is separate from the condition operator named `startsWith`.

For explicitly grouped text logic, use the `contains`, `startsWith`, `match`, or `nomatch` condition operators through the conditions editor.

## 10. Tile queries

Tile queries calculate a single aggregate.

| `info.tile` | Aggregate | Field requirement |
| --- | --- | --- |
| `count` | Count matching instances. | `info.field` is not required. |
| `sum` | Sum a number field across matching data. | Select a number field. |
| `avg` | Average a number field across matching data. | Select a number field. |

For sum and average tiles, the built-in configuration UI restricts field selection to `fields/field-number`.

### Count matching instances

This request counts action instances assigned to the current user:

```json
{
  "action": "tile",
  "info": {
    "process": "action",
    "queryType": "assignedTo",
    "tile": "count"
  },
  "conditions": [],
  "rowLimit": 1
}
```

The instance permissions and relationship filter apply to the records being counted. A count tile does not require an expression field.

### Sum a number field over a date range

This request sums employee hours using explicitly prepared UTC date boundaries:

```json
{
  "action": "tile",
  "info": {
    "process": "hours-worked-data",
    "field": "DATAMS_NUM_EmployeeHours",
    "queryType": "all",
    "tile": "sum"
  },
  "fields": [
    "DATAMS_NUM_EmployeeHours"
  ],
  "conditions": [
    {
      "id": "date-filter-group",
      "group": "and",
      "conditions": [
        {
          "operator": "isBetweenDates",
          "arg1": {
            "name": "processDate",
            "type": "field",
            "fieldType": "fields/field-date"
          },
          "arg2": {
            "date1": "2026-09-30T23:00:00.000Z",
            "date2": "2026-10-31T23:59:59.999Z"
          },
          "group": "and"
        }
      ]
    }
  ],
  "rowLimit": 1
}
```

Example response:

```json
[
  {
    "properties": {
      "value": 1249.92
    }
  }
]
```

Read the aggregate from the result object's `properties.value`. Do not expect the instance metadata shown in a list response to accompany an aggregate result.

For an average, use `"tile": "avg"` with the appropriate number field and conditions.

### Handle an absent aggregate

Tile consumers must handle both an empty result array and a returned result with no usable aggregate value. A missing aggregate is different from a numeric zero.

This helper reads the confirmed populated-value shape while retaining an explicit no-value state:

```javascript
function getTileValue(summaries) {
  const result = summaries && summaries[0];
  const properties = result && result.properties;

  if (!properties ||
      !Object.prototype.hasOwnProperty.call(properties, "value")) {
    return null;
  }

  return properties.value;
}
```

A legitimate value of `0` is preserved. The caller can display a no-data state for `null` instead of silently reporting a zero.

## 11. Chart queries

Chart queries group matching records by a field and calculate series values for those groups. Kianda's built-in chart widgets render the resulting datasets using Chart.js.

| `info` property | Purpose |
| --- | --- |
| `labels` | Field whose values form the groups and returned labels. |
| `field1` | Field used by the first aggregate series. |
| `exp1` | First series' aggregation expression. The examples use `Count`. |
| `field2` | Optional field for a second series. |
| `exp2` | Second series' aggregation expression. A second field is also required. |
| `id` | Identifier returned with the chart result in the examples. |
| `chartType` | Chart configuration; the examples use `pie` and `bar`. |
| `sortLabels` | Label-sorting configuration from the chart settings; the examples use `desc`. |
| `labelFormat` | Label-formatting configuration from the chart settings; the examples use `text`. |

In query terms, `labels` supplies the grouping field, while each selected series field supplies values for its aggregate. Chart aggregation supports count, sum, and average. Preserve the expression values emitted by the chart settings; the requests below use the `Count` spelling emitted by the built-in chart settings.

Include the grouping and series field names in `fields`. The same field can appear more than once when it is used for both labels and a series, as in the built-in requests below.

### One series: observations by topic

```json
{
  "action": "chart",
  "info": {
    "process": "observation",
    "queryType": "all",
    "chartType": "pie",
    "labels": "OBS_LSTSIN_TopicType?radioCards",
    "field1": "OBS_LSTSIN_TopicType?radioCards",
    "exp1": "Count",
    "id": "c4e6c595-12a9-4641-908f-8418e15dbe2e",
    "sortLabels": "desc",
    "labelFormat": "text"
  },
  "fields": [
    "OBS_LSTSIN_TopicType?radioCards",
    "OBS_LSTSIN_TopicType?radioCards"
  ],
  "conditions": [],
  "rowLimit": 30
}
```

Example response:

```json
[
  {
    "id": "c4e6c595-12a9-4641-908f-8418e15dbe2e",
    "properties": {
      "labels": [
        "Unsafe observation",
        "Positive observation",
        "Improvement idea"
      ],
      "values1": [
        6,
        2,
        1
      ]
    }
  }
]
```

Values correspond by array position: `labels[0]` identifies the group for `values1[0]`. Keep labels and all series aligned when transforming or rendering the data.

### Two series

A second series requires `field2` as well as its expression. An `exp2` property by itself does not create `values2`.

```json
{
  "action": "chart",
  "info": {
    "process": "observation",
    "queryType": "all",
    "chartType": "bar",
    "labels": "processProject",
    "field1": "processProject",
    "field2": "OBS_YN_SWAUsed",
    "exp1": "Count",
    "exp2": "Count",
    "id": "3d1e106e-59cd-4712-91f1-e78135552783",
    "sortLabels": "desc",
    "labelFormat": "text"
  },
  "fields": [
    "processProject",
    "processProject",
    "OBS_YN_SWAUsed"
  ],
  "conditions": [],
  "rowLimit": 30
}
```

With both series configured, consume `properties.values1` and `properties.values2` alongside the shared `properties.labels`.

When no usable chart properties are found, the chart data contains empty label and value arrays. Consumers should also tolerate an empty result array before attempting to access its first item.

## 12. Build conditions in the Kianda UI

The reusable conditions editor is:

```handlebars
{{rules/rule-conditions
  showProcessProperties=true
  isCompact=true
  btnText=""
  serialize=true
  conditions=this.widget.settings.conditions
  process=this.process}}
```

| Binding or option | Role in this integration |
| --- | --- |
| `showProcessProperties=true` | Makes process/system properties available to the conditions editor. |
| `isCompact=true` | Uses the compact editor presentation. |
| `btnText=""` | Sets the editor button-text option. |
| `serialize=true` | Serializes condition groups to plain objects suitable for the settings hash. |
| `conditions` | Binds the saved condition groups to `widget.settings.conditions`. |
| `process` | Supplies the process metadata used to select fields. |

`serialize=true` does not mean the HTTP request should contain a JSON string inside `conditions`. It means the settings contain plain objects that can be included as an array in the query JSON.

The built-in list refresh flow:

1. Reads the saved conditions and the selected fields.
2. Resolves date boundaries using `ruleEngine.parseDateConditions(conditions)`.
3. Maps the selected fields to their stored names.
4. Builds the query, including `info.process`, `info.page`, and sort metadata.
5. Calls `store.query("summary", query)` for instance summary data.

The following fragment shows that query-construction path. It assumes the component has the same `widget`, `fields`, rule-engine, and store context as the built-in list integration; it is not a complete page-widget component.

```javascript
const savedConditions = this.get("widget.settings.conditions") || [];
const conditions = JSON.parse(JSON.stringify(savedConditions));
const fieldNames = this.get("fields").mapBy("name");
const pageSize = Number(this.get("widget.settings.pageSize"));

if (fieldNames.length === 0) {
  throw new Error("Select at least one field for the list query.");
}

if (!Number.isInteger(pageSize) || pageSize < 1) {
  throw new Error("Configure a positive whole-number page size.");
}

this.get("ruleEngine").parseDateConditions(conditions);

const query = {
  action: "list",
  info: {
    process: this.get("widget.settings.processName"),
    id: this.get("widget.id"),
    isListWidget: true,
    queryType: this.get("widget.settings.queryType") || "all",
    page: 0,
    isOData: true
  },
  fields: fieldNames,
  conditions: conditions,
  rowLimit: pageSize,
  preferOnline: true
};

const pending = this.get("store").query("summary", query);
```

For custom page widgets, use `preferOnline: true` as shown above and await the returned `pending` Promise inside an error-handled asynchronous method. This option provides one Promise for the result. The full built-in list implementation can go further by handling cached results, a possible `pending.onlinePromise`, and subsequent record synchronization. That dual-result path is an advanced client-store behaviour, separate from the raw HTTP response, which contains an array plus the `total-items` header for lists.

Similarly, `data.meta` in widget code is client-side metadata. A direct REST consumer should read the HTTP header rather than expect `data.meta` in the returned JSON.

`preferOnline` is absent from the server `Query` model, so the direct REST examples omit it. The separate datasource branch in the full refresh function calls `dataService.queryFromWidget`; it is not the instance-summary request path described here.

Page filters temporarily merge condition groups marked with `filterId` into the target widget's live `widget.settings.conditions`, then fire its `refresh` action without arguments or awaiting a Promise. Clone that complete array, retaining the temporary groups, before preparing dates or adding request-specific conditions. Kianda removes a filter's temporary groups when it is cleared and removes temporary groups before saving the page. See [Page widget development](/low-code/page-widget/) for the complete component, refresh coordination, and filter wiring.

## 13. Call the API from JavaScript

This standalone HTTP helper sends a query, checks for an HTTP error, validates the array response, and reads the optional list count.

```javascript
async function findSummaries(workspaceUrl, accessToken, query) {
  const endpoint = new URL("/api/summaries", workspaceUrl);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(query)
  });

  const responseText = await response.text();

  if (!response.ok) {
    const error = new Error(
      "Summaries request failed (HTTP " + response.status + ")."
    );
    error.status = response.status;
    error.responseBody = responseText;
    throw error;
  }

  const summaries = JSON.parse(responseText);

  if (!Array.isArray(summaries)) {
    throw new Error("Expected a JSON array from the Summaries API.");
  }

  const totalHeader = response.headers.get("total-items");
  const parsedTotal = totalHeader === null || totalHeader.trim() === ""
    ? NaN
    : Number(totalHeader);

  const totalItems = Number.isSafeInteger(parsedTotal) && parsedTotal >= 0
    ? parsedTotal
    : null;

  return { summaries, totalItems };
}
```

`{ summaries, totalItems }` is the helper's own return value; it is not the server's JSON envelope. Read `summaries` according to the requested action. Tile and chart consumers should not depend on a list count header.

The helper preserves a zero count and leaves a missing or invalid count as `null`. It also retains the actual error response text without assuming a particular `HttpError` JSON property name.

## 14. Errors, performance, and troubleshooting

### Error handling

On failure, the API returns an HTTP error instead of a successful summary array. Check the HTTP response status before interpreting the body as list or aggregate data.

The failure is logged under **`support/logs`**, using the category:

```text
Instance | Summary find(Query)
```

Use the request's action, process scope, selected fields, prepared conditions, and error response to investigate the failure. An empty successful query result is different from a failed request; do not convert an HTTP error into an empty list or a zero-valued tile.

### Keep queries focused

The summary index is designed for fast searching across large collections, including hundreds of thousands of instance documents. Query cost still depends on the scope, requested properties, conditions, and amount of data returned.

- Set `info.process` when the data belongs to one process.
- Select the fields needed by the view.
- Use a bounded `rowLimit` and page through lists.
- Use a tile or chart action when the required output is an aggregate.
- Include the correct sort type for numbers and dates.
- Recompute relative date conditions when refreshing.
- Account for the short asynchronous indexing interval after a save.

### Troubleshooting reference

| Symptom | What to check |
| --- | --- |
| A recently saved value is not visible in a query | Allow for the asynchronous indexing job, then refresh the summary query. |
| A table-cell value cannot be found | Table contents are outside Summaries search coverage. |
| A custom field's nested property cannot be found | Custom fields expose their `field.text` representation; arbitrary nested value properties are not independently indexed. |
| An expected calculated list column is absent | `___CUSTOM_FIELD*` columns are computed by the client. |
| Numbers sort as `10, 2` | Supply `Number` or `fields/field-number` as `info.sortFieldType`. |
| Dates sort by their displayed characters | Supply `DateTime` or `fields/field-date` as the sort type. |
| An instance action cannot find the returned item | Use `summary.name`, not a widget-specific `summary.id`. |
| One list widget appears to reuse another widget's summary data | Check `isListWidget` and the distinct widget `info.id` values. |
| A pager cannot find the total in the JSON body | Read the `total-items` response header. |
| A request with `rowLimit: 0` returns one row | Zero is normalized to one; use an explicit positive page size. |
| A relative date filter keeps using old boundaries | Run `parseDateConditions` before sending the current query. |
| A chart has no second series | Configure both `field2` and `exp2`. |
| A tile displays zero when no aggregate is available | Preserve a missing-value state instead of using a truthiness fallback. |
| Users see different list or aggregate results | Check instance permissions, `queryType`, conditions, and the current indexed data. |
| A hidden form field remains queryable | Field visibility is a document presentation setting; record access is controlled by instance permissions. |
| The request fails | Check the HTTP error response and the summary-query category in `support/logs`. |

### Verify an integration

Start with a known instance and a small field selection. Confirm its `name`, requested properties, and typed sort order. Then test the next page, an empty list, a populated and empty aggregate, and the relevant date filters.

Verify the intended results under the users who will run the integration, because both instance permissions and relationship filters affect the results. When a test updates an instance, allow for indexing before comparing the saved document with a summary query.

## Related documentation

- [Authentication](/apis/authentication/)
- [Instances API](/apis/instances/)
- [Page conditions](/platform/pages/conditions/)
- [List widget](/platform/pages/list/)
- [Tile widget](/platform/pages/tile/)
- [Chart widget](/platform/pages/chart/)
- [Filter widget](/platform/pages/filter/)
- [Page widget development](/low-code/page-widget/)

