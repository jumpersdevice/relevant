'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports._request = _request;
exports.reqOptions = reqOptions;
exports.handleErrors = handleErrors;
exports.queryParams = exports.request = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var storage = _interopRequireWildcard(require('./storage'));
var _env = require('./env');
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
var request = function request(options) {
  return function(dispatch, getState) {
    return _request(options, getState);
  };
};
exports.request = request;
function _request(_x, _x2) {
  return _request2.apply(this, arguments);
}
function _request2() {
  _request2 = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee(options, getState) {
      var state, community, query, params;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              state = getState();
              community = state.community.active;
              query = community
                ? _objectSpread({ community: community }, options.query)
                : _objectSpread({}, options.query);
              params = _objectSpread(_objectSpread({}, options), {}, { query: query });
              return _context.abrupt('return', getDataFromClient(params));
            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _request2.apply(this, arguments);
}
function getDataFromClient(_x3) {
  return _getDataFromClient.apply(this, arguments);
}
function _getDataFromClient() {
  _getDataFromClient = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee2(params) {
      var uri, queryString, response, responseOk;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              uri = constructUri(params);
              queryString = queryParams(params.query);
              _context2.t0 = fetch;
              _context2.t1 = uri + queryString;
              _context2.t2 = _objectSpread;
              _context2.t3 = _objectSpread;
              _context2.t4 = { method: params.method };
              _context2.next = 9;
              return reqOptions();
            case 9:
              _context2.t5 = _context2.sent;
              _context2.t6 = (0, _context2.t3)(_context2.t4, _context2.t5);
              _context2.t7 = {};
              _context2.t8 = { body: params.body };
              _context2.t9 = (0, _context2.t2)(_context2.t6, _context2.t7, _context2.t8);
              _context2.next = 16;
              return (0, _context2.t0)(_context2.t1, _context2.t9);
            case 16:
              response = _context2.sent;
              _context2.next = 19;
              return handleErrors(response);
            case 19:
              responseOk = _context2.sent;
              return _context2.abrupt('return', responseOk.json());
            case 21:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return _getDataFromClient.apply(this, arguments);
}
function constructUri(options) {
  var rootUrl = options.uri || _env.API_URL;
  var apiPath = options.endpoint.match('auth') ? '' : '/api/';
  var path = options.path || '';
  var params = options.params
    ? Object.keys(options.params).reduce(function(a, key) {
        return a + '/' + options.params[key];
      }, '')
    : '';
  return rootUrl + apiPath + options.endpoint + path + params;
}
function reqOptions() {
  return _reqOptions.apply(this, arguments);
}
function _reqOptions() {
  _reqOptions = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee3() {
      var token;
      return _regenerator.default.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return storage.getToken();
              case 3:
                token = _context3.sent;
                return _context3.abrupt('return', {
                  credentials: 'include',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer '.concat(token)
                  }
                });
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', {
                  credentials: 'include',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                });
              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        },
        _callee3,
        null,
        [[0, 7]]
      );
    })
  );
  return _reqOptions.apply(this, arguments);
}
var queryParams = function queryParams(params) {
  if (!params) return '';
  var paramString = Object.keys(params)
    .filter(function(p) {
      return params[p];
    })
    .map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    })
    .join('&');
  if (paramString && paramString.length) return '?' + paramString;
  return '';
};
exports.queryParams = queryParams;
function handleErrors(_x4) {
  return _handleErrors.apply(this, arguments);
}
function _handleErrors() {
  _handleErrors = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee4(response) {
      var error, json;
      return _regenerator.default.wrap(
        function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                if (response.ok) {
                  _context4.next = 14;
                  break;
                }
                error = response.statusText;
                _context4.prev = 2;
                _context4.next = 5;
                return response.json();
              case 5:
                json = _context4.sent;
                if (!json) {
                  _context4.next = 9;
                  break;
                }
                error = json.message;
                throw Error(error);
              case 9:
                _context4.next = 14;
                break;
              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4['catch'](2);
                throw Error(error);
              case 14:
                return _context4.abrupt('return', response);
              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        },
        _callee4,
        null,
        [[2, 11]]
      );
    })
  );
  return _handleErrors.apply(this, arguments);
}
//# sourceMappingURL=api.js.map
