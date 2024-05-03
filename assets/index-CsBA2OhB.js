function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SimplexNoiseGenerator-BJzk3EZN.js","assets/SimplexNoise-BslOa3yb.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-85LqweV3.js";const i="simplexNoise";async function s(e,o=!0){const{SimplexNoiseGenerator:t}=await a(()=>import("./SimplexNoiseGenerator-BJzk3EZN.js"),__vite__mapDeps([0,1,2,3]));await e.addPathGenerator(i,new t,o)}export{s as loadSimplexNoisePath,i as simplexNoisePathName};
