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
        , templateUrl: 'src/homePage.template.html'
      })

      // Menu categories page
      .state('categories', {
        url: '/categories'
        , templateUrl: 'src/categoriesPage.template.html'
        , controller: 'CategoriesController as categoriesList'
        , resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      ;

  }

})();
