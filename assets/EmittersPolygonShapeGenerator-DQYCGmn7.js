import{M as a,J as y}from"./index-CNoZ-G7i.js";import{E as c}from"./EmitterShapeBase-4KcS34Iy.js";const x=2,d=Math.PI*x,g=0,u=100;function f(o,t,e,s=g){const n=[],r=d/t;for(let i=0;i<t;i++){const l=r*i+s;n.push({x:o.x+e*Math.cos(l),y:o.y+e*Math.sin(l)})}return n}function m(o){const e=o[0],s={...e},n={...e};for(const i of o)i.x<s.x&&(s.x=i.x),i.x>n.x&&(n.x=i.x),i.y<s.y&&(s.y=i.y),i.y>n.y&&(n.y=i.y);let r=null;for(let i=0;i<u;i++){const l={x:s.x+a()*(n.x-s.x),y:s.y+a()*(n.y-s.y)};if(p(l,o)){r=l;break}}return r}function P(o){const t=Math.floor(a()*o.length),e=o[t],s=1,n=o[(t+s)%o.length],r=a();return{x:e.x+(n.x-e.x)*r,y:e.y+(n.y-e.y)*r}}function p(o,t){let e=!1;const s=1;for(let n=0,r=t.length-s;n<t.length;r=n++){const i=t[n],l=t[r];i.y>o.y!=l.y>o.y&&o.x<(l.x-i.x)*(o.y-i.y)/(l.y-i.y)+i.x&&(e=!e)}return e}const h=.5;class I extends c{constructor(t,e,s,n){super(t,e,s,n),this.sides=n.sides,this.angle=y(n.angle),this.polygon=f(t,this.sides,e.width*h,this.angle)}async init(){}randomPosition(){const t=this.fill,e=this.polygon,s=t?m(e):P(e);return s?{position:s}:null}resize(t,e){super.resize(t,e),this.polygon=f(t,this.sides,e.width*h,this.angle)}}class R{constructor(){this.angle=0,this.sides=5}load(t){t&&(t.angle!==void 0&&(this.angle=t.angle),t.sides!==void 0&&(this.sides=t.sides))}}class S{generate(t,e,s,n){const r=new R;return r.load(n),new I(t,e,s,r)}}export{S as EmittersPolygonShapeGenerator};
