app.directive('allAds', function() {
    return {
        controller: 'AllAdsController',
        restrict: 'E',
        templateUrl: 'template/directives/all-ads.html',
        replace: true
    };
});