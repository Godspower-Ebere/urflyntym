import{M as l,k as g,Z as x}from"./index-CNoZ-G7i.js";import{E as D}from"./EmitterShapeBase-4KcS34Iy.js";const w=100,m=.5;function E(c,n,t,o){let i=null;for(let e=0;e<w;e++){const h={x:t.x+l()*o.width-o.width*m,y:t.y+l()*o.height-o.height*m};if(c.isPointInPath(n,h.x,h.y)){i=h;break}}return i}function k(c,n,t,o){let i=null;for(let e=0;e<w;e++){const h={x:t.x+l()*o.width-o.width*m,y:t.y+l()*o.height-o.height*m};if(c.isPointInStroke(n,h.x,h.y)){i=h;break}}return i}const d=.5;class T extends D{constructor(n,t,o,i){super(n,t,o,i);const e=document.createElement("canvas").getContext("2d");if(!e)throw new Error(`${g} No 2d context available`);this.checkContext=e,this.points=i.points;const h=this.points,a=new Path2D,s={x:n.x-t.width*d,y:n.y-t.height*d};for(const[f,P]of h.entries()){const y={x:s.x+P.x*t.width/x,y:s.y+P.y*t.height/x};f?a.lineTo(y.x,y.y):a.moveTo(y.x,y.y)}const p=0,r=h[p];if(r){const f={x:s.x+r.x*t.width/x,y:s.y+r.y*t.height/x};a.lineTo(f.x,f.y)}this.path=a}async init(){}randomPosition(){const n=this.checkContext,t=this.position,o=this.size,i=this.fill,e=this.path,h=i?E(n,e,t,o):k(n,e,t,o);return h?{position:h}:null}resize(n,t){super.resize(n,t);const o=this.points,i=new Path2D,e={x:n.x-t.width*d,y:n.y-t.height*d};for(const[s,p]of o.entries()){const r={x:e.x+p.x*t.width/x,y:e.y+p.y*t.height/x};s?i.lineTo(r.x,r.y):i.moveTo(r.x,r.y)}const h=0,a=o[h];if(a){const s={x:e.x+a.x*t.width/x,y:e.y+a.y*t.height/x};i.lineTo(s.x,s.y)}this.path=i}}const u={x:50,y:50};class S{constructor(){this.points=[]}load(n){n&&n.points!==void 0&&(this.points=n.points.map(t=>({x:t.x??u.x,y:t.y??u.y})))}}class b{generate(n,t,o,i){const e=new S;return e.load(i),new T(n,t,o,e)}}export{b as EmittersPathShapeGenerator};
