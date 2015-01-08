app.directive('leftSidebar', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/directives/left-sidebar.html',
        replace: true
    };
});