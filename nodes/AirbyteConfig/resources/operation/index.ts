import type { INodeProperties } from 'n8n-workflow';

export const operationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					]
				}
			},
			"options": [
				{
					"name": "Check Operation",
					"value": "Check Operation",
					"action": "Check if an operation to be created is valid",
					"description": "Check if an operation to be created is valid",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/operations/check"
						}
					}
				},
				{
					"name": "Create Operation",
					"value": "Create Operation",
					"action": "Create an operation to be applied as part of a connection pipeline",
					"description": "Create an operation to be applied as part of a connection pipeline",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/operations/create"
						}
					}
				},
				{
					"name": "Delete Operation",
					"value": "Delete Operation",
					"action": "Delete an operation",
					"description": "Delete an operation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/operations/delete"
						}
					}
				},
				{
					"name": "Get Operation",
					"value": "Get Operation",
					"action": "Returns an operation",
					"description": "Returns an operation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/operations/get"
						}
					}
				},
				{
					"name": "List Operations For Connection",
					"value": "List Operations For Connection",
					"action": "Returns all operations for a connection.",
					"description": "List operations for connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/operations/list"
						}
					}
				},
				{
					"name": "Update Operation",
					"value": "Update Operation",
					"action": "Update an operation",
					"description": "Update an operation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/operations/update"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/operations/check",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Check Operation"
					]
				}
			}
		},
		{
			"displayName": "Dbt",
			"name": "dbt",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "dbt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Check Operation"
					]
				}
			}
		},
		{
			"displayName": "Normalization",
			"name": "normalization",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "normalization",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Check Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operator Type",
			"name": "operatorType",
			"type": "options",
			"default": "normalization",
			"options": [
				{
					"name": "Normalization",
					"value": "normalization"
				},
				{
					"name": "Dbt",
					"value": "dbt"
				},
				{
					"name": "Webhook",
					"value": "webhook"
				}
			],
			"routing": {
				"send": {
					"property": "operatorType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Check Operation"
					]
				}
			}
		},
		{
			"displayName": "Webhook",
			"name": "webhook",
			"type": "json",
			"default": "{\n  \"dbtCloud\": {}\n}",
			"routing": {
				"send": {
					"property": "webhook",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Check Operation"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/operations/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Create Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
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
						"Operation"
					],
					"operation": [
						"Create Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operator Configuration",
			"name": "operatorConfiguration",
			"type": "json",
			"default": "{\n  \"dbt\": {},\n  \"normalization\": {},\n  \"webhook\": {\n    \"dbtCloud\": {}\n  }\n}",
			"routing": {
				"send": {
					"property": "operatorConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Create Operation"
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
						"Operation"
					],
					"operation": [
						"Create Operation"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/operations/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Delete Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operation ID",
			"name": "operationId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "operationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Delete Operation"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/operations/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Get Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operation ID",
			"name": "operationId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "operationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Get Operation"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/operations/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"List Operations For Connection"
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
						"Operation"
					],
					"operation": [
						"List Operations For Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/operations/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Update Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
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
						"Operation"
					],
					"operation": [
						"Update Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operation ID",
			"name": "operationId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "operationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Update Operation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operator Configuration",
			"name": "operatorConfiguration",
			"type": "json",
			"default": "{\n  \"dbt\": {},\n  \"normalization\": {},\n  \"webhook\": {\n    \"dbtCloud\": {}\n  }\n}",
			"routing": {
				"send": {
					"property": "operatorConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Operation"
					],
					"operation": [
						"Update Operation"
					]
				}
			}
		},
];
