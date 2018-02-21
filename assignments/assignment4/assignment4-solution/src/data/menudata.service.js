(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', '$httpParamSerializer'
        , 'ApiBasePath', 'CategoryListEndPoint', 'ItemsForCategoryParameter_Category', 'ItemsForCategoryEndPoint']
    function MenuDataService($http, $httpParamSerializer
        , ApiBasePath, CategoryListEndPoint, ItemsForCategoryParameter_Category, ItemsForCategoryEndPoint) {
        var service = this;

        service.getAllCategories = function () {
            console.log('MenuDataService.getAllCategories()');

            var _method = "GET";
            var _url = ApiBasePath + CategoryListEndPoint;
            console.log(_method, _url);

            var _result;

            return $http({
                method: _method
                , url: _url
            }).then(function (response) {
                // console.log(response.data);
                return response.data;
            }).catch(function (error) {
                console.log("Something went terribly wrong:", error);
                return [];
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            console.log('MenuDataService.getItemsForCategory(' + categoryShortName + ')');

            var _method = "GET";
            var _query = $httpParamSerializer({ ItemsForCategoryParameter_Category, categoryShortName });
            var _url = ApiBasePath + ItemsForCategoryEndPoint + '?' + query;
            console.log(_method, _url);

            return $http({
                method: _method
                , url: _url
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log("Something went terribly wrong:", error);
            });
        }
    }

})();
