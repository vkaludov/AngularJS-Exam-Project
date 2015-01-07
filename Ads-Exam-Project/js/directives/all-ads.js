app.directive('allAds', function() {
    return {
        controller: 'AllAdsController',
        restrict: 'E',
        templateUrl: 'templates/all-ads.html',
        replace: true
    };
});