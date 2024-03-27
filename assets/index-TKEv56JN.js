function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SimplexNoiseGenerator-Cjikgde3.js","assets/SimplexNoise-BslOa3yb.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-D4bp8kzH.js";const i="simplexNoise";async function s(e,o=!0){const{SimplexNoiseGenerator:t}=await a(()=>import("./SimplexNoiseGenerator-Cjikgde3.js"),__vite__mapDeps([0,1,2,3]));await e.addPathGenerator(i,new t,o)}export{s as loadSimplexNoisePath,i as simplexNoisePathName};
