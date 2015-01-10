app.directive('pageHeader', function() {
    return {
        controller: 'HomeController',
        scope: {
            pageTitle: '=pageTitle'
        },
        restrict: 'E',
        templateUrl: 'template/directives/page-header.html',
        replace: true
    };
});