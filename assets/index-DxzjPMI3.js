function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-C96WNDWo.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/ValueWithRandom-D-ATxKdg.js","assets/AnimationOptions-BENQMe4M.js","assets/OptionsColor-8A9h-hK8.js","assets/OptionsUtils-Bb34xIow.js","assets/AnimatableColor-BwF9Eq3I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-85LqweV3.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-C96WNDWo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
