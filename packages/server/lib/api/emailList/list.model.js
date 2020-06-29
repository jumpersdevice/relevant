"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

const {
  Schema
} = _mongoose.default;
const ListSchema = new Schema({
  email: {
    type: String
  },
  name: {
    type: String
  },
  status: {
    type: String,
    default: 'waitlist'
  }
}, {
  timestamps: true
});
ListSchema.index({
  email: 1
}, {
  unique: true
});
module.exports = _mongoose.default.model('List', ListSchema);
//# sourceMappingURL=list.model.js.map