_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var d=f[s];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],p=r[d]||new Set;"name"===d&&c||!p.has(l)?(p.add(l),r[d]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8lYe":function(e,t,n){"use strict";var r=n("nKUr"),a=n("pnTc"),o=n("k7Sn");t.a=Object(o.withTranslation)("footer")((function(e){var t=e.t;return Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:t("description")}),Object(r.jsxs)("p",{children:["next-i18next v",a.a]})]})}))},CuD6:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c=n("nKUr"),i=n("k7Sn"),s=n("b0oO"),u=n("8lYe"),d=function(e){var t=e.t;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("main",{children:[Object(c.jsx)(s.a,{title:t("h1")}),Object(c.jsx)(i.Link,{href:"/",children:Object(c.jsx)("button",{type:"button",children:t("back-to-home")})})]}),Object(c.jsx)(u.a,{})]})};d.getInitialProps=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["second-page","footer"]});case 1:case"end":return e.stop()}}),e)}))),t.default=Object(i.withTranslation)("second-page")(d)},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),c=(n("qXWd"),n("48fX")),i=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},b0oO:function(e,t,n){"use strict";var r=n("nKUr"),a=n("g4pe"),o=n.n(a);t.a=function(e){var t=e.title;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"next-i18next"}),Object(r.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",rel:"stylesheet"}),Object(r.jsx)("link",{href:"/static/app.css",rel:"stylesheet"}),Object(r.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css",rel:"stylesheet"}),Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600",rel:"stylesheet"}),Object(r.jsx)("link",{"data-react-helmet":"true",rel:"icon",href:"https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"})]}),Object(r.jsxs)("h2",{children:["next-i18next",Object(r.jsx)("hr",{})]}),Object(r.jsx)("h1",{children:t}),Object(r.jsx)("a",{className:"github",href:"//github.com/isaachinman/next-i18next",children:Object(r.jsx)("i",{className:"typcn typcn-social-github-circular"})})]})}},fk3m:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/second-page",function(){return n("CuD6")}])},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},pnTc:function(e){e.exports=JSON.parse('{"a":"7.0.1"}')},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[["fk3m",1,2,0]]]);