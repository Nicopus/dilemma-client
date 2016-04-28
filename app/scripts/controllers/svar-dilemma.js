'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:SvarDilemmaCtrl
 * @description
 * # SvarDilemmaCtrl
 * Controller of the dilemmaApp
 */
 angular.module('dilemmaApp')
 .controller('SvarDilemmaCtrl', function ($scope) {

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

 	$scope.vote = function(){
 		$scope.context = after_vote_html;

 	};



 });

