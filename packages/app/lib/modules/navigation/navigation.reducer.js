'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = exports.initialState = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _actionTypes = require('../../core/actionTypes');
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
var initialState = {
  showTopics: false,
  reload: 0,
  scroll: false,
  gesture: null,
  discover: {},
  stats: {},
  wallet: {},
  createPost: {},
  activity: {},
  profile: {},
  myProfile: {},
  modal: null,
  sideNavIsOpen: false,
  width: null,
  screenSize: 0,
  modalData: null,
  lockDrawer: false
};
exports.initialState = initialState;
function navigationState() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actionTypes.SET_WIDTH:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { width: action.payload.width, screenSize: action.payload.screenSize }
      );
    case _actionTypes.OPEN_WEB_SIDE_NAV:
      return _objectSpread(_objectSpread({}, state), {}, { sideNavIsOpen: true });
    case _actionTypes.CLOSE_WEB_SIDE_NAV:
      return _objectSpread(_objectSpread({}, state), {}, { sideNavIsOpen: false });
    case _actionTypes.SHOW_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { modal: action.payload.modal, modalData: action.payload.data }
      );
    }
    case _actionTypes.SET_SCROLL_TAB: {
      switch (action.payload.type) {
        case 'discover':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              discover: _objectSpread(
                _objectSpread({}, state.discover),
                action.payload.view
              )
            }
          );
        default:
          return state;
      }
    }
    case _actionTypes.HIDE_MODAL: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { modal: null, modalData: null }
      );
    }
    case _actionTypes.SCROLL: {
      return _objectSpread(_objectSpread({}, state), {}, { scroll: action.payload });
    }
    case _actionTypes.LOCK_DRAWER: {
      return _objectSpread(_objectSpread({}, state), {}, { lockDrawer: action.payload });
    }
    case _actionTypes.TOGGLE_TOPICS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { showTopics: action.payload !== undefined ? action.payload : !state.showTopics }
      );
    }
    case _actionTypes.REFRESH_ROUTE: {
      var key = action.key;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        (0, _defineProperty2.default)(
          {},
          key,
          _objectSpread(
            _objectSpread({}, state[key]),
            {},
            { refresh: new Date().getTime() }
          )
        )
      );
    }
    case _actionTypes.RELOAD_ROUTE: {
      var _key = action.key;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        (0, _defineProperty2.default)(
          {},
          _key,
          _objectSpread(
            _objectSpread({}, state[_key]),
            {},
            { reload: new Date().getTime() }
          )
        )
      );
    }
    case _actionTypes.RELOAD_ALL_TABS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { reload: new Date().getTime() }
      );
    }
    case _actionTypes.REGISTER_GESTURE: {
      return _objectSpread(_objectSpread({}, state), {}, { gesture: action.payload });
    }
    default:
      return state;
  }
}
var _default = navigationState;
exports.default = _default;
//# sourceMappingURL=navigation.reducer.js.map
