import type { INodeProperties } from 'n8n-workflow';

export const destinationOauthDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					]
				}
			},
			"options": [
				{
					"name": "Complete Destination O Auth",
					"value": "Complete Destination O Auth",
					"action": "Given a destination def ID generate an access/refresh token etc.",
					"description": "Given a destination def ID generate an access/refresh token etc.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_oauths/complete_oauth"
						}
					}
				},
				{
					"name": "Get Destination O Auth Consent",
					"value": "Get Destination O Auth Consent",
					"action": "Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.",
					"description": "Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_oauths/get_consent_url"
						}
					}
				},
				{
					"name": "Set Instancewide Destination OAuth Params",
					"value": "Set Instancewide Destination OAuth Params",
					"action": "Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.\n",
					"description": "Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/destination_oauths/oauth_params/create"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/destination_oauths/complete_oauth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Complete Destination O Auth"
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
						"Destination OAuth"
					],
					"operation": [
						"Complete Destination O Auth"
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
						"Destination OAuth"
					],
					"operation": [
						"Complete Destination O Auth"
					]
				}
			}
		},
		{
			"displayName": "O Auth Input Configuration",
			"name": "oAuthInputConfiguration",
			"type": "string",
			"default": "",
			"description": "The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.",
			"routing": {
				"send": {
					"property": "oAuthInputConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Complete Destination O Auth"
					]
				}
			}
		},
		{
			"displayName": "Query Params",
			"name": "queryParams",
			"type": "json",
			"default": "{}",
			"description": "The query parameters present in the redirect URL after a user granted consent e.g auth code",
			"routing": {
				"send": {
					"property": "queryParams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Complete Destination O Auth"
					]
				}
			}
		},
		{
			"displayName": "Redirect URL",
			"name": "redirectUrl",
			"type": "string",
			"default": "",
			"description": "When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.",
			"routing": {
				"send": {
					"property": "redirectUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Complete Destination O Auth"
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
						"Destination OAuth"
					],
					"operation": [
						"Complete Destination O Auth"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_oauths/get_consent_url",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Get Destination O Auth Consent"
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
						"Destination OAuth"
					],
					"operation": [
						"Get Destination O Auth Consent"
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
						"Destination OAuth"
					],
					"operation": [
						"Get Destination O Auth Consent"
					]
				}
			}
		},
		{
			"displayName": "O Auth Input Configuration",
			"name": "oAuthInputConfiguration",
			"type": "string",
			"default": "",
			"description": "The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.",
			"routing": {
				"send": {
					"property": "oAuthInputConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Get Destination O Auth Consent"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Redirect URL",
			"name": "redirectUrl",
			"type": "string",
			"default": "",
			"description": "The url to redirect to after getting the user consent",
			"routing": {
				"send": {
					"property": "redirectUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Get Destination O Auth Consent"
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
						"Destination OAuth"
					],
					"operation": [
						"Get Destination O Auth Consent"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/destination_oauths/oauth_params/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Set Instancewide Destination OAuth Params"
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
						"Destination OAuth"
					],
					"operation": [
						"Set Instancewide Destination OAuth Params"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Params",
			"name": "params",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "params",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Destination OAuth"
					],
					"operation": [
						"Set Instancewide Destination OAuth Params"
					]
				}
			}
		},
];
