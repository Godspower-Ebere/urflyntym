function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DSMUP_X0.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/ValueWithRandom-B8rmuBsd.js","assets/AnimationOptions-CyMrmp43.js","assets/OptionsColor-Dw4cktBV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Ckv2XMeu.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DSMUP_X0.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
