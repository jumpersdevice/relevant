'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _treasury = _interopRequireDefault(require('./treasury.model'));

exports.index = (req, res, next) => {
  _treasury.default.find().exec((err, treasury) => {
    if (err) return next(err);
    return res.status(200).json(treasury);
  });
};
//# sourceMappingURL=treasury.controller.js.map
