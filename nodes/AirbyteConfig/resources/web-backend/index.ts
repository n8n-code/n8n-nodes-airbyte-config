import type { INodeProperties } from 'n8n-workflow';

export const webBackendDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					]
				}
			},
			"options": [
				{
					"name": "Web Backend Check Updates",
					"value": "Web Backend Check Updates",
					"action": "Returns a summary of source and destination definitions that could be updated.",
					"description": "Returns a summary of source and destination definitions that could be updated.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/check_updates"
						}
					}
				},
				{
					"name": "Web Backend Create Connection",
					"value": "Web Backend Create Connection",
					"action": "Create a connection",
					"description": "Create a connection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/connections/create"
						}
					}
				},
				{
					"name": "Web Backend Get Connection",
					"value": "Web Backend Get Connection",
					"action": "Get a connection",
					"description": "Get a connection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/connections/get"
						}
					}
				},
				{
					"name": "Web Backend List Connections For Workspace",
					"value": "Web Backend List Connections For Workspace",
					"action": "Returns all non-deleted connections for a workspace.",
					"description": "Returns all non-deleted connections for a workspace.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/connections/list"
						}
					}
				},
				{
					"name": "Web Backend Update Connection",
					"value": "Web Backend Update Connection",
					"action": "Update a connection",
					"description": "Apply a patch-style update to a connection. Only fields present on the update request body will be updated.\nAny operations that lack an ID will be created. Then, the newly created operationId will be applied to the\nconnection along with the rest of the operationIds in the request body.\nApply a patch-style update to a connection. Only fields present on the update request body will be updated.\nNote that if a catalog is present in the request body, the connection's entire catalog will be replaced\nwith the catalog from the request. This means that to modify a single stream, the entire new catalog\ncontaining the updated stream needs to be sent.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/connections/update"
						}
					}
				},
				{
					"name": "Web Backend List Geographies",
					"value": "Web Backend List Geographies",
					"action": "Returns available geographies can be selected to run data syncs in a particular geography.\nThe 'auto' entry indicates that the sync will be automatically assigned to a geography according\nto the platform default behavior. Entries other than 'auto' are two-letter country codes that\nfollow the ISO 3166-1 alpha-2 standard.\n",
					"description": "Returns all available geographies in which a data sync can run.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/geographies/list"
						}
					}
				},
				{
					"name": "Get State Type",
					"value": "Get State Type",
					"action": "Fetch the current state type for a connection.",
					"description": "Fetch the current state type for a connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/state/get_type"
						}
					}
				},
				{
					"name": "Web Backend Get Workspace State",
					"value": "Web Backend Get Workspace State",
					"action": "Returns the current state of a workspace",
					"description": "Returns the current state of a workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/web_backend/workspace/state"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/web_backend/check_updates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Check Updates"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/web_backend/connections/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Id",
			"name": "destinationId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Geography",
			"name": "geography",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Us",
					"value": "us"
				},
				{
					"name": "Eu",
					"value": "eu"
				}
			],
			"routing": {
				"send": {
					"property": "geography",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Optional name of the connection",
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
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Namespace Definition",
			"name": "namespaceDefinition",
			"type": "options",
			"default": "source",
			"description": "Method used for computing final namespace in destination",
			"options": [
				{
					"name": "Source",
					"value": "source"
				},
				{
					"name": "Destination",
					"value": "destination"
				},
				{
					"name": "Customformat",
					"value": "customformat"
				}
			],
			"routing": {
				"send": {
					"property": "namespaceDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Namespace Format",
			"name": "namespaceFormat",
			"type": "string",
			"default": "${SOURCE_NAMESPACE}",
			"description": "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
			"routing": {
				"send": {
					"property": "namespaceFormat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Non Breaking Changes Preference",
			"name": "nonBreakingChangesPreference",
			"type": "options",
			"default": "ignore",
			"options": [
				{
					"name": "Ignore",
					"value": "ignore"
				},
				{
					"name": "Disable",
					"value": "disable"
				}
			],
			"routing": {
				"send": {
					"property": "nonBreakingChangesPreference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Operation Ids",
			"name": "operationIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "operationIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Operations",
			"name": "operations",
			"type": "json",
			"default": "[\n  {\n    \"operatorConfiguration\": {\n      \"dbt\": {},\n      \"normalization\": {},\n      \"webhook\": {\n        \"dbtCloud\": {}\n      }\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "operations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "",
			"description": "Prefix that will be prepended to the name of each stream when it is written to the destination.",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Resource Requirements",
			"name": "resourceRequirements",
			"type": "json",
			"default": "{}",
			"description": "optional resource requirements to run workers (blank for unbounded allocations)",
			"routing": {
				"send": {
					"property": "resourceRequirements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"description": "if null, then no schedule is set.",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Schedule Data",
			"name": "scheduleData",
			"type": "json",
			"default": "{\n  \"basicSchedule\": {},\n  \"cron\": {}\n}",
			"description": "schedule for when the the connection should run, per the schedule type",
			"routing": {
				"send": {
					"property": "scheduleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Schedule Type",
			"name": "scheduleType",
			"type": "options",
			"default": "manual",
			"description": "determine how the schedule data should be interpreted",
			"options": [
				{
					"name": "Manual",
					"value": "manual"
				},
				{
					"name": "Basic",
					"value": "basic"
				},
				{
					"name": "Cron",
					"value": "cron"
				}
			],
			"routing": {
				"send": {
					"property": "scheduleType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Source Catalog Id",
			"name": "sourceCatalogId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceCatalogId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
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
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Sync Catalog",
			"name": "syncCatalog",
			"type": "json",
			"default": "{\n  \"streams\": [\n    {\n      \"config\": {\n        \"cursorField\": [\n          null\n        ],\n        \"primaryKey\": [\n          [\n            null\n          ]\n        ],\n        \"selectedFields\": [\n          {\n            \"fieldPath\": [\n              null\n            ]\n          }\n        ]\n      },\n      \"stream\": {\n        \"defaultCursorField\": [\n          null\n        ],\n        \"sourceDefinedPrimaryKey\": [\n          [\n            null\n          ]\n        ],\n        \"supportedSyncModes\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "describes the available schema (catalog).",
			"routing": {
				"send": {
					"property": "syncCatalog",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Create Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/web_backend/connections/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Get Connection"
					]
				}
			}
		},
		{
			"required": true,
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
						"Web Backend"
					],
					"operation": [
						"Web Backend Get Connection"
					]
				}
			}
		},
		{
			"displayName": "With Refreshed Catalog",
			"name": "withRefreshedCatalog",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "withRefreshedCatalog",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Get Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/web_backend/connections/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend List Connections For Workspace"
					]
				}
			}
		},
		{
			"displayName": "Destination Id",
			"name": "destinationId",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "destinationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend List Connections For Workspace"
					]
				}
			}
		},
		{
			"displayName": "Source Id",
			"name": "sourceId",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend List Connections For Workspace"
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
						"Web Backend"
					],
					"operation": [
						"Web Backend List Connections For Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/web_backend/connections/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"required": true,
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
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Geography",
			"name": "geography",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Us",
					"value": "us"
				},
				{
					"name": "Eu",
					"value": "eu"
				}
			],
			"routing": {
				"send": {
					"property": "geography",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name that will be set to the connection",
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
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Namespace Definition",
			"name": "namespaceDefinition",
			"type": "options",
			"default": "source",
			"description": "Method used for computing final namespace in destination",
			"options": [
				{
					"name": "Source",
					"value": "source"
				},
				{
					"name": "Destination",
					"value": "destination"
				},
				{
					"name": "Customformat",
					"value": "customformat"
				}
			],
			"routing": {
				"send": {
					"property": "namespaceDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Namespace Format",
			"name": "namespaceFormat",
			"type": "string",
			"default": "${SOURCE_NAMESPACE}",
			"description": "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
			"routing": {
				"send": {
					"property": "namespaceFormat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Non Breaking Changes Preference",
			"name": "nonBreakingChangesPreference",
			"type": "options",
			"default": "ignore",
			"options": [
				{
					"name": "Ignore",
					"value": "ignore"
				},
				{
					"name": "Disable",
					"value": "disable"
				}
			],
			"routing": {
				"send": {
					"property": "nonBreakingChangesPreference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Notify Schema Changes",
			"name": "notifySchemaChanges",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "notifySchemaChanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Operations",
			"name": "operations",
			"type": "json",
			"default": "[\n  {\n    \"operatorConfiguration\": {\n      \"dbt\": {},\n      \"normalization\": {},\n      \"webhook\": {\n        \"dbtCloud\": {}\n      }\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "operations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "",
			"description": "Prefix that will be prepended to the name of each stream when it is written to the destination.",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Resource Requirements",
			"name": "resourceRequirements",
			"type": "json",
			"default": "{}",
			"description": "optional resource requirements to run workers (blank for unbounded allocations)",
			"routing": {
				"send": {
					"property": "resourceRequirements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"description": "if null, then no schedule is set.",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Schedule Data",
			"name": "scheduleData",
			"type": "json",
			"default": "{\n  \"basicSchedule\": {},\n  \"cron\": {}\n}",
			"description": "schedule for when the the connection should run, per the schedule type",
			"routing": {
				"send": {
					"property": "scheduleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Schedule Type",
			"name": "scheduleType",
			"type": "options",
			"default": "manual",
			"description": "determine how the schedule data should be interpreted",
			"options": [
				{
					"name": "Manual",
					"value": "manual"
				},
				{
					"name": "Basic",
					"value": "basic"
				},
				{
					"name": "Cron",
					"value": "cron"
				}
			],
			"routing": {
				"send": {
					"property": "scheduleType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Skip Reset",
			"name": "skipReset",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "skipReset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Source Catalog Id",
			"name": "sourceCatalogId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceCatalogId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "Sync Catalog",
			"name": "syncCatalog",
			"type": "json",
			"default": "{\n  \"streams\": [\n    {\n      \"config\": {\n        \"cursorField\": [\n          null\n        ],\n        \"primaryKey\": [\n          [\n            null\n          ]\n        ],\n        \"selectedFields\": [\n          {\n            \"fieldPath\": [\n              null\n            ]\n          }\n        ]\n      },\n      \"stream\": {\n        \"defaultCursorField\": [\n          null\n        ],\n        \"sourceDefinedPrimaryKey\": [\n          [\n            null\n          ]\n        ],\n        \"supportedSyncModes\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "describes the available schema (catalog).",
			"routing": {
				"send": {
					"property": "syncCatalog",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Update Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/web_backend/geographies/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend List Geographies"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/web_backend/state/get_type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Get State Type"
					]
				}
			}
		},
		{
			"required": true,
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
						"Web Backend"
					],
					"operation": [
						"Get State Type"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/web_backend/workspace/state",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Backend"
					],
					"operation": [
						"Web Backend Get Workspace State"
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
						"Web Backend"
					],
					"operation": [
						"Web Backend Get Workspace State"
					]
				}
			}
		},
];
