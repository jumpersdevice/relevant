'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var express = require('express');

var passport = require('passport');

var auth = require('../auth.service');

require('./passport');

var router = express.Router();
router.post('/', auth.currentUser(), (req, res, next) => {
  passport.authenticate(
    'web3',
    /*#__PURE__*/ (function() {
      var _ref = (0, _asyncToGenerator2.default)(function*(err, user, info) {
        var error = err || info;
        if (error) return next(error);
        if (!user)
          return res.status(404).json({
            message: 'Something went wrong, please try again.'
          });
        var token = auth.signToken(user._id, user.role);
        req.universalCookies.set('token', token);
        return res.json({
          token
        });
      });

      return function(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    })()
  )(req, res, next);
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map
