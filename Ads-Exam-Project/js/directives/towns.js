app.directive('towns', function() {
    return {
        controller: 'TownsController',
        restrict: 'E',
        templateUrl: 'templates/directives/towns.html',
        replace: true
    };
});