(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[25],{"./src/modules/auth/web/auth.container.js":function(e,t,o){"use strict";o.r(t);var r=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),n=o.n(r),s=o("./node_modules/@babel/runtime/helpers/createClass.js"),a=o.n(s),c=o("./node_modules/@babel/runtime/helpers/inherits.js"),i=o.n(c),u=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),l=o.n(u),d=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),p=o.n(d),h=o("./node_modules/@babel/runtime/helpers/defineProperty.js"),m=o.n(h),f=o("../../node_modules/react/index.js"),b=o.n(f),j=o("../../node_modules/prop-types/index.js"),y=o.n(j),O=o("../../node_modules/redux/es/redux.js"),_=o("../../node_modules/react-redux/es/index.js"),w=o("../../node_modules/react-router/esm/react-router.js"),g=o("./src/modules/navigation/navigation.actions.js"),v=o("./src/modules/auth/auth.actions.js");function D(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function M(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?D(Object(o),!0).forEach((function(t){m()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):D(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=p()(e);if(t){var n=p()(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return l()(this,o)}}var C=function(e){i()(o,e);var t=P(o);function o(){return n()(this,o),t.apply(this,arguments)}return a()(o,[{key:"componentDidMount",value:function(){this.openModal()}},{key:"componentDidUpdate",value:function(e){e.match.params.modal!==this.props.match.params.modal&&this.openModal()}},{key:"openModal",value:function(){var e,t=this.props,o=t.user,r=t.match;r.params.modal&&(e=r.params.modal),o&&"temp"===o.role&&(e="setHandle"),"confirm"===e||"confirmEmail"===e?this.props.actions.showModal("confirm"):"forgot"===e?this.props.actions.showModal("forgot"):"login"===e?this.props.actions.showModal("login"):"signup"===e?this.props.actions.showModal("signupSocial"):"setHandle"===e?this.props.actions.showModal("setHandle"):"resetPassword"===e&&this.props.actions.showModal("resetPassword")}},{key:"render",value:function(){return b.a.createElement("div",null)}}]),o}(f.Component);m()(C,"propTypes",{modal:y.a.bool,actions:y.a.object,user:y.a.object,match:y.a.object});t.default=Object(w.g)(Object(_.c)((function(e){return{user:e.auth.user,auth:e.auth}}),(function(e){return{actions:Object(O.bindActionCreators)(M(M({},v),{},{hideModal:g.hideModal,showModal:g.showModal}),e)}}))(C))}}]);
//# sourceMappingURL=auth-web-auth-container.bundle.js.map