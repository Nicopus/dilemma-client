'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dilemmaApp
 */
angular.module('dilemmaApp')
  .controller('LoginCtrl', function ($scope, $http, localStorageService) {

    const login_html =
    '<form novalidate class="navbar-form navbar-right">'+
      '<div class="form-group">'+
        '<input type="text" ng-model="user.username" placeholder="Bruggernavn" class="form-control">'+
      '</div>'+
      '<div class="form-group">'+
        '<input type="password" ng-model="user.password" placeholder="Kodeord" class="form-control">'+
      '</div>'+
      '<button type="submit" ng-click="login(user)" class="btn btn-success">Login</button>'+
    '</form>';

    const logout_html =
    '<form novalidate class="navbar-form navbar-right">'+
      '<button type="submit" ng-click="logout()" class="btn btn-success">Logout</button>'+
    '</form>';

    // hvis token er gemt så vises logout;
    if(localStorageService.get('tok')){
      $scope.context = logout_html;
    }
    else {
      $scope.context = login_html;
    }



    $scope.login = function(user){
      $http.post("http://localhost:3001/login", {"user" : user.username, "password" : user.password}).
      success(function(data, status, headers, config){
        var token = data.token;
        if(token){
          $scope.context = logout_html;
          //sletter token hvis den allerede eksistere
          localStorageService.remove('tok');
          //gemmer token
          localStorageService.set('tok', token.toString());
        }
        else {
          $scope.user.username = "wrong";
        }
      }).error(function(data, status, headers, config){
        $scope.user.username = "error";
      });
    };

    $scope.logout = function(){
      // slet token
      $scope.context = login_html;
      localStorageService.remove('tok');
      $scope.user.username = '';
      $scope.user.password = '';
    };

  });
