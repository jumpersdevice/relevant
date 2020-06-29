'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Pills;
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/mobile/pills.component.js';
var styles;
function Pills(props) {
  var scrollToPage = props.scrollToPage,
    currentIndex = props.currentIndex,
    slides = props.slides;
  if (!slides || !slides.length) return null;
  var indicator = props.slides.map(function(slide, i) {
    var active = false;
    if (currentIndex === i) active = true;
    return _react.default.createElement(
      _reactNativeWeb.TouchableWithoutFeedback,
      {
        onPress: function onPress() {
          return scrollToPage(i);
        },
        key: i,
        __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 7 }
      },
      _react.default.createElement(_reactNativeWeb.View, {
        style: [
          styles.indicatorItem,
          { backgroundColor: active ? _global.blue : 'lightgrey' }
        ],
        __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 9 }
      })
    );
  });
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      style: styles.pillContainer,
      __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 10 }
    },
    indicator
  );
}
styles = _reactNativeWeb.StyleSheet.create({
  pillContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  indicatorItem: { marginLeft: 3, marginRight: 3, height: 5, width: 5, borderRadius: 5 }
});
Pills.propTypes = {
  slides: _propTypes.default.array,
  currentIndex: _propTypes.default.number,
  scrollToPage: _propTypes.default.func
};
//# sourceMappingURL=pills.component.js.map
