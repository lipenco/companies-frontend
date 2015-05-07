define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .when('/companies', '/companies/list'); // default

    $stateProvider
      .state('companies', {
        abstract: true,
        url: '/companies',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/layout.html'
          }
        }
      })
      .state('companies.list', {
        url: '/list',
        views: {
          'content@companies': {
            templateUrl   : 'app/companies/templates/list.html',
            controller    : 'CompaniesListCtrl',
            controllerAs  : 'vm'
          }
        }
      })
      .state('companies.show', {
          url: '/:id?name?address',
          parent: 'companies.list',
          views: {
            'readCompany@companies': {
              templateUrl   : 'app/companies/templates/show.html',
              controller    : 'CompaniesShowCtrl',
              controllerAs  : 'vm',
            }
          }
        });

  }

});
