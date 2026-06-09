import type { INodeProperties } from 'n8n-workflow';

export const internalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					]
				}
			},
			"options": [
				{
					"name": "Save Stats",
					"value": "Save Stats",
					"action": "For worker to set sync stats of a running attempt.",
					"description": "For worker to set sync stats of a running attempt.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/attempt/save_stats"
						}
					}
				},
				{
					"name": "Save Sync Config",
					"value": "Save Sync Config",
					"action": "For worker to save the AttemptSyncConfig for an attempt.",
					"description": "For worker to save the AttemptSyncConfig for an attempt.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/attempt/save_sync_config"
						}
					}
				},
				{
					"name": "Set Workflow In Attempt",
					"value": "Set Workflow In Attempt",
					"action": "For worker to register the workflow id in attempt.",
					"description": "For worker to register the workflow id in attempt.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/attempt/set_workflow_in_attempt"
						}
					}
				},
				{
					"name": "Get Attempt Normalization Statuses For Job",
					"value": "Get Attempt Normalization Statuses For Job",
					"action": "Get normalization status to determine if we can bypass normalization phase",
					"description": "Get normalization status to determine if we can bypass normalization phase",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/get_normalization_status"
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
				},
				{
					"name": "Create Or Update State",
					"value": "Create Or Update State",
					"action": "Create or update the state for a connection.",
					"description": "Create or update the state for a connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/state/create_or_update"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/attempt/save_stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Stats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Attempt Number",
			"name": "attemptNumber",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "attemptNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Stats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "jobId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "jobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Stats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Stats",
			"name": "stats",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "stats",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Stats"
					]
				}
			}
		},
		{
			"displayName": "Stream Stats",
			"name": "streamStats",
			"type": "json",
			"default": "[\n  {\n    \"stats\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "streamStats",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Stats"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/attempt/save_sync_config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Sync Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Attempt Number",
			"name": "attemptNumber",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "attemptNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Sync Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "jobId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "jobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Sync Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sync Config",
			"name": "syncConfig",
			"type": "json",
			"default": "{\n  \"destinationConfiguration\": {\n    \"user\": \"charles\"\n  },\n  \"sourceConfiguration\": {\n    \"user\": \"charles\"\n  },\n  \"state\": {\n    \"globalState\": {\n      \"streamStates\": [\n        {\n          \"streamDescriptor\": {},\n          \"streamState\": {}\n        }\n      ]\n    },\n    \"state\": {},\n    \"streamState\": [\n      {}\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "syncConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Save Sync Config"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/attempt/set_workflow_in_attempt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Attempt Number",
			"name": "attemptNumber",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "attemptNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "jobId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "jobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
		{
			"displayName": "Processing Task Queue",
			"name": "processingTaskQueue",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "processingTaskQueue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Workflow Id",
			"name": "workflowId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "workflowId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/jobs/get_normalization_status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Get Attempt Normalization Statuses For Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Get Attempt Normalization Statuses For Job"
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
						"Internal"
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
						"Internal"
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
						"Internal"
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
						"Internal"
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
						"Internal"
					],
					"operation": [
						"Write Discover Catalog Result"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/state/create_or_update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Create Or Update State"
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
						"Internal"
					],
					"operation": [
						"Create Or Update State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection State",
			"name": "connectionState",
			"type": "json",
			"default": "{\n  \"globalState\": {\n    \"streamStates\": [\n      {\n        \"streamDescriptor\": {},\n        \"streamState\": {}\n      }\n    ]\n  },\n  \"state\": {},\n  \"streamState\": [\n    {}\n  ]\n}",
			"description": "Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.",
			"routing": {
				"send": {
					"property": "connectionState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Internal"
					],
					"operation": [
						"Create Or Update State"
					]
				}
			}
		},
];
