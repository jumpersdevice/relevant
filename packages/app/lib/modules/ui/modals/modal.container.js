'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _navigation = require('../../navigation/navigation.actions');
var _modal = _interopRequireDefault(require('./modal.component'));
var _queryString = _interopRequireDefault(require('query-string'));
var _reactRouterDom = require('react-router-dom');
var modals = _interopRequireWildcard(require('./desktop.lookup'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/modals/modal.container.js';
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
ModalContainer.propTypes = {
  location: _propTypes.default.object,
  history: _propTypes.default.object
};
var isBrowser = process.env.BROWSER === true;
function ModalContainer(_ref) {
  var location = _ref.location,
    history = _ref.history;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSelector = (0, _reactRedux.useSelector)(function(state) {
      return state.navigation;
    }),
    currentModal = _useSelector.modal,
    modalData = _useSelector.modalData;
  var urlParams = _queryString.default.parse(location.search);
  var modal = urlParams.modal,
    modalParams = urlParams.modalParams;
  (0, _react.useEffect)(
    function() {
      if ((!modal && currentModal) || (modal && currentModal && modal !== currentModal)) {
        var qString = _queryString.default.stringify(
          _objectSpread(
            _objectSpread({}, urlParams),
            {},
            { modal: currentModal, modalParams: JSON.stringify(modalData) }
          )
        );
        history.push({ search: qString });
      }
    },
    [currentModal]
  );
  (0, _react.useEffect)(
    function() {
      if (!currentModal && modal && isBrowser) {
        var params = modalParams ? JSON.parse(modalParams) : null;
        dispatch((0, _navigation.showModal)(modal, params));
      }
      if (currentModal && !modal) dispatch((0, _navigation.hideModal)());
    },
    [modal]
  );
  if (!isBrowser) return null;
  var modalEl = !!currentModal && modals[modal];
  if (!modalEl) return null;
  var Body = modalEl.Body,
    redirect = modalEl.redirect,
    rest = (0, _objectWithoutProperties2.default)(modalEl, ['Body', 'redirect']);
  var close = function close() {
    dispatch((0, _navigation.hideModal)());
    closeModal(redirect, history, location);
  };
  return _react.default.createElement(
    _modal.default,
    (0, _extends2.default)({ close: close, name: currentModal }, rest, {
      __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 5 }
    }),
    _react.default.createElement(Body, {
      close: close,
      __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 7 }
    })
  );
}
function closeModal(redirect, history, location) {
  var queryParams = _queryString.default.parse(location.search);
  if (queryParams.redirect) {
    history.push(queryParams.redirect);
  } else if (redirect) {
    history.push(redirect);
  } else {
    history.push(location.pathname);
  }
}
var _default = (0, _reactRouterDom.withRouter)(ModalContainer);
exports.default = _default;
//# sourceMappingURL=modal.container.js.map
