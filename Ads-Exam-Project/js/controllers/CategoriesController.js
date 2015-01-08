'use strict';

app.controller('CategoriesController', ['$scope', 'categoriesData', 'filter', function($scope, categoriesData, filter) {
    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        });
    
    $scope.categoriesClicked = function categoriesClicked(category) {
        filter.adsFilteredByCategory(category);
    }
}]);