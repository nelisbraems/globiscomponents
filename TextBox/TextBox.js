angular.module('globiscomponentsTextBox',['servoy', 'dx']).directive('globiscomponentsTextBox', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
    	  $scope.textBoxOptions = {
    		  bindingOptions: {
					disabled: '!model.enabled',
					visible: 'model.visible',
					readOnly: 'model.readOnly || !model.editable || !model.enabled',
					value: 'model.dataProviderID'
				}
    	  }
      },
      templateUrl: 'globiscomponents/TextBox/TextBox.html'
    };
  })