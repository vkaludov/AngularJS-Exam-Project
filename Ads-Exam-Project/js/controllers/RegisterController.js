'use strict';

app.controller('RegisterController', ['$scope', 'townsData', function($scope, townsData) {
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
            console.log(data);
        });
    $scope.pageTitle = 'Registration';
}]);