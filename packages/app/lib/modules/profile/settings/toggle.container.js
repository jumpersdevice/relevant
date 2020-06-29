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
var _get = _interopRequireDefault(require('lodash/get'));
var _uni = require('../../styled/uni');
var _reactRedux = require('react-redux');
var _auth = require('../../auth/auth.actions');
var _activity = require('../../activity/activity.actions');
var _redux = require('redux');
var _settings = require('./settings.constants');
var _settings2 = require('./settings.toggle');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/settings/toggle.container.js';
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
var NotificationSettings = (function(_Component) {
  (0, _inherits2.default)(NotificationSettings, _Component);
  var _super = _createSuper(NotificationSettings);
  function NotificationSettings() {
    (0, _classCallCheck2.default)(this, NotificationSettings);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(NotificationSettings, [
    {
      key: 'componentDidUpdate',
      value: (function() {
        var _componentDidUpdate = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(prevProps) {
            var _this$props, actions, user, notificationSettings;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (_this$props = this.props),
                        (actions = _this$props.actions),
                        (user = _this$props.user);
                      notificationSettings = user.notificationSettings;
                      if (
                        !(0, _get.default)(
                          prevProps,
                          'user.notificationSettings.desktop.all'
                        ) &&
                        (0, _get.default)(notificationSettings, 'desktop.all')
                      ) {
                        actions.enableDesktopNotifications();
                      }
                      if (
                        !(0, _get.default)(
                          prevProps,
                          'user.notificationSettings.mobile.all'
                        ) &&
                        (0, _get.default)(notificationSettings, 'mobile.all')
                      ) {
                        actions.enableMobileNotifications(user);
                      }
                      return _context.abrupt('return', null);
                    case 5:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          })
        );
        function componentDidUpdate(_x) {
          return _componentDidUpdate.apply(this, arguments);
        }
        return componentDidUpdate;
      })()
    },
    {
      key: 'render',
      value: function render() {
        var user = this.props.user;
        if (!user) return null;
        var notificationSettings = user.notificationSettings;
        if (!notificationSettings) return null;
        return _react.default.createElement(
          _react.Fragment,
          { __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 } },
          _settings.SECTIONS.map(function(section) {
            return _react.default.createElement(
              _uni.View,
              {
                key: section.label,
                mb: 4,
                display: 'flex',
                fdirection: 'column',
                __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.Header,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 13 }
                },
                section.label
              ),
              section.settings.map(function(el) {
                return _react.default.createElement(NotificationSet, {
                  key: el.field,
                  field: el.field,
                  label: el.label,
                  notifications: notificationSettings[el.field],
                  __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 15 }
                });
              })
            );
          })
        );
      }
    }
  ]);
  return NotificationSettings;
})(_react.Component);
(0, _defineProperty2.default)(NotificationSettings, 'propTypes', {
  user: _propTypes.default.object,
  actions: _propTypes.default.object
});
NotificationSet.propTypes = {
  label: _propTypes.default.string,
  notifications: _propTypes.default.object,
  field: _propTypes.default.string
};
function NotificationSet(_ref) {
  var label = _ref.label,
    notifications = _ref.notifications,
    field = _ref.field;
  if (!notifications) return null;
  var sortedNotifications = Object.keys(notifications).sort();
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 5 } },
    label &&
      _react.default.createElement(
        _uni.SecondaryText,
        { mt: 4, __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 17 } },
        label
      ),
    notifications &&
      sortedNotifications.map(function(k) {
        return _react.default.createElement(_settings2.NotificationToggle, {
          key: k,
          label: k,
          parent: field,
          notification: notifications && notifications[k],
          __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 11 }
        });
      })
  );
}
var mapStateToProps = function mapStateToProps(state) {
  return { user: state.auth.user, enableReinitialize: true };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        enableDesktopNotifications: _activity.enableDesktopNotifications,
        enableMobileNotifications: _auth.enableMobileNotifications
      },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSettings);
exports.default = _default;
//# sourceMappingURL=toggle.container.js.map
