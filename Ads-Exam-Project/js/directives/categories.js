app.directive('categories', function() {
    return {
        controller: 'CategoriesController',
        restrict: 'E',
        templateUrl: 'template/directives/categories.html',
        replace: true
    };
});