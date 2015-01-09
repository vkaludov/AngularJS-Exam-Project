app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {

    function userLogin(user) {
        var resource = $resource(baseServiceUrl + 'user/login')
            .save(user);

        resource.$promise
                .then(function(data) {
                    authentication.saveUser(data);
                });

        return resource;
    }

    function userRegister(user) {
        var resource = $resource(baseServiceUrl + 'user/register')
            .save(user);

        resource.$promise
                .then(function(data) {
                    authentication.saveUser(data);
                });

        return resource;
    }

    function userLogout(user) {
        var resource = $resource(baseServiceUrl + 'user/logout')
            .save(user);

        resource.$promise
                .then(function() {
                authentication.removeUser();
                });

        return resource;
    }

    return{
        login: userLogin,
        register: userRegister,
        logout: userLogout
    }
}]);