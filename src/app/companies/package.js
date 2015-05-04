
define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controllers/list');
  require('./resources/rest');
  require('./states');

  return module;

});
