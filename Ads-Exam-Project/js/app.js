'use strict';

var app = angular.module('softUniProject', ['ngRoute', 'ngResource', 'LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });

    localStorageServiceProvider.setStorageType('localStorage');
    localStorageServiceProvider.setPrefix('adsApp');
}]);