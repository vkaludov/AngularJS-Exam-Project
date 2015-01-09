'use strict';

app.controller('HomeController', ['$scope', '$location', 'authentication', 'userData', function($scope, $location, authentication, userData) {
    $scope.isLoggedIn = authentication.isLoggedIn();

    $scope.logout = function () {
        userData.logout()
            .$promise
            .then(function() {
                $location.path('/logout');
            });
    };
}]);