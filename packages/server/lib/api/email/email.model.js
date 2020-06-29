"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var {
  Schema
} = _mongoose.default;
var EmailSchema = new Schema({
  html: String,
  email: String,
  subject: String,
  campaign: String
});
module.exports = _mongoose.default.model('Email', EmailSchema);
//# sourceMappingURL=email.model.js.map