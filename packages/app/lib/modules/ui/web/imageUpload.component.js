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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _utils = require('../../../utils');
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/web/imageUpload.component.js';
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
var Alert = _utils.alert.Alert();
var ImageUpload = (function(_Component) {
  (0, _inherits2.default)(ImageUpload, _Component);
  var _super = _createSuper(ImageUpload);
  function ImageUpload() {
    var _this;
    (0, _classCallCheck2.default)(this, ImageUpload);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      preview: null,
      fileName: null
    });
    return _this;
  }
  (0, _createClass2.default)(ImageUpload, [
    {
      key: 'processImage',
      value: function processImage() {
        var _this2 = this;
        var file = this.fileInput.files[0];
        _utils.img
          .loadImage(file)
          .then(function(dataURL) {
            var extension = dataURL
              .split(',')[0]
              .split('/')[1]
              .split(';')[0];
            var name = file.name.substr(0, extension.lastIndexOf('.')) + '.' + extension;
            _this2.setState({ preview: dataURL, fileName: name });
            _this2.props.onChange({ preview: dataURL, fileName: name });
          })
          .catch(function(e) {
            Alert.alert('Error uploading image ' + e);
          });
      }
    },
    {
      key: 'uploadImage',
      value: (function() {
        var _uploadImage = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var upload;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if (!(!this.state.fileName || !this.state.preview)) {
                        _context.next = 3;
                        break;
                      }
                      Alert('Please select an image');
                      return _context.abrupt('return', null);
                    case 3:
                      _context.next = 5;
                      return _utils.s3.toS3Advanced(
                        this.state.preview,
                        this.state.fileName
                      );
                    case 5:
                      upload = _context.sent;
                      this.setState({ preview: null, fileName: null });
                      this.props.onChange(upload);
                      return _context.abrupt('return', upload);
                    case 9:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          })
        );
        function uploadImage() {
          return _uploadImage.apply(this, arguments);
        }
        return uploadImage;
      })()
    },
    {
      key: 'renderPreview',
      value: function renderPreview() {
        var _this$props = this.props,
          placeholder = _this$props.placeholder,
          imageComponent = _this$props.imageComponent;
        var preview = this.state.preview;
        if (!preview && placeholder) {
          return _react.default.cloneElement(imageComponent, {
            source: { uri: placeholder }
          });
        }
        if (preview && imageComponent) {
          return _react.default.cloneElement(imageComponent, {
            source: { uri: preview }
          });
        }
        if (preview) {
          return _react.default.createElement('img', {
            src: preview,
            style: { maxWidth: '300px' },
            __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 14 }
          });
        }
        return null;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var previewImage = this.renderPreview();
        return _react.default.createElement(
          _uni.View,
          {
            display: 'flex',
            fdirection: 'row',
            align: 'center',
            __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              mr: 2,
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 9 }
            },
            previewImage
          ),
          _react.default.createElement('input', {
            ref: function ref(c) {
              return (_this3.fileInput = c);
            },
            onChange: this.processImage.bind(this),
            accept: 'image/*',
            name: 'img',
            type: 'file',
            __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return ImageUpload;
})(_react.Component);
exports.default = ImageUpload;
(0, _defineProperty2.default)(ImageUpload, 'propTypes', {
  placeholder: _propTypes.default.string,
  imageComponent: _propTypes.default.node,
  onChange: _propTypes.default.func
});
//# sourceMappingURL=imageUpload.component.js.map
