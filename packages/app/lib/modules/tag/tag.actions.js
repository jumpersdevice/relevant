'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setDiscoverTags = setDiscoverTags;
exports.selectTag = selectTag;
exports.deselectTag = deselectTag;
exports.updateParentTag = updateParentTag;
exports.setParentTags = setParentTags;
exports.getDiscoverTags = getDiscoverTags;
exports.searchTags = searchTags;
exports.createTag = createTag;
exports.updateTag = updateTag;
exports.getParentTags = getParentTags;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
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
var Alert = _utils.alert.Alert();
var reqOptions = (function() {
  var _ref = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee() {
      var tk;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return _utils.storage.getToken();
            case 2:
              tk = _context.sent;
              return _context.abrupt('return', {
                credentials: 'include',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer '.concat(tk)
                }
              });
            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return function reqOptions() {
    return _ref.apply(this, arguments);
  };
})();
function setDiscoverTags(data) {
  return { type: types.SET_DISCOVER_TAGS, payload: data };
}
function selectTag(tag) {
  return { type: 'SELECT_TAG', payload: tag };
}
function deselectTag(tag) {
  return { type: 'DESELECT_TAG', payload: tag };
}
function updateParentTag(tag) {
  return { type: types.UPDATE_PARENT_TAG, payload: tag };
}
function setParentTags(data) {
  return { type: types.SET_PARENT_TAGS, payload: data };
}
function getDiscoverTags() {
  return function(dispatch) {
    fetch(process.env.API_SERVER + '/api/tag?sort=count', {
      credentials: 'include',
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    })
      .then(_utils.api.handleErrors)
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJSON) {
        dispatch(setDiscoverTags(responseJSON));
      })
      .catch(function(err) {
        return Alert('Error getting tags ' + err.message);
      });
  };
}
function searchTags(tag) {
  return function(dispatch) {
    if (!tag || tag === '') {
      return dispatch(setDiscoverTags([]));
    }
    return fetch(process.env.API_SERVER + '/api/tag/search/' + tag, {
      credentials: 'include',
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJSON) {
        dispatch(setDiscoverTags(responseJSON));
      })
      .catch(function(error) {
        Alert('Search error ', error);
      });
  };
}
function createTag(tag) {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.t0 = fetch;
                _context2.t1 = process.env.API_SERVER + '/api/tag';
                _context2.t2 = _objectSpread;
                _context2.t3 = _objectSpread;
                _context2.t4 = {};
                _context2.next = 7;
                return reqOptions();
              case 7:
                _context2.t5 = _context2.sent;
                _context2.t6 = (0, _context2.t3)(_context2.t4, _context2.t5);
                _context2.t7 = {};
                _context2.t8 = { method: 'POST', body: JSON.stringify(tag) };
                _context2.t9 = (0, _context2.t2)(
                  _context2.t6,
                  _context2.t7,
                  _context2.t8
                );
                return _context2.abrupt(
                  'return',
                  (0, _context2.t0)(_context2.t1, _context2.t9)
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(responseJSON) {
                      dispatch(setParentTags([responseJSON]));
                    })
                    .catch(function(error) {
                      Alert('error creating tag ' + error);
                      return { status: false, data: error };
                    })
                );
              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function updateTag(tag) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.t0 = fetch;
                _context3.t1 = process.env.API_SERVER + '/api/tag/categories';
                _context3.t2 = _objectSpread;
                _context3.t3 = _objectSpread;
                _context3.t4 = {};
                _context3.next = 7;
                return reqOptions();
              case 7:
                _context3.t5 = _context3.sent;
                _context3.t6 = (0, _context3.t3)(_context3.t4, _context3.t5);
                _context3.t7 = {};
                _context3.t8 = { method: 'PUT', body: JSON.stringify(tag) };
                _context3.t9 = (0, _context3.t2)(
                  _context3.t6,
                  _context3.t7,
                  _context3.t8
                );
                return _context3.abrupt(
                  'return',
                  (0, _context3.t0)(_context3.t1, _context3.t9)
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(responseJSON) {
                      dispatch(updateParentTag(responseJSON));
                    })
                );
              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    );
    return function(_x2) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function getParentTags() {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee4(dispatch) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.t0 = fetch;
                _context4.t1 = process.env.API_SERVER + '/api/tag/categories?active';
                _context4.t2 = _objectSpread;
                _context4.t3 = { method: 'GET' };
                _context4.next = 6;
                return reqOptions();
              case 6:
                _context4.t4 = _context4.sent;
                _context4.t5 = (0, _context4.t2)(_context4.t3, _context4.t4);
                (0, _context4.t0)(_context4.t1, _context4.t5)
                  .then(function(response) {
                    return response.json();
                  })
                  .then(function(responseJSON) {
                    dispatch(setParentTags(responseJSON));
                  })
                  .catch(function(error) {
                    return Alert('parents error', error);
                  });
              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    );
    return function(_x3) {
      return _ref4.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=tag.actions.js.map
