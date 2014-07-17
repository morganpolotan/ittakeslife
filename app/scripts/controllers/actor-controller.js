'use strict';

/**
 * @ngdoc function
 * @name yolifeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yolifeApp
 */
angular.module('yolifeApp')
  .controller('ActorCtrl', function ($scope, $http, $routeParams, ActorService) {
  	ActorService.getActor($routeParams.actorName).then(function (actor) {
  		$scope.actor = actor;
  	})
  });
