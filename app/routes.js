'use strict';

angular.module('simple-rss-feed').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	function($urlRouterProvider, $stateProvider, $locationProvider){
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/layout.html',
			controller: 'MainCtrl'
		})
		.state('urlSelected', {
			url: '/:url',
			templateUrl: 'views/layout.html',
			controller: 'MainCtrl'
		});
		$urlRouterProvider.otherwise("/");
}]);