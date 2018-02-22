(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoryName', {
            templateUrl: 'src/categoryName.template.html',
            bindings: {
                category: '<'
            }
        });
})();
