(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {

    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var itemsToBuy = getItemsToBuy();
        // console.log(itemsToBuy);

        // List of bought items
        var itemsBought = [];
        // console.log(itemsBought);

        service.buyItem = function(itemName) {
            var itemBought = itemsToBuy.find(i => i.name === itemName);
            if (undefined !== itemBought) {
                itemsToBuy.splice(itemsToBuy.indexOf(itemBought), 1);
                itemsBought.push(itemBought);
            }
        }

        // service.buyItem("Haggis");
        // console.log(itemsToBuy);
        // console.log(itemsBought);
    }

    function getItemsToBuy() {
        var itemsToBuy = [];

        itemsToBuy.push({ name: "Apples", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Brioches", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Cookies", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Donuts", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Eggs", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Feta", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Grapes", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Haggis", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Ice Cream", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Yogurt", quantity: getRandomQuantity() });

        return itemsToBuy;
    }

    function getRandomQuantity() {
        return Math.floor(Math.random() * 9) + 1;
    }
})();
