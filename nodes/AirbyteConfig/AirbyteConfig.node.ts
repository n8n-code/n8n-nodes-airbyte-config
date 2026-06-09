import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { attemptDescription } from './resources/attempt';
import { internalDescription } from './resources/internal';
import { workspaceDescription } from './resources/workspace';
import { sourceDefinitionDescription } from './resources/source-definition';
import { sourceDefinitionSpecificationDescription } from './resources/source-definition-specification';
import { sourceDescription } from './resources/source';
import { destinationDefinitionDescription } from './resources/destination-definition';
import { destinationDefinitionSpecificationDescription } from './resources/destination-definition-specification';
import { destinationDescription } from './resources/destination';
import { connectionDescription } from './resources/connection';
import { destinationOauthDescription } from './resources/destination-oauth';
import { healthDescription } from './resources/health';
import { jobsDescription } from './resources/jobs';
import { logsDescription } from './resources/logs';
import { notificationsDescription } from './resources/notifications';
import { openapiDescription } from './resources/openapi';
import { operationDescription } from './resources/operation';
import { schedulerDescription } from './resources/scheduler';
import { sourceOauthDescription } from './resources/source-oauth';
import { webBackendDescription } from './resources/web-backend';
import { stateDescription } from './resources/state';

export class AirbyteConfig implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'airbyte-config',
		name: 'N8nDevAirbyteConfig',
		icon: { light: 'file:./airbyte-config.svg', dark: 'file:./airbyte-config.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Airbyte Configuration API',
		defaults: { name: 'airbyte-config' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAirbyteConfigApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Attempt",
					"value": "Attempt",
					"description": "Interactions with attempt related resources."
				},
				{
					"name": "Internal",
					"value": "Internal",
					"description": ""
				},
				{
					"name": "Workspace",
					"value": "Workspace",
					"description": "Workspace related resources."
				},
				{
					"name": "Source Definition",
					"value": "Source Definition",
					"description": "SourceDefinition related resources."
				},
				{
					"name": "Source Definition Specification",
					"value": "Source Definition Specification",
					"description": "SourceDefinition specification related resources."
				},
				{
					"name": "Source",
					"value": "Source",
					"description": "Source related resources."
				},
				{
					"name": "Destination Definition",
					"value": "Destination Definition",
					"description": "DestinationDefinition related resources."
				},
				{
					"name": "Destination Definition Specification",
					"value": "Destination Definition Specification",
					"description": "DestinationDefinitionSpecification related resources."
				},
				{
					"name": "Destination",
					"value": "Destination",
					"description": "Destination related resources."
				},
				{
					"name": "Connection",
					"value": "Connection",
					"description": "Connection between sources and destinations."
				},
				{
					"name": "Destination Oauth",
					"value": "Destination Oauth",
					"description": "Source OAuth related resources to delegate access from user."
				},
				{
					"name": "Health",
					"value": "Health",
					"description": "Healthchecks"
				},
				{
					"name": "Jobs",
					"value": "Jobs",
					"description": ""
				},
				{
					"name": "Logs",
					"value": "Logs",
					"description": ""
				},
				{
					"name": "Notifications",
					"value": "Notifications",
					"description": ""
				},
				{
					"name": "Openapi",
					"value": "Openapi",
					"description": ""
				},
				{
					"name": "Operation",
					"value": "Operation",
					"description": ""
				},
				{
					"name": "Scheduler",
					"value": "Scheduler",
					"description": ""
				},
				{
					"name": "Source Oauth",
					"value": "Source Oauth",
					"description": "Source OAuth related resources to delegate access from user."
				},
				{
					"name": "Web Backend",
					"value": "Web Backend",
					"description": "Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not\nguaranteeing any backwards compatibility.\n"
				},
				{
					"name": "State",
					"value": "State",
					"description": "Interactions with state related resources."
				}
			],
			"default": ""
		},
		...attemptDescription,
		...internalDescription,
		...workspaceDescription,
		...sourceDefinitionDescription,
		...sourceDefinitionSpecificationDescription,
		...sourceDescription,
		...destinationDefinitionDescription,
		...destinationDefinitionSpecificationDescription,
		...destinationDescription,
		...connectionDescription,
		...destinationOauthDescription,
		...healthDescription,
		...jobsDescription,
		...logsDescription,
		...notificationsDescription,
		...openapiDescription,
		...operationDescription,
		...schedulerDescription,
		...sourceOauthDescription,
		...webBackendDescription,
		...stateDescription
		],
	};
}
