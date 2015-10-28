'use strict';

/**
 * @ngdoc function
 * @name simpleRssFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleRssFeedApp
 */
angular.module('simple-rss-feed')
  .controller('MainCtrl', ['$scope', 'urlSearchService', function ($scope, urlSearchService) {
    $scope.selectedUrl = urlSearchService.getSelectedUrl;
  }]);
