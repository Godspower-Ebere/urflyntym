import{K as l}from"./index-D4bp8kzH.js";const f=2,h=Math.PI*f,r=.5,p=0;function y(a,e,t=p){const n=h/a,s=[];for(let d=0;d<a;d++)s.push({x:Math.cos(d*n+t)*e,y:Math.sin(d*n+t)*e});return s}function R(a,e,t){let o=e[0],i=e[1];const c=e.length;a.moveTo((o.x+i.x)*r,(o.y+i.y)*r);for(let u=1;u<=c;u++)o=i,i=e[(u+1)%c],a.arcTo(o.x,o.y,(o.x+i.x)*r,(o.y+i.y)*r,t)}const x=5,g=5;class M{draw(e){const{context:t,particle:n,radius:s}=e;R(t,y(n.sides,s),n.borderRadius??g)}getSidesCount(e){const t=e.shapeData;return Math.round(l((t==null?void 0:t.sides)??x))}particleInit(e,t){const n=t.shapeData;t.borderRadius=Math.round(l((n==null?void 0:n.radius)??x))*e.retina.pixelRatio}}export{M as RoundedPolygonDrawer};
