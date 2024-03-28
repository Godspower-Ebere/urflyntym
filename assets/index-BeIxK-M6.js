function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-C_LnoQTt.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/OptionsColor-DzfDJ0AR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CNoZ-G7i.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-C_LnoQTt.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
