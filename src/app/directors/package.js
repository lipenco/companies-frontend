
define(function(require) {
  'use strict';

  var module = require('./module');
  require('./directives/directors.new');
  require('./controllers/directorsNew.controller');

  return module;

});
