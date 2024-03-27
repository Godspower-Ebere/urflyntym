function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrbitUpdater-uXILqGXR.js","assets/ValueWithRandom-B8rmuBsd.js","assets/AnimationOptions-CyMrmp43.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/OptionsColor-Dw4cktBV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Ckv2XMeu.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-uXILqGXR.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};
