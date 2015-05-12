define(function(require) {
  'use strict';

  var module = require('../module');


  module.directive('directorsList', directorsList);


  function directorsList() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/directors/templates/directors-list.html',
      controller: 'DirectorsListCtrl'
    };


    return directive;


    }


});
