define(function(require) {
  'use strict';

  var module = require('../module');
  require('../resources/rest');

  module.controller('CompaniesShowCtrl', CompaniesShowCtrl);

  //---

  CompaniesShowCtrl.$inject = [
    '$rootScope', '$scope', '$state',
    'CompaniesResource', '$stateParams',
    'InputFocusFactory', 'toaster'
  ];

  function CompaniesShowCtrl($rootScope, $scope, $state, resource, params, input, $toaster) {
    var vm = this;
    vm.toggleContent = toggleContent;
    vm.company = params;
    vm.editing = false;
    vm.edit = edit;
    vm.update = update;


    function edit() {
      console.log("edit");
      vm.editing = true;
    }

    function update() {
      resource.update(vm.company, {'id': vm.company.id},
      function(res) {
        $rootScope.$emit('company:updated:event', res);
        $toaster.pop('success', 'You upddated Company', vm.company.name);
        vm.editing = false;
      },
      function(res){
        $toaster.pop('error', 'Something went wrong', 'Correct the form');
      });
    }


    function toggleContent(bool) {
      if (bool) {
        $('body').addClass('overflow-hidden');
        $('.cd-folding-panel').addClass('is-open');
        $('.cd-main').addClass('fold-is-open');

      } else {
        $('body').removeClass('overflow-hidden');
        $('.cd-folding-panel').removeClass('is-open');
        $('.cd-main').removeClass('fold-is-open');
        $state.go('companies.list');
      }
    }

    toggleContent(true);





  }

});
