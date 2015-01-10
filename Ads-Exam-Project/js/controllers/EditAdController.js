app.controller('EditAdController', ['$scope', '$routeParams', '$location', 'userService', 'notifyService', 'categoriesData', 'townsData',
        function($scope, $routeParams, $location, userService, notifyService, categoriesData, townsData) {

    if ($routeParams.id){
        $scope.id = $routeParams.id;
    }

    function getUserAdById() {
        userService.getUserAdById($scope.id)
            .$promise
            .then(function (data) {
                $scope.userAd = data;
            });
    }

    getUserAdById();

    categoriesData.getCategories()
        .$promise
        .then(function(data) {
            $scope.categories = data;
        });

    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data;
        });

    //no time for image upload :(
    $scope.changeImage = false;

    $scope.editAd = function (userAd){
        userService.editAd(userAd, $scope.changeImage)
            .$promise
            .then(function() {
                notifyService.showInfo("Ad edited successfully.");
                $location.path("/user/ads");
            });
    };
}]);