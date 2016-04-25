'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:OpretDilemmaCtrl
 * @description
 * # OpretDilemmaCtrl
 * Controller of the dilemmaApp
 */
 angular.module('dilemmaApp')
 .controller('OpretDilemmaCtrl', function ($scope, $http, localStorageService) {

   $scope.test = localStorageService.get('tok');

   $scope.create = function(dilemma){
     $http.post("http://localhost:3001/d/opret",{
       "token" : localStorageService.get('tok'),
       "name" : dilemma.quest,
       "desc" : dilemma.desc,
       "alvor" : 2,
       "p_answers" : [{"text" : "her2"}, {"text" : "her3"}]
     })
     .success(function(data, status, headers, config){
       $scope.test = "done";
     })
     .error(function(data, status, headers, config){
       $scope.test = data;

     });
   };

 });
