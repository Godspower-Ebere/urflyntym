import{J as c,K as l}from"./index-Ckv2XMeu.js";const d=180,r={x:0,y:0},h=2;function m(s,n,t){const{context:e}=s,a=t.count.numerator*t.count.denominator,o=t.count.numerator/t.count.denominator,g=d*(o-h)/o,u=Math.PI-c(g);if(e){e.beginPath(),e.translate(n.x,n.y),e.moveTo(r.x,r.y);for(let i=0;i<a;i++)e.lineTo(t.length,r.y),e.translate(t.length,r.y),e.rotate(u)}}const f=5;class x{draw(n){const{particle:t,radius:e}=n,a=this.getCenter(t,e),o=this.getSidesData(t,e);m(n,a,o)}getSidesCount(n){const t=n.shapeData;return Math.round(l((t==null?void 0:t.sides)??f))}}export{x as P};