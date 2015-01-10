'use strict';

app.controller('PublishNewAdController', ['$scope', '$location', 'categoriesData', 'townsData', 'userService',
            function($scope, $location, categoriesData, townsData, userService) {

    $scope.adData = {townId: null, categoryId: null};

    categoriesData.getCategories()
        .$promise
        .then(function(data) {
            $scope.categories = data;
        });

    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
        });

    $scope.publishAd = function(adData) {
        userService.createNewAd(adData)
            .$promise()
            .then(function () {
                notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                $location.path("/user/ads");
            },
            function (serverError) {
                notifyService.showError("Publishing ad failed:", serverError);
            });
    };
}]);