app.controller('ListUserAdsController', ['$scope', 'userService', 'notifyService', function($scope, userService, notifyService) {

    $scope.statusList = [
        {id: 0, name: 'Inactive'},
        {id: 1, name: 'Waiting Approval'},
        {id: 2, name: 'Published'},
        {id: 3, name: 'Rejected'}
    ];
    $scope.status = 'all';
    $scope.startPage = 1;
    $scope.pageSize = 4;

    function getUserAds() {
        userService.getUserAds($scope.status, $scope.startPage, $scope.pageSize)
            .$promise
            .then(function(data){
                $scope.userAds = data;
            });
    }

    getUserAds();

    $scope.deactivateAd = function (id){
        userService.deactivateAd(id)
            .$promise
            .then(function () {
                notifyService.showInfo("Ad deactivated successfully.");
                getUserAds();
            });
    };

    $scope.deleteAd = function (id){
        userService.deleteAd(id)
            .$promise
            .then(function () {
                notifyService.showInfo("Ad deleted successfully.");
                getUserAds();
            });
    };

    $scope.publishAdAgain = function (id){
        userService.publishAdAgain(id)
            .$promise
            .then(function () {
                notifyService.showInfo("Ad published again successfully.");
                getUserAds();
            });
    };
}]);