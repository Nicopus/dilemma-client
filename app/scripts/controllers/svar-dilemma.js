'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:SvarDilemmaCtrl
 * @description
 * # SvarDilemmaCtrl
 * Controller of the dilemmaApp
 */
 angular.module('dilemmaApp')
 .controller('SvarDilemmaCtrl', function ($scope, $routeParams, $http, localStorageService) {
   var id = $routeParams.param;
   var irl = "http://localhost:3001/r/get/" + id;
   var irl_stat = "http://localhost:3001/r/getstat/" + id;
   var irl_answered = "http://localhost:3001/d/already/" + id;


   var callback = function (data) {
     //$scope.test = data;
     $scope.dilemma = angular.fromJson(data);
     $scope.test = data;
   };
   var callback_stat = function (data) {
     //$scope.test = data;
     $scope.stats = angular.fromJson(data);
   };
   var callback_answered = function (data) {
      $scope.opt = angular.fromJson(data);
      if($scope.opt.answered || $scope.opt.success == false ) {
        getStat();
      }
   };

   $scope.vote = function (answer_id) {
     $scope.test = answer_id;
     $http({
       url : "http://localhost:3001/d/answer/" + id + "/" + answer_id,
       method : "POST",
       params : {},
       data : {
         'token' : localStorageService.get('tok')
       }
     })
     .success(function(data, status, headers, config){
       //$scope.test = JSON.stringify(data);
       getAnswered();
     })
     .error(function(data, status, headers, config){

     });
   };

   var getAnswered = function () {
     $http({
       url : irl_answered,
       method : "GET",
       params : {
         'token' : localStorageService.get('tok')
       }
     })
     .success(function(data, status, headers, config){
       //$scope.test = JSON.stringify(data);
       callback_answered(data);
     })
     .error(function(data, status, headers, config){

     });
   };

   var getStat = function () {
     $http({
       url : irl_stat,
       method : "GET",
       params : {}
     })
     .success(function(data, status, headers, config){
       //$scope.test = JSON.stringify(data);
       callback_stat(data);
     })
     .error(function(data, status, headers, config){

     });
   };

   $http({
     url : irl,
     method : "GET",
     params : {}
   })
   .success(function(data, status, headers, config){
     //$scope.test = JSON.stringify(data);
     callback(data);
   })
   .error(function(data, status, headers, config){

   });

   getAnswered();

 });
