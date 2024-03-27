function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrbitUpdater-D0RVgT1E.js","assets/ValueWithRandom-DT4LTwNn.js","assets/AnimationOptions-BEsSC0Hd.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css","assets/OptionsColor-DC-4w5Ss.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D4bp8kzH.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-D0RVgT1E.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};
