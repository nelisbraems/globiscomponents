{
	"name": "globiscomponents-Button",
	"displayName": "Button",
	"version": 1,
	"definition": "globiscomponents/Button/Button.js",
	"libraries": [],
	"model": 
	{
		"size": 
		{
			"type": "dimension",
			"default": 
			{
				"width": 110,
				"height": 35
			}
		},

		"text": 
		{
			"type": "tagstring",
			"initialValue": "Button",
			"tags": 
			{
				"directEdit": "true"
			}
		},

		"visible": {
			"type": "visible"
		},
		"enabled": 
		{
			"type": "enabled",
			"blockingOn": false,
			"default": true,
			"for": 
			[
				"onActionMethodID",
				"onDoubleClickMethodID",
				"onRightClickMethodID"
			]
		},
		"readOnly": 
		{
			"type": "protected",
			"blockingOn": true,
			"default": false,
			"for": 
			[
				"onActionMethodID",
				"onDoubleClickMethodID",
				"onRightClickMethodID"
			],

			"tags": 
			{
				"scope": "runtime"
			}
		},
		"icon": 
		{
			"type": "media"
		},
		"faIcon":{
			"type": "string"
		},
		"toolTipText": 
		{
			"type": "tagstring",
			"default": ""
		},

		"buttonType": 
		{
			"type": "string",
			"tags": 
			{
				"scope": "design"
			},

			"values": 
			[
				"normal",
				"success",
				"default",
				"danger",
				"back"
			],
			"default": "normal"
		},

		"styleClass": 
		{
			"type": "styleclass",
			"tags": 
			{
				"scope": "design"
			},

			"default": "",
			"values": 
			[
				
			]
		},

		"tabSeq": 
		{
			"type": "tabseq",
			"tags": 
			{
				"scope": "design"
			}
		},

		"Id": 
		{
			"type": "string"
		},
		"css":{
			"type": "string"
		},
		"dropDownActions":
		{
			"type": "dropDownAction[]"
		}
	},

	"handlers": 
	{
		"onActionMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				},
				{
					"name": "id",
					"type": "string"
				}
			]
		},

		"onDoubleClickMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},

		"onRightClickMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},
		"onButtonClicked": 
		{		   
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				},
				{
					"name": "pageX",
					"type": "int"
				},

				{
					"name": "pageY",
					"type": "int"
				}
			]
		}
	},

	"api": 
	{
		"requestFocus": 
		{
			"delayUntilFormLoads": true,
			"discardPreviouslyQueuedSimilarCalls": true
		},

		"getMarkupId": 
		{
			"returns": "string"
		}
	},
	"types":
	{
		"dropDownAction":
		{
			"id":
			{
				"type": "string"
			},
			"text":
			{
				"type": "tagstring"
			},
			"icon":
			{
				"type": "string"
			}
		}
	}
}