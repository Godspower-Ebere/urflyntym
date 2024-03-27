function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InfectionPlugin-C3ybI2Bd.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/OptionsColor-Dw4cktBV.js","assets/ParticlesInfecter-DxWwfcYJ.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-Ckv2XMeu.js";async function c(t,i=!0){const{InfectionPlugin:a}=await n(()=>import("./InfectionPlugin-C3ybI2Bd.js"),__vite__mapDeps([0,1,2,3])),o=new a;await t.addPlugin(o,i),await t.addInteractor("particlesInfection",async r=>{const{ParticlesInfecter:e}=await n(()=>import("./ParticlesInfecter-DxWwfcYJ.js"),__vite__mapDeps([4,5,1,2]));return new e(r)},i)}export{c as loadInfectionPlugin};
