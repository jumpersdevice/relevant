'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = exports.Discover = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRouterDom = require('react-router-dom');
var _get = _interopRequireDefault(require('lodash/get'));
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var _styles = require('../../../styles');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _discoverPosts = _interopRequireDefault(require('./discoverPosts.component'));
var discoverHelper = _interopRequireWildcard(require('./discoverHelper'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/web/discover.container.js';
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
var Wrapper = _primitives.default.View.withConfig({
  displayName: 'discovercontainer__Wrapper',
  componentId: 'cuqcjd-0'
})(['display:flex;flex-direction:column;padding:0 0 ', ' 0;'], (0, _styles.sizing)(4));
var POST_PAGE_SIZE = 15;
var Discover = (function(_Component) {
  (0, _inherits2.default)(Discover, _Component);
  var _super = _createSuper(Discover);
  (0, _createClass2.default)(Discover, null, [
    {
      key: 'fetchData',
      value: function fetchData(dispatch, params) {
        var sort = params.sort,
          tag = params.tag,
          community = params.community;
        var length = 0;
        var tags = tag ? [tag] : [];
        switch (sort) {
          case 'new':
            return dispatch(
              postActions.getPosts(length, tags, null, POST_PAGE_SIZE, community)
            );
          case 'top':
            return dispatch(
              postActions.getPosts(length, tags, 'rank', POST_PAGE_SIZE, community)
            );
          default:
            return null;
        }
      }
    }
  ]);
  function Discover(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Discover);
    _this = _super.call(this, props, context);
    var params = _this.props.match.params;
    _this.state = {
      tabIndex: 1,
      routes: params.tag ? discoverHelper.tagRoutes : discoverHelper.standardRoutes
    };
    var sort = params.sort;
    if (sort) {
      _this.state.tabIndex = _this.state.routes.findIndex(function(tab) {
        return tab.key === sort;
      });
    }
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.lastRefresh = 0;
    return _this;
  }
  (0, _createClass2.default)(
    Discover,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props.actions.setScrollTab('discover', this.props.match.params);
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          var alreadyLoading;
          var _this$props$match$par = this.props.match.params,
            tag = _this$props$match$par.tag,
            sort = _this$props$match$par.sort,
            community = _this$props$match$par.community;
          var prevTag = (0, _get.default)(prevProps, 'match.params.tag', undefined);
          var prevSort = (0, _get.default)(prevProps, 'match.params.sort', undefined);
          var prevCommunity = (0, _get.default)(
            prevProps,
            'match.params.community',
            undefined
          );
          if (tag !== prevTag || sort !== prevSort || community !== prevCommunity) {
            this.props.actions.setScrollTab('discover', this.props.match.params);
          }
          if (this.props.refresh && this.props.refresh > this.lastRefresh) {
            this.lastRefresh = this.props.refresh;
            this.load(sort, this.props);
            alreadyLoading = true;
            return;
          }
          var userId = this.props.auth.user ? this.props.auth.user._id : null;
          var prevUserId = prevProps.auth.user ? prevProps.auth.user._id : null;
          if (userId !== prevUserId && !alreadyLoading) {
            this.load(sort, this.props);
            alreadyLoading = true;
            return;
          }
          if (tag !== prevProps.match.params.tag) {
            this.load(sort, this.props);
            alreadyLoading = true;
          }
          if (this.props.reload !== prevProps.reload) {
            this.load(sort, this.props);
            alreadyLoading = true;
          }
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.props.actions.setScrollTab('discover', {});
        }
      },
      {
        key: 'getLoadedState',
        value: function getLoadedState() {
          var sort = this.state.routes[this.state.tabIndex].key;
          var tag = this.props.match.params.tag;
          var loadLookup = tag
            ? this.props.posts.loaded.topics[tag]
            : this.props.posts.loaded;
          return loadLookup && loadLookup[sort];
        }
      },
      {
        key: 'load',
        value: function load(sort, props, _length) {
          var _this$props = this.props,
            actions = _this$props.actions,
            auth = _this$props.auth;
          if (!this.state.routes[this.state.tabIndex]) return;
          var community = auth.community;
          sort = sort || this.state.routes[this.state.tabIndex].key;
          props = props || this.props;
          var tags = props.match.params.tag ? [props.match.params.tag] : [];
          var length = _length || 0;
          switch (sort) {
            case 'new':
              actions.getPosts(length, tags, null, POST_PAGE_SIZE, community);
              break;
            case 'top':
              actions.getPosts(length, tags, 'rank', POST_PAGE_SIZE, community);
              break;
            default:
              break;
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          if (!this.state.routes[this.state.tabIndex]) return null;
          var sort = this.state.routes[this.state.tabIndex].key;
          var tag = this.props.match.params.tag;
          return _react.default.createElement(
            Wrapper,
            { __source: { fileName: _jsxFileName, lineNumber: 153, columnNumber: 7 } },
            _react.default.createElement(
              'div',
              { __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 9 } },
              _react.default.createElement(
                _discoverPosts.default,
                (0, _extends2.default)(
                  {
                    key: 'posts' + sort + tag,
                    sort: sort,
                    load: this.load,
                    tag: tag,
                    pageSize: POST_PAGE_SIZE
                  },
                  this.props,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 11
                    }
                  }
                )
              )
            )
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
          return discoverHelper.getDiscoverState(nextProps, prevState);
        }
      }
    ]
  );
  return Discover;
})(_react.Component);
exports.Discover = Discover;
(0, _defineProperty2.default)(Discover, 'propTypes', {
  match: _propTypes.default.object,
  refresh: _propTypes.default.number,
  auth: _propTypes.default.object,
  posts: _propTypes.default.object,
  user: _propTypes.default.object,
  actions: _propTypes.default.object,
  reload: _propTypes.default.number
});
function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user,
    posts: state.posts,
    tags: state.tags,
    investments: state.investments,
    myPostInv: state.investments.myPostInv,
    refresh: state.navigation.discover.refresh,
    reload: state.navigation.reload
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(_objectSpread({}, authActions), postActions),
          userActions
        ),
        navigationActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Discover)
);
exports.default = _default;
//# sourceMappingURL=discover.container.js.map
