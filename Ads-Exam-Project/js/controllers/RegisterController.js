'use strict';

app.controller('RegisterController', ['$scope', 'townsData', 'userData', function($scope, townsData, userData) {
    $scope.pageTitle = 'Registration';
    
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
        });
    
    $scope.register = function (user) {
        userData.register(user);
        //var userDetails = {
        //    username: user.username,
        //    password: user.password
        //};
        //userData.login(userDetails);
    }
}]);