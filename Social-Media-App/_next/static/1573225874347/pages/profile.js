(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"W+IF":function(n,e,t){"use strict";t.r(e);var r=t("ln6h"),o=t.n(r),u=t("eVuF"),s=t.n(u);function i(n,e,t,r,o,u,i){try{var a=n[u](i),c=a.value}catch(l){return void t(l)}a.done?e(c):s.a.resolve(c).then(r,o)}var a=t("q1tI"),c=t.n(a),l=t("JAUf"),f=t("zgjP"),p=t.n(f),h=c.a.createElement,w=function(n){var e=n.user;return"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash=""),p()("http://localhost:5000/api/user/personal").then(function(n){return n.json()}).then(function(n){return console.log(n)}),h("div",null,h(l.default,null),"Profile",h("h1",null,e))};w.getInitialProps=function(){var n,e=(n=o.a.mark(function n(e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",p()("http://localhost:5000/api/user/personal").then(function(n){return n.json()}).then(function(n){}));case 1:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new s.a(function(r,o){var u=n.apply(e,t);function s(n){i(u,r,o,s,a,"next",n)}function a(n){i(u,r,o,s,a,"throw",n)}s(void 0)})});return function(n){return e.apply(this,arguments)}}();e.default=w},"m/Gl":function(n,e,t){"use strict";t.r(e),e.default=function(n,e){return e=e||{},new Promise(function(t,r){var o=new XMLHttpRequest,u=[],s=[],i={},a=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:a,headers:{keys:function(){return u},entries:function(){return s},get:function(n){return i[n.toLowerCase()]},has:function(n){return n.toLowerCase()in i}}}};for(var c in o.open(e.method||"get",n,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(n,e,t){u.push(e=e.toLowerCase()),s.push([e,t]),i[e]=i[e]?i[e]+","+t:t}),t(a())},o.onerror=r,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(c,e.headers[c]);o.send(e.body||null)})}},u1GD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("W+IF")}])},zgjP:function(n,e,t){n.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["u1GD",1,0]]]);