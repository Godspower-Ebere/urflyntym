function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CtZbwqcC.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/OptionsColor-8A9h-hK8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-85LqweV3.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CtZbwqcC.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
