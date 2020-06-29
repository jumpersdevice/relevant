"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

const {
  Schema
} = _mongoose.default;
const EmailSchema = new Schema({
  html: String,
  email: String,
  subject: String,
  campaign: String
});
module.exports = _mongoose.default.model('Email', EmailSchema);
//# sourceMappingURL=email.model.js.map