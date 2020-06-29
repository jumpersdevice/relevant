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
var _reactRouter = require('react-router');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _community = require('../community.actions');
var _avatarbox = _interopRequireDefault(require('../../user/avatarbox.component'));
var _awesomeDebouncePromise = _interopRequireDefault(require('awesome-debounce-promise'));
var _infScroll = _interopRequireDefault(
  require('../../listview/web/infScroll.component')
);
var _web = require('../../styled/web');
var _uni = require('../../styled/uni');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/web/communityMembers.component.js';
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
var ScrollContainer = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'communityMemberscomponent__ScrollContainer',
  componentId: 'sc-1eu5tia-0'
})(['overflow:auto;']);
var CommunityMembers = (function(_Component) {
  (0, _inherits2.default)(CommunityMembers, _Component);
  var _super = _createSuper(CommunityMembers);
  function CommunityMembers(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, CommunityMembers);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      searchResults: [],
      searchValue: ''
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'searchMembers',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(val) {
            var community;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    community = _this.props.community;
                    return _context.abrupt(
                      'return',
                      _this.props.actions.searchMembers(val, community.active)
                    );
                  case 2:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'debouncedSearchMembers',
      (0, _awesomeDebouncePromise.default)(_this.searchMembers, 100)
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleChange',
      (function() {
        var _ref2 = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee2(e) {
            var results;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _this.setState({ searchValue: e.target.value });
                    _context2.next = 3;
                    return _this.debouncedSearchMembers(e.target.value);
                  case 3:
                    results = _context2.sent;
                    _this.setState({ searchResults: results });
                  case 5:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2);
          })
        );
        return function(_x2) {
          return _ref2.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'load',
      function(page, length) {
        _this.hasMore = page * _this.pageSize <= length;
        if (_this.hasMore) {
          var community = _this.props.community;
          _this.props.actions.getCommunityMembers({
            slug: community.active,
            skip: length,
            limit: _this.pageSize
          });
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderRow',
      function(user) {
        var title = _this.role === user.role ? null : _this.getTitle(user.role);
        _this.role = user.role;
        var close = _this.props.close;
        return _react.default.createElement(
          _react.default.Fragment,
          {
            key: user._id,
            __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 7 }
          },
          title
            ? _react.default.createElement(
                _uni.SecondaryText,
                {
                  m: '2 0',
                  __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 18 }
                },
                title
              )
            : null,
          _react.default.createElement(
            _uni.View,
            {
              fdirection: 'row',
              m: ['2 0'],
              __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 9 }
            },
            _react.default.createElement(_avatarbox.default, {
              user: _objectSpread(
                _objectSpread({}, user.embeddedUser),
                {},
                { relevance: { pagerank: user.pagerank } }
              ),
              navigationCallback: close,
              showRelevance: true,
              condensedView: false,
              __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 11 }
            })
          )
        );
      }
    );
    _this.pageSize = 20;
    _this.hasMore = true;
    _this.ready = false;
    _this.role = null;
    return _this;
  }
  (0, _createClass2.default)(CommunityMembers, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.load(0, 0);
      }
    },
    {
      key: 'getTitle',
      value: function getTitle(role) {
        var TITLES = { admin: 'Admins', user: 'Members' };
        return TITLES[role];
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var community = this.props.community;
        var _this$state = this.state,
          searchResults = _this$state.searchResults,
          searchValue = _this$state.searchValue;
        var active = community.active,
          members = community.members,
          communityMembers = community.communityMembers;
        var activeCommunityMembers = communityMembers[active] || [];
        return _react.default.createElement(
          _uni.View,
          {
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 7 }
          },
          _react.default.createElement(_web.Input, {
            placeholder: 'Search',
            onChange: this.handleChange,
            value: searchValue,
            type: 'search',
            __source: { fileName: _jsxFileName, lineNumber: 114, columnNumber: 9 }
          }),
          _react.default.createElement(
            ScrollContainer,
            {
              h: 40,
              mt: 2,
              __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 9 }
            },
            !searchValue
              ? _react.default.createElement(
                  _infScroll.default,
                  {
                    data: activeCommunityMembers,
                    loadMore: function loadMore(p) {
                      return _this2.load(p, activeCommunityMembers.length);
                    },
                    hasMore: this.hasMore,
                    useWindow: false,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 13
                    }
                  },
                  activeCommunityMembers.map(function(memberId) {
                    var user = members[memberId];
                    return _this2.renderRow(user);
                  })
                )
              : searchResults.map(function(user) {
                  return _this2.renderRow(user);
                })
          )
        );
      }
    }
  ]);
  return CommunityMembers;
})(_react.Component);
(0, _defineProperty2.default)(CommunityMembers, 'propTypes', {
  community: _propTypes.default.object,
  actions: _propTypes.default.object,
  close: _propTypes.default.func
});
var mapStateToProps = function mapStateToProps(state) {
  return { routing: state.routing, community: state.community };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        joinCommunity: _community.joinCommunity,
        searchMembers: _community.searchMembers,
        getCommunityMembers: _community.getCommunityMembers
      },
      dispatch
    )
  };
};
var _default = (0, _reactRouter.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommunityMembers)
);
exports.default = _default;
//# sourceMappingURL=communityMembers.component.js.map
