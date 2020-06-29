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
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/waitlist.component.js';
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
if (process.env.BROWSER === true) {
  require('./admin.css');
}
var Waitlist = (function(_Component) {
  (0, _inherits2.default)(Waitlist, _Component);
  var _super = _createSuper(Waitlist);
  function Waitlist(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Waitlist);
    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.sendInvites = _this.sendInvites.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.state = { number: 1 };
    return _this;
  }
  (0, _createClass2.default)(Waitlist, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.actions.getWaitlist();
      }
    },
    {
      key: 'destroy',
      value: function destroy(invite) {
        var c = window.confirm('Are you sure you would like to delete this invite?');
        if (c) this.props.actions.destroy(invite);
      }
    },
    {
      key: 'sendInvites',
      value: function sendInvites() {
        var _this2 = this;
        var userIds = this.props.admin.waitList.slice(0, this.state.number);
        var users = userIds.map(function(id) {
          return _this2.props.admin.wait[id];
        });
        this.props.actions.inviteFromWaitlist(users);
      }
    },
    {
      key: 'handleChange',
      value: function handleChange(event) {
        this.setState(
          (0, _defineProperty2.default)({}, event.target.name, event.target.value)
        );
      }
    },
    {
      key: 'renderWaitlist',
      value: function renderWaitlist(waitlistId) {
        var _this3 = this;
        var user = this.props.admin.wait[waitlistId];
        if (!user) return null;
        return _react.default.createElement(
          'div',
          {
            key: waitlistId,
            className: 'adminRow',
            __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }
          },
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 9 } },
            user.name
          ),
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 } },
            user.email
          ),
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 } },
            user.status
          ),
          _react.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this3.props.actions.inviteFromWaitlist([user]);
              },
              __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }
            },
            'Send Invite'
          ),
          _react.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this3.props.actions.deleteWaitlistUser(user);
              },
              __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 9 }
            },
            'Remove'
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var waitlist = this.props.admin.waitList.map(function(id) {
          return _this4.renderWaitlist(id);
        });
        return _react.default.createElement(
          'div',
          {
            className: 'adminContainer',
            __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }
          },
          _react.default.createElement(
            'h2',
            { __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 9 } },
            'Waitlist'
          ),
          _react.default.createElement(
            'div',
            {
              className: 'adminInner',
              __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 9 }
            },
            _react.default.createElement('input', {
              className: 'blueInput',
              style: { width: '40px', textAlign: 'right' },
              type: 'text',
              name: 'number',
              placeholder: 'number of users',
              value: this.state.number,
              onChange: this.handleChange,
              __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 11 }
            }),
            _react.default.createElement(
              _ShadowButton.default,
              {
                backgroundColor: 'white',
                color: '#3E3EFF',
                onClick: this.sendInvites,
                __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 11 }
              },
              'Invite the next ' +
                (this.state.number === 1 ? 'user' : this.state.number + ' users')
            )
          ),
          _react.default.createElement(
            'div',
            {
              key: 'inviteId',
              className: 'titleRow',
              __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 9 }
            },
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 11 } },
              'Name'
            ),
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 11 } },
              'Email'
            ),
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 11 } },
              'Status'
            ),
            _react.default.createElement('span', {
              style: { maxWidth: 130 },
              __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 11 }
            })
          ),
          waitlist
        );
      }
    }
  ]);
  return Waitlist;
})(_react.Component);
(0, _defineProperty2.default)(Waitlist, 'propTypes', {
  actions: _propTypes.default.object,
  admin: _propTypes.default.object
});
Waitlist.propTypes = {
  actions: _propTypes.default.object,
  admin: _propTypes.default.object
};
var _default = (0, _reactRedux.connect)(
  function(state) {
    return { auth: state.auth, admin: state.admin };
  },
  function(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(adminActions, dispatch) };
  }
)(Waitlist);
exports.default = _default;
//# sourceMappingURL=waitlist.component.js.map
