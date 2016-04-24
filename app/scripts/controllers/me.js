'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:MeCtrl
 * @description
 * # MeCtrl
 * Controller of the dilemmaApp
 */
angular.module('dilemmaApp')
  .controller('MeCtrl', function ($scope, $http, localStorageService) {

    //$scope.user = {name: localStorageService.get('tok')};

    $http({
      url : "http://localhost:3001/d/me",
      method : "GET",
      params : {token : localStorageService.get('tok')}
    })
    .success(function(data, status, headers, config){
      $scope.user = {name : JSON.stringify(data)};
    })
    .error(function(data, status, headers, config){

    });
  });
