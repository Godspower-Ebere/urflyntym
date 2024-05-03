function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InfectionPlugin-D1JCSi4W.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/OptionsColor-8A9h-hK8.js","assets/ParticlesInfecter-CdebvATA.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-85LqweV3.js";async function c(t,i=!0){const{InfectionPlugin:a}=await n(()=>import("./InfectionPlugin-D1JCSi4W.js"),__vite__mapDeps([0,1,2,3])),o=new a;await t.addPlugin(o,i),await t.addInteractor("particlesInfection",async r=>{const{ParticlesInfecter:e}=await n(()=>import("./ParticlesInfecter-CdebvATA.js"),__vite__mapDeps([4,5,1,2]));return new e(r)},i)}export{c as loadInfectionPlugin};
