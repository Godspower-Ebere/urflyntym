function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InteractivityParticleMaker-DM8G0u4f.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-85LqweV3.js";async function o(t,a=!0){await t.addInteractor("externalParticle",async r=>{const{InteractivityParticleMaker:e}=await i(()=>import("./InteractivityParticleMaker-DM8G0u4f.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{o as loadExternalParticleInteraction};
