'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'));
var _global = require('../../../styles/global');
var _textBody = _interopRequireDefault(require('../../text/mobile/textBody.component'));
var _textEdit = _interopRequireDefault(require('../../text/mobile/textEdit.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/mobile/bio.component.js';
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
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var styles;
var Bio = (function(_Component) {
  (0, _inherits2.default)(Bio, _Component);
  var _super = _createSuper(Bio);
  function Bio(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Bio);
    _this = _super.call(this, props, context);
    _this.state = { editing: false };
    _this.updateBio = _this.updateBio.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Bio, [
    {
      key: 'updateBio',
      value: (function() {
        var _updateBio = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(text) {
            var user, bio, oldBio, success;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      user = this.props.user;
                      bio = text;
                      oldBio = user.bio;
                      _context.prev = 3;
                      user.bio = bio;
                      this.setState({ editing: false });
                      _context.next = 8;
                      return this.props.actions.updateUser(
                        _objectSpread(_objectSpread({}, user), {}, { bio: bio })
                      );
                    case 8:
                      success = _context.sent;
                      if (success) {
                        this.bio = null;
                      } else {
                        this.bio = bio;
                        user.bio = oldBio;
                        this.setState({ editing: true });
                      }
                      _context.next = 17;
                      break;
                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context['catch'](3);
                      this.bio = bio;
                      user.bio = oldBio;
                      this.setState({ editing: true });
                    case 17:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [[3, 12]]
            );
          })
        );
        function updateBio(_x) {
          return _updateBio.apply(this, arguments);
        }
        return updateBio;
      })()
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var user = this.props.user;
        var editButton;
        var bioEdit = _react.default.createElement(_textEdit.default, {
          style: [styles.bioText],
          text: this.bio || user.bio,
          placeholder:
            'Add your credentials - what are the topics you know most about and why',
          toggleFunction: function toggleFunction() {
            _this2.bio = null;
            _this2.props.scrollTo(0);
            _this2.setState({ editing: false });
          },
          saveEditFunction: this.updateBio,
          __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 7 }
        });
        if (this.props.isOwner && !this.state.editing) {
          editButton = _react.default.createElement(
            _reactNativeWeb.Text,
            {
              onPress: function onPress() {
                _this2.props.scrollTo(_this2.offset);
                _this2.setState({ editing: true });
              },
              style: { paddingLeft: 10, paddingTop: 3 },
              __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 9 }
            },
            _react.default.createElement(_Ionicons.default, {
              name: 'ios-create',
              size: 22,
              color: _global.blue,
              __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 11 }
            })
          );
        }
        var CTA = _react.default.createElement(
          _reactNativeWeb.Text,
          {
            style: [styles.active, { flex: 1, fontSize: 12 }],
            onPress: function onPress() {
              return _this2.setState({ editing: true });
            },
            __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 7 }
          },
          'Add your credentials to build your relevance!'
        );
        var bio = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flexDirection: 'row', alignItems: 'center' },
            __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 7 }
          },
          _react.default.createElement(
            _textBody.default,
            {
              actions: this.props.actions,
              style: [
                styles.bioText,
                { fontFamily: 'Georgia', flex: 1 },
                styles.darkGrey
              ],
              __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 9 }
            },
            user.bio
          ),
          editButton
        );
        if (this.props.isOwner && (!user.bio || user.bio.trim() === '')) {
          bio = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flexDirection: 'row', alignItems: 'center' },
              __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 9 }
            },
            CTA,
            editButton
          );
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            onLayout: function onLayout(e) {
              _this2.offset = e.nativeEvent.layout.y - 30;
            },
            __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.View, {
            style: [styles.break, { marginHorizontal: 0 }],
            __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 9 }
          }),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: [(user && user.bio) || this.props.isOwner ? styles.bio : null],
              __source: { fileName: _jsxFileName, lineNumber: 122, columnNumber: 9 }
            },
            this.state.editing ? bioEdit : bio
          )
        );
      }
    }
  ]);
  return Bio;
})(_react.Component);
(0, _defineProperty2.default)(Bio, 'propTypes', {
  isOwner: _propTypes.default.bool,
  user: _propTypes.default.object,
  actions: _propTypes.default.object,
  scrollTo: _propTypes.default.func
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  bioText: { fontSize: 30 / 2, lineHeight: 42 / 2, paddingTop: 5 },
  bio: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    marginBottom: 10
  }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var _default = Bio;
exports.default = _default;
//# sourceMappingURL=bio.component.js.map
