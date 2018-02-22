(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/'
        , templateUrl: 'src/templates/homePage.template.html'
      })

      // Categories page
      .state('categories', {
        url: '/categories'
        , templateUrl: 'src/templates/categoriesPage.template.html'
        , controller: 'CategoriesController as categoriesList'
        , resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      // Menu items page
      .state('items', {
        url: '/items?{categoryId}'
        , templateUrl: 'src/templates/itemsPage.template.html'
        , controller: 'ItemsController as itemsList'
        , resolve: {
          items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
        }
      })

      ;

  }

})();
