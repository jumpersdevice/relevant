'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactDom = _interopRequireDefault(require('react-dom'));
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _navigation = require('../../navigation/navigation.actions');
var _bodyScrollLock = require('body-scroll-lock');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/modals/modal.component.js';
var DEFAULT_WIDTH = 95;
var DEFAULT_PADDING = 6;
var ModalParent = _primitives.default.View.withConfig({
  displayName: 'modalcomponent__ModalParent',
  componentId: 'sc-1j5da6x-0'
})(
  [
    'position:fixed;top:0;left:0;width:100vw;max-width:100vw;height:100vh;background-color:',
    ';z-index:200;display:flex;justify-content:flex-start;align-items:center;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch;'
  ],
  _styles.colors.modalBackground
);
var ModalScroll = _primitives.default.View.withConfig({
  displayName: 'modalcomponent__ModalScroll',
  componentId: 'sc-1j5da6x-1'
})([
  'position:relative;display:flex;align-items:center;min-height:100vh;justify-content:center;'
]);
var Modal = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'modalcomponent__Modal',
  componentId: 'sc-1j5da6x-2'
})(['z-index:5;', ' max-width:100vw;'], _styles.layout.modalShadow);
ModalComponent.propTypes = {
  header: _propTypes.default.object,
  title: _propTypes.default.oneOfType([
    _propTypes.default.node,
    _propTypes.default.string
  ]),
  hideX: _propTypes.default.bool,
  children: _propTypes.default.node,
  footer: _propTypes.default.oneOfType([
    _propTypes.default.node,
    _propTypes.default.func
  ]),
  maxWidth: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.array
  ]),
  padding: _propTypes.default.number,
  close: _propTypes.default.func
};
function ModalComponent(props) {
  var footer = props.footer,
    children = props.children,
    hideX = props.hideX,
    maxWidth = props.maxWidth,
    padding = props.padding,
    header = props.header,
    title = props.title;
  var dispatch = (0, _reactRedux.useDispatch)();
  var close =
    props.close ||
    function() {
      return dispatch((0, _navigation.hideModal)());
    };
  var modalElement = (0, _react.useRef)(null);
  var headerEl = header || title;
  var footerEl = typeof footer === 'function' ? footer(props) : footer;
  (0, _react.useEffect)(
    function() {
      var el = modalElement.current;
      (0, _bodyScrollLock.disableBodyScroll)(el);
      return function() {
        return (0, _bodyScrollLock.enableBodyScroll)(el);
      };
    },
    [modalElement]
  );
  var closeModal = (0, _react.useCallback)(
    function() {
      return close();
    },
    [close]
  );
  (0, _react.useEffect)(
    function() {
      var escFunction = function escFunction(e) {
        return e.keyCode === 27 ? closeModal() : null;
      };
      document.addEventListener('keydown', escFunction, false);
      return function() {
        return document.removeEventListener('keydown', escFunction, false);
      };
    },
    [closeModal]
  );
  var p = padding || [DEFAULT_PADDING, '6 3'];
  return _react.default.createElement(
    ModalParent,
    {
      onClick: closeModal,
      ref: modalElement,
      __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 5 }
    },
    _react.default.createElement(
      ModalScroll,
      {
        ignoreScrollLock: true,
        __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 7 }
      },
      _react.default.createElement(
        Modal,
        {
          ignoreScrollLock: true,
          bg: _styles.colors.white,
          w: maxWidth || [DEFAULT_WIDTH, '100vw'],
          p: p,
          justify: ['space-between', 'center'],
          fdirection: 'column',
          m: ['6 0', '0'],
          minheight: ['auto', maxWidth ? 'auto' : '100vh'],
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 9 }
        },
        hideX
          ? null
          : _react.default.createElement(
              _uni.Touchable,
              {
                onPress: closeModal,
                style: { zIndex: 10, position: 'absolute', top: 0, right: 0 },
                __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 13 }
              },
              _react.default.createElement(_uni.CloseX, {
                w: 2.5,
                h: 2.5,
                top: [6, 4],
                right: [6, 3],
                resizeMode: 'contain',
                source: require('../../../../public/img/x.png'),
                __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 15 }
              })
            ),
        headerEl
          ? _react.default.createElement(
              _uni.Header,
              {
                pr: 5,
                mb: 3,
                shrink: 1,
                __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 13 }
              },
              headerEl
            )
          : null,
        children,
        footerEl &&
          _react.default.createElement(
            _uni.View,
            {
              mt: 6,
              __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 24 }
            },
            footerEl
          )
      )
    )
  );
}
var _default = function _default(props) {
  var modal = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.modal;
  });
  var name = props.name;
  var visible = name && name === modal;
  return visible && document
    ? _reactDom.default.createPortal(
        _react.default.createElement(
          ModalComponent,
          (0, _extends2.default)({}, props, {
            __source: { fileName: _jsxFileName, lineNumber: 130, columnNumber: 29 }
          })
        ),
        document.body
      )
    : null;
};
exports.default = _default;
//# sourceMappingURL=modal.component.js.map
