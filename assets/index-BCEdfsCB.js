function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GradientUpdater-YjAVwXBe.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/AnimatableColor-BwF9Eq3I.js","assets/AnimationOptions-BENQMe4M.js","assets/OptionsColor-8A9h-hK8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-85LqweV3.js";async function i(t,a=!0){await t.addParticleUpdater("gradient",async()=>{const{GradientUpdater:r}=await e(()=>import("./GradientUpdater-YjAVwXBe.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{i as loadGradientUpdater};
