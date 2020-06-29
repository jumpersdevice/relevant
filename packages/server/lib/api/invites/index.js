"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _invite = _interopRequireDefault(require("./invite.controller"));

var _auth = _interopRequireDefault(require("../../auth/auth.service"));

var router = _express.default.Router();

router.get('/', _auth.default.isAuthenticated(), _invite.default.index);
router.get('/count', _auth.default.isAuthenticated(), _auth.default.communityMember(), _invite.default.count);
router.put('/', _auth.default.isAuthenticated(), _invite.default.adminInvite);
router.post('/', _auth.default.isAuthenticated(), _auth.default.communityMember(), _invite.default.create);
router.post('/email', _auth.default.isAuthenticated(), _invite.default.sendEmail);
router.delete('/:id', _auth.default.hasRole('admin'), _invite.default.destroy);
module.exports = router;
//# sourceMappingURL=index.js.map