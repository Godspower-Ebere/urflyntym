function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InteractivityParticleMaker-CXMhSw50.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CNoZ-G7i.js";async function o(t,a=!0){await t.addInteractor("externalParticle",async r=>{const{InteractivityParticleMaker:e}=await i(()=>import("./InteractivityParticleMaker-CXMhSw50.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{o as loadExternalParticleInteraction};
