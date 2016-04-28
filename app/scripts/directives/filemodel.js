'use strict';

/**
 * @ngdoc directive
 * @name dilemmaApp.directive:fileModel
 * @description
 * # fileModel
 */
angular.module('dilemmaApp')
  .directive('fileModel',['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }]);
