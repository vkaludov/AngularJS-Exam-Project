'use strict';

app.controller('HomeController', ['$scope', '$location', 'authentication', 'userData', 'notifyService',
    function($scope, $location, authentication, userData, notifyService) {
    $scope.isLoggedIn = authentication.isLoggedIn();

    $scope.getUsername = authentication.getUsername();

    $scope.logout = function () {
        userData.logout()
            .$promise
            .then(function() {
                notifyService.showInfo("You logged out successfully.");
                $location.path('/logout');
            });
    };
}]);