define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DirectorsNewCtrl', DirectorsNewCtrl);


  DirectorsNewCtrl.$inject = [
    '$rootScope', '$scope', '$state',
    'CompaniesResource', '$stateParams',
    'InputFocusFactory', 'toaster'
  ];

  function DirectorsNewCtrl($rootScope, $scope, $state, resource, params, input, $toaster) {
    var vm = $scope;
    vm.addNew = addNew;
    vm.newDirectorAdding = false;
    vm.newDirector = {};
    vm.saveDirector = saveDirector;
    vm.directors = $scope.vm.directors;
    vm.close = close;


    function addNew() {
      vm.newDirectorAdding = true;
    }

    function close() {
      vm.newDirectorAdding = false;
    }

    function saveDirector() {
      $scope.vm.directors.push(vm.newDirector);
      vm.newDirectorAdding = false;
      vm.newDirector = {};
    }

  }

});
