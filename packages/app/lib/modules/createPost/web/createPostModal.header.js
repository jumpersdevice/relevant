'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _interopRequireWildcard2 = _interopRequireDefault(
  require('@babel/runtime/helpers/interopRequireWildcard')
);
var _react = _interopRequireDefault(require('react'));
var _navigation = require('../../navigation/navigation.actions');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _reactRouterDom = require('react-router-dom');
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _component = _interopRequireDefault(require('@loadable/component'));
var _alert = require('../../../utils/alert');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/web/createPostModal.header.js';
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
var Select = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'react-select';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0, _interopRequireWildcard2.default)(require('react-select'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('react-select');
    }
    return eval('require.resolve')('react-select');
  }
});
ModalHeader.propTypes = { history: _propTypes.default.object };
function ModalHeader(_ref) {
  var history = _ref.history;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSelector = (0, _reactRedux.useSelector)(function(state) {
      return state.community;
    }),
    communities = _useSelector.communities,
    list = _useSelector.list,
    active = _useSelector.active;
  var com = list.map(function(id) {
    return communities[id];
  });
  var options = com.map(function(c) {
    return { label: c.name, value: c.slug };
  });
  var activeCommunity = com.find(function(c) {
    return c.slug === active;
  });
  if (!activeCommunity) {
    dispatch((0, _navigation.hideModal)());
    _alert.browserAlerts.alert('Please select a community first', 'error');
    return null;
  }
  var value = { label: activeCommunity.name, value: active };
  var image = activeCommunity.image
    ? { uri: activeCommunity.image }
    : require('../../../../public/img/default_community.png');
  return _react.default.createElement(
    _uni.View,
    {
      style: { zIndex: 1 },
      fdirection: 'row',
      align: 'baseline',
      __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.Title,
      { mr: 1.5, __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 } },
      'Post to:'
    ),
    _react.default.createElement(_uni.Image, {
      w: 2,
      h: 2,
      mr: 1,
      mt: 0.25,
      style: { bottom: '-1px' },
      source: image,
      resizeMode: 'cover',
      __source: { fileName: _jsxFileName, lineNumber: 38, columnNumber: 7 }
    }),
    _react.default.createElement(Select, {
      isSearchable: false,
      styles: customStyles,
      value: value,
      onChange: function onChange(e) {
        return history.push({
          pathname: '/'.concat(e.value, '/new'),
          search: history.location.search
        });
      },
      options: options,
      __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }
    })
  );
}
var customStyles = {
  menu: function menu(provided) {
    return _objectSpread(
      _objectSpread({}, provided),
      {},
      { borderRadius: 0, padding: 0, maxWidth: 300 }
    );
  },
  container: function container() {
    return { padding: '0px' };
  },
  option: function option(provided, state) {
    return _objectSpread(
      _objectSpread(
        { borderBottom: '1px solid '.concat(_styles.colors.lightBorder) },
        _styles.fonts.body
      ),
      {},
      {
        color: state.isSelected ? _styles.colors.blue : _styles.colors.black,
        padding: (0, _styles.sizing)(2),
        cursor: 'pointer'
      }
    );
  },
  indicatorSeparator: function indicatorSeparator() {},
  dropdownIndicator: function dropdownIndicator(provided) {
    return _objectSpread(
      _objectSpread({}, provided),
      {},
      { padding: 0, cursor: 'pointer' }
    );
  },
  valueContainer: function valueContainer(provided) {
    return _objectSpread(
      _objectSpread({}, provided),
      {},
      { padding: 0, overflow: 'visible', paddingRight: 10, cursor: 'pointer' }
    );
  },
  control: function control() {
    return { border: 'none', display: 'flex', padding: 0 };
  },
  menuList: function menuList() {
    return { fontSize: (0, _styles.sizing)(2) };
  },
  singleValue: function singleValue(provided, state) {
    var opacity = state.isDisabled ? 0.5 : 1;
    var transition = 'opacity 300ms';
    return _objectSpread(
      _objectSpread({}, _styles.fonts.body),
      {},
      {
        cursor: 'pointer',
        fontSize: (0, _styles.sizing)(2.5),
        lineHeight: (0, _styles.sizing)(2.5),
        opacity: opacity,
        transition: transition
      }
    );
  }
};
var _default = (0, _reactRouterDom.withRouter)(ModalHeader);
exports.default = _default;
//# sourceMappingURL=createPostModal.header.js.map
