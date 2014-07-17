'use strict';

/**
 * @ngdoc function
 * @name yolifeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yolifeApp
 */
angular.module('yolifeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
