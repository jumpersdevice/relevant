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
var _infScroll = _interopRequireDefault(
  require('../../listview/web/infScroll.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/invites.container.js';
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
var PAGE_SIZE = 40;
var Invites = (function(_Component) {
  (0, _inherits2.default)(Invites, _Component);
  var _super = _createSuper(Invites);
  function Invites(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Invites);
    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.createInvite = _this.createInvite.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.sendEmail = _this.sendEmail.bind((0, _assertThisInitialized2.default)(_this));
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.hasMore = true;
    _this.state = { email: '', name: '', number: 1, filter: null, invitedBy: '' };
    return _this;
  }
  (0, _createClass2.default)(Invites, [
    { key: 'componentDidMount', value: function componentDidMount() {} },
    {
      key: 'load',
      value: function load(page) {
        var l = this.props.admin.inviteList.length;
        this.hasMore = (page - 1) * PAGE_SIZE <= l;
        if (this.hasMore) {
          this.props.actions.getInvites(l, PAGE_SIZE);
        }
      }
    },
    {
      key: 'sendEmail',
      value: function sendEmail(invite) {
        if (invite.status) {
          var c = window.confirm(
            'We have already sent one email to this user, are you sure you would like to send another one?'
          );
          if (c) {
            this.props.actions.sendInvitationEmail(invite._id);
          }
        } else {
          this.props.actions.sendInvitationEmail(invite._id);
        }
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
      key: 'createInvite',
      value: function createInvite() {
        var invite = {
          email: this.state.email,
          name: this.state.name,
          number: this.state.number,
          invitedByString: this.state.invitedBy
        };
        this.props.actions.createInvite(invite);
        this.setState({ name: '', email: '', number: 1 });
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
      key: 'renderInvite',
      value: function renderInvite(inviteId) {
        var _this2 = this;
        var invite = this.props.admin.invites[inviteId];
        if (!invite) return null;
        if (this.state.filter === 'original' && !invite.email) return null;
        if (this.state.filter === 'registered' && invite.status !== 'registered')
          return null;
        if (
          this.state.filter === 'notregistered' &&
          (invite.status === 'registered' || !invite.email)
        ) {
          return null;
        }
        return _react.default.createElement(
          'div',
          {
            key: inviteId,
            className: 'adminRow',
            __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 7 }
          },
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 9 } },
            invite.invitedBy
          ),
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 9 } },
            invite.name
          ),
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 9 } },
            invite.email
          ),
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 9 } },
            invite.code
          ),
          _react.default.createElement(
            'span',
            { __source: { fileName: _jsxFileName, lineNumber: 99, columnNumber: 9 } },
            invite.status
          ),
          _react.default.createElement(
            'span',
            {
              style: { width: '40px' },
              __source: { fileName: _jsxFileName, lineNumber: 100, columnNumber: 9 }
            },
            invite.number
          ),
          _react.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this2.sendEmail(invite);
              },
              __source: { fileName: _jsxFileName, lineNumber: 101, columnNumber: 9 }
            },
            'Resend Email'
          ),
          _react.default.createElement(
            'button',
            {
              className: 'alert',
              onClick: function onClick() {
                return _this2.destroy(invite);
              },
              __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 9 }
            },
            'Delete'
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var createInvite = _react.default.createElement(
          'div',
          {
            className: 'adminInner',
            __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 7 }
          },
          _react.default.createElement('input', {
            className: 'blueInput',
            type: 'text',
            name: 'invitedBy',
            placeholder: 'invited by',
            value: this.state.invitedBy,
            onChange: this.handleChange,
            __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 9 }
          }),
          _react.default.createElement('input', {
            className: 'blueInput',
            type: 'email',
            name: 'email',
            placeholder: 'user email',
            value: this.state.email,
            onChange: this.handleChange,
            __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 9 }
          }),
          _react.default.createElement('input', {
            className: 'blueInput',
            type: 'text',
            name: 'name',
            placeholder: 'user name',
            value: this.state.name,
            onChange: this.handleChange,
            __source: { fileName: _jsxFileName, lineNumber: 128, columnNumber: 9 }
          }),
          _react.default.createElement('input', {
            className: 'blueInput',
            style: { width: '40px', textAlign: 'right' },
            type: 'text',
            name: 'number',
            placeholder: 'number of invites',
            value: this.state.number,
            onChange: this.handleChange,
            __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 9 }
          }),
          _react.default.createElement(
            _ShadowButton.default,
            {
              backgroundColor: 'white',
              color: '#3E3EFF',
              onClick: this.createInvite,
              __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 9 }
            },
            this.state.email ? 'Send Invite Email' : 'Create Invite Code'
          )
        );
        var invites = this.props.admin.inviteList
          ? this.props.admin.inviteList.map(function(id) {
              return _this3.renderInvite(id);
            })
          : null;
        return _react.default.createElement(
          'div',
          {
            className: 'adminContainer',
            __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 7 }
          },
          _react.default.createElement(
            'h2',
            { __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 9 } },
            'Manage Invites'
          ),
          createInvite,
          _react.default.createElement(
            'div',
            {
              className: 'filter',
              __source: { fileName: _jsxFileName, lineNumber: 164, columnNumber: 9 }
            },
            _react.default.createElement(
              'span',
              {
                onClick: function onClick() {
                  return _this3.setState({ filter: null });
                },
                __source: { fileName: _jsxFileName, lineNumber: 165, columnNumber: 11 }
              },
              'all'
            ),
            _react.default.createElement(
              'span',
              {
                onClick: function onClick() {
                  return _this3.setState({ filter: 'original' });
                },
                __source: { fileName: _jsxFileName, lineNumber: 166, columnNumber: 11 }
              },
              'original'
            ),
            _react.default.createElement(
              'span',
              {
                onClick: function onClick() {
                  return _this3.setState({ filter: 'registered' });
                },
                __source: { fileName: _jsxFileName, lineNumber: 167, columnNumber: 11 }
              },
              'registered'
            ),
            _react.default.createElement(
              'span',
              {
                onClick: function onClick() {
                  return _this3.setState({ filter: 'notregistered' });
                },
                __source: { fileName: _jsxFileName, lineNumber: 168, columnNumber: 11 }
              },
              'notregistered'
            )
          ),
          _react.default.createElement(
            'div',
            {
              key: 'inviteId',
              className: 'titleRow',
              __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 9 }
            },
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 11 } },
              'Invited by'
            ),
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 175, columnNumber: 11 } },
              'Name'
            ),
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 176, columnNumber: 11 } },
              'Email'
            ),
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 177, columnNumber: 11 } },
              'Invite Code'
            ),
            _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 11 } },
              'Status'
            ),
            _react.default.createElement(
              'span',
              {
                style: { width: '40px' },
                __source: { fileName: _jsxFileName, lineNumber: 179, columnNumber: 11 }
              },
              'Number'
            ),
            _react.default.createElement('span', {
              style: { maxWidth: 130 },
              __source: { fileName: _jsxFileName, lineNumber: 180, columnNumber: 11 }
            })
          ),
          _react.default.createElement(
            _infScroll.default,
            {
              className: 'adminContainer',
              data: this.props.admin.inviteList,
              loadMore: this.load,
              hasMore: this.hasMore,
              __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 9 }
            },
            invites
          )
        );
      }
    }
  ]);
  return Invites;
})(_react.Component);
(0, _defineProperty2.default)(Invites, 'propTypes', {
  admin: _propTypes.default.object,
  actions: _propTypes.default.object
});
var _default = (0, _reactRedux.connect)(
  function(state) {
    return { auth: state.auth, admin: state.admin };
  },
  function(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(adminActions, dispatch) };
  }
)(Invites);
exports.default = _default;
//# sourceMappingURL=invites.container.js.map
