import type { INodeProperties } from 'n8n-workflow';

export const sourceDefinitionSpecificationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition Specification"
					]
				}
			},
			"options": [
				{
					"name": "Get Source Definition Specification",
					"value": "Get Source Definition Specification",
					"action": "Get specification for a SourceDefinition.",
					"description": "Get specification for a SourceDefinition.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definition_specifications/get"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/source_definition_specifications/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition Specification"
					],
					"operation": [
						"Get Source Definition Specification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Definition ID",
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
						"Source Definition Specification"
					],
					"operation": [
						"Get Source Definition Specification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Workspace ID",
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
						"Source Definition Specification"
					],
					"operation": [
						"Get Source Definition Specification"
					]
				}
			}
		},
];
