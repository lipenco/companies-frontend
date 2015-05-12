
define(function(require) {
  'use strict';

  var module = require('./module');
  require('./directives/directors.list');
  require('./directives/directors.new');
  require('./controllers/directorsList.controller');
  require('./controllers/directorsNew.controller');

  return module;

});
