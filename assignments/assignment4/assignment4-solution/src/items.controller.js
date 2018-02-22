(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var itemsList = this;

        console.log(items.category);
        console.log(items.menu_items);

        itemsList.category = items.category;
        itemsList.items = items.menu_items;
    }
})();
