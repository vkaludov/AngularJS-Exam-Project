app.factory('authentication', function() {
    var key = 'user';
    function saveUserData(data) {
        localStorage.setItem(key, angular.toJson(data));
    }

    function getUserData() {
        return angular.fromJson(localStorage.getItem(key));
    }

    function getHeaders() {
        var headers = {};
        var userData = getUserData();

        if (userData) {
            headers.Authorization = 'Bearer ' + getUserData().access_token;
        }

        return headers;
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders
    }
});