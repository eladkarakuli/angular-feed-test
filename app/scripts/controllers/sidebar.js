'use strict';

/**
 * @ngdoc function
 * @name simple-rss-feed.controller:SideBarCtrl
 * @description
 * # SideBarCtrl
 * Controller of the simple-rss-feed
 */
angular.module('simple-rss-feed')
  .controller('SideBarCtrl', ['$scope', '$localStorage', 'urlSearchService', function ($scope, $localStorage, urlSearchService) {
  	$scope.search = {};
  	$scope.$storage = $localStorage;
  	$scope.$storage.urls = urlSearchService.urls;

  	$scope.submit = function() {
  		urlSearchService.addUrl($scope.search.url);
  	}
  }])
  .factory('urlSearchService', function () {
  	var urls = {};
  	var selectedUrl = {};

  	function getNextId() {
  		return Object.keys(urls).length;
  	}

  	var addUrl = function(url) {
  		if (!url) return;
  		var id = getNextId();
  		urls[id] = url;
  		selectedUrl.url = url;
  	};

  	var removeUrl = function(id){
  		if(urls[id]) {
  			delete urls[id];
  		}
  	}

  	var getSelectedUrl = function(){
  		return selectedUrl.url;
  	}

  	return {
  		addUrl: addUrl, 
  		removeUrl: removeUrl, 
  		urls: urls,
  		getSelectedUrl: selectedUrl
  	};
  });
  /*.factory('urlSearchCache', ['$scope', '$localStorage', function($scope, $localStorage) {
  	return {
      set: function (name, obj) {
      	$scope.$storage = $localStorage;
      	$storage.arr = [1, 2, 3, 4];
      },
      get: function (name) {
        if (hasCache(name)) {
          return angular.fromJson(localStorage.getItem(name));
        }
        return null;
      }
    };
  }]);*/
