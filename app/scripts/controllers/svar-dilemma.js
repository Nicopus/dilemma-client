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
       getStat();
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


 	var voted = false;

 	const after_vote_html =
 	'<div class="progress">' +
 	'<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 10%;">' +
 	'<span>Ja (10%)</span>' +
 	'</div>' +
 	'</div>' +
 	'<div class="progress">' +
 	'<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">' +
 	'<span>Nej (50%)</span>' +
 	'</div>' +
 	'</div>' +
 	'<div class="progress">' +
 	'<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 15%;">' +
 	'<span>Måske (15%)</span>' +
 	'</div>' +
 	'</div>' +
 	'<div class="progress">' +
 	'<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 2%;">' +
 	'<span>Senere (2%)</span>' +
 	'</div>' +
 	'</div>' +
 	'<div class="progress">' +
 	'<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 28%;">' +
 	'<span>Aldrig (28%)</span>' +
 	'</div>' +
 	'</div>';

 	const before_vote_html =
 	'<div class="row grid5">' +
 	'<div class="col-md-1 text-center">' +
 	'<button type="button" ng-click="vote()" class="btn btn-lg btn-primary" min>Ja</button>' +
 	'</div>' +
 	'<div class="col-md-1 text-center">' +
 	'<button type="button" ng-click="vote()" class="btn btn-lg btn-primary">Nej</button>' +
 	'</div>' +
 	'<div class="col-md-1 text-center">' +
 	'<button type="button" ng-click="vote()" class="btn btn-lg btn-primary">Måske</button>' +
 	'</div>' +
 	'<div class="col-md-1 text-center">' +
 	'<button type="button" ng-click="vote()" class="btn btn-lg btn-primary">Aldirg</button>' +
 	'</div>' +
 	'<div class="col-md-1 text-center">' +
 	'<button type="button" ng-click="vote()" class="btn btn-lg btn-primary">Senere</button>' +
 	'</div>' +
 	'</div>';

 	if (!voted) {
 		$scope.context = before_vote_html;
 	} else {
 		$scope.context = after_vote_html;
 	}





 });
