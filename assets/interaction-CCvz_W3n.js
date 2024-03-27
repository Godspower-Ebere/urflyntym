function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-mqZlaVLT.js","assets/Ranges-B9qM6z2l.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css","assets/index-C0v7HiBT.js","assets/OptionsColor-DC-4w5Ss.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D4bp8kzH.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-mqZlaVLT.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
