'use strict';

app.controller('RegisterController', ['$scope', '$location', 'townsData', 'userData', 'notifyService',
                function($scope, $location, townsData, userData, notifyService) {
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user)
            .$promise
            .then(function() {
                notifyService.showInfo("Registration successful.");
                $location.path('/user/home');
            },
            function (serverError) {
                notifyService.showError("Registration failed:", serverError);
            });
    }
}]);