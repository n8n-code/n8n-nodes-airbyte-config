import type { INodeProperties } from 'n8n-workflow';

export const destinationDefinitionSpecificationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition Specification"
					]
				}
			},
			"options": [
				{
					"name": "Get Destination Definition Specification",
					"value": "Get Destination Definition Specification",
					"action": "Get specification for a destinationDefinition",
					"description": "Get specification for a destinationDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definition_specifications/get"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/destination_definition_specifications/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition Specification"
					],
					"operation": [
						"Get Destination Definition Specification"
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
						"Destination Definition Specification"
					],
					"operation": [
						"Get Destination Definition Specification"
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
						"Destination Definition Specification"
					],
					"operation": [
						"Get Destination Definition Specification"
					]
				}
			}
		},
];
