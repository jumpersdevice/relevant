(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[20],{"./src/modules/admin/web/topics.container.js":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"setDiscoverTags",(function(){return R})),n.d(r,"selectTag",(function(){return B})),n.d(r,"deselectTag",(function(){return J})),n.d(r,"updateParentTag",(function(){return U})),n.d(r,"setParentTags",(function(){return z})),n.d(r,"getDiscoverTags",(function(){return H})),n.d(r,"searchTags",(function(){return K})),n.d(r,"createTag",(function(){return M})),n.d(r,"updateTag",(function(){return Q})),n.d(r,"getParentTags",(function(){return q}));var a=n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),o=n.n(a),i=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),c=n.n(i),u=n("./node_modules/@babel/runtime/helpers/createClass.js"),s=n.n(u),l=n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),p=n.n(l),d=n("./node_modules/@babel/runtime/helpers/inherits.js"),f=n.n(d),h=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=n.n(h),g=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),y=n.n(g),v=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),b=n.n(v),j=n("../../node_modules/react/index.js"),T=n.n(j),_=n("../../node_modules/prop-types/index.js"),C=n.n(_),E=n("../../node_modules/redux/es/redux.js"),O=n("../../node_modules/react-redux/es/index.js"),w=n("./node_modules/@babel/runtime/regenerator/index.js"),x=n.n(w),k=n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),D=n.n(k),P=n("./src/core/actionTypes.js"),A=n("./src/utils/index.js");function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){b()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N,G=A.a.Alert(),I=function(){var t=D()(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.f.getToken();case 2:return e=t.sent,t.abrupt("return",{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function R(t){return{type:P.Q,payload:t}}function B(t){return{type:"SELECT_TAG",payload:t}}function J(t){return{type:"DESELECT_TAG",payload:t}}function U(t){return{type:P.Jb,payload:t}}function z(t){return{type:P.bb,payload:t}}function H(){return function(t){fetch("https://dev.relevant.community/api/tag?sort=count",{credentials:"include",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(A.b.handleErrors).then((function(t){return t.json()})).then((function(e){t(R(e))})).catch((function(t){return G("Error getting tags "+t.message)}))}}function K(t){return function(e){return t&&""!==t?fetch("https://dev.relevant.community/api/tag/search/"+t,{credentials:"include",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){e(R(t))})).catch((function(t){G("Search error ",t)})):e(R([]))}}function M(t){return function(){var e=D()(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=fetch,e.t1="https://dev.relevant.community/api/tag",e.t2=L,e.t3=L,e.t4={},e.next=7,I();case 7:return e.t5=e.sent,e.t6=(0,e.t3)(e.t4,e.t5),e.t7={},e.t8={method:"POST",body:JSON.stringify(t)},e.t9=(0,e.t2)(e.t6,e.t7,e.t8),e.abrupt("return",(0,e.t0)(e.t1,e.t9).then((function(t){return t.json()})).then((function(t){n(z([t]))})).catch((function(t){return G("error creating tag "+t),{status:!1,data:t}})));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function Q(t){return function(){var e=D()(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=fetch,e.t1="https://dev.relevant.community/api/tag/categories",e.t2=L,e.t3=L,e.t4={},e.next=7,I();case 7:return e.t5=e.sent,e.t6=(0,e.t3)(e.t4,e.t5),e.t7={},e.t8={method:"PUT",body:JSON.stringify(t)},e.t9=(0,e.t2)(e.t6,e.t7,e.t8),e.abrupt("return",(0,e.t0)(e.t1,e.t9).then((function(t){return t.json()})).then((function(t){n(U(t))})));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function q(){return function(){var t=D()(x.a.mark((function t(e){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=fetch,t.t1="https://dev.relevant.community/api/tag/categories?active",t.t2=L,t.t3={method:"GET"},t.next=6,I();case 6:t.t4=t.sent,t.t5=(0,t.t2)(t.t3,t.t4),(0,t.t0)(t.t1,t.t5).then((function(t){return t.json()})).then((function(t){e(z(t))})).catch((function(t){return G("parents error",t)}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y()(t);if(e){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var V=function(t){f()(n,t);var e=F(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={topic:"",emoji:""},r.handleChange=r.handleChange.bind(p()(r)),r.updateTag=r.updateTag.bind(p()(r)),r}return s()(n,[{key:"componentDidMount",value:function(){this.props.actions.getParentTags()}},{key:"handleChange",value:function(t){this.setState(b()({},t.target.name,t.target.value))}},{key:"updateTag",value:function(t,e){e[t.target.name]=t.target.value,this.props.actions.updateParentTag(e)}},{key:"archiveTag",value:function(t){t.active=!t.active,this.props.actions.updateTag(t)}},{key:"saveTag",value:function(t){t.main=t.main.split(", ").filter((function(t){return""!==t})),t.children=t.children.split(", ").filter((function(t){return""!==t})),this.props.actions.updateTag(t)}},{key:"newTag",value:function(){var t={_id:this.state.topic+"_category_tag",categoryName:this.state.topic,category:!0,emoji:this.state.emoji};this.props.actions.createTag(t)}},{key:"render",value:function(){var t=this,e=this.props.tags.parentTags||[];return e=[].concat(o()(e.filter((function(t){return t.active}))),o()(e.filter((function(t){return!t.active})))),T.a.createElement("div",{style:N.topicsContainerStyle},T.a.createElement("input",{type:"text",name:"topic",placeholder:"topic",value:this.state.topic,onChange:this.handleChange}),T.a.createElement("input",{type:"text",name:"emoji",placeholder:"emoji",value:this.state.emoji,onChange:this.handleChange}),T.a.createElement("button",{onClick:function(){return t.newTag()}},"Add new category"),e.map((function(e){return e.newId||(e.newId=e._id),e.main&&"string"!=typeof e.main&&(e.main=e.main.join(", ")),e.children&&"string"!=typeof e.children&&(e.children=e.children.join(", ")),T.a.createElement("div",{style:e.active?null:{textDecoration:"line-through"},key:e._id},e.emoji," ",T.a.createElement("input",{type:"text",name:"categoryName",placeholder:"topic",value:e.categoryName,onChange:function(n){return t.updateTag(n,e)}}),T.a.createElement("input",{type:"text",name:"newId",placeholder:"_id",value:e.newId,onChange:function(n){return t.updateTag(n,e)}}),T.a.createElement("input",{type:"text",name:"main",placeholder:"main",value:e.main,onChange:function(n){return t.updateTag(n,e)}}),T.a.createElement("input",{type:"text",name:"children",placeholder:"children",value:e.children,onChange:function(n){return t.updateTag(n,e)}})," ",e.count," ",T.a.createElement("button",{onClick:function(){return t.archiveTag(e)}},"remove"),T.a.createElement("button",{onClick:function(){return t.saveTag(e)}},"save"))})))}}]),n}(j.Component);b()(V,"propTypes",{actions:C.a.object,tags:C.a.array}),N={topicsContainerStyle:{display:"flex",flexDirection:"column",alignItems:"center"}};e.default=Object(O.c)((function(t){return{auth:t.auth,tags:t.tags}}),(function(t){return{actions:Object(E.bindActionCreators)(r,t)}}))(V)}}]);
//# sourceMappingURL=admin-web-topics-container.bundle.js.map