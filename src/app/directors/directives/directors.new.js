define(function(require) {
  'use strict';

  var module = require('../module');


  module.directive('directorsNew', directorsNew);


  function directorsNew() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/directors/templates/directors-new.html',
      controller: 'DirectorsNewCtrl'
    };


    return directive;


    }


});
