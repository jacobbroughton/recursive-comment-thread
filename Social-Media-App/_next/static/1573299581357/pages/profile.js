(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"W+IF":function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),u=e("eVuF"),a=e.n(u);function i(n,t,e,r,o,u,i){try{var c=n[u](i),f=c.value}catch(l){return void e(l)}c.done?t(f):a.a.resolve(f).then(r,o)}var c=e("hfKm"),f=e.n(c);function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),f()(n,r.key,r)}}var s=e("XVgq"),p=e.n(s),h=e("Z7t5"),w=e.n(h);function y(n){return(y="function"===typeof w.a&&"symbol"===typeof p.a?function(n){return typeof n}:function(n){return n&&"function"===typeof w.a&&n.constructor===w.a&&n!==w.a.prototype?"symbol":typeof n})(n)}function v(n){return(v="function"===typeof w.a&&"symbol"===y(p.a)?function(n){return y(n)}:function(n){return n&&"function"===typeof w.a&&n.constructor===w.a&&n!==w.a.prototype?"symbol":y(n)})(n)}function d(n,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}var _=e("Bhuq"),b=e.n(_),m=e("TRZx"),k=e.n(m);function g(n){return(g=k.a?b.a:function(n){return n.__proto__||b()(n)})(n)}var q=e("SqZg"),x=e.n(q);function E(n,t){return(E=k.a||function(n,t){return n.__proto__=t,n})(n,t)}var S=e("q1tI"),T=e.n(S),I=e("JAUf"),P=e("q15l"),F=e.n(P),J=T.a.createElement,N=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,g(t).apply(this,arguments))}var e,r,u;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=x()(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&E(n,t)}(t,T.a.Component),e=t,r=[{key:"componentWillMount",value:function(){this.setState({user:this.props.user})}},{key:"render",value:function(){return J("div",null,J(I.default,null),"Profile",J("h1",null,this.state.user.userName))}}],u=[{key:"getInitialProps",value:function(){var n,t=(n=o.a.mark(function n(){var t,e;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F()("http://localhost:5000/api/user/personal");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",{user:e});case 7:case"end":return n.stop()}},n)}),function(){var t=this,e=arguments;return new a.a(function(r,o){var u=n.apply(t,e);function a(n){i(u,r,o,a,c,"next",n)}function c(n){i(u,r,o,a,c,"throw",n)}a(void 0)})});return function(){return t.apply(this,arguments)}}()}],r&&l(e.prototype,r),u&&l(e,u),t}();"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash="");t.default=N},q15l:function(n,t,e){"use strict";t.__esModule=!0,t.default=void 0;var r=window.fetch;t.default=r},u1GD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e("W+IF")}])}},[["u1GD",0,1]]]);