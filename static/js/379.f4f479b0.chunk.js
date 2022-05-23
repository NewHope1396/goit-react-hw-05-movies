"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[379],{7379:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,c,s,a,i=t(885),o=t(2791),u=t(501),p=t(6871),l=t(8808),d=t(168),h=t(2499),f=h.Z.div(r||(r=(0,d.Z)(["\n  display: flex;\n"]))),v=h.Z.button(c||(c=(0,d.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n  background-color: #9c9d9d;\n  height: 30px;\n  cursor: pointer;\n  :hover {\n    background-color: #076dc183;\n  }\n"]))),x=h.Z.div(s||(s=(0,d.Z)(["\n  margin-left: 20px;\n"]))),g=h.Z.span(a||(a=(0,d.Z)(["\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('https://cdn-icons-png.flaticon.com/128/725/725004.png');\n  background-position: center;\n  background-size: cover;\n  margin-right: 5px;\n"]))),m=t(184),b=(0,o.lazy)((function(){return t.e(186).then(t.bind(t,186))})),j=(0,o.lazy)((function(){return t.e(247).then(t.bind(t,1247))})),k=function(){var n=(0,p.UO)().movieId,e=(0,o.useState)(null),t=(0,i.Z)(e,2),r=t[0],c=t[1],s=(0,p.s0)();return(0,o.useEffect)((function(){(0,l.Pg)(n).then(c)}),[n]),r&&(0,m.jsxs)("div",{children:[(0,m.jsxs)(f,{children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)(v,{type:"button",onClick:function(){s(-1)},children:[(0,m.jsx)(g,{}),"Go back"]}),(0,m.jsx)("img",{width:"400px",src:"https://image.tmdb.org/t/p/original"+r.backdrop_path,alt:r.tagline})]}),(0,m.jsxs)(x,{children:[(0,m.jsx)("h2",{children:r.title+" (".concat(r.release_date.slice(0,4),")")}),(0,m.jsxs)("p",{children:["User score: ",10*r.vote_average,"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:r.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:r.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsx)(u.OL,{style:function(n){return n.isActive?{color:"#5fbcff"}:void 0},to:"cast",children:"Cast"}),(0,m.jsx)("br",{}),(0,m.jsx)(u.OL,{style:function(n){return n.isActive?{color:"#5fbcff"}:void 0},to:"reviews",children:"Reviews"})]}),(0,m.jsx)("hr",{}),(0,m.jsx)(o.Suspense,{fallback:(0,m.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:(0,m.jsxs)(p.Z5,{children:[(0,m.jsx)(p.AW,{path:"cast",element:(0,m.jsx)(j,{id:n})}),(0,m.jsx)(p.AW,{path:"reviews",element:(0,m.jsx)(b,{id:n})})]})})]})}},8808:function(n,e,t){t.d(e,{M1:function(){return v},Pg:function(){return l},Wf:function(){return h},_L:function(){return u},tx:function(){return g}});var r=t(5861),c=t(7757),s=t.n(c),a=t(4569),i=t.n(a);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="3662e1e1e310f2d86e2df06898df7080";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("trending/movie/week?api_key=".concat(o));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(e,"?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("search/movie?api_key=".concat(o,"&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=379.f4f479b0.chunk.js.map