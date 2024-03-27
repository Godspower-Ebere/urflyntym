function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PerlinNoiseGenerator-B72KF0VL.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-Ckv2XMeu.js";const i="perlinNoise";async function n(e,o=!0){const{PerlinNoiseGenerator:t}=await a(()=>import("./PerlinNoiseGenerator-B72KF0VL.js"),__vite__mapDeps([0,1,2]));await e.addPathGenerator(i,new t,o)}export{n as loadPerlinNoisePath,i as perlinNoisePathName};
