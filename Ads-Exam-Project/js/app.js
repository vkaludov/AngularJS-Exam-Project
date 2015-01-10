'use strict';

var app = angular.module('softUniProject', ['ngRoute', 'ngResource', 'LocalStorageModule', 'ui.bootstrap']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'template/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'template/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'template/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.when('/logout', {
        templateUrl: 'template/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/user/home', {
        templateUrl: 'template/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/user/ads', {
        templateUrl: 'template/user/user-ads.html',
        controller: 'ListUserAdsController'
    });
    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'template/user/publish-new-ad.html',
        controller: 'PublishNewAdController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);