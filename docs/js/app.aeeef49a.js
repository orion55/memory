(function(e){function t(t){for(var n,o,u=t[0],s=t[1],c=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==i[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},i={app:0},a=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-03711f93":"5109ad5d","chunk-2d207d33":"f07941ba"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-03711f93":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-03711f93":"16598c91","chunk-2d207d33":"31d6cfe0"}[e]+".css",i=s.p+n,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],d=c.getAttribute("data-href");if(d===n||d===i)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],l.parentNode.removeChild(l),r(a)},l.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=a);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var f=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}i[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},i=[],a=(r("5c0b"),r("2877")),u={},s=Object(a["a"])(u,o,i,!1,null,null,null),c=s.exports,d=r("8c4f");n["a"].use(d["a"]);var f=new d["a"]({routes:[{path:"/",name:"game",component:function(){return r.e("chunk-03711f93").then(r.bind(null,"9365"))}},{path:"/about",name:"about",component:function(){return r.e("chunk-2d207d33").then(r.bind(null,"a1d1"))}}]}),l=r("2f62");function p(){var e=4,t=6,r=["angular","aurelia","backbone","jest","jquery","nuxt","react","svelte","vue"],n=[],o={},i=[],a=0,u=0;for(a=0;a<t;a++)for(i[a]=[],u=0;u<t;u++)i[a][u]=0;for(u=0,a=0;a<e;a++){var s=0,c=0;do{s=Math.floor(Math.random()*t),c=Math.floor(Math.random()*t)}while(0!==i[s][c]);i[s][c]=1,o={id:a,nameCard:r[u],url:"svg/"+r[u]+".svg",item:"card__item-".concat(s,"-").concat(c),isFlip:!1,isShow:!0},n.push(o),(a+1)%2===0&&u++}return n}r("20d6"),r("7514");function h(e,t){var r=e.cards.find((function(e){return e.id===t}));return void 0===r?null:r}function m(e,t){var r=e.cards.findIndex((function(e){return e.id===t}));return-1===r?null:r}function v(e,t){e.firstCard.nameCard===e.secondCard.nameCard?g(e,t):b(e,t)}function g(e,t){setTimeout((function(){t("setShow",{id:e.firstCard.id,flag:!1}),t("setShow",{id:e.secondCard.id,flag:!1}),y(e)}),500)}function b(e,t){e.secondTimeoutID=setTimeout((function(){t("setFlip",{id:e.firstCard.id,flag:!1}),t("setFlip",{id:e.secondCard.id,flag:!1}),y(e)}),1500)}function C(e,t){e.firstTimeoutID=setTimeout((function(){t("setFlip",{id:e.firstCard.id,flag:!1}),y(e)}),1500)}function y(e){e.hasFlippedCard=!1,e.firstCard=null,e.secondCard=null,e.firstTimeoutID=0,e.secondTimeoutID=0}function w(e,t){0!==e.secondTimeoutID&&(clearTimeout(e.secondTimeoutID),t("setFlip",{id:e.firstCard.id,flag:!1}),t("setFlip",{id:e.secondCard.id,flag:!1}),y(e))}function T(e){0!==e.firstTimeoutID&&(clearTimeout(e.firstTimeoutID),e.firstTimeoutID=0)}n["a"].use(l["a"]);var F=new l["a"].Store({state:{cards:p(),hasFlippedCard:!1,firstCard:null,secondCard:null,firstTimeoutID:0,secondTimeoutID:0},getters:{isFinish:function(e){return e.cards.every((function(e){return!e.isShow}))}},mutations:{setFlip:function(e,t){var r=t.id,o=t.flag,i=h(e,r);if(i){var a=e.cards;i.isFlip=o,a[m(e,r)]=i,n["a"].set(e,"cards",a)}},setShow:function(e,t){var r=t.id,o=t.flag,i=h(e,r);if(i){var a=e.cards;i.isShow=o,a[m(e,r)]=i,n["a"].set(e,"cards",a)}},resetBoard:function(e){y(e)}},actions:{flipCard:function(e,t){var r=e.state,n=e.commit,o=h(r,t);if(o){if(o===r.firstCard||o===r.secondCard)return;n("setFlip",{id:t,flag:!o.isFlip}),w(r,n),r.hasFlippedCard?(T(r),r.hasFlippedCard=!1,r.secondCard=o,v(r,n)):(r.hasFlippedCard=!0,r.firstCard=o,C(r,n))}}}}),k=r("5886");n["a"].config.productionTip=!1,n["a"].use(k["a"]),new n["a"]({router:f,store:F,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),o=r.n(n);o.a},e332:function(e,t,r){}});
//# sourceMappingURL=app.aeeef49a.js.map