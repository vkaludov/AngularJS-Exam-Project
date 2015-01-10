'use strict';

app.controller('PublishNewAdController', ['$scope', 'categoriesData', 'townsData', 'userService',
            function($scope, categoriesData, townsData, userService) {

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
        userService.createNewAd(adData,
            function success() {
                // TODO: show “success” info message
                $location.path("/user/ads");
            },
            function error(err) {
                // TODO: show error message
            }
        );

    };
}]);