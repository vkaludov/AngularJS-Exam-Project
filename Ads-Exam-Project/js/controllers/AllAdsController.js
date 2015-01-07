'use strict';

app.controller('AllAdsController', ['$scope', 'adsData', function($scope, adsData) {
    adsData.getAllAds()
        .$promise
        .then(function (data) {
          $scope.adsData = data;
        })
}]);