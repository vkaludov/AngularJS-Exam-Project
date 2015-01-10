app.controller('ListUserAdsController', ['$scope', 'userService', function($scope, userService) {

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
}]);