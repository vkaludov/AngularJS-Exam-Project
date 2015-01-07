app.directive('categories', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/categories.html',
        replace: true
    };
});