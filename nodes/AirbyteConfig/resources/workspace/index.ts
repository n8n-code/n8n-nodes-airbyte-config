import type { INodeProperties } from 'n8n-workflow';

export const workspaceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					]
				}
			},
			"options": [
				{
					"name": "Create Workspace",
					"value": "Create Workspace",
					"action": "Creates a workspace",
					"description": "Creates a workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/create"
						}
					}
				},
				{
					"name": "Delete Workspace",
					"value": "Delete Workspace",
					"action": "Deletes a workspace",
					"description": "Deletes a workspace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/delete"
						}
					}
				},
				{
					"name": "Get Workspace",
					"value": "Get Workspace",
					"action": "Find workspace by ID",
					"description": "Find workspace by ID",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/get"
						}
					}
				},
				{
					"name": "Get Workspace By Connection Id",
					"value": "Get Workspace By Connection Id",
					"action": "Find workspace by connection id",
					"description": "Find workspace by connection id",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/get_by_connection_id"
						}
					}
				},
				{
					"name": "Get Workspace By Slug",
					"value": "Get Workspace By Slug",
					"action": "Find workspace by slug",
					"description": "Find workspace by slug",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/get_by_slug"
						}
					}
				},
				{
					"name": "List Workspaces",
					"value": "List Workspaces",
					"action": "List all workspaces registered in the current Airbyte deployment",
					"description": "List all workspaces registered in the current Airbyte deployment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/list"
						}
					}
				},
				{
					"name": "Update Workspace Feedback",
					"value": "Update Workspace Feedback",
					"action": "Update workspace feedback state",
					"description": "Update workspace feedback state",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/tag_feedback_status_as_done"
						}
					}
				},
				{
					"name": "Update Workspace",
					"value": "Update Workspace",
					"action": "Update workspace state",
					"description": "Update workspace state",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/update"
						}
					}
				},
				{
					"name": "Update Workspace Name",
					"value": "Update Workspace Name",
					"action": "Update workspace name",
					"description": "Update workspace name",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/workspaces/update_name"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/workspaces/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Anonymous Data Collection",
			"name": "anonymousDataCollection",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "anonymousDataCollection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Default Geography",
			"name": "defaultGeography",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Us",
					"value": "us"
				},
				{
					"name": "Eu",
					"value": "eu"
				}
			],
			"routing": {
				"send": {
					"property": "defaultGeography",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Display Setup Wizard",
			"name": "displaySetupWizard",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "displaySetupWizard",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
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
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "News",
			"name": "news",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "news",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Notifications",
			"name": "notifications",
			"type": "json",
			"default": "[\n  {\n    \"sendOnFailure\": true,\n    \"sendOnSuccess\": false,\n    \"slackConfiguration\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "notifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Security Updates",
			"name": "securityUpdates",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "securityUpdates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Webhook Configs",
			"name": "webhookConfigs",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "webhookConfigs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Delete Workspace"
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
						"Workspace"
					],
					"operation": [
						"Delete Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Get Workspace"
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
						"Workspace"
					],
					"operation": [
						"Get Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/get_by_connection_id",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Get Workspace By Connection Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Id",
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
						"Workspace"
					],
					"operation": [
						"Get Workspace By Connection Id"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/get_by_slug",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Get Workspace By Slug"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Get Workspace By Slug"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"List Workspaces"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/tag_feedback_status_as_done",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace Feedback"
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
						"Workspace"
					],
					"operation": [
						"Update Workspace Feedback"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Anonymous Data Collection",
			"name": "anonymousDataCollection",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "anonymousDataCollection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Default Geography",
			"name": "defaultGeography",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Us",
					"value": "us"
				},
				{
					"name": "Eu",
					"value": "eu"
				}
			],
			"routing": {
				"send": {
					"property": "defaultGeography",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Display Setup Wizard",
			"name": "displaySetupWizard",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "displaySetupWizard",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Initial Setup Complete",
			"name": "initialSetupComplete",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "initialSetupComplete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "News",
			"name": "news",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "news",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Notifications",
			"name": "notifications",
			"type": "json",
			"default": "[\n  {\n    \"sendOnFailure\": true,\n    \"sendOnSuccess\": false,\n    \"slackConfiguration\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "notifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Security Updates",
			"name": "securityUpdates",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "securityUpdates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Webhook Configs",
			"name": "webhookConfigs",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "webhookConfigs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace"
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
						"Workspace"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/workspaces/update_name",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspace"
					],
					"operation": [
						"Update Workspace Name"
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
						"Workspace"
					],
					"operation": [
						"Update Workspace Name"
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
						"Workspace"
					],
					"operation": [
						"Update Workspace Name"
					]
				}
			}
		},
];
