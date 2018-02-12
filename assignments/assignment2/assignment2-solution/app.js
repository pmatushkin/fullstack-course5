(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        // declare item list and isEmpty() function for to-buy controller
        var itemList = ShoppingListCheckOffService.getItemsToBuy();
        toBuyList.items = itemList;
        toBuyList.isItemListEmpty = function() {
            return ShoppingListCheckOffService.isItemsToBuyEmpty;
        }

        // declare buyItem() function
        toBuyList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtList = this;

        // declare item list and isEmpty() function for already-bought controller
        var itemList = ShoppingListCheckOffService.getItemsBought();
        alreadyBoughtList.items = itemList;
        alreadyBoughtList.isItemListEmpty = function() {
            return ShoppingListCheckOffService.isItemsBoughtEmpty;
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of to-buy items and the corresponding isEmpty variable
        var itemsToBuy = getItemsToBuy();
        service.getItemsToBuy = function() {
            return itemsToBuy;
        }
        service.isItemsToBuyEmpty = isItemListEmpty(itemsToBuy);

        // List of already-bought items and the corresponding isEmpty variable
        var itemsBought = [];
        service.getItemsBought = function() {
            return itemsBought;
        }
        service.isItemsBoughtEmpty = isItemListEmpty(itemsBought);

        // Implementation of buyItem() function
        service.buyItem = function(itemIndex) {
            var itemBought;
            // Find the bought item
            if ((0 <= itemIndex) && (itemIndex <= itemsToBuy.length)) {
                itemBought = itemsToBuy[itemIndex];
            }

            // Move the bought item to the list of already-bough items
            if (undefined !== itemBought) {
                itemsToBuy.splice(itemIndex, 1);
                itemsBought.push(itemBought);
            }
            
            // Update isEmpty variables
            service.isItemsToBuyEmpty = isItemListEmpty(itemsToBuy);
            service.isItemsBoughtEmpty = isItemListEmpty(itemsBought);
        }
    }

    // Return shopping list of 10 items with random quantities
    function getItemsToBuy() {
        var itemsToBuy = [];

        itemsToBuy.push({ name: "Apples", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Brioches", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Cookies", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Donuts", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Eggs", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Feta", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Grapes", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Hamburgers", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Ice Cream", quantity: getRandomQuantity() });
        itemsToBuy.push({ name: "Yogurt", quantity: getRandomQuantity() });

        return itemsToBuy;
    }

    // Implementation of get-random-quantity function
    function getRandomQuantity() {
        return Math.floor(Math.random() * 9) + 1;
    }

    // Implementation of is-array-empty function
    function isItemListEmpty(itemList) {
        return (undefined !== itemList) && (0 === itemList.length);
    }
})();
