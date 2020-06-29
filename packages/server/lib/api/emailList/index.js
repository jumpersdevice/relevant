"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _list = _interopRequireDefault(require("./list.controller"));

var _auth = _interopRequireDefault(require("../../auth/auth.service"));

const {
  asyncMiddleware
} = require("../../utils/middlewares");

const router = _express.default.Router();

router.get('/', _auth.default.hasRole('admin'), _list.default.index);
router.post('/', _list.default.addWaitlist);
router.delete('/:id', _auth.default.hasRole('admin'), _list.default.delete);
router.put('/', _auth.default.hasRole('admin'), asyncMiddleware(_list.default.invite)); // router.put('/:id', controller.update);

module.exports = router;
//# sourceMappingURL=index.js.map