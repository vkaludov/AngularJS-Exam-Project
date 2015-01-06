app.directive('leftSidebar', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/left-sidebar.html',
        replace: true
    };
});