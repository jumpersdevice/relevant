'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _express = _interopRequireDefault(require('express'));

var _email = _interopRequireDefault(require('./email.controller'));

var _auth = _interopRequireDefault(require('../../auth/auth.service'));

var router = _express.default.Router();

router.put('/', _auth.default.hasRole('admin'), _email.default.index);
router.put('/save', _auth.default.hasRole('admin'), _email.default.save);
router.get('/load', _auth.default.hasRole('admin'), _email.default.load);
module.exports = router;
//# sourceMappingURL=index.js.map
