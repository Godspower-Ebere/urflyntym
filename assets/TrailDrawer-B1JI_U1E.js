import{K as p}from"./index-Ckv2XMeu.js";const L=2,T=2,w=1,R=0,y=.5,A=-1,P=10,v=1;class z{draw(o){const{context:t,radius:a,particle:i}=o,m=a*L,W=i.container.retina.pixelRatio,h=i.getPosition();if(!i.trail||!i.trailLength)return;const c=i.trailLength+a;if(i.trail.push({color:t.fillStyle??t.strokeStyle,position:{x:h.x,y:h.y}}),i.trail.length<T)return;for(;i.trail.length>c;)i.trail.shift();const s=Math.min(i.trail.length,c),d={x:h.x,y:h.y},l={width:i.container.canvas.size.width+m,height:i.container.canvas.size.height+m};let n=i.trail[s-w].position;const x={a:1,b:0,c:0,d:1};t.setTransform(x.a,x.b,x.c,x.d,h.x,h.y);for(let r=s;r>R;r--){const u=i.trail[r-w],e=u.position;t.beginPath(),t.moveTo(n.x-d.x,n.y-d.y);const b={x:(n.x+l.width)%l.width,y:(n.y+l.height)%l.height};if(Math.abs(n.x-e.x)>l.width*y||Math.abs(n.y-e.y)>l.height*y){n=e;continue}t.lineTo((Math.abs(n.x-e.x)>l.width*y?b.x:e.x)-d.x,(Math.abs(n.y-e.y)>l.height*y?b.y:e.y)-d.y);const M=Math.max(r/s*m,W,i.trailMinWidth??A),f=t.globalAlpha;t.globalAlpha=i.trailFade?r/s:v,t.lineWidth=i.trailMaxWidth?Math.min(M,i.trailMaxWidth):M,t.strokeStyle=u.color,t.stroke(),t.globalAlpha=f,n=e}const{transformData:g}=o;t.setTransform(g.a,g.b,g.c,g.d,h.x,h.y)}particleInit(o,t){t.trail=[];const a=t.effectData;t.trailFade=(a==null?void 0:a.fade)??!0,t.trailLength=p((a==null?void 0:a.length)??P)*o.retina.pixelRatio,t.trailMaxWidth=a!=null&&a.maxWidth?p(a.maxWidth)*o.retina.pixelRatio:void 0,t.trailMinWidth=a!=null&&a.minWidth?p(a.minWidth)*o.retina.pixelRatio:void 0}}export{z as TrailDrawer};