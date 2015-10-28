'use strict';

/**
 * @ngdoc function
 * @name simple-rss-feed.controller:SideBarCtrl
 * @description
 * # SideBarCtrl
 * Controller of the simple-rss-feed
 */
angular.module('simple-rss-feed')
  .controller('SideBarCtrl', ['$scope', 'urlSearchService', '$location', 'uriParserService', '$stateParams',
  	function ($scope, urlSearchService, $location, uriParserService, $stateParams) {
  	$scope.search = {};
  	$scope.urls = urlSearchService.urls;
    var selectedUrl = uriParserService.decode($stateParams.url);

    function encodeAndNavigateToUrl(url) {
      var encodedUri = uriParserService.encode(url);
  		$location.path(encodedUri);
    }

    $scope.submit = function(url) {
      if (url) {
        urlSearchService.addUrl(url);
        encodeAndNavigateToUrl(url);
        $scope.search.url = null;
      }
    }

    $scope.remove = function(url) {
      urlSearchService.removeUrl(url);
    }

    $scope.isUrlActive = function(url) {
      if($stateParams.url) {
        return url === selectedUrl;
      }
    }

    $scope.selectUrl = function(url) {
      encodeAndNavigateToUrl(url);
  	}
  }])
  .factory('urlSearchService', ['$localStorage', function ($localStorage) {
  	var urls = [];
    
    (function initUrlStorage() {
      if ($localStorage.urls) {
        urls = $localStorage.urls;
      }
      else
      {
        $localStorage.urls = urls;
      }  
    })();

  	var selectedUrl = {};

  	function hasUrl(url) {
  		return urls && urls.indexOf(url) !== -1;
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

  	var removeUrl = function(url){
  		if(hasUrl(url)) {
  			removeFromList(url);
  		}
  	}

  	var addUrl = function(url) {
  		if (!hasUrl(url)) {
	  		addUrlToList(url);
	  	}
  	}

  	return {
  		addUrl: addUrl, 
  		removeUrl: removeUrl,
      urls: urls
  	};
  }])
  .factory('uriParserService', function() {
    return {
      encode: function(uri) {
        return window.encodeURIComponent(uri);
      },
      decode: function(uri) {
        return window.decodeURIComponent(uri);
      }
    }
  });
