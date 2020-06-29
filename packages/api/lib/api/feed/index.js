'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _express = _interopRequireDefault(require('express'));

var _feed = _interopRequireDefault(require('./feed.controller'));

var _auth = _interopRequireDefault(require('../../auth/auth.service'));

var router = _express.default.Router();

router.get('/', _auth.default.isAuthenticated(), _feed.default.get);
router.get('/post/:id', _auth.default.isAuthenticated(), _feed.default.post);
router.get('/unread', _auth.default.isAuthenticated(), _feed.default.unread);
router.put('/markread', _auth.default.isAuthenticated(), _feed.default.markRead);
module.exports = router;
//# sourceMappingURL=index.js.map
