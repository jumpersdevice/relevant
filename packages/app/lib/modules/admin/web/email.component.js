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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var adminActions = _interopRequireWildcard(require('../admin.actions'));
var _ShadowButton = _interopRequireDefault(require('../../ui/web/ShadowButton'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/email.component.js';
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
var pell;
if (process.env.BROWSER === true) {
  pell = require('pell');
  require('pell/dist/pell.min.css');
  require('./admin.css');
}
var Email = (function(_Component) {
  (0, _inherits2.default)(Email, _Component);
  var _super = _createSuper(Email);
  function Email(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Email);
    _this = _super.call(this, props);
    _this.state = { html: '', email: '', subject: '', campaign: '' };
    _this.handleChange = _this.handleChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    _this.saveEmail = _this.saveEmail.bind((0, _assertThisInitialized2.default)(_this));
    _this.loadEmail = _this.loadEmail.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Email, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        this.loadEmail();
        this.editor = pell.init({
          element: document.getElementById('email-editor'),
          onChange: function onChange(html) {
            _this2.setState({ html: html });
          },
          styleWithCSS: true,
          actions: [
            'bold',
            'underline',
            'italic',
            {
              icon: '<b>Sml</b>',
              title: 'small',
              result: function result() {
                return pell.exec('fontSize', 2);
              }
            },
            {
              icon: '<b>reg</b>',
              title: 'small',
              result: function result() {
                return pell.exec('fontSize', 3);
              }
            },
            'paragraph',
            'heading1',
            'heading2',
            {
              icon: '<b>H<sub>3</sub></b>',
              title: 'H3',
              result: function result() {
                return pell.exec('formatBlock', '<H3>');
              }
            },
            {
              icon: '<b>H<sub>4</sub></b>',
              title: 'H4',
              result: function result() {
                return pell.exec('formatBlock', '<H4>');
              }
            },
            {
              icon: '<b>Center</b>',
              title: 'center',
              result: function result() {
                return pell.exec('justifyCenter');
              }
            },
            {
              icon: '<b>Left</b>',
              title: 'left',
              result: function result() {
                return pell.exec('justifyLeft');
              }
            },
            'image',
            'link',
            {
              name: 'resize',
              icon: '<b>Resize</b>',
              result: function result() {
                return pell.exec('enableObjectResizing');
              }
            },
            {
              icon: '<b><u><i>Clear</i></u></b>',
              name: 'clear',
              result: function result() {
                return pell.exec('removeFormat');
              }
            }
          ]
        });
      }
    },
    {
      key: 'saveEmail',
      value: function saveEmail() {
        var _this$state = this.state,
          email = _this$state.email,
          subject = _this$state.subject,
          campaign = _this$state.campaign,
          html = _this$state.html;
        this.props.actions.saveEmail({
          email: email,
          subject: subject,
          campaign: campaign,
          html: html
        });
      }
    },
    {
      key: 'loadEmail',
      value: function loadEmail() {
        var _this3 = this;
        this.props.actions.loadEmail().then(function(email) {
          _this3.setState(email);
          _this3.editor.content.innerHTML = email.html;
        });
      }
    },
    {
      key: 'submit',
      value: function submit() {
        var _this$state2 = this.state,
          email = _this$state2.email,
          subject = _this$state2.subject,
          campaign = _this$state2.campaign,
          html = _this$state2.html;
        this.props.actions.sendEmail({
          email: email,
          subject: subject,
          campaign: campaign,
          html: html
        });
        this.saveEmail();
      }
    },
    {
      key: 'handleChange',
      value: function handleChange(event) {
        this.setState(
          (0, _defineProperty2.default)({}, event.target.name, event.target.value)
        );
        if (event.target.name === 'html') {
          this.editor.content.innerHTML = event.target.value;
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          'div',
          {
            className: 'adminContainer',
            __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 7 }
          },
          _react.default.createElement(
            'div',
            {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'flex-start',
                marginLeft: 20
              },
              __source: { fileName: _jsxFileName, lineNumber: 146, columnNumber: 9 }
            },
            _react.default.createElement('input', {
              className: 'blueInput',
              type: 'email',
              name: 'email',
              placeholder: 'user email',
              value: this.state.email,
              onChange: this.handleChange,
              __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 11 }
            }),
            _react.default.createElement('input', {
              className: 'blueInput',
              type: 'subject',
              name: 'subject',
              placeholder: 'subject',
              value: this.state.subject,
              onChange: this.handleChange,
              __source: { fileName: _jsxFileName, lineNumber: 162, columnNumber: 11 }
            }),
            _react.default.createElement('input', {
              className: 'blueInput',
              type: 'campaign',
              name: 'campaign',
              placeholder: 'campaign',
              value: this.state.campaign,
              onChange: this.handleChange,
              __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 11 }
            })
          ),
          _react.default.createElement(
            'div',
            {
              style: { display: 'flex', flex: 1, flexDirection: 'row', width: '100%' },
              __source: { fileName: _jsxFileName, lineNumber: 179, columnNumber: 9 }
            },
            _react.default.createElement(
              'div',
              {
                style: { flex: 1, margin: 20 },
                __source: { fileName: _jsxFileName, lineNumber: 180, columnNumber: 11 }
              },
              _react.default.createElement('div', {
                id: 'email-editor',
                __source: { fileName: _jsxFileName, lineNumber: 181, columnNumber: 13 }
              })
            ),
            _react.default.createElement('textarea', {
              style: { flex: 1, margin: 20 },
              value: this.state.html,
              name: 'html',
              onChange: this.handleChange,
              __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 11 }
            })
          ),
          _react.default.createElement(
            'div',
            {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignSelf: 'flex-start',
                margin: 20,
                marginBottom: 60
              },
              __source: { fileName: _jsxFileName, lineNumber: 190, columnNumber: 9 }
            },
            _react.default.createElement(
              _ShadowButton.default,
              {
                backgroundColor: 'white',
                color: '#3E3EFF',
                onClick: this.submit,
                __source: { fileName: _jsxFileName, lineNumber: 200, columnNumber: 11 }
              },
              'Send email'
            ),
            _react.default.createElement(
              _ShadowButton.default,
              {
                backgroundColor: 'white',
                color: '#3E3EFF',
                onClick: this.saveEmail,
                __source: { fileName: _jsxFileName, lineNumber: 203, columnNumber: 11 }
              },
              'Save draft'
            ),
            _react.default.createElement(
              _ShadowButton.default,
              {
                backgroundColor: 'white',
                color: '#3E3EFF',
                onClick: this.loadEmail,
                __source: { fileName: _jsxFileName, lineNumber: 210, columnNumber: 11 }
              },
              'Load'
            )
          )
        );
      }
    }
  ]);
  return Email;
})(_react.Component);
(0, _defineProperty2.default)(Email, 'propTypes', { actions: _propTypes.default.object });
var _default = (0, _reactRedux.connect)(
  function(state) {
    return { auth: state.auth, admin: state.admin };
  },
  function(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(adminActions, dispatch) };
  }
)(Email);
exports.default = _default;
//# sourceMappingURL=email.component.js.map
