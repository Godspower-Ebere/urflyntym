function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InfectionPlugin-1fEQ1nCX.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/OptionsColor-DzfDJ0AR.js","assets/ParticlesInfecter-Dpzm_gP9.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-CNoZ-G7i.js";async function c(t,i=!0){const{InfectionPlugin:a}=await n(()=>import("./InfectionPlugin-1fEQ1nCX.js"),__vite__mapDeps([0,1,2,3])),o=new a;await t.addPlugin(o,i),await t.addInteractor("particlesInfection",async r=>{const{ParticlesInfecter:e}=await n(()=>import("./ParticlesInfecter-Dpzm_gP9.js"),__vite__mapDeps([4,5,1,2]));return new e(r)},i)}export{c as loadInfectionPlugin};
