app.directive('allAds', function() {
    return {
        controller: 'AllAdsController',
        restrict: 'E',
        templateUrl: 'templates/directives/all-ads.html',
        replace: true
    };
});