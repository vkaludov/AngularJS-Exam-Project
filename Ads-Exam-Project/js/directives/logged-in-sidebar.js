app.directive('loggedInSidebar', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/directives/logged-in-sidebar.html',
        replace: true
    };
});