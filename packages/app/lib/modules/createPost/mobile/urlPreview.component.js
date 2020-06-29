'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../../styles');
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _uni = require('../../styled/uni');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/urlPreview.component.js';
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
var UrlPreviewComponent = (function(_Component) {
  (0, _inherits2.default)(UrlPreviewComponent, _Component);
  var _super = _createSuper(UrlPreviewComponent);
  function UrlPreviewComponent() {
    (0, _classCallCheck2.default)(this, UrlPreviewComponent);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(UrlPreviewComponent, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          remove = _this$props.remove,
          noLink = _this$props.noLink,
          urlPreview = _this$props.urlPreview,
          image = _this$props.image,
          domain = _this$props.domain,
          size = _this$props.size,
          title = _this$props.title,
          urlMenu = _this$props.urlMenu;
        var isSmall = size === 'small';
        var height = isSmall ? 7 : 10;
        var imageFlex = isSmall ? 0.35 : 0.4;
        var fontSize = isSmall ? 1.5 : 2;
        var img = image || (urlPreview && urlPreview.image);
        var body = title || (urlPreview && urlPreview.title);
        var domainUrl = domain || (urlPreview && urlPreview.domain);
        var imageEl =
          img &&
          _react.default.createElement(_uni.Image, {
            resizeMode: 'cover',
            source: img ? { uri: img } : require('../../../../public/img/missing.png'),
            flex: imageFlex,
            __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 }
          });
        var domainEl =
          domainUrl &&
          _react.default.createElement(
            _uni.Text,
            {
              numberOfLines: 1,
              fs: fontSize,
              c: _styles.colors.grey,
              pt: 1 / 4,
              __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 7 }
            },
            'from: ',
            domainUrl
          );
        var maxLines = isSmall && domainEl ? 2 : 3;
        return urlPreview
          ? _react.default.createElement(
              _uni.View,
              {
                border: true,
                __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 7 }
              },
              _react.default.createElement(
                _ULink.default,
                {
                  underlayColor: 'transparent',
                  onPress: urlMenu,
                  to: '#',
                  disabled: noLink,
                  __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 9 }
                },
                _react.default.createElement(
                  _uni.View,
                  {
                    h: height,
                    align: 'stretch',
                    fdirection: 'row',
                    __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 11 }
                  },
                  imageEl || null,
                  _react.default.createElement(
                    _uni.View,
                    {
                      flex: 1,
                      p: 0.5,
                      fdirection: 'column',
                      justify: 'center',
                      style: { overflow: 'hidden' },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 13
                      }
                    },
                    _react.default.createElement(
                      _uni.Text,
                      {
                        style: { overflow: 'hidden' },
                        maxheight: maxLines * fontSize * 1.33,
                        fs: fontSize,
                        numberOfLines: maxLines,
                        c: _styles.colors.grey,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 70,
                          columnNumber: 15
                        }
                      },
                      body
                    ),
                    domainEl
                  ),
                  remove &&
                    _react.default.createElement(_uni.CloseX, {
                      w: 1.5,
                      h: 1.5,
                      m: 0.5,
                      opacity: 0.5,
                      position: 'relative',
                      resizeMode: 'contain',
                      source: require('../../../../public/img/x.png'),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 15
                      }
                    })
                )
              )
            )
          : _react.default.createElement(
              _ULink.default,
              {
                underlayColor: 'transparent',
                style: { height: height },
                onPress: urlMenu,
                to: '#',
                __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 7 }
              },
              _react.default.createElement(
                _uni.View,
                {
                  h: height,
                  border: true,
                  align: 'stretch',
                  fdirection: 'row',
                  flex: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 99, columnNumber: 9 }
                },
                _react.default.createElement(_CustomSpinner.default, {
                  size: 'small',
                  visible: true,
                  __source: { fileName: _jsxFileName, lineNumber: 100, columnNumber: 11 }
                })
              )
            );
      }
    }
  ]);
  return UrlPreviewComponent;
})(_react.Component);
exports.default = UrlPreviewComponent;
(0, _defineProperty2.default)(UrlPreviewComponent, 'propTypes', {
  size: _propTypes.default.string,
  image: _propTypes.default.string,
  title: _propTypes.default.string,
  urlPreview: _propTypes.default.object,
  domain: _propTypes.default.string,
  noLink: _propTypes.default.bool,
  urlMenu: _propTypes.default.func,
  remove: _propTypes.default.bool
});
//# sourceMappingURL=urlPreview.component.js.map
