'use strict';

app.controller('RegisterController', ['$scope', 'townsData', function($scope, townsData) {
    $scope.pageTitle = 'Registration';
    
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
        });
    
    $scope.register = function (user) {
        //userData.register(user);
    }
}]);