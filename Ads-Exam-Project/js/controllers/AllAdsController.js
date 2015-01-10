'use strict';

app.controller('AllAdsController', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    function loadAllAds(params) {
        params = params || {};

        adsData.getAllAds(params)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.totalItems = data.numItems;
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