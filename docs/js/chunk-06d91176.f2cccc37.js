(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06d91176"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0f6f":function(t,e,n){},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),c=n("6821"),o=n("6a99"),a=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=c(t),e=o(e,!0),u)try{return s(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,c=r(i)&&r(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"29cd":function(t,e,n){"use strict";var r=n("0f6f"),i=n.n(r);i.a},"328a":function(t,e,n){},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",(function(){return function(t){return i(r(t))}}))},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var r=n("5ca1"),i=n("8378"),c=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*c((function(){n(1)})),"Object",o)}},"602d":function(t,e,n){},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),c=n("d864"),o=n("35e8"),a=n("07e3"),u="prototype",s=function(t,e,n){var f,l,p,d=t&s.F,v=t&s.G,b=t&s.S,m=t&s.P,y=t&s.B,g=t&s.W,h=v?i:i[e]||(i[e]={}),O=h[u],w=v?r:b?r[e]:(r[e]||{})[u];for(f in v&&(n=e),n)l=!d&&w&&void 0!==w[f],l&&a(h,f)||(p=l?w[f]:n[f],h[f]=v&&"function"!=typeof w[f]?n[f]:y&&l?c(p,r):g&&w[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(p):m&&"function"==typeof p?c(Function.call,p):p,m&&((h.virtual||(h.virtual={}))[f]=p,t&s.R&&O&&!O[f]&&o(O,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var r=n("5ca1"),i=n("990b"),c=n("6821"),o=n("11e9"),a=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),u=o.f,s=i(r),f={},l=0;while(s.length>l)n=u(r,e=s[l++]),void 0!==n&&a(f,e,n);return f}})},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},9365:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"left"}),n("timer"),n("div",{staticClass:"right"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"btn btn__app",on:{click:t.quit}},[n("svg",{staticClass:"svg-inline--fa fa-sign-out-alt fa-w-16 btn__svg",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sign-out-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}})])])])],1)],1),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"game"},t._l(t.cards,(function(e){return n("card",{key:e.id,attrs:{card:e,onClick:t.flipCard}})})),1)])])},i=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("85f2")),o=n.n(c);function a(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[t.card.isShow?n("div",{class:["card__item",t.card.item],on:{click:function(e){return t.onClick(t.card.id)}}},[n("div",{class:["card",t.card.isFlip?"flip":""]},[n("img",{staticClass:"card__front-face",attrs:{src:t.card.url}}),n("img",{staticClass:"card__back-face",attrs:{src:"svg/js-badge.svg"}})])]):t._e()])},s=[],f={name:"card",props:{card:{type:Object},onClick:{type:Function}}},l=f,p=(n("29cd"),n("2877")),d=Object(p["a"])(l,u,s,!1,null,null,null),v=d.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.currentTime,staticClass:"timer"},[n("div",{staticClass:"timer__digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),n("div",{staticClass:"timer__digit"},[t._v(":")]),n("div",{staticClass:"timer__digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))])])},m=[],y=(n("6b54"),n("84b4"),n("2f62"));function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={name:"timer",computed:h({seconds:function(){return Math.trunc(this.currentTime)%60},minutes:function(){return Math.trunc(this.currentTime/60)%60}},Object(y["e"])(["currentTime"])),filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}}},w=O,j=(n("ebf0"),Object(p["a"])(w,b,m,!1,null,"77873994",null)),_=j.exports,S=n("2a68");function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T={name:"Game",components:{card:v,timer:_},computed:P({},Object(y["e"])(["cards","currentTime"]),{},Object(y["c"])(["isFinish"])),methods:P({},Object(y["b"])(["flipCard","startTimer"]),{},Object(y["d"])(["resetBoard","stopTimer","getFormattedTime"]),{quit:function(){this.$swal({title:"Вы действительно хотите прервать игру?",type:"warning",showCancelButton:!0,confirmButtonColor:"#FF9C13",cancelButtonColor:"#1C7CCC",confirmButtonText:"Да",cancelButtonText:"Нет"}).then((function(t){t.value&&console.log("Ok!")}))}}),mounted:function(){this.startTimer()},watch:{isFinish:function(t){if(t){this.stopTimer(),this.resetBoard();var e=S["b"](this.currentTime);console.log(e),this.$swal({type:"success",title:"Победа",html:"Ваше время ".concat(e),confirmButtonColor:"#FF9C13"})}}}},x=T,L=(n("9ea0"),Object(p["a"])(x,r,i,!1,null,"00c72988",null));e["default"]=L.exports},"990b":function(t,e,n){var r=n("9093"),i=n("2621"),c=n("cb7c"),o=n("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=r.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},"9ea0":function(t,e,n){"use strict";var r=n("602d"),i=n.n(r);i.a},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),c=n("2aba"),o=n("7726"),a=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),p=u.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(d),b=0;b<v.length;b++){var m,y=v[b],g=d[y],h=o[y],O=h&&h.prototype;if(O&&(O[f]||a(O,f,p),O[l]||a(O,l,y),u[y]=p,g))for(m in r)O[m]||c(O,m,r[m],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),c=n("1bc3"),o=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),i)try{return o(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},ebf0:function(t,e,n){"use strict";var r=n("328a"),i=n.n(r);i.a},f1ae:function(t,e,n){"use strict";var r=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-06d91176.f2cccc37.js.map