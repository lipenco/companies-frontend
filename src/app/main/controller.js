define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = ['ProgressConfig', 'MenuConfig'];

  function MainCtrl(progressConfig, menu) {
    var vm = this;


    //--- @begin: loading progressbar config
    progressConfig.eventListeners();
    progressConfig.color('#428bca');
    progressConfig.height('3px');
    //--- @end: loading progressbar config

    //--- @begin: menu items
    // menu.addMenuItem('Home', 'home');
    // menu.addMenuItem('Companies', 'companies');
    //--- @end: menu items

  }

});
