(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoryName', {
            templateUrl: 'src/templates/categoryName.template.html',
            bindings: {
                category: '<'
            }
        });
})();
