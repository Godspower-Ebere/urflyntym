import{Z as l,h as R,K as v,$ as H}from"./index-Ckv2XMeu.js";const f=255,T=2,z=.5;function V(s){const n={r:s.r/f,g:s.g/f,b:s.b/f},o=Math.max(n.r,n.g,n.b),e=Math.min(n.r,n.g,n.b),t=o,a=o-e;let r=0;const h={r:0,g:2,b:4},i=60;t===n.r?r=i*(h.r+(n.g-n.b)/a):t===n.g?r=i*(h.g+(n.b-n.r)/a):t===n.b&&(r=i*(h.b+(n.r-n.g)/a));const u=0,c=t?a/t:u;return{h:r,s:c*l,v:t*l}}function S(s){return{a:s.a,...V(s)}}function y(s,n){return R(M(s),n)}function C(s){const n=s.l/l,o=s.s/l,e=1,t=0,a=n+o*Math.min(n,e-n),r=a?T*(e-n/a):t;return{h:s.h,s:r*l,v:a*l}}function I(s){return{a:s.a,...C(s)}}function M(s){const n=s.v/l,o=s.s/l,e=1,t=0,a=n*(e-o*z),r=!a||a===e?t:(n-a)/Math.min(a,e-a);return{h:s.h,l:a*l,s:r*l}}function A(s){return{a:s.a,...M(s)}}function m(s){const n={b:0,g:0,r:0},o=60,e={h:s.h/o,s:s.s/l,v:s.v/l},t=1,a=2,r=e.v*e.s,h=r*(t-Math.abs(e.h%a-t));let i;const u={min:0,max:1},c={min:1,max:2},x={min:2,max:3},b={min:3,max:4},d={min:4,max:5},p={min:5,max:6};if(e.h>=u.min&&e.h<=u.max?i={r,g:h,b:0}:e.h>c.min&&e.h<=c.max?i={r:h,g:r,b:0}:e.h>x.min&&e.h<=x.max?i={r:0,g:r,b:h}:e.h>b.min&&e.h<=b.max?i={r:0,g:h,b:r}:e.h>d.min&&e.h<=d.max?i={r:h,g:0,b:r}:e.h>p.min&&e.h<=p.max&&(i={r,g:0,b:h}),i){const g=e.v-r;n.r=Math.floor((i.r+g)*f),n.g=Math.floor((i.g+g)*f),n.b=Math.floor((i.b+g)*f)}return n}function F(s){return{a:s.a,...m(s)}}class k{constructor(){this.key="hsv",this.stringPrefix="hsv"}handleColor(n){const o=n.value,e=o.hsv??n.value;if(e.h!==void 0&&e.v!==void 0)return m(e)}handleRangeColor(n){const o=n.value,e=o.hsv??n.value;if(e.h!==void 0&&e.v!==void 0)return m({h:v(e.h),s:v(e.s),v:v(e.v)})}parseString(n){if(!n.startsWith("hsv"))return;const o=/hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,e=o.exec(n),t=4,a={h:1,s:2,v:3,a:5},r=1,h=10;return e?F({a:e.length>t?H(e[a.a]):r,h:parseInt(e[a.h],h),s:parseInt(e[a.s],h),v:parseInt(e[a.v],h)}):void 0}}export{k as HsvColorManager,y as getStyleFromHsv,C as hslToHsv,I as hslaToHsva,M as hsvToHsl,m as hsvToRgb,A as hsvaToHsla,F as hsvaToRgba,V as rgbToHsv,S as rgbaToHsva};