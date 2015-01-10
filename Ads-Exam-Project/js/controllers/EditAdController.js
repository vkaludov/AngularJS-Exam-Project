app.controller('EditAdController', ['$scope', 'userService', 'notifyService', function($scope, userService, notifyService) {

    //no time for image upload :(
    $scope.changeImage = false;

    $scope.editAd = function (id){
        userService.editAd(id)
            .$promise
            .then(function (data) {
                $scope.requestedUserAd = data;
            });
    };
}]);