'use strict';

/**
 * @ngdoc function
 * @name simple-rss-feed.controller:SideBarCtrl
 * @description
 * # SideBarCtrl
 * Controller of the simple-rss-feed
 */
angular.module('simple-rss-feed')
  .controller('SideBarCtrl', ['$scope', 'urlSearchService', function ($scope, urlSearchService) {
  	$scope.search = {};
  	$scope.urls = urlSearchService.urls;

  	$scope.submit = function() {
  		urlSearchService.addUrl($scope.search.url);
  	}

  	$scope.remove = function(url) {
  		urlSearchService.removeUrl(url);
  	}

  }])
  .factory('urlSearchService', ['$localStorage', function ($localStorage) {
  	var urls = $localStorage.urls;
  	var selectedUrl = {};

  	function hasUrl(url) {
  		return urls.hasOwnProperty(url);
  	}

  	function getAnyUrl() {
  		for (var url in urls) {
  			if(urls.hasOwnProperty(url) ) {
  				return url;
  			} 
  		}

  		return "";
  	}

  	function setSelectedUrl(url) {
  		selectedUrl.url = url;
  	}

  	var removeUrl = function(url){
  		if(hasUrl(url)) {
  			delete urls[url];

  			if(selectedUrl.url === url) {
  				setSelectedUrl(getAnyUrl());
  			}
  		}
  	}

  	var addUrl = function(url) {
  		if (!url || hasUrl(url)) return;
  		urls[url] = url;
  		setSelectedUrl(url);
  	};

  	var getSelectedUrl = function(){
  		return selectedUrl.url;
  	}

  	return {
  		addUrl: addUrl, 
  		removeUrl: removeUrl, 
  		urls: urls,
  		getSelectedUrl: selectedUrl
  	};
  }]);
