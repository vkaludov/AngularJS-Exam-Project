app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {

    function userLogin(user) {
        return $resource(baseServiceUrl + 'user/login')
            .save(user)
            .$promise
            .then(function(data) {
                authentication.saveUser(data);
        });
    }

    function userRegister(user) {
        return $resource(baseServiceUrl + 'user/register')
            .save(user)
            .$promise
            .then(function(data) {
                authentication.saveUser(data);
        });
    }

    function userLogout(user) {
        return $resource(baseServiceUrl + 'user/logout')
            .save(user)
            .$promise
            .then(function() {
                authentication.removeUser();
            });
    }

    return{
        login: userLogin,
        register: userRegister,
        logout: userLogout
    }
}]);