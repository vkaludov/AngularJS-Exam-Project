'use strict';

app.controller('RegisterController', ['$scope', 'townsData', function($scope, townsData) {
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
        });
    $scope.pageTitle = 'Registration';
}]);