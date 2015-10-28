'use strict';

/**
 * @ngdoc function
 * @name simpleRssFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleRssFeedApp
 */
angular.module('simple-rss-feed')
  .controller('MainCtrl', ['$scope', '$stateParams', 'urlSearchService',
   function ($scope, $stateParams, urlSearchService) {
   	console.log($stateParams.url);
    $scope.selectedUrl = $stateParams.url;
  }]);
