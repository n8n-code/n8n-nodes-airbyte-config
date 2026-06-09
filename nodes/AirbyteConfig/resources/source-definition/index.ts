import type { INodeProperties } from 'n8n-workflow';

export const sourceDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					]
				}
			},
			"options": [
				{
					"name": "Create Custom Source Definition",
					"value": "Create Custom Source Definition",
					"action": "Creates a custom sourceDefinition for the given workspace",
					"description": "Creates a custom sourceDefinition for the given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/create_custom"
						}
					}
				},
				{
					"name": "Delete Source Definition",
					"value": "Delete Source Definition",
					"action": "Delete a source definition",
					"description": "Delete a source definition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/delete"
						}
					}
				},
				{
					"name": "Get Source Definition",
					"value": "Get Source Definition",
					"action": "Get source",
					"description": "Get source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/get"
						}
					}
				},
				{
					"name": "Get Source Definition For Workspace",
					"value": "Get Source Definition For Workspace",
					"action": "Get a sourceDefinition that is configured for the given workspace",
					"description": "Get a sourceDefinition that is configured for the given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/get_for_workspace"
						}
					}
				},
				{
					"name": "Grant Source Definition To Workspace",
					"value": "Grant Source Definition To Workspace",
					"action": "grant a private, non-custom sourceDefinition to a given workspace",
					"description": "grant a private, non-custom sourceDefinition to a given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/grant_definition"
						}
					}
				},
				{
					"name": "List Source Definitions",
					"value": "List Source Definitions",
					"action": "List all the sourceDefinitions the current Airbyte deployment is configured to use",
					"description": "List all the sourceDefinitions the current Airbyte deployment is configured to use",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/list"
						}
					}
				},
				{
					"name": "List Source Definitions For Workspace",
					"value": "List Source Definitions For Workspace",
					"action": "List all the sourceDefinitions the given workspace is configured to use",
					"description": "List all the sourceDefinitions the given workspace is configured to use",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/list_for_workspace"
						}
					}
				},
				{
					"name": "List Latest Source Definitions",
					"value": "List Latest Source Definitions",
					"action": "List the latest sourceDefinitions Airbyte supports",
					"description": "Guaranteed to retrieve the latest information on supported sources.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/list_latest"
						}
					}
				},
				{
					"name": "List Private Source Definitions",
					"value": "List Private Source Definitions",
					"action": "List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
					"description": "List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/list_private"
						}
					}
				},
				{
					"name": "Revoke Source Definition From Workspace",
					"value": "Revoke Source Definition From Workspace",
					"action": "revoke a grant to a private, non-custom sourceDefinition from a given workspace",
					"description": "revoke a grant to a private, non-custom sourceDefinition from a given workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/revoke_definition"
						}
					}
				},
				{
					"name": "Update Source Definition",
					"value": "Update Source Definition",
					"action": "Update a sourceDefinition",
					"description": "Update a sourceDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/source_definitions/update"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/source_definitions/create_custom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Create Custom Source Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Definition",
			"name": "sourceDefinition",
			"type": "json",
			"default": "{\n  \"resourceRequirements\": {\n    \"default\": {},\n    \"jobSpecific\": [\n      {\n        \"resourceRequirements\": {}\n      }\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "sourceDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Create Custom Source Definition"
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
						"Source Definition"
					],
					"operation": [
						"Create Custom Source Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Delete Source Definition"
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
						"Source Definition"
					],
					"operation": [
						"Delete Source Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Get Source Definition"
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
						"Source Definition"
					],
					"operation": [
						"Get Source Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/get_for_workspace",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Get Source Definition For Workspace"
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
						"Source Definition"
					],
					"operation": [
						"Get Source Definition For Workspace"
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
						"Source Definition"
					],
					"operation": [
						"Get Source Definition For Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/grant_definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Grant Source Definition To Workspace"
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
						"Source Definition"
					],
					"operation": [
						"Grant Source Definition To Workspace"
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
						"Source Definition"
					],
					"operation": [
						"Grant Source Definition To Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"List Source Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/list_for_workspace",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"List Source Definitions For Workspace"
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
						"Source Definition"
					],
					"operation": [
						"List Source Definitions For Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/list_latest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"List Latest Source Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/list_private",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"List Private Source Definitions"
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
						"Source Definition"
					],
					"operation": [
						"List Private Source Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/revoke_definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Revoke Source Definition From Workspace"
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
						"Source Definition"
					],
					"operation": [
						"Revoke Source Definition From Workspace"
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
						"Source Definition"
					],
					"operation": [
						"Revoke Source Definition From Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/source_definitions/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Source Definition"
					],
					"operation": [
						"Update Source Definition"
					]
				}
			}
		},
		{
			"required": true,
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
						"Source Definition"
					],
					"operation": [
						"Update Source Definition"
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
						"Source Definition"
					],
					"operation": [
						"Update Source Definition"
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
						"Source Definition"
					],
					"operation": [
						"Update Source Definition"
					]
				}
			}
		},
];
