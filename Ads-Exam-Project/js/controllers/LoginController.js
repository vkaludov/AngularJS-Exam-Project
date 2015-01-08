'use strict';

app.controller('LoginController', ['$scope', '$location', 'userData', function($scope, $location, userData) {
    $scope.pageTitle = 'Login';

    $scope.login = function (user) {
        userData.login(user)
            .$promise
            .then(function() {
               $location.path('/');
            });
    }
}]);