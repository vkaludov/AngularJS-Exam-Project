'use strict';

app.controller('AllAdsController', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    $scope.currentPage = 1;
    $scope.startPage = 1;
    $scope.pageSize = 10;

    function loadAllAds(params) {
        params = params || {};

        adsData.getAllAds(params)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
            });
    }

    loadAllAds();

    $scope.pageChanged = function () {
        filter.setPageParams({startPage: $scope.currentPage, pageSize: numItems / numPages});
        adsData.getAllAds(filter.getFilterParams())
    };

    $scope.$on('categoryClicked', function (event, category) {
        loadAllAds(filter.getFilterParams());
    });

    $scope.$on('townClicked', function (event, town) {
        loadAllAds(filter.getFilterParams());
    });
}]);