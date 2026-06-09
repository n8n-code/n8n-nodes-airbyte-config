import type { INodeProperties } from 'n8n-workflow';

export const notificationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					]
				}
			},
			"options": [
				{
					"name": "Try Notification Config",
					"value": "Try Notification Config",
					"action": "Try sending a notifications",
					"description": "Try sending a notifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/notifications/try"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/notifications/try",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Try Notification Config"
					]
				}
			}
		},
		{
			"displayName": "Customerio Configuration",
			"name": "customerioConfiguration",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "customerioConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Try Notification Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification Type",
			"name": "notificationType",
			"type": "options",
			"default": "slack",
			"options": [
				{
					"name": "Slack",
					"value": "slack"
				},
				{
					"name": "Customerio",
					"value": "customerio"
				}
			],
			"routing": {
				"send": {
					"property": "notificationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Try Notification Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Send On Failure",
			"name": "sendOnFailure",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "sendOnFailure",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Try Notification Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Send On Success",
			"name": "sendOnSuccess",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "sendOnSuccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Try Notification Config"
					]
				}
			}
		},
		{
			"displayName": "Slack Configuration",
			"name": "slackConfiguration",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "slackConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Try Notification Config"
					]
				}
			}
		},
];
