(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"W+IF":function(n,e,t){"use strict";t.r(e);var r=t("ln6h"),o=t.n(r),u=t("eVuF"),a=t.n(u);function i(n,e,t,r,o,u,i){try{var s=n[u](i),c=s.value}catch(l){return void t(l)}s.done?e(c):a.a.resolve(c).then(r,o)}var s=t("hfKm"),c=t.n(s);function l(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),c()(n,r.key,r)}}var f=t("XVgq"),p=t.n(f),h=t("Z7t5"),w=t.n(h);function d(n){return(d="function"===typeof w.a&&"symbol"===typeof p.a?function(n){return typeof n}:function(n){return n&&"function"===typeof w.a&&n.constructor===w.a&&n!==w.a.prototype?"symbol":typeof n})(n)}function v(n){return(v="function"===typeof w.a&&"symbol"===d(p.a)?function(n){return d(n)}:function(n){return n&&"function"===typeof w.a&&n.constructor===w.a&&n!==w.a.prototype?"symbol":d(n)})(n)}function y(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var b=t("Bhuq"),m=t.n(b),_=t("TRZx"),g=t.n(_);function x(n){return(x=g.a?m.a:function(n){return n.__proto__||m()(n)})(n)}var k=t("SqZg"),P=t.n(k);function T(n,e){return(T=g.a||function(n,e){return n.__proto__=e,n})(n,e)}var C=t("q1tI"),S=t.n(C),q=t("JAUf"),E=t("zgjP"),R=t.n(E),j=S.a.createElement,G=function(n){function e(){var n,t,r,o,u,a,i;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,l=new Array(s),f=0;f<s;f++)l[f]=arguments[f];return r=this,t=!(o=(n=x(e)).call.apply(n,[this].concat(l)))||"object"!==v(o)&&"function"!==typeof o?y(r):o,u=y(t),i=function(){"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash="")},(a="urlCheck")in u?c()(u,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):u[a]=i,t}var t,r,u;return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=P()(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&T(n,e)}(e,S.a.Component),t=e,r=[{key:"render",value:function(){return this.urlCheck(),j("div",null,j(q.default,null),j("h1",null,props.user))}}],u=[{key:"getInitialProps",value:function(){var n,e=(n=o.a.mark(function n(){var e,t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R()("/api/user/personal");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,console.log(t),n.abrupt("return",{user:t.userName});case 8:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new a.a(function(r,o){var u=n.apply(e,t);function a(n){i(u,r,o,a,s,"next",n)}function s(n){i(u,r,o,a,s,"throw",n)}a(void 0)})});return function(){return e.apply(this,arguments)}}()}],r&&l(t.prototype,r),u&&l(t,u),e}();e.default=G},"m/Gl":function(n,e,t){"use strict";t.r(e),e.default=function(n,e){return e=e||{},new Promise(function(t,r){var o=new XMLHttpRequest,u=[],a=[],i={},s=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:s,headers:{keys:function(){return u},entries:function(){return a},get:function(n){return i[n.toLowerCase()]},has:function(n){return n.toLowerCase()in i}}}};for(var c in o.open(e.method||"get",n,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(n,e,t){u.push(e=e.toLowerCase()),a.push([e,t]),i[e]=i[e]?i[e]+","+t:t}),t(s())},o.onerror=r,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(c,e.headers[c]);o.send(e.body||null)})}},u1GD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("W+IF")}])},zgjP:function(n,e,t){n.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["u1GD",1,0]]]);