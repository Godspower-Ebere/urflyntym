function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-Cx87h0pb.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/ValueWithRandom-B8rmuBsd.js","assets/AnimationOptions-CyMrmp43.js","assets/OptionsColor-Dw4cktBV.js","assets/OptionsUtils-CSZfj2Kc.js","assets/AnimatableColor-CYHelTbL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Ckv2XMeu.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-Cx87h0pb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
