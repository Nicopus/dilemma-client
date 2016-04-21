'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:OpretDilemmaCtrl
 * @description
 * # OpretDilemmaCtrl
 * Controller of the dilemmaApp
 */
 angular.module('dilemmaApp')
 .controller('OpretDilemmaCtrl', function ($scope, $http) {
 	$scope.opretDilemma = function(dilemma){
 		$http.post("http://localhost:3001/d/opret", {
 				"name" : dilemma.quest,
 				"desc" : dilemma.des,
 				"alvor" : 2,
 				"p_answers" : [{"text" : dilemma.opt1}, {"text" :dilemma.opt2}]
 		}).success(function(data, status, headers, config){

 		}).error(function(data, status, headers, config){

 		})
 	};

 });

