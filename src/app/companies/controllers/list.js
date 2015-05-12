define(function(require) {
  'use strict';

  var module = require('../module');
  require('../resources/rest');

  module.controller('CompaniesListCtrl', CompaniesListCtrl);

  //---

  CompaniesListCtrl.$inject = [
    '$rootScope', '$state', '$scope', '$location',
    'CompaniesResource', 'InputFocusFactory',
    '$log', '$filter'
  ];

  function CompaniesListCtrl(
    $rootScope, $state, $scope, $location,
    resource, input, console, $filter
  ) {

    var ctrlName = 'CompaniesListCtrl';


    var vm = this;
    vm.companies = undefined;

    $rootScope.$on('company:updated:event', function(event,  value) {
      event.preventDefault(); event.stopPropagation();
      var c = $filter('filter')(vm.companies, {id: value.id})[0];
      vm.companies[vm.companies.indexOf(c)] = value;
    });

    $rootScope.$on('company:deleted:event', function(event, value) {
      event.preventDefault(); event.stopPropagation();
      vm.companies.splice(value, 1);
    });

    $rootScope.$on('company:added:event', function(event, value) {
      event.preventDefault(); event.stopPropagation();
      vm.companies.splice(0, 0, value);
    });

    function loadData() {
      resource.query(
        function(result) {
          vm.companies = result;
        });
    }


    loadData();

  }

});
