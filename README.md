# @n8n-dev/n8n-nodes-airbyte-config

![airbyte-config Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-airbyte-config.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-airbyte-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing airbyte-config API integrations by hand.**

Every time you connect n8n to airbyte-config, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to airbyte-config took 5 minutes, not half a day?**

This node gives you **22+ resources** out of the box: **Attempt**, **Internal**, **Workspace**, **Source Definition**, **Source Definition Specification**, and 17 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-airbyte-config
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-airbyte-config`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **airbyte-config API** → paste your API key
3. Drag the **airbyte-config** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Attempt | Post for worker to set sync stats of a running attempt, Post for worker to save the attemptsyncconfig for an attempt, Post for worker to register the workflow id in attempt |
| Internal | Post for worker to set sync stats of a running attempt, Post for worker to save the attemptsyncconfig for an attempt, Post for worker to register the workflow id in attempt, Post get normalization status to determine if we can bypass normalization phase, Post should only called from worker to write result from discover activity back to db, Post create or update the state for a connection |
| Workspace | Post creates a workspace, Post deletes a workspace, Post find workspace by id, Post find workspace by connection id, Post find workspace by slug, Post list all workspaces registered in the current airbyte deployment, Post update workspace feedback state, Post update workspace state, Post update workspace name |
| Source Definition | Post creates a custom sourcedefinition for the given workspace, Post delete a source definition, Post get source, Post get a sourcedefinition that is configured for the given workspace, Post grant a private noncustom sourcedefinition to a given workspace, Post list all the sourcedefinitions the current airbyte deployment is configured to use, Post list all the sourcedefinitions the given workspace is configured to use, Post list the latest sourcedefinitions airbyte supports, Post list all private noncustom sourcedefinitions and for each indicate whether the given workspace has a grant for using the definition used by admins to view and modify a given workspaces grants, Post revoke a grant to a private noncustom sourcedefinition from a given workspace, Post update a sourcedefinition |
| Source Definition Specification | Post get specification for a sourcedefinition |
| Source | Post check connection to the source, Post check connection for a proposed update to a source, Post clone source, Post create a source, Post delete a source, Post discover the schema catalog of the source, Post get source, Post list sources for workspace, Post get most recent actorcatalog for source, Post search sources, Post update a source, Post should only called from worker to write result from discover activity back to db |
| Destination Definition | Post creates a custom destinationdefinition for the given workspace, Post delete a destination definition, Post get destinationdefinition, Post get a destinationdefinition that is configured for the given workspace, Post grant a private noncustom destinationdefinition to a given workspace, Post list all the destinationdefinitions the current airbyte deployment is configured to use, Post list all the destinationdefinitions the given workspace is configured to use, Post list the latest destinationdefinitions airbyte supports, Post list all private noncustom destinationdefinitions and for each indicate whether the given workspace has a grant for using the definition used by admins to view and modify a given workspaces grants, Post revoke a grant to a private noncustom destinationdefinition from a given workspace, Post update destinationdefinition |
| Destination Definition Specification | Post get specification for a destinationdefinition |
| Destination | Post check connection to the destination, Post check connection for a proposed update to a destination, Post clone destination, Post create a destination, Post delete the destination, Post get configured destination, Post list configured destinations for a workspace, Post search destinations, Post update a destination |
| Connection | Post create a connection between a source and a destination, Post delete a connection, Post get a connection, Post returns all connections for a workspace, Post returns all connections for a workspace including deleted connections, Post reset the data for the connection deletes data generated by the connection in the destination resets any cursors back to initial state, Post search connections, Post trigger a manual sync of the connection, Post update a connection |
| Destination Oauth | Post given a destination def id generate an accessrefresh token etc, Post given a destination connector definition id return the url to the consent screen where to redirect the user to, Post sets instancewide variables to be used for the oauth flow when creating this destination when set these variables will be injected into a connectors configuration before any interaction with the connector image itself this enables running oauth flows with consistent variables eg the companys google ads developertoken clientid and clientsecret without the user having to know about these variables |
| Health | Get health check |
| Jobs | Post cancels a job, Post get information about a job, Post gets all information needed to debug this job, Post get last replication job, Post get information about a job excluding attempt info and logs, Post get normalization status to determine if we can bypass normalization phase, Post returns recent jobs for a connection jobs are returned in descending order by createdat |
| Logs | Post get logs |
| Notifications | Post try sending a notifications |
| Openapi | Get returns the openapi specification |
| Operation | Post check if an operation to be created is valid, Post create an operation to be applied as part of a connection pipeline, Post delete an operation, Post returns an operation, Post returns all operations for a connection, Post update an operation |
| Scheduler | Post run check connection for a given destination configuration, Post run check connection for a given source configuration, Post run discover schema for a given source a source configuration |
| Source Oauth | Post given a source def id generate an accessrefresh token etc, Post given a source connector definition id return the url to the consent screen where to redirect the user to, Post sets instancewide variables to be used for the oauth flow when creating this source when set these variables will be injected into a connectors configuration before any interaction with the connector image itself this enables running oauth flows with consistent variables eg the companys google ads developertoken clientid and clientsecret without the user having to know about these variables |
| Web Backend | Post returns a summary of source and destination definitions that could be updated, Post create a connection, Post get a connection, Post returns all nondeleted connections for a workspace, Post update a connection, Post returns available geographies can be selected to run data syncs in a particular geography
the auto entry indicates that the sync will be automatically assigned to a geography according
to the platform default behavior entries other than auto are twoletter country codes that
follow the iso 31661 alpha2 standard, Post fetch the current state type for a connection, Post returns the current state of a workspace |
| State | Post create or update the state for a connection, Post fetch the current state for a connection |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from airbyte-config docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official airbyte-config OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **airbyte-config** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the airbyte-config API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
