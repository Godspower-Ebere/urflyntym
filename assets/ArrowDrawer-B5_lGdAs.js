import{K as c}from"./index-D4bp8kzH.js";const H=2,u=.5,f=.2,T=.5,t=.5,n={x:0,y:0};function W(F){const{context:o,particle:d,radius:e}=F,i=e*H,g=d.heightFactor??u,l=d.headWidthFactor??f,y=d.bodyHeightFactor??T,a=i*g,r=i*l,h=a*y;o.moveTo(-i*t,n.y),o.lineTo(-i*t,-h*t),o.lineTo(i*t-r,-h*t),o.lineTo(i*t-r,-a*t),o.lineTo(i*t+r,n.y),o.lineTo(i*t-r,a*t),o.lineTo(i*t-r,h*t),o.lineTo(-i*t,h*t),o.lineTo(-i*t,n.y)}const b=.5,w=.2,s=.5;class x{draw(o){W(o)}particleInit(o,d){const e=d.shapeData;d.heightFactor=c((e==null?void 0:e.heightFactor)??b),d.headWidthFactor=c((e==null?void 0:e.headWidthFactor)??w),d.bodyHeightFactor=c((e==null?void 0:e.bodyHeightFactor)??s)}}export{x as ArrowDrawer};
