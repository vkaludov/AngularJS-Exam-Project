app.directive('categories', function() {
    return {
        controller: 'CategoriesController',
        restrict: 'E',
        templateUrl: 'templates/directives/categories.html',
        replace: true
    };
});