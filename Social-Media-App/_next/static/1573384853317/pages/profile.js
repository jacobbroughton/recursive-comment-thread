(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"W+IF":function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),a=e("eVuF"),i=e.n(a);function u(n,t,e,r,o,a,u){try{var l=n[a](u),s=l.value}catch(c){return void e(c)}l.done?t(s):i.a.resolve(s).then(r,o)}var l=e("q1tI"),s=e.n(l),c=e("JAUf"),p=e("q15l"),f=e.n(p),w=s.a.createElement,h=function(n){return"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash=""),console.log(n),w("div",null,w(c.default,null),"Profile",w("h1",null,n.user))};h.getInitialProps=function(){var n,t=(n=o.a.mark(function n(t){var e,r,a,i,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.req,r=t.res,!e){n.next=5;break}r.redirect("/auth/login"),n.next=15;break;case 5:return console.log("Getting initial props"),n.next=8,f()("http://localhost:5000/api/user/personal");case 8:return a=n.sent,console.log("Got initial props"),n.next=12,a.text();case 12:return i=n.sent,u=JSON.parse(i),n.abrupt("return",{user:u.userName});case 15:case"end":return n.stop()}},n)}),function(){var t=this,e=arguments;return new i.a(function(r,o){var a=n.apply(t,e);function i(n){u(a,r,o,i,l,"next",n)}function l(n){u(a,r,o,i,l,"throw",n)}i(void 0)})});return function(n){return t.apply(this,arguments)}}();t.default=h},q15l:function(n,t,e){"use strict";t.__esModule=!0,t.default=void 0;var r=window.fetch;t.default=r},u1GD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e("W+IF")}])}},[["u1GD",0,1]]]);