define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DirectorsListCtrl', DirectorsListCtrl);


  DirectorsListCtrl.$inject = [
    '$rootScope', '$scope', '$state',
    'CompaniesResource', 'DirectorsResource', '$stateParams',
    'InputFocusFactory', 'toaster', '$resource', '$filter'
  ];

  function DirectorsListCtrl($rootScope, $scope, $state, resource, directorsResource, params, input, $toaster, $resource, $filter) {
    var vm = $scope;
    vm.directors = $scope.vm.directors;
    vm.company = $scope.vm.company;
    vm.deleteDirector = deleteDirector;



    function deleteDirector(director) {
      vm.directors.splice(director.$index, 1);
      if (director.id) {
        directorsResource.delete(director, {'id': director.id},
        function(res) {
          $toaster.pop('success', 'You deleted Founder', director.name);
        },
        function(res){
          $toaster.pop('error', 'Something went wrong', 'Try again');
        });
      }
    }

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
