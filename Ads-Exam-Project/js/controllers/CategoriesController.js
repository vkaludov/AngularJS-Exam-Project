'use strict';

app.controller('CategoriesController', ['$scope', '$rootScope', 'categoriesData', 'filter', function($scope, $rootScope, categoriesData, filter) {
    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        });

    //$scope.allAdsClicked = function allAdsClicked() {
    //    filter.clearFilterParams();
    //    $rootScope.$broadcast('loadAllAds');
    //};
    
    $scope.categoryClicked = function categoryClicked(category) {
        filter.adsFilteredByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    };
}]);