'use strict';

app.controller('PublishNewAdController', ['$scope', 'categoriesData', function($scope, categoriesData) {
    categoriesData.getCategories()
        .$promise
        .then(function(data) {
            $scope.categories = data;
        });
}]);