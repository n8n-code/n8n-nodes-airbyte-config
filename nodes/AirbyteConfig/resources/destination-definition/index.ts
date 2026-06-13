import type { INodeProperties } from 'n8n-workflow';

export const destinationDefinitionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					]
				}
			},
			"options": [
				{
					"name": "Create Custom Destination Definition",
					"value": "Create Custom Destination Definition",
					"action": "Creates a custom destinationDefinition for the given workspace",
					"description": "Creates a custom destinationDefinition for the given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/create_custom"
						}
					}
				},
				{
					"name": "Delete Destination Definition",
					"value": "Delete Destination Definition",
					"action": "Delete a destination definition",
					"description": "Delete a destination definition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/delete"
						}
					}
				},
				{
					"name": "Get Destination Definition",
					"value": "Get Destination Definition",
					"action": "Get destinationDefinition",
					"description": "Get destinationDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/get"
						}
					}
				},
				{
					"name": "Get Destination Definition For Workspace",
					"value": "Get Destination Definition For Workspace",
					"action": "Get a destinationDefinition that is configured for the given workspace",
					"description": "Get a destinationDefinition that is configured for the given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/get_for_workspace"
						}
					}
				},
				{
					"name": "Grant Destination Definition To Workspace",
					"value": "Grant Destination Definition To Workspace",
					"action": "grant a private, non-custom destinationDefinition to a given workspace",
					"description": "grant a private, non-custom destinationDefinition to a given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/grant_definition"
						}
					}
				},
				{
					"name": "List Destination Definitions",
					"value": "List Destination Definitions",
					"action": "List all the destinationDefinitions the current Airbyte deployment is configured to use",
					"description": "List all the destinationDefinitions the current Airbyte deployment is configured to use",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/list"
						}
					}
				},
				{
					"name": "List Destination Definitions For Workspace",
					"value": "List Destination Definitions For Workspace",
					"action": "List all the destinationDefinitions the given workspace is configured to use",
					"description": "List all the destinationDefinitions the given workspace is configured to use",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/list_for_workspace"
						}
					}
				},
				{
					"name": "List Latest Destination Definitions",
					"value": "List Latest Destination Definitions",
					"action": "List the latest destinationDefinitions Airbyte supports",
					"description": "Guaranteed to retrieve the latest information on supported destinations.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/list_latest"
						}
					}
				},
				{
					"name": "List Private Destination Definitions",
					"value": "List Private Destination Definitions",
					"action": "List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
					"description": "List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/list_private"
						}
					}
				},
				{
					"name": "Revoke Destination Definition From Workspace",
					"value": "Revoke Destination Definition From Workspace",
					"action": "revoke a grant to a private, non-custom destinationDefinition from a given workspace",
					"description": "revoke a grant to a private, non-custom destinationDefinition from a given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/revoke_definition"
						}
					}
				},
				{
					"name": "Update Destination Definition",
					"value": "Update Destination Definition",
					"action": "Update destinationDefinition",
					"description": "Update destinationDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_definitions/update"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/destination_definitions/create_custom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Create Custom Destination Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Definition",
			"name": "destinationDefinition",
			"type": "json",
			"default": "{\n  \"resourceRequirements\": {\n    \"default\": {},\n    \"jobSpecific\": [\n      {\n        \"resourceRequirements\": {}\n      }\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "destinationDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Create Custom Destination Definition"
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
						"Destination Definition"
					],
					"operation": [
						"Create Custom Destination Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Delete Destination Definition"
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
						"Destination Definition"
					],
					"operation": [
						"Delete Destination Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Get Destination Definition"
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
						"Destination Definition"
					],
					"operation": [
						"Get Destination Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/get_for_workspace",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Get Destination Definition For Workspace"
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
						"Destination Definition"
					],
					"operation": [
						"Get Destination Definition For Workspace"
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
						"Destination Definition"
					],
					"operation": [
						"Get Destination Definition For Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/grant_definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Grant Destination Definition To Workspace"
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
						"Destination Definition"
					],
					"operation": [
						"Grant Destination Definition To Workspace"
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
						"Destination Definition"
					],
					"operation": [
						"Grant Destination Definition To Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"List Destination Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/list_for_workspace",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"List Destination Definitions For Workspace"
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
						"Destination Definition"
					],
					"operation": [
						"List Destination Definitions For Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/list_latest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"List Latest Destination Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/list_private",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"List Private Destination Definitions"
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
						"Destination Definition"
					],
					"operation": [
						"List Private Destination Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/revoke_definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Revoke Destination Definition From Workspace"
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
						"Destination Definition"
					],
					"operation": [
						"Revoke Destination Definition From Workspace"
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
						"Destination Definition"
					],
					"operation": [
						"Revoke Destination Definition From Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_definitions/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Update Destination Definition"
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
						"Destination Definition"
					],
					"operation": [
						"Update Destination Definition"
					]
				}
			}
		},
		{
			"displayName": "Docker Image Tag",
			"name": "dockerImageTag",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dockerImageTag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Update Destination Definition"
					]
				}
			}
		},
		{
			"displayName": "Resource Requirements",
			"name": "resourceRequirements",
			"type": "json",
			"default": "{\n  \"default\": {},\n  \"jobSpecific\": [\n    {\n      \"resourceRequirements\": {}\n    }\n  ]\n}",
			"description": "actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.",
			"routing": {
				"send": {
					"property": "resourceRequirements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination Definition"
					],
					"operation": [
						"Update Destination Definition"
					]
				}
			}
		},
];
