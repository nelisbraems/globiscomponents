angular.module('globiscomponentsButton',['servoy']).directive('globiscomponentsButton', function($timeout) {  
    return {
      restrict: 'E',
      scope: {
			model: '=svyModel',
			handlers: "=svyHandlers",
			api: "=svyApi"
		},
		controller: function($scope, $element, $attrs) {
			
			var icon = $scope.model.faIcon ? $scope.model.faIcon : $scope.model.icon; 

			$scope.ButtonOptions = {
				type: $scope.model.buttonType,
				icon: icon,
				hint: $scope.model.toolTipText,
				focusStateEnabled: true,
				bindingOptions: {
					disabled: '!model.enabled || model.readOnly',
					text: 'model.text',
					items: 'model.dropDownActions'
				}										
			};
			
			var onClick = function(e) {
				if($scope.handlers.onButtonClicked){
					$scope.handlers.onButtonClicked(e.event, e.event.pageX, e.event.pageY);
				}
			};
			
			var onActionClick = function(e){
				if($scope.handlers.onActionMethodID){
					$scope.handlers.onActionMethodID(e.event, e.itemData ? e.itemData.id : null);
				}
			}
			
			if($scope.model.dropDownActions)
			{
				$scope.ButtonOptions.onButtonClick = onActionClick;
				$scope.ButtonOptions.onItemClick = onActionClick;
				$scope.ButtonOptions.splitButton = true;
				$scope.ButtonOptions.keyExpr = "id";
				$scope.ButtonOptions.displayExpr = "text";

			}
			else{
				$scope.ButtonOptions.onClick = onClick;
			}
			
			$scope.api.requestFocus = function() {
				if($element.is(":visible")){
					$("#" + $scope.model.svyMarkupId + "Button").focus();
				}
				else{						
					var _stopWatching = $scope.$watch(function() { return angular.element($element).is(':visible') }, function() {
						if($element.is(":visible")){
							$("#" + $scope.model.svyMarkupId + "Button").focus();
							_stopWatching();
						}
					});
				}
			}
			$scope.api.getMarkupId = function() {
				return $scope.model.svyMarkupId;
			}
			
			function setTabIndex() {
				$("#" + $scope.model.svyMarkupId + "Button").attr('tabindex', $scope.model.tabSeq);
			}
			$timeout(function() {
				setTabIndex();
			});
		},
      templateUrl: 'globiscomponents/Button/Button.html'
    };
  })