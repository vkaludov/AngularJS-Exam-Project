'use strict';

app.controller('TownsController', ['$scope', 'adsData', function($scope, adsData) {
    adsData.getAllAds()
        .$promise
        .then(function (data) {
            $scope.adsData = data;
        })
}]);