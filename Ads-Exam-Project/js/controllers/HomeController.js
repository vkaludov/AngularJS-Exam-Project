'use strict';

app.controller('HomeController', ['$scope', '$location', 'authentication', 'userData', function($scope, $location, authentication, userData) {
    $scope.pageTitle = 'Home';

    $scope.isLoggedIn = authentication.isLoggedIn();

    $scope.logout = function (user) {
        userData.logout(user)
            .$promise
            .then(function() {
                $location.path('/logout');
            });
    };
}]);