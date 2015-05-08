define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');

  require('uiRouter');
  require('uiBootstrap');
  require('toaster');

  // angular module definition
  return angular.module(
    // module name
    'companies',

    // module dependencies
    [
      'ngResource',

      'ui.router',
      'ui.bootstrap',
      'toaster',

      require('shared/fend/input-utils/package').name,
      require('shared/fend/pagination/package').name
    ]
  );

});
