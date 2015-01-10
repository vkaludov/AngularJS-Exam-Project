'use strict';

app.controller('PublishNewAdController', ['$scope', '$location', 'categoriesData', 'townsData', 'userService', 'notifyService',
            function($scope, $location, categoriesData, townsData, userService, notifyService) {

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

    $scope.publishAd = function() {
        userService.createNewAd($scope.adData)
            .$promise
            .then(function () {
                notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                $location.path("/user/ads");
            },
            function (serverError) {
                notifyService.showError("Publishing ad failed:", serverError);
            });
    };
}]);