'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sanitize = sanitize;
exports.toObject = toObject;

var _lodash = require('lodash');

var _fp = require('lodash/fp');

var defaultKeys = [
  '_id',
  'id',
  'createdAt',
  'updatedAt',
  'payoutTime',
  'postDate',
  'latestComment',
  'rank'
];

function sanitize(data) {
  var keys =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultKeys;
  if (!data) return data;
  if (typeof keys === 'string') keys = keys.split(' ');
  keys = (0, _lodash.concat)(defaultKeys, keys);

  var reducer = (result, key) => {
    var val = result[key];
    if (!val) return result;
    if ((0, _lodash.isArray)(val))
      return (0, _fp.set)(
        key,
        val.map(r => sanitize(r, keys)),
        result
      );
    if ((0, _lodash.isPlainObject)(val))
      return (0, _fp.set)(key, sanitize(val, keys), result);
    if (keys.includes(key)) return (0, _fp.set)(key, '[SANITIZED]', result);
    return result;
  };

  return Object.keys(data).reduce(reducer, data);
}

function toObject(data) {
  if (!data) return data;
  if ((0, _lodash.isArray)(data)) return data.map(toObject);

  if (data.constructor && data.constructor.name === 'model') {
    return data.toObject();
  }

  if ((0, _lodash.isPlainObject)(data)) {
    var newData = {};
    Object.keys(data).forEach(k => (newData[k] = toObject(data[k])));
    return newData;
  }

  return data;
}
//# sourceMappingURL=utils.js.map
