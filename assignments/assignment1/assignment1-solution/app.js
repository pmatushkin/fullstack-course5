(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.countLunch = function () {
            // declare possible lunch states
            var NO_DATA = "Please enter data first";
            var ENJOY = "Enjoy!";
            var TOO_MUCH = "Too much!";

            // declare lunch state variable
            var lunchState;

            // figure out lunch state
            if (undefined === $scope.lunchToCount) {
                lunchState = NO_DATA;
            } else {
                var lunchItems = $scope.lunchToCount.split(",");
                var lunchCounter = 0;
                for (var lunchItem in lunchItems) {
                    if (lunchItems[lunchItem].trim() !== "") {
                        lunchCounter++;
                    }
                }

                if (lunchCounter === 0) {
                    lunchState = NO_DATA;
                } else if (lunchCounter < 4) {
                    lunchState = ENJOY;
                } else {
                    lunchState = TOO_MUCH;
                }
            }

            // populate $scope variables based on the value of lunch state
            $scope.countLunchMessage = lunchState.toString();
            switch(lunchState) {
                case ENJOY: {
                    $scope.countLunchColor = "green";
                    break;
                }
                case TOO_MUCH: {
                    $scope.countLunchColor = "green";
                    break;
                }
                default: {
                    $scope.countLunchColor = "red";
                    break;
                }
            }
        }
    }
})();
