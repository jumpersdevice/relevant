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
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _community = require('./community.actions');
var _auth = require('../auth/auth.actions');
var _styledComponents = require('styled-components');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/communityList.component.js';
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
var linkStyles = (0, _styledComponents.css)(
  [':hover{background:', ';}'],
  _styles.colors.secondaryBG
);
var CommunityAdminList = (function(_Component) {
  (0, _inherits2.default)(CommunityAdminList, _Component);
  var _super = _createSuper(CommunityAdminList);
  function CommunityAdminList() {
    var _this;
    (0, _classCallCheck2.default)(this, CommunityAdminList);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleJoinCommunity',
      function(e, community) {
        var auth = _this.props.auth;
        if (auth.isAuthenticated) {
          _this.props.actions.joinCommunity(community);
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderJoinLink',
      function(c) {
        return _react.default.createElement(
          _uni.LinkFont,
          {
            inline: 1,
            c: _styles.colors.blue,
            onPress: function onPress(e) {
              return _this.handleJoinCommunity(e, c);
            },
            onClick: function onClick(e) {
              return _this.handleJoinCommunity(e, c);
            },
            __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 5 }
          },
          'Join Community'
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderInnerText',
      function(c) {
        var hashtags = _this.props.hashtags;
        return hashtags
          ? _react.default.createElement(
              _uni.BodyText,
              {
                c: _styles.colors.black,
                mt: 0.5,
                __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }
              },
              c.topics
                .map(function(t) {
                  return '#' + t;
                })
                .join(', ')
            )
          : _react.default.createElement(
              _uni.Box,
              { __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 7 } },
              _react.default.createElement(
                _uni.BodyText,
                {
                  inline: 1,
                  c: _styles.colors.black,
                  mt: 0.5,
                  __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 9 }
                },
                c.description
              ),
              _react.default.createElement(
                _uni.LinkFont,
                {
                  inline: 1,
                  c: _styles.colors.black,
                  mt: 0.5,
                  __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 9 }
                },
                c.memberCount,
                ' member',
                c.memberCount > 1 ? 's' : ''
              )
            );
      }
    );
    return _this;
  }
  (0, _createClass2.default)(CommunityAdminList, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          communities = _this$props.community.communities,
          actions = _this$props.actions,
          p = _this$props.p;
        var hP = typeof p !== 'undefined' ? p : 4;
        return _react.default.createElement(
          _uni.View,
          {
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 7 }
          },
          Object.values(communities).map(function(c) {
            var communityURl = '/'.concat(c.slug, '/new');
            return _react.default.createElement(
              _ULink.default,
              {
                to: communityURl,
                onPress: function onPress() {
                  return actions.setCommunity(c.slug);
                },
                onClick: function onClick() {
                  return actions.setCommunity(c.slug);
                },
                key: c._id,
                styles: linkStyles,
                fdirection: 'column',
                flex: 1,
                __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 13 }
              },
              _react.default.createElement(
                _uni.View,
                {
                  fdirection: 'row',
                  align: 'flex-start',
                  p: '2 '.concat(hP),
                  __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 15 }
                },
                _react.default.createElement(_uni.Image, {
                  source: { uri: c.image },
                  h: 8,
                  w: 8,
                  mr: 2,
                  bg: _styles.colors.secondaryBG,
                  __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 17 }
                }),
                _react.default.createElement(
                  _uni.View,
                  {
                    fdirection: 'column',
                    flex: 1,
                    __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 17 }
                  },
                  _react.default.createElement(
                    _uni.Title,
                    {
                      inline: 1,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 19
                      }
                    },
                    c.name,
                    ' '
                  ),
                  _react.default.createElement(
                    _uni.View,
                    {
                      wrap: true,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 19
                      }
                    },
                    _this2.renderInnerText(c)
                  )
                ),
                _react.default.createElement(_uni.Box, {
                  mt: 6,
                  __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 17 }
                })
              )
            );
          })
        );
      }
    }
  ]);
  return CommunityAdminList;
})(_react.Component);
(0, _defineProperty2.default)(CommunityAdminList, 'propTypes', {
  community: _propTypes.default.object,
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  hashtags: _propTypes.default.bool,
  p: _propTypes.default.number
});
var mapStateToProps = function mapStateToProps(state) {
  return { routing: state.routing, community: state.community, auth: state.auth };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { joinCommunity: _community.joinCommunity, setCommunity: _auth.setCommunity },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(CommunityAdminList);
exports.default = _default;
//# sourceMappingURL=communityList.component.js.map
