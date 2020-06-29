'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _express = _interopRequireDefault(require('express'));

var _communityFeed = _interopRequireDefault(require('./communityFeed.controller'));

var _auth = _interopRequireDefault(require('../../auth/auth.service'));

var _middlewares = require('../../utils/middlewares');

var router = _express.default.Router();

router.get(
  '/',
  _auth.default.blocked(),
  (0, _middlewares.asyncMiddleware)(_communityFeed.default.index)
);
module.exports = router;
//# sourceMappingURL=index.js.map
