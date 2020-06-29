'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.CountUpSpacer = exports.CountUpContainer = void 0;
var _web = require('../../styled/web');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _styles = require('../../../styles');
var CountUpContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpstyles__CountUpContainer',
  componentId: 'sc-1l55yda-0'
})(['flex:1;justify-content:center;flex-direction:row;align-items:center;']);
exports.CountUpContainer = CountUpContainer;
var CountUpSpacer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpstyles__CountUpSpacer',
  componentId: 'sc-1l55yda-1'
})(['max-width:', ';'], (0, _styles.sizing)(30));
exports.CountUpSpacer = CountUpSpacer;
//# sourceMappingURL=countUp.styles.js.map
