(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{"../../node_modules/pell/dist/pell.min.css":function(t,e,n){},"../../node_modules/pell/dist/pell.min.js":function(t,e,n){!function(t){"use strict";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n="defaultParagraphSeparator",r="formatBlock",i=function(t,e,n){return t.addEventListener(e,n)},a=function(t,e){return t.appendChild(e)},u=function(t){return document.createElement(t)},o=function(t){return document.queryCommandState(t)},s=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(t,!1,e)},c={bold:{icon:"<b>B</b>",title:"Bold",state:function(){return o("bold")},result:function(){return s("bold")}},italic:{icon:"<i>I</i>",title:"Italic",state:function(){return o("italic")},result:function(){return s("italic")}},underline:{icon:"<u>U</u>",title:"Underline",state:function(){return o("underline")},result:function(){return s("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:function(){return o("strikeThrough")},result:function(){return s("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return s(r,"<h1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return s(r,"<h2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return s(r,"<p>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return s(r,"<blockquote>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return s("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return s("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return s(r,"<pre>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return s("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var t=window.prompt("Enter the link URL");t&&s("createLink",t)}},image:{icon:"&#128247;",title:"Image",result:function(){var t=window.prompt("Enter the image URL");t&&s("insertImage",t)}}},l={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},d=function(t){var o=t.actions?t.actions.map((function(t){return"string"==typeof t?c[t]:c[t.name]?e({},c[t.name],t):t})):Object.keys(c).map((function(t){return c[t]})),d=e({},l,t.classes),p=t[n]||"div",f=u("div");f.className=d.actionbar,a(t.element,f);var m=t.element.content=u("div");return m.contentEditable=!0,m.className=d.content,m.oninput=function(e){var n=e.target.firstChild;n&&3===n.nodeType?s(r,"<"+p+">"):"<br>"===m.innerHTML&&(m.innerHTML=""),t.onChange(m.innerHTML)},m.onkeydown=function(t){"Enter"===t.key&&"blockquote"===document.queryCommandValue("formatBlock")&&setTimeout((function(){return s(r,"<"+p+">")}),0)},a(t.element,m),o.forEach((function(t){var e=u("button");if(e.className=d.button,e.innerHTML=t.icon,e.title=t.title,e.setAttribute("type","button"),e.onclick=function(){return t.result()&&m.focus()},t.state){var n=function(){return e.classList[t.state()?"add":"remove"](d.selected)};i(m,"keyup",n),i(m,"mouseup",n),i(e,"click",n)}a(f,e)})),t.styleWithCSS&&s("styleWithCSS"),s(n,p),t.element},p={exec:s,init:d};t.exec=s,t.init=d,t.default=p,Object.defineProperty(t,"__esModule",{value:!0})}(e)},"./src/modules/admin/admin.actions.js":function(t,e,n){"use strict";n.r(e),n.d(e,"setInvites",(function(){return y})),n.d(e,"setWaitlist",(function(){return g})),n.d(e,"deleteWaitlistUsers",(function(){return j})),n.d(e,"updateInvite",(function(){return E})),n.d(e,"destroyInvite",(function(){return w})),n.d(e,"setInviteCount",(function(){return O})),n.d(e,"getInviteCount",(function(){return x})),n.d(e,"getInvites",(function(){return k})),n.d(e,"createInvite",(function(){return C})),n.d(e,"destroy",(function(){return _})),n.d(e,"getWaitlist",(function(){return S})),n.d(e,"inviteFromWaitlist",(function(){return P})),n.d(e,"signupForMailingList",(function(){return L})),n.d(e,"setDownvotes",(function(){return T})),n.d(e,"getDownvotes",(function(){return D})),n.d(e,"sendEmail",(function(){return q})),n.d(e,"saveEmail",(function(){return H})),n.d(e,"loadEmail",(function(){return N})),n.d(e,"deleteWaitlistUser",(function(){return I})),n.d(e,"sendPostNotification",(function(){return B}));var r=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),i=n.n(r),a=n("./node_modules/@babel/runtime/regenerator/index.js"),u=n.n(a),o=n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),s=n.n(o),c=n("../../node_modules/normalizr/dist/normalizr.es.js"),l=n("./src/core/actionTypes.js"),d=n("./src/utils/index.js");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=d.a.Alert(),h="https://dev.relevant.community/api",b=new c.b.Entity("invites",{},{idAttribute:"_id"}),v=new c.b.Entity("wait",{},{idAttribute:"_id"});function y(t){var e=t.data,n=t.community,r=t.skip;return{type:l.W,payload:{data:e,community:n,skip:r}}}function g(t){return{type:l.wb,payload:t}}function j(t){return{type:l.h,payload:t}}function E(t){return{type:l.Ib,payload:t}}function w(t){return{type:l.j,payload:t}}function O(t){return{type:l.Y,payload:t}}function x(){return function(){var t=s()(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(d.b.request({method:"GET",endpoint:"invites",path:"/count"}));case 3:n=t.sent,e(O(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m.alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function k(t,e,n){return function(){var r=s()(u.a.mark((function r(i){var a,o;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i(d.b.request({method:"GET",query:{skip:t,limit:e},endpoint:"invites",path:""}));case 3:return a=r.sent,o=Object(c.a)({invites:a},{invites:[b]}),i(y({data:o,community:n,skip:t})),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(t){return r.apply(this,arguments)}}()}function C(t){return function(){var e=s()(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(d.b.request({method:"POST",endpoint:"invites",path:"/",body:JSON.stringify(t)}));case 3:return r=e.sent,n(E(r.invite[0])),n(O(r.count)),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),m.alert(e.t0.message),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}function _(t){return function(){var e=s()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=fetch,e.t1=h+"/invites/"+t._id,e.t2=f,e.t3={method:"DELETE"},e.next=6,d.b.reqOptions();case 6:return e.t4=e.sent,e.t5=(0,e.t2)(e.t3,e.t4),e.abrupt("return",(0,e.t0)(e.t1,e.t5).then(d.b.handleErrors).then((function(){m.alert("removed item"),n(w(t))})).catch((function(t){m.alert(t.message),console.log("invites error",t)})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function S(){return function(){var t=s()(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=fetch,t.t1=h+"/list",t.t2=f,t.t3={method:"GET"},t.next=6,d.b.reqOptions();case 6:return t.t4=t.sent,t.t5=(0,t.t2)(t.t3,t.t4),t.abrupt("return",(0,t.t0)(t.t1,t.t5).then(d.b.handleErrors).then((function(t){return t.json()})).then((function(t){var n=Object(c.a)({wait:t},{wait:[v]});e(g(n))})).catch((function(t){console.log("invites error",t)})));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function P(t){return function(){var e=s()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=fetch,e.t1="https://dev.relevant.community/api/list/",e.t2=f,e.t3=f,e.t4={method:"PUT"},e.next=7,d.b.reqOptions();case 7:return e.t5=e.sent,e.t6=(0,e.t3)(e.t4,e.t5),e.t7={},e.t8={body:JSON.stringify(t)},e.t9=(0,e.t2)(e.t6,e.t7,e.t8),e.abrupt("return",(0,e.t0)(e.t1,e.t9).then(d.b.handleErrors).then((function(){return m.alert("users have been invited!"),n(j(t)),!0})).catch((function(t){return m.alert(t.message),console.log(t),!1})));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function L(t){return s()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=fetch,e.t1="https://dev.relevant.community/api/list/",e.t2=f,e.t3=f,e.t4={method:"POST"},e.next=7,d.b.reqOptions();case 7:return e.t5=e.sent,e.t6=(0,e.t3)(e.t4,e.t5),e.t7={},e.t8={body:JSON.stringify(t)},e.t9=(0,e.t2)(e.t6,e.t7,e.t8),e.abrupt("return",(0,e.t0)(e.t1,e.t9).then(d.b.handleErrors).then((function(){return m.alert("You've been added to the waitlist.","success"),!0})).catch((function(t){return m.alert(t.message),console.log(t),!1})));case 13:case"end":return e.stop()}}),e)})))}function T(t){return{type:l.R,payload:t}}function D(t,e){return function(n){return n(d.b.request({method:"GET",query:{skip:t,limit:e},endpoint:"invest",path:"/downvotes"})).then((function(t){return n(T(t))})).catch((function(t){return m.alert(t.message)}))}}function q(t){return function(){var e=s()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(d.b.request({method:"PUT",endpoint:"email",path:"/",body:JSON.stringify(t)}));case 3:return m.alert("Email has been sent"),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function H(t){return function(){var e=s()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(d.b.request({method:"PUT",endpoint:"email",path:"/save",body:JSON.stringify(t)}));case 3:return m.alert("Email has been saved"),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function N(){return function(){var t=s()(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(d.b.request({method:"GET",endpoint:"email",path:"/load"}));case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function I(t){return function(){var e=s()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=fetch,e.t1=h+"/list/"+t._id,e.t2=f,e.t3={method:"DELETE"},e.next=7,d.b.reqOptions();case 7:return e.t4=e.sent,e.t5=(0,e.t2)(e.t3,e.t4),e.next=11,(0,e.t0)(e.t1,e.t5);case 11:e.sent&&n(j([t])),e.next=18;break;case 15:e.prev=15,e.t6=e.catch(0),m.alert(e.t6.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()}function B(t){return function(){var e=s()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(d.b.request({method:"POST",endpoint:"post",path:"/sendPostNotification",body:JSON.stringify(t)}));case 3:return e.abrupt("return",m.alert("Notification sent!"));case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}},"./src/modules/admin/web/admin.css":function(t,e,n){},"./src/modules/admin/web/email.component.js":function(t,e,n){"use strict";n.r(e);var r,i=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=n.n(i),u=n("./node_modules/@babel/runtime/helpers/createClass.js"),o=n.n(u),s=n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),c=n.n(s),l=n("./node_modules/@babel/runtime/helpers/inherits.js"),d=n.n(l),p=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),f=n.n(p),m=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=n.n(m),b=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),v=n.n(b),y=n("../../node_modules/react/index.js"),g=n.n(y),j=n("../../node_modules/prop-types/index.js"),E=n.n(j),w=n("../../node_modules/redux/es/redux.js"),O=n("../../node_modules/react-redux/es/index.js"),x=n("./src/modules/admin/admin.actions.js"),k=n("./src/modules/ui/web/ShadowButton.js");function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f()(this,n)}}r=n("../../node_modules/pell/dist/pell.min.js"),n("../../node_modules/pell/dist/pell.min.css"),n("./src/modules/admin/web/admin.css");var _=function(t){d()(n,t);var e=C(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).state={html:"",email:"",subject:"",campaign:""},r.handleChange=r.handleChange.bind(c()(r)),r.submit=r.submit.bind(c()(r)),r.saveEmail=r.saveEmail.bind(c()(r)),r.loadEmail=r.loadEmail.bind(c()(r)),r}return o()(n,[{key:"componentDidMount",value:function(){var t=this;this.loadEmail(),this.editor=r.init({element:document.getElementById("email-editor"),onChange:function(e){t.setState({html:e})},styleWithCSS:!0,actions:["bold","underline","italic",{icon:"<b>Sml</b>",title:"small",result:function(){return r.exec("fontSize",2)}},{icon:"<b>reg</b>",title:"small",result:function(){return r.exec("fontSize",3)}},"paragraph","heading1","heading2",{icon:"<b>H<sub>3</sub></b>",title:"H3",result:function(){return r.exec("formatBlock","<H3>")}},{icon:"<b>H<sub>4</sub></b>",title:"H4",result:function(){return r.exec("formatBlock","<H4>")}},{icon:"<b>Center</b>",title:"center",result:function(){return r.exec("justifyCenter")}},{icon:"<b>Left</b>",title:"left",result:function(){return r.exec("justifyLeft")}},"image","link",{name:"resize",icon:"<b>Resize</b>",result:function(){return r.exec("enableObjectResizing")}},{icon:"<b><u><i>Clear</i></u></b>",name:"clear",result:function(){return r.exec("removeFormat")}}]})}},{key:"saveEmail",value:function(){var t=this.state,e=t.email,n=t.subject,r=t.campaign,i=t.html;this.props.actions.saveEmail({email:e,subject:n,campaign:r,html:i})}},{key:"loadEmail",value:function(){var t=this;this.props.actions.loadEmail().then((function(e){t.setState(e),t.editor.content.innerHTML=e.html}))}},{key:"submit",value:function(){var t=this.state,e=t.email,n=t.subject,r=t.campaign,i=t.html;this.props.actions.sendEmail({email:e,subject:n,campaign:r,html:i}),this.saveEmail()}},{key:"handleChange",value:function(t){this.setState(v()({},t.target.name,t.target.value)),"html"===t.target.name&&(this.editor.content.innerHTML=t.target.value)}},{key:"render",value:function(){return g.a.createElement("div",{className:"adminContainer"},g.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignSelf:"flex-start",marginLeft:20}},g.a.createElement("input",{className:"blueInput",type:"email",name:"email",placeholder:"user email",value:this.state.email,onChange:this.handleChange}),g.a.createElement("input",{className:"blueInput",type:"subject",name:"subject",placeholder:"subject",value:this.state.subject,onChange:this.handleChange}),g.a.createElement("input",{className:"blueInput",type:"campaign",name:"campaign",placeholder:"campaign",value:this.state.campaign,onChange:this.handleChange})),g.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"row",width:"100%"}},g.a.createElement("div",{style:{flex:1,margin:20}},g.a.createElement("div",{id:"email-editor"})),g.a.createElement("textarea",{style:{flex:1,margin:20},value:this.state.html,name:"html",onChange:this.handleChange})),g.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignSelf:"flex-start",margin:20,marginBottom:60}},g.a.createElement(k.a,{backgroundColor:"white",color:"#3E3EFF",onClick:this.submit},"Send email"),g.a.createElement(k.a,{backgroundColor:"white",color:"#3E3EFF",onClick:this.saveEmail},"Save draft"),g.a.createElement(k.a,{backgroundColor:"white",color:"#3E3EFF",onClick:this.loadEmail},"Load")))}}]),n}(y.Component);v()(_,"propTypes",{actions:E.a.object}),e.default=Object(O.c)((function(t){return{auth:t.auth,admin:t.admin}}),(function(t){return{actions:Object(w.bindActionCreators)(x,t)}}))(_)},"./src/modules/ui/web/ShadowButton.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),i=n.n(r),a=n("../../node_modules/react/index.js"),u=n.n(a),o=n("../../node_modules/prop-types/index.js"),s=n.n(o);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t){return u.a.createElement("button",{className:"shadowButton",onClick:function(){return t.onClick?t.onClick():null},style:l({},t.style)},u.a.createElement("span",null,t.children))}d.propTypes={onClick:s.a.func,style:s.a.object,children:s.a.node}}}]);
//# sourceMappingURL=admin-web-email-component.bundle.js.map