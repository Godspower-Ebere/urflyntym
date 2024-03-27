function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PoissonDiscPlugin-CnPS6Ous.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-Ckv2XMeu.js";async function n(i,o=!0){const{PoissonDiscPlugin:t}=await a(()=>import("./PoissonDiscPlugin-CnPS6Ous.js"),__vite__mapDeps([0,1,2]));await i.addPlugin(new t(i),o)}export{n as loadPoissonDiscPlugin};
