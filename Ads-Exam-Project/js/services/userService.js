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

    function getUserAds(status, startPage, pageSize) {
        if (status == 'all'){
            status = '';
        }

        if (Number(startPage) < 0 || Number(startPage) > 100000){
            startPage = 1;
        }

        if (Number(pageSize) < 0 || Number(pageSize) > 1000){
            pageSize = 4;
        }

        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads', null,
            {
                save: {
                    method: 'GET',
                    headers: headers,
                    params: {
                        Status: status,
                        StartPage: startPage,
                        PageSize: pageSize
                    }
                }
            })
            .save();

        resource.$promise
            .then(function(data) {
                handleSuccess(data);
            });

        return resource;
    }

    function deactivateAd(id) {
        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads/deactivate/' + id, null,
            {
                save: {
                    method: 'PUT',
                    headers: headers
                }
            })
            .save();

        resource.$promise
            .then(function(data) {
                handleSuccess(data);
            });

        return resource;
    }

    function deleteAd(id) {
        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads/' + id, null,
            {
                save: {
                    method: 'DELETE',
                    headers: headers
                }
            })
            .save();

        resource.$promise
            .then(function(data) {
                handleSuccess(data);
            });

        return resource;
    }

    function publishAdAgain(id) {
        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads/publishagain/' + id, null,
            {
                save: {
                    method: 'PUT',
                    headers: headers
                }
            })
            .save();

        resource.$promise
            .then(function(data) {
                handleSuccess(data);
            });

        return resource;
    }

    function getUserAdById(id) {
        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads/' + id, null,
            {
                save: {
                    method: 'GET',
                    headers: headers
                }
            })
            .save();

        resource.$promise
            .then(function(data) {
                handleSuccess(data);
            });

        return resource;
    }

    function editAd(id) {
        var headers = authentication.getHeaders();
        var resource = $resource(baseServiceUrl + 'user/ads/' + id, null,
            {
                save: {
                    method: 'PUT',
                    headers: headers
                }
            })
            .save();

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
        getUserAds: getUserAds,
        deactivateAd: deactivateAd,
        deleteAd: deleteAd,
        publishAdAgain: publishAdAgain,
        getUserAdById: getUserAdById,
        editAd: editAd,
        handleSuccess: handleSuccess
    }
}]);