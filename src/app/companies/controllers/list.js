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


    function loadData(page) {
      resource.query(
        function(result) {
          vm.companies = result;
        });
    }


    loadData();

  }

});
