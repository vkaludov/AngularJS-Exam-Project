app.directive('pageHeader', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/page-header.html',
        replace: true
    };
});