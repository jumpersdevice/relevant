'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = earnings;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _remove = _interopRequireDefault(require('lodash/fp/remove'));
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var initialState = { list: [], entities: {}, pending: [] };
function earnings() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_EARNINGS: {
      var _objectSpread2;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        ((_objectSpread2 = {}),
        (0, _defineProperty2.default)(
          _objectSpread2,
          action.payload.status || 'list',
          [].concat(
            (0, _toConsumableArray2.default)(
              state[action.payload.status || 'list'].slice(0, action.payload.skip)
            ),
            (0, _toConsumableArray2.default)(action.payload.data.result)
          )
        ),
        (0, _defineProperty2.default)(
          _objectSpread2,
          'entities',
          _objectSpread(
            _objectSpread({}, state.entities),
            action.payload.data.entities.earnings
          )
        ),
        _objectSpread2)
      );
    }
    case types.ADD_EARNING: {
      var _objectSpread4;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        ((_objectSpread4 = {}),
        (0, _defineProperty2.default)(
          _objectSpread4,
          action.payload.status,
          [action.payload._id].concat(
            (0, _toConsumableArray2.default)(state[action.payload.status] || [])
          )
        ),
        (0, _defineProperty2.default)(
          _objectSpread4,
          'entities',
          _objectSpread(
            _objectSpread({}, state.entities),
            {},
            (0, _defineProperty2.default)({}, action.payload._id, action.payload)
          )
        ),
        (0, _defineProperty2.default)(
          _objectSpread4,
          'list',
          [action.payload._id].concat((0, _toConsumableArray2.default)(state.list))
        ),
        _objectSpread4)
      );
    }
    case types.REMOVE_EARNING: {
      var _id = action.payload._id;
      var pending = state.pending,
        list = state.list;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          pending: (0, _remove.default)(function(id) {
            return id === _id;
          }, pending),
          list: (0, _remove.default)(function(id) {
            return id === _id;
          }, list),
          entities: _objectSpread(
            _objectSpread({}, state.entities),
            {},
            (0, _defineProperty2.default)({}, action.payload._id, null)
          )
        }
      );
    }
    case types.UPDATE_EARNING: {
      var _action$payload = action.payload,
        _id2 = _action$payload._id,
        status = _action$payload.status;
      var _pending = state.pending;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          pending:
            status !== 'pending'
              ? (0, _remove.default)(function(id) {
                  return id === _id2;
                }, _pending)
              : _pending,
          entities: _objectSpread(
            _objectSpread({}, state.entities),
            {},
            (0, _defineProperty2.default)({}, action.payload._id, action.payload)
          )
        }
      );
    }
    default:
      return state;
  }
}
//# sourceMappingURL=earnings.reducer.js.map
