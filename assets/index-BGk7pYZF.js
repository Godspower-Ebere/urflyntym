function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GradientUpdater-DnyCG2M0.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/AnimatableColor-CYHelTbL.js","assets/AnimationOptions-CyMrmp43.js","assets/OptionsColor-Dw4cktBV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Ckv2XMeu.js";async function i(t,a=!0){await t.addParticleUpdater("gradient",async()=>{const{GradientUpdater:r}=await e(()=>import("./GradientUpdater-DnyCG2M0.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{i as loadGradientUpdater};
