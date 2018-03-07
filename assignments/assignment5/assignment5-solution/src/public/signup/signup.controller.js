(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', 'MenuService'];
    function SignupController($scope, MenuService) {
        var ctrl = this;

        ctrl.user = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            itemShortName: '',
            item: {}
        };

        ctrl.getMenuItem = function () {
            var promise = MenuService.getMenuItemByShortName(ctrl.user.itemShortName);
            promise.then(function (response) {
                // Set validity of an input field.
                // For details see https://stackoverflow.com/a/22986254
                $scope.signupForm.itemShortName.$setValidity("itemShortName", true);
                ctrl.user.item = response.data;
            })
                .catch(function (error) {
                    // Set validity of an input field.
                    // For details see https://stackoverflow.com/a/22986254
                    $scope.signupForm.itemShortName.$setValidity("itemShortName", false);
                    ctrl.user.item = {};
                });
        }

        ctrl.submit = function () {
            console.log('user', ctrl.user);
        }
    }

})();