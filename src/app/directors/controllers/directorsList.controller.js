define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DirectorsListCtrl', DirectorsListCtrl);


  DirectorsListCtrl.$inject = [
    '$rootScope', '$scope', '$state',
    'CompaniesResource', '$stateParams',
    'InputFocusFactory', 'toaster'
  ];

  function DirectorsListCtrl($rootScope, $scope, $state, resource, params, input, $toaster) {
    var vm = $scope;
    vm.directors = $scope.vm.directors;
    vm.company = $scope.vm.company;

    function getList() {
      resource.get(vm.company, {'id': vm.company},
      function(res) {
        vm.directors = res.directors;
        $scope.vm.directors = vm.directors;
      },
      function(res){
        console.log("error");
      });
    }

    if (vm.company.id) {
      getList();
    }


  }

});
