function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Repulser-O3NFGFG0.js","assets/ValueWithRandom-D-ATxKdg.js","assets/AnimationOptions-BENQMe4M.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-85LqweV3.js";async function n(e,t=!0){await e.addInteractor("particlesRepulse",async r=>{const{Repulser:a}=await o(()=>import("./Repulser-O3NFGFG0.js"),__vite__mapDeps([0,1,2,3,4,5]));return new a(r)},t)}export{n as loadParticlesRepulseInteraction};
