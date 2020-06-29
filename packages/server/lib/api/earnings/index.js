"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _earnings = _interopRequireDefault(require("./earnings.controller"));

var _auth = _interopRequireDefault(require("../../auth/auth.service"));

// const { asyncMiddleware } = require('../../utils/middlewares');
var router = _express.default.Router();

router.get('/', _auth.default.isAuthenticated(), _earnings.default.index);
router.put('/:id', _auth.default.isAuthenticated(), _earnings.default.updateCashoutLog);
module.exports = router;
//# sourceMappingURL=index.js.map