'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.NotificationToggle = NotificationToggle;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _reactRedux = require('react-redux');
var _toggleswitch = _interopRequireDefault(require('../../ui/toggleswitch.component'));
var _styles = require('../../../styles');
var _auth = require('../../auth/auth.actions');
var _settings = require('./settings.constants');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/settings/settings.toggle.js';
NotificationToggle.propTypes = {
  parent: _propTypes.default.string,
  label: _propTypes.default.string,
  notification: _propTypes.default.bool,
  togglePosition: _propTypes.default.string,
  text: _propTypes.default.shape({
    label: _propTypes.default.string,
    description: _propTypes.default.description
  }),
  DescriptionComponent: _propTypes.default.object
};
function NotificationToggle(_ref) {
  var parent = _ref.parent,
    label = _ref.label,
    notification = _ref.notification,
    text = _ref.text,
    togglePosition = _ref.togglePosition,
    DescriptionComponent = _ref.DescriptionComponent;
  var dispatch = (0, _reactRedux.useDispatch)();
  var details = text || _settings.SETTING_DETAILS[parent][label];
  var reverse = togglePosition === 'right';
  if (!details) return null;
  var Description = DescriptionComponent || _uni.BodyText;
  return _react.default.createElement(
    _uni.View,
    {
      mt: 3,
      fdirection: 'row'.concat(reverse ? '-reverse' : ''),
      align: 'center',
      __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 5 }
    },
    _react.default.createElement(_toggleswitch.default, {
      isOn: !!notification,
      onColor: _styles.colors.green,
      offColor: _styles.colors.grey,
      size: 'custom',
      onToggle: function onToggle(isOn) {
        return dispatch(
          (0, _auth.updateNotificationSettings)(
            (0, _defineProperty2.default)(
              {},
              parent,
              (0, _defineProperty2.default)({}, label, isOn)
            )
          )
        );
      },
      __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'column',
        ml: reverse ? 0 : 2,
        mr: reverse ? 1.5 : 0,
        flex: 1,
        __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 }
      },
      details.label
        ? _react.default.createElement(
            _uni.Title,
            { __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 26 } },
            details.label
          )
        : null,
      details.description
        ? _react.default.createElement(
            Description,
            { __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 32 } },
            details.description
          )
        : null
    )
  );
}
//# sourceMappingURL=settings.toggle.js.map
