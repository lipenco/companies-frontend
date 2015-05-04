define(function(require) {
  'use strict';

  var module = require('../module');
  require('../resources/rest');

  module.controller('CompaniesListCtrl', CompaniesListCtrl);

  //---

  CompaniesListCtrl.$inject = [
    '$rootScope', '$scope', '$location',
    'CompaniesResource', 'PaginationFactory', 'InputFocusFactory',
    '$log'
  ];

  function CompaniesListCtrl(
    $rootScope, $scope, $location,
    resource, pagination, input, console
  ) {

    var ctrlName = 'CompaniesListCtrl';


    var vm = this;
    vm.companies = undefined;
    vm.openItemInfo = openItemInfo;
    vm.choosenCompany = undefined;


    function loadData(page) {
      resource.query(
        function(result) {
          console.debug(result);
          vm.companies = result;
        });
    }

    function openItemInfo(company) {
      var mq = window.innerWidth;
      if( $('.cd-gallery').offset().top > $(window).scrollTop() && mq != 'mobile') {
        $('body,html').animate({
            'scrollTop': $('.cd-gallery').offset().top
        }, 100, function(){
            toggleContent(true);
        });
      } else {
        toggleContent(true);
      }
      vm.choosenCompany = company;
    }

    function toggleContent(bool) {
      if (bool) {
        $('body').addClass('overflow-hidden');
        $('.cd-folding-panel').addClass('is-open');
        $('.cd-main').addClass('fold-is-open');

      } else {
        $('.cd-folding-panel').removeClass('is-open');
        $('.cd-main').removeClass('fold-is-open');
      }
    }



    loadData();

  }

});
