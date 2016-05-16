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
    'LocalStorageModule',
    'ngFileUpload'
  ])
  .constant('CONF', {
    rest_server : "http://ec2-52-33-27-92.us-west-2.compute.amazonaws.com:3001",
    rest_call_login : "/login",
    rest_call_getAll : "/r/getall",
    rest_call_me : "/d/me",
    rest_call_form_create : "/d/opret",
    rest_call_get : "/r/get/",
    rest_call_getstat : "/r/getstat/",
    rest_call_already : "/d/already/",
    rest_call_answer : "/d/answer/"
  })
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
      .when('/svar/:param', {
        templateUrl: 'views/svar-dilemma.html',
        controller: 'SvarDilemmaCtrl',
        controllerAs: 'svarDilemma'
      })
      .when('/me', {
        templateUrl: 'views/me.html',
        controller: 'MeCtrl',
        controllerAs: 'me'
      })
      .when('/view', {
        templateUrl: 'views/view.html',
        controller: 'ViewCtrl',
        controllerAs: 'view'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
