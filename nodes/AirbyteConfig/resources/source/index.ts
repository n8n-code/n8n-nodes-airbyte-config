import type { INodeProperties } from 'n8n-workflow';

export const sourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					]
				}
			},
			"options": [
				{
					"name": "Check Connection To Source",
					"value": "Check Connection To Source",
					"action": "Check connection to the source",
					"description": "Check connection to the source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/check_connection"
						}
					}
				},
				{
					"name": "Check Connection To Source For Update",
					"value": "Check Connection To Source For Update",
					"action": "Check connection for a proposed update to a source",
					"description": "Check connection for a proposed update to a source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/check_connection_for_update"
						}
					}
				},
				{
					"name": "Clone Source",
					"value": "Clone Source",
					"action": "Clone source",
					"description": "Clone source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/clone"
						}
					}
				},
				{
					"name": "Create Source",
					"value": "Create Source",
					"action": "Create a source",
					"description": "Create a source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/create"
						}
					}
				},
				{
					"name": "Delete Source",
					"value": "Delete Source",
					"action": "Delete a source",
					"description": "Delete a source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/delete"
						}
					}
				},
				{
					"name": "Discover Schema For Source",
					"value": "Discover Schema For Source",
					"action": "Discover the schema catalog of the source",
					"description": "Discover the schema catalog of the source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/discover_schema"
						}
					}
				},
				{
					"name": "Get Source",
					"value": "Get Source",
					"action": "Get source",
					"description": "Get source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/get"
						}
					}
				},
				{
					"name": "List Sources For Workspace",
					"value": "List Sources For Workspace",
					"action": "List sources for workspace",
					"description": "List sources for workspace. Does not return deleted sources.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/list"
						}
					}
				},
				{
					"name": "Get Most Recent Source Actor Catalog",
					"value": "Get Most Recent Source Actor Catalog",
					"action": "Get most recent ActorCatalog for source",
					"description": "Get most recent ActorCatalog for source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/most_recent_source_actor_catalog"
						}
					}
				},
				{
					"name": "Search Sources",
					"value": "Search Sources",
					"action": "Search sources",
					"description": "Search sources",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/search"
						}
					}
				},
				{
					"name": "Update Source",
					"value": "Update Source",
					"action": "Update a source",
					"description": "Update a source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/update"
						}
					}
				},
				{
					"name": "Write Discover Catalog Result",
					"value": "Write Discover Catalog Result",
					"action": "Should only called from worker, to write result from discover activity back to DB.",
					"description": "Should only called from worker, to write result from discover activity back to DB.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/sources/write_discover_catalog_result"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/sources/check_connection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Check Connection To Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Check Connection To Source"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/check_connection_for_update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Check Connection To Source For Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Configuration",
			"name": "connectionConfiguration",
			"type": "string",
			"default": {
				"user": "charles"
			},
			"description": "The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.",
			"routing": {
				"send": {
					"property": "connectionConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Check Connection To Source For Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Check Connection To Source For Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Check Connection To Source For Update"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Clone Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Clone Id",
			"name": "sourceCloneId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceCloneId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Clone Source"
					]
				}
			}
		},
		{
			"displayName": "Source Configuration",
			"name": "sourceConfiguration",
			"type": "json",
			"default": "{\n  \"connectionConfiguration\": {\n    \"user\": \"charles\"\n  }\n}",
			"routing": {
				"send": {
					"property": "sourceConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Clone Source"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Create Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Configuration",
			"name": "connectionConfiguration",
			"type": "string",
			"default": {
				"user": "charles"
			},
			"description": "The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.",
			"routing": {
				"send": {
					"property": "connectionConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Create Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Create Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Definition Id",
			"name": "sourceDefinitionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceDefinitionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Create Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Workspace Id",
			"name": "workspaceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "workspaceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Create Source"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Delete Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Delete Source"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/discover_schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Discover Schema For Source"
					]
				}
			}
		},
		{
			"displayName": "Connection Id",
			"name": "connectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "connectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Discover Schema For Source"
					]
				}
			}
		},
		{
			"displayName": "Disable Cache",
			"name": "disable_cache",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "disable_cache",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Discover Schema For Source"
					]
				}
			}
		},
		{
			"displayName": "Notify Schema Change",
			"name": "notifySchemaChange",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "notifySchemaChange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Discover Schema For Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Discover Schema For Source"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Get Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Get Source"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"List Sources For Workspace"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Workspace Id",
			"name": "workspaceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "workspaceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"List Sources For Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/most_recent_source_actor_catalog",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Get Most Recent Source Actor Catalog"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Get Most Recent Source Actor Catalog"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Search Sources"
					]
				}
			}
		},
		{
			"displayName": "Connection Configuration",
			"name": "connectionConfiguration",
			"type": "string",
			"default": {
				"user": "charles"
			},
			"description": "The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.",
			"routing": {
				"send": {
					"property": "connectionConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Search Sources"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Search Sources"
					]
				}
			}
		},
		{
			"displayName": "Source Definition Id",
			"name": "sourceDefinitionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceDefinitionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Search Sources"
					]
				}
			}
		},
		{
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Search Sources"
					]
				}
			}
		},
		{
			"displayName": "Source Name",
			"name": "sourceName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Search Sources"
					]
				}
			}
		},
		{
			"displayName": "Workspace Id",
			"name": "workspaceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "workspaceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Search Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Update Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Configuration",
			"name": "connectionConfiguration",
			"type": "string",
			"default": {
				"user": "charles"
			},
			"description": "The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.",
			"routing": {
				"send": {
					"property": "connectionConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Update Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Update Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Update Source"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/sources/write_discover_catalog_result",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Write Discover Catalog Result"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Catalog",
			"name": "catalog",
			"type": "json",
			"default": "{\n  \"streams\": [\n    {\n      \"config\": {\n        \"cursorField\": [\n          null\n        ],\n        \"primaryKey\": [\n          [\n            null\n          ]\n        ],\n        \"selectedFields\": [\n          {\n            \"fieldPath\": [\n              null\n            ]\n          }\n        ]\n      },\n      \"stream\": {\n        \"defaultCursorField\": [\n          null\n        ],\n        \"sourceDefinedPrimaryKey\": [\n          [\n            null\n          ]\n        ],\n        \"supportedSyncModes\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "describes the available schema (catalog).",
			"routing": {
				"send": {
					"property": "catalog",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Write Discover Catalog Result"
					]
				}
			}
		},
		{
			"displayName": "Configuration Hash",
			"name": "configurationHash",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "configurationHash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Write Discover Catalog Result"
					]
				}
			}
		},
		{
			"displayName": "Connector Version",
			"name": "connectorVersion",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "connectorVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Write Discover Catalog Result"
					]
				}
			}
		},
		{
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source"
					],
					"operation": [
						"Write Discover Catalog Result"
					]
				}
			}
		},
];
