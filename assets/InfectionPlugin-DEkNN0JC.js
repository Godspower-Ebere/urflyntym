function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InfectionInstance-CQMLJzVz.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D4bp8kzH.js";import{O as s}from"./OptionsColor-DC-4w5Ss.js";class f{constructor(){this.color=new s,this.color.value="#ff0000",this.radius=0,this.rate=1}load(e){e!==void 0&&(e.color!==void 0&&(this.color=s.create(this.color,e.color)),this.duration=e.duration,this.infectedStage=e.infectedStage,e.radius!==void 0&&(this.radius=e.radius),e.rate!==void 0&&(this.rate=e.rate))}}class l{constructor(){this.cure=!1,this.delay=0,this.enable=!1,this.infections=0,this.stages=[]}load(e){e!==void 0&&(e.cure!==void 0&&(this.cure=e.cure),e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable),e.infections!==void 0&&(this.infections=e.infections),e.stages!==void 0&&(this.stages=e.stages.map(i=>{const n=new f;return n.load(i),n})))}}class u{constructor(){this.id="infection"}async getPlugin(e){const{InfectionInstance:i}=await r(()=>import("./InfectionInstance-CQMLJzVz.js"),__vite__mapDeps([0,1,2]));return new i(e)}loadOptions(e,i){if(!this.needsPlugin(e)&&!this.needsPlugin(i))return;let n=e.infection;(n==null?void 0:n.load)===void 0&&(e.infection=n=new l),n.load(i==null?void 0:i.infection)}needsPlugin(e){var i;return((i=e==null?void 0:e.infection)==null?void 0:i.enable)??!1}}export{u as InfectionPlugin};
