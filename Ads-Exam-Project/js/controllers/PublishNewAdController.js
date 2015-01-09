'use strict';

app.controller('PublishNewAdController', ['$scope', 'categoriesData', 'townsData', function($scope, categoriesData, townsData) {
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
}]);