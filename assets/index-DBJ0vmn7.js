function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PoissonDiscPlugin-CEvuu5BP.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-85LqweV3.js";async function n(i,o=!0){const{PoissonDiscPlugin:t}=await a(()=>import("./PoissonDiscPlugin-CEvuu5BP.js"),__vite__mapDeps([0,1,2]));await i.addPlugin(new t(i),o)}export{n as loadPoissonDiscPlugin};
