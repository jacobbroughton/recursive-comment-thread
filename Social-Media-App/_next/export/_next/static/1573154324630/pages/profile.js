(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"W+IF":function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),o=t.n(r),s=t("eVuF"),u=t.n(s);function i(e,n,t,r,o,s,i){try{var a=e[s](i),c=a.value}catch(l){return void t(l)}a.done?n(c):u.a.resolve(c).then(r,o)}function a(e){return function(){var n=this,t=arguments;return new u.a(function(r,o){var s=e.apply(n,t);function u(e){i(s,r,o,u,a,"next",e)}function a(e){i(s,r,o,u,a,"throw",e)}u(void 0)})}}var c=t("q1tI"),l=t.n(c),f=t("JAUf"),p=t("zgjP"),w=t.n(p),d=l.a.createElement,h=function(e){return"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash=""),d("div",null,d(f.default,null),d("h1",null,"This is your profile"),e.user.userName)};h.getInitialProps=a(o.a.mark(function e(){var n,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("http://localhost:5000/profile");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));n.default=h},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest,s=[],u=[],i={},a=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:a,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var c in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){s.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(c,n.headers[c]);o.send(n.body||null)})}},u1GD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("W+IF")}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["u1GD",1,0]]]);