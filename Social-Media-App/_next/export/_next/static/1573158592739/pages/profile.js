(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"W+IF":function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),s=t("JAUf"),u=t("zgjP"),i=t.n(u),l=r.a.createElement;n.default=function(e){return i()("/profile").then(function(e){return console.log(e)}).then(function(e){console.log(e)}),"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash=""),l("div",null,l(s.default,null),l("h1",null,"This is your profile"))}},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,o){var r=new XMLHttpRequest,s=[],u=[],i={},l=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:l,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var a in r.open(n.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){s.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(l())},r.onerror=o,r.withCredentials="include"==n.credentials,n.headers)r.setRequestHeader(a,n.headers[a]);r.send(n.body||null)})}},u1GD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("W+IF")}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["u1GD",1,0]]]);