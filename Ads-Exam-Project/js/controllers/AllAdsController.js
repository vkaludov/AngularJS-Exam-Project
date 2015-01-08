'use strict';

app.controller('AllAdsController', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    function loadAllAds(filterParams) {
        filterParams = filterParams || {};

        adsData.getAllAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
            });
    }

    loadAllAds();

    $scope.$on('categoryClicked', function (event, category) {
        loadAllAds(filter.getFilterParams());
    });

    $scope.$on('townClicked', function (event, town) {
        loadAllAds(filter.getFilterParams());
    });
}]);