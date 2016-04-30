'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:OpretDilemmaCtrl
 * @description
 * # OpretDilemmaCtrl
 * Controller of the dilemmaApp
 */
 angular.module('dilemmaApp')
 .controller('OpretDilemmaCtrl', function ($window, $scope, $http, $timeout, localStorageService, Upload) {
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
   var options = [];

   if($scope.dilemmaForm.opt1.$valid) {
    options.push({"text" : dilemma.opt1});
    if($scope.picfile1) {
      files.push($scope.picfile1);

    }
  }
  if($scope.dilemmaForm.opt2.$valid) {
    options.push({"text" : dilemma.opt2});
    if($scope.picfile2) {
      files.push($scope.picfile2);

    }
  }
  if($scope.dilemmaForm.opt3.$valid) {
    options.push({"text" : dilemma.opt3});
    if($scope.picfile3) {
      files.push($scope.picfile3);

    }
  }
  if($scope.dilemmaForm.opt4.$valid) {
    options.push({"text" : dilemma.opt4});
    if($scope.picfile4) {
      files.push($scope.picfile4);

    }
  }
  if($scope.dilemmaForm.opt5.$valid) {
    options.push({"text" : dilemma.opt5});
    if($scope.picfile5) {
      files.push($scope.picfile5);

    }
  }

  //felter skal udfyldes. -> skal også gøres server-side
  if(options.length < 2){
    return;
  }


  Upload.upload({
   url : 'http://localhost:3001/d/opret',
   headers : {'token' : localStorageService.get('tok')},
   transformRequest: angular.identity,
   objectKey : '.k',
   arrayKey : '[i]',
   data : {
     file : files,
     "token" : localStorageService.get('tok'),
     "name" : dilemma.quest,
     "desc" : dilemma.desc,
     "alvor" : dilemma.alvor,
     "p_answers" : angular.toJson(options)
   }
 }).then(function (resp) {
   $scope.test = resp;
   if(resp.data.success){
    $window.location.href = '#/';
   }
}, function (resp) {
  console.log('Error status: ' + resp.status);
}, function (evt) {
  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
  console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
});

};

});
