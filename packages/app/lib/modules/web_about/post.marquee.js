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
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _web = require('../styled/web');
var _styles = require('../../styles');
var _post = require('../post/post.actions');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _post2 = require('../../utils/post');
var _numbers = require('../../utils/numbers');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/post.marquee.js';
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
var MarqueeContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'postmarquee__MarqueeContainer',
  componentId: 'sc-16w7j93-0'
})(['white-space:nowrap;width:100vw;overflow:hidden;z-index:10;position:fixed;top:0;']);
var BG_COLORS = [_styles.colors.black, _styles.colors.white];
var Marquee = (function(_Component) {
  (0, _inherits2.default)(Marquee, _Component);
  var _super = _createSuper(Marquee);
  function Marquee() {
    var _this;
    (0, _classCallCheck2.default)(this, Marquee);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'x', []);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'rows',
      []
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'pause',
      function() {
        cancelAnimationFrame(_this.lastFrame);
        window.removeEventListener('focus', _this.animate);
        window.addEventListener('focus', _this.animate);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'rowSpeed',
      function(i) {
        switch (i % 3) {
          case 0:
            return 0.6;
          case 1:
            return 0.85;
          case 2:
            return 0.75;
          default:
            return 0.6;
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'animate',
      function() {
        var now = new Date();
        var elapsed = _this.lastTime ? (now - _this.lastTime) / 10 : 0;
        _this.x = _this.rows.map(function(row, i) {
          var w = row.offsetWidth / 2;
          var newX = (_this.x[i] || i) - elapsed * _this.rowSpeed(i);
          if (newX <= -w) newX += w;
          var rX = Math.round(newX * 1000) / 1000;
          row.style.transform = 'translate3d('.concat(rX, 'px, 0, 0)');
          return rX;
        });
        _this.lastTime = now;
        _this.lastFrame = requestAnimationFrame(_this.animate);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderTicker',
      function(row, key) {
        var _this$props = _this.props,
          posts = _this$props.posts,
          rows = _this$props.rows,
          communityState = _this$props.communityState;
        var links = posts.topPosts.filter(function(post) {
          return post.title;
        });
        return links.map(function(post, i) {
          if (i % rows !== row) return null;
          var color = BG_COLORS[(row + 1) % 2];
          var community = communityState.communities[post.data.community];
          if (!community) return null;
          var avgRank = community.currentShares / community.postCount;
          var tick = post.data.pagerank - avgRank;
          var title = (0, _post2.getTitle)({ post: post, maxLength: 60 }).toUpperCase();
          var icon = (0, _post2.getFavIcon)(post.metaPost.domain);
          var tickerString = _react.default.createElement(
            _react.default.Fragment,
            { __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 9 } },
            _react.default.createElement(_web.Image, {
              bg: _styles.colors.white,
              w: 2,
              h: 2,
              mr: 1,
              src: icon,
              resizeMode: 'contain',
              __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 11 }
            }),
            _react.default.createElement(
              _web.Text,
              {
                mr: 0.5,
                c: color,
                __source: { fileName: _jsxFileName, lineNumber: 105, columnNumber: 11 }
              },
              title
            ),
            _react.default.createElement(
              _web.Text,
              {
                mr: 0.5,
                c: tick < 0 ? _styles.colors.red : _styles.colors.green,
                __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 11 }
              },
              tick >= 0 ? '▲' : '▼'
            ),
            _react.default.createElement(
              _web.Text,
              {
                c: color,
                __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 11 }
              },
              (0, _numbers.abbreviateNumber)(tick),
              '%'
            )
          );
          return _react.default.createElement(
            _ULink.default,
            {
              m: '1 4',
              key: ''.concat(post._id).concat(key),
              to: (0, _post2.getPostUrl)(post.data.community, post),
              __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 9 }
            },
            _react.default.createElement(
              _web.NumericalValue,
              { __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 11 } },
              tickerString
            )
          );
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderRow',
      function(row) {
        var bg = BG_COLORS[row % 2];
        var tickers = _this.renderTicker(row, 1);
        var tickersDouble = _this.renderTicker(row, 2);
        return _react.default.createElement(
          _web.View,
          {
            fdirection: 'row',
            flex: 1,
            bg: bg,
            key: 'row'.concat(row),
            __source: { fileName: _jsxFileName, lineNumber: 134, columnNumber: 7 }
          },
          _react.default.createElement(
            _web.Text,
            {
              ref: function ref(c) {
                return (_this.rows[row] = c);
              },
              __source: { fileName: _jsxFileName, lineNumber: 135, columnNumber: 9 }
            },
            tickers,
            tickersDouble
          )
        );
      }
    );
    return _this;
  }
  (0, _createClass2.default)(Marquee, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.actions.getTopPosts();
        this.animate();
        window.addEventListener('blur', this.pause);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('blur', this.pause);
        window.removeEventListener('focus', this.animate);
        cancelAnimationFrame(this.lastFrame);
      }
    },
    {
      key: 'render',
      value: function render() {
        var N = this.props.rows;
        var rows = Array.from(Array(N).keys());
        return _react.default.createElement(
          MarqueeContainer,
          {
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 147, columnNumber: 7 }
          },
          rows.map(this.renderRow)
        );
      }
    }
  ]);
  return Marquee;
})(_react.Component);
(0, _defineProperty2.default)(Marquee, 'propTypes', {
  rows: _propTypes.default.number,
  actions: _propTypes.default.object,
  posts: _propTypes.default.object,
  communityState: _propTypes.default.object
});
(0, _defineProperty2.default)(Marquee, 'defaultProps', { rows: 1 });
function mapStateToProps(state) {
  return { posts: state.posts, communityState: state.community };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)({ getTopPosts: _post.getTopPosts }, dispatch)
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Marquee);
exports.default = _default;
//# sourceMappingURL=post.marquee.js.map
