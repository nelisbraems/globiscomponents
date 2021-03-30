{
	"name": "globiscomponents-Text-Box",
	"displayName": "TextBox",
	"version": 1,
	"definition": "globiscomponents/TextBox/TextBox.js",
	"libraries": [],
	"model":
	{
		"dataProviderID": 
		{
			"type": "dataprovider",
			"pushToServer": "allow",
			"ondatachange": 
			{
				"onchange": "onDataChangeMethodID"
			}
		},

		"enabled": 
		{
			"type": "enabled",
			"blockingOn": false,
			"default": true,
			"for": 
			[
				"dataProviderID",
				"onDataChangeMethodID"
			]
		},
		"readOnly": 
		{
			"type": "protected",
			"blockingOn": true,
			"default": false,
			"for": 
			[
				"dataProviderID",
				"onDataChangeMethodID"
			],

			"tags": 
			{
				"scope": "runtime"
			}
		},

		"editable": 
		{
			"type": "protected",
			"blockingOn": false,
			"default": true,
			"for": 
			[
				"dataProviderID",
				"onDataChangeMethodID"
			]
		},
		"visible": 
		{
			"type": "visible"
		}
	},
	"handlers":
	{
		"onDataChangeMethodID": 
		{
			"returns": "boolean",
			"parameters": 
			[
				{
					"name": "oldValue",
					"type": "${dataproviderType}"
				},

				{
					"name": "newValue",
					"type": "${dataproviderType}"
				},

				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		}
	}
}