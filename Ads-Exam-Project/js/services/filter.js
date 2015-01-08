app.factory('filter', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'towns');

    function getTowns() {
        return resource.query();
    }

    return{
        getTowns: getTowns
    }
}]);