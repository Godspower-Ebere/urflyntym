import{M as m,N as w,a6 as y}from"./index-CNoZ-G7i.js";const p=2,M=Math.PI*p;class z{constructor(t,i,s,n,e){this.size={...t},this.radius=i,this.retries=s,this.dimensions=n,this.cellSize=Math.floor(this.radius/Math.sqrt(this.dimensions)),this.cols=Math.floor(this.size.width/this.cellSize),this.rows=Math.floor(this.size.height/this.cellSize),this.points=[],this.active=[],this.grid=[],this.firstPoint=e?{...e}:void 0,this.reset()}addPoint(t){const i={position:{...t},gridPosition:{x:Math.floor(t.x/this.cellSize),y:Math.floor(t.y/this.cellSize)}},s=this.points.length;this.points.push(i),this.grid[i.gridPosition.y][i.gridPosition.x]=s,this.active.push(s)}getRandom(t,i){return Math.floor(m()*(i-t))+t}initialiseGrid(){for(let t=0;t<=this.rows;t++){this.grid[t]=[];for(let i=0;i<=this.cols;i++)this.grid[t][i]=-1}}reset(){this.points=[],this.active=[],this.grid=[],this.initialiseGrid(),this.firstPoint?this.addPoint(this.firstPoint):this.addPoint({x:this.getRandom(0,this.size.width),y:this.getRandom(0,this.size.height)})}async run(){this.reset();const t=0,i=1;for(;this.active.length>t;)await this.steps(i)}async steps(t){for(let s=0;s<t;s++)this.active.length<=0||await this._step()}_getNewPoint(t,i){const a=i*(M/this.retries),l=this.getRandom(this.radius,this.radius*p),u={x:Math.cos(a)*l,y:Math.sin(a)*l},r={x:Math.floor(t.position.x+u.x),y:Math.floor(t.position.y+u.y)},h={x:Math.floor(r.x/this.cellSize),y:Math.floor(r.y/this.cellSize)};if(r.x>0&&r.x<this.size.width&&r.y>0&&r.y<this.size.height)if(this.grid[h.y][h.x]<0)for(let c=-1;c<=1;c++)for(let d=-1;d<=1;d++){const o={x:h.x+d,y:h.y+c};if(o.x>=0&&o.y>=0&&o.x<this.cols&&o.y<this.rows&&(o.x!==h.x||o.y!==h.y)&&this.grid[o.y][o.x]>=0){const f=this.grid[o.y][o.x],x=this.points[f];if(w(r,x.position)<this.radius)return}}else return;else return;return r}async _step(){const i=this.getRandom(0,this.active.length);return new Promise(s=>{let n=!1;for(let e=0;e<this.retries;e++){const a=this._getNewPoint(this.points[this.active[i]],e);if(a){n=!0,this.addPoint(a);break}}n||this.active.splice(i,1),s()})}}class _{constructor(t,i){this._container=t,this._engine=i,this._currentIndex=0}async init(){await this._initData()}particlePosition(t){var n,e;const i=this._container,s=i.actualOptions.poisson;if(!(!this.poissonDisc||!((s==null?void 0:s.enable)??!1)||this._currentIndex>=this.poissonDisc.points.length))return t??((e=(n=this.poissonDisc)==null?void 0:n.points[this._currentIndex++])==null?void 0:e.position)}resize(){const t=this._container,i=t.actualOptions.poisson;if(!((i==null?void 0:i.enable)??!1))return;this.redrawTimeout&&clearTimeout(this.redrawTimeout);const s=250;this.redrawTimeout=window.setTimeout(()=>{(async()=>(await this._initData(),await t.particles.redraw()))()},s)}stop(){delete this.poissonDisc}async _initData(){const t=this._container,i=t.actualOptions.poisson,s=t.actualOptions.particles,n=t.canvas.size,e=t.retina.pixelRatio;if(!(i!=null&&i.enable))return;this._currentIndex=0,this.poissonDisc=new z(n,i.radius?i.radius*e:Math.max(y(s.size.value)*e,Math.sqrt(n.width*n.height/s.number.value)),i.retries,i.dimensions),i.steps>0?await this.poissonDisc.steps(i.steps):await this.poissonDisc.run()}}export{_ as PoissonInstance};
