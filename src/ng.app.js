define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.element(document).ready(startAngularApp);

  //---

  function startAngularApp() {

    // define run module to bootstrap application
    var module = angular.module(
      // module name
      'run',

      // module dependencies
      [
        require('app/main/package').name
      ]
    );

    // start angular app
    angular.bootstrap(document, [module.name]);

  }

});
