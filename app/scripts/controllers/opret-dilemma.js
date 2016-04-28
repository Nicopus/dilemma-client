'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:OpretDilemmaCtrl
 * @description
 * # OpretDilemmaCtrl
 * Controller of the dilemmaApp
 */
 angular.module('dilemmaApp')
 .controller('OpretDilemmaCtrl', function ($scope, $http, $timeout, localStorageService, Upload) {
 //
   $scope.test = localStorageService.get('tok');

   $scope.dilemma = {
     quest : 'spg',
     desc : 'd',
     alvor : 2,
     p_answers : [
       {text : 'test'},
       {text : 'test2'}
     ]
   };

   $scope.create = function(dilemma){
     var files = [];
     if($scope.picfile1){
       files.push($scope.picfile1)
     }
     if($scope.picfile2){
       files.push($scope.picfile2)
     }
     if($scope.picfile3){
       files.push($scope.picfile3)
     }
     if($scope.picfile4){
       files.push($scope.picfile5)
     }
     if($scope.picfile5){
       files.push($scope.picfile5)
     }

     Upload.upload({
       url : 'http://localhost:3001/d/opret',
       headers : {'token' : localStorageService.get('tok')},
       data : {
         file : files,
         "token" : localStorageService.get('tok'),
         "name" : dilemma.quest,
         "desc" : dilemma.desc,
         "alvor" : dilemma.alvor,
         "p_answers" : [{"text" : "her2"}, {"text" : "her3"}]
       }
     }).then(function (resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      }, function (resp) {
          console.log('Error status: ' + resp.status);
      }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });

   };

 });
