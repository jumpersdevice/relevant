'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'));
var _rnPrompt = _interopRequireDefault(require('rn-prompt'));
var _reactNavigation = require('react-navigation');
var _global = require('../../../styles/global');
var _stats = _interopRequireDefault(require('../../stats/mobile/stats.component'));
var _reactNativeBottomsheet = _interopRequireDefault(require('react-native-bottomsheet'));
var _pickerOptions = require('../../../utils/pickerOptions');
var _s = require('../../../utils/s3');
var _reactNativeImagePicker = _interopRequireDefault(
  require('react-native-image-picker')
);
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var navigationActions = _interopRequireWildcard(require('../navigation.actions'));
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/headerRight.component.js';
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
var ActionSheet = _reactNativeWeb.ActionSheetIOS;
if (_reactNativeWeb.Platform.OS === 'android') {
  ActionSheet = _reactNativeBottomsheet.default;
  ActionSheet.showActionSheetWithOptions =
    _reactNativeBottomsheet.default.showBottomSheetWithOptions;
}
var HeaderRight = (function(_Component) {
  (0, _inherits2.default)(HeaderRight, _Component);
  var _super = _createSuper(HeaderRight);
  function HeaderRight() {
    var _this;
    (0, _classCallCheck2.default)(this, HeaderRight);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      newName: ''
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'showActionSheet',
      function() {
        ActionSheet.showActionSheetWithOptions(
          {
            options: [
              'Change display name',
              'Add new photo',
              'Notifications',
              'Invite Friends',
              'Blocked Users',
              'FAQ',
              'Logout',
              'Cancel'
            ],
            cancelButtonIndex: 7,
            destructiveButtonIndex: 6
          },
          function(buttonIndex) {
            switch (buttonIndex) {
              case 0:
                _this.changeName();
                break;
              case 1:
                _this.initImage();
                break;
              case 2:
                _this.props.actions.push('notifications');
                break;
              case 3:
                _this.props.actions.push('invites');
                break;
              case 4:
                _this.props.actions.viewBlocked();
                break;
              case 5:
                _this.props.actions.goToUrl('https://relevant.community/info/faq');
                break;
              case 6:
                _this.logoutRedirect();
                break;
              default:
            }
          }
        );
      }
    );
    return _this;
  }
  (0, _createClass2.default)(HeaderRight, [
    {
      key: 'changeName',
      value: function changeName() {
        var _this2 = this;
        var user = this.props.auth.user;
        if (_reactNativeWeb.Platform.OS === 'android') {
          this.promptTitle = 'Enter new name';
          this.setState({ promptVisible: true });
          return;
        }
        _reactNativeWeb.Alert.prompt('Enter new name', user.name, [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'OK',
            onPress: function onPress(newName) {
              user.name = newName;
              _this2.props.actions.updateUser(user);
              _this2.setState({ newName: newName });
            }
          }
        ]);
      }
    },
    {
      key: 'initImage',
      value: function initImage() {
        var _this3 = this;
        this.chooseImage(function(err, data) {
          if (data) {
            (0, _s.toS3Advanced)(data, _this3.props.auth.token).then(function(results) {
              if (results.success) {
                var newUser = _this3.props.auth.user;
                newUser.image = results.url;
                _this3.props.actions.updateUser(newUser);
              } else {
                _reactNativeWeb.Alert.alert('Error uploading image');
              }
            });
          }
        });
      }
    },
    {
      key: 'chooseImage',
      value: function chooseImage(callback) {
        _reactNativeImagePicker.default.showImagePicker(
          _pickerOptions.pickerOptions,
          function(res) {
            if (res.didCancel) return callback('Cancelled');
            if (res.error || res.customButton) return callback('There was an error');
            return callback(null, res.uri);
          }
        );
      }
    },
    {
      key: 'logoutRedirect',
      value: function logoutRedirect() {
        var _this$props = this.props,
          actions = _this$props.actions,
          auth = _this$props.auth;
        actions.removeDeviceToken(this.props.auth);
        actions.logoutAction(auth.user);
        var resetAction = _reactNavigation.StackActions.reset({
          index: 0,
          key: null,
          actions: [_reactNavigation.NavigationActions.navigate({ routeName: 'main' })]
        });
        this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('auth');
      }
    },
    {
      key: 'renderElement',
      value: function renderElement() {
        var _this4 = this;
        var _this$props2 = this.props,
          navigation = _this$props2.navigation,
          auth = _this$props2.auth;
        var state = navigation.state;
        if (state.routeName === 'myProfileView') {
          return _react.default.createElement(
            _reactNativeWeb.TouchableHighlight,
            {
              style: styles.gear,
              underlayColor: 'transparent',
              onPress: function onPress() {
                return _this4.showActionSheet();
              },
              __source: { fileName: _jsxFileName, lineNumber: 164, columnNumber: 9 }
            },
            _reactNativeWeb.Platform.OS === 'ios'
              ? _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: { paddingBottom: 5, fontSize: 17 },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 13
                    }
                  },
                  '\u2699\uFE0F'
                )
              : _react.default.createElement(_Ionicons.default, {
                  name: 'ios-settings',
                  size: 24,
                  color: _global.darkGrey,
                  __source: { fileName: _jsxFileName, lineNumber: 172, columnNumber: 13 }
                })
          );
        }
        if (auth.user) {
          return _react.default.createElement(_stats.default, {
            type: 'nav',
            discover: state.routeName === 'discoverView',
            parent: this,
            entity: auth.user,
            __source: { fileName: _jsxFileName, lineNumber: 180, columnNumber: 9 }
          });
        }
        return null;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        var _this$props3 = this.props,
          auth = _this$props3.auth,
          actions = _this$props3.actions;
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.rightButton,
            __source: { fileName: _jsxFileName, lineNumber: 194, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { paddingRight: 10 },
              __source: { fileName: _jsxFileName, lineNumber: 195, columnNumber: 9 }
            },
            this.renderElement()
          ),
          _react.default.createElement(_rnPrompt.default, {
            title: this.promptTitle || '',
            visible: this.state.promptVisible,
            onCancel: function onCancel() {
              return _this5.setState({ promptVisible: false });
            },
            onSubmit: function onSubmit(newName) {
              auth.user.name = newName;
              actions.updateUser(auth.user);
              _this5.setState({ promptVisible: false, newName: newName });
            },
            __source: { fileName: _jsxFileName, lineNumber: 196, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return HeaderRight;
})(_react.Component);
(0, _defineProperty2.default)(HeaderRight, 'propTypes', {
  auth: _propTypes.default.object,
  actions: _propTypes.default.object,
  navigation: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  rightButton: {
    flex: 1,
    marginRight: _global.mainPadding - 10,
    justifyContent: 'center'
  },
  gear: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return { auth: state.auth };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, navigationActions), userActions),
        authActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HeaderRight);
exports.default = _default;
//# sourceMappingURL=headerRight.component.js.map
