app.directive('loggedInSidebar', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/user/logged-in-sidebar.html',
        replace: true
    };
});