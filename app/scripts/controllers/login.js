'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dilemmaApp
 */
angular.module('dilemmaApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.login = function(user){
      $http({
        method: "POST",
        url: "http://localhost:3001/login",
        data: {
          user : user.username, password : user.password
        }
      }).
      success(function(data, status, headers, config){

      }).error(function(data, status, headers, config){

      })
    };
  });
