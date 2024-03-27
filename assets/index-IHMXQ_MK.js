function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-Cp6BAA58.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css","assets/OptionsColor-DC-4w5Ss.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D4bp8kzH.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-Cp6BAA58.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
