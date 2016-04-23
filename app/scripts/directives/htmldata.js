'use strict';

/**
 * @ngdoc directive
 * @name dilemmaApp.directive:htmlData
 * @description
 * # htmlData
 */
angular.module('dilemmaApp')
  .directive('htmlData', function ($compile) {
    return {
      restrict: 'A',
      replace: true,
      link: function (scope, ele, attrs) {
        scope.$watch(attrs.dynamic, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }
    };
  });
