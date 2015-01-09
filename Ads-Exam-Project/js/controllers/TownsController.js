'use strict';

app.controller('TownsController', ['$scope', '$rootScope', 'townsData', 'filter', function($scope, $rootScope, townsData, filter) {
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.townClicked = function townClicked(town) {
        if (town == null) {
            $scope.selectedTownId = null;
        } else {
            $scope.selectedTownId = town.id;
        }

        filter.adsFilteredByTown(town);
        $rootScope.$broadcast('townClicked', town);
    }
}]);