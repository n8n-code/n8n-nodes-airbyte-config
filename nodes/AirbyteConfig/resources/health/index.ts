import type { INodeProperties } from 'n8n-workflow';

export const healthDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					]
				}
			},
			"options": [
				{
					"name": "Get Health Check",
					"value": "Get Health Check",
					"action": "Health Check",
					"description": "Health Check",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/health"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Get Health Check"
					]
				}
			}
		},
];
