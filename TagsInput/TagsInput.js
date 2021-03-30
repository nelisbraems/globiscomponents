angular.module('globiscomponentsTagsInput',['servoy']).directive('globiscomponentsTagsInput', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'globiscomponents/TagsInput/TagsInput.html'
    };
  })