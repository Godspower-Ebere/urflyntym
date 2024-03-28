function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GradientUpdater-ny3oFgQn.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/AnimatableColor-3r6PZ3Fu.js","assets/AnimationOptions-BL7I2UTS.js","assets/OptionsColor-DzfDJ0AR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CNoZ-G7i.js";async function i(t,a=!0){await t.addParticleUpdater("gradient",async()=>{const{GradientUpdater:r}=await e(()=>import("./GradientUpdater-ny3oFgQn.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{i as loadGradientUpdater};
