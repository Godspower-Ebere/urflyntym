function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrbitUpdater-BA9DYYRE.js","assets/ValueWithRandom-Yx46bnV-.js","assets/AnimationOptions-BL7I2UTS.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/OptionsColor-DzfDJ0AR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CNoZ-G7i.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-BA9DYYRE.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};
