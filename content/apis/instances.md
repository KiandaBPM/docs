---
title: "Instances"
linkTitle: "Instances"
weight: 1
description: "The Instances API lets you create, retrieve, update and delete process instances."
typora-root-url: ..\..\..\static
---

The Instances API lets you create, retrieve, update and delete Kianda process instances. An **instance** is an individual process record, such as one incident report or one inspection. A **process design** defines the forms, fields and rules used by those records.

For integrations that set field values or change form properties, use the mapping-based `create` and `update` endpoints. Use the document endpoints when your integration works with a complete Kianda instance JSON document.

## Endpoint reference

All paths are relative to your workspace URL.

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/instances/create` | [Create an instance](#create-an-instance) from a process design and field mappings. |
| `POST` | `/api/instances/createBulk` | [Create multiple instances](#create-multiple-instances) using an array of create requests. |
| `PATCH` | `/api/instances/{name}/update` | [Update an instance](#update-an-instance) using field and form mappings. |
| `PATCH` | `/api/instances/updateBulk` | [Update multiple instances](#update-multiple-instances) using an array of update requests. |
| `GET` | `/api/instances/{name}` | [Get an instance document](#get-an-instance-document). |
| `GET` | `/api/instances/{name}/version` | [Get instance version information](#get-instance-version-information). |
| `PUT` | `/api/instances/{name}` | [Update using an instance document](#update-using-an-instance-document). |
| `POST` | `/api/instances` | [Submit an instance document](#submit-an-instance-document). |
| `DELETE` | `/api/instances/{name}` | [Delete an instance](#delete-an-instance). |
| `POST` | `/api/instances/bulkdelete` | [Delete multiple instances](#delete-multiple-instances). |
| `GET` | `/api/instances/{name}/fields` | [Get selected fields](#get-selected-fields) from an instance. |

## Authentication and request format

Send requests to the workspace that contains the target process and instances. Obtain a bearer access token as described in [Authentication](/apis/authentication/), and use an account with permission to perform the requested operation.

Include these headers on requests with a JSON body:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
Accept: application/json
Content-Type: application/json
```

`GET` requests and the single-instance `DELETE` request have no request body; the `Content-Type` header is unnecessary for those examples.

### Run the examples

The cURL examples use Bash-style environment variables and cURL 7.76.0 or later. They include [`--fail-with-body`](https://curl.se/docs/manpage.html#--fail-with-body) so HTTP responses with a status of 400 or above produce a non-zero exit status while retaining the response body.

Set these variables before running an example:

```bash
export KIANDA_BASE_URL="https://your-workspace.kianda.com"
export KIANDA_ACCESS_TOKEN="YOUR_ACCESS_TOKEN"
```

Set `KIANDA_BASE_URL` to your workspace's base URL, without a trailing slash. Use your workspace's custom domain if applicable.

Process, instance, form and field identifiers in the examples are illustrative. Replace them with identifiers from your workspace. Example field values must also be valid for the target field and its configuration.

Examples are independent. For operations on existing instances, replace the sample instance name with an actual instance name from your workspace.

## Identifiers and property names

| Identifier | Meaning | Example |
| --- | --- | --- |
| `ProcessName` | The identifier of a **process design**, despite the property name. | `incident-report` |
| `{name}` | The name of an existing **process instance**, used in the URL. | `incident-report-42` |
| `InstanceName` | The instance name supplied in an update request body. | `incident-report-42` |
| `FieldName` | A field's internal `name`, unique within the process. | `description` |
| `FormName` | A form's internal unique name. | `incident-details` |
| `CurrentFormName` | The internal name of the form to set as the current workflow form. | `review` |

Use internal field and form names when constructing mappings. Display labels and titles may differ from these names. An instance document's `id` and `name` are separate properties; the routes containing `{name}` use the instance name.

Mapping request properties use the spelling and casing shown in this reference, such as `FieldsMappings`, `FieldName` and `InstanceName`. Instance documents contain properties such as `name`, `forms`, `value` and `text`.

## Field mappings

Both create and update requests use `InstanceRequestFieldMapping` objects in `FieldsMappings`.

| Property | JSON type | Description |
| --- | --- | --- |
| `FieldName` | String | Internal name of the field to target. Corresponds to `field.name`. |
| `Value` | Any JSON value | Value to assign to `field.value`. Supply the JSON structure expected by the target field. |
| `Text` | String | Text to assign to `field.text`, for example the display text associated with a selected value. |
| `Visible` | Boolean or `null` | `true` shows the field; `false` hides it. An omitted or `null` setting does not request a visibility change. |
| `Enabled` | Boolean or `null` | `true` enables the field; `false` disables it. An omitted or `null` setting does not request an enabled-state change. |

For example, this mapping assigns a location value and display text, and explicitly shows and enables the field:

```json
{
  "FieldName": "location",
  "Value": "dublin-depot",
  "Text": "Dublin depot",
  "Visible": true,
  "Enabled": true
}
```

`Value` is represented by `JToken` in the request model. It can therefore carry a JSON string, number, boolean, object, array or `null`. The target field determines which of those representations is valid. For example, send a numeric JSON value when the field expects a number.

`Value` and `Text` target separate properties. When your change requires both a stored value and corresponding display text, supply both. For updates, include mappings for the fields you intend to target. The nullable behaviour of `Visible` and `Enabled` should not be used as a general rule for clearing or preserving `Value` and `Text`.

## Background execution

Create and update requests support `TriggerField` and `ExecuteInSeries`:

| Property | JSON type | Description |
| --- | --- | --- |
| `TriggerField` | String | Internal name of the field to schedule as a background task. |
| `ExecuteInSeries` | String | Accepts `"yes"` or `"no"`. Set `"yes"` to request that tasks created by the trigger field execute one after another. Set `"no"` when serial execution is not being requested. |

For example, a request can include:

```json
{
  "TriggerField": "submit",
  "ExecuteInSeries": "yes"
}
```

This is a request fragment: include these properties in a create or update body. `ExecuteInSeries` uses strings; the visibility and enabled properties use JSON booleans.

Background processing is scheduled separately from the API request. Receiving the HTTP response does not establish that the scheduled work has finished. `ExecuteInSeries` describes execution of the triggered tasks; it does not define the processing order of items in a bulk API request.

## Create an instance

```http
POST /api/instances/create
```

Creates an instance from the process design identified by `ProcessName`, applying the supplied field mappings. Use this endpoint when you have a process design identifier and values to populate.

### Request body

One `CreateInstanceRequest` object:

| Property | JSON type | Description |
| --- | --- | --- |
| `ProcessName` | String | Identifier of the process design from which to create the instance. |
| `FieldsMappings` | Array of field mappings | Field values, text and presentation properties to apply. See [Field mappings](#field-mappings). |
| `TriggerField` | String | Field to schedule as a background task. See [Background execution](#background-execution). |
| `ExecuteInSeries` | String | `"yes"` or `"no"`, controlling whether the triggered tasks are requested to execute in series. |
| `Status` | String or `null` | Process instance status to set. Use `null` to ignore this setting. |

Use the status values supported by the target process. This reference does not define a fixed status enumeration.

### Example

```bash
curl --fail-with-body --request POST \
  "${KIANDA_BASE_URL}/api/instances/create" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "ProcessName": "incident-report",
    "FieldsMappings": [
      {
        "FieldName": "description",
        "Value": "Loose handrail reported at the loading bay.",
        "Text": "Loose handrail reported at the loading bay."
      },
      {
        "FieldName": "location",
        "Value": "dublin-depot",
        "Text": "Dublin depot",
        "Visible": true,
        "Enabled": true
      }
    ],
    "Status": null
  }'
```

Add `TriggerField` and `ExecuteInSeries` when background execution is part of the operation.

### Success response

Returns **`200 OK`** with a JSON object:

```json
{
  "success": true,
  "instanceID": "example-created-instance-id"
}
```

| Property | Description |
| --- | --- |
| `success` | `true` in the successful response. |
| `instanceID` | Identifier returned by the create result's `id` property (`result.id`). The example identifier is illustrative. |

## Create multiple instances

```http
POST /api/instances/createBulk
```

Creates multiple instances using the same request model as [Create an instance](#create-an-instance). Each array item identifies its process design and supplies its own mappings and execution settings.

### Request body

A top-level JSON array of `CreateInstanceRequest` objects:

```json
[
  {
    "ProcessName": "incident-report",
    "FieldsMappings": [
      {
        "FieldName": "description",
        "Value": "Loose handrail at the loading bay.",
        "Text": "Loose handrail at the loading bay."
      }
    ]
  },
  {
    "ProcessName": "incident-report",
    "FieldsMappings": [
      {
        "FieldName": "description",
        "Value": "Damaged floor marking in the warehouse.",
        "Text": "Damaged floor marking in the warehouse."
      }
    ]
  }
]
```

Save the array as `create-requests.json`, then submit it:

```bash
curl --fail-with-body --request POST \
  "${KIANDA_BASE_URL}/api/instances/createBulk" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data-binary @create-requests.json
```

The array itself is the request body. Each item has the same properties described for a single create request.

### Success response

Returns **`200 OK`** with a JSON object:

```json
{
  "success": true,
  "instanceIDs": [
    "example-created-instance-id-1",
    "example-created-instance-id-2"
  ]
}
```

| Property | Description |
| --- | --- |
| `success` | `true` in the successful response. |
| `instanceIDs` | Array of instance identifiers collected during creation. The example identifiers are illustrative. |

The property name is `instanceIDs` for bulk creation. The response does not include a per-item result object alongside each identifier.

## Update an instance

```http
PATCH /api/instances/{name}/update
```

Applies field and form mappings to an existing instance. It can also set the process status, select the current workflow form and schedule a trigger field.

### Path parameter

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | String | Name of the instance to update. |

### Request body

One `UpdateInstanceRequest` object:

| Property | JSON type | Description |
| --- | --- | --- |
| `InstanceName` | String | Name of the instance to update. Use the same instance name as the URL. |
| `FieldsMappings` | Array of field mappings | Field changes to apply. Uses the same mapping model as create. |
| `TriggerField` | String | Field to schedule as a background task. |
| `ExecuteInSeries` | String | `"yes"` or `"no"` for execution of triggered tasks. |
| `Status` | String | Process instance status to set. |
| `FormMappings` | Array of form mappings | Form visibility, enabled-state or status changes. See the model below. |
| `CurrentFormName` | String | Optional internal form name to set as the current workflow form. |

The request supplies the instance name in both the URL and `InstanceName`. Keep these values identical.

### Form mappings

Each `InstanceRequestFormMapping` targets one form:

| Property | JSON type | Description |
| --- | --- | --- |
| `FormName` | String | Internal unique name of the form to target. |
| `Visible` | Boolean or `null` | Optional visibility setting: `true` shows the form; `false` hides it. |
| `Enabled` | Boolean or `null` | Optional enabled setting: `true` enables the form; `false` disables it. |
| `Status` | String | Optional status to assign to this form. |

Omit or use `null` for form visibility and enabled settings when you are not requesting a change to those flags. Process status, individual form status and the current workflow form are separate settings.

### Example: update a field and select the review form

```bash
curl --fail-with-body --request PATCH \
  "${KIANDA_BASE_URL}/api/instances/incident-report-42/update" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "InstanceName": "incident-report-42",
    "FieldsMappings": [
      {
        "FieldName": "description",
        "Value": "Loading bay handrail isolated pending repair.",
        "Text": "Loading bay handrail isolated pending repair."
      }
    ],
    "FormMappings": [
      {
        "FormName": "review",
        "Visible": true,
        "Enabled": true
      }
    ],
    "CurrentFormName": "review"
  }'
```

To set statuses, add the process `Status` at the top level and the form `Status` inside the relevant `FormMappings` item. Use accepted status values for the process and form. Selecting `CurrentFormName` sets the current workflow form; use `TriggerField` when you also need to schedule background execution.

### Success response

Returns **`200 OK`** with a JSON object:

```json
{
  "success": true,
  "instanceID": "incident-report-42"
}
```

| Property | Description |
| --- | --- |
| `success` | `true` in the successful response. |
| `instanceID` | The `InstanceName` supplied in the request body. |

## Update multiple instances

```http
PATCH /api/instances/updateBulk
```

Applies multiple update requests. Each item has the same structure as [Update an instance](#update-an-instance), including its own `InstanceName`.

### Request body

A top-level JSON array of `UpdateInstanceRequest` objects:

```json
[
  {
    "InstanceName": "incident-report-42",
    "FieldsMappings": [
      {
        "FieldName": "description",
        "Value": "Handrail repair has been arranged.",
        "Text": "Handrail repair has been arranged."
      }
    ]
  },
  {
    "InstanceName": "incident-report-43",
    "FieldsMappings": [
      {
        "FieldName": "description",
        "Value": "Replacement floor markings have been ordered.",
        "Text": "Replacement floor markings have been ordered."
      }
    ]
  }
]
```

Save the array as `update-requests.json`, then submit it:

```bash
curl --fail-with-body --request PATCH \
  "${KIANDA_BASE_URL}/api/instances/updateBulk" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data-binary @update-requests.json
```

The bulk route has no `{name}` segment. Each item identifies its target using `InstanceName`.

### Success response

Returns **`200 OK`** with a JSON object:

```json
{
  "success": true
}
```

This success response contains an overall success flag. It does not include instance identifiers, updated documents or individual update results.

## Get an instance document

```http
GET /api/instances/{name}
```

Retrieves the full JSON document for an instance, including its identity, version, forms and fields.

### Example

```bash
curl --fail-with-body --request GET \
  "${KIANDA_BASE_URL}/api/instances/incident-report-42" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json"
```

### Response

The response is the instance JSON document. The following abbreviated example illustrates its structure; identifier and version strings are placeholders, and additional document properties are omitted.

```json
{
  "id": "example-instance-id",
  "name": "incident-report-42",
  "version": "example-version",
  "forms": [
    {
      "title": "Incident details",
      "name": "incident-details",
      "fields": [
        {
          "name": "description",
          "value": "Loose handrail reported at the loading bay.",
          "text": "Loose handrail reported at the loading bay."
        }
      ]
    }
  ]
}
```

Use the actual full response when your integration needs an instance document for a later document update. The example above is a structural excerpt, not a complete write payload.

## Get instance version information

```http
GET /api/instances/{name}/version
```

Retrieves modification, version and status information without retrieving the full instance document.

### Example

```bash
curl --fail-with-body --request GET \
  "${KIANDA_BASE_URL}/api/instances/incident-report-42/version" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json"
```

### Response

A JSON object containing these properties:

| Property | Description |
| --- | --- |
| `modified` | The instance's modification value, returned from `Modified`. |
| `version` | The instance's version, returned from `Version`. |
| `id` | The instance document's `id`. |
| `status` | The process instance's status, returned from `Status`. |

Treat these as server-supplied metadata.

## Update using an instance document

```http
PUT /api/instances/{name}
```

Updates an instance using a Kianda instance JSON document as the request body. Use this endpoint when your integration already handles the document structure, including forms and fields. For targeted changes expressed as mappings, use [Update an instance](#update-an-instance).

### Request body

The instance JSON document itself. Preserve its structure and properties that your integration is not intentionally changing.

A typical document-editing sequence is:

1. Retrieve the instance using `GET /api/instances/{name}`.
2. Edit the relevant properties in the returned document.
3. Send the resulting document to `PUT /api/instances/{name}` for the same instance.

For example, retrieve the current document into `instance.json`:

```bash
curl --fail-with-body --request GET \
  "${KIANDA_BASE_URL}/api/instances/incident-report-42" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --output instance.json
```

Check that the request succeeded and the file contains the instance document. After making the intended edits, submit it:

```bash
curl --fail-with-body --request PUT \
  "${KIANDA_BASE_URL}/api/instances/incident-report-42" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data-binary @instance.json
```

### Response

The controller returns a JSON document.

## Submit an instance document

```http
POST /api/instances
```

Accepts an instance JSON document directly. Use this route when your integration constructs a valid Kianda instance document. To create an instance from a process design identifier and field mappings, use [Create an instance](#create-an-instance).

### Request body

The instance JSON document itself, prepared with the structure required by the process. The abbreviated `GET` example is not a complete document-creation schema.

### Example

Save the prepared document as `new-instance.json`, then submit it:

```bash
curl --fail-with-body --request POST \
  "${KIANDA_BASE_URL}/api/instances" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data-binary @new-instance.json
```

### Response

The controller returns a JSON document.

## Delete an instance

```http
DELETE /api/instances/{name}
```

Deletes the instance identified by its name. No request body is required.

### Example

```bash
curl --fail-with-body --request DELETE \
  "${KIANDA_BASE_URL}/api/instances/incident-report-42" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json"
```

### Response

The controller returns a JSON document.

## Delete multiple instances

```http
POST /api/instances/bulkdelete
```

Deletes multiple instances in one request.

### Request body

A top-level JSON array of strings identifying the instances to delete:

```json
[
  "incident-report-42",
  "incident-report-43"
]
```

### Example

```bash
curl --fail-with-body --request POST \
  "${KIANDA_BASE_URL}/api/instances/bulkdelete" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '["incident-report-42", "incident-report-43"]'
```

The body is the string array itself. The action's parameter name, `instances`, is not a JSON wrapper property.

### Success response

Returns **`200 OK`**. With `Accept: application/json`, the response body is a JSON string:

```json
"Completed"
```

A JSON-aware client parses this response into the string `Completed`. There is no `success` property in this response.

## Get selected fields

```http
GET /api/instances/{name}/fields
```

Retrieves selected fields from the instance document. No request body is required.

### Parameters

| Parameter | Location | Type | Description |
| --- | --- | --- | --- |
| `name` | Path | String | Name of the instance to read. |
| `names` | Query string | String | Field selector using internal field names. The action parameter defaults to an empty string when omitted. Specify a field name explicitly for a selective read. |

### Example: retrieve one field

```bash
curl --fail-with-body --get \
  "${KIANDA_BASE_URL}/api/instances/incident-report-42/fields" \
  --header "Authorization: Bearer ${KIANDA_ACCESS_TOKEN}" \
  --header "Accept: application/json" \
  --data-urlencode "names=description"
```

This example selects the field whose internal name is `description`. `--data-urlencode` encodes the query parameter value.

### Response

Returns the selected fields from the instance document.

## Response handling

Read the HTTP status and response body for each operation. The successful responses for `create`, `createBulk`, the mapping-based single update, `updateBulk` and `bulkdelete` all use `200 OK`.

Parse the body according to the endpoint. The create and update responses documented above are JSON objects; `bulkdelete` returns the JSON string `"Completed"` when JSON is requested. Other response formats are described in their endpoint sections. Error status codes and error response schemas are not specified in this reference.

The source of the `instanceID` response value is endpoint-specific: create returns `result.id`, while the mapping-based single update returns `request.InstanceName`. Use the instance name for routes containing `{name}`; the create return statement alone does not establish whether its returned identifier is interchangeable with that name.

This reference does not specify bulk atomicity, rollback, item ordering, retry deduplication or per-item error reporting. After an uncertain result, establish what was applied before repeating a write or an entire batch.
