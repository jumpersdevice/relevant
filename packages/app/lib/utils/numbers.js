'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.toNumber = toNumber;
exports.toFixed = toFixed;
exports.percentChange = percentChange;
exports.abbreviateNumber = abbreviateNumber;
exports.capitalize = capitalize;
exports.getTimestamp = getTimestamp;
exports.getMonth = getMonth;
exports.getDayMonthYearTimestamp = getDayMonthYearTimestamp;
exports.guid = guid;
exports.timeLeft = timeLeft;
exports.timeLeftTick = timeLeftTick;
var _relativeTime = _interopRequireDefault(require('dayjs/plugin/relativeTime'));
var _dayjs = _interopRequireDefault(require('dayjs'));
_dayjs.default.extend(_relativeTime.default);
function toNumber(num, dec) {
  if (num === undefined || dec === undefined) return null;
  return num / Math.pow(10, dec);
}
function toFixed(num, dec) {
  if (!num) return 0;
  return num.toFixed(dec);
}
function percentChange(user) {
  var totalPercent = 0;
  if (!user || !user.relevanceRecord || !user.relevanceRecord.length) return 0;
  user.relevanceRecord.forEach(function(record) {
    var percent = 0;
    var endInterval = new Date();
    var endRelevance = user.pagerank;
    var last = record;
    var oldRel = Math.abs(last.relevance);
    if (oldRel === 0) return;
    percent = ((endRelevance - oldRel) * 100) / oldRel;
    var timeInteraval = endInterval - new Date(last.time);
    var scale = (1 * 24 * 60 * 60 * 1000) / timeInteraval;
    percent *= scale;
    totalPercent += percent;
  });
  var total = totalPercent / user.relevanceRecord.length;
  return total;
}
function abbreviateNumber(num, _fixed) {
  if (typeof num !== 'number') return num;
  var fixed = 0;
  if (typeof _fixed === 'number') fixed = _fixed;
  if (num === null) {
    return null;
  }
  if (num === 0) {
    return '0';
  }
  if (typeof num !== 'number') num = Number(num);
  fixed = !fixed || fixed < 0 ? 0 : fixed;
  var b = num.toPrecision(2).split('e');
  var k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3);
  var newNum = k < 1 ? num : num / Math.pow(10, k * 3);
  if (Math.abs(newNum) < 100) fixed = 1;
  if (Math.abs(newNum) < 10) fixed = 1;
  if (Math.abs(newNum) < 1) fixed++;
  if (Math.abs(newNum) < 0.1) fixed++;
  if (Math.abs(newNum) < 0.01) fixed++;
  if (Math.abs(newNum) < 0.001) fixed++;
  var c = newNum.toFixed(fixed);
  var d = c < 0 ? -Math.abs(c) : Math.abs(c);
  var e = d + ['', 'K', 'M', 'B', 'T'][k];
  return e;
}
function capitalize(string) {
  return string
    .split(' ')
    .map(function(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join(' ');
}
function getTimestamp(date, withoutSuffix) {
  if (!date) return null;
  var fromNow = (0, _dayjs.default)(date).fromNow(withoutSuffix);
  return capitalize(fromNow);
}
function getMonth(date) {
  if (!date) return null;
  return (0, _dayjs.default)(date).format('MMMM');
}
function getDayMonthYearTimestamp(date) {
  if (!date) return null;
  return (0, _dayjs.default)(date).format('MMM D, YYYY');
}
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0;
    var v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function timeLeft(_ref) {
  var _date = _ref._date,
    index = _ref.index;
  var now = new Date();
  var date = new Date(_date);
  var seconds = Math.round((date.getTime() - now.getTime()) / 1000);
  var d = 0;
  var h = Math.round(seconds / 3600);
  var m = Math.round((seconds % 3600) / 60);
  var s = seconds % 60;
  var abr = ['hr', 'min', 'sec'];
  var data = [h > 9 ? h : d ? h : h || '0', m > 9 ? m : d && h ? m : m || '0', s]
    .map(function(t, i) {
      return t ? t + abr[i] : null;
    })
    .filter(function(t) {
      return t;
    });
  if (index) return data[index - 1];
  return data.join(':');
}
function timeLeftTick(_date) {
  var now = new Date();
  var date = new Date(_date);
  var seconds = Math.round((date.getTime() - now.getTime()) / 1000);
  var d = Math.round(seconds / (3600 * 24));
  var h = Math.round((seconds % 24) / 3600);
  var m = Math.round((seconds % 3600) / 60);
  var s = seconds % 60;
  var abr = [' day'.concat(d > 1 ? 's' : '', ' '), ':', ':', ''];
  var fmtT = function fmtT(t) {
    return t < 10 ? '0' + t : t || '00';
  };
  var data = [d, fmtT(h), fmtT(m), fmtT(s)]
    .map(function(t, i) {
      return t ? t + abr[i] : null;
    })
    .filter(function(t) {
      return t;
    });
  return data.join('');
}
//# sourceMappingURL=numbers.js.map
