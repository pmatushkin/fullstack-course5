(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', '$httpParamSerializer', 'ApiBasePath', 'CategoryListEndPoint', 'ItemsForCategoryEndPoint']
    function MenuDataService($http, $httpParamSerializer, ApiBasePath, CategoryListEndPoint, ItemsForCategoryEndPoint) {
        var service = this;

        service.getAllCategories = function () {
            console.log('MenuDataService.getAllCategories()');

            var _method = "GET";
            var _url = ApiBasePath + CategoryListEndPoint;
            console.log(_method, _url);

            return $http({
                method: _method
                , url: _url
            }).then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.log("Something went terribly wrong:", error);
                return [];
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            console.log('MenuDataService.getItemsForCategory(' + categoryShortName + ')');

            var _method = "GET";
            var _query = $httpParamSerializer({ category: categoryShortName });
            var _url = ApiBasePath + ItemsForCategoryEndPoint + '?' + _query;
            console.log(_method, _url);

            return $http({
                method: _method
                , url: _url
            }).then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.log("Something went terribly wrong:", error);
                return [];
            });
        }
    }

})();
