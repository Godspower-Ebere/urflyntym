function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Repulser-B70ZYo4Y.js","assets/ValueWithRandom-Yx46bnV-.js","assets/AnimationOptions-BL7I2UTS.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CNoZ-G7i.js";async function n(e,t=!0){await e.addInteractor("particlesRepulse",async r=>{const{Repulser:a}=await o(()=>import("./Repulser-B70ZYo4Y.js"),__vite__mapDeps([0,1,2,3,4,5]));return new a(r)},t)}export{n as loadParticlesRepulseInteraction};
