import type { INodeProperties } from 'n8n-workflow';

export const openapiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Openapi"
					]
				}
			},
			"options": [
				{
					"name": "Get Open Api Spec",
					"value": "Get Open Api Spec",
					"action": "Returns the openapi specification",
					"description": "Returns the openapi specification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/openapi"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/openapi",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Openapi"
					],
					"operation": [
						"Get Open Api Spec"
					]
				}
			}
		},
];
