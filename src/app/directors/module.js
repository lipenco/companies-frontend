define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('angularMessages');

  require('uiRouter');
  require('uiBootstrap');
  require('toaster');

  // angular module definition
  return angular.module(
    // module name
    'directors',

    // module dependencies
    [
      'ngResource',
      'ngMessages',

      'ui.router',
      'ui.bootstrap',
      'toaster',

      require('shared/fend/input-utils/package').name
    ]
  );

});
