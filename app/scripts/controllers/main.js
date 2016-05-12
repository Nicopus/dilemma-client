'use strict';

/**
 * @ngdoc function
 * @name dilemmaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dilemmaApp
 */
angular.module('dilemmaApp')
  .controller('MainCtrl', function ($scope, $http) {

    var site = '';

    var callback = function (data) {
      var d = angular.fromJson(data);
      $scope.items = d;
      $scope.test = d;
      angular.forEach(d, function(o) {
        site +=createDilemmaHtml(o);
        $scope.test = site;
      });

    };

    // bruges ikke
    var createDilemmaHtml = function (dilemma) {
      var html = '<a href="#" class="list-group-item">'+
      '<div class="row">'+
          '<div class="col-md-1"> '+
              '<h1 class="list-group-item-heading">'+
                  '<span class="label label-gravity' + dilemma.alvor +' label-cirkel">' + dilemma.alvor + '</span>' +
              '</h1>'+
          '</div>'+
          '<div class="col-md-1"></div>'+
          '<div class="col-md-11">'+
              '<h3 class="list-group-item-heading">' + dilemma.name + '</h3>'+
          '</div>'+
          '<div class="col-md-1"></div>'+
          '<div class="col-md-11">'+
              '<p class="list-group-item-text">' + dilemma.desc + '</p>'+
          '</div>'+
      '</div>'+
  '</a>';
  return html;
};


    $http({
      url : "http://localhost:3001/r/getall",
      method : "GET",
      params : {}
    })
    .success(function(data, status, headers, config){
      //$scope.test = JSON.stringify(data);
      callback(data);
    })
    .error(function(data, status, headers, config){

    });
  });
