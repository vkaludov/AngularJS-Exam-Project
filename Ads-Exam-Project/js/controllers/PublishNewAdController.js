'use strict';

app.controller('PublishNewAdController', ['$scope', 'categoriesData', 'townsData', function($scope, categoriesData, townsData) {
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

    };
}]);