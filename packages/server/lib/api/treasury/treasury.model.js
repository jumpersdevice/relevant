"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

const {
  Schema
} = _mongoose.default;
const TreasurySchema = new Schema({
  balance: {
    type: Number,
    default: 0
  },
  totalTokens: {
    type: Number,
    default: 0
  },
  currentShares: {
    type: Number,
    default: 0
  },
  postCount: {
    type: Number,
    default: 0
  },
  rewardFund: {
    type: Number,
    default: 0
  },
  lastRewardFundUpdate: {
    type: Date
  },
  avgTwitterScore: {
    type: Number,
    default: 0
  },
  twitterCount: {
    type: Number,
    default: 0
  },
  lastTwitterUpdate: {
    type: Date
  },
  community: String,
  unAllocatedRewards: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

var _default = _mongoose.default.model('Treasury', TreasurySchema);

exports.default = _default;
//# sourceMappingURL=treasury.model.js.map