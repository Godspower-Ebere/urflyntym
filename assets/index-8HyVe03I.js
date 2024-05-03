function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PerlinNoiseGenerator-B7hU2yDg.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-85LqweV3.js";const i="perlinNoise";async function n(e,o=!0){const{PerlinNoiseGenerator:t}=await a(()=>import("./PerlinNoiseGenerator-B7hU2yDg.js"),__vite__mapDeps([0,1,2]));await e.addPathGenerator(i,new t,o)}export{n as loadPerlinNoisePath,i as perlinNoisePathName};
