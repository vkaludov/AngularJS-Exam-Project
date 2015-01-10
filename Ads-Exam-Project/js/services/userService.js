'use strict';

app.factory('userService', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {

    function createNewAd(adData) {
        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads', null,
            {
                save: {
                    method: 'POST',
                    headers: headers
                }
            })
            .save(adData);

        resource.$promise.then(function() {
                    handleSuccess();
                });

        return resource;
    }

    function handleSuccess(response) {
        return(response.data);

    }

    //function handleErrorTypeTwo(response) {
    //
    //    if (!angular.isObject(response.data) || !response.data.message) {
    //        return ($q.reject( "An unknown error occurred." ) );
    //    }
    //
    //    // Otherwise, use expected error message.
    //    return( $q.reject( response.data.modelState ) );
    //
    //}

    return {
        createNewAd: createNewAd,
        handleSuccess: handleSuccess
        //handleErrorTypeTwo: handleErrorTypeTwo
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