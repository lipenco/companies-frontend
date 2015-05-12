define(function(require) {
  'use strict';

  var module = require('../module');
  require('../resources/rest');


  module.controller('CompaniesNewCtrl', CompaniesNewCtrl);

  //---

  CompaniesNewCtrl.$inject = [
    '$rootScope', '$scope', '$state',
    'CompaniesResource',
    'InputFocusFactory', 'toaster'
  ];

  function CompaniesNewCtrl($rootScope, $scope, $state, resource, input, $toaster) {
    var vm = this;
    vm.toggleContent = toggleContent;
    vm.company = {};
    vm.save = save;
    vm.directors = [];

    var ctrlName = 'CompaniesNewCtrl';
    input = input.get(ctrlName);

    input.config(
      $scope,
      [
        'focusNameInput'
      ]);





    function save() {
      vm.company.directors = angular.toJson(vm.directors);
      resource.save(vm.company, {'id': vm.company.id},
      function(res) {
        $rootScope.$emit('company:added:event', res);
        $toaster.pop('success', 'You added new Company', vm.company.name);
        toggleContent(false);
        $state.go('companies.list');
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
    input.setFocus('focusNameInput');





  }

});
