app.directive('pageHeader', function() {
    return {
        controller: 'HomeController',
        scope: {
            pageTitle: '=pageTitle'
        },
        restrict: 'E',
        templateUrl: 'templates/directives/page-header.html',
        replace: true
    };
});