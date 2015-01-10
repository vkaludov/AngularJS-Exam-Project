'use strict';

app.factory('userService', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {

    function createNewAd(adData) {
        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads', null,
            {
                save: {
                    method: 'POST',
                    headers: headers,
                    data: adData
                }
            })
            .save(adData);

        resource.$promise
                .then(function(data) {
                    handleSuccess(data);
                });

        return resource;
    }

    function handleSuccess(response) {
        return(response.data);

    }

    return {
        createNewAd: createNewAd,
        handleSuccess: handleSuccess
    }
}]);

//getUserAds: function (params, success, error) {
//    var request = {
//        method: 'GET',
//        url: baseServiceUrl + '/api/user/ads',
//        headers: authService.getAuthHeaders(),
//        params: params
//    };
//    $http(request).success(success).error(error);
//},
//
//deactivateAd: function (id, success, error) {
//    // TODO
//},
//
//publishAgainAd: function (id, success, error) {
//    // TODO
//}