app.directive('leftSidebar', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'template/directives/left-sidebar.html',
        replace: true
    };
});