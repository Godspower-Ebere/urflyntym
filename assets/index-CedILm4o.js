function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-D0iKr1XJ.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/OptionsColor-Dw4cktBV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Ckv2XMeu.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-D0iKr1XJ.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
