import type { INodeProperties } from 'n8n-workflow';

export const stateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"State"
					]
				}
			},
			"options": [
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
				},
				{
					"name": "Get State",
					"value": "Get State",
					"action": "Fetch the current state for a connection.",
					"description": "Fetch the current state for a connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/state/get"
						}
					}
				}
			],
			"default": ""
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
						"State"
					],
					"operation": [
						"Create Or Update State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection ID",
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
						"State"
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
						"State"
					],
					"operation": [
						"Create Or Update State"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/state/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"State"
					],
					"operation": [
						"Get State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection ID",
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
						"State"
					],
					"operation": [
						"Get State"
					]
				}
			}
		},
];
