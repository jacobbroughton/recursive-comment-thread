(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"W+IF":function(n,t,e){"use strict";e.r(t);var o=e("ln6h"),r=e.n(o),u=e("eVuF"),a=e.n(u);function i(n,t,e,o,r,u,i){try{var l=n[u](i),c=l.value}catch(s){return void e(s)}l.done?t(c):a.a.resolve(c).then(o,r)}function l(n){return function(){var t=this,e=arguments;return new a.a(function(o,r){var u=n.apply(t,e);function a(n){i(u,o,r,a,l,"next",n)}function l(n){i(u,o,r,a,l,"throw",n)}a(void 0)})}}var c=e("q1tI"),s=e.n(c),f=e("JAUf"),w=e("q15l"),h=e.n(w),p=s.a.createElement;"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash="");var d=function(n){return p("div",null,p(f.default,null),"Profile",p("h1",null,n.user))};d.getInitialProps=l(r.a.mark(function n(){var t,e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("fetching"),t=h()("http://localhost:5000/api/user/personal"),console.log(t),e=t.json(),console.log(e),n.abrupt("return",{user:e.userName});case 6:case"end":return n.stop()}},n)}));t.default=d},q15l:function(n,t,e){"use strict";t.__esModule=!0,t.default=void 0;var o=window.fetch;t.default=o},u1GD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e("W+IF")}])}},[["u1GD",0,1]]]);