
# TODO:

1 - update `/src/require.unit.load.js`

```javascript
define(function(require) {
  'use strict';

  ...

  // TODO: add here tests unit module to load

  // ↓↓↓ ADD ↓↓↓
  require('<%= location %>/tests/unit/package');

});
```

2 - update `/src/require.mock.load.js`

```javascript
define(function(require) {
  'use strict';

  ...

  //-------------------
  // @begin: load mocks

  ...

  // TODO: add here mock module to load

  // ↓↓↓ ADD ↓↓↓
  require('<%= location %>/mock/package');

  // @end: load mocks
  //-------------------

  ...

});
```

3 - update `/src/app/main/module.js`
    or in some specific application module

```javascript
define(function(require) {
  'use strict';

  var angular = require('angular');

  ...

  // angular module definition
  return angular.module(

    // module name
    'main',

    // module dependencies
    [

      ...


      // TODO: add here module to load

      // ↓↓↓ ADD ↓↓↓
      require('<%= location %>/package').name,

    ]
  );

});
```

4 - delete this file : `README.md`


=------------------------------------------------------------------------------=

Values to templates:

  name: <%= name %>

  name capitalized: <%= helpers.capitalize( name ) %>

  location: <%= location %>

  backend resource: <%= endpoint %>

  backend resource regexp escape: <%= helpers.stringRegExpEscape( endpoint ) %>

=------------------------------------------------------------------------------=
