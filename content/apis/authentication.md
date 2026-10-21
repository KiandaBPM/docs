---
title: "Authentication"
weight: 1
typora-root-url: ..\..\..\static
---

Kianda REST APIs use **OAuth 2.0 bearer tokens**. Requests run with the authenticated user's permissions, so the user must have access to the data and operations your integration requires.

Use your workspace's HTTPS URL for token and API requests.

## Request an access token

The request below uses Kianda's existing password-grant interface.

> **OAuth security guidance:** [RFC 9700, section 2.4](https://www.rfc-editor.org/rfc/rfc9700.html#section-2.4) states that the resource owner password credentials grant must not be used. The example below documents Kianda's existing interface.

```http
POST https://{workspace-domain}/token
Content-Type: application/x-www-form-urlencoded
```

Send these parameters in the form-encoded request body:

| Parameter | Value |
| --- | --- |
| `grant_type` | `password` |
| `username` | The Kianda user's username. |
| `password` | The Kianda user's password. |
| `scope` | The target workspace's subscription ID. |

For this request, `scope` identifies the Kianda subscription. Find it under **Administration > Subscription > Subscription Details > Subscription Id**.

The following example reads credentials and the subscription ID from environment variables. Set `KIANDA_USERNAME`, `KIANDA_PASSWORD`, and `KIANDA_SUBSCRIPTION_ID`, and replace the workspace URL before running it.

```bash
curl --request POST \
  'https://your-workspace.kianda.com/token' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=password' \
  --data-urlencode "username=$KIANDA_USERNAME" \
  --data-urlencode "password=$KIANDA_PASSWORD" \
  --data-urlencode "scope=$KIANDA_SUBSCRIPTION_ID"
```

### Token response

A successful response includes the following fields. Additional session metadata is omitted here.

```json
{
  "access_token": "<access-token>",
  "token_type": "bearer",
  "expires_in": 299
}
```

Use `access_token` as an opaque credential. `expires_in` gives its lifetime in seconds; `299` is an example, not a fixed lifetime. Track the returned expiry and obtain a valid token before sending further requests after it expires.

## Authenticate API requests

Include the token in the `Authorization` request header:

```http
Authorization: Bearer <access-token>
```

Keep credentials and tokens out of source code, URLs, and logs. A token authenticates the user; it does not grant additional permissions.

Continue with the [Instances API](/apis/instances/) to work with process documents, or the [Summaries API](/apis/summaries/) to search data and retrieve aggregates.

## Calls from widgets and rules

Calls through Kianda's client store use the signed-in user's session. You do not need to request or embed a separate token for those calls. Authentication is still required and is handled by the platform.

## Inspect a token for testing

To test an API using your current Kianda session:

1. Sign in to the target workspace.
2. Open your browser's developer tools and select **Network**.
3. Reload the page or perform an action that makes an authenticated Kianda API request.
4. Select the request and find **Authorization** under **Request Headers**.
5. Use the value after `Bearer` as your access token.

This copies an existing session token. It remains subject to expiry and is intended for temporary testing.

