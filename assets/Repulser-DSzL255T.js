import{V as y}from"./ValueWithRandom-DT4LTwNn.js";import{s as c,K as a,a2 as V,O as R,R as l}from"./index-D4bp8kzH.js";import{P as b}from"./ParticlesInteractorBase-vfDeBun3.js";import"./AnimationOptions-BEsSC0Hd.js";class g extends y{constructor(){super(),this.enabled=!1,this.distance=1,this.duration=1,this.factor=1,this.speed=1}load(e){super.load(e),e&&(e.enabled!==void 0&&(this.enabled=e.enabled),e.distance!==void 0&&(this.distance=c(e.distance)),e.duration!==void 0&&(this.duration=c(e.duration)),e.factor!==void 0&&(this.factor=c(e.factor)),e.speed!==void 0&&(this.speed=c(e.speed)))}}const x=0,P=1,q=2,O=0;class E extends b{constructor(e){super(e)}clear(){}init(){}interact(e){const t=this.container;if(!e.repulse){const s=e.options.repulse;if(!s)return;e.repulse={distance:a(s.distance)*t.retina.pixelRatio,speed:a(s.speed),factor:a(s.factor)}}const i=e.getPosition(),u=t.particles.quadTree.queryCircle(i,e.repulse.distance);for(const s of u){if(e===s||s.destroyed)continue;const p=s.getPosition(),{dx:f,dy:h,distance:r}=V(p,i),n=e.repulse.speed*e.repulse.factor;if(r>x){const o=R((P-Math.pow(r/e.repulse.distance,q))*n,O,n),m=l.create(f/r*o,h/r*o);s.position.addTo(m)}else{const o=l.create(n,n);s.position.addTo(o)}}}isEnabled(e){var t;return((t=e.options.repulse)==null?void 0:t.enabled)??!1}loadParticlesOptions(e,...t){e.repulse||(e.repulse=new g);for(const i of t)e.repulse.load(i==null?void 0:i.repulse)}reset(){}}export{E as Repulser};
