(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"W+IF":function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),o=t.n(r),s=t("eVuF"),u=t.n(s);function a(e,n,t,r,o,s,a){try{var i=e[s](a),c=i.value}catch(l){return void t(l)}i.done?n(c):u.a.resolve(c).then(r,o)}var i=t("q1tI"),c=t.n(i),l=t("JAUf"),f=t("zgjP"),p=t.n(f),w=c.a.createElement;"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash="");var d=function(e){var n=e.user;return w("div",null,w(l.default,null),"Profile",w("h1",null,n))};d.getInitialProps=function(){var e,n=(e=o.a.mark(function e(n){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.req,e.next=3,p()("http://localhost:5000/api/user/personal");case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",{user:r.userName});case 8:case"end":return e.stop()}},e)}),function(){var n=this,t=arguments;return new u.a(function(r,o){var s=e.apply(n,t);function u(e){a(s,r,o,u,i,"next",e)}function i(e){a(s,r,o,u,i,"throw",e)}u(void 0)})});return function(e){return n.apply(this,arguments)}}();n.default=d},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest,s=[],u=[],a={},i=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:i,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){s.push(n=n.toLowerCase()),u.push([n,t]),a[n]=a[n]?a[n]+","+t:t}),t(i())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(c,n.headers[c]);o.send(n.body||null)})}},u1GD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("W+IF")}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["u1GD",1,0]]]);