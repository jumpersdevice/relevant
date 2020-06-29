'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.elementTypePropTypeChecker = elementTypePropTypeChecker;
exports.authProps = exports.postProps = exports.userProps = void 0;
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactIs = require('react-is');
var userProps = _propTypes.default.shape({
  handle: _propTypes.default.string,
  balance: _propTypes.default.number,
  image: _propTypes.default.string,
  name: _propTypes.default.string
});
exports.userProps = userProps;
var postProps = _propTypes.default.shape({
  _id: _propTypes.default.string.isRequired,
  user: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  embeddedUser: _propTypes.default.object,
  tags: _propTypes.default.array,
  body: _propTypes.default.string,
  postDate: _propTypes.default.instanceOf(Date),
  data: _propTypes.default.object,
  link: _propTypes.default.object,
  parentPost: _propTypes.default.number,
  type: _propTypes.default.string
});
exports.postProps = postProps;
var authProps = _propTypes.default.shape({
  isAuthenticated: _propTypes.default.bool,
  user: userProps,
  community: _propTypes.default.string
});
exports.authProps = authProps;
function elementTypePropTypeChecker(props, propName, componentName) {
  if (props[propName] && !(0, _reactIs.isValidElementType)(props[propName])) {
    return new Error(
      "Invalid prop '"
        .concat(propName, "' supplied to '")
        .concat(componentName, "': the prop is not a valid React component")
    );
  }
}
//# sourceMappingURL=propValidation.js.map
