app.directive('loggedInSidebar', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'template/user/logged-in-sidebar.html',
        replace: true
    };
});