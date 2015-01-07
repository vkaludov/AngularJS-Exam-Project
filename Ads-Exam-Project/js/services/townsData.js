app.factory('townsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'towns');

    function getTowns() {
        return resource.get();
    }

    return{
        getTowns: getTowns
    }
}]);