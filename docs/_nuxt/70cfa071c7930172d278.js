(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(t,e,n){var i=n(149);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(27).default)("149d4658",i,!0,{sourceMap:!1})},143:function(t,e,n){var i=n(151);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(27).default)("9f460164",i,!0,{sourceMap:!1})},144:function(t,e,n){var i=n(153);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(27).default)("798c3abc",i,!0,{sourceMap:!1})},145:function(t,e,n){"use strict";var i=n(2),o=n(13),r=n(15),a=n(85),s=n(40),c=n(9),l=n(41).f,u=n(60).f,h=n(8).f,f=n(146).trim,p=i.Number,d=p,x=p.prototype,v="Number"==r(n(59)(x)),g="trim"in String.prototype,m=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,i,o,r=(e=g?e.trim():f(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if((a=c.charCodeAt(l))<48||a>o)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(v?c(function(){x.valueOf.call(n)}):"Number"!=r(n))?a(new d(m(e)),n,p):m(e)};for(var b,y=n(5)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)o(d,b=y[w])&&!o(p,b)&&h(p,b,u(d,b));p.prototype=x,x.constructor=p,n(10)(i,"Number",p)}},146:function(t,e,n){var i=n(4),o=n(14),r=n(9),a=n(147),s="["+a+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var o={},s=r(function(){return!!a[t]()||"​"!="​"[t]()}),c=o[t]=s?e(h):a[t];n&&(o[n]=c),i(i.P+i.F*s,"String",o)},h=u.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},147:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},148:function(t,e,n){"use strict";var i=n(142);n.n(i).a},149:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"\n.fade-enter-active[data-v-397ce095]{transition:all .8s ease\n}\n.fade-leave-active[data-v-397ce095]{transition:all .4s cubic-bezier(1,.5,.8,1)\n}\n.fade-enter[data-v-397ce095],.fade-leave-to[data-v-397ce095]{-webkit-transform:translateX(100px);transform:translateX(100px);opacity:0\n}\n.list-item[data-v-397ce095]{display:inline-block;margin-right:10px\n}\n.list-enter-active[data-v-397ce095],.list-leave-active[data-v-397ce095]{transition:all 1s\n}\n.list-enter[data-v-397ce095],.list-leave-to[data-v-397ce095]{opacity:0;-webkit-transform:translateY(30px);transform:translateY(30px)\n}\n.list-move[data-v-397ce095]{transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s\n}",""])},150:function(t,e,n){"use strict";var i=n(143);n.n(i).a},151:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"\n.main{width:100%;height:auto;border:1px solid green\n}",""])},152:function(t,e,n){"use strict";var i=n(144);n.n(i).a},153:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"\n.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center\n}\n.content{width:800px\n}",""])},154:function(t,e,n){"use strict";n.r(e);var i=n(20),o=n.n(i),r=n(57),a=(n(145),function(t,e,n,i){var o=t*n,r=o/e,a=(t-o)/e;return{itemSpace:r,itemPosition:.5*a+(r+a)*i}}),s=function(t,e,n,i){var o=t*n,r=o/e;return{itemSpace:r,itemPosition:(r+(e>1?(t-o)/(e-1):0))*i}},c={name:"Box",props:{depth:{type:Number,default:0},nodes:{type:Array,default:function(){return[]}},label:{type:String,default:""},color:{type:String,default:"green"},contentBox:{type:Object,default:function(){return{x:0,y:0,width:0,height:0}}}},computed:{itemsCount:function(){return this.nodes.length},direction:function(){return this.$store.getters["viz/directionByDepth"](this.depth)},percentFilledSpace:function(){return this.$store.getters["viz/percentFilledSpaceByDepth"](this.depth)},distributionType:function(){return this.$store.getters["viz/distributionTypeByDepth"](this.depth)},makeCoord:function(){return"spaceAround"===this.distributionType?a:s},availableSpace1d:function(){return"h"===this.direction?this.contentBox.width:this.contentBox.height}},methods:{childContentBox:function(t){var e=this.makeCoord(this.availableSpace1d,this.itemsCount,this.percentFilledSpace,t);return"h"===this.direction?{width:e.itemSpace,height:this.contentBox.height,x:this.contentBox.x+e.itemPosition,y:this.contentBox.y}:{width:this.contentBox.width,height:e.itemSpace,x:this.contentBox.x,y:this.contentBox.y+e.itemPosition}}}},l=(n(148),n(19)),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",{staticClass:"box"},[n("transition-group",{attrs:{name:"list",tag:"g"}},t._l(t.nodes,function(e,i){return n("Box",{key:i,attrs:{depth:t.depth+1,nodes:e.nodes,color:e.color,"content-box":t.childContentBox(i)}})})),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.nodes.length?t._e():n("rect",{attrs:{width:t.contentBox.width,height:t.contentBox.height,x:t.contentBox.x,y:t.contentBox.y,fill:t.color}})])],1)},[],!1,null,"397ce095",null);u.options.__file="Box.vue";var h={components:{Box:u.exports},data:function(){return{viewBoxString:"0 0 100 50",viewBoxObject:{x:0,y:0,width:100,height:50}}},computed:o()({},Object(r.b)({label:"tree/getLabel",color:"tree/getColor",nodes:"tree/getNodes"})),methods:o()({},Object(r.c)({nextChoice:"tree/nextChoice"}))},f=(n(150),Object(l.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"main",attrs:{viewBox:this.viewBoxString,version:"1.1",baseProfile:"full",width:"100",height:"50",xmlns:"http://www.w3.org/2000/svg"},on:{click:this.nextChoice}},[e("Box",{attrs:{nodes:this.nodes,label:this.label,"content-box":this.viewBoxObject}})],1)},[],!1,null,null,null));f.options.__file="Chart.vue";var p={components:{Chart:f.exports}},d=(n(152),Object(l.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",{staticClass:"content"},[e("Chart")],1)])},[],!1,null,null,null));d.options.__file="index.vue";e.default=d.exports}}]);