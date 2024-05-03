function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrbitUpdater-Cv9Kg1y_.js","assets/ValueWithRandom-D-ATxKdg.js","assets/AnimationOptions-BENQMe4M.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/OptionsColor-8A9h-hK8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-85LqweV3.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-Cv9Kg1y_.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};
