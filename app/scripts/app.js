'use strict';

/**
 * @ngdoc overview
 * @name dilemmaApp
 * @description
 * # dilemmaApp
 *
 * Main module of the application.
 */
angular
  .module('dilemmaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-bind-html-compile',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/opret-dilemma', {
        templateUrl: 'views/opret-dilemma.html',
        controller: 'OpretDilemmaCtrl',
        controllerAs: 'opretDilemma'
      })
      .when('/om-dilemma', {
        templateUrl: 'views/om-dilemma.html',
        controller: 'OmDilemmaCtrl',
        controllerAs: 'om-dilemma'
      })
      .when('/1', {
        templateUrl: 'views/svar-dilemma.html',
        controller: 'SvarDilemmaCtrl',
        controllerAs: 'svarDilemma'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
