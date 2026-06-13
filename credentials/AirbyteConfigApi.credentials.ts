import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AirbyteConfigApi implements ICredentialType {
        name = 'N8nDevAirbyteConfigApi';

        displayName = 'Airbyte Config API';

        icon: Icon = { light: 'file:../nodes/AirbyteConfig/airbyte-config.svg', dark: 'file:../nodes/AirbyteConfig/airbyte-config.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://airbyte.local',
                        required: true,
                        placeholder: 'http://airbyte.local',
                        description: 'The base URL of your Airbyte Config API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
