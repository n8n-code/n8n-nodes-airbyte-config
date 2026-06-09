import type { INodeProperties } from 'n8n-workflow';

export const schedulerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Scheduler"
					]
				}
			},
			"options": [
				{
					"name": "Execute Destination Check Connection",
					"value": "Execute Destination Check Connection",
					"action": "Run check connection for a given destination configuration",
					"description": "Run check connection for a given destination configuration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/scheduler/destinations/check_connection"
						}
					}
				},
				{
					"name": "Execute Source Check Connection",
					"value": "Execute Source Check Connection",
					"action": "Run check connection for a given source configuration",
					"description": "Run check connection for a given source configuration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/scheduler/sources/check_connection"
						}
					}
				},
				{
					"name": "Execute Source Discover Schema",
					"value": "Execute Source Discover Schema",
					"action": "Run discover schema for a given source a source configuration",
					"description": "Run discover schema for a given source a source configuration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/scheduler/sources/discover_schema"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/scheduler/destinations/check_connection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scheduler"
					],
					"operation": [
						"Execute Destination Check Connection"
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
			"description": "The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.",
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
						"Scheduler"
					],
					"operation": [
						"Execute Destination Check Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Definition Id",
			"name": "destinationDefinitionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationDefinitionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scheduler"
					],
					"operation": [
						"Execute Destination Check Connection"
					]
				}
			}
		},
		{
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
						"Scheduler"
					],
					"operation": [
						"Execute Destination Check Connection"
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
						"Scheduler"
					],
					"operation": [
						"Execute Destination Check Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/scheduler/sources/check_connection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scheduler"
					],
					"operation": [
						"Execute Source Check Connection"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Check Connection"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Check Connection"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Check Connection"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Check Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/scheduler/sources/discover_schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scheduler"
					],
					"operation": [
						"Execute Source Discover Schema"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Discover Schema"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Discover Schema"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Discover Schema"
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
						"Scheduler"
					],
					"operation": [
						"Execute Source Discover Schema"
					]
				}
			}
		},
];
