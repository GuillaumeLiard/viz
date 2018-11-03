/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=115},117:function(e,t,n){"use strict";var r=n(37);n.n(r).a},118:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},128:function(e,t,n){"use strict";var r=n(38);n.n(r).a},129:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},130:function(e,t,n){var r=n(131);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(27).default)("7a403820",r,!0,{sourceMap:!1})},131:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"",""])},132:function(e,t,n){"use strict";var r=n(39);n.n(r).a},133:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\nhtml{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box\n}\n*,:after,:before{box-sizing:border-box;margin:0\n}\n.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px\n}\n.button--green:hover{color:#fff;background-color:#3b8070\n}\n.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px\n}\n.button--grey:hover{color:#fff;background-color:#35495e\n}",""])},138:function(e,t,n){var r={"./tree.js":139,"./viz.js":140};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=138},139:function(e,t,n){"use strict";n.r(t),n.d(t,"state",function(){return r}),n.d(t,"getters",function(){return o}),n.d(t,"mutations",function(){return a});var r=function(){return{choice:0,label:"root",choices:[{label:"root1",nodes:[{label:"item1",nodes:[{label:"item1",color:"red"},{label:"item1",color:"green"}]},{label:"item1",nodes:[{label:"item1",color:"red"},{label:"item1",color:"green"}]}]},{label:"root2",nodes:[{label:"item1",nodes:[{label:"item1",nodes:[{label:"item1",color:"red"},{label:"item1",color:"green"}]},{label:"item1",nodes:[{label:"item1",color:"red"},{label:"item1",color:"green"}]}]},{label:"item1",nodes:[{label:"item1",nodes:[{label:"item1",color:"red"},{label:"item1",color:"green"}]},{label:"item1",nodes:[{label:"item1",color:"red"},{label:"item1",color:"green"}]}]}]},{label:"root3",nodes:[{label:"item1",color:"red",nodes:[{label:"item1",color:"red"},{label:"item1",color:"blue"},{label:"item1",color:"green"}]}]}]}},o={getLabel:function(e){return e.choices[e.choice].label},getNodes:function(e){return e.choices[e.choice].nodes}},a={nextChoice:function(e){return e.choice=(e.choice+1)%3}}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"state",function(){return r}),n.d(t,"getters",function(){return o});var r=function(){return{levels:[{direction:"h",percentFilledSpace:1,distributionType:"spaceBetween"},{direction:"h",percentFilledSpace:.4,distributionType:"spaceAround"},{direction:"v",percentFilledSpace:.99,distributionType:"spaceBetween"}]}},o={directionByDepth:function(e){return function(t){var n=e.levels[t].direction;return n||"h"}},percentFilledSpaceByDepth:function(e){return function(t){var n=e.levels[t].percentFilledSpace;return n||100}},distributionTypeByDepth:function(e){return function(t){var n=e.levels[t].distributionType;return n||"spaceBetween"}}}},141:function(e,t,n){"use strict";n.r(t);n(61),n(47),n(48);var r=n(21),o=n.n(r),a=(n(35),n(50),n(95),n(3)),i=n.n(a),s=(n(70),n(71),n(74),n(25),n(53),n(75),n(99),n(111),n(0)),u=(n(55),n(115)),c=u.keys();function l(e){var t=u(e);return t.default||t}var p={},f=!0,d=!1,h=void 0;try{for(var m,v=c[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var x=m.value;p[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(e){d=!0,h=e}finally{try{f||null==v.return||v.return()}finally{if(d)throw h}}var g=p,y=n(20),b=n.n(y),w=n(83),_=n.n(w),C=n(58),k=function(){return n.e(1).then(n.bind(null,154)).then(function(e){return e.default||e})};s.a.use(C.a),window.history.scrollRestoration="manual";var $=function(e,t,n){var r=!1;return e.matched.length<2?r={x:0,y:0}:e.matched.some(function(e){return e.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(t){window.$nuxt.$once("triggerScroll",function(){if(e.hash){var n=e.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(e){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}t(r)})})};var E=n(84),R=n.n(E).a,S={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(e,t){var n=t.parent,r=t.data,o=t.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};T.forEach(function(e){void 0!==c[e]&&(l[e]=c[e])});var p={};j.forEach(function(e){"function"==typeof c[e]&&(p[e]=c[e].bind(a))});var f=p.beforeEnter;p.beforeEnter=function(e){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(a,e)};var d=[e("router-view",r)];return void 0!==o.keepAlive&&(d=[e("keep-alive",{props:o.keepAliveProps},d)]),e("transition",{props:l,on:p},d)}},T=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],j=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],A={name:"nuxt-link",functional:!0,render:function(e,t){return e("router-link",t.data,t.children)}},N={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},O=(n(117),n(19)),M=Object(O.a)(N,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e._v(" "),n("div",{staticClass:"title"},[e._v(e._s(e.message))]),e._v(" "),404===e.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[e._v("Back to the home page")])],1):e._e(),e._v(" "),e._m(0)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);M.options.__file="nuxt-error.vue";var U=M.exports,D=(n(82),n(119),n(120),n(122),n(124),n(125),n(127),function(){return{}});function L(e,t){var n=e.options.data||D;!t&&e.options.hasAsyncData||(e.options.hasAsyncData=!0,e.options.data=function(){var r=n.call(this);return this.$ssrContext&&(t=this.$ssrContext.asyncData[e.cid]),b()({},r,t)},e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data))}function q(e){return e.options&&e._Ctor===e?e:(e.options?(e._Ctor=e,e.extendOptions=e.options):(e=s.a.extend(e))._Ctor=e,!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e)}function P(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],e.matched.map(function(e,n){return Object.keys(e.components).map(function(r){return t&&t.push(n),e.components[r]})}))}function z(e,t){return Array.prototype.concat.apply([],e.matched.map(function(e,n){return Object.keys(e.components).reduce(function(r,o){return e.components[o]?r.push(t(e.components[o],e.instances[o],e,o,n)):delete e.components[o],r},[])}))}function B(e){return Promise.all(z(e,function(){var e=i()(regeneratorRuntime.mark(function e(t,n,r,o){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t||t.options){e.next=4;break}return e.next=3,t();case 3:t=e.sent;case 4:return e.abrupt("return",r.components[o]=q(t));case 5:case"end":return e.stop()}},e,this)}));return function(t,n,r,o){return e.apply(this,arguments)}}()))}function I(e){return F.apply(this,arguments)}function F(){return(F=i()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:return e.abrupt("return",b()({},t,{meta:P(t).map(function(e){return e.options.meta||{}})}));case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function J(e,t){return H.apply(this,arguments)}function H(){return(H=i()(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.to?n.to:n.route,t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,store:t.store,payload:n.payload,error:n.error,base:"/viz/",env:{}},n.req&&(t.context.req=n.req),n.res&&(t.context.res=n.res),t.context.redirect=function(e,n,r){if(e){t.context._redirected=!0;var a=o()(n);if("number"==typeof e||"undefined"!==a&&"object"!==a||(r=n||{},n=e,a=o()(n),e=302),"object"===a&&(n=t.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=ee(n,r),window.location.replace(n),new Error("ERR_REDIRECT");t.context.next({path:n,query:r,status:e})}},t.context.nuxtState=window.__NUXT__),t.context.next=n.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!!n.isHMR,!n.route){e.next=10;break}return e.next=9,I(n.route);case 9:t.context.route=e.sent;case 10:if(t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{},!n.from){e.next=16;break}return e.next=15,I(n.from);case 15:t.context.from=e.sent;case 16:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function K(e,t){var n;return(n=2===e.length?new Promise(function(n){e(t,function(e,r){e&&t.error(e),n(r=r||{})})}):e(t))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function Q(e,t){var n=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(e&&0===n.indexOf(e)&&(n=n.slice(e.length)),(n||"/")+window.location.search+window.location.hash)}function X(e,t){return function(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"===o()(e[n])&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?W:encodeURIComponent,u=0;u<e.length;u++){var c=e[u];if("string"!=typeof c){var l,p=a[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!t[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):s(p),!t[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(e,t){var n,r=[],o=0,a=0,i="",s=t&&t.delimiter||"/";for(;null!=(n=G.exec(e));){var u=n[0],c=n[1],l=n.index;if(i+=e.slice(a,l),a=l+u.length,c)i+=c[1];else{var p=e[a],f=n[2],d=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=f&&null!=p&&p!==f,y="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||s,_=h||m;r.push({name:d||o++,prefix:f||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!x,pattern:_?Z(_):x?".*":"[^"+Y(w)+"]+?"})}}a<e.length&&(i+=e.substr(a));i&&r.push(i);return r}(e,t))}function V(e,t){var n={},r=b()({},e,t);for(var o in r)String(e[o])!==String(t[o])&&(n[o]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(e){window.onNuxtReadyCbs.push(e)};var G=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function W(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Y(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function ee(e,t){var n,r=e.indexOf("://");-1!==r?(n=e.substring(0,r),e=e.substring(r+3)):e.startsWith("//")&&(e=e.substring(2));var o,a=e.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",t&&"{}"!==JSON.stringify(t)&&(i+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(function(t){var n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(function(e){return[t,"=",e].join("")}).join("&"):t+"="+n}).filter(Boolean).join("&")}(t)),i+=o?"#"+o:""}var te={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(e){return this.nuxt.err?e("nuxt-error",{props:{error:this.nuxt.err}}):e("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||X(this.$route.matched[0].path)(this.$route.params);var e=this.$route.matched[0]&&this.$route.matched[0].components.default;return e&&e.options&&e.options.key?"function"==typeof e.options.key?e.options.key(this.$route):e.options.key:this.$route.path}},components:{NuxtChild:S,NuxtError:U}},ne={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#fff",failedColor:"red"}},methods:{start:function(){var e=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){e.show=!0,e._cut=1e4/Math.floor(e.duration),e._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100)},this.throttle),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){e.show=!1,s.a.nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},re=(n(128),Object(O.a)(ne,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));re.options.__file="nuxt-loading.vue";var oe=re.exports,ae=(n(130),n(132),Object(O.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nuxt")],1)},[],!1,null,null,null));ae.options.__file="default.vue";var ie={_default:ae.exports},se={head:{title:"viz",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Universal visualization using nuxt &amp; svg"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(e,t){var n=e("nuxt-loading",{ref:"loading"}),r=e(this.layout||"nuxt"),o=e("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=e("transition",{props:{name:"layout",mode:"out-in"}},[o]);return e("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(e){return e&&ie["_"+e]||(e="default"),this.layoutName=e,this.layout=ie["_"+e],this.layout},loadLayout:function(e){return e&&ie["_"+e]||(e="default"),Promise.resolve(ie["_"+e])}},components:{NuxtLoading:oe}},ue=(n(134),n(57));s.a.use(ue.a);var ce=n(138),le=ce.keys(),pe={},fe=le.find(function(e){return e.includes("./index.")});if(fe&&(pe=Ne(fe)),"function"!=typeof pe){pe.modules||(pe.modules={});var de=!0,he=!1,me=void 0;try{for(var ve,xe=le[Symbol.iterator]();!(de=(ve=xe.next()).done);de=!0){var ge=ve.value,ye=ge.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"");if("index"!==ye){var be=ye.split(/\//);if(ye=be[be.length-1],["state","getters","actions","mutations"].includes(ye)){Me(Oe(pe,be,!0),ge,ye)}else{var we="index"===ye;we&&be.pop();var _e=Oe(pe,be),Ce=Ne(ge);if(_e[ye=be.pop()]=_e[ye]||{},we){var ke={};if(_e[ye].appends){ke.appends=_e[ye].appends;var $e=!0,Ee=!1,Re=void 0;try{for(var Se,Te=_e[ye].appends[Symbol.iterator]();!($e=(Se=Te.next()).done);$e=!0){var je=Se.value;ke[je]=_e[ye][je]}}catch(e){Ee=!0,Re=e}finally{try{$e||null==Te.return||Te.return()}finally{if(Ee)throw Re}}}_e[ye]=Object.assign({},_e[ye],Ce,ke),_e[ye].namespaced=!0}else _e[ye]=Object.assign({},Ce,_e[ye]),_e[ye].namespaced=!0}}}}catch(e){he=!0,me=e}finally{try{de||null==xe.return||xe.return()}finally{if(he)throw me}}}var Ae=pe instanceof Function?pe:function(){return new ue.a.Store(Object.assign({strict:!1},pe,{state:pe.state instanceof Function?pe.state():{}}))};function Ne(e){var t=ce(e),n=t.default||t;if(n.commit)throw new Error("[nuxt] store/"+e.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+e.replace("./",""));return n}function Oe(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(1===t.length)return n?e:e.modules;var r=t.shift();return e.modules[r]=e.modules[r]||{},e.modules[r].namespaced=!0,e.modules[r].modules=e.modules[r].modules||{},Oe(e.modules[r],t,n)}function Me(e,t,n){var r=ce(t);e.appends=e.appends||[],e.appends.push(n),e[n]=r.default||r}s.a.component(R.name,R),s.a.component(S.name,S),s.a.component(A.name,A),s.a.component(te.name,te),s.a.use(_.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Ue={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function De(){return(De=i()(regeneratorRuntime.mark(function e(t){var n,r,o,a,i,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new C.a({mode:"history",base:"/viz/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:$,routes:[{path:"/",component:k,name:"index"}],fallback:!1});case 2:return n=e.sent,(r=Ae(t)).$router=n,o=r.registerModule,r.registerModule=function(e,t,n){return o.call(r,e,t,Object.assign({preserveState:!0},n))},a=b()({router:n,store:r,nuxt:{defaultTransition:Ue,transitions:[Ue],setTransitions:function(e){return Array.isArray(e)||(e=[e]),e=e.map(function(e){return e=e?"string"==typeof e?Object.assign({},Ue,{name:e}):Object.assign({},Ue,e):Ue}),this.$options.nuxt.transitions=e,e},err:null,dateErr:null,error:function(e){e=e||null,a.context._errored=!!e,"string"==typeof e&&(e={statusCode:500,message:e});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}}},se),r.app=a,i=t?t.next:function(e){return a.router.push(e)},t?u=n.resolve(t.url).route:(c=Q(n.options.base),u=n.resolve(c).route),e.next=13,J(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0});case 13:(function(e,t){if(!e)throw new Error("inject(key, value) has no key provided");if(!t)throw new Error("inject(key, value) has no value provided");a[e="$"+e]=t,r[e]=a[e];var n="__nuxt_"+e+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(e)||Object.defineProperty(s.a.prototype,e,{get:function(){return this.$root.$options[e]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),e.next=18;break;case 18:return e.abrupt("return",{app:a,router:n,store:r});case 19:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var Le,qe,Pe=[],ze=window.__NUXT__||{};function Be(e,t,n){var r=function(e){var r=function(e,t){if(!e||!e.options||!e.options[t])return{};var n=e.options[t];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(e,"transition",t,n)||{};return"string"==typeof r?{name:r}:r};return e.map(function(e){var t=Object.assign({},r(e));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(e){return o[e]&&e.toLowerCase().includes("leave")}).forEach(function(e){t[e]=o[e]})}return t})}function Ie(e,t,n){return Fe.apply(this,arguments)}function Fe(){return(Fe=i()(regeneratorRuntime.mark(function e(t,n,r){var o,a,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._pathChanged=!!Le.nuxt.err||n.path!==t.path,this._queryChanged=JSON.stringify(t.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?V(t.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),e.prev=4,e.next=7,B(t);case 7:o=e.sent,!this._pathChanged&&this._queryChanged&&o.some(function(e){var t=e.options.watchQuery;return!0===t||!!Array.isArray(t)&&t.some(function(e){return i._diffQuery[e]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(4),e.t0=e.t0||{},a=e.t0.statusCode||e.t0.status||e.t0.response&&e.t0.response.status||500,this.error({statusCode:a,message:e.t0.message}),this.$nuxt.$emit("routeChanged",t,n,e.t0),r(!1);case 19:case"end":return e.stop()}},e,this,[[4,12]])}))).apply(this,arguments)}function Je(e,t){return ze.serverRendered&&t&&L(e,t),e._Ctor=e,e}function He(e,t,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),e.forEach(function(e){e.options.middleware&&(o=o.concat(e.options.middleware))})),o=o.map(function(e){return"function"==typeof e?e:("function"!=typeof g[e]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+e})),g[e])}),!a)return function e(t,n){return!t.length||n._redirected||n._errored?Promise.resolve():K(t[0],n).then(function(){return e(t.slice(1),n)})}(o,t)}function Ke(e,t,n){return Qe.apply(this,arguments)}function Qe(){return(Qe=i()(regeneratorRuntime.mark(function e(t,n,r){var o,a,i,u,c,l,p,f,d,h,m,v,x,g,y,b,w=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){e.next=2;break}return e.abrupt("return",r());case 2:return Pe=t===n?[]:P(n,o=[]).map(function(e,t){return X(n.matched[o[t]].path)(n.params)}),a=!1,i=function(e){n.path===e.path&&w.$loading.finish&&w.$loading.finish(),n.path!==e.path&&w.$loading.pause&&w.$loading.pause(),a||(a=!0,r(e))},e.next=7,J(Le,{route:t,from:n,next:i.bind(this)});case 7:if(this._dateLastError=Le.nuxt.dateErr,this._hadError=!!Le.nuxt.err,(c=P(t,u=[])).length){e.next=25;break}return e.next=14,He.call(this,c,Le.context);case 14:if(!a){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,this.loadLayout("function"==typeof U.layout?U.layout(Le.context):U.layout);case 18:return l=e.sent,e.next=21,He.call(this,c,Le.context,l);case 21:if(!a){e.next=23;break}return e.abrupt("return");case 23:return Le.context.error({statusCode:404,message:"This page could not be found"}),e.abrupt("return",r());case 25:return c.forEach(function(e){e._Ctor&&e._Ctor.options&&(e.options.asyncData=e._Ctor.options.asyncData,e.options.fetch=e._Ctor.options.fetch)}),this.setTransitions(Be(c,t,n)),e.prev=27,e.next=30,He.call(this,c,Le.context);case 30:if(!a){e.next=32;break}return e.abrupt("return");case 32:if(!Le.context._errored){e.next=34;break}return e.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(Le.context)),e.next=38,this.loadLayout(p);case 38:return p=e.sent,e.next=41,He.call(this,c,Le.context,p);case 41:if(!a){e.next=43;break}return e.abrupt("return");case 43:if(!Le.context._errored){e.next=45;break}return e.abrupt("return",r());case 45:f=!0,e.prev=46,d=!0,h=!1,m=void 0,e.prev=50,v=c[Symbol.iterator]();case 52:if(d=(x=v.next()).done){e.next=64;break}if("function"==typeof(g=x.value).options.validate){e.next=56;break}return e.abrupt("continue",61);case 56:return e.next=58,g.options.validate(Le.context);case 58:if(f=e.sent){e.next=61;break}return e.abrupt("break",64);case 61:d=!0,e.next=52;break;case 64:e.next=70;break;case 66:e.prev=66,e.t0=e.catch(50),h=!0,m=e.t0;case 70:e.prev=70,e.prev=71,d||null==v.return||v.return();case 73:if(e.prev=73,!h){e.next=76;break}throw m;case 76:return e.finish(73);case 77:return e.finish(70);case 78:e.next=84;break;case 80:return e.prev=80,e.t1=e.catch(46),this.error({statusCode:e.t1.statusCode||"500",message:e.t1.message}),e.abrupt("return",r());case 84:if(f){e.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),e.abrupt("return",r());case 87:return e.next=89,Promise.all(c.map(function(e,n){if(e._path=X(t.matched[u[n]].path)(t.params),e._dataRefresh=!1,w._pathChanged&&w._queryChanged||e._path!==Pe[n])e._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=e.options.watchQuery;!0===r?e._dataRefresh=!0:Array.isArray(r)&&(e._dataRefresh=r.some(function(e){return w._diffQuery[e]}))}if(!w._hadError&&w._isMounted&&!e._dataRefresh)return Promise.resolve();var o=[],a=e.options.asyncData&&"function"==typeof e.options.asyncData,i=!!e.options.fetch,s=a&&i?30:45;if(a){var c=K(e.options.asyncData,Le.context).then(function(t){L(e,t),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===e.options.loading,i){var l=e.options.fetch(Le.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(e){w.$loading.increase&&w.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),e.next=111;break;case 92:if(e.prev=92,e.t2=e.catch(27),e.t2){e.next=98;break}e.t2={},e.next=100;break;case 98:if("ERR_REDIRECT"!==e.t2.message){e.next=100;break}return e.abrupt("return",this.$nuxt.$emit("routeChanged",t,n,e.t2));case 100:return Pe=[],y=e.t2.response&&e.t2.response.status,e.t2.statusCode=e.t2.statusCode||e.t2.status||y||500,_=e.t2,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(b=U.layout)&&(b=b(Le.context)),e.next=108,this.loadLayout(b);case 108:this.error(e.t2),this.$nuxt.$emit("routeChanged",t,n,e.t2),r(!1);case 111:case"end":return e.stop()}var _},e,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Xe(e,t){z(e,function(e,t,n,r){return"object"!==o()(e)||e.options||((e=s.a.extend(e))._Ctor=e,n.components[r]=e),e})}function Ve(e){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var t=this.$options.nuxt.err?U.layout:e.matched[0].components.default.options.layout;"function"==typeof t&&(t=t(Le.context)),this.setLayout(t)}function Ge(e,t){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var t=[],r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],e.matched.map(function(e,n){return Object.keys(e.instances).map(function(r){return t&&t.push(n),e.instances[r]})}))}(e,t),o=P(e,t);r.forEach(function(e,t){if(e&&e.constructor._dataRefresh&&o[t]===e.constructor&&"function"==typeof e.constructor.options.data){var n=e.constructor.options.data.call(e);for(var r in n)s.a.set(e.$data,r,n[r])}}),Ve.call(n,e)})}function We(e){window.onNuxtReadyCbs.forEach(function(t){"function"==typeof t&&t(e)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(e),qe.afterEach(function(t,n){s.a.nextTick(function(){return e.$nuxt.$emit("routeChanged",t,n)})})}function Ye(){return(Ye=i()(regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Le=t.app,qe=t.router,t.store,e.next=5,Promise.all((void 0,c=Q((u=qe).options.base,u.options.mode),z(u.match(c),function(){var e=i()(regeneratorRuntime.mark(function e(t,n,r,o,a){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t||t.options){e.next=4;break}return e.next=3,t();case 3:t=e.sent;case 4:return i=Je(q(t),ze.data?ze.data[a]:null),r.components[o]=i,e.abrupt("return",i);case 7:case"end":return e.stop()}},e,this)}));return function(t,n,r,o,a){return e.apply(this,arguments)}}())));case 5:return n=e.sent,r=new s.a(Le),o=ze.layout||"default",e.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){We(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Be(n,qe.currentRoute)),Pe=qe.currentRoute.matched.map(function(e){return X(e.path)(qe.currentRoute.params)})),r.$loading={},ze.error&&r.error(ze.error),qe.beforeEach(Ie.bind(r)),qe.beforeEach(Ke.bind(r)),qe.afterEach(Xe),qe.afterEach(Ge.bind(r)),!ze.serverRendered){e.next=23;break}return a(),e.abrupt("return");case 23:Ke.call(r,qe.currentRoute,qe.currentRoute,function(e){if(!e)return Xe(qe.currentRoute,qe.currentRoute),Ve.call(r,qe.currentRoute),void a();qe.push(e,function(){return a()},function(e){if(!e)return a();console.error(e)})});case 24:case"end":return e.stop()}var u,c},e,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(e){return De.apply(this,arguments)}().then(function(e){return Ye.apply(this,arguments)}).catch(function(e){console.error("[nuxt] Error while initializing app",e)})},26:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},27:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},p=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){c=n,p=o||{};var i=r(e,t);return m(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,n.push(u)}t?m(i=r(e,t)):i=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(x(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(x(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function x(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(d){var o=u++;r=s||(s=v()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);p.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},37:function(e,t,n){var r=n(118);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(27).default)("45b1ddea",r,!0,{sourceMap:!1})},38:function(e,t,n){var r=n(129);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(27).default)("fd547dac",r,!0,{sourceMap:!1})},39:function(e,t,n){var r=n(133);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(27).default)("371b8fbf",r,!0,{sourceMap:!1})},84:function(e,t,n){"use strict";var r={name:"no-ssr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(e,t){var n=t.parent,r=t.slots,o=t.props,a=r(),i=a.default,s=a.placeholder;return n._isMounted?i:(n.$once("hook:mounted",function(){n.$forceUpdate()}),e(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||s))}};e.exports=r},86:function(e,t,n){e.exports=n(141)}},[[86,3,2]]]);