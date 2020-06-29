'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = TooltipContainer;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../styled/uni');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _setupTooltips = require('./mobile/setupTooltips');
var _reactTooltip = _interopRequireDefault(require('react-tooltip'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tooltip/tooltip.component.js';
var InfoImage = require('../../../public/img/info.png');
var isNative = process.env.WEB !== 'true';
var AbsoluteWrapper = _primitives.default.Text.withConfig({
  displayName: 'tooltipcomponent__AbsoluteWrapper',
  componentId: 'sc-17j84b5-0'
})(['position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;z-index:1;']);
TooltipContainer.propTypes = {
  name: _propTypes.default.string,
  data: _propTypes.default.object,
  children: _propTypes.default.object,
  info: _propTypes.default.bool,
  inline: _propTypes.default.oneOfType([
    _propTypes.default.bool,
    _propTypes.default.number
  ])
};
function TooltipContainer(_ref) {
  var children = _ref.children,
    name = _ref.name,
    data = _ref.data,
    info = _ref.info,
    inline = _ref.inline,
    rest = (0, _objectWithoutProperties2.default)(_ref, [
      'children',
      'name',
      'data',
      'info',
      'inline'
    ]);
  (0, _react.useEffect)(
    function() {
      if (_reactTooltip.default.rebuild) _reactTooltip.default.rebuild();
    },
    [data, name, children]
  );
  (0, _react.useEffect)(
    function() {
      return data.shouldRegister && initTooltip();
    },
    [data.shouldRegister, initTooltip]
  );
  var dispatch = (0, _reactRedux.useDispatch)();
  var el = (0, _react.useRef)();
  var _setupMobileTooltips = (0, _setupTooltips.setupMobileTooltips)({
      tooltips: [{ name: name, el: el, data: data }],
      dispatch: dispatch
    }),
    toggleTooltip = _setupMobileTooltips.toggleTooltip,
    initTooltip = _setupMobileTooltips.initTooltip;
  var Wrapper = (children && _uni.View) || AbsoluteWrapper;
  return info
    ? _react.default.createElement(
        _uni.Text,
        {
          ref: el,
          onPress:
            data.desktopOnly || !isNative
              ? null
              : function() {
                  return toggleTooltip(name);
                },
          inline: inline,
          __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 5 }
        },
        _react.default.createElement(
          _uni.Image,
          (0, _extends2.default)(
            {
              'data-event-off': 'click',
              'data-place': data.position,
              'data-for': 'mainTooltip',
              'data-tip': JSON.stringify({ type: 'TEXT', props: data })
            },
            rest,
            { source: InfoImage, resizeMode: 'contain', h: 1.7, w: 1.7, inline: inline },
            rest,
            { __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 } }
          )
        )
      )
    : _react.default.createElement(
        Wrapper,
        {
          ref: el,
          'data-event-off': 'click',
          'data-place': data.position,
          'data-for': 'mainTooltip',
          'data-tip': JSON.stringify({ type: 'TEXT', props: data }),
          onLongPress: function onLongPress() {
            return toggleTooltip(name);
          },
          onPress:
            data.desktopOnly || !isNative
              ? null
              : function() {
                  return toggleTooltip(name);
                },
          __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 5 }
        },
        children
      );
}
//# sourceMappingURL=tooltip.component.js.map
