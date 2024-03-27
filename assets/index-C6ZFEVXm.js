function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GradientUpdater-D3geKYgf.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css","assets/AnimatableColor-o27ENkas.js","assets/AnimationOptions-BEsSC0Hd.js","assets/OptionsColor-DC-4w5Ss.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D4bp8kzH.js";async function i(t,a=!0){await t.addParticleUpdater("gradient",async()=>{const{GradientUpdater:r}=await e(()=>import("./GradientUpdater-D3geKYgf.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{i as loadGradientUpdater};
