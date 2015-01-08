app.directive('pageHeader', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/directives/page-header.html',
        replace: true
    };
});