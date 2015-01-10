app.directive('towns', function() {
    return {
        controller: 'TownsController',
        restrict: 'E',
        templateUrl: 'template/directives/towns.html',
        replace: true
    };
});