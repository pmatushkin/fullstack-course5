(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");;

    // The NarrowItDownController should be injected with the MenuSearchService.
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.getMatchedMenuItems = function () {
            // The controller should call the getMatchedMenuItems method when appropriate
            // and store the result in a property called found attached to the controller instance.
            var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);

            promise.then(function (matchedItems) {
                narrowItDown.found = matchedItems;
                console.log("narrowItDown.found: " + narrowItDown.found);
            });
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        // The service should have the following method: getMatchedMenuItems(searchTerm).
        // That method will be responsible for reaching out to the server (using the $http service)
        // to retrieve the list of all the menu items. Once it gets all the menu items,
        // it should loop through them to pick out the ones whose description matches the searchTerm.
        // Once a list of found items is compiled, it should return that list (wrapped in a promise).
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.jsonssss")
            }).then(function (response) {
                // process result and only keep items that match
                var foundItems = [];

                if (undefined !== response.data) {
                    var menuItems = response.data["menu_items"];

                    if (undefined !== menuItems) {
                        for (var key in menuItems) {
                            var menuItem = menuItems[key];

                            if (undefined !== menuItem) {
                                var menuItemDescription = menuItem.description;

                                if ((undefined !== menuItemDescription)
                                    && (-1 !== menuItemDescription.indexOf(searchTerm)))
                                    foundItems.push(menuItem);
                            }
                        }
                    }

                    // return processed items
                    return foundItems;
                }
            }).catch(function (error) {
                console.log("Something went terribly wrong:", error);
            });
        };
    }
})();
