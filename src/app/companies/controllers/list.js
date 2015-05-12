define(function(require) {
  'use strict';

  var module = require('../module');
  require('../resources/rest');

  module.controller('CompaniesListCtrl', CompaniesListCtrl);

  //---

  CompaniesListCtrl.$inject = [
    '$rootScope', '$state', '$scope', '$location',
    'CompaniesResource', 'InputFocusFactory',
    '$log'
  ];

  function CompaniesListCtrl(
    $rootScope, $state, $scope, $location,
    resource, input, console
  ) {

    var ctrlName = 'CompaniesListCtrl';


    var vm = this;
    vm.companies = undefined;

    $rootScope.$on('company:updated:event', function(event, value) {
      event.preventDefault(); event.stopPropagation();
      vm.companies[value.id] = value;
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
