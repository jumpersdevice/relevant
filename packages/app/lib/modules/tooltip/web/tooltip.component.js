'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.TextTooltip = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactTooltip = _interopRequireDefault(require('react-tooltip'));
var _postEarningTooltip = _interopRequireDefault(
  require('./postEarningTooltip.component')
);
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tooltip/web/tooltip.component.js';
var TextTooltipComponent = function TextTooltipComponent(_ref) {
  var text = _ref.text,
    title = _ref.title;
  return _react.default.createElement(
    _uni.View,
    {
      maxWidth: 32,
      flex: 1,
      fdirection: 'column',
      __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 3 }
    },
    title
      ? _react.default.createElement(
          _uni.Title,
          {
            c: _styles.colors.white,
            mb: 1,
            __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 7 }
          },
          title
        )
      : null,
    text
      ? _react.default.createElement(
          _uni.BodyText,
          {
            c: _styles.colors.white,
            flex: 1,
            __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 7 }
          },
          text
        )
      : null
  );
};
TextTooltipComponent.propTypes = {
  text: _propTypes.default.string,
  title: _propTypes.default.string
};
var TOOLTIPS = {
  POST: {},
  EARNING: _postEarningTooltip.default,
  TEXT: TextTooltipComponent
};
var TextTooltip = function TextTooltip(_ref2) {
  var id = _ref2.id,
    type = _ref2.type,
    rest = (0, _objectWithoutProperties2.default)(_ref2, ['id', 'type']);
  return _react.default.createElement(
    _reactTooltip.default,
    (0, _extends2.default)(
      {
        className: 'reactTooltip',
        id: id,
        effect: 'solid',
        type: type || 'light',
        getContent: function getContent(dataTip) {
          var data = JSON.parse(dataTip);
          if (!data) return null;
          var type = data.type,
            props = data.props;
          if (!TOOLTIPS[type]) return null;
          var TT = TOOLTIPS[type];
          return _react.default.createElement(
            TT,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 14 }
            })
          );
        }
      },
      rest,
      { __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 3 } }
    )
  );
};
exports.TextTooltip = TextTooltip;
TextTooltip.propTypes = {
  id: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.string
  ]),
  type: _propTypes.default.string
};
//# sourceMappingURL=tooltip.component.js.map
