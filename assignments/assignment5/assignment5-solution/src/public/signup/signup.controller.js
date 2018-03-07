(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', 'MenuService', 'UserService'];
    function SignupController($scope, MenuService, UserService) {
        var ctrl = this;

        ctrl.user = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            itemShortName: '',
            menuItem: {}
        };

        // For details on setting validity of an input field see https://stackoverflow.com/a/22986254
        ctrl.getMenuItem = function () {
            // To invalidate the form (including the Submit button) set field validity to FALSE until the validation completes.
            $scope.signupForm.itemShortName.$setValidity("itemShortName", false);

            var promise = MenuService.getMenuItemByShortName(ctrl.user.itemShortName);
            promise.then(function (response) {
                // Validation completed, the field content is a valid menu item short name. Set validity to TRUE.
                $scope.signupForm.itemShortName.$setValidity("itemShortName", true);
                ctrl.user.menuItem = response.data;
            })
                .catch(function (error) {
                    // Validation completed, the field content is NOT a valid menu item short name. Set validity to FALSE.
                    $scope.signupForm.itemShortName.$setValidity("itemShortName", false);
                    ctrl.user.menuItem = {};
                });
        }

        ctrl.submit = function () {
            UserService.setUser(ctrl.user);
        }
    }
})();