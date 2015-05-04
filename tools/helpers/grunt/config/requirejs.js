module.exports = function(grunt) {

grunt.config('requirejs', {

  /*
    http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project

    http://requirejs.org/docs/optimization.html

    https://github.com/jrburke/r.js/blob/master/build/example.build.js

    https://github.com/CaryLandholt/AngularFun/blob/master/Gruntfile.coffee
  */

  // https://github.com/kvindasAB/angular-enterprise-kickstart/blob/master/Gruntfile.js#L303
  compile: {
    options: {
      baseUrl: './<%= project.paths.build %>/',

      mainConfigFile: './<%= project.require.build %>',

      name: '<%= project.require.name %>',
      out: './<%= project.paths.dist %>/<%= project.require.name %>.js',

      useStrict: true,
      wrap: {
        start: '(function() {\'use strict\';',
        end: '})();'
      },
      optimize: "uglify2",
      uglify2: {
        mangle:                 true,
        compress: {
          'drop_console':       true,
          'drop_debugger':      true,
          'dead_code':          true,
          'join_vars':          true,
          'if_return':          true,
          'negate_iife':        true,
          booleans:             true,
          loops:                true,
          unused:               true
        }
      }
    }
  }

});

};
