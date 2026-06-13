import type { INodeProperties } from 'n8n-workflow';

export const attemptDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Attempt"
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
						"Attempt"
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
						"Attempt"
					],
					"operation": [
						"Save Stats"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job ID",
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
						"Attempt"
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
						"Attempt"
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
						"Attempt"
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
						"Attempt"
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
						"Attempt"
					],
					"operation": [
						"Save Sync Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job ID",
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
						"Attempt"
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
						"Attempt"
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
						"Attempt"
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
						"Attempt"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job ID",
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
						"Attempt"
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
						"Attempt"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Workflow ID",
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
						"Attempt"
					],
					"operation": [
						"Set Workflow In Attempt"
					]
				}
			}
		},
];
