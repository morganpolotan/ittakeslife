"use strict";

/**
 * @ngdoc overview
 * @name yolifeApp
 * @description
 * # yolifeApp
 *
 * Main module of the application.
 */
angular
  .module("yolifeApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch"
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      })
      .when("/:actorName", {
        templateUrl: "views/actor.html",
        controller: "ActorCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
  });
