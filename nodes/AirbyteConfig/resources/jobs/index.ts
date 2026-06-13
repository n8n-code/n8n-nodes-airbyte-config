import type { INodeProperties } from 'n8n-workflow';

export const jobsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					]
				}
			},
			"options": [
				{
					"name": "Cancel Job",
					"value": "Cancel Job",
					"action": "Cancels a job",
					"description": "Cancels a job",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/cancel"
						}
					}
				},
				{
					"name": "Get Job Info",
					"value": "Get Job Info",
					"action": "Get information about a job",
					"description": "Get information about a job",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/get"
						}
					}
				},
				{
					"name": "Get Job Debug Info",
					"value": "Get Job Debug Info",
					"action": "Gets all information needed to debug this job",
					"description": "Gets all information needed to debug this job",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/get_debug_info"
						}
					}
				},
				{
					"name": "Get Last Replication Job",
					"value": "Get Last Replication Job",
					"action": "Get Last Replication Job",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/get_last_replication_job"
						}
					}
				},
				{
					"name": "Get Job Info Light",
					"value": "Get Job Info Light",
					"action": "Get information about a job excluding attempt info and logs",
					"description": "Get information about a job excluding attempt info and logs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/get_light"
						}
					}
				},
				{
					"name": "Get Attempt Normalization Statuses For Job",
					"value": "Get Attempt Normalization Statuses For Job",
					"action": "Get normalization status to determine if we can bypass normalization phase",
					"description": "Get normalization status to determine if we can bypass normalization phase",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/get_normalization_status"
						}
					}
				},
				{
					"name": "List Jobs For",
					"value": "List Jobs For",
					"action": "Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.",
					"description": "Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/jobs/list"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/jobs/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Cancel Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Cancel Job"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/jobs/get",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Job Info"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Job Info"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/jobs/get_debug_info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Job Debug Info"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Job Debug Info"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/jobs/get_last_replication_job",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Last Replication Job"
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
						"Jobs"
					],
					"operation": [
						"Get Last Replication Job"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/jobs/get_light",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Job Info Light"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Job Info Light"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/jobs/get_normalization_status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Attempt Normalization Statuses For Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Attempt Normalization Statuses For Job"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/jobs/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"List Jobs For"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Config ID",
			"name": "configId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "configId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"List Jobs For"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Config Types",
			"name": "configTypes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "configTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"List Jobs For"
					]
				}
			}
		},
		{
			"displayName": "Including Job ID",
			"name": "includingJobId",
			"type": "number",
			"default": 0,
			"description": "If the job with this ID exists for the specified connection, returns the number of pages of jobs necessary to include this job. Returns an empty list if this job is specified and cannot be found in this connection.",
			"routing": {
				"send": {
					"property": "includingJobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"List Jobs For"
					]
				}
			}
		},
		{
			"displayName": "Pagination",
			"name": "pagination",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pagination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"List Jobs For"
					]
				}
			}
		},
];
