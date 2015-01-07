app.directive('towns', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/towns.html',
        replace: true
    };
});