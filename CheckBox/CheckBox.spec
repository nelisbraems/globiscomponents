{
	"name": "globiscomponents-Check-Box",
	"displayName": "CheckBox",
	"version": 1,
	"definition": "globiscomponents/CheckBox/CheckBox.js",
	"libraries": [],
		"model": 
	{
	 	"dataProviderID" : { "type":"dataprovider", "pushToServer": "allow", "tags": { "scope" :"design" }},
	    "enabled" : { "type": "enabled", "blockingOn": false, "default": true, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID"] },
	    "readOnly" : { "type": "protected", "blockingOn": true, "default": false, "for": ["dataProviderID","onDataChangeMethodID"], "tags": {"scope":"runtime"} },
	    "findmode" : 
	    { 
	    	"type":"findmode", 
	    	"tags":
	    	{
	    		"scope" : "private"
	    	}, 
	    	"for" :
	    	{
	    		"enabled":true, 
	    		"editable":true
	    	}
	    },
	    "threeStates":
	    {
	    	"type": "boolean",
	    	"default": false,
	    	"tags":
	    	{
	    		"scope": "design"
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
				"onValueChanged"
			],

			"tags": 
			{
				"scope": "runtime"
			}
		},
		"alignment":
		{
			"type": "int",
			"tags": 
			{
				"scope": "design"
			},
			"values":
			[
				{"left": 0},
				{"right": 1}
			],
			"default": 0
		},
		"styleClass": 
		{
			"type": "styleclass",
			"tags": 
			{
				"scope": "design"
			}
		},
		"styleClassDataprovider": 
		{
			"type": "dataprovider"
		},

		"visible": "visible",
		"tabSeq": 
		{
			"type": "tabseq",
			"tags": 
			{
				"scope": "design"
			}
		},

		"required": 
		{
			"type": "boolean",
			"default": false
		},
		"name": 
		{
			"type": "string"
		},
		"validationMessage": 
		{
			"type": "tagstring",
			"default": ""
		},

		"rtlEnabled": 
		{
			"type": "boolean",
			"default": false
		},

		"toolTipText": 
		{
			"type": "tagstring",
			"default": "Checkbox"
		},

		"focusStateEnabled": 
		{
			"type": "boolean",
			"default": true
		},

		"hoverStateEnabled": 
		{
			"type": "boolean",
			"default": true
		},

		"isValid": 
		{
			"type": "boolean",
			"default": true
		},

		"size": 
		{
			"type": "dimension",
			"default": 
			{
				"width": 185,
				"height": 35
			}
		},		

		"text": 
		{
			"type": "string"
		},
		"labelDetails": 
		{
			"type": "label"
		},
		"css":{
			"type": "string"
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

		"onFocusGainedMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},

		"onFocusLostMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},
		"onLabelActionMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},
		"onLabelRightClickMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},
		"onLabelDoubleClickMethodID": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},
		"onLabelCtrlClickMethodID":
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
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

		"setValue": 
		{
			"delayUntilFormLoads": true,
			"parameters": 
			[
				{
					"name": "value",
					"type": "${dataproviderType}"
				}
			]
		},

		"getValue": 
		{
			"returns": "${dataproviderType}"
		},
		"getDataProviderID": 
		{
			"returns": "${dataproviderType}"
		},
		"checkValidation": 
		{
			"returns": "boolean"
		},
		"getRequired":
		{
			"returns" : "boolean"		
		},
		"setRequired": 
		{
			"delayUntilFormLoads": true,
			"parameters": 
			[
				{
					"name": "value",
					"type": "boolean"
				}
			]
		},
		"setForceRequired": 
		{
			"delayUntilFormLoads": true,
			"parameters": 
			[
				{
					"name": "value",
					"type": "boolean"
				}
			]
		},
		"setValidationMessage": 
		{
			"delayUntilFormLoads": true,
			"parameters": 
			[
				{
					"name": "message",
					"type": "string"
				},
				{
					"name": "level",
					"type": "string"
				}
			]
		}
	},
	"types": 
	{
		"label": 
		{
			"labelText": 
			{
				"type": "tagstring",
				"initialValue": "Label",
				"tags": 
				{
					"directEdit": "true"
				}
			},

			"labelOrientation": 
			{
				"type": "string",
				"default": "left-label",
				"values": 
				[
					"left-label",
					"top-label"
				]
			},
			"labelCss":{
				"type": "string"
			},
			"styleClass": 
			{
				"type": "styleclass",
				"tags": 
				{
					"scope": "design"
				},

				"values": 
				[
					
				]
			}
		}
	}
}