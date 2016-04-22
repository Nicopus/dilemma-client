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
      $http.post("http://localhost:3001/login", {"user" : user.username, "password" : user.password}).
      success(function(data, status, headers, config){
        var token = data.token;
        if(token){
          $scope.user.username = "correct";
        }
        else {
          $scope.user.username = "wrong";
        }
      }).error(function(data, status, headers, config){
        $scope.user.username = "error";
      })
    };
  });
