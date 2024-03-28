function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorberInstance-fxoHeJOn.js","assets/AbsorbersPlugin-BElBXHVU.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/ValueWithRandom-Yx46bnV-.js","assets/AnimationOptions-BL7I2UTS.js","assets/OptionsColor-DzfDJ0AR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{X as n,_ as c,e as i,g as d}from"./index-CNoZ-G7i.js";const a=0;class l{constructor(r){this.container=r,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],r.getAbsorber=s=>s===void 0||n(s)?this.array[s??a]:this.array.find(t=>t.name===s),r.addAbsorber=async(s,t)=>this.addAbsorber(s,t)}async addAbsorber(r,s){const{AbsorberInstance:t}=await c(()=>import("./AbsorberInstance-fxoHeJOn.js"),__vite__mapDeps([0,1,2,3,4,5,6])),e=new t(this,this.container,r,s);return this.array.push(e),e}draw(r){for(const s of this.array)s.draw(r)}handleClickMode(r){const s=this.absorbers,t=this.interactivityAbsorbers;if(r==="absorber"){const e=i(t),o=e??i(s),b=this.container.interactivity.mouse.clickPosition;this.addAbsorber(o,b)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers;const r=d(this.absorbers,async s=>{await this.addAbsorber(s)});r instanceof Array?await Promise.all(r):await r}particleUpdate(r){for(const s of this.array)if(s.attract(r),r.destroyed)break}removeAbsorber(r){const s=this.array.indexOf(r);s>=a&&this.array.splice(s,1)}resize(){for(const r of this.array)r.resize()}stop(){this.array=[]}}export{l as Absorbers};