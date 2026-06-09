import type { INodeProperties } from 'n8n-workflow';

export const destinationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					]
				}
			},
			"options": [
				{
					"name": "Check Connection To Destination",
					"value": "Check Connection To Destination",
					"action": "Check connection to the destination",
					"description": "Check connection to the destination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/check_connection"
						}
					}
				},
				{
					"name": "Check Connection To Destination For Update",
					"value": "Check Connection To Destination For Update",
					"action": "Check connection for a proposed update to a destination",
					"description": "Check connection for a proposed update to a destination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/check_connection_for_update"
						}
					}
				},
				{
					"name": "Clone Destination",
					"value": "Clone Destination",
					"action": "Clone destination",
					"description": "Clone destination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/clone"
						}
					}
				},
				{
					"name": "Create Destination",
					"value": "Create Destination",
					"action": "Create a destination",
					"description": "Create a destination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/create"
						}
					}
				},
				{
					"name": "Delete Destination",
					"value": "Delete Destination",
					"action": "Delete the destination",
					"description": "Delete the destination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/delete"
						}
					}
				},
				{
					"name": "Get Destination",
					"value": "Get Destination",
					"action": "Get configured destination",
					"description": "Get configured destination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/get"
						}
					}
				},
				{
					"name": "List Destinations For Workspace",
					"value": "List Destinations For Workspace",
					"action": "List configured destinations for a workspace",
					"description": "List configured destinations for a workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/list"
						}
					}
				},
				{
					"name": "Search Destinations",
					"value": "Search Destinations",
					"action": "Search destinations",
					"description": "Search destinations",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/search"
						}
					}
				},
				{
					"name": "Update Destination",
					"value": "Update Destination",
					"action": "Update a destination",
					"description": "Update a destination",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destinations/update"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/destinations/check_connection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Check Connection To Destination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination ID",
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
						"Destination"
					],
					"operation": [
						"Check Connection To Destination"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/check_connection_for_update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Check Connection To Destination For Update"
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
						"Destination"
					],
					"operation": [
						"Check Connection To Destination For Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination ID",
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
						"Destination"
					],
					"operation": [
						"Check Connection To Destination For Update"
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
						"Destination"
					],
					"operation": [
						"Check Connection To Destination For Update"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Clone Destination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Clone ID",
			"name": "destinationCloneId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationCloneId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Clone Destination"
					]
				}
			}
		},
		{
			"displayName": "Destination Configuration",
			"name": "destinationConfiguration",
			"type": "json",
			"default": "{\n  \"connectionConfiguration\": {\n    \"user\": \"charles\"\n  }\n}",
			"routing": {
				"send": {
					"property": "destinationConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Clone Destination"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Create Destination"
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
						"Destination"
					],
					"operation": [
						"Create Destination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Definition ID",
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
						"Destination"
					],
					"operation": [
						"Create Destination"
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
						"Destination"
					],
					"operation": [
						"Create Destination"
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
						"Destination"
					],
					"operation": [
						"Create Destination"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Delete Destination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination ID",
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
						"Destination"
					],
					"operation": [
						"Delete Destination"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Get Destination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination ID",
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
						"Destination"
					],
					"operation": [
						"Get Destination"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"List Destinations For Workspace"
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
						"Destination"
					],
					"operation": [
						"List Destinations For Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Search Destinations"
					]
				}
			}
		},
		{
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
						"Destination"
					],
					"operation": [
						"Search Destinations"
					]
				}
			}
		},
		{
			"displayName": "Destination Definition ID",
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
						"Destination"
					],
					"operation": [
						"Search Destinations"
					]
				}
			}
		},
		{
			"displayName": "Destination ID",
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
						"Destination"
					],
					"operation": [
						"Search Destinations"
					]
				}
			}
		},
		{
			"displayName": "Destination Name",
			"name": "destinationName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Search Destinations"
					]
				}
			}
		},
		{
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
						"Destination"
					],
					"operation": [
						"Search Destinations"
					]
				}
			}
		},
		{
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
						"Destination"
					],
					"operation": [
						"Search Destinations"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destinations/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination"
					],
					"operation": [
						"Update Destination"
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
						"Destination"
					],
					"operation": [
						"Update Destination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination ID",
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
						"Destination"
					],
					"operation": [
						"Update Destination"
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
						"Destination"
					],
					"operation": [
						"Update Destination"
					]
				}
			}
		},
];
