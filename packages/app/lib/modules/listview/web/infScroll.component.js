'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
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
var InfScroll = (function(_Component) {
  (0, _inherits2.default)(InfScroll, _Component);
  var _super = _createSuper(InfScroll);
  function InfScroll(props) {
    var _this;
    (0, _classCallCheck2.default)(this, InfScroll);
    _this = _super.call(this, props);
    _this.scrollListener = _this.scrollListener.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.attachScrollListener = _this.attachScrollListener.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(InfScroll, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.pageLoaded = this.props.pageStart;
        this.attachScrollListener();
        this.data = this.props.data;
        if (!this.data || !this.data.length) {
          this.props.loadMore(this.pageLoaded);
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.data.length !== this.props.data.length) {
          this.attachScrollListener();
          this.data = this.props.data;
        }
        if (!this.props.data.length < this.data.length) {
          this.pageLoaded = this.props.pageStart;
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.detachScrollListener();
      }
    },
    {
      key: 'setDefaultLoader',
      value: function setDefaultLoader(loader) {
        this.defaultLoader = loader;
      }
    },
    {
      key: 'detachScrollListener',
      value: function detachScrollListener() {
        var scrollEl = window;
        if (this.props.useWindow === false) {
          scrollEl = this.scrollComponent.parentNode;
        }
        scrollEl.removeEventListener(
          'scroll',
          this.scrollListener,
          this.props.useCapture
        );
        scrollEl.removeEventListener(
          'resize',
          this.scrollListener,
          this.props.useCapture
        );
      }
    },
    {
      key: 'attachScrollListener',
      value: function attachScrollListener() {
        if (!this.props.hasMore) {
          return;
        }
        var scrollEl = window;
        if (this.props.useWindow === false) {
          scrollEl = this.scrollComponent.parentNode;
        }
        scrollEl.addEventListener('scroll', this.scrollListener, this.props.useCapture);
        scrollEl.addEventListener('resize', this.scrollListener, this.props.useCapture);
        if (this.props.initialLoad) {
          this.scrollListener();
        }
      }
    },
    {
      key: 'scrollListener',
      value: function scrollListener() {
        if (!this.props.data || !this.props.data.length) return;
        var el = this.scrollComponent;
        var scrollEl = window;
        var offset;
        if (this.props.useWindow) {
          var scrollTop =
            scrollEl.pageYOffset !== undefined
              ? scrollEl.pageYOffset
              : (document.documentElement || document.body.parentNode || document.body)
                  .scrollTop;
          if (this.props.isReverse) {
            offset = scrollTop;
          } else {
            offset =
              this.calculateTopPosition(el) +
              (el.offsetHeight - scrollTop - window.innerHeight);
          }
        } else if (this.props.isReverse) {
          offset = el.parentNode.scrollTop;
        } else {
          offset = el.scrollHeight - el.parentNode.scrollTop - el.parentNode.clientHeight;
        }
        if (offset < Number(this.props.threshold)) {
          this.detachScrollListener();
          if (typeof this.props.loadMore === 'function') {
            this.props.loadMore((this.pageLoaded += 1));
          }
        }
      }
    },
    {
      key: 'calculateTopPosition',
      value: function calculateTopPosition(el) {
        if (!el) {
          return 0;
        }
        return el.offsetTop + this.calculateTopPosition(el.offsetParent);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          children = _this$props.children,
          element = _this$props.element,
          hasMore = _this$props.hasMore,
          initialLoad = _this$props.initialLoad,
          isReverse = _this$props.isReverse,
          loader = _this$props.loader,
          loadMore = _this$props.loadMore,
          pageStart = _this$props.pageStart,
          threshold = _this$props.threshold,
          useCapture = _this$props.useCapture,
          useWindow = _this$props.useWindow,
          data = _this$props.data,
          props = (0, _objectWithoutProperties2.default)(_this$props, [
            'children',
            'element',
            'hasMore',
            'initialLoad',
            'isReverse',
            'loader',
            'loadMore',
            'pageStart',
            'threshold',
            'useCapture',
            'useWindow',
            'data'
          ]);
        props.ref = function(node) {
          _this2.scrollComponent = node;
        };
        return _react.default.createElement(
          element,
          props,
          children,
          hasMore && (loader || this.defaultLoader)
        );
      }
    }
  ]);
  return InfScroll;
})(_react.Component);
exports.default = InfScroll;
(0, _defineProperty2.default)(InfScroll, 'propTypes', { data: _propTypes.default.array });
InfScroll.propTypes = {
  element: _propTypes.default.string,
  hasMore: _propTypes.default.bool,
  initialLoad: _propTypes.default.bool,
  isReverse: _propTypes.default.bool,
  loadMore: _propTypes.default.func.isRequired,
  pageStart: _propTypes.default.number,
  threshold: _propTypes.default.number,
  useCapture: _propTypes.default.bool,
  useWindow: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.array
  ]).isRequired,
  loader: _propTypes.default.object
};
InfScroll.defaultProps = {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  useCapture: false,
  loader: null
};
//# sourceMappingURL=infScroll.component.js.map
