import{p as e}from"./index-D4bp8kzH.js";const S={max:1,min:0},T=.5,C=2,b=Math.PI*T,x=Math.PI*C,R=.25,q=Math.PI*R,m=0,F="light";function G(h,a,i){var d;const r=(d=h.actualOptions.interactivity.modes.light)==null?void 0:d.area;if(!r)return;a.beginPath(),a.arc(i.x,i.y,r.radius,m,x);const l=a.createRadialGradient(i.x,i.y,m,i.x,i.y,r.radius),o=h.canvas.mouseLight;!(o!=null&&o.start)||!o.stop||(l.addColorStop(S.min,e(o.start)),l.addColorStop(S.max,e(o.stop)),a.fillStyle=l,a.fill())}function j(h,a,i,r){var M;const l=i.getPosition(),o=(M=h.actualOptions.interactivity.modes.light)==null?void 0:M.shadow;if(!o)return;const d=i.lightShadow;if(!d)return;const f=i.getRadius(),g=i.sides,y=x/g,u=-i.rotation+q,c=1,p=[];for(let t=0;t<g;t++)p.push({x:l.x+f*Math.sin(u+y*t)*c,y:l.y+f*Math.cos(u+y*t)*c});const s=[],w=o.length;for(const t of p){const n=Math.atan2(r.y-t.y,r.x-t.x),L={x:t.x+w*Math.sin(-n-b),y:t.y+w*Math.cos(-n-b)};s.push({end:L,start:t})}const I=e(d),P=1,O=0,v=s.length-P;for(let t=v,n=0;t>=O;n=t--)a.beginPath(),a.moveTo(s[t].start.x,s[t].start.y),a.lineTo(s[n].start.x,s[n].start.y),a.lineTo(s[n].end.x,s[n].end.y),a.lineTo(s[t].end.x,s[t].end.y),a.fillStyle=I,a.fill()}export{j as a,G as d,F as l};
