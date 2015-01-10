'use strict';

app.factory('adsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {

    var resource = $resource(
        baseServiceUrl + 'ads/:id',
        {id: '@id'},
        {update: {
            method: 'PUT'
        }
    });

    function getAllAds(params) {
        return resource.get(params);
    }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function getAdById(id) {
        return resource.get({id: id});
    }

    function editAd(id, ad) {
        return resource.update({id: id}, ad);
    }

    function deleteAd(id) {
        return resource.delete({id: id});
    }

    return {
        getAllAds: getAllAds,
        create: createNewAd,
        getAdById: getAdById,
        edit: editAd,
        delete: deleteAd
    }
}]);