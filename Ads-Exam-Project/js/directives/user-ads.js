app.directive('userAds', function() {
    return {
        controller: 'ListUserAdsController',
        restrict: 'E',
        templateUrl: 'template/user/user-ads.html',
        replace: true
    };
});