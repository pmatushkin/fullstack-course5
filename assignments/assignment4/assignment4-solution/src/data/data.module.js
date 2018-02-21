(function () {
    'use strict';

    angular.module('data', [])
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .constant('CategoryListEndPoint', "/categories.json")
        .constant('ItemsForCategoryEndPoint', "/menu_items.json")
        .constant('ItemsForCategoryParameter_Category', "category");

})();
