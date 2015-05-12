define(function(require) {
  'use strict';

  var module = require('../module');

  module.factory('CompaniesResource', CompaniesResource);


  CompaniesResource.$inject = ['$resource'];

  function CompaniesResource($resource) {

    var rest = $resource(
      // 'https://lipenco-company-api.herokuapp.com/api/v1/companies/:id',
      'http://localhost:9292/api/v1/companies/:id',
      {
        'id': ''
      },
      {
        'update': { 'method': 'PUT' }
      }
    );


    return rest;

  }

});
