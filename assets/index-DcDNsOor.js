function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PoissonDiscPlugin-BTTpfZoC.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-D4bp8kzH.js";async function n(i,o=!0){const{PoissonDiscPlugin:t}=await a(()=>import("./PoissonDiscPlugin-BTTpfZoC.js"),__vite__mapDeps([0,1,2]));await i.addPlugin(new t(i),o)}export{n as loadPoissonDiscPlugin};
