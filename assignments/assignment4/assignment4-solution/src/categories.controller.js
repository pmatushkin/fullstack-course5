(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
        var categoriesList = this;

        console.log('items', items)

        categoriesList.items = items;
    }
})();
