(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);

    function UserService() {
        var service = this;
        var user = {};

        service.setUser = function (user) {
            service.user = user;
        };

        service.getUser = function () {
            return service.user;
        }
    }
})();
