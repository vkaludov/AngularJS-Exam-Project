'use strict';

app.controller('CategoriesController', ['$scope', '$rootScope', 'categoriesData', 'filter', function($scope, $rootScope, categoriesData, filter) {
    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        });

    $scope.categoryClicked = function categoryClicked(category) {
        if (category == null) {
            $scope.selectedCategoryId = null;
        } else {
            $scope.selectedCategoryId = category.id;
        }

        filter.adsFilteredByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    };
}]);