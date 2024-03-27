function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExternalLighter-0qLLqkWO.js","assets/Utils-BzdkHbwa.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-DC-4w5Ss.js","assets/ParticlesLighter-CJA_Bu-8.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D4bp8kzH.js";import{O as i}from"./OptionsColor-DC-4w5Ss.js";class a{constructor(){this.start=new i,this.stop=new i,this.start.value="#ffffff",this.stop.value="#000000"}load(t){t&&(this.start=i.create(this.start,t.start),this.stop=i.create(this.stop,t.stop))}}class n{constructor(){this.gradient=new a,this.radius=1e3}load(t){t&&(this.gradient.load(t.gradient),t.radius!==void 0&&(this.radius=t.radius))}}class h{constructor(){this.color=new i,this.color.value="#000000",this.length=2e3}load(t){t&&(this.color=i.create(this.color,t.color),t.length!==void 0&&(this.length=t.length))}}class u{constructor(){this.area=new n,this.shadow=new h}load(t){t&&(this.area.load(t.area),this.shadow.load(t.shadow))}}async function d(r,t=!0){await r.addInteractor("externalLight",async s=>{const{ExternalLighter:o}=await e(()=>import("./ExternalLighter-0qLLqkWO.js"),__vite__mapDeps([0,1,2,3,4,5]));return new o(s)},t),await r.addInteractor("particlesLight",async s=>{const{ParticlesLighter:o}=await e(()=>import("./ParticlesLighter-CJA_Bu-8.js"),__vite__mapDeps([6,1,2,3,7]));return new o(s)},t)}export{u as Light,n as LightArea,a as LightGradient,h as LightShadow,d as loadLightInteraction};
