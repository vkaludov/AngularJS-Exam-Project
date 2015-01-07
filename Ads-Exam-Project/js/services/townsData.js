app.factory('townsData', ['$resource', function($resource) {
    var resource = $resource('');

    function getTowns() {

    }

    return{
        getTowns: getTowns
    }
}]);