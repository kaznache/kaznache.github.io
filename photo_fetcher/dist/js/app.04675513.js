(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],f=0,h=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/photo_fetcher/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"02fb":function(t,e,r){},"098d":function(t,e,r){"use strict";var n=r("1076"),a=r.n(n);a.a},1076:function(t,e,r){},3359:function(t,e,r){"use strict";var n=r("a72f"),a=r.n(n);a.a},5022:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("photo-fetcher")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"photo-fetcher"},[r("h1",{staticClass:"photo-fetcher_title"},[t._v("Photo Fetcher")]),r("div",{staticClass:"photo-fetcher_panel"},[r("switcher",{model:{value:t.isGrayScale,callback:function(e){t.isGrayScale=e},expression:"isGrayScale"}},[t._v("Make photos grayscale")]),r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.fetchPhotos(e)}}},[t._v("Fetch New Photos")])],1),t.loading?r("spinner",{staticClass:"photo-fetcher_spinner"}):t.error?r("div",{staticClass:"photo-fetcher_error p-3 bg-danger text-white"},[t._v(" Oops! Error: "+t._s(t.error)+". "),r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.fetchPhotos(e)}}},[t._v("Try again")])]):r("photos-list",t._l(t.items,(function(e,n){return r("photos-item",{key:n,attrs:{item:e,grayscale:t.isGrayScale}})})),1)],1)},i=[],c=(r("d3b7"),r("5530")),u=(r("96cf"),r("1da1")),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"photos"},[t._t("default")],2)},f=[],h=(r("098d"),r("2877")),p={},d=Object(h["a"])(p,l,f,!1,null,"792e2ff6",null),m=d.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"photo",attrs:{href:t.downloadUrl}},[t.item.loaded||t.error?t.error?r("div",{staticClass:"photo_error text-danger"},[t._v(t._s(t.error))]):t._e():r("spinner"),r("img",{directives:[{name:"show",rawName:"v-show",value:t.item.loaded,expression:"item.loaded"}],attrs:{src:t.imageSrc,alt:t.item.author},on:{load:t.imageLoaded,error:t.imageFailed}}),r("div",{staticClass:"photo_descr"},[r("div",{staticClass:"photo_title"},[t._v(" "+t._s(t.item.author)+" ")]),r("a",{staticClass:"photo_link",attrs:{href:t.item.url,target:"_blank"}},[t._v(" "+t._s(t.item.url)+" ")])])],1)},_=[],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"spinner-border"})])}],y={},w=Object(h["a"])(y,g,b,!1,null,null,null),x=w.exports,O={name:"PhotosItem",props:{item:{type:Object,default:function(){}},grayscale:{type:Boolean,default:!1}},components:{Spinner:x},data:function(){return{error:""}},watch:{grayscale:function(){this.item.loaded=!1}},computed:{downloadUrl:function(){return this.grayscale?"".concat(this.item.download_url,"?grayscale"):this.item.download_url},imageSrc:function(){return this.grayscale?"".concat(this.item.src,"?grayscale"):this.item.src}},methods:{imageLoaded:function(){this.item.loaded=!0},imageFailed:function(t){this.error="Image URL ".concat(t.target.src," is invalid")}}},C=O,j=(r("ff57"),Object(h["a"])(C,v,_,!1,null,"5c8dbb5f",null)),P=j.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"switcher"},[r("input",{staticClass:"switcher_input",attrs:{type:"checkbox",id:"switcherInput"},on:{change:function(e){return t.$emit("input",e.target.checked)}}}),r("label",{staticClass:"switcher_label",attrs:{for:"switcherInput"}},[t._t("default")],2)])},S=[],$=(r("c979"),{}),E=Object(h["a"])($,k,S,!1,null,"15493bd9",null),I=E.exports,M={name:"PhotoFetcher",components:{PhotosList:m,PhotosItem:P,Spinner:x,Switcher:I},data:function(){return{error:"",items:[],itemsCount:4,loading:!1,requestCount:0,isGrayScale:!1}},created:function(){this.fetchPhotos()},methods:{fetchPhotos:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPhotosList();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:r=e.t0,t.items=t.prepareItems(r);case 7:case"end":return e.stop()}}),e)})))()},getPhotosList:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.requestCount++,e.next=4,fetch("https://picsum.photos/v2/list?page=".concat(t.requestCount,"&limit=100"));case 4:if(r=e.sent,t.loading=!1,!r.ok){e.next=12;break}return e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 12:t.error=r.status;case 13:case"end":return e.stop()}}),e)})))()},prepareItems:function(t){for(var e=[],r=0;r<this.itemsCount;r++){var n=this.getRandom(t.length),a=t[n];e.push(Object(c["a"])(Object(c["a"])({},a),{},{loaded:!1,src:"https://picsum.photos/id/".concat(a.id,"/367/267")}))}return e},getRandom:function(t){return Math.floor(Math.random()*t)}}},R=M,F=(r("3359"),Object(h["a"])(R,s,i,!1,null,null,null)),L=F.exports,G={name:"App",components:{PhotoFetcher:L}},T=G,q=Object(h["a"])(T,a,o,!1,null,null,null),U=q.exports;r("f9e3");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(U)}}).$mount("#app")},a72f:function(t,e,r){},c979:function(t,e,r){"use strict";var n=r("5022"),a=r.n(n);a.a},ff57:function(t,e,r){"use strict";var n=r("02fb"),a=r.n(n);a.a}});
//# sourceMappingURL=app.04675513.js.map