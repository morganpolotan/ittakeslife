"use strict";

/**
 * @ngdoc function
 * @name yolifeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yolifeApp
 */
angular.module("yolifeApp")
  .controller("MainCtrl", function ($scope) {
    $scope.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma"
    ];
  });
