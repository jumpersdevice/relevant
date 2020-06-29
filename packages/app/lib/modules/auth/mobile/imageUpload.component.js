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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _pickerOptions = require('../../../utils/pickerOptions');
var utils = _interopRequireWildcard(require('../../../utils'));
var _customSpinnerRelative = _interopRequireDefault(
  require('../../ui/mobile/customSpinnerRelative.component')
);
var _reactNativeImagePicker = _interopRequireDefault(
  require('react-native-image-picker')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/imageUpload.component.js';
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
var localStyles;
var styles;
var ImageUpload = (function(_Component) {
  (0, _inherits2.default)(ImageUpload, _Component);
  var _super = _createSuper(ImageUpload);
  function ImageUpload(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, ImageUpload);
    _this = _super.call(this, props, context);
    _this.renderButtons = _this.renderButtons.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.createUser = _this.createUser.bind((0, _assertThisInitialized2.default)(_this));
    _this.initImage = _this.initImage.bind((0, _assertThisInitialized2.default)(_this));
    _this.chooseImage = _this.chooseImage.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.renderImage = _this.renderImage.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.state = { image: null, uploading: false };
    return _this;
  }
  (0, _createClass2.default)(ImageUpload, [
    {
      key: 'initImage',
      value: function initImage() {
        var _this2 = this;
        var self = this;
        this.chooseImage(function(err, data) {
          if (err) return _reactNativeWeb.Alert.alert(err.message);
          if (data) {
            self.setState({ uploading: true });
            utils.s3.toS3Advanced(data, _this2.props.auth.token).then(function(results) {
              if (results.success) {
                self.setState({ image: results.url, uploading: false });
              } else {
                _reactNativeWeb.Alert.alert('image error ', results);
              }
            });
          }
          return null;
        });
      }
    },
    {
      key: 'chooseImage',
      value: function chooseImage(callback) {
        _reactNativeImagePicker.default.showImagePicker(
          _pickerOptions.pickerOptions,
          function(response) {
            if (response.didCancel) {
              callback('cancelled');
            } else if (response.error) {
              callback('error');
            } else if (response.customButton) {
              callback('error');
            } else {
              callback(null, response.uri);
            }
          }
        );
      }
    },
    {
      key: 'createUser',
      value: function createUser() {
        var createUser = this.props.actions.createUser;
        var invitecode = this.props.auth.invitecode;
        var newUser = _objectSpread({}, this.props.auth.preUser);
        newUser.image = this.state.image;
        createUser(newUser, invitecode);
      }
    },
    {
      key: 'renderImage',
      value: function renderImage() {
        var source = null;
        if (!this.state.uploading) {
          if (this.state.image) source = { uri: this.state.image };
          else source = require('../../../../public/img/camera.png');
          return _react.default.createElement(_reactNativeWeb.Image, {
            style: { width: 200, height: 200 },
            resizeMode: 'cover',
            source: source,
            __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 9 }
          });
        }
        return null;
      }
    },
    {
      key: 'renderButtons',
      value: function renderButtons() {
        if (this.state.image) {
          return _react.default.createElement(
            _reactNativeWeb.View,
            { __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 9 } },
            _react.default.createElement(
              _reactNativeWeb.TouchableHighlight,
              {
                underlayColor: 'transparent',
                style: [styles.largeButton],
                onPress: this.initImage,
                __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: styles.largeButtonText,
                  __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 13 }
                },
                'Choose different image'
              )
            ),
            _react.default.createElement(
              _reactNativeWeb.TouchableHighlight,
              {
                underlayColor: 'transparent',
                style: [styles.largeButton, { marginTop: 10 }],
                onPress: this.createUser,
                __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: styles.largeButtonText,
                  __source: { fileName: _jsxFileName, lineNumber: 100, columnNumber: 13 }
                },
                'Create user'
              )
            )
          );
        }
        return _react.default.createElement(
          _reactNativeWeb.TouchableHighlight,
          {
            underlayColor: 'transparent',
            style: [styles.largeButton],
            onPress: this.initImage,
            __source: { fileName: _jsxFileName, lineNumber: 106, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: styles.largeButtonText,
              __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 9 }
            },
            'upload image'
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { padding: 20, flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flex: 1, justifyContent: 'center', alignItems: 'center' },
              __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 9 }
            },
            this.renderImage(),
            _react.default.createElement(_customSpinnerRelative.default, {
              visible: this.state.uploading,
              __source: { fileName: _jsxFileName, lineNumber: 123, columnNumber: 11 }
            })
          ),
          this.renderButtons(),
          _react.default.createElement(
            _reactNativeWeb.TouchableHighlight,
            {
              onPress: function onPress() {
                return _this3.createUser();
              },
              underlayColor: 'transparent',
              __source: { fileName: _jsxFileName, lineNumber: 126, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: styles.signInText,
                __source: { fileName: _jsxFileName, lineNumber: 130, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: { color: '#3E3EFF' },
                  __source: { fileName: _jsxFileName, lineNumber: 131, columnNumber: 13 }
                },
                'Skip'
              ),
              ' for now'
            )
          )
        );
      }
    }
  ]);
  return ImageUpload;
})(_react.Component);
(0, _defineProperty2.default)(ImageUpload, 'propTypes', {
  auth: _propTypes.default.object,
  actions: _propTypes.default.object
});
ImageUpload.propTypes = { actions: _propTypes.default.object };
localStyles = _reactNativeWeb.StyleSheet.create({});
var _default = ImageUpload;
exports.default = _default;
//# sourceMappingURL=imageUpload.component.js.map
