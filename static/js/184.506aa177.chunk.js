"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[184],{3037:function(t,n,e){e.d(n,{Dx:function(){return p},HC:function(){return f},aV:function(){return l},up:function(){return h}});var r,c,a,u,o=e(168),i=e(501),s=e(2499),p=s.Z.h2(r||(r=(0,o.Z)(["\n  font-size: 32px;\n  color: #003d93;\n  margin: 15px;\n"]))),l=s.Z.ol(c||(c=(0,o.Z)(["\n  padding: 20px 15px;\n  margin: 0;\n  margin-left: 15px;\n"]))),f=s.Z.li(a||(a=(0,o.Z)(["\n  padding: 5px;\n"]))),h=(0,s.Z)(i.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  color: black;\n  :hover {\n    color: #79aaff;\n  }\n"])))},4184:function(t,n,e){e.r(n);var r=e(885),c=e(2791),a=e(5705),u=e(8808),o=e(501),i=e(6871),s=e(3037),p=e(184);n.default=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],l=n[1],f=(0,o.lr)(),h=(0,r.Z)(f,2),d=h[0],v=h[1],x=(0,i.TH)();return(0,c.useEffect)((function(){d.get("query")&&(0,u.Wf)(d.get("query")).then(l)}),[d]),(0,p.jsxs)("div",{children:[(0,p.jsx)(a.J9,{initialValues:{query:""},onSubmit:function(t,n){v(t),n.resetForm()},children:(0,p.jsxs)(a.l0,{children:[(0,p.jsx)(a.gN,{type:"text",name:"query"}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})}),e.length>0&&(0,p.jsx)(s.aV,{children:e.map((function(t){return(0,p.jsx)(s.HC,{children:(0,p.jsx)(s.up,{to:"".concat(t.id),state:{from:x},children:t.title})},t.id)}))})]})}},8808:function(t,n,e){e.d(n,{M1:function(){return v},Pg:function(){return l},Wf:function(){return h},_L:function(){return s},tx:function(){return m}});var r=e(5861),c=e(7757),a=e.n(c),u=e(4569),o=e.n(u);o().defaults.baseURL="https://api.themoviedb.org/3/";var i="3662e1e1e310f2d86e2df06898df7080";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("trending/movie/week?api_key=".concat(i));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("movie/".concat(n,"?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("search/movie?api_key=".concat(i,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("movie/".concat(n,"/credits?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=184.506aa177.chunk.js.map