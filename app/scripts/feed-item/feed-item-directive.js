'use strict';

function feedItem () {
  return {
    restrict: 'E',
     scope: {
      link: '=link',
      title: '=title',
      content: '=content',
      date: '=publisheddate'
    },
    templateUrl: 'views/feed/feed-item.html',
    controller: ['$scope', function ($scope) {
      if (typeof($scope.date) === "number") {
        $scope.date = new Date($scope.date).toUTCString();      
      }
    }]
  };

}

angular
  .module('simple-rss-feed')
  .directive('feedItem', feedItem);