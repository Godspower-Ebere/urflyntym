import{S as c}from"./SimplexNoise-BslOa3yb.js";import{d as y,R as b,M as f}from"./index-CNoZ-G7i.js";const p={speed:.2,step:250},d=2;class u{constructor(){const s=new c;this._simplex=s.noise2d,this.options=y({},p)}generate(s){const e=s.getPosition(),{speed:n,step:a}=this.options,i=e.x/a,o=e.y/a,t=.001,l=this._simplex.noise(i,o+t),m=this._simplex.noise(i,o-t),x=(l-m)/(d*t),h=this._simplex.noise(i+t,o),r=this._simplex.noise(i-t,o),_=(h-r)/(d*t);return s.velocity.x=0,s.velocity.y=0,b.create(n*x,n*-_)}init(s){const e=s.actualOptions.particles.move.path.options;this.options.seed=e==null?void 0:e.seed,this.options.speed=((e==null?void 0:e.speed)??p.speed)*s.retina.pixelRatio,this.options.step=(e==null?void 0:e.step)??p.step,this._simplex.seed(this.options.seed??f())}reset(){}update(){}}export{u as CurlNoiseGenerator};
