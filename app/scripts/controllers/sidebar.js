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
  	var calls=0;

  	$scope.submit = function() {
  		urlSearchService.addUrl($scope.search.url);
  	}

  	$scope.remove = function(url) {
  		urlSearchService.removeUrl(url);
  	}

  	$scope.isUrlActive = function(url) {
  		return urlSearchService.getSelectedUrl.url === url;
  	}

  	$scope.selectUrl = function(url) {
  		urlSearchService.selectUrl(url);
  	}

  }])
  .factory('urlSearchService', ['$localStorage', function ($localStorage) {
  	var urls = $localStorage.urls || [];
  	var selectedUrl = {};

  	function hasUrl(url) {
  		return urls.indexOf(url) != -1;
  	}

  	function getAnyUrl() {
  		if (urls.length > 0)
  		{
  			return urls[0];
  		}

  		return "";
  	}

  	function removeFromList(url) {
  		var index = urls.indexOf(url);
  		if (index > -1) {
  			urls.splice(index, 1);
  		}
  	}

  	function addUrlToList(url) {
  		urls.unshift(url);
  	}

  	function setSelectedUrl(url) {
  		selectedUrl.url = url;
  	}

  	var removeUrl = function(url){
  		if(hasUrl(url)) {
  			removeFromList(url);

  			if(selectedUrl.url === url) {
  				setSelectedUrl(getAnyUrl());
  			}
  		}
  	}

  	var selectUrl = function(url) {
  		if (hasUrl(url)) {
  			setSelectedUrl(url);
  		}
  	}

  	var addUrl = function(url) {
  		if (!url || hasUrl(url)) return;
  		addUrlToList(url);
  		setSelectedUrl(url);
  	};

  	return {
  		addUrl: addUrl, 
  		removeUrl: removeUrl, 
  		urls: urls,
  		selectUrl: selectUrl,
  		getSelectedUrl: selectedUrl
  	};
  }]);
