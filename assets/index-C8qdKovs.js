function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Repulser-gxYmtCvm.js","assets/ValueWithRandom-B8rmuBsd.js","assets/AnimationOptions-CyMrmp43.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Ckv2XMeu.js";async function n(e,t=!0){await e.addInteractor("particlesRepulse",async r=>{const{Repulser:a}=await o(()=>import("./Repulser-gxYmtCvm.js"),__vite__mapDeps([0,1,2,3,4,5]));return new a(r)},t)}export{n as loadParticlesRepulseInteraction};
