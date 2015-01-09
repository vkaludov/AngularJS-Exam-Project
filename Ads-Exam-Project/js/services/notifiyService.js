'use strict';

app.factory('notifyService',
    function () {
        return {
            showInfo: function(msg) {
                noty({
                        text: msg,
                        type: 'info',
                        layout: 'topCenter',
                        timeout: 2000}
                );
            },
            showError: function(msg, serverError) {
                var errorMessage = serverError.data.error_description;
                msg = msg + "<br>" + errorMessage;

                noty({
                        text: msg,
                        type: 'error',
                        layout: 'topCenter',
                        timeout: 5000}
                );
            }
        }
    }
);
