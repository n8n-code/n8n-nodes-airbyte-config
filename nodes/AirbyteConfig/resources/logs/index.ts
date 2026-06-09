import type { INodeProperties } from 'n8n-workflow';

export const logsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					]
				}
			},
			"options": [
				{
					"name": "Get Logs",
					"value": "Get Logs",
					"action": "Get logs",
					"description": "Get logs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/logs/get"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/logs/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"Get Logs"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Log Type",
			"name": "logType",
			"type": "options",
			"default": "server",
			"description": "type/source of logs produced",
			"options": [
				{
					"name": "Server",
					"value": "server"
				},
				{
					"name": "Scheduler",
					"value": "scheduler"
				}
			],
			"routing": {
				"send": {
					"property": "logType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Logs"
					],
					"operation": [
						"Get Logs"
					]
				}
			}
		},
];
