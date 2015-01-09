'use strict';

app.controller('LoginController', ['$scope', '$location', 'userData', 'notifyService', function($scope, $location, userData, notifyService) {
    $scope.login = function (user) {
        userData.login(user)
            .$promise
            .then(function() {
                notifyService.showInfo("Login successful.");
                $location.path('/user/home');
            }, function (serverError) {
                notifyService.showError("Login failed:", serverError);
            });
    }
}]);