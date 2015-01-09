'use strict';

app.controller('RegisterController', ['$scope', '$location', 'townsData', 'userData', function($scope, $location, townsData, userData) {
    $scope.pageTitle = 'Registration';
    
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user)
            .$promise
            .then(function() {
                $location.path('/user/home');
            });
    }
}]);