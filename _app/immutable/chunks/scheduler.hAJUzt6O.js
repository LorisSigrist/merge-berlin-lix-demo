function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function z(){return Object.create(null)}function v(t){t.forEach(j)}function C(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return y(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(y(n,e))}function A(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let s=0;s<f;s+=1)a[s]=n.dirty[s]|r[s];return a}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,a){if(r){const f=m(n,e,o,a);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let i;function _(t){i=t}function p(){if(!i)throw new Error("Function called outside component initialization");return i}function H(t){p().$$.on_mount.push(t)}function I(t){p().$$.after_update.push(t)}function J(t,n){return p().$$.context.set(t,n),n}const l=[],g=[];let u=[];const b=[],x=Promise.resolve();let h=!1;function E(){h||(h=!0,x.then(q))}function K(){return E(),x}function O(t){u.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<l.length;){const n=l[c];c++,_(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(_(null),l.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;b.length;)b.pop()();h=!1,d.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function L(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{I as a,g as b,U as c,z as d,P as e,q as f,O as g,L as h,C as i,i as j,_ as k,j as l,l as m,k as n,H as o,E as p,J as q,v as r,F as s,K as t,A as u,D as v,G as w,B as x,S as y};
