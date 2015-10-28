'use strict';

/**
 * @ngdoc function
 * @name simpleRssFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleRssFeedApp
 */
angular.module('simple-rss-feed')
  .controller('MainCtrl', ['$scope', '$stateParams', 'uriParserService', 
   function ($scope, $stateParams, uriParserService) {
   	if($stateParams.url) {
   		var decodedUri = uriParserService.decode($stateParams.url);
   		$scope.selectedUrl = decodedUri;
   	}
  }]);
