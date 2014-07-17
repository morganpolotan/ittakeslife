'use strict';

/**
 * @ngdoc overview
 * @name yolifeApp
 * @description
 * # yolifeApp
 *
 * Main module of the application.
 */
angular
  .module('yolifeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:actorName', {
        templateUrl: 'views/actor.html',
        controller: 'ActorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });




  // angular.module("appName", ["ngRoute"])
  //   .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  //   $routeProvider
  //     .when("/", {
  //       templateUrl: "partials/home.html",
  //       controller: "HomeCtrl"
  //     })
  //     .when("/:actorName", {
  //       templateUrl: "partials/actor.html",
  //       controller: "ActorCtrl"
  //     })
  //     .otherwise({
  //       redirectTo: "/"
  //     });

  //   $locationProvider.html5Mode(true);
  // }]);

  // angular.module("appName").controller("HomeCtrl", ["$scope", function ($scope) {
    
  // }]);

  // angular.module("appName").controller("ActorCtrl", ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {
  //   console.log($routeParams);

  //   $http.get("/json/terrence-herring.json").success(function (actor) {
  //     $scope.actor = actor;
  //   });
  // }]);
