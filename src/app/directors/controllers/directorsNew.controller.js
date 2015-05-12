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
    vm.newDirector = undefined;
    vm.saveDirector = saveDirector;


    function addNew() {
      vm.newDirectorAdding = true;
    }

    function saveDirector() {
      console.log($scope.newDirector);
      alert('you cannot save $scope.newDirector, work in progress');
    }

  }

});
