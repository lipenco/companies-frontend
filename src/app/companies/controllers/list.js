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
      loadData();
    });

    $rootScope.$on('company:deleted:event', function(event, value) {
      event.preventDefault(); event.stopPropagation();
      loadData();
    });

    $rootScope.$on('company:added:event', function(event, value) {
      event.preventDefault(); event.stopPropagation();
      loadData();
    });


    function getColor(index) {
      var colorNum = index % 5;
      return 'color' + colorNum;
    }


    function loadData() {
      resource.query(
        function(result) {
          vm.companies = result;
          angular.forEach(vm.companies, function(company, key) {
            company.color = getColor(key);
          });
        });
    }


    loadData();

  }

});
