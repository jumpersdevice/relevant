'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
var UserActions = _interopRequireWildcard(require('../../user/user.actions'));
var PostActions = _interopRequireWildcard(require('../../post/post.actions'));
var _auth = require('../../auth/auth.actions');
var _propValidation = require('../../../utils/propValidation');
var _profile = _interopRequireDefault(require('../profile.component'));
var _userPosts = _interopRequireDefault(require('./userPosts.component'));
var _web = require('../../styled/web');
var _navigation = require('../../navigation/navigation.actions');
var _react2 = _interopRequireDefault(require('linkifyjs/react'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/web/profile.container.js';
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
var pageSize = 10;
var ProfileContainer = (function(_Component) {
  (0, _inherits2.default)(ProfileContainer, _Component);
  var _super = _createSuper(ProfileContainer);
  function ProfileContainer() {
    var _this;
    (0, _classCallCheck2.default)(this, ProfileContainer);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      user: {},
      isOwner: false
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'grabPosts',
      function(l) {
        var id = _this.props.match.params.id;
        _this.props.actions.getUserPosts(l || 0, pageSize, id);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(
    ProfileContainer,
    [
      {
        key: 'grabUser',
        value: function grabUser() {
          var id = this.props.match.params.id;
          this.props.actions.getSelectedUser(id);
        }
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.grabUser();
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(nextProps) {
          var id = this.props.match.params.id;
          if (id !== nextProps.match.params.id) {
            this.grabUser();
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          var screenSize = this.props.screenSize;
          var user = this.state.user;
          var bio =
            user.bio &&
            _react.default.createElement(
              _react2.default,
              { __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 29 } },
              user.bio
            );
          return _react.default.createElement(
            _web.View,
            {
              mb: 20,
              fdirection: 'column',
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }
            },
            _react.default.createElement(
              _profile.default,
              (0, _extends2.default)(
                { key: this.state.user._id + 'profile' },
                this.props,
                this.state,
                {
                  bio: bio,
                  __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 9 }
                }
              )
            ),
            _react.default.createElement(_web.Divider, {
              m: [4, 0],
              screenSize: screenSize,
              __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 9 }
            }),
            _react.default.createElement(
              _userPosts.default,
              (0, _extends2.default)(
                { key: this.state.user._id },
                this.props,
                this.state,
                {
                  load: this.grabPosts,
                  pageSize: pageSize,
                  __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 9 }
                }
              )
            )
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props) {
          var auth = props.auth,
            match = props.match,
            usersState = props.usersState;
          var handle = match.params.id;
          var userId = usersState.handleToId[handle];
          var user = usersState.users[userId];
          if (!user) return null;
          var isOwner = auth.user && user._id === auth.user._id;
          return { user: user, isOwner: isOwner };
        }
      }
    ]
  );
  return ProfileContainer;
})(_react.Component);
(0, _defineProperty2.default)(ProfileContainer, 'propTypes', {
  actions: _propTypes.default.object.isRequired,
  match: _propTypes.default.object,
  usersState: _propTypes.default.object.isRequired,
  auth: _propValidation.authProps,
  screenSize: _propTypes.default.number
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    usersState: state.user,
    posts: state.posts,
    investments: state.investments,
    myPostInv: state.investments.myPostInv,
    community: state.community,
    screenSize: state.navigation.screenSize
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, UserActions), PostActions),
        {},
        {
          hideModal: _navigation.hideModal,
          logoutAction: _auth.logoutAction,
          showModal: _navigation.showModal
        }
      ),
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
exports.default = _default;
//# sourceMappingURL=profile.container.js.map
