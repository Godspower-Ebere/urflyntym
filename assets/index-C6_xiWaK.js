function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InteractivityParticleMaker-DBpFidW8.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Ckv2XMeu.js";async function o(t,a=!0){await t.addInteractor("externalParticle",async r=>{const{InteractivityParticleMaker:e}=await i(()=>import("./InteractivityParticleMaker-DBpFidW8.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{o as loadExternalParticleInteraction};
