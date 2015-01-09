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
                var errorMessage = "";
                var errors = [];

                if (serverError.data.error_description != null) {
                    errorMessage = serverError.data.error_description;
                    errors.push(errorMessage);
                } else {
                    var modelStateErrors = serverError.data.modelState;
                    for (var propertyName in modelStateErrors) {
                        var errorMessages = modelStateErrors[propertyName];

                        for (var i = 0; i < errorMessages.length; i++) {
                            var currentError = errorMessages[i];
                            errors.push(currentError);
                        }
                    }
                }
                if (errors.length > 0) {
                        msg = msg + ":<br>" + errors.join("<br>");
                }
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
