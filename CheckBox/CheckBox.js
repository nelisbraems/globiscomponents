angular.module('globiscomponentsCheckBox',['servoy', 'dx']).directive('globiscomponentsCheckBox', function($timeout, $sabloConstants) {  
    return {
      restrict: 'E',
      scope: {
			model: '=svyModel',
			model: "=svyModel",
			handlers: "=svyHandlers",
			api: "=svyApi",
			svyServoyapi: "="
		},
		controller: function($scope, $element, $attrs) {
			$scope.model.checkboxValue = $scope.model.dataProviderID;
			if(!$scope.model.editable){
				$scope.model.required = false;
			}
			//create JSEvent
			var jsEvent = { svyType: 'JSEvent' };
			
  	  
			$scope.checkBox = {
				checkBoxOptions: {
					focusStateEnabled: $scope.model.focusStateEnabled,
					hoverStateEnabled: $scope.model.hoverStateEnabled,
					inputAttr: { 'sablo-tabseq': 'model.tabSeq'},				
					onValueChanged: function(e) {
						if(e.value)
							hideRequiredStyling();
						
						if(!e.event)
						{
							return;
						}
						if($scope.model.findmode
						|| $scope.model.threeStates)
						{
							if ($scope.skipOnValueChanged) {
								$scope.skipOnValueChanged = false;
							}
							else if (e.component.setUndefinedNextTime) {
								e.component.setUndefinedNextTime = false;
								$scope.skipOnValueChanged = true;
								e.component.option("value", undefined);
								return;
							}
							else if (e.value === false) {
								e.component.setUndefinedNextTime = true;
							}
						}
						var attrName = $("data-globtecdevexcomponents-check-box").has(e.element).attr("name");
						jsEvent.elementName = attrName ? attrName : null;
						if (e.value === undefined)
						{
							$scope.model.dataProviderID = null;
							$scope.svyServoyapi.apply('dataProviderID')
						}
						else if (e.value === false) {
							$scope.model.dataProviderID = 0;
							$scope.svyServoyapi.apply('dataProviderID')
						}
						else if (e.value === true) {
							$scope.model.dataProviderID = 1;
							$scope.svyServoyapi.apply('dataProviderID')
						}

						if ($scope.handlers.onDataChangeMethodID != undefined) {
							var _oldValue = !e.value ? 1 : 0
							var _newValue = e.value ? 1 : 0
							$scope.handlers.onDataChangeMethodID(_oldValue, _newValue, jsEvent).then(function(result) {
								if (result != null || result != undefined || result != "") {
									$scope.checkboxValue = $scope.model.dataProviderID;
								}
							});
						}
					},
					onInitialized: function (e) { 
					  $timeout(function() {
							setTabIndex(document.getElementById($scope.model.svyMarkupId));
	    			  }, 1000)
			        },
					validationRules: [],
					bindingOptions: {
						rtlEnabled: 'model.rtlEnabled',
						hint: 'model.toolTipText',
						text: 'model.text',
						disabled: '!model.enabled',
						visible: 'model.visible',							
						readOnly: 'model.readOnly || !model.editable'
					}
				}
			}

			if ($scope.model.visible == false) {
				$element.parents('.form-group > div[class*="col-"]').first().addClass('hidden');
			}

			$scope.api.setValue = function(value) {
				if (value != $scope.model.dataProviderID) {
					$scope.model.dataProviderID = value;
					$scope.model.checkboxValue = value;
				}
			}

			$scope.api.requestFocus = function() {
				if($element.is(":visible"))
				{
					document.getElementById($scope.model.svyMarkupId).focus();
				}
				else{
					var _stopWatching = $scope.$watch(function() { return angular.element($element).is(':visible') }, function() {
						if($element.is(":visible")){
							document.getElementById($scope.model.svyMarkupId).focus();
							_stopWatching();
						}
					});
				}
			}

			$scope.api.getValue = function() {
				return $scope.model.dataProviderID;
			}
			$scope.api.checkValidation = function() {
				if ($scope.model.required) {
					if ($scope.model.dataProviderID == 0 || $scope.model.dataProviderID == undefined) {
						$scope.model.isValid = false;
						return true;
					} else {
						$scope.model.isValid = true;
						return false;
					}
				} else {
					$scope.model.isValid = true;
					return false;
				}
			}

			
			function setTabIndex(object) {
				if(!$scope.model.editable || !$scope.model.enabled || $scope.model.readOnly) {
					$(object).attr('tabindex', -1);
					return
				}
				var tabPane = $(object).closest('div[class^="tabpane"]').length;
				var accordian = $(object).closest('div[class^="tabaccordian"]').length;
				var modalwindow = $(object).closest('div[class^="window-body"]').length;
				if (tabPane > 0) {
					var elem = $(object).closest('div[class^="tabpane"]');
					var tablength= $(object).parents('div[class^="tabpane"]').length;
					for (i = 0; i < tablength; i++) { 
						if(tablength == 2)
						{
							if($scope.model.tabSeq > 0)
							{
								var val = ($(elem).attr("sablo-tabseq-config").substring(1,$(elem).attr("sablo-tabseq-config").length - 1)).split('reservedGap:')
								$(object).attr('tabindex', ($scope.model.tabSeq + val[1] * 10));
							}
						}
						else
						{
							var val = parseInt($(elem).attr("sablo-tabseq-config").substring(1, $(elem).attr("sablo-tabseq-config").length - 1).split('reservedGap:')[1])
							$(object).attr('tabindex', ($scope.model.tabSeq + val));
								
						}

					}
					
				} else if (accordian > 0) {
					var elem = $(object).closest('div[class^="tabaccordian"]');
					var val = parseInt($(elem).attr("sablo-tabseq-config").substring(1, $(elem).attr("sablo-tabseq-config").length - 1).split('reservedGap:')[1])
					$(object).attr('tabindex', ($scope.model.tabSeq + val));
				}else if (modalwindow > 0){
					var _tabseqval = $(object).closest('div[sablo-tabseq]').attr('sablo-tabseq');
					$(object).attr('tabindex', (parseInt(_tabseqval)*100) + $scope.model.tabSeq);
				}  else {
					$(object).attr('tabindex', $scope.model.tabSeq);
				}
			}

			$scope.api.getDataProviderID = function() {
				return $scope.model.dataProviderID;
			}

			

			$scope.api.setRequired = function(value) {
				if ($scope.model.editable && !$scope.model.readOnly) {
					$scope.model.required = value;
					
					if($scope.model.forceRequired && value === true){
						$scope.model.forceRequired = false;
					}
					
					// setRequired means we only need to show the invalid styling if the field is empty
					if(value){
						value = ($scope.model.dataProviderID === "" || $scope.model.dataProviderID == null || $scope.model.dataProviderID == undefined || $scope.model.dataProviderID == 0 || $scope.model.dataProviderID == false);							
					}
					
					setRequiredStyling(value);
				} else if(value === false){
					setRequiredStyling(value);
				}
			}
			
			$scope.api.setForceRequired = function(value) {
				if ($scope.model.editable && !$scope.model.readOnly) {						
					if($scope.model.editable){
						$scope.model.forceRequired = value;
						setRequiredStyling(value);
					}
				} else if(value === false){
					setRequiredStyling(value);
				}
			}
			
			function setRequiredStyling(value){
				if(!$scope.model.validationLevel)
					$scope.model.validationLevel = "invalid-high";
				if(value)
					showRequiredStyling();
				else
					hideRequiredStyling();
			}
			
			function showRequiredStyling(){					
				$("#"+$scope.model.svyMarkupId ).addClass("dx-invalid " + $scope.model.validationLevel);
				var _messageElement = $("#"+$scope.model.svyMarkupId+"Message")
				var _messageText = $scope.model.requiredMessage ? $scope.model.requiredMessage : "Field is required"
				if(!_messageElement.length){
					var _messageHTML = $("<span id='"+$scope.model.svyMarkupId+"Message' class='validation-invalid-message'></span>").text(_messageText);
					$("#"+$scope.model.svyMarkupId ).after(_messageHTML);
				} else {
					_messageElement.text(_messageText)
				}
			}
			
			function hideRequiredStyling(){
				if(!$scope.model.forceRequired){
					$("#"+$scope.model.svyMarkupId ).removeClass("dx-invalid " + $scope.model.validationLevel);	
					$("#"+$scope.model.svyMarkupId+"Message").remove();
				}
			}
			
			$scope.api.setValidationMessage = function(message) {
				if($scope.model.editable && !$scope.model.readOnly){
					var parsedMessage = JSON.parse(message);
					$scope.model.requiredMessage = parsedMessage.message;
					$scope.validationLevel = 'invalid-' + parsedMessage.level;
					$("#"+$scope.model.svyMarkupId ).removeClass("invalid-high");
				}
			}	
			
			$scope.api.getRequired = function(value) {
				return $scope.model.required;
			}
			// set label value
			$scope.api.getLabelText = function() {
				return $scope.model.labelDetails.labelText;
			}
			// get label value
			$scope.api.setLabelText = function(value) {
				$scope.model.labelDetails.labelText = value;
			}
			
			setCheckboxValue();
			
			function setCheckboxValue(){
				if($scope.model.dataProviderID == null)
				{
					$scope.model.checkboxValue = undefined;
				}
				else if(!$scope.model.findmode)
				{
					$scope.model.checkboxValue = $scope.model.dataProviderID
				}
			}

			$scope.onLabelClick = function($event){
				// check if ctrl+click has been executed
				if($event.ctrlKey || $event.metaKey){
					if($scope.handlers.onLabelCtrlClickMethodID){
						$scope.handlers.onLabelCtrlClickMethodID($event);
					}
				}
				else if($scope.handlers.onLabelActionMethodID){
					$scope.handlers.onLabelActionMethodID($event);
				}					
			}

			Object.defineProperty($scope.model, $sabloConstants.modelChangeNotifier, {
	    		  configurable: true,
	    		  value: function(property, newValue) {
	    			  switch (property) {
	    			  case "findmode":
		    			  if($scope.model.findmode)
							{
								$scope.skipOnValueChanged = true;
								$scope.model.checkboxValue = undefined;
							}
	    				  break;
	    			  case "dataProviderID":
	    			  	  setCheckboxValue();
	    				  break;
	    			  case "readOnly":
		    			  $timeout(function() {
								setTabIndex(document.getElementById($scope.model.svyMarkupId));
		    			  }, 1000)
						  
							if($scope.model.readOnly){					
								// Set all fields to be valid when form is readOnly
								if($scope.model.required || $scope.model.forceRequired){
									$scope.validationLevel = "";
									$scope.model.required = false;
									$scope.model.forceRequired = false;
									setRequiredStyling(false);
								}
							}
							
	    				  break;
	    			  case "visible":
		    			  if (newValue == false) {
								$element.parents('.form-group > div[class*="col-"]').first().addClass('hidden');
							} else {
								$element.parents('.form-group > div[class*="col-"]').first().removeClass('hidden');
								$timeout(function() {
										var checkObj = $('#' + $scope.model.svyMarkupId).find('.dx-checkbox-container');											
									}, 50)
							}
	    				  break;
	    			  }
	    		  }
	    	  });				
		},
      templateUrl: 'globiscomponents/CheckBox/CheckBox.html'
    };
  })